import React from "react";

export type DividerVariant = "curve" | "wave" | "concave" | "asymmetric";
export type DividerPosition = "top" | "bottom";

interface SectionDividerProps {
  /** Top or bottom placement of the parent section */
  position?: DividerPosition;
  /** Background color of the adjacent incoming section (e.g. "#FFFFFF", "#FAF6EE", "#0F2137") */
  fillColor: string;
  /** Style of the curved vector path */
  variant?: DividerVariant;
  /** Horizontally flip the curve path for visual dynamic diversity */
  flipX?: boolean;
  /** Custom extra container classes */
  className?: string;
}

/**
 * Modern, Smooth, Responsive SVG Curved Background Section Divider
 * Fills seamlessly into the adjacent section background to eliminate hard line cuts.
 */
export default function SectionDivider({
  position = "bottom",
  fillColor,
  variant = "curve",
  flipX = false,
  className = "",
}: SectionDividerProps) {
  // Select path data according to variant
  const getPathData = (v: DividerVariant) => {
    switch (v) {
      case "wave":
        return "M0,60 C200,110 450,10 600,60 C750,110 1000,10 1200,60 L1200,120 L0,120 Z";
      case "concave":
        return "M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z";
      case "asymmetric":
        return "M0,35 C350,105 850,5 1200,75 L1200,120 L0,120 Z";
      case "curve":
      default:
        return "M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z";
    }
  };

  const pathData = getPathData(variant);

  // Position classes
  const positionClass = position === "top" ? "top-0 transform rotate-180" : "bottom-0";
  const flipClass = flipX ? "scale-x-[-1]" : "";

  return (
    <div
      className={`section-curve-divider ${positionClass} ${flipClass} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-16 md:h-20 lg:h-24 block"
      >
        <path d={pathData} fill={fillColor} />
      </svg>
    </div>
  );
}
