import { SVGProps } from "react";
import { cn } from "../lib/cn";

export type IllustrationName =
  // P0 — base / journey (existing)
  | "bowtie-journey"
  | "growth-stairs"
  | "map-route"
  | "connected-system"
  | "stack-build"
  | "funnel-wings"
  // P1 — funil de receita (5 etapas)
  | "funnel-marketing"
  | "funnel-qualification"
  | "funnel-sales"
  | "funnel-postsale"
  | "funnel-expansion"
  // P2 — pilares do método (3)
  | "pillar-ai"
  | "pillar-data"
  | "pillar-method"
  // P3 — sessão de receita (3)
  | "revenue-session"
  | "priority-plan"
  | "bottleneck-diagnosis"
  // P4 — cross-cutting (3)
  | "automation-flow"
  | "commercial-ritual"
  | "goal-target"
  // P5 — conceitos de problema / caminho (3)
  | "revenue-leak"
  | "path-solo"
  | "path-together";

export const illustrationNames: IllustrationName[] = [
  "bowtie-journey",
  "growth-stairs",
  "map-route",
  "connected-system",
  "stack-build",
  "funnel-wings",
  "funnel-marketing",
  "funnel-qualification",
  "funnel-sales",
  "funnel-postsale",
  "funnel-expansion",
  "pillar-ai",
  "pillar-data",
  "pillar-method",
  "revenue-session",
  "priority-plan",
  "bottleneck-diagnosis",
  "automation-flow",
  "commercial-ritual",
  "goal-target",
  "revenue-leak",
  "path-solo",
  "path-together",
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
/*           HELPERS shared by P1–P5 illustrations                     */
/* ================================================================== */
/** Reusable isometric box (cabinet projection). gx/gy = bottom-front-left. */
function IsoBox({ gx, gy, w, h, d = 18, active = false }: {
  gx: number; gy: number; w: number; h: number; d?: number; active?: boolean;
}) {
  const fillFront = active ? "url(#rev-grad)" : "url(#true-grad)";
  const fillSide = active ? "url(#rev-shade)" : "#21303A";
  const fillTop = active ? "url(#rev-strong)" : "#3D4B55";
  return (
    <g>
      <polygon points={`${gx},${gy - h} ${gx + w},${gy - h} ${gx + w},${gy} ${gx},${gy}`} fill={fillFront} />
      <polygon points={`${gx + w},${gy - h} ${gx + w + d},${gy - h - d} ${gx + w + d},${gy - d} ${gx + w},${gy}`} fill={fillSide} />
      <polygon points={`${gx},${gy - h} ${gx + w},${gy - h} ${gx + w + d},${gy - h - d} ${gx + d},${gy - h - d}`} fill={fillTop} />
    </g>
  );
}

/** Small flag (~22px tall). Used as milestone / goal marker. */
function Flag({ x, y, size = 1, color = "url(#rev-strong)" }: { x: number; y: number; size?: number; color?: string }) {
  const h = 22 * size;
  const w = 16 * size;
  return (
    <g transform={`translate(${x},${y})`}>
      <line x1="0" y1="0" x2="0" y2={-h} stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points={`0,${-h + 2} ${w},${-h + 8} 0,${-h + 14}`} fill={color} />
      <circle cx="0" cy={-h - 1} r="2" fill="#FFFFFF" />
    </g>
  );
}

/* ================================================================== */
/*       7. FUNNEL — MARKETING (avaliação de canais e oferta)         */
/* ================================================================== */
function FunnelMarketing() {
  return (
    <g>
      <ellipse cx="200" cy="285" rx="170" ry="16" fill="url(#rev-glow)" opacity="0.7" />

      {/* 4 source channels (back row) — small dim cubes */}
      {[
        { gx: 30, gy: 200, label: "ADS" },
        { gx: 30, gy: 235, label: "SEO" },
        { gx: 30, gy: 270, label: "REF" },
      ].map((s, i) => (
        <g key={i}>
          <IsoBox gx={s.gx} gy={s.gy} w={42} h={22} d={10} />
        </g>
      ))}

      {/* Convergence dashed lines from each source to the central panel */}
      {[
        { y: 188 },
        { y: 222 },
        { y: 257 },
      ].map((s, i) => (
        <path
          key={i}
          d={`M 90 ${s.y} C 150 ${s.y - 10}, 200 200, 250 195`}
          {...STROKE.route}
        />
      ))}
      <polygon points="245,193 235,200 245,206" fill="#FFFFFF" opacity="0.7" />

      {/* Central destination panel (active orange) */}
      <g transform="translate(250, 130)">
        <polygon points="0,40 90,40 110,30 20,30" fill="url(#rev-strong)" />
        <polygon points="0,40 0,80 90,80 90,40" fill="url(#rev-grad)" />
        <polygon points="90,40 110,30 110,70 90,80" fill="url(#rev-shade)" />
        {/* horizontal lines suggesting "panel" */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="6" y={48 + i * 5} width={70} height="2" fill="#FFFFFF" opacity="0.7" />
        ))}
      </g>
    </g>
  );
}

/* ================================================================== */
/*    8. FUNNEL — QUALIFICATION (peneira / filtro de leads)           */
/* ================================================================== */
function FunnelQualification() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="150" ry="16" fill="url(#rev-glow)" opacity="0.7" />

      {/* Various input shapes above (different = leads não qualificados) */}
      <g>
        <circle cx="120" cy="40" r="10" fill="#3D4B55" stroke="#5C7280" />
        <rect x="160" y="30" width="22" height="22" fill="#3D4B55" stroke="#5C7280" />
        <polygon points="220,52 230,30 240,52" fill="#3D4B55" stroke="#5C7280" />
        <circle cx="270" cy="40" r="9" fill="url(#rev-grad)" />
        <rect x="80" y="35" width="18" height="18" fill="url(#rev-grad)" />
      </g>

      {/* Funnel sieve (isometric inverted prism) */}
      <g>
        {/* outer trapezoid (sieve walls) */}
        <polygon
          points="80,90 320,90 340,80 60,80"
          fill="url(#rev-strong)"
          stroke="#FFFFFF"
          strokeOpacity="0.6"
        />
        <polygon
          points="80,90 200,200 220,190 320,90"
          fill="url(#rev-grad)"
        />
        {/* sieve grid (dashed top mesh) */}
        {[100, 130, 160, 190, 220, 250, 280, 310].map((x, i) => (
          <line key={i} x1={x} y1="90" x2={x - 50} y2="200" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.4" />
        ))}
        <polygon points="60,80 340,80 340,90 60,90" fill="url(#rev-shade)" opacity="0.6" />
      </g>

      {/* Dripping qualified shapes (only circles = qualificados) */}
      <circle cx="190" cy="220" r="6" fill="url(#rev-strong)" />
      <circle cx="208" cy="240" r="5" fill="url(#rev-strong)" />
      <circle cx="200" cy="258" r="6" fill="url(#rev-strong)" />

      {/* Catch tray below */}
      <polygon
        points="160,265 250,265 270,275 180,275"
        {...STROKE.frame}
      />
    </g>
  );
}

/* ================================================================== */
/*  9. FUNNEL — SALES (sequência de etapas conectadas)                */
/* ================================================================== */
function FunnelSales() {
  // 4 process blocks linked left → right with dashed arrows
  const blocks = [
    { gx: 30, gy: 220, h: 60, active: false },
    { gx: 110, gy: 220, h: 70, active: true },
    { gx: 200, gy: 220, h: 80, active: false },
    { gx: 290, gy: 220, h: 90, active: false },
  ];
  return (
    <g>
      <ellipse cx="200" cy="260" rx="170" ry="14" fill="url(#rev-glow)" opacity="0.6" />
      <polygon points="20,260 380,260 400,245 40,245" {...STROKE.frame} />
      {blocks.map((b, i) => (
        <IsoBox key={i} gx={b.gx} gy={b.gy} w={56} h={b.h} d={16} active={b.active} />
      ))}
      {/* Connections */}
      {[
        { x1: 90, y1: 195 },
        { x1: 175, y1: 185 },
        { x1: 270, y1: 175 },
      ].map((c, i) => (
        <g key={i}>
          <line x1={c.x1} y1={c.y1} x2={c.x1 + 18} y2={c.y1 - 8} {...STROKE.route} />
          <polygon
            points={`${c.x1 + 14},${c.y1 - 14} ${c.x1 + 22},${c.y1 - 6} ${c.x1 + 12},${c.y1 - 4}`}
            fill="#FFFFFF"
            opacity="0.85"
          />
        </g>
      ))}
      {/* Labels (small) */}
      {["Prosp.", "Reun.", "Prop.", "Fech."].map((t, i) => (
        <text
          key={i}
          x={blocks[i].gx + 28}
          y={blocks[i].gy + 18}
          textAnchor="middle"
          fontFamily="Roboto, system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          fill="#A8B7BF"
        >
          {t}
        </text>
      ))}
    </g>
  );
}

/* ================================================================== */
/* 10. FUNNEL — POSTSALE (trilha contínua com marcos)                 */
/* ================================================================== */
function FunnelPostsale() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="170" ry="14" fill="url(#rev-glow)" opacity="0.7" />

      {/* Long curving track */}
      <path
        d="M 30 220 C 90 180, 150 250, 210 200 S 320 220, 370 170"
        stroke="#FFFFFF"
        strokeWidth="14"
        strokeOpacity="0.08"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 30 220 C 90 180, 150 250, 210 200 S 320 220, 370 170"
        {...STROKE.route}
      />

      {/* Milestone flags along the path */}
      <Flag x={80} y={205} />
      <Flag x={170} y={222} />
      <Flag x={260} y={195} />
      <Flag x={355} y={170} color="url(#rev-strong)" />

      {/* Walking client cube */}
      <IsoBox gx={20} gy={235} w={26} h={28} d={10} active />
    </g>
  );
}

/* ================================================================== */
/* 11. FUNNEL — EXPANSION (gráfico crescente isométrico)              */
/* ================================================================== */
function FunnelExpansion() {
  const bars = [
    { gx: 40, h: 50, active: false },
    { gx: 110, h: 80, active: false },
    { gx: 180, h: 110, active: false },
    { gx: 250, h: 150, active: true },
  ];
  return (
    <g>
      <ellipse cx="200" cy="280" rx="170" ry="14" fill="url(#rev-glow)" opacity="0.7" />
      <polygon points="20,260 360,260 380,245 40,245" {...STROKE.frame} />
      {bars.map((b, i) => (
        <IsoBox key={i} gx={b.gx} gy={245} w={50} h={b.h} d={16} active={b.active} />
      ))}
      {/* Trend arrow above */}
      <path d="M 80 200 L 290 80" stroke="#FAC1A1" strokeWidth="2" strokeDasharray="4 4" fill="none" strokeLinecap="round" />
      <polygon points="285,76 300,75 290,90" fill="#FAC1A1" />
      {/* Up sign on the active bar */}
      <text
        x={290}
        y={130}
        textAnchor="middle"
        fontFamily="Roboto, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#FFFFFF"
      >
        ↑
      </text>
    </g>
  );
}

/* ================================================================== */
/* 12. PILLAR — AI (núcleo central com conexões saindo)               */
/* ================================================================== */
function PillarAi() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="160" ry="16" fill="url(#rev-glow)" opacity="0.8" />
      <polygon points="50,260 320,260 350,235 80,235" {...STROKE.frame} />

      {/* Satellite cubes (4 corners) */}
      {[
        { gx: 60, gy: 230 },
        { gx: 60, gy: 175 },
        { gx: 290, gy: 230 },
        { gx: 290, gy: 175 },
      ].map((s, i) => (
        <IsoBox key={i} gx={s.gx} gy={s.gy} w={36} h={28} d={10} />
      ))}

      {/* Connection lines from satellites to center */}
      {[
        { x1: 96, y1: 215 },
        { x1: 96, y1: 160 },
        { x1: 290, y1: 215 },
        { x1: 290, y1: 160 },
      ].map((c, i) => (
        <line key={i} x1={c.x1} y1={c.y1} x2={200} y2={140} {...STROKE.link} />
      ))}

      {/* Central AI core (large active cube with grid texture) */}
      <g transform="translate(160,80)">
        <polygon points="0,40 80,40 100,30 20,30" fill="url(#rev-strong)" />
        <polygon points="0,40 0,90 80,90 80,40" fill="url(#rev-grad)" />
        <polygon points="80,40 100,30 100,80 80,90" fill="url(#rev-shade)" />
        {/* AI grid pattern on top */}
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <circle
              key={`${r}-${c}`}
              cx={20 + c * 22}
              cy={32 + r * 4}
              r="2"
              fill="#FFFFFF"
              opacity={r === 1 && c === 1 ? 1 : 0.5}
            />
          )),
        )}
        {/* "spark" lines */}
        <line x1="50" y1="0" x2="50" y2="20" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="2 3" strokeLinecap="round" />
        <line x1="40" y1="5" x2="55" y2="15" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 3" strokeLinecap="round" />
        <line x1="60" y1="5" x2="48" y2="18" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 3" strokeLinecap="round" />
      </g>
    </g>
  );
}

/* ================================================================== */
/* 13. PILLAR — DATA (camadas empilhadas)                             */
/* ================================================================== */
function PillarData() {
  // 4 stacked horizontal slabs, each progressively brighter
  const slabs = [
    { y: 240, fill: "url(#true-grad)", active: false },
    { y: 215, fill: "url(#true-grad)", active: false },
    { y: 190, fill: "url(#rev-grad)", active: true },
    { y: 165, fill: "url(#rev-strong)", active: true },
  ];
  return (
    <g>
      <ellipse cx="200" cy="280" rx="150" ry="16" fill="url(#rev-glow)" opacity="0.7" />

      {/* Base frame */}
      <polygon points="80,265 320,265 350,245 110,245" {...STROKE.frame} />

      {slabs.map((s, i) => (
        <g key={i}>
          <polygon
            points={`90,${s.y + 18} 290,${s.y + 18} 320,${s.y - 2} 120,${s.y - 2}`}
            fill={s.fill}
          />
          <polygon
            points={`90,${s.y + 18} 290,${s.y + 18} 290,${s.y + 22} 90,${s.y + 22}`}
            fill={s.active ? "url(#rev-shade)" : "#21303A"}
          />
          {/* grid lines on top */}
          {s.active && [0, 1, 2, 3, 4].map((g) => (
            <line
              key={g}
              x1={120 + g * 40}
              y1={s.y - 2}
              x2={140 + g * 40}
              y2={s.y + 18}
              stroke="#FFFFFF"
              strokeWidth="0.5"
              strokeOpacity="0.45"
            />
          ))}
        </g>
      ))}

      {/* Bars/columns on top slab */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={140 + i * 30}
          y={130 - i * 8}
          width="14"
          height={30 + i * 8}
          fill="#FFFFFF"
          opacity="0.85"
        />
      ))}
    </g>
  );
}

/* ================================================================== */
/* 14. PILLAR — METHOD (planta baixa / blueprint)                     */
/* ================================================================== */
function PillarMethod() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="160" ry="14" fill="url(#rev-glow)" opacity="0.6" />

      {/* Blueprint sheet (large flat panel) */}
      <polygon points="50,250 350,250 380,230 80,230" fill="url(#true-grad)" stroke="#FFFFFF" strokeOpacity="0.5" />
      <polygon points="50,250 50,265 350,265 350,250" fill="#131D24" />
      <polygon points="350,250 380,230 380,245 350,265" fill="#21303A" />

      {/* Inner schematic — rooms / sections (dashed outlines) */}
      <g transform="translate(60, 95)">
        {/* "rooms" outlines top-down */}
        <polygon points="20,140 100,140 110,130 30,130" {...STROKE.frame} />
        <polygon points="100,140 200,140 210,130 110,130" {...STROKE.frame} />
        <polygon points="200,140 300,140 310,130 210,130" {...STROKE.frame} />
        <polygon points="20,140 20,80 30,70 30,130" {...STROKE.frame} />
        <polygon points="100,140 100,80 110,70 110,130" {...STROKE.frame} />
        <polygon points="200,140 200,80 210,70 210,130" {...STROKE.frame} />
        <polygon points="300,140 300,80 310,70 310,130" {...STROKE.frame} />

        {/* Active highlighted "room" filled */}
        <polygon points="100,130 200,130 210,120 110,120" fill="url(#rev-grad)" opacity="0.85" />
        <polygon points="200,130 200,80 210,70 210,120" fill="url(#rev-shade)" opacity="0.6" />

        {/* Angle / measurement marker */}
        <g transform="translate(160, 100)">
          <path d="M -10 0 L 0 0 L 0 -10" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>
      </g>

      {/* Compass / north marker */}
      <g transform="translate(330, 90)">
        <circle cx="0" cy="0" r="14" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
        <polygon points="0,-12 4,0 0,4 -4,0" fill="url(#rev-strong)" />
      </g>
    </g>
  );
}

/* ================================================================== */
/* 15. REVENUE SESSION (mesa com 2 sócios + cliente)                  */
/* ================================================================== */
function RevenueSession() {
  return (
    <g>
      <ellipse cx="200" cy="285" rx="160" ry="14" fill="url(#rev-glow)" opacity="0.7" />

      {/* Table top (oval-ish, isometric) */}
      <ellipse cx="200" cy="220" rx="120" ry="32" fill="url(#true-grad)" stroke="#FFFFFF" strokeOpacity="0.4" />
      <ellipse cx="200" cy="222" rx="120" ry="32" fill="#131D24" opacity="0.5" />

      {/* Document on table (active orange) */}
      <g transform="translate(170, 200)">
        <rect x="0" y="0" width="60" height="36" fill="url(#rev-strong)" />
        <line x1="6" y1="8" x2="50" y2="8" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1" />
        <line x1="6" y1="14" x2="44" y2="14" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1" />
        <line x1="6" y1="20" x2="48" y2="20" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1" />
        <line x1="6" y1="26" x2="38" y2="26" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1" />
      </g>

      {/* Partner blocks (2 partners back) */}
      <IsoBox gx={120} gy={195} w={28} h={50} d={10} />
      <IsoBox gx={252} gy={195} w={28} h={50} d={10} />

      {/* Client block (front, active) */}
      <IsoBox gx={180} gy={272} w={40} h={45} d={12} active />

      {/* Connection between partners (dashed) */}
      <path d="M 148 175 C 175 165, 220 165, 252 175" {...STROKE.link} />
    </g>
  );
}

/* ================================================================== */
/* 16. PRIORITY PLAN (folha com checklist priorizado)                 */
/* ================================================================== */
function PriorityPlan() {
  return (
    <g>
      <ellipse cx="200" cy="285" rx="160" ry="14" fill="url(#rev-glow)" opacity="0.7" />

      {/* Sheet (isometric, slightly tilted) */}
      <g transform="translate(120, 60)">
        <polygon points="0,0 160,0 200,0 200,200 40,200 0,200" fill="url(#rev-strong)" opacity="0.95" />
        {/* sheet shadow */}
        <polygon points="200,0 220,-15 220,185 200,200" fill="url(#rev-shade)" opacity="0.8" />
        <polygon points="0,0 160,0 200,0 220,-15 20,-15" fill="#FAC1A1" />

        {/* Checklist items */}
        {[
          { y: 30, checked: true, w: 130 },
          { y: 60, checked: true, w: 110 },
          { y: 90, checked: false, w: 140, priority: true },
          { y: 120, checked: false, w: 100 },
          { y: 150, checked: false, w: 120 },
          { y: 180, checked: false, w: 90 },
        ].map((item, i) => (
          <g key={i}>
            {/* checkbox */}
            <rect x="20" y={item.y - 6} width="12" height="12" fill="#FFFFFF" opacity={item.checked ? 1 : 0.3} stroke="#131D24" strokeWidth="1" />
            {item.checked && (
              <path d={`M 22 ${item.y} L 26 ${item.y + 3} L 30 ${item.y - 3}`} stroke="#131D24" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            )}
            {/* line */}
            <rect x="40" y={item.y - 2} width={item.w} height="4" fill="#FFFFFF" opacity={item.checked ? 0.4 : 0.85} />
            {/* priority flag */}
            {item.priority && (
              <g transform={`translate(${50 + item.w}, ${item.y})`}>
                <line x1="0" y1="-8" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="2" />
                <polygon points="0,-8 12,-4 0,0" fill="#131D24" />
              </g>
            )}
          </g>
        ))}
      </g>
    </g>
  );
}

/* ================================================================== */
/* 17. BOTTLENECK DIAGNOSIS (lupa sobre estrutura, gargalo destacado) */
/* ================================================================== */
function BottleneckDiagnosis() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="160" ry="14" fill="url(#rev-glow)" opacity="0.7" />

      {/* Stack of process boxes (the operation under analysis) */}
      <IsoBox gx={70} gy={260} w={60} h={45} d={15} />
      <IsoBox gx={150} gy={260} w={60} h={28} d={15} active /> {/* gargalo - active */}
      <IsoBox gx={230} gy={260} w={60} h={45} d={15} />
      <IsoBox gx={310} gy={260} w={50} h={50} d={15} />

      {/* Connection between blocks (with the bottleneck constricting) */}
      <line x1="130" y1="240" x2="150" y2="245" {...STROKE.link} />
      <line x1="210" y1="245" x2="230" y2="240" {...STROKE.link} />
      <line x1="290" y1="225" x2="310" y2="225" {...STROKE.link} />

      {/* Pulsing glow ring around bottleneck */}
      <circle cx="195" cy="225" r="42" fill="none" stroke="#F15A24" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="3 3" />

      {/* Magnifying glass (large, hovering above bottleneck) */}
      <g transform="translate(190, 110)">
        {/* glass rim */}
        <circle cx="0" cy="0" r="40" fill="#131D24" opacity="0.6" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="36" fill="none" stroke="#F15A24" strokeWidth="1.5" strokeOpacity="0.65" strokeDasharray="3 2" />
        {/* highlight inside the glass */}
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontFamily="Roboto, system-ui, sans-serif"
          fontSize="28"
          fontWeight="900"
          fill="#FFFFFF"
        >
          !
        </text>
        {/* handle */}
        <line x1="28" y1="28" x2="50" y2="60" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="28" y1="28" x2="50" y2="60" stroke="url(#rev-shade)" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>
  );
}

/* ================================================================== */
/* 18. AUTOMATION FLOW (engrenagens conectadas)                       */
/* ================================================================== */
function AutomationFlow() {
  // 3 cogwheels of varying sizes, interlocked
  const Gear = ({ cx, cy, r, teeth, fill }: { cx: number; cy: number; r: number; teeth: number; fill: string }) => {
    const points: string[] = [];
    const inner = r * 0.78;
    const outer = r;
    for (let i = 0; i < teeth * 2; i++) {
      const a = (i / (teeth * 2)) * Math.PI * 2 - Math.PI / 2;
      const rad = i % 2 === 0 ? outer : inner;
      points.push(`${cx + Math.cos(a) * rad},${cy + Math.sin(a) * rad}`);
    }
    return (
      <g>
        <polygon points={points.join(" ")} fill={fill} />
        <circle cx={cx} cy={cy} r={r * 0.4} fill="#131D24" />
        <circle cx={cx} cy={cy} r={r * 0.18} fill="#FFFFFF" opacity="0.85" />
      </g>
    );
  };
  return (
    <g>
      <ellipse cx="200" cy="280" rx="150" ry="14" fill="url(#rev-glow)" opacity="0.7" />
      <polygon points="60,260 320,260 340,240 80,240" {...STROKE.frame} />

      <Gear cx={130} cy={200} r={48} teeth={12} fill="url(#true-grad)" />
      <Gear cx={220} cy={150} r={36} teeth={10} fill="url(#rev-grad)" />
      <Gear cx={300} cy={210} r={40} teeth={11} fill="url(#true-grad)" />

      {/* Connection arrows showing motion */}
      <path d="M 150 130 a 30 30 0 0 1 50 0" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" fill="none" strokeLinecap="round" opacity="0.7" />
      <polygon points="195,128 205,124 200,138" fill="#FFFFFF" opacity="0.75" />
    </g>
  );
}

/* ================================================================== */
/* 19. COMMERCIAL RITUAL (calendário recorrente / ciclo)              */
/* ================================================================== */
function CommercialRitual() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="150" ry="14" fill="url(#rev-glow)" opacity="0.7" />

      {/* Isometric calendar grid (week view) */}
      <g transform="translate(80, 110)">
        {/* base sheet */}
        <polygon points="0,80 200,80 240,40 40,40" fill="url(#true-grad)" stroke="#FFFFFF" strokeOpacity="0.5" />
        <polygon points="0,80 0,100 200,100 200,80" fill="#131D24" />
        <polygon points="200,80 240,40 240,60 200,100" fill="#21303A" />

        {/* Cells (5 days x 3 weeks) */}
        {Array.from({ length: 3 }).flatMap((_, row) =>
          Array.from({ length: 5 }).map((_, col) => {
            const isActive = (row === 1 && col === 2) || (row === 0 && col === 4);
            return (
              <rect
                key={`${row}-${col}`}
                x={20 + col * 36 + row * 8}
                y={50 + row * 10}
                width="32"
                height="8"
                fill={isActive ? "url(#rev-strong)" : "#3D4B55"}
                stroke="#5C7280"
                strokeWidth="0.5"
              />
            );
          }),
        )}
      </g>

      {/* Recurring loop arrow (large circular dashed) */}
      <g transform="translate(200, 200)">
        <path
          d="M -55 0 a 55 25 0 1 1 110 0"
          {...STROKE.route}
        />
        <polygon points="50,-3 60,5 48,8" fill="#FFFFFF" opacity="0.85" />
      </g>
    </g>
  );
}

/* ================================================================== */
/* 20. GOAL TARGET (alvo isométrico com flag)                         */
/* ================================================================== */
function GoalTarget() {
  return (
    <g>
      <ellipse cx="200" cy="285" rx="160" ry="14" fill="url(#rev-glow)" opacity="0.8" />
      <polygon points="60,265 340,265 360,245 80,245" {...STROKE.frame} />

      {/* Target — concentric isometric ellipses */}
      <g transform="translate(200, 220)">
        <ellipse cx="0" cy="0" rx="100" ry="28" fill="url(#rev-shade)" opacity="0.6" />
        <ellipse cx="0" cy="-3" rx="100" ry="28" fill="#3D4B55" />
        <ellipse cx="0" cy="-6" rx="78" ry="22" fill="url(#rev-strong)" />
        <ellipse cx="0" cy="-9" rx="56" ry="16" fill="url(#rev-grad)" />
        <ellipse cx="0" cy="-11" rx="32" ry="10" fill="url(#rev-strong)" />
        <ellipse cx="0" cy="-13" rx="14" ry="5" fill="#FFFFFF" />
      </g>

      {/* Flag on bullseye */}
      <Flag x={200} y={207} size={1.4} />
    </g>
  );
}

/* ================================================================== */
/* 21. REVENUE LEAK (pipeline com vazamento)                          */
/* ================================================================== */
function RevenueLeak() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="160" ry="14" fill="url(#rev-glow)" opacity="0.55" />

      {/* Pipeline (large horizontal cylinder) */}
      <g>
        <ellipse cx="60" cy="180" rx="14" ry="35" fill="url(#rev-shade)" />
        <rect x="60" y="145" width="280" height="70" fill="url(#rev-grad)" />
        <ellipse cx="340" cy="180" rx="14" ry="35" fill="url(#rev-strong)" />
        {/* highlight ridge */}
        <rect x="60" y="148" width="280" height="4" fill="#FAC1A1" opacity="0.7" />
        {/* base shadow */}
        <rect x="60" y="208" width="280" height="6" fill="#131D24" opacity="0.5" />
      </g>

      {/* Crack on the pipeline (jagged path) */}
      <path
        d="M 200 145 L 195 165 L 205 175 L 198 195 L 208 215"
        stroke="#131D24"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Leaking shapes (squares dripping out) */}
      <rect x="190" y="220" width="10" height="10" fill="url(#rev-strong)" opacity="0.85" transform="rotate(15 195 225)" />
      <rect x="200" y="240" width="8" height="8" fill="url(#rev-strong)" opacity="0.7" transform="rotate(-10 204 244)" />
      <rect x="186" y="255" width="6" height="6" fill="url(#rev-strong)" opacity="0.5" transform="rotate(20 189 258)" />

      {/* Warning frame around the crack */}
      <polygon points="170,135 230,135 230,225 170,225" {...STROKE.frame} />
    </g>
  );
}

/* ================================================================== */
/* 22. PATH SOLO (cliente caminhando autônomo)                        */
/* ================================================================== */
function PathSolo() {
  return (
    <g>
      <ellipse cx="200" cy="280" rx="160" ry="14" fill="url(#rev-glow)" opacity="0.7" />

      {/* Single dashed track (curving) */}
      <path
        d="M 30 240 C 100 220, 150 180, 220 180 S 340 130, 380 100"
        stroke="#FFFFFF"
        strokeWidth="14"
        strokeOpacity="0.07"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 30 240 C 100 220, 150 180, 220 180 S 340 130, 380 100"
        {...STROKE.route}
      />

      {/* Single client cube on the track */}
      <IsoBox gx={140} gy={210} w={32} h={36} d={12} active />

      {/* Destination flag at end */}
      <Flag x={370} y={100} color="url(#rev-strong)" size={1.2} />

      {/* Lone milestone */}
      <Flag x={250} y={172} />
    </g>
  );
}

/* ================================================================== */
/* 23. PATH TOGETHER (sócios + cliente na mesma plataforma)           */
/* ================================================================== */
function PathTogether() {
  return (
    <g>
      <ellipse cx="200" cy="285" rx="170" ry="16" fill="url(#rev-glow)" opacity="0.85" />

      {/* Wide shared platform */}
      <polygon
        points="40,260 360,260 380,235 60,235"
        fill="url(#true-grad)"
        stroke="#FFFFFF"
        strokeOpacity="0.55"
      />

      {/* Three figures side by side: partner — client (active) — partner */}
      <IsoBox gx={80} gy={235} w={40} h={60} d={12} />
      <IsoBox gx={170} gy={225} w={50} h={75} d={14} active />
      <IsoBox gx={260} gy={235} w={40} h={60} d={12} />

      {/* Connection arcs above linking the three */}
      <path d="M 100 165 C 140 130, 220 130, 280 165" {...STROKE.link} />

      {/* Direction flag in front of group */}
      <Flag x={200} y={228} size={1.1} color="url(#rev-strong)" />
    </g>
  );
}

/* ================================================================== */
/*                              REGISTRY                               */
/* ================================================================== */
type Entry = { Render: () => JSX.Element; viewBox: string };
const registry: Record<IllustrationName, Entry> = {
  // P0 — base
  "bowtie-journey":      { Render: BowtieJourney,        viewBox: "0 0 800 440" },
  "growth-stairs":       { Render: GrowthStairs,         viewBox: "0 0 400 320" },
  "map-route":           { Render: MapRoute,             viewBox: "0 0 400 300" },
  "connected-system":    { Render: ConnectedSystem,      viewBox: "0 0 400 320" },
  "stack-build":         { Render: StackBuild,           viewBox: "0 0 400 320" },
  "funnel-wings":        { Render: FunnelWings,          viewBox: "0 0 400 280" },
  // P1 — funil
  "funnel-marketing":    { Render: FunnelMarketing,      viewBox: "0 0 400 320" },
  "funnel-qualification":{ Render: FunnelQualification,  viewBox: "0 0 400 320" },
  "funnel-sales":        { Render: FunnelSales,          viewBox: "0 0 400 320" },
  "funnel-postsale":     { Render: FunnelPostsale,       viewBox: "0 0 400 320" },
  "funnel-expansion":    { Render: FunnelExpansion,      viewBox: "0 0 400 320" },
  // P2 — pilares
  "pillar-ai":           { Render: PillarAi,             viewBox: "0 0 400 320" },
  "pillar-data":         { Render: PillarData,           viewBox: "0 0 400 320" },
  "pillar-method":       { Render: PillarMethod,         viewBox: "0 0 400 320" },
  // P3 — sessão
  "revenue-session":     { Render: RevenueSession,       viewBox: "0 0 400 320" },
  "priority-plan":       { Render: PriorityPlan,         viewBox: "0 0 400 320" },
  "bottleneck-diagnosis":{ Render: BottleneckDiagnosis,  viewBox: "0 0 400 320" },
  // P4 — cross-cutting
  "automation-flow":     { Render: AutomationFlow,       viewBox: "0 0 400 320" },
  "commercial-ritual":   { Render: CommercialRitual,     viewBox: "0 0 400 320" },
  "goal-target":         { Render: GoalTarget,           viewBox: "0 0 400 320" },
  // P5 — problema/caminho
  "revenue-leak":        { Render: RevenueLeak,          viewBox: "0 0 400 320" },
  "path-solo":           { Render: PathSolo,             viewBox: "0 0 400 320" },
  "path-together":       { Render: PathTogether,         viewBox: "0 0 400 320" },
};
