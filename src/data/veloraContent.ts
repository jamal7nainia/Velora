import amberDunesImg from '../assets/images/velora_card_amber_dunes_1794587212457.jpg';
import amberImg from '../assets/images/velora_collection_amber_1794584848216.jpg';
import muskImg from '../assets/images/velora_collection_musk_1794584849216.jpg';
import oudImg from '../assets/images/velora_collection_oud_1794584848252.jpg';
import craftImg from '../assets/images/velora_craft_vessel_1794584851041.jpg';
import branchBottleCutoutPng from '../assets/images/velora_cutout_branch_bottle_clean.png';
import oudWoodCutoutPng from '../assets/images/velora_cutout_oud_wood_clean.png';
import stoneBottleCutoutPng from '../assets/images/velora_cutout_stone_bottle_clean.png';
import footerLandscapeCutoutPng from '../assets/images/velora_footer_landscape_clean.png';
import heroCampaignImg from '../assets/images/velora_hero_campaign_1794587207917.jpg';
import heroFlaconImg from '../assets/images/velora_hero_flacon_1794584846981.jpg';
import notesImg from '../assets/images/velora_notes_botanicals_1794584850451.jpg';
import storyImg from '../assets/images/velora_story_still_life_1794584847494.jpg';

export type Locale = 'ar' | 'en';
export type FragranceId = 'oud' | 'amber' | 'musk';
export type NoteLayerId = 'top' | 'heart' | 'base';
export type FormatOptionId = '50ml' | '100ml' | 'discovery';

export interface FragranceItem {
  id: FragranceId;
  name: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  image: string;
  editorialImage: string;
  accords: Record<Locale, string[]>;
  shortDescription: Record<Locale, string>;
  editorialSummary: Record<Locale, string>;
  drawerEssay: Record<Locale, string>;
  concentration: Record<Locale, string>;
  volume: Record<Locale, string>;
  mood: Record<Locale, string>;
  searchKeywords: string[];
  pyramid: Record<
    NoteLayerId,
    {
      label: Record<Locale, string>;
      notes: Record<Locale, string>;
    }
  >;
}

export interface NoteLayerDetail {
  id: NoteLayerId;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  cadence: Record<Locale, string>;
  description: Record<Locale, string>;
  ingredients: Record<Locale, string[]>;
  pairedFragrance: FragranceId;
  image: string;
}

export interface CraftsmanshipPillar {
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const VELORA_IMAGES = {
  heroCampaign: heroCampaignImg,
  heroFlacon: heroFlaconImg,
  story: storyImg,
  oud: oudImg,
  amber: amberImg,
  amberDunes: amberDunesImg,
  musk: muskImg,
  notes: notesImg,
  craft: craftImg,
  cutoutOudWood: oudWoodCutoutPng,
  cutoutStoneBottle: stoneBottleCutoutPng,
  cutoutBranchBottle: branchBottleCutoutPng,
  footerLandscape: footerLandscapeCutoutPng,
} as const;

export const MARQUEE_WORDS: Record<Locale, string[]> = {
  ar: [
    'عود معتّق',
    'سكينة',
    'فخامة هادئة',
    'عنبر صافٍ',
    'أصالة',
    'هوية خاصة',
    'مسك أبيض',
    'نقاء طبيعي',
  ],
  en: [
    'OUD',
    'CALM',
    'LUXURY',
    'AMBER',
    'ORGANIC',
    'IDENTITY',
    'WHITE MUSK',
    'BOTANICAL',
  ],
};

export const FRAGRANCES: FragranceItem[] = [
  {
    id: 'oud',
    name: {
      ar: 'فيلورا عود — VELORA OUD',
      en: 'VELORA OUD',
    },
    subtitle: {
      ar: 'عود معتّق وعنبر دافئ',
      en: 'Smoky Agarwood & Warm Amber',
    },
    image: heroCampaignImg,
    editorialImage: oudImg,
    accords: {
      ar: ['عود معتّق', 'أخشاب دافئة', 'عنبر'],
      en: ['Oud', 'Woods', 'Amber'],
    },
    shortDescription: {
      ar: 'عود معتّق، خشب الأرز الجاف، وعنبر ذهبي دافئ.',
      en: 'Aged agarwood, dry cedarwood, and warm golden amber.',
    },
    editorialSummary: {
      ar: 'توليفة تبدأ بنقاء الأخشاب الجافة ثم تستقر على قلب من العود المعتّق وقاعدة عنبرية هادئة تمنح العطر ثباتاً ناعماً دون صخب.',
      en: 'Opening with crisp dry woods before settling into aged agarwood and luminous amber, crafted for measured depth rather than excess.',
    },
    drawerEssay: {
      ar: 'صُمم عطر فيلورا عود ليقدّم العود الشرقي بروح هادئة ومعاصرة؛ نفحة خشبية صافية تلتصق بالذاكرة وتنساب بانسيابية من النهار إلى أمسيات الخليج.',
      en: 'VELORA OUD reimagines classic Arabian agarwood through contemporary restraint—clear resinous wood balanced by dry Atlas cedar and warm golden amber.',
    },
    concentration: {
      ar: 'خلاصة عطرية مركّزة',
      en: 'Extrait de Parfum',
    },
    volume: {
      ar: '100 مل',
      en: '100 ml',
    },
    mood: {
      ar: 'عميق · هادئ · راسخ',
      en: 'Grounded · Resinous · Composed',
    },
    searchKeywords: [
      'oud',
      'agarwood',
      'woods',
      'cedar',
      'amber',
      'incense',
      'sandalwood',
      'cardamom',
      'woody',
      'smoky',
      'عود',
      'فيلورا عود',
      'خشب',
      'اخشاب',
      'عنبر',
      'هيل',
      'صندل',
      'بخور',
    ],
    pyramid: {
      top: {
        label: { ar: 'المقدمة', en: 'Top Notes' },
        notes: { ar: 'هيل أخضر ناعم، برغموت دافئ', en: 'Green Cardamom, Soft Bergamot' },
      },
      heart: {
        label: { ar: 'القلب', en: 'Heart Notes' },
        notes: { ar: 'عود معتّق، خشب الأرز الأطلسي', en: 'Aged Agarwood, Atlas Cedarwood' },
      },
      base: {
        label: { ar: 'القاعدة', en: 'Base Notes' },
        notes: { ar: 'عنبر دافئ، خشب الصندل، بخور هادئ', en: 'Warm Amber, Sandalwood, Soft Incense' },
      },
    },
  },
  {
    id: 'amber',
    name: {
      ar: 'فيلورا عنبر — VELORA AMBER',
      en: 'VELORA AMBER',
    },
    subtitle: {
      ar: 'عنبر ذهبي وخيوط الزعفران',
      en: 'Golden Resin & Crimson Saffron',
    },
    image: amberDunesImg,
    editorialImage: amberImg,
    accords: {
      ar: ['عنبر', 'زعفران', 'توابل ناعمة'],
      en: ['Amber', 'Saffron', 'Spices'],
    },
    shortDescription: {
      ar: 'عنبر ذهبي صافٍ منسوج مع الزعفران والتوابل الدافئة.',
      en: 'Luminous golden amber threaded with saffron and warm spices.',
    },
    editorialSummary: {
      ar: 'تركيبة دافئة متوهجة تنساب فيها خيوط الزعفران فوق راتنج العنبر ولمسة توابل مخملية تحاكي الضوء عند الغروب.',
      en: 'A sunlit resinous composition where delicate saffron threads rest over velvety amber and dry warm spices, evoking late-afternoon desert light.',
    },
    drawerEssay: {
      ar: 'في فيلورا عنبر، تتحول التوابل الشرقية إلى نسيج ناعم غير لاذع؛ زعفران متزن يفتح الطريق لعنبرٍ ذهبي نقي يمنح الحضور دفئاً مألوفاً ومميزاً.',
      en: 'VELORA AMBER softens traditional spice into a luminous veil—measured saffron and subtle pink pepper yielding to pure, enduring golden resin.',
    },
    concentration: {
      ar: 'ماء عطر مركز',
      en: 'Eau de Parfum Intense',
    },
    volume: {
      ar: '100 مل',
      en: '100 ml',
    },
    mood: {
      ar: 'دافئ · مخملي · متوهج',
      en: 'Warm · Velvety · Radiant',
    },
    searchKeywords: [
      'amber',
      'saffron',
      'spices',
      'frankincense',
      'labdanum',
      'vanilla',
      'warm',
      'spicy',
      'resin',
      'rose',
      'عنبر',
      'فيلورا عنبر',
      'زعفران',
      'توابل',
      'لبان',
      'فانيليا',
      'ورد',
    ],
    pyramid: {
      top: {
        label: { ar: 'المقدمة', en: 'Top Notes' },
        notes: { ar: 'خيوط الزعفران، فلفل وردي ناعم', en: 'Saffron Threads, Soft Pink Pepper' },
      },
      heart: {
        label: { ar: 'القلب', en: 'Heart Notes' },
        notes: { ar: 'توابل دافئة، لبان ذهبي، ورد خفيف', en: 'Warm Spices, Golden Frankincense, Subtle Rose' },
      },
      base: {
        label: { ar: 'القاعدة', en: 'Base Notes' },
        notes: { ar: 'عنبر صافٍ، لابدانوم، فانيليا جافة', en: 'Pure Amber, Labdanum, Dry Vanilla Bean' },
      },
    },
  },
  {
    id: 'musk',
    name: {
      ar: 'فيلورا مسك — VELORA MUSK',
      en: 'VELORA MUSK',
    },
    subtitle: {
      ar: 'مسك أبيض نقي وأزهار ناعمة',
      en: 'Pure White Musk & Soft Florals',
    },
    image: muskImg,
    editorialImage: heroFlaconImg,
    accords: {
      ar: ['مسك أبيض', 'أزهار ناعمة'],
      en: ['White Musk', 'Soft Florals'],
    },
    shortDescription: {
      ar: 'مسك أبيض صافٍ، بتلات الياسمين، وزهر البرتقال الأبيض.',
      en: 'Sheer white musk, jasmine petals, and white orange blossom.',
    },
    editorialSummary: {
      ar: 'عطر قريب من البشرة، يفيض سكينةً وصفاءً بفضل توازن المسك الأبيض مع أزهار الياسمين وزهر البرتقال الناعم.',
      en: 'An intimate, skin-close composition balancing airy white musk with crushed jasmine petals and sheer orange blossom.',
    },
    drawerEssay: {
      ar: 'فيلورا مسك هو التعبير الأكثر هدوءاً في الدار؛ عطر يجمع بين النقاء اليومي والأناقة الراقية، مصمم ليرافق صاحبه كأثر شخصي حميم.',
      en: 'VELORA MUSK is the house’s quietest signature—an airy study in purity and soft petals crafted as a personal, second-skin veil.',
    },
    concentration: {
      ar: 'ماء عطر نقي',
      en: 'Eau de Parfum',
    },
    volume: {
      ar: '100 مل',
      en: '100 ml',
    },
    mood: {
      ar: 'صافٍ · أثيري · قريب',
      en: 'Pure · Airy · Intimate',
    },
    searchKeywords: [
      'musk',
      'white musk',
      'florals',
      'jasmine',
      'neroli',
      'orange blossom',
      'clean',
      'fresh',
      'soft',
      'cashmere',
      'مسك',
      'فيلورا مسك',
      'مسك ابيض',
      'ياسمين',
      'ازهار',
      'زهر البرتقال',
    ],
    pyramid: {
      top: {
        label: { ar: 'المقدمة', en: 'Top Notes' },
        notes: { ar: 'زهر البرتقال الأبيض، ندى نباتي', en: 'White Neroli, Fresh Botanical Dew' },
      },
      heart: {
        label: { ar: 'القلب', en: 'Heart Notes' },
        notes: { ar: 'ياسمين ناعم، أزهار بيضاء', en: 'Soft Jasmine Petals, White Florals' },
      },
      base: {
        label: { ar: 'القاعدة', en: 'Base Notes' },
        notes: { ar: 'مسك أبيض نقي، كشمير خشبي ناعم', en: 'Pure White Musk, Sheer Cashmere Wood' },
      },
    },
  },
];

export const NOTE_LAYERS: NoteLayerDetail[] = [
  {
    id: 'top',
    title: {
      ar: 'المقدمة — الإشراقة الأولى',
      en: 'Top Notes — The Initial Breath',
    },
    subtitle: {
      ar: 'الافتتاحية الهوائية',
      en: 'First Impression',
    },
    cadence: {
      ar: 'اللحظات الأولى على البشرة',
      en: 'Opening moments on skin',
    },
    description: {
      ar: 'تبدأ عطور فيلورا بانفتاح صافٍ غير حاد؛ زهر البرتقال والهيل الأخضر وخيوط الزعفران تهيئ الحواس برفق دون طغيان.',
      en: 'VELORA compositions open with luminous clarity rather than sharpness—delicate white neroli, green cardamom, and crimson saffron gently awaken the senses.',
    },
    ingredients: {
      ar: ['خيوط الزعفران', 'زهر البرتقال', 'هيل أخضر ناعم'],
      en: ['Saffron Threads', 'White Neroli', 'Green Cardamom'],
    },
    pairedFragrance: 'amber',
    image: amberImg,
  },
  {
    id: 'heart',
    title: {
      ar: 'القلب — جوهر الشخصية',
      en: 'Heart Notes — The Core Character',
    },
    subtitle: {
      ar: 'نبض التركيبة',
      en: 'Signature Resonance',
    },
    cadence: {
      ar: 'تتفتح خلال الساعات الأولى',
      en: 'Unfolding through the core hours',
    },
    description: {
      ar: 'في قلب العطر تتشكل الهوية الحقيقية؛ حيث يلتقي الياسمين الهادئ باللبان الذهبي وأخشاب الأرز والعود لتشكيل توقيع العطر.',
      en: 'At the heart lies each fragrance’s true temperament—soft jasmine petals, golden frankincense, Atlas cedar, and aged agarwood weaving a calm personal presence.',
    },
    ingredients: {
      ar: ['عود معتّق', 'ياسمين أبيض', 'لبان ذهبي'],
      en: ['Aged Agarwood', 'White Jasmine', 'Golden Frankincense'],
    },
    pairedFragrance: 'musk',
    image: muskImg,
  },
  {
    id: 'base',
    title: {
      ar: 'القاعدة — الأثر الذي يبقى',
      en: 'Base Notes — The Lasting Trail',
    },
    subtitle: {
      ar: 'العمق والذاكرة',
      en: 'Depth & Memory',
    },
    cadence: {
      ar: 'ثبات دافئ يمتد طويلاً',
      en: 'Lingering warmth into evening',
    },
    description: {
      ar: 'تستقر الذاكرة في القاعدة؛ عنبر دافئ، مسك أبيض صافٍ، وخشب صندل يمنح كل عطر بصمته الهادئة التي تبقى طويلاً بعد المغادرة.',
      en: 'Memory settles in the base—warm amber resin, pure white musk, and smooth sandalwood anchoring a quiet signature that lingers long after departure.',
    },
    ingredients: {
      ar: ['عنبر دافئ', 'مسك أبيض نقي', 'خشب الصندل'],
      en: ['Warm Amber Resin', 'Pure White Musk', 'Sandalwood'],
    },
    pairedFragrance: 'oud',
    image: oudImg,
  },
];

export const CRAFTSMANSHIP_PILLARS: CraftsmanshipPillar[] = [
  {
    title: {
      ar: 'الزجاج المعماري',
      en: 'Architectural Glass',
    },
    subtitle: {
      ar: 'القارورة والاتزان',
      en: 'Vessel & Weight',
    },
    description: {
      ar: 'قوارير بسمك متوازن وخطوط هندسية صافية تعكس لون العطر الطبيعي كما هو، وتمنح اليد إحساساً فورياً بالثبات والهدوء.',
      en: 'Weighted optical glass with pure planar geometry reveals the natural hue of each oil while resting solidly in the hand.',
    },
  },
  {
    title: {
      ar: 'التغليف الفاخر',
      en: 'Tactile Packaging',
    },
    subtitle: {
      ar: 'ورق قطني طبيعي',
      en: 'Cotton Paper Coffrets',
    },
    description: {
      ar: 'علب قطنية صلبة بدرجات العاجي الدافئ والرمل الهادئ، خالية من البهرجة والزخرفة المفرطة لتحافظ على نقاء التجربة.',
      en: 'Rigid uncoated cotton-paper boxes in warm ivory and quiet sand, free from ornamental excess so the presentation feels calm and honest.',
    },
  },
  {
    title: {
      ar: 'المكونات الطبيعية',
      en: 'Botanical Materials',
    },
    subtitle: {
      ar: 'أخشاب وراتنجات صافية',
      en: 'Raw Resins & Woods',
    },
    description: {
      ar: 'اختيار متأنٍ لخشب العود، والراتنجات الصافية، وخيوط الزعفران والبتلات المختارة لإبراز تباين الملمس والرائحة بأقصى درجات النقاء.',
      en: 'Carefully paired agarwood, clear amber resins, saffron, and botanical extracts chosen for natural depth and clarity across every layer.',
    },
  },
  {
    title: {
      ar: 'طقس التقديم',
      en: 'Ceremonial Presentation',
    },
    subtitle: {
      ar: 'هوية العطر',
      en: 'Fragrance Identity',
    },
    description: {
      ar: 'كل تفصيل في التقديم—من الغطاء المطفي إلى توازن أبعاد القارورة—صُمم ليحوّل لحظة فتح العطر إلى طقس شخصي هادئ.',
      en: 'From the matte tactile cap to the measured proportions of the vessel, every detail turns opening a bottle into a quiet personal ritual.',
    },
  },
];

export const GULF_CITIES: Record<Locale, string[]> = {
  ar: ['دبي', 'الرياض', 'أبوظبي', 'الدوحة', 'مدينة الكويت', 'المنامة', 'مسقط', 'جدة'],
  en: ['Dubai', 'Riyadh', 'Abu Dhabi', 'Doha', 'Kuwait City', 'Manama', 'Muscat', 'Jeddah'],
};
