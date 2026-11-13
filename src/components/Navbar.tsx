import { ArrowLeft, ArrowRight, Menu, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FRAGRANCES, FragranceId, Locale } from '../data/veloraContent';
import { VeloraCrest } from './SculpturalMasks';

interface NavbarProps {
  locale: Locale;
  onToggleLocale: (next: Locale) => void;
  onSelectFragrance: (id: FragranceId) => void;
  onOpenInquiry: () => void;
}

export function Navbar({
  locale,
  onToggleLocale,
  onSelectFragrance,
  onOpenInquiry,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const isRtl = locale === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { href: '#story', label: isRtl ? 'عن الدار' : 'ABOUT' },
    { href: '#collection', label: isRtl ? 'المجموعات' : 'COLLECTIONS' },
    { href: '#notes', label: isRtl ? 'النوتات' : 'NOTES' },
    { href: '#craftsmanship', label: isRtl ? 'الحرفية' : 'CRAFT' },
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredFragrances = normalizedQuery
    ? FRAGRANCES.filter(
        (item) =>
          item.name.en.toLowerCase().includes(normalizedQuery) ||
          item.name.ar.toLowerCase().includes(normalizedQuery) ||
          item.subtitle.en.toLowerCase().includes(normalizedQuery) ||
          item.subtitle.ar.toLowerCase().includes(normalizedQuery) ||
          item.accords.en.some((a) => a.toLowerCase().includes(normalizedQuery)) ||
          item.accords.ar.some((a) => a.toLowerCase().includes(normalizedQuery)) ||
          item.searchKeywords.some((k) => k.toLowerCase().includes(normalizedQuery))
      )
    : FRAGRANCES;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F3ED]/95 backdrop-blur-md border-b border-[#D8CDBB]/75'
          : 'bg-[#F5F3ED] border-b border-[#D8CDBB]/55'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        {/* Zone 1: Brand Crest + VELORA Wordmark Side-by-Side at the Start */}
        <a
          href="#top"
          dir="ltr"
          className="group inline-flex items-center gap-2.5 text-[#252923] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35624F]"
        >
          <VeloraCrest className="h-[22px] w-[22px] shrink-0 text-[#252923] transition-colors duration-200 group-hover:text-[#35624F]" />
          <span className="font-brand-latin translate-y-[1px] text-[24px] font-semibold tracking-[0.20em] leading-none text-[#252923]">
            VELORA
          </span>
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label={isRtl ? 'التنقل الرئيسي' : 'Primary navigation'}
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-1 font-medium text-[#252923]/75 transition-colors duration-200 hover:text-[#252923] whitespace-nowrap shrink-0 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:scale-x-0 after:bg-[#35624F] after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                isRtl ? 'text-[13.5px]' : 'text-[11px] tracking-[0.16em]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Rounded Search Input + Precision Segmented Language Switcher + CTA */}
        <div className="flex items-center gap-2.5 lg:gap-3 shrink-0">
          {/* Interactive Search Bar */}
          <div ref={searchContainerRef} className="relative hidden sm:block">
            <div
              className={`flex h-10 w-44 lg:w-52 items-center gap-2 rounded-full border bg-[#FAF9F5] px-3.5 transition-colors duration-200 ${
                searchFocused
                  ? 'border-[#35624F] ring-1 ring-[#35624F]/20'
                  : 'border-[#D8CDBB] hover:border-[#252923]/40'
              }`}
            >
              <Search className="h-3.5 w-3.5 shrink-0 text-[#5A5E55]" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setSearchFocused(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchFocused(true);
                }}
                placeholder={isRtl ? 'ابحث عن عطر...' : 'Search fragrance...'}
                aria-label={
                  isRtl ? 'ابحث عن عطر بالاسم أو المكونات' : 'Search fragrance by name or note'
                }
                className="w-full bg-transparent text-[12px] text-[#252923] placeholder:text-[#5A5E55]/75 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label={isRtl ? 'مسح البحث' : 'Clear search'}
                  className="text-[#5A5E55] hover:text-[#252923]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Interactive Search Results Dropdown */}
            {searchFocused && (
              <div className="absolute end-0 top-[calc(100%+8px)] w-80 rounded-2xl border border-[#D8CDBB] bg-[#FAF9F5] p-3 shadow-xl">
                <div className="mb-2 flex items-center justify-between px-2 text-[11px] font-medium text-[#5A5E55]">
                  <span>
                    {normalizedQuery
                      ? isRtl
                        ? 'نتائج البحث المطابقة'
                        : 'Matching Fragrances'
                      : isRtl
                      ? 'إصدارات الدار'
                      : 'Signature Editions'}
                  </span>
                  <span>{filteredFragrances.length}</span>
                </div>

                {filteredFragrances.length > 0 ? (
                  <div className="space-y-1.5">
                    {filteredFragrances.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSearchFocused(false);
                          onSelectFragrance(item.id);
                        }}
                        className="flex w-full items-center gap-3 rounded-xl p-2 text-start transition-colors hover:bg-[#F5F3ED]"
                      >
                        <img
                          src={item.editorialImage}
                          alt={item.name[locale]}
                          className="h-12 w-10 shrink-0 rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-[15px] font-semibold text-[#252923]">
                            {item.name[locale]}
                          </p>
                          <p className="truncate text-[11px] text-[#5A5E55]">
                            {item.accords[locale].join(' · ')}
                          </p>
                        </div>
                        <DirectionalArrow className="h-3.5 w-3.5 shrink-0 text-[#35624F]" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-2 py-4 text-center text-[12px] text-[#5A5E55]">
                    {isRtl
                      ? `لا توجد عطور تطابق "${searchQuery}". جرب "عود" أو "عنبر" أو "مسك".`
                      : `No fragrances match “${searchQuery}”. Try “Oud”, “Amber”, or “Musk”.`}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Precision-Engineered Segmented Language Switcher Pill */}
          <div
            role="group"
            aria-label={isRtl ? 'تغيير اللغة' : 'Language switcher'}
            dir="ltr"
            className="inline-flex h-10 items-center rounded-full border border-[#D8CDBB] bg-[#FAF9F5] p-1 shrink-0"
          >
            <button
              type="button"
              onClick={() => onToggleLocale('ar')}
              aria-pressed={locale === 'ar'}
              className={`font-body-ar inline-flex h-8 items-center justify-center rounded-full px-3 text-[12px] font-medium leading-none transition-all duration-200 ${
                locale === 'ar'
                  ? 'bg-[#35624F] text-[#F5F3ED] shadow-xs'
                  : 'text-[#5A5E55] hover:text-[#252923]'
              }`}
            >
              عربي
            </button>
            <button
              type="button"
              onClick={() => onToggleLocale('en')}
              aria-pressed={locale === 'en'}
              className={`font-body-en inline-flex h-8 items-center justify-center rounded-full px-3 text-[11px] font-semibold tracking-[0.08em] leading-none transition-all duration-200 ${
                locale === 'en'
                  ? 'bg-[#35624F] text-[#F5F3ED] shadow-xs'
                  : 'text-[#5A5E55] hover:text-[#252923]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary Sample Set CTA */}
          <button
            type="button"
            onClick={onOpenInquiry}
            className="hidden lg:inline-flex h-10 items-center justify-center rounded-full bg-[#35624F] px-5 text-[12px] font-medium text-[#F5F3ED] transition-all duration-200 hover:bg-[#274B3C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35624F]"
          >
            {isRtl ? 'طقم العينات' : 'Sample Set'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={isRtl ? 'فتح القائمة' : 'Toggle menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CDBB] text-[#252923] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Search & Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#D8CDBB]/80 bg-[#F5F3ED] px-5 pb-6 pt-4 md:hidden">
          <div className="mb-4 flex h-11 items-center gap-2 rounded-full border border-[#D8CDBB] bg-[#FAF9F5] px-4">
            <Search className="h-4 w-4 text-[#5A5E55]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isRtl
                  ? 'ابحث عن عطر (عود، عنبر، مسك)...'
                  : 'Search fragrance (Oud, Amber, Musk)...'
              }
              className="w-full bg-transparent text-[13px] text-[#252923] placeholder:text-[#5A5E55] focus:outline-none"
            />
          </div>

          {normalizedQuery && (
            <div className="mb-4 space-y-1.5 rounded-2xl border border-[#D8CDBB] bg-[#FAF9F5] p-2.5">
              {filteredFragrances.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectFragrance(item.id);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-start text-[13px] hover:bg-[#F5F3ED]"
                >
                  <span className="font-display font-semibold">{item.name[locale]}</span>
                  <span className="text-[11px] text-[#35624F]">
                    {item.accords[locale].join(' · ')}
                  </span>
                </button>
              ))}
            </div>
          )}

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-[#D8CDBB]/40 text-[14px] font-medium text-[#252923]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="mt-4 flex min-h-[46px] w-full items-center justify-center rounded-full bg-[#35624F] px-5 text-[13px] font-medium text-[#F5F3ED]"
            >
              {isRtl ? 'اطلب طقم العينات' : 'Request Sample Set'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
