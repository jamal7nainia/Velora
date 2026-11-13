export function SculpturalMasks() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 h-0 w-0 overflow-hidden"
    >
      <defs>
        {/* Stepped Architectural Cross-Arch Mask (inspired by editorial fragrance campaigns) */}
        <clipPath id="velora-stepped-clip" clipPathUnits="objectBoundingBox">
          <path d="M 0.19,0.0 H 0.81 Q 0.85,0.0 0.85,0.04 V 0.11 Q 0.85,0.15 0.89,0.15 H 0.96 Q 1.0,0.15 1.0,0.19 V 0.81 Q 1.0,0.85 0.96,0.85 H 0.89 Q 0.85,0.85 0.85,0.89 V 0.96 Q 0.85,1.0 0.81,1.0 H 0.19 Q 0.15,1.0 0.15,0.96 V 0.89 Q 0.15,0.85 0.11,0.85 H 0.04 Q 0.0,0.85 0.0,0.81 V 0.19 Q 0.0,0.15 0.04,0.15 H 0.11 Q 0.15,0.15 0.15,0.11 V 0.04 Q 0.15,0.0 0.19,0.0 Z" />
        </clipPath>

        {/* Perfume Bottle Silhouette Cutout Mask */}
        <clipPath id="velora-bottle-clip" clipPathUnits="objectBoundingBox">
          <path d="M 0.33,0.0 H 0.67 Q 0.72,0.0 0.72,0.038 V 0.075 Q 0.72,0.11 0.66,0.11 H 0.63 V 0.155 Q 0.63,0.18 0.68,0.185 H 0.82 Q 0.95,0.195 0.95,0.29 V 0.91 Q 0.95,1.0 0.83,1.0 H 0.17 Q 0.05,1.0 0.05,0.91 V 0.29 Q 0.05,0.195 0.18,0.185 H 0.32 Q 0.37,0.18 0.37,0.155 V 0.11 H 0.34 Q 0.28,0.11 0.28,0.075 V 0.038 Q 0.28,0.0 0.33,0.0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function VeloraCrest({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 34"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 31V14C6 8.477 10.477 4 16 4C21.523 4 26 8.477 26 14V31"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M10 31V14.5C10 11.186 12.686 8.5 16 8.5C19.314 8.5 22 11.186 22 14.5V31"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M16 4V31" stroke="currentColor" strokeWidth="1.2" />
      <path d="M13 13V31" stroke="currentColor" strokeWidth="1" strokeOpacity="0.65" />
      <path d="M19 13V31" stroke="currentColor" strokeWidth="1" strokeOpacity="0.65" />
      <path d="M4 31H28" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function BotanicalSprigIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7 22C10.5 17.5 15 12.5 21 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14 13C11 12.5 9.5 10 10.5 7.5C13 7.5 15 9.5 14 13Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 15C17.5 14.5 19.5 16.5 18.5 19C16 19 14 17.5 14.5 15Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 17.5C8 17 6.5 15 7.5 12.8C9.8 12.8 11.2 14.8 10.5 17.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
