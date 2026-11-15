import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { BrandStorySection } from './components/BrandStorySection';
import { ClosingAndFooter } from './components/ClosingAndFooter';
import { CollectionSection } from './components/CollectionSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { FragranceDrawer } from './components/FragranceDrawer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { NotesSection } from './components/NotesSection';
import { SculpturalMasks } from './components/SculpturalMasks';
import { FormatOptionId, FragranceId, Locale } from './data/veloraContent';

gsap.registerPlugin(ScrollTrigger);

const LOCALE_STORAGE_KEY = 'velora_locale';

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
        if (saved === 'ar' || saved === 'en') {
          return saved;
        }
      } catch {
        // Fallback safely if localStorage is restricted
      }
    }
    return 'ar';
  });
  const [activeFragranceId, setActiveFragranceId] = useState<FragranceId | null>(null);
  const [drawerFormat, setDrawerFormat] = useState<FormatOptionId>('50ml');
  const pageRef = useRef<HTMLDivElement>(null);

  // Sync <html lang> and <html dir>, save preferred language, and refresh ScrollTrigger on language switch
  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title =
      locale === 'ar'
        ? 'VELORA — دار العطور العربية المعاصرة'
        : 'VELORA — Contemporary Arabian Fragrance House';

    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore localStorage quota or private mode restrictions
    }

    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 60);
    return () => window.clearTimeout(timer);
  }, [locale]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Choreography
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '.hero-reveal',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            clearProps: 'transform,opacity',
          }
        )
        .fromTo(
          '.hero-mask-reveal',
          { opacity: 0, scale: 0.93, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.0,
            clearProps: 'transform,opacity',
          },
          '-=0.65'
        )
        .fromTo(
          '.hero-inner-img',
          { scale: 1.14 },
          {
            scale: 1.05,
            duration: 1.25,
            ease: 'power2.out',
          },
          '-=1.0'
        )
        .fromTo(
          '.hero-float',
          { opacity: 0, y: 24, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.14,
            clearProps: 'opacity',
          },
          '-=0.8'
        );

      // 2. Smooth Section-by-Section ScrollTrigger Reveals (triggers on scroll & nav jump)
      const sections = gsap.utils.toArray<HTMLElement>('[data-animate-section]');

      sections.forEach((section) => {
        const reveals = section.querySelectorAll('.sec-reveal');
        const maskReveals = section.querySelectorAll('.sec-mask-reveal');
        const innerImgs = section.querySelectorAll('.sec-inner-img');
        const cards = section.querySelectorAll('.sec-card');
        const floats = section.querySelectorAll('.sec-float');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 84%',
            end: 'bottom 12%',
            toggleActions: 'play none none reverse',
          },
        });

        if (reveals.length > 0) {
          tl.fromTo(
            reveals,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.09,
              ease: 'power3.out',
            },
            0
          );
        }

        if (floats.length > 0) {
          tl.fromTo(
            floats,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
            },
            0.08
          );
        }

        if (maskReveals.length > 0) {
          tl.fromTo(
            maskReveals,
            { opacity: 0, scale: 0.92, y: 26 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
            },
            0.1
          );
        }

        if (innerImgs.length > 0) {
          tl.fromTo(
            innerImgs,
            { scale: 1.15 },
            {
              scale: 1.05,
              duration: 1.15,
              ease: 'power2.out',
            },
            0.1
          );
        }

        if (cards.length > 0) {
          tl.fromTo(
            cards,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
            },
            0.14
          );
        }
      });

      // 3. Gentle Organic Scroll Parallax on Cutout Elements
      const parallaxItems = gsap.utils.toArray<HTMLElement>('[data-parallax]');
      parallaxItems.forEach((item) => {
        const yDelta = Number(item.getAttribute('data-parallax') || -18);
        gsap.to(item, {
          yPercent: yDelta * 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      });

      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleExploreCollection = () => {
    const collectionEl = document.getElementById('collection');
    if (collectionEl) {
      collectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreCraft = () => {
    const craftEl = document.getElementById('craftsmanship');
    if (craftEl) {
      craftEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenFragrance = (id: FragranceId) => {
    setDrawerFormat('50ml');
    setActiveFragranceId(id);
  };

  const handleOpenDiscovery = () => {
    setDrawerFormat('discovery');
    setActiveFragranceId('oud');
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F5F3ED] text-[#252923]">
      {/* Hidden SVG Clip Path Definitions for Stepped Frame & Bottle Silhouette */}
      <SculpturalMasks />

      <Navbar
        locale={locale}
        onToggleLocale={setLocale}
        onSelectFragrance={handleOpenFragrance}
        onOpenInquiry={handleOpenDiscovery}
      />

      <main>
        <HeroSection
          locale={locale}
          onExploreCollection={handleExploreCollection}
          onOpenDiscovery={handleOpenDiscovery}
        />

        <BrandStorySection
          locale={locale}
          onExploreCraft={handleExploreCraft}
        />

        <CollectionSection
          locale={locale}
          onSelectFragrance={handleOpenFragrance}
          onOpenDiscovery={handleOpenDiscovery}
        />

        <NotesSection
          locale={locale}
          onSelectFragrance={handleOpenFragrance}
          onOpenDiscovery={handleOpenDiscovery}
        />

        <CraftsmanshipSection locale={locale} />

        <ClosingAndFooter
          locale={locale}
          onToggleLocale={setLocale}
          onOpenDiscovery={handleOpenDiscovery}
          onSelectFragrance={handleOpenFragrance}
        />
      </main>

      <FragranceDrawer
        locale={locale}
        activeFragranceId={activeFragranceId}
        initialFormat={drawerFormat}
        onSelectFragrance={(id) => setActiveFragranceId(id)}
        onClose={() => setActiveFragranceId(null)}
      />
    </div>
  );
}
