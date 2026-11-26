import React from 'react';

/**
 * Natively wordmark: the lowercase "natively" the website draws in its navbar
 * (natively-website src/assets/brand/natively-wordmark-black.svg, TT Interphases
 * Pro DemiBold). Inline SVG filled with currentColor, so it takes the text colour
 * of wherever it sits and follows every theme. The viewBox is the word's own box,
 * 80.1 x 22; the baseline is at 16.68 of the 22 (the y's tail hangs below it).
 */
export const NativelyWordmark: React.FC<{
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
