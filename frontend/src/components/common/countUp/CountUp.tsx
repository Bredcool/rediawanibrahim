import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    value: number;
    duration?: number;
    suffix?: string;
    color?: string;
}

export default function CountUp({
    value,
    duration = 1.5,
    suffix = "",
    color = "var(--primary)",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);

    const isInView = useInView(ref, {
        once: true,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration,
            onUpdate(latest) {
                setCount(Math.round(latest));
            },
            ease: "easeOut",
        });

        return () => controls.stop();
    }, [isInView, value, duration]);

    return (
        <span ref={ref} style={{color}}>
            {count}
            {suffix}
        </span>
    );
}