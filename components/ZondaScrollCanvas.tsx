'use client';

import { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface ZondaScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
}

export default function ZondaScrollCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
}: ZondaScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

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

        // Handle high DPI
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // Reset transform to avoid accumulation
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        const img = images[index];

        // Contain logic equivalent to object-fit: contain
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

        // Clear and draw
        // Note: setting width/height clears canvas automatically but explicit clear is safe
        // ctx.clearRect(0, 0, rect.width, rect.height); 

        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    };

    // Subscribe to scroll changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * totalFrames)
        );

        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Initial draw once loaded
    useEffect(() => {
        if (isLoaded) {
            drawFrame(0);
        }
    }, [isLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 0 }}
        />
    );
}
