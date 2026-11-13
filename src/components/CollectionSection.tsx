import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FRAGRANCES, FragranceId, Locale } from '../data/veloraContent';
import { VeloraImage } from './VeloraImage';

interface CollectionSectionProps {
  locale: Locale;
  onSelectFragrance: (id: FragranceId) => void;
  onOpenDiscovery: () => void;
}

export function CollectionSection({
  locale,
  onSelectFragrance,
  onOpenDiscovery,
}: CollectionSectionProps) {
  const isRtl = locale === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const [oud, amber, musk] = FRAGRANCES;

  return (
    <div id="collection">
      {/* Section 1: Staggered Diagonal Editorial Selections */}
      <section
        data-animate-section
        className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Column 1: Section Header + Card 1 (VELORA AMBER) */}
          <div className="flex flex-col justify-between lg:col-span-4">
            <div className="mb-10 lg:mb-14">
              <span className="sec-reveal editorial-kicker-start">
                {isRtl ? 'مجموعاتنا العطرية' : 'OUR COLLECTIONS'}
              </span>
              <h2
                className={`sec-reveal font-display mt-3 text-[clamp(2.1rem,3.6vw,3.2rem)] font-normal text-[#252923] [text-wrap:balance] ${
                  isRtl ? 'leading-[1.22]' : 'leading-[1.12]'
                }`}
              >
                {isRtl
                  ? 'اكتشف اختيارات عطرية خالدة'
                  : 'Discover timeless fragrance selections'}
              </h2>
              <p className="sec-reveal mt-4 max-w-[38ch] text-[13px] leading-[1.85] text-[#5A5E55] sm:text-[14px]">
                {isRtl
                  ? 'تركيبات صُممت لكل مزاج وموسم وذكرى؛ سواء كنت تميل إلى دفء العود المعتّق، أو إشراقة الزعفران والعنبر، أو صفاء المسك الأبيض.'
                  : 'Explore scents created for every mood, season, and memory. Whether you gravitate toward smoky agarwood, golden saffron, or sheer white musk.'}
              </p>
            </div>

            {/* Staggered Card 1 */}
            <article
              onClick={() => onSelectFragrance(amber.id)}
              className="sec-card group cursor-pointer overflow-hidden rounded-2xl bg-[#FAF9F5] shadow-[0_10px_30px_rgba(37,41,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,41,35,0.08)]"
            >
              <div className="aspect-[4/3.6] w-full overflow-hidden">
                <VeloraImage
                  src={amber.image}
                  alt={amber.name[locale]}
                  className="h-full w-full"
                  imgClassName="editorial-card-img"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-[22px] font-medium text-[#252923]">
                  {amber.name[locale]}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5A5E55]">
                  {amber.shortDescription[locale]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#35624F] transition-colors group-hover:text-[#252923]">
                  <span>{isRtl ? 'استكشف العطر' : 'Explore Fragrance'}</span>
                  <DirectionalArrow
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </span>
              </div>
            </article>
          </div>

          {/* Center Column: Staggered Card 2 (VELORA MUSK — shifted down on desktop) */}
          <div className="lg:col-span-4 lg:mt-48">
            <article
              onClick={() => onSelectFragrance(musk.id)}
              className="sec-card group cursor-pointer overflow-hidden rounded-2xl bg-[#FAF9F5] shadow-[0_10px_30px_rgba(37,41,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,41,35,0.08)]"
            >
              <div className="aspect-[4/3.6] w-full overflow-hidden">
                <VeloraImage
                  src={musk.image}
                  alt={musk.name[locale]}
                  className="h-full w-full"
                  imgClassName="editorial-card-img"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-[22px] font-medium text-[#252923]">
                  {musk.name[locale]}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5A5E55]">
                  {musk.shortDescription[locale]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#35624F] transition-colors group-hover:text-[#252923]">
                  <span>{isRtl ? 'استكشف العطر' : 'Explore Fragrance'}</span>
                  <DirectionalArrow
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </span>
              </div>
            </article>
          </div>

          {/* Column 3: Staggered Card 3 (VELORA OUD — elevated at top on desktop) */}
          <div className="lg:col-span-4">
            <article
              onClick={() => onSelectFragrance(oud.id)}
              className="sec-card group cursor-pointer overflow-hidden rounded-2xl bg-[#FAF9F5] shadow-[0_10px_30px_rgba(37,41,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,41,35,0.08)]"
            >
              <div className="aspect-[4/3.8] w-full overflow-hidden">
                <VeloraImage
                  src={oud.image}
                  alt={oud.name[locale]}
                  className="h-full w-full"
                  imgClassName="editorial-card-img"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-[22px] font-medium text-[#252923]">
                  {oud.name[locale]}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5A5E55]">
                  {oud.shortDescription[locale]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#35624F] transition-colors group-hover:text-[#252923]">
                  <span>{isRtl ? 'استكشف العطر' : 'Explore Fragrance'}</span>
                  <DirectionalArrow
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </span>
              </div>
            </article>
          </div>
        </div>

        {/* Centered Pill Button */}
        <div className="sec-reveal mt-12 flex justify-center">
          <button
            type="button"
            onClick={onOpenDiscovery}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#35624F] px-7 text-[13px] font-medium text-[#F5F3ED] shadow-sm transition-all duration-200 hover:bg-[#274B3C] hover:-translate-y-0.5"
          >
            <span>{isRtl ? 'اطلب مجموعة الاكتشاف' : 'Request Discovery Set'}</span>
            <DirectionalArrow className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* Section 2: Centered Signature Editions Trio */}
      <section
        data-animate-section
        className="mx-auto max-w-[1320px] border-t border-[#D8CDBB]/70 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="flex flex-col items-center text-center">
          <span className="sec-reveal editorial-kicker">
            {isRtl ? 'العطور الأساسية' : 'SIGNATURE SCENTS'}
          </span>

          <h2
            className={`sec-reveal font-display mt-3 text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-[#252923] [text-wrap:balance] ${
              isRtl ? 'leading-[1.22]' : 'leading-[1.12]'
            }`}
          >
            {isRtl
              ? 'عطور أنيقة بجوهر يتجاوز الزمن'
              : 'Elegant fragrances with timeless essence'}
          </h2>

          <p className="sec-reveal mt-4 max-w-[48ch] text-[14px] leading-[1.85] text-[#5A5E55]">
            {isRtl
              ? 'صُممت عطورنا الأساسية لترافقك بجمالٍ هادئ، تاركةً أثراً ناعماً من الثقة والحضور والرقّي.'
              : 'Our signature perfumes are crafted to stay with you beautifully, leaving a calm trail of confidence, warmth, and quiet sophistication.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3 lg:mt-16">
          {FRAGRANCES.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectFragrance(item.id)}
              className="sec-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-[#FAF9F5] p-3 shadow-[0_10px_30px_rgba(37,41,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,41,35,0.08)]"
            >
              <div className="aspect-[4/4.2] w-full overflow-hidden rounded-xl">
                <VeloraImage
                  src={item.editorialImage}
                  alt={item.name[locale]}
                  className="h-full w-full"
                  imgClassName="editorial-card-img"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between px-3 pb-3 pt-5">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-[21px] font-medium text-[#252923]">
                      {item.name[locale]}
                    </h3>
                    <span className="font-display text-[16px] text-[#252923] tabular-nums">
                      {item.volume[locale]}
                    </span>
                  </div>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#5A5E55]">
                    {item.editorialSummary[locale]}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#D8CDBB]/50 pt-3.5">
                  <span className="text-[11.5px] font-medium text-[#5A5E55]">
                    {item.accords[locale].join(' · ')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#35624F] transition-colors group-hover:text-[#252923]">
                    <span>{isRtl ? 'تفاصيل العطر' : 'Explore Scent'}</span>
                    <DirectionalArrow
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
