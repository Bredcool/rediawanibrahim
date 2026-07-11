import {
    type CSSProperties,
    type ReactNode,
    type RefObject,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "motion/react";

import "./scrollVelocity.css";

/* ============================
   TYPES
============================ */

type VelocityMapping = {
    input: number[];
    output: number[];
};

interface ScrollVelocityProps {
    scrollContainerRef?: RefObject<HTMLElement>;
    texts: string[];
    velocity?: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: CSSProperties;
    scrollerStyle?: CSSProperties;
}

interface VelocityTextProps {
    children: ReactNode;
    baseVelocity: number;
    scrollContainerRef?: RefObject<HTMLElement>;
    className?: string;
    damping: number;
    stiffness: number;
    numCopies: number;
    velocityMapping: VelocityMapping;
    parallaxClassName: string;
    scrollerClassName: string;
    parallaxStyle?: CSSProperties;
    scrollerStyle?: CSSProperties;
}

/* ============================
   HOOK
============================ */

function useElementWidth(
    ref: RefObject<HTMLElement | null>
): number {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const updateWidth = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        };

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () =>
            window.removeEventListener("resize", updateWidth);
    }, [ref]);

    return width;
}

/* ============================
   COMPONENT
============================ */

function VelocityText({
    children,
    baseVelocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
}: VelocityTextProps) {
    const baseX = useMotionValue(0);

    const scrollOptions = scrollContainerRef
        ? { container: scrollContainerRef }
        : {};

    const { scrollY } = useScroll(scrollOptions);

    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
        damping,
        stiffness,
    });

    const velocityFactor = useTransform(
        smoothVelocity,
        velocityMapping.input,
        velocityMapping.output,
        { clamp: false }
    );

    const copyRef = useRef<HTMLSpanElement>(null);

    const copyWidth = useElementWidth(copyRef);

    const wrap = (
        min: number,
        max: number,
        value: number
    ) => {
        const range = max - min;

        return ((((value - min) % range) + range) % range) + min;
    };

    const x = useTransform(baseX, (value) => {
        if (copyWidth === 0) return "0px";

        return `${wrap(-copyWidth, 0, value)}px`;
    });

    const directionFactor = useRef(1);

    useAnimationFrame((_time, delta) => {
        let moveBy =
            directionFactor.current *
            baseVelocity *
            (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy +=
            directionFactor.current *
            moveBy *
            velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className={parallaxClassName}
            style={parallaxStyle}
        >
            <motion.div
                className={scrollerClassName}
                style={{
                    x,
                    ...scrollerStyle,
                }}
            >
                {Array.from({ length: numCopies }).map((_, i) => (
                    <span
                        key={i}
                        ref={i === 0 ? copyRef : undefined}
                        className={className}
                    >
                        {children}&nbsp;
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

/* ============================
   MAIN COMPONENT
============================ */

export default function ScrollVelocity({
    scrollContainerRef,
    texts,
    velocity = 100,
    className = "",
    damping = 50,
    stiffness = 400,
    numCopies = 6,
    velocityMapping = {
        input: [0, 1000],
        output: [0, 5],
    },
    parallaxClassName = "parallax",
    scrollerClassName = "scroller",
    parallaxStyle,
    scrollerStyle,
}: ScrollVelocityProps) {
    return (
        <section>
            {texts.map((text, index) => (
                <VelocityText
                    key={index}
                    baseVelocity={
                        index % 2 === 0
                            ? velocity
                            : -velocity
                    }
                    className={className}
                    scrollContainerRef={scrollContainerRef}
                    damping={damping}
                    stiffness={stiffness}
                    numCopies={numCopies}
                    velocityMapping={velocityMapping}
                    parallaxClassName={parallaxClassName}
                    scrollerClassName={scrollerClassName}
                    parallaxStyle={parallaxStyle}
                    scrollerStyle={scrollerStyle}
                >
                    {text}
                </VelocityText>
            ))}
        </section>
    );
}