import { Check, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import {
  FormatOptionId,
  FRAGRANCES,
  FragranceId,
  GULF_CITIES,
  Locale,
} from '../data/veloraContent';
import { VeloraImage } from './VeloraImage';

interface FragranceDrawerProps {
  locale: Locale;
  activeFragranceId: FragranceId | null;
  initialFormat?: FormatOptionId;
  onSelectFragrance: (id: FragranceId) => void;
  onClose: () => void;
}

const FORMAT_OPTIONS: { id: FormatOptionId; label: Record<Locale, string> }[] = [
  { id: '50ml', label: { ar: 'قارورة 50 مل', en: '50 ml Flacon' } },
  { id: '100ml', label: { ar: 'قارورة 100 مل', en: '100 ml Flacon' } },
  {
    id: 'discovery',
    label: { ar: 'مجموعة الاكتشاف (3×10 مل)', en: 'Discovery Set (3×10 ml)' },
  },
];

export function FragranceDrawer({
  locale,
  activeFragranceId,
  initialFormat = '50ml',
  onSelectFragrance,
  onClose,
}: FragranceDrawerProps) {
  const isOpen = activeFragranceId !== null;
  const isRtl = locale === 'ar';

  const [format, setFormat] = useState<FormatOptionId>(initialFormat);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState(GULF_CITIES[locale][0]);
  const [note, setNote] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormat(initialFormat);
  }, [initialFormat, activeFragranceId]);

  useEffect(() => {
    setCity(GULF_CITIES[locale][0]);
  }, [locale]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !activeFragranceId) return null;

  const fragrance =
    FRAGRANCES.find((item) => item.id === activeFragranceId) ?? FRAGRANCES[0];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setErrorMsg(
        isRtl
          ? 'يرجى إدخال الاسم ووسيلة التواصل لإتمام الطلب.'
          : 'Please enter your name and contact details to submit.'
      );
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-fragrance-title"
    >
      {/* Soft Backdrop */}
      <div
        className="fixed inset-0 bg-[#252923]/35 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-Over Panel */}
      <aside className="relative z-10 flex h-full w-full max-w-[580px] flex-col overflow-y-auto bg-[#F5F3ED] text-[#252923] shadow-2xl">
        {/* Sticky Drawer Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#D8CDBB] bg-[#F5F3ED]/95 px-6 py-4 backdrop-blur-sm sm:px-8">
          <div className="flex items-center gap-2.5 text-[12px] text-[#5A5E55]">
            <span className="font-brand-latin text-[15px] font-semibold tracking-[0.18em] text-[#252923]">
              VELORA
            </span>
            <span aria-hidden="true">·</span>
            <span>{fragrance.concentration[locale]}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={isRtl ? 'إغلاق التفاصيل' : 'Close details'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D8CDBB] bg-[#FAF9F5] text-[#252923] transition-colors hover:border-[#35624F] hover:text-[#35624F]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Rounded Pill Fragrance Switcher inside Drawer */}
        <div className="border-b border-[#D8CDBB]/60 px-6 py-3.5 sm:px-8">
          <div className="grid grid-cols-3 gap-2 rounded-full border border-[#D8CDBB] bg-[#FAF9F5] p-1">
            {FRAGRANCES.map((item) => {
              const active = item.id === fragrance.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelectFragrance(item.id);
                    setSubmitted(false);
                    setErrorMsg('');
                  }}
                  className={`h-9 rounded-full text-center font-brand-latin text-[12.5px] font-semibold tracking-[0.06em] transition-all ${
                    active
                      ? 'bg-[#35624F] text-[#F5F3ED] shadow-xs'
                      : 'text-[#5A5E55] hover:text-[#252923]'
                  }`}
                >
                  {item.name.en}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-8 px-6 py-7 sm:px-8">
          {/* Fragrance Portrait & Story */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
            <div className="sm:col-span-5">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <VeloraImage
                  src={fragrance.editorialImage}
                  alt={fragrance.name[locale]}
                  aspectClassName="aspect-[3/4]"
                />
              </div>
            </div>

            <div className="sm:col-span-7">
              <span className="text-[11.5px] font-medium text-[#5A5E55]">
                {fragrance.mood[locale]}
              </span>
              <h2
                id="drawer-fragrance-title"
                className="font-display mt-1.5 text-[28px] font-medium text-[#252923]"
              >
                {fragrance.name[locale]}
              </h2>

              <p className="mt-2 text-[13px] font-medium text-[#35624F]">
                {fragrance.accords[locale].join(' · ')}
              </p>

              <p className="mt-3.5 text-[14px] leading-[1.85] text-[#5A5E55]">
                {fragrance.drawerEssay[locale]}
              </p>
            </div>
          </div>

          {/* Olfactory Pyramid Cards */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {(['top', 'heart', 'base'] as const).map((tier) => (
              <div
                key={tier}
                className="rounded-2xl border border-[#D8CDBB]/70 bg-[#FAF9F5] p-4"
              >
                <span className="block text-[11.5px] font-medium text-[#35624F]">
                  {fragrance.pyramid[tier].label[locale]}
                </span>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-[#252923]">
                  {fragrance.pyramid[tier].notes[locale]}
                </p>
              </div>
            ))}
          </div>

          {/* Format Selection Pills */}
          <div>
            <p className="text-[12px] font-medium text-[#5A5E55]">
              {isRtl ? 'اختر حجم الإصدار' : 'Select Edition Format'}
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {FORMAT_OPTIONS.map((opt) => {
                const selected = format === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormat(opt.id)}
                    className={`h-10 rounded-full border px-4 text-[12px] font-medium transition-all ${
                      selected
                        ? 'border-[#35624F] bg-[#35624F] text-[#F5F3ED]'
                        : 'border-[#D8CDBB] bg-[#FAF9F5] text-[#252923] hover:border-[#252923]'
                    }`}
                  >
                    {opt.label[locale]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Private Sample & Consultation Inquiry Form */}
          <div className="border-t border-[#D8CDBB]/80 pt-6 pb-4">
            <h3 className="font-display text-[24px] font-medium text-[#252923]">
              {isRtl
                ? 'طلب عينة خاصة أو استشارة عطرية'
                : 'Private Sample & Consultation Inquiry'}
            </h3>

            {submitted ? (
              <div className="mt-4 rounded-2xl border border-[#35624F]/40 bg-[#FAF9F5] p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#35624F] text-[#F5F3ED]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[#252923]">
                      {isRtl
                        ? 'تم استلام طلبك الخاص بنجاح'
                        : 'Your private inquiry has been recorded'}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-[1.8] text-[#5A5E55]">
                      {isRtl ? (
                        <>
                          شكراً لاهتمامك بدار فيلورا. تم تسجيل طلبك لإصدار{' '}
                          <strong className="font-medium text-[#252923]">
                            {fragrance.name.ar}
                          </strong>{' '}
                          ({FORMAT_OPTIONS.find((f) => f.id === format)?.label.ar}) في{' '}
                          {city}.
                        </>
                      ) : (
                        <>
                          Thank you for exploring VELORA. Your request for{' '}
                          <strong className="font-medium text-[#252923]">
                            {fragrance.name.en}
                          </strong>{' '}
                          ({FORMAT_OPTIONS.find((f) => f.id === format)?.label.en}) in{' '}
                          {city} has been logged.
                        </>
                      )}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 rounded-full border border-[#D8CDBB] px-4 py-1.5 text-[12px] font-medium text-[#252923] transition-colors hover:border-[#35624F] hover:text-[#35624F]"
                    >
                      {isRtl ? 'إرسال طلب آخر' : 'Submit another inquiry'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="velora-inquiry-name"
                      className="block text-[12px] text-[#5A5E55]"
                    >
                      {isRtl ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      id="velora-inquiry-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isRtl ? 'الاسم' : 'Your name'}
                      className="mt-1.5 h-11 w-full rounded-xl border border-[#D8CDBB] bg-[#FAF9F5] px-3.5 text-[13px] text-[#252923] placeholder:text-[#5A5E55]/60 focus:border-[#35624F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="velora-inquiry-contact"
                      className="block text-[12px] text-[#5A5E55]"
                    >
                      {isRtl ? 'البريد الإلكتروني أو الجوال' : 'Email or Mobile'}
                    </label>
                    <input
                      id="velora-inquiry-contact"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="name@example.com"
                      className="mt-1.5 h-11 w-full rounded-xl border border-[#D8CDBB] bg-[#FAF9F5] px-3.5 text-[13px] text-[#252923] placeholder:text-[#5A5E55]/60 focus:border-[#35624F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="velora-inquiry-city"
                    className="block text-[12px] text-[#5A5E55]"
                  >
                    {isRtl ? 'المدينة' : 'City'}
                  </label>
                  <select
                    id="velora-inquiry-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1.5 h-11 w-full rounded-xl border border-[#D8CDBB] bg-[#FAF9F5] px-3.5 text-[13px] text-[#252923] focus:border-[#35624F] focus:outline-none"
                  >
                    {GULF_CITIES[locale].map((cityName) => (
                      <option key={cityName} value={cityName}>
                        {cityName}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="velora-inquiry-note"
                    className="block text-[12px] text-[#5A5E55]"
                  >
                    {isRtl ? 'ملاحظة اختيارية' : 'Optional Note'}
                  </label>
                  <textarea
                    id="velora-inquiry-note"
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={
                      isRtl
                        ? 'شاركنا تفضيلاتك العطرية...'
                        : 'Share your preferred scent notes...'
                    }
                    className="mt-1.5 w-full resize-none rounded-xl border border-[#D8CDBB] bg-[#FAF9F5] px-3.5 py-2.5 text-[13px] text-[#252923] placeholder:text-[#5A5E55]/60 focus:border-[#35624F] focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <p role="alert" className="text-[12px] text-[#8B3A2E]">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="h-11 w-full rounded-full bg-[#35624F] px-6 text-[13px] font-medium text-[#F5F3ED] shadow-sm transition-colors duration-200 hover:bg-[#274B3C]"
                >
                  {isRtl ? 'إرسال الطلب الخاص' : 'Submit Private Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
