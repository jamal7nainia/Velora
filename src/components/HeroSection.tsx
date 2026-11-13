import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Locale, MARQUEE_WORDS, VELORA_IMAGES } from '../data/veloraContent';
import { BotanicalSprigIcon } from './SculpturalMasks';
import { VeloraImage } from './VeloraImage';

interface HeroSectionProps {
  locale: Locale;
  onExploreCollection: () => void;
  onOpenDiscovery: () => void;
}

export function HeroSection({
  locale,
  onExploreCollection,
  onOpenDiscovery,
}: HeroSectionProps) {
  const isRtl = locale === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const words = MARQUEE_WORDS[locale];
  const repeatedMarquee = [...words, ...words];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pb-20 lg:pt-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Editorial Headline & Pill CTA */}
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:px-4">
            <span className="hero-reveal editorial-kicker">
              {isRtl ? 'دار العطور العربية الفاخرة' : 'LUXURY FRAGRANCE HOUSE'}
            </span>

            <h1
              className={`hero-reveal font-display mt-5 font-normal text-[#252923] [text-wrap:balance] ${
                isRtl
                  ? 'text-[clamp(2.5rem,4.8vw,4.35rem)] leading-[1.18]'
                  : 'text-[clamp(2.75rem,5.2vw,4.65rem)] uppercase leading-[1.04] tracking-[0.02em]'
              }`}
            >
              {isRtl
                ? 'صُنعت لتبقى خالدةً في ذاكرتك'
                : 'MADE TO LINGER IN YOUR MEMORY'}
            </h1>

            <p className="hero-reveal mt-6 max-w-[44ch] text-[14px] leading-[1.85] text-[#5A5E55] sm:text-[15px]">
              {isRtl
                ? 'اكتشف عالماً من العطور العربية الراقية المصممة للحظات لا تُنسى. تُمزج كل تركيبة من العود المعتّق والعنبر الصافي بلمسة من الفخامة الهادئة.'
                : 'Discover refined Arabian fragrances crafted for unforgettable moments. Each scent is blended with aged oud, luminous amber, and a touch of quiet luxury.'}
            </p>

            <div className="hero-reveal mt-8 flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                onClick={onExploreCollection}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#35624F] px-7 text-[13px] font-medium text-[#F5F3ED] shadow-sm transition-all duration-200 hover:bg-[#274B3C] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35624F]"
              >
                {isRtl ? 'اكتشف الآن' : 'Explore Now'}
              </button>

              <button
                type="button"
                onClick={onOpenDiscovery}
                className="group inline-flex h-11 items-center gap-2 px-2 text-[13px] font-medium text-[#35624F] transition-colors hover:text-[#252923]"
              >
                <span>{isRtl ? 'استكشف المجموعات' : 'Explore Collections'}</span>
                <DirectionalArrow
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isRtl
                      ? 'group-hover:-translate-x-1'
                      : 'group-hover:translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Sculptural Stepped Architectural Cutout + Overlapping Transparent Oud Cutouts */}
          <div className="relative mx-auto w-full max-w-[540px] lg:col-span-6">
            {/* Floating Transparent Oud Wood Cutout breaking out of top corner */}
            <div
              data-parallax="-24"
              className="hero-float pointer-events-none absolute -left-8 -top-6 z-20 hidden w-44 sm:block lg:-left-12 lg:w-52"
            >
              <img
                src={VELORA_IMAGES.cutoutOudWood}
                alt=""
                aria-hidden="true"
                className="cutout-png h-auto w-full -rotate-12 object-contain"
              />
            </div>

            {/* Stepped Architectural Cutout Frame */}
            <div className="hero-mask-reveal relative mx-auto aspect-[4/4.5] w-full">
              <div className="mask-stepped-frame h-full w-full overflow-hidden shadow-sm">
                <VeloraImage
                  src={VELORA_IMAGES.heroCampaign}
                  alt={
                    isRtl
                      ? 'قارورة عطر فيلورا الفاخرة محاطة باللحاء الطبيعي وأزهار الماغنوليا البيضاء'
                      : 'VELORA signature amber and oud flacon surrounded by natural bark and white magnolia blossoms'
                  }
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full"
                  imgClassName="hero-inner-img scale-105 object-cover"
                />
              </div>
            </div>

            {/* Floating Transparent Oud Branch Accent breaking out of bottom corner */}
            <div
              data-parallax="18"
              className="hero-float pointer-events-none absolute -bottom-8 -right-6 z-20 hidden w-40 sm:block lg:-right-8 lg:w-48"
            >
              <img
                src={VELORA_IMAGES.cutoutOudWood}
                alt=""
                aria-hidden="true"
                className="cutout-png h-auto w-full rotate-[145deg] scale-x-[-1] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botanical Marquee Divider Strip */}
      <div className="border-y border-[#D8CDBB] bg-[#F5F3ED] py-4 overflow-hidden">
        <div className="animate-velora-marquee flex items-center gap-10">
          {repeatedMarquee.map((word, idx) => (
            <div key={`${word}-${idx}`} className="flex items-center gap-10 shrink-0">
              <BotanicalSprigIcon className="h-5 w-5 text-[#5A5E55]" />
              <span
                className={`font-medium text-[#252923] ${
                  isRtl ? 'text-[13px]' : 'text-[11px] tracking-[0.22em]'
                }`}
              >
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
