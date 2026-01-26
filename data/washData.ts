export const WASH_DATA = {
    phases: {
        problem: {
            headline: "Car Washes Shouldn’t Be a Chore",
            subtext: "Time wasted. Money wasted. Stop the cycle.",
        },
        solution: {
            headline: "Unlimited Car Washes. One Monthly Price.",
            subtext: "Always clean. always ready.",
        },
        value: {
            cards: [
                { title: "Wash Anytime", desc: "Unlimited access to all our locations 24/7." },
                { title: "Cancel Anytime", desc: "No contracts. No hidden fees. Total freedom." },
                { title: "No Per-Wash Charges", desc: "Pay once, wash as much as you want." },
            ]
        }
    },
    plans: [
        {
            name: "Essential",
            price: "$19",
            period: "/month",
            features: ["Exterior Wash", "Wheel Shine", "Free Vacuums"],
            popular: false,
        },
        {
            name: "Premium",
            price: "$29",
            period: "/month",
            features: ["Essential +", "Wax Polish", "Tire Gloss", "Rain Repellent"],
            popular: true,
        },
        {
            name: "Ultimate",
            price: "$39",
            period: "/month",
            features: ["Premium +", "Ceramic Shield", "Underbody Wash", "Air Freshener"],
            popular: false,
        },
    ]
};
