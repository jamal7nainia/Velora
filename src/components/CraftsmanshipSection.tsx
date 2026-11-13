import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { CRAFTSMANSHIP_PILLARS, Locale, VELORA_IMAGES } from '../data/veloraContent';
import { VeloraImage } from './VeloraImage';

interface CraftsmanshipSectionProps {
  locale: Locale;
}

export function CraftsmanshipSection({ locale }: CraftsmanshipSectionProps) {
  const [pairIndex, setPairIndex] = useState(0);
  const isRtl = locale === 'ar';

  const bottleShowcaseImages = [
    VELORA_IMAGES.heroCampaign,
    VELORA_IMAGES.craft,
  ];

  const leftPillar = CRAFTSMANSHIP_PILLARS[pairIndex * 2];
  const rightPillar = CRAFTSMANSHIP_PILLARS[pairIndex * 2 + 1];

  const handleTogglePair = () => {
    setPairIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section
      id="craftsmanship"
      data-animate-section
      className="mx-auto max-w-[1320px] border-t border-[#D8CDBB]/70 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Centered Editorial Heading */}
      <div className="flex flex-col items-center text-center">
        <span className="sec-reveal editorial-kicker">
          {isRtl ? 'حرفية وتجربة الدار' : 'ATELIER CRAFTSMANSHIP'}
        </span>

        <h2
          className={`sec-reveal font-display mt-3 text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-[#252923] [text-wrap:balance] ${
            isRtl ? 'leading-[1.22]' : 'leading-[1.12]'
          }`}
        >
          {isRtl ? (
            <>
              تفاصيل هادئة،{' '}
              <em className="font-normal italic text-[#35624F]">انطباعات خالدة</em>
            </>
          ) : (
            <>
              Quiet details,{' '}
              <em className="font-normal italic">meaningful impressions</em>
            </>
          )}
        </h2>
      </div>

      {/* Three-Column Sculptural Composition: Floating Card 1 + Central Bottle Silhouette Cutout + Floating Card 2 */}
      <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-12">
        {/* Floating Card 1 (Elevated) */}
        <div className="sec-card lg:col-span-4 lg:-mt-16">
          <div className="rounded-2xl bg-[#FAF9F5] p-7 shadow-[0_10px_30px_rgba(37,41,35,0.04)]">
            <div className="flex items-center justify-between">
              <span className="font-display text-[36px] leading-none text-[#252923]">
                “
              </span>
              <span
                className={`font-medium text-[#35624F] ${
                  isRtl ? 'text-[12px]' : 'text-[11px] tracking-[0.16em] uppercase'
                }`}
              >
                {leftPillar.subtitle[locale]}
              </span>
            </div>

            <p className="mt-3 text-[14px] leading-[1.85] text-[#5A5E55]">
              {leftPillar.description[locale]}
            </p>

            <div className="mt-6 flex items-center gap-3.5 border-t border-[#D8CDBB]/50 pt-4">
              <img
                src={VELORA_IMAGES.story}
                alt={leftPillar.title[locale]}
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div>
                <p className="font-display text-[17px] font-semibold text-[#252923]">
                  {leftPillar.title[locale]}
                </p>
                <p className="text-[11px] text-[#5A5E55]">
                  {isRtl ? 'معيار دار فيلورا' : 'VELORA Atelier Standard'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Perfume Bottle Silhouette Cutout + Round Carousel Arrows */}
        <div className="sec-mask-reveal flex flex-col items-center lg:col-span-4">
          <div className="w-full max-w-[270px] sm:max-w-[295px]">
            <div className="mask-bottle-silhouette aspect-[3/4.6] w-full overflow-hidden shadow-lg">
              <VeloraImage
                src={bottleShowcaseImages[pairIndex]}
                alt={
                  isRtl
                    ? 'حرفية الزجاج وتفاصيل التقديم في فيلورا'
                    : 'VELORA glass vessel and natural wood craftsmanship'
                }
                className="h-full w-full"
                imgClassName="sec-inner-img scale-105 object-cover"
              />
            </div>
          </div>

          <div dir="ltr" className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={handleTogglePair}
              aria-label={isRtl ? 'التفصيل السابق' : 'Previous craftsmanship detail'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#35624F] text-[#F5F3ED] transition-transform duration-200 hover:bg-[#274B3C] hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleTogglePair}
              aria-label={isRtl ? 'التفصيل التالي' : 'Next craftsmanship detail'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#35624F] text-[#F5F3ED] transition-transform duration-200 hover:bg-[#274B3C] hover:scale-105"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Floating Card 2 (Staggered Lower) */}
        <div className="sec-card lg:col-span-4 lg:mt-16">
          <div className="rounded-2xl bg-[#FAF9F5] p-7 shadow-[0_10px_30px_rgba(37,41,35,0.04)]">
            <div className="flex items-center justify-between">
              <span className="font-display text-[36px] leading-none text-[#252923]">
                “
              </span>
              <span
                className={`font-medium text-[#35624F] ${
                  isRtl ? 'text-[12px]' : 'text-[11px] tracking-[0.16em] uppercase'
                }`}
              >
                {rightPillar.subtitle[locale]}
              </span>
            </div>

            <p className="mt-3 text-[14px] leading-[1.85] text-[#5A5E55]">
              {rightPillar.description[locale]}
            </p>

            <div className="mt-6 flex items-center gap-3.5 border-t border-[#D8CDBB]/50 pt-4">
              <img
                src={VELORA_IMAGES.craft}
                alt={rightPillar.title[locale]}
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div>
                <p className="font-display text-[17px] font-semibold text-[#252923]">
                  {rightPillar.title[locale]}
                </p>
                <p className="text-[11px] text-[#5A5E55]">
                  {isRtl ? 'فخامة الملمس والتقديم' : 'Tactile Presentation'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
