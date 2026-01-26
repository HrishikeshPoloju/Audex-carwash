'use client';

import { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent, useTransform, motion } from 'framer-motion';

interface HeroCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
}

export default function HeroCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
}: HeroCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Dirt effect opacity: Starts full, fades out by 50% scroll
    const dirtOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.8, 0.6, 0]);

    // Foam effect: Flashes briefly between 25-40%
    const foamOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 0.6, 0.6, 0]);
    const foamY = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${imageFolderPath}/${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, [totalFrames, imageFolderPath]);

    // Draw frame
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        const img = images[index];
        const canvasAspect = rect.width / rect.height;
        const imgAspect = img.width / img.height;

        let renderW, renderH, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            renderH = rect.height;
            renderW = img.width * (rect.height / img.height);
            offsetX = (rect.width - renderW) / 2;
            offsetY = 0;
        } else {
            renderW = rect.width;
            renderH = img.height * (rect.width / img.width);
            offsetX = 0;
            offsetY = (rect.height - renderH) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        const frameIndex = Math.min(totalFrames - 1, Math.floor(latest * totalFrames));
        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    useEffect(() => {
        if (isLoaded) drawFrame(0);
    }, [isLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="absolute inset-0 w-full h-full">
            {/* Base Canvas - The Car */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-contain [mask-image:radial-gradient(circle,black_40%,transparent_100%)] md:[mask-image:radial-gradient(closest-side,black_60%,transparent_100%)]"
                style={{ zIndex: 0 }}
            />
        </div>
    );
}
