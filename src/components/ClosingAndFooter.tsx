import { Check, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { FragranceId, Locale, VELORA_IMAGES } from '../data/veloraContent';
import { LanguageToggle } from './LanguageToggle';
import { VeloraCrest } from './SculpturalMasks';

interface ClosingAndFooterProps {
  locale: Locale;
  onToggleLocale: (next: Locale) => void;
  onOpenDiscovery: () => void;
  onSelectFragrance: (id: FragranceId) => void;
}

export function ClosingAndFooter({
  locale,
  onToggleLocale,
  onOpenDiscovery,
  onSelectFragrance,
}: ClosingAndFooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const isRtl = locale === 'ar';

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      {/* Section G: Final Editorial CTA with Integrated Transparent Mossy Branch & Bottle Cutout */}
      <section
        data-animate-section
        className="relative overflow-hidden border-t border-[#D8CDBB]/70 pt-20 pb-12 sm:pt-28 sm:pb-16"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="relative z-20 lg:col-span-6">
              <span className="sec-reveal editorial-kicker-start">
                {isRtl ? 'دائرة فيلورا الخاصة' : 'PRIVATE ATELIER CIRCLE'}
              </span>

              <h2
                className={`sec-reveal font-display mt-3 text-[clamp(2.2rem,4.2vw,3.5rem)] font-normal text-[#252923] [text-wrap:balance] ${
                  isRtl ? 'leading-[1.22]' : 'leading-[1.1]'
                }`}
              >
                {isRtl
                  ? 'ابقَ قريباً من الأناقة في كل قطرة'
                  : 'Stay connected to elegance in every drop'}
              </h2>

              <p className="sec-reveal mt-4 max-w-[46ch] text-[14px] leading-[1.85] text-[#5A5E55]">
                {isRtl
                  ? 'انضم إلى دائرة فيلورا للحصول على دعوات العينات الخاصة، وقصص التركيبات العطرية، والترشيحات المخصصة لذائقتك.'
                  : 'Join our fragrance circle for private sample invitations, scent stories, and tailored discovery recommendations.'}
              </p>

              {/* Rounded Pill Subscription / Sample Request Bar */}
              {subscribed ? (
                <div className="sec-reveal mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#35624F]/40 bg-[#FAF9F5] px-5 py-2.5 text-[13px] text-[#252923]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#35624F] text-[#F5F3ED]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>
                    {isRtl
                      ? 'مرحباً بك في دائرة فيلورا الخاصة. سنتواصل معك قريباً.'
                      : 'Welcome to the VELORA Circle. We will be in touch soon.'}
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="sec-reveal mt-7 flex flex-wrap items-center gap-3"
                >
                  <div className="flex h-11 w-full max-w-[280px] items-center gap-2.5 rounded-full border border-[#D8CDBB] bg-[#FAF9F5] px-4 focus-within:border-[#35624F]">
                    <Mail className="h-4 w-4 shrink-0 text-[#5A5E55]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email'
                      }
                      aria-label={isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      className="w-full bg-transparent text-[13px] text-[#252923] placeholder:text-[#5A5E55]/75 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[#35624F] px-7 text-[13px] font-medium text-[#F5F3ED] shadow-sm transition-all duration-200 hover:bg-[#274B3C]"
                  >
                    {isRtl ? 'اشترك الآن' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>

            {/* Integrated Transparent Cutout Mossy Branch & Perfume Flacon */}
            <div
              data-parallax="-20"
              className="sec-float relative z-10 lg:col-span-6"
            >
              <img
                src={VELORA_IMAGES.cutoutBranchBottle}
                alt={
                  isRtl
                    ? 'قارورة عطر فيلورا تستقر على غصن طبيعي مكسو بالطحالب'
                    : 'VELORA perfume bottle resting on a natural moss branch'
                }
                className="cutout-png mx-auto h-auto w-full max-w-[640px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section H: Centered Minimal Editorial Footer + Full-Bleed Bottom Landscape Scene */}
      <footer
        data-animate-section
        className="relative w-full overflow-hidden border-t border-[#D8CDBB] pt-16 pb-0"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {/* Centered Crest & Brand Statement */}
          <div className="sec-reveal flex flex-col items-center text-center">
            <a
              href="#top"
              dir="ltr"
              className="flex flex-col items-center text-[#252923] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35624F]"
            >
              <VeloraCrest className="h-7 w-7 text-[#252923]" />
              <span className="font-brand-latin mt-1.5 text-[28px] font-semibold tracking-[0.22em] text-[#252923]">
                VELORA
              </span>
            </a>

            <p className="mt-3 max-w-[44ch] text-[13px] leading-[1.8] text-[#5A5E55]">
              {isRtl
                ? 'حيث يصبح العطر هوية. صُنعت عطور فيلورا بدقة وهدوء لتجسّد الفخامة العربية المعاصرة وتبقى طويلاً في الذاكرة.'
                : 'Where Scent Becomes Identity. Crafted with precision and calm restraint, VELORA creates contemporary Arabian fragrances designed for lasting memory.'}
            </p>
          </div>

          {/* Three-Column Clean Footer Links */}
          <div className="sec-reveal mt-14 grid grid-cols-1 gap-10 border-t border-[#D8CDBB]/60 pt-10 sm:grid-cols-3">
            <div>
              <h3
                className={`font-semibold text-[#252923] ${
                  isRtl ? 'text-[14px]' : 'text-[12px] tracking-[0.12em] uppercase'
                }`}
              >
                {isRtl ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13px] text-[#5A5E55]">
                <li>
                  <a href="#top" className="transition-colors hover:text-[#35624F]">
                    {isRtl ? 'الرئيسية' : 'Home'}
                  </a>
                </li>
                <li>
                  <a href="#story" className="transition-colors hover:text-[#35624F]">
                    {isRtl ? 'عن فيلورا' : 'About Us'}
                  </a>
                </li>
                <li>
                  <a
                    href="#collection"
                    className="transition-colors hover:text-[#35624F]"
                  >
                    {isRtl ? 'المجموعات' : 'Collections'}
                  </a>
                </li>
                <li>
                  <a href="#notes" className="transition-colors hover:text-[#35624F]">
                    {isRtl ? 'النوتات العطرية' : 'Olfactory Notes'}
                  </a>
                </li>
                <li>
                  <a
                    href="#craftsmanship"
                    className="transition-colors hover:text-[#35624F]"
                  >
                    {isRtl ? 'الحرفية' : 'Craftsmanship'}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className={`font-semibold text-[#252923] ${
                  isRtl ? 'text-[14px]' : 'text-[12px] tracking-[0.12em] uppercase'
                }`}
              >
                {isRtl ? 'إصدارات الدار' : 'Signature Editions'}
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13px] text-[#5A5E55]">
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectFragrance('oud')}
                    className="transition-colors hover:text-[#35624F]"
                  >
                    {isRtl ? 'فيلورا عود — VELORA OUD' : 'VELORA OUD'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectFragrance('amber')}
                    className="transition-colors hover:text-[#35624F]"
                  >
                    {isRtl ? 'فيلورا عنبر — VELORA AMBER' : 'VELORA AMBER'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectFragrance('musk')}
                    className="transition-colors hover:text-[#35624F]"
                  >
                    {isRtl ? 'فيلورا مسك — VELORA MUSK' : 'VELORA MUSK'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenDiscovery}
                    className="transition-colors hover:text-[#35624F]"
                  >
                    {isRtl ? 'مجموعة عينات الاكتشاف' : 'Discovery Sample Set'}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className={`font-semibold text-[#252923] ${
                  isRtl ? 'text-[14px]' : 'text-[12px] tracking-[0.12em] uppercase'
                }`}
              >
                {isRtl ? 'الدار والتواصل' : 'Atelier & Channels'}
              </h3>
              <p className="mt-4 text-[13px] leading-relaxed text-[#5A5E55]">
                {isRtl ? (
                  <>
                    دار فيلورا للعطور
                    <br />
                    العطور الخليجية المعاصرة
                  </>
                ) : (
                  <>
                    VELORA Fragrance House
                    <br />
                    Contemporary Gulf Perfumery
                  </>
                )}
              </p>

              {/* Footer Language Switcher Pill */}
              <div className="mt-4">
                <LanguageToggle
                  locale={locale}
                  onToggleLocale={onToggleLocale}
                  size="compact"
                />
              </div>
            </div>
          </div>

          <div className="sec-reveal mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#D8CDBB]/50 pt-6 text-[12px] text-[#5A5E55]">
            <p>
              {isRtl
                ? '© 2026 VELORA. جميع الحقوق محفوظة.'
                : '© 2026 VELORA. All rights reserved.'}
            </p>
            <p className="font-brand-latin tracking-[0.16em] text-[#252923]">
              OUD · AMBER · MUSK
            </p>
          </div>
        </div>

        {/* Full-Width Bottom Landscape & Luxury Perfume Bottle Flush with Screen Bottom */}
        <div className="sec-float relative -mt-4 w-full sm:-mt-10 lg:-mt-16">
          <img
            src={VELORA_IMAGES.footerLandscape}
            alt={
              isRtl
                ? 'قارورة عطر فيلورا الفاخرة تتوسط تلة خضراء مكسوة بالطحالب والأزهار البرية في أسفل الصفحة'
                : 'VELORA luxury emerald-amber perfume bottle standing on a serene mossy green meadow at the bottom of the page'
            }
            className="block h-auto w-full select-none object-cover object-bottom"
          />
        </div>
      </footer>
    </>
  );
}
