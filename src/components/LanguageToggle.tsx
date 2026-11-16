import { useEffect, useRef, useState } from 'react';
import { Locale } from '../data/veloraContent';

interface LanguageToggleProps {
  locale: Locale;
  onToggleLocale: (next: Locale) => void;
  size?: 'default' | 'compact';
  className?: string;
}

const ANIMATION_DURATION_MS = 320;

export function LanguageToggle({
  locale,
  onToggleLocale,
  size = 'default',
  className = '',
}: LanguageToggleProps) {
  const [visualLocale, setVisualLocale] = useState<Locale>(locale);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const isCompact = size === 'compact';
  const buttonWidth = isCompact ? 48 : 52;
  const isRtl = locale === 'ar';

  // Keep visualLocale in sync if external locale changes (e.g., from another toggle instance)
  useEffect(() => {
    if (!isAnimatingRef.current) {
      setVisualLocale(locale);
    }
  }, [locale]);

  // Clean up any pending timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSelect = (target: Locale) => {
    // If the target is already selected or an animation is already in flight, do nothing
    if (target === locale || isAnimatingRef.current) {
      return;
    }

    // 1. Immediately animate the visual indicator toward the chosen language
    isAnimatingRef.current = true;
    setVisualLocale(target);

    // 2. Wait until the sliding animation completes before triggering the actual language switch
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false;
      onToggleLocale(target);
    }, ANIMATION_DURATION_MS);
  };

  const translateX = visualLocale === 'ar' ? 0 : buttonWidth;

  return (
    <div
      role="group"
      aria-label={isRtl ? 'تغيير اللغة' : 'Language switcher'}
      dir="ltr"
      className={`relative inline-flex items-center rounded-full border border-[#D8CDBB] bg-[#FAF9F5] p-1 select-none shrink-0 ${
        isCompact ? 'h-9 w-[106px]' : 'h-10 w-[114px]'
      } ${className}`}
    >
      {/* Smooth Sliding Green Pill Indicator */}
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 rounded-full bg-[#35624F] shadow-sm will-change-transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: `${buttonWidth}px`,
          transform: `translateX(${translateX}px)`,
        }}
      />

      {/* Option 1: Arabic */}
      <button
        type="button"
        onClick={() => handleSelect('ar')}
        aria-pressed={visualLocale === 'ar'}
        className={`relative z-10 inline-flex items-center justify-center rounded-full font-body-ar transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35624F]/40 ${
          isCompact ? 'h-7 w-[48px] text-[11.5px]' : 'h-8 w-[52px] text-[12px]'
        } font-medium leading-none ${
          visualLocale === 'ar'
            ? 'text-[#F5F3ED]'
            : 'text-[#5A5E55] hover:text-[#252923]'
        }`}
      >
        عربي
      </button>

      {/* Option 2: English */}
      <button
        type="button"
        onClick={() => handleSelect('en')}
        aria-pressed={visualLocale === 'en'}
        className={`relative z-10 inline-flex items-center justify-center rounded-full font-body-en transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35624F]/40 ${
          isCompact ? 'h-7 w-[48px] text-[10.5px]' : 'h-8 w-[52px] text-[11px]'
        } font-semibold tracking-[0.08em] leading-none ${
          visualLocale === 'en'
            ? 'text-[#F5F3ED]'
            : 'text-[#5A5E55] hover:text-[#252923]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
