import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Locale, VELORA_IMAGES } from '../data/veloraContent';
import { VeloraImage } from './VeloraImage';

interface BrandStorySectionProps {
  locale: Locale;
  onExploreCraft: () => void;
}

export function BrandStorySection({
  locale,
  onExploreCraft,
}: BrandStorySectionProps) {
  const isRtl = locale === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="story"
      data-animate-section
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Top Row: Floating Oud Driftwood + Centered Editorial Story + Floating Stone-Balanced Bottle */}
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Floating Sculptural Oud Wood Cutout (True Transparent PNG) */}
          <div
            data-parallax="-28"
            className="sec-float mx-auto w-56 sm:w-64 lg:col-span-3 lg:w-72"
          >
            <img
              src={VELORA_IMAGES.cutoutOudWood}
              alt={isRtl ? 'قطعة خشب عود طبيعي معتّق' : 'Sculptural raw aged Arabian agarwood'}
              className="cutout-png h-auto w-full object-contain"
            />
          </div>

          {/* Center Editorial Story Copy */}
          <div className="flex flex-col items-center text-center lg:col-span-6">
            <span className="sec-reveal editorial-kicker">
              {isRtl ? 'عن دار فيلورا' : 'ABOUT VELORA'}
            </span>

            <h2
              className={`sec-reveal font-display mt-4 text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal text-[#252923] [text-wrap:balance] ${
                isRtl ? 'leading-[1.22]' : 'leading-[1.1]'
              }`}
            >
              {isRtl ? (
                <>
                  أكثر من مجرّد عطر، إنه{' '}
                  <em className="font-normal italic text-[#35624F]">بصمتك الخاصة</em>
                </>
              ) : (
                <>
                  More than a perfume, it is a{' '}
                  <em className="font-normal italic text-[#252923]">
                    personal signature
                  </em>
                </>
              )}
            </h2>

            <p className="sec-reveal mt-5 max-w-[52ch] text-[14px] leading-[1.85] text-[#5A5E55] sm:text-[15px]">
              {isRtl
                ? 'تبتكر فيلورا عطوراً تصبح جزءاً من قصتك وحضورك. من إشراقة الصباح الهادئة إلى أمسيات اللقاءات الخاصة، صُممت كل قارورة لتمنحك شعوراً بالتفرّد والسكينة.'
                : 'VELORA creates fragrances that become part of your story. From quiet morning light to deep evening gatherings, every bottle is composed to feel intimate, grounded, and memorable.'}
            </p>

            <p className="sec-reveal mt-3 max-w-[48ch] text-[14px] leading-[1.85] text-[#5A5E55]">
              {isRtl
                ? 'تُمزج عطورنا من نوادر العود والزعفران والمسك الأبيض النقي، لتوازن بين أصالة الإرث العربي وحرفية التصميم المعاصر.'
                : 'Blended with rare agarwood, saffron, and pure white musk, our perfumes balance Arabian heritage with calm contemporary craftsmanship.'}
            </p>

            <button
              type="button"
              onClick={onExploreCraft}
              className="sec-reveal group mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-[#35624F] transition-colors hover:text-[#252923]"
            >
              <span>{isRtl ? 'اكتشف قصتنا' : 'Discover Our Story'}</span>
              <DirectionalArrow
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Floating Bottle on Stacked Natural Stones Cutout (True Transparent PNG) */}
          <div
            data-parallax="24"
            className="sec-float mx-auto w-52 sm:w-60 lg:col-span-3 lg:w-64"
          >
            <img
              src={VELORA_IMAGES.cutoutStoneBottle}
              alt={
                isRtl
                  ? 'قارورة عطر فيلورا متوازنة فوق أحجار طبيعية'
                  : 'VELORA amber fragrance bottle balanced on natural charcoal stones'
              }
              className="cutout-png h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Center-Lower Composition: Perfume Bottle Silhouette Cutout Flanked by Editorial Callouts */}
        <div className="relative mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-12">
          {/* Flanking Editorial Highlights — Side 1 */}
          <div className="flex justify-around gap-8 text-center lg:col-span-4 lg:flex-col lg:items-end lg:gap-16 lg:pe-10 lg:text-end">
            <div className="sec-reveal">
              <p className="font-display text-[clamp(2rem,3.2vw,2.75rem)] italic leading-none text-[#252923]">
                {isRtl ? 'عود نقي' : 'Pure Oud'}
              </p>
              <p className="mt-2 text-[12px] text-[#5A5E55]">
                {isRtl ? 'أخشاب وراتنجات معتّقة' : 'Aged Resinous Woods'}
              </p>
            </div>

            <div className="sec-reveal">
              <p className="font-display text-[clamp(2rem,3.2vw,2.75rem)] italic leading-none text-[#252923]">
                {isRtl ? 'خلاصة مركّزة' : 'Extrait'}
              </p>
              <p className="mt-2 text-[12px] text-[#5A5E55]">
                {isRtl ? 'ثبات وأثر يدوم طويلاً' : 'Enduring Skin Trail'}
              </p>
            </div>
          </div>

          {/* Center Bottle Silhouette Cutout Frame */}
          <div className="sec-mask-reveal relative mx-auto w-full max-w-[300px] sm:max-w-[330px] lg:col-span-4">
            <div className="mask-bottle-silhouette aspect-[3/4.6] w-full overflow-hidden shadow-md">
              <VeloraImage
                src={VELORA_IMAGES.oud}
                alt={
                  isRtl
                    ? 'قارورة فيلورا داخل إطار مجسم على شكل قارورة عطر'
                    : 'VELORA signature bottle framed inside a sculptural bottle silhouette'
                }
                className="h-full w-full"
                imgClassName="sec-inner-img scale-105 object-cover"
              />
            </div>
          </div>

          {/* Flanking Editorial Highlights — Side 2 */}
          <div className="flex justify-around gap-8 text-center lg:col-span-4 lg:flex-col lg:items-start lg:gap-16 lg:ps-10 lg:text-start">
            <div className="sec-reveal">
              <p className="font-display text-[clamp(2rem,3.2vw,2.75rem)] italic leading-none text-[#252923]">
                {isRtl ? 'نقاء طبيعي' : 'Botanical'}
              </p>
              <p className="mt-2 text-[12px] text-[#5A5E55]">
                {isRtl ? 'زعفران وأزهار بيضاء' : 'Saffron & White Florals'}
              </p>
            </div>

            <div className="sec-reveal">
              <p className="font-display text-[clamp(2rem,3.2vw,2.75rem)] italic leading-none text-[#252923]">
                {isRtl ? 'حرفية فاخرة' : 'Tactile'}
              </p>
              <p className="mt-2 text-[12px] text-[#5A5E55]">
                {isRtl ? 'قوارير زجاجية مصقولة' : 'Optical Glass Vessels'}
              </p>
            </div>
          </div>
        </div>

        {/* Organic Mossy Branch & Tilted Flacon Overlapping the Transition (True Transparent PNG) */}
        <div
          data-parallax="-18"
          className="sec-float relative z-20 mx-auto -mt-10 max-w-[820px] sm:-mt-16 lg:-mt-20"
        >
          <img
            src={VELORA_IMAGES.cutoutBranchBottle}
            alt={
              isRtl
                ? 'قارورة عطر تستقر فوق غصن طبيعي مكسو بالطحالب'
                : 'Minimalist fragrance flacon resting against a natural moss-covered branch'
            }
            className="cutout-png h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
