import React from 'react';

/**
 * FREECLUELY wordmark badge with emerald-cyan accent dot.
 */
export const BrandWordmark: React.FC<{
    /** Drawn height in px. */
    height?: number;
    className?: string;
}> = ({ height = 14, className = '' }) => (
    <span
        className={`inline-flex items-center gap-1.5 font-semibold tracking-tight select-none ${className}`}
        style={{ fontSize: Math.max(13, Math.round(height * 1.1)), lineHeight: 1 }}
        aria-label="FREECLUELY"
    >
        <span
            className="inline-block rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 shrink-0"
            style={{ width: Math.max(7, Math.round(height * 0.5)), height: Math.max(7, Math.round(height * 0.5)) }}
        />
        <span>FREECLUELY</span>
    </span>
);
