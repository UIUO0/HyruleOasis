"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./GradualBlur.css";

type Position = "top" | "bottom" | "left" | "right";
type Curve = "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
type Animated = boolean | "scroll";

type GradualBlurProps = {
  preset?: keyof typeof PRESETS;
  position?: Position;
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: Animated;
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: Curve;
  target?: "parent" | "page";
  className?: string;
  style?: React.CSSProperties;
};

const DEFAULT_CONFIG = {
  position: "bottom" as Position,
  strength: 2,
  height: "6rem",
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false as Animated,
  duration: "0.3s",
  easing: "ease-out",
  opacity: 1,
  curve: "linear" as Curve,
  target: "parent" as const,
  className: "",
  style: {}
};

const PRESETS = {
  subtle: { height: "4rem", strength: 1, opacity: 0.86, divCount: 4 },
  intense: { height: "10rem", strength: 4, divCount: 9, exponential: true },
  "page-footer": { position: "bottom" as Position, height: "9rem", target: "page" as const, strength: 3.2 }
};

const CURVES = {
  linear: (p: number) => p,
  bezier: (p: number) => p * p * (3 - 2 * p),
  "ease-in": (p: number) => p * p,
  "ease-out": (p: number) => 1 - Math.pow(1 - p, 2),
  "ease-in-out": (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

function direction(position: Position) {
  if (position === "top") return "to top";
  if (position === "left") return "to left";
  if (position === "right") return "to right";
  return "to bottom";
}

function useInView(ref: React.RefObject<HTMLDivElement | null>, enabled: boolean) {
  const [visible, setVisible] = useState(!enabled);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, enabled]);

  return visible;
}

export default function GradualBlur(props: GradualBlurProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const preset = props.preset ? PRESETS[props.preset] : undefined;
  const config = { ...DEFAULT_CONFIG, ...preset, ...props };
  const visible = useInView(rootRef, config.animated === "scroll");
  const curve = CURVES[config.curve] ?? CURVES.linear;

  const layers = useMemo(() => {
    const list: React.ReactNode[] = [];
    const increment = 100 / config.divCount;

    for (let i = 1; i <= config.divCount; i++) {
      const progress = curve(i / config.divCount);
      const blur = config.exponential
        ? Math.pow(2, progress * 4) * 0.0625 * config.strength
        : 0.0625 * (progress * config.divCount + 1) * config.strength;

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      list.push(
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            maskImage: `linear-gradient(${direction(config.position)}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${direction(config.position)}, ${gradient})`,
            backdropFilter: `blur(${blur.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blur.toFixed(3)}rem)`,
            opacity: config.opacity,
            transition: config.animated && config.animated !== "scroll" ? `opacity ${config.duration} ${config.easing}` : undefined
          }}
        />
      );
    }

    return list;
  }, [config.curve, config.divCount, config.duration, config.easing, config.exponential, config.opacity, config.position, config.strength, curve, config.animated]);

  const isVertical = config.position === "top" || config.position === "bottom";

  return (
    <div
      ref={rootRef}
      className={`gradual-blur ${config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent"} ${config.className}`}
      style={{
        position: config.target === "page" ? "fixed" : "absolute",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
        zIndex: config.target === "page" ? config.zIndex + 100 : config.zIndex,
        ...(isVertical
          ? {
              height: config.height,
              width: config.width ?? "100%",
              left: 0,
              right: 0,
              [config.position]: 0
            }
          : {
              width: config.width ?? config.height,
              height: "100%",
              top: 0,
              bottom: 0,
              [config.position]: 0
            }),
        ...config.style
      }}
    >
      <div className="gradual-blur-inner">{layers}</div>
    </div>
  );
}
