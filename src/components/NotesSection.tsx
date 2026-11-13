import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
  FRAGRANCES,
  FragranceId,
  Locale,
  NOTE_LAYERS,
  NoteLayerId,
  VELORA_IMAGES,
} from '../data/veloraContent';
import { VeloraImage } from './VeloraImage';

interface NotesSectionProps {
  locale: Locale;
  onSelectFragrance: (id: FragranceId) => void;
  onOpenDiscovery: () => void;
}

export function NotesSection({
  locale,
  onSelectFragrance,
  onOpenDiscovery,
}: NotesSectionProps) {
  const [activeLayerId, setActiveLayerId] = useState<NoteLayerId>('top');
  const isRtl = locale === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  const activeLayer =
    NOTE_LAYERS.find((layer) => layer.id === activeLayerId) ?? NOTE_LAYERS[0];

  const primaryFragrance =
    FRAGRANCES.find((f) => f.id === activeLayer.pairedFragrance) ?? FRAGRANCES[0];
  const secondaryFragrance =
    FRAGRANCES.find((f) => f.id !== primaryFragrance.id) ?? FRAGRANCES[1];

  return (
    <section
      id="notes"
      data-animate-section
      className="mx-auto max-w-[1320px] border-t border-[#D8CDBB]/70 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Centered Section Header */}
      <div className="flex flex-col items-center text-center">
        <span className="sec-reveal editorial-kicker">
          {isRtl ? 'بنية النوتات العطرية' : 'OLFACTORY ARCHITECTURE'}
        </span>

        <h2
          className={`sec-reveal font-display mt-3 text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-[#252923] [text-wrap:balance] ${
            isRtl ? 'leading-[1.22]' : 'leading-[1.12]'
          }`}
        >
          {isRtl
            ? 'نوتات متناغمة، نقاء استثنائي'
            : 'Composed notes, pure refinement'}
        </h2>

        <p className="sec-reveal mt-4 max-w-[50ch] text-[14px] leading-[1.85] text-[#5A5E55]">
          {isRtl
            ? 'توليفات محبوبة لعمقها، ونقائها الطبيعي، وثباتها الذي يبقى في الذاكرة. اختر طبقة العطر لتتبع كيف تتفتح المكونات.'
            : 'Cherished for their depth, natural clarity, and unforgettable scent profiles. Select a fragrance tier to explore how our botanicals unfold.'}
        </p>

        {/* Rounded Pill Tier Selector */}
        <div
          role="tablist"
          aria-label={isRtl ? 'طبقات النوتات العطرية' : 'Fragrance note layers'}
          className="sec-reveal mt-7 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#D8CDBB] bg-[#FAF9F5] p-1.5"
        >
          {NOTE_LAYERS.map((layer) => {
            const isSelected = layer.id === activeLayerId;
            const label =
              layer.id === 'top'
                ? isRtl
                  ? 'المقدمة'
                  : 'Top Notes'
                : layer.id === 'heart'
                ? isRtl
                  ? 'قلب العطر'
                  : 'Heart Notes'
                : isRtl
                ? 'القاعدة'
                : 'Base Notes';
            return (
              <button
                key={layer.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveLayerId(layer.id)}
                className={`h-9 rounded-full px-5 text-[12px] font-medium transition-all duration-200 whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#35624F] text-[#F5F3ED] shadow-xs'
                    : 'text-[#5A5E55] hover:text-[#252923]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Split Grid: Two Vertical Cards + Large Collage with Bottle Silhouette Cutout */}
      <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:mt-16 lg:grid-cols-12">
        {/* Half 1: 2 Cards + Pill Action Button */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[primaryFragrance, secondaryFragrance].map((frag) => (
              <article
                key={frag.id}
                onClick={() => onSelectFragrance(frag.id)}
                className="sec-card group cursor-pointer overflow-hidden rounded-2xl bg-[#FAF9F5] p-3 shadow-[0_10px_30px_rgba(37,41,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,41,35,0.08)]"
              >
                <div className="aspect-[3/3.4] w-full overflow-hidden rounded-xl">
                  <VeloraImage
                    src={frag.editorialImage}
                    alt={frag.name[locale]}
                    className="h-full w-full"
                    imgClassName="editorial-card-img"
                  />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-[19px] font-medium text-[#252923]">
                      {frag.name[locale]}
                    </h3>
                    <span className="font-display text-[14px] text-[#5A5E55]">
                      {frag.pyramid[activeLayerId].label[locale]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-[#5A5E55]">
                    {frag.pyramid[activeLayerId].notes[locale]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#35624F] transition-colors group-hover:text-[#252923]">
                    <span>{isRtl ? 'استكشف النوتات' : 'Inspect Notes'}</span>
                    <DirectionalArrow
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Active Tier Botanical Description Banner */}
          <div className="sec-reveal mt-6 rounded-2xl border border-[#D8CDBB]/70 bg-[#FAF9F5]/80 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-[20px] font-medium text-[#252923]">
                {activeLayer.title[locale]}
              </p>
              <span className="text-[12px] text-[#35624F]">
                {activeLayer.ingredients[locale].join(' · ')}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-[1.85] text-[#5A5E55]">
              {activeLayer.description[locale]}
            </p>
          </div>

          <div className="sec-reveal mt-7">
            <button
              type="button"
              onClick={onOpenDiscovery}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#35624F] px-7 text-[13px] font-medium text-[#F5F3ED] shadow-sm transition-all duration-200 hover:bg-[#274B3C] hover:-translate-y-0.5"
            >
              <span>{isRtl ? 'اكتشف الآن' : 'Explore Now'}</span>
              <DirectionalArrow className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Half 2: Square Botanical Backdrop with Central Perfume Bottle Silhouette Cutout Overlay */}
        <div className="sec-mask-reveal relative lg:col-span-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#EAE4D8] p-6 sm:p-10">
            {/* Soft Toned Botanical / Atelier Background Layer */}
            <img
              src={VELORA_IMAGES.notes}
              alt={
                isRtl
                  ? 'خشب العود، خيوط الزعفران، العنبر الذهبي، وزهر البرتقال الأبيض'
                  : 'Raw agarwood bark, crimson saffron threads, golden amber resin, and white orange blossoms'
              }
              className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale-[35%] contrast-95 transition-transform duration-700"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#252923]/15"
            />

            {/* Central Sculptural Bottle-Silhouette Cutout Frame */}
            <div className="relative z-10 mx-auto flex h-full w-full items-center justify-center">
              <div
                onClick={() => onSelectFragrance(primaryFragrance.id)}
                className="mask-bottle-silhouette group aspect-[3/4.5] h-[86%] cursor-pointer overflow-hidden shadow-2xl ring-1 ring-white/30"
              >
                <VeloraImage
                  src={activeLayer.image}
                  alt={primaryFragrance.name[locale]}
                  className="h-full w-full"
                  imgClassName="editorial-card-img scale-105 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
