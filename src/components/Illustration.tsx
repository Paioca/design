import { SVGProps } from "react";
import { cn } from "../lib/cn";

export type IllustrationName =
  | "bowtie-journey"
  | "growth-stairs"
  | "map-route"
  | "connected-system"
  | "stack-build"
  | "funnel-wings";

export const illustrationNames: IllustrationName[] = [
  "bowtie-journey",
  "growth-stairs",
  "map-route",
  "connected-system",
  "stack-build",
  "funnel-wings",
];

export interface IllustrationProps extends SVGProps<SVGSVGElement> {
  name: IllustrationName;
  /** Optional descriptive label (used as <title>) */
  title?: string;
}

/**
 * Isometric illustration — RevTrue brand style adapted from the
 * Winning By Design visual language. Designed to live on dark surfaces
 * (true-900 or true-950 background). Uses the rev-orange palette for
 * "active/foreground" elements and white dashed strokes for
 * "frame/limit/route" elements.
 *
 * For UI icons use <Icon />. For brand graphic marks use <Mark />.
 * For themed PNG illustrations use <BrandIcon />.
 */
export function Illustration({
  name,
  title,
  className,
  ...props
}: IllustrationProps) {
  const Inner = registry[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={Inner.viewBox}
      role="img"
      aria-label={title ?? name.replace(/-/g, " ")}
      className={cn("w-full h-auto select-none", className)}
      {...props}
    >
      {title && <title>{title}</title>}
      <Defs />
      <Inner.Render />
    </svg>
  );
}

/* ================================================================== */
/*                          SHARED DEFINITIONS                         */
/* ================================================================== */
function Defs() {
  return (
    <defs>
      {/* Primary orange gradient — used for "active / in focus" surfaces */}
      <linearGradient id="rev-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8A07A" />
        <stop offset="55%" stopColor="#F15A24" />
        <stop offset="100%" stopColor="#B5340D" />
      </linearGradient>
      {/* Stronger orange — for top-most highlight surfaces */}
      <linearGradient id="rev-strong" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FAC1A1" />
        <stop offset="100%" stopColor="#D9430F" />
      </linearGradient>
      {/* Charcoal gradient — for dimmed / context surfaces */}
      <linearGradient id="true-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3D4B55" />
        <stop offset="100%" stopColor="#131D24" />
      </linearGradient>
      {/* Side / shadow face — darker variant for 3D depth */}
      <linearGradient id="rev-shade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B5340D" />
        <stop offset="100%" stopColor="#762512" />
      </linearGradient>
      {/* Glow blob — subtle soft halo under elements */}
      <radialGradient id="rev-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#F15A24" stopOpacity="0.45" />
        <stop offset="70%" stopColor="#F15A24" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/** Constants for our illustration "language". */
const STROKE = {
  frame: { stroke: "#FFFFFF", strokeWidth: 1.5, strokeOpacity: 0.55, fill: "none", strokeDasharray: "5 4" },
  route: { stroke: "#FFFFFF", strokeWidth: 1.75, fill: "none", strokeDasharray: "6 4", strokeLinecap: "round" as const },
  link:  { stroke: "#FFFFFF", strokeWidth: 1.25, strokeOpacity: 0.7, fill: "none", strokeDasharray: "2 3", strokeLinecap: "round" as const },
  edge:  { stroke: "#21303A", strokeWidth: 0.75, fill: "none" },
};

/* ================================================================== */
/*                          1. BOWTIE JOURNEY                          */
/* ================================================================== */
function BowtieJourney() {
  // 7 stages — left half narrows in, right half widens out.
  // Stage labels (optional, kept visible).
  const stages = ["Awareness", "Education", "Selection", "Commit", "Onboard", "Impact", "Expansion"];
  // Width of each section (px on the top edge), arranged left → right.
  const widths = [120, 100, 80, 50, 80, 100, 120];
  const total = widths.reduce((a, b) => a + b, 0);
  // Y of top and bottom of bowtie at each x-step.
  const cx = 400; // center
  const startX = cx - total / 2;
  const heights = [180, 150, 120, 80, 120, 150, 180]; // total height per section
  // Build segments
  const segs: { x0: number; x1: number; topY: number; botY: number; w: number; h: number; label: string }[] = [];
  let x = startX;
  for (let i = 0; i < widths.length; i++) {
    segs.push({
      x0: x,
      x1: x + widths[i],
      topY: 220 - heights[i] / 2,
      botY: 220 + heights[i] / 2,
      w: widths[i],
      h: heights[i],
      label: stages[i],
    });
    x += widths[i];
  }
  const isFocus = (i: number) => i >= 1 && i <= 3; // Education..Commit highlighted
  return (
    <g>
      {/* Side / depth face — single shape under whole bowtie */}
      <path
        d={[
          `M ${segs[0].x0} ${segs[0].botY}`,
          ...segs.map((s) => `L ${s.x1} ${s.botY}`),
          `L ${segs[segs.length - 1].x1 + 18} ${segs[segs.length - 1].botY + 26}`,
          ...segs
            .slice()
            .reverse()
            .map((s) => `L ${s.x0 + 18} ${s.botY + 26}`),
          `Z`,
        ].join(" ")}
        fill="url(#true-grad)"
        opacity="0.85"
      />
      {/* Top surface segments */}
      {segs.map((s, i) => (
        <polygon
          key={i}
          points={`${s.x0},${s.topY} ${s.x1},${s.topY} ${s.x1},${s.botY} ${s.x0},${s.botY}`}
          fill={isFocus(i) ? "url(#rev-grad)" : "url(#true-grad)"}
          stroke="#FFFFFF"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
      ))}
      {/* Highlight stripes on focused tiles */}
      {segs.map((s, i) =>
        isFocus(i) ? (
          <line
            key={`hl-${i}`}
            x1={s.x0 + 6}
            y1={s.topY + 8}
            x2={s.x1 - 6}
            y2={s.topY + 8}
            stroke="#FAC1A1"
            strokeWidth="1.5"
            strokeOpacity="0.65"
          />
        ) : null,
      )}
      {/* Labels */}
      {segs.map((s, i) => {
        const cxLbl = (s.x0 + s.x1) / 2;
        const cyLbl = (s.topY + s.botY) / 2;
        return (
          <text
            key={`t-${i}`}
            x={cxLbl}
            y={cyLbl + 4}
            textAnchor="middle"
            fontFamily="Roboto, system-ui, sans-serif"
            fontSize="11"
            fontWeight="600"
            fill={isFocus(i) ? "#FFFFFF" : "#A8B7BF"}
            opacity={isFocus(i) ? 1 : 0.85}
          >
            {s.label}
          </text>
        );
      })}
    </g>
  );
}

/* ================================================================== */
/*                          2. GROWTH STAIRS                           */
/* ================================================================== */
function GrowthStairs() {
  // 3 isometric blocks stacking up in depth, flag on top, curved arrow.
  const blocks = [
    { gx: 90, gy: 250, w: 70, h: 50 },   // front, shortest
    { gx: 160, gy: 240, w: 70, h: 90 },  // mid
    { gx: 230, gy: 230, w: 70, h: 130 }, // back, tallest (active)
  ];
  const skew = 22; // depth
  return (
    <g>
      {/* Glow under the stairs */}
      <ellipse cx="220" cy="290" rx="170" ry="22" fill="url(#rev-glow)" />

      {/* Base platform (dashed outline) */}
      <polygon
        points={`60,290 320,290 ${320 + skew},${290 - skew} ${60 + skew},${290 - skew}`}
        {...STROKE.frame}
      />

      {/* Stair blocks — render back to front */}
      {[...blocks].reverse().map((b, i) => {
        const isActive = i === 0; // back-tallest is active
        const fill = isActive ? "url(#rev-grad)" : "url(#true-grad)";
        const sideFill = isActive ? "url(#rev-shade)" : "#21303A";
        const topFill = isActive ? "url(#rev-strong)" : "#3D4B55";
        const top = b.gy - b.h;
        return (
          <g key={i}>
            {/* Front face */}
            <polygon
              points={`${b.gx},${top} ${b.gx + b.w},${top} ${b.gx + b.w},${b.gy} ${b.gx},${b.gy}`}
              fill={fill}
            />
            {/* Right face */}
            <polygon
              points={`${b.gx + b.w},${top} ${b.gx + b.w + skew},${top - skew} ${b.gx + b.w + skew},${b.gy - skew} ${b.gx + b.w},${b.gy}`}
              fill={sideFill}
            />
            {/* Top face */}
            <polygon
              points={`${b.gx},${top} ${b.gx + b.w},${top} ${b.gx + b.w + skew},${top - skew} ${b.gx + skew},${top - skew}`}
              fill={topFill}
            />
          </g>
        );
      })}

      {/* Flag on top of tallest block */}
      <line x1="280" y1="98" x2="280" y2="38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <polygon points="280,40 320,52 280,66" fill="url(#rev-strong)" />
      <circle cx="280" cy="36" r="3" fill="#FFFFFF" />

      {/* Curved arrow rising from front to flag */}
      <path
        d="M 90 220 C 130 120, 230 100, 275 60"
        stroke="#FAC1A1"
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="270,52 280,60 273,68" fill="#FAC1A1" />
    </g>
  );
}

/* ================================================================== */
/*                            3. MAP ROUTE                             */
/* ================================================================== */
function MapRoute() {
  const skew = 22;
  // Two platforms (tablet/grid) with map pins + dashed route between them.
  return (
    <g>
      <ellipse cx="200" cy="270" rx="180" ry="20" fill="url(#rev-glow)" opacity="0.6" />

      {/* Platform 1 (back-left) */}
      <g>
        <polygon
          points={`50,200 170,200 ${170 + skew},${200 - skew} ${50 + skew},${200 - skew}`}
          fill="url(#true-grad)"
          stroke="#FFFFFF"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        {/* Grid tiles on platform 1 */}
        <rect x="60" y="160" width="30" height="22" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        <rect x="95" y="160" width="40" height="32" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        <rect x="60" y="184" width="40" height="14" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        <rect x="105" y="184" width="30" height="14" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        {/* Pin */}
        <g transform="translate(80,140)">
          <path d="M 0 -28 a 12 12 0 1 1 0.1 0 z M -4 -28 l 4 6 l 4 -6 z" fill="url(#rev-grad)" />
          <circle cx="0" cy="-30" r="4" fill="#131D24" />
        </g>
      </g>

      {/* Platform 2 (front-right) */}
      <g>
        <polygon
          points={`220,250 360,250 ${360 + skew},${250 - skew} ${220 + skew},${250 - skew}`}
          fill="url(#true-grad)"
          stroke="#FFFFFF"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        {/* Grid tiles */}
        <rect x="232" y="208" width="40" height="20" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        <rect x="278" y="208" width="32" height="34" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        <rect x="316" y="208" width="38" height="20" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        <rect x="232" y="232" width="40" height="14" fill="#3D4B55" stroke="#5C7280" strokeWidth="0.75" />
        {/* Big pin */}
        <g transform="translate(300,160)">
          <path
            d="M 0 -50 a 22 22 0 1 1 0.1 0 z M -7 -52 l 7 10 l 7 -10 z"
            fill="url(#rev-strong)"
            stroke="#FFFFFF"
            strokeOpacity="0.4"
          />
          <circle cx="0" cy="-55" r="8" fill="#131D24" />
        </g>
      </g>

      {/* Dashed route between pins */}
      <path
        d="M 80 122 C 130 110, 200 60, 260 100 S 300 130, 300 110"
        {...STROKE.route}
      />
    </g>
  );
}

/* ================================================================== */
/*                        4. CONNECTED SYSTEM                          */
/* ================================================================== */
function ConnectedSystem() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="170" ry="18" fill="url(#rev-glow)" opacity="0.7" />

      {/* Base platform (dashed) */}
      <polygon points="60,260 280,260 320,230 100,230" {...STROKE.frame} />

      {/* Dashboard panel (top-right, raised) */}
      <g>
        <polygon points="240,140 320,140 340,130 260,130" fill="url(#rev-grad)" />
        <polygon points="240,140 240,170 320,170 320,140" fill="#762512" />
        <polygon points="320,140 340,130 340,160 320,170" fill="#B5340D" />
        {/* Bars on panel */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={250 + i * 12}
            y={148 + (i % 2) * 4}
            width="6"
            height={12 - (i % 2) * 4}
            fill="#FFFFFF"
            opacity="0.85"
          />
        ))}
      </g>

      {/* Geometric primitives on platform */}
      {/* Cone */}
      <polygon points="110,225 100,255 120,255" fill="url(#rev-grad)" />
      <ellipse cx="110" cy="255" rx="10" ry="3" fill="#762512" opacity="0.7" />
      {/* Sphere */}
      <circle cx="160" cy="240" r="14" fill="url(#rev-grad)" />
      <ellipse cx="160" cy="245" rx="14" ry="4" fill="#000" opacity="0.25" />
      {/* Cube */}
      <g>
        <polygon points="200,232 218,232 218,254 200,254" fill="url(#rev-grad)" />
        <polygon points="218,232 230,222 230,244 218,254" fill="url(#rev-shade)" />
        <polygon points="200,232 218,232 230,222 212,222" fill="url(#rev-strong)" />
      </g>
      {/* Cylinder */}
      <g>
        <ellipse cx="260" cy="220" rx="11" ry="3" fill="url(#rev-strong)" />
        <rect x="249" y="220" width="22" height="20" fill="url(#rev-grad)" />
        <ellipse cx="260" cy="240" rx="11" ry="3" fill="#762512" />
      </g>

      {/* Connection lines (dotted) */}
      <g {...STROKE.link}>
        <line x1="110" y1="245" x2="160" y2="240" />
        <line x1="160" y1="240" x2="210" y2="245" />
        <line x1="218" y1="240" x2="260" y2="232" />
        <line x1="260" y1="220" x2="280" y2="160" />
      </g>
      {/* Arrow on last connection (toward dashboard) */}
      <polygon points="276,165 286,156 290,168" fill="#FFFFFF" opacity="0.85" />
    </g>
  );
}

/* ================================================================== */
/*                            5. STACK BUILD                           */
/* ================================================================== */
function StackBuild() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="160" ry="18" fill="url(#rev-glow)" opacity="0.7" />

      {/* Lower base platform (dashed frame) */}
      <polygon points="80,260 300,260 330,235 110,235" {...STROKE.frame} />
      {/* Lower base bars (dim) */}
      <rect x="100" y="240" width="100" height="14" fill="#21303A" stroke="#3D4B55" strokeWidth="0.75" />
      <rect x="100" y="222" width="160" height="14" fill="#21303A" stroke="#3D4B55" strokeWidth="0.75" />

      {/* Upper "active" platform raised */}
      <polygon points="100,180 280,180 310,155 130,155" fill="url(#true-grad)" stroke="#FFFFFF" strokeOpacity="0.5" />

      {/* Stacked bars (active, gradient) */}
      {[
        { y: 130, w: 130 },
        { y: 110, w: 100 },
        { y: 90, w: 70 },
      ].map((b, i) => (
        <g key={i}>
          <polygon
            points={`130,${b.y} ${130 + b.w},${b.y} ${135 + b.w},${b.y - 8} ${135},${b.y - 8}`}
            fill="url(#rev-strong)"
          />
          <polygon
            points={`130,${b.y} ${130 + b.w},${b.y} ${130 + b.w},${b.y + 12} ${130},${b.y + 12}`}
            fill="url(#rev-grad)"
          />
          <polygon
            points={`${130 + b.w},${b.y} ${135 + b.w},${b.y - 8} ${135 + b.w},${b.y + 4} ${130 + b.w},${b.y + 12}`}
            fill="url(#rev-shade)"
          />
        </g>
      ))}

      {/* Plus icon hovering on top */}
      <g transform="translate(280, 60)">
        <rect x="-12" y="-3" width="24" height="6" fill="url(#rev-strong)" />
        <rect x="-3" y="-12" width="6" height="24" fill="url(#rev-strong)" />
      </g>

      {/* Curved arrow from plus to top bar */}
      <path d="M 268 70 C 220 80, 200 90, 195 90" stroke="#FAC1A1" strokeWidth="2" fill="none" strokeDasharray="4 4" strokeLinecap="round" />
      <polygon points="200,84 188,90 200,96" fill="#FAC1A1" />
    </g>
  );
}

/* ================================================================== */
/*                          6. FUNNEL WINGS                            */
/* ================================================================== */
function FunnelWings() {
  // Bowtie viewed from above — two trapezoids converging to center.
  return (
    <g>
      <ellipse cx="200" cy="240" rx="180" ry="14" fill="url(#rev-glow)" opacity="0.6" />

      {/* Frame outlines (dashed) */}
      <polygon points="40,90 175,140 175,180 40,230" {...STROKE.frame} />
      <polygon points="225,140 360,90 360,230 225,180" {...STROKE.frame} />

      {/* Left wing (3 stacked tilted slabs) */}
      {[0, 1, 2].map((i) => (
        <g key={`l${i}`}>
          <polygon
            points={`${50 + i * 8},${100 + i * 12} ${175},${145 + i * 4} ${175},${155 + i * 4} ${50 + i * 8},${110 + i * 12}`}
            fill="url(#rev-grad)"
            stroke="#FFFFFF"
            strokeOpacity="0.5"
          />
        </g>
      ))}
      {/* Right wing (3 stacked tilted slabs) */}
      {[0, 1, 2].map((i) => (
        <g key={`r${i}`}>
          <polygon
            points={`${225},${145 + i * 4} ${350 - i * 8},${100 + i * 12} ${350 - i * 8},${110 + i * 12} ${225},${155 + i * 4}`}
            fill="url(#rev-grad)"
            stroke="#FFFFFF"
            strokeOpacity="0.5"
          />
        </g>
      ))}

      {/* Center connector cube */}
      <g>
        <polygon points="180,150 220,150 220,170 180,170" fill="url(#rev-strong)" />
        <polygon points="180,150 220,150 230,140 190,140" fill="url(#rev-strong)" />
        <polygon points="220,150 230,140 230,160 220,170" fill="url(#rev-shade)" />
      </g>

      {/* Connection link below */}
      <line x1="200" y1="170" x2="200" y2="210" {...STROKE.link} />
      <polygon points="195,205 200,215 205,205" fill="#FFFFFF" opacity="0.7" />
    </g>
  );
}

/* ================================================================== */
/*                              REGISTRY                               */
/* ================================================================== */
type Entry = { Render: () => JSX.Element; viewBox: string };
const registry: Record<IllustrationName, Entry> = {
  "bowtie-journey":    { Render: BowtieJourney,    viewBox: "0 0 800 440" },
  "growth-stairs":     { Render: GrowthStairs,     viewBox: "0 0 400 320" },
  "map-route":         { Render: MapRoute,         viewBox: "0 0 400 300" },
  "connected-system":  { Render: ConnectedSystem,  viewBox: "0 0 400 320" },
  "stack-build":       { Render: StackBuild,       viewBox: "0 0 400 320" },
  "funnel-wings":      { Render: FunnelWings,      viewBox: "0 0 400 280" },
};
