export interface CharacterStat {
  label: string;
  labelAr: string;
  value: string;
  valueAr: string;
  detail?: string;
  detailAr?: string;
}

export interface CharacterTimelineEvent {
  year: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface IconicMoment {
  id: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  quote: string;
  quoteAr: string;
  tag: string;
}

export interface CharacterTheme {
  primaryColor: string; // e.g. '#e10600'
  secondaryColor: string; // e.g. '#facc15'
  accentGlow: string; // e.g. 'rgba(225, 6, 0, 0.4)'
  darkBg: string; // e.g. '#050507'
}

export interface CharacterData {
  id: string;
  nameEn: string;
  nameAr: string;
  taglineAr: string;
  taglineEn: string;
  racingNumber: string;
  identityEn: string;
  identityAr: string;
  coreThemes: string[];
  coreThemesAr: string[];
  image: string;
  bioEn: string;
  bioAr: string;
  theme: CharacterTheme;
  stats: CharacterStat[];
  timeline: CharacterTimelineEvent[];
  iconicMoments: IconicMoment[];
  sponsorsEn: string[];
  sponsorsAr: string[];
}

export const CHARACTERS: CharacterData[] = [
  {
    id: 'lightning-mcqueen',
    nameEn: 'LIGHTNING McQUEEN',
    nameAr: 'برق بنزين',
    taglineAr: '«تركيز. سرعة. أنا صاروخ.»',
    taglineEn: '«Focus. Speed. I\'m a rocket.»',
    racingNumber: '95',
    identityEn: 'RACING LEGEND',
    identityAr: 'أسطورة السباقات',
    coreThemes: ['SPEED', 'FOCUS', 'COMPETITION', 'LEGACY', 'MOTION'],
    coreThemesAr: ['سرعة', 'تركيز', 'منافسة', 'إرث', 'حركة'],
    image: '/assets/mcqueen.jpg',
    bioEn: 'A 7-time Piston Cup champion who redefined motorsport speed through raw talent, relentless focus, and the legendary wisdom learned on Route 66.',
    bioAr: 'بطل كأس بيستون ٧ مرات الذي أعاد تعريف سرعة رياضة المحركات بفضل موهبته الفذة، وتركيزه المستمر، والحكمة الأسطورية التي اكتسبها على طريق 66.',
    theme: {
      primaryColor: '#e10600',
      secondaryColor: '#facc15',
      accentGlow: 'rgba(225, 6, 0, 0.35)',
      darkBg: '#050507',
    },
    stats: [
      { label: 'TOP SPEED', labelAr: 'السرعة القصوى', value: '200 MPH', valueAr: '٣٢٠ كم/س', detail: 'V8 Racing Engine', detailAr: 'محرك V8 سباقات' },
      { label: 'PISTON CUPS', labelAr: 'كؤوس بيستون', value: '7 VICTORIES', valueAr: '٧ بطولات', detail: 'Record Holder', detailAr: 'حامل الرقم القياسي' },
      { label: 'ACCELERATION', labelAr: 'التسارع', value: '0-60 IN 3.2s', valueAr: '٠-١٠٠ في ٣.٢ ث', detail: 'High-Downforce Aero', detailAr: 'ديناميكية هوائية عالية' },
      { label: 'RACE TEAM', labelAr: 'فريق السباق', value: 'RUST-EZE 95', valueAr: 'راست-إيز ٩٥', detail: 'Radiator Springs Crew', detailAr: 'طاقم رادياتير سبرينجز' }
    ],
    timeline: [
      {
        year: '2006',
        title: 'ROOKIE SENSATION',
        titleAr: 'ظاهرة المبتدئين',
        description: 'Enters the Piston Cup circuit as an arrogant prodigy and discovers the true meaning of racing in Radiator Springs.',
        descriptionAr: 'يدخل حلبة كأس بيستون كموهبة واعدة يتعلم المعنى الحقيقي للسباق في رادياتير سبرينجز.'
      },
      {
        year: '2011',
        title: 'WORLD GRAND PRIX',
        titleAr: 'الجائزة الكبرى العالمية',
        description: 'Competes internationally across Tokyo, Italy, and London, mastering dirt track drifting techniques on global asphalt.',
        descriptionAr: 'يتافس عالمياً في طوكيو وإيطاليا ولندن، متقناً تقنيات الانجراف على الأسفلت العالمي.'
      },
      {
        year: '2017',
        title: 'THE MENTOR LEGACY',
        titleAr: 'إرث المعلم',
        description: 'Passes the torch to Cruz Ramirez with Hudson Hornet tactics, solidifying his role as a timeless racing legend.',
        descriptionAr: 'يسلم شعلة القيادة إلى كروز راميريز مستخدماً تكتيكات هودسون هورنيت ليصبح أسطورة خالدة.'
      }
    ],
    iconicMoments: [
      {
        id: 'turn-left-go-right',
        title: 'Turn Left to Go Right',
        titleAr: 'انعطف يساراً ل تتجه يميناً',
        location: 'Willy\'s Butte Dirt Track',
        locationAr: 'مضمار ويليز بيوت الترابي',
        quote: 'Doc Hudson taught me the secret of dirt track drifting.',
        quoteAr: 'علمني دوك هودسون سر الانجراف على المضمار الترابي.',
        tag: 'TECHNIQUE'
      },
      {
        id: 'tie-breaker',
        title: 'The Piston Cup Sacrifice',
        titleAr: 'تضحية كأس بيستون',
        location: 'Motor Speedway of the South',
        locationAr: 'حلبة الجنوب السريعة',
        quote: 'It\'s just an empty cup. King finishes his last race.',
        quoteAr: 'إنه مجرد كأس فارغ. يجب أن ينهي المليك سباقه الأخير.',
        tag: 'SPORTSMANSHIP'
      }
    ],
    sponsorsEn: ['RUST-EZE', 'DINoco', 'HUDSON HORNET MOTORS', 'LIGHTYEAR'],
    sponsorsAr: ['راست-إيز', 'دينوكو', 'محركات هودسون هورنيت', 'لايتير']
  },
  {
    id: 'doc-hudson',
    nameEn: 'DOC HUDSON',
    nameAr: 'دوك هودسون',
    taglineAr: '«السرعة ليست كل شيء، التحكم هو الأساس.»',
    taglineEn: '«Speed is nothing without mastery.»',
    racingNumber: '51',
    identityEn: 'FABULOUS HUDSON HORNET',
    identityAr: 'هودسون هورنيت الرائع',
    coreThemes: ['MASTERY', 'WISDOM', 'DIRT DRIFT', 'CHAMPION'],
    coreThemesAr: ['إتقان', 'حكمة', 'انجراف', 'بطل'],
    image: '/assets/mcqueen.jpg', // reusable structure fallback image
    bioEn: '3-time Piston Cup Champion (1951-1953) on dirt tracks. The legendary mentor who transformed McQueen into a true champion.',
    bioAr: 'بطل كأس بيستون ٣ مرات (١٩٥١-١٩٥٣) على المضامير الترابية. المعلم الأسطوري الذي صنع من برق بنزين بطلاً حقيقياً.',
    theme: {
      primaryColor: '#1d4ed8',
      secondaryColor: '#38bdf8',
      accentGlow: 'rgba(29, 78, 216, 0.35)',
      darkBg: '#050507',
    },
    stats: [
      { label: 'PISTON CUPS', labelAr: 'كؤوس بيستون', value: '3 TITLES', valueAr: '٣ القاب', detail: '1951, 1952, 1953', detailAr: '١٩٥١، ١٩٥٢، ١٩٥٣' },
      { label: 'SPECIALTY', labelAr: 'التخصص', value: 'DIRT DRIFTING', valueAr: 'الانجراف الترابي', detail: 'Twin H-Power', detailAr: 'قوة H المزدوجة' }
    ],
    timeline: [],
    iconicMoments: [],
    sponsorsEn: ['HUDSON MOTORS'],
    sponsorsAr: ['محركات هودسون']
  },
  {
    id: 'cruz-ramirez',
    nameEn: 'CRUZ RAMIREZ',
    nameAr: 'كروز راميريز',
    taglineAr: '«المستقبل لا ينتظر أحداً.»',
    taglineEn: '«The future waits for no one.»',
    racingNumber: '51',
    identityEn: 'NEXT-GEN CHAMPION',
    identityAr: 'بطلة الجيل الجديد',
    coreThemes: ['NEXT-GEN', 'AGILITY', 'PASSION', 'FUTURE'],
    coreThemesAr: ['الجيل الجديد', 'رشاقة', 'شغف', 'مستقبل'],
    image: '/assets/mcqueen.jpg',
    bioEn: 'High-tech trainer turned racing powerhouse, representing the bridge between legendary tradition and cutting-edge racing analytics.',
    bioAr: 'مدربة عالية التقنية تحولت إلى قوة سباق ضاربة، تجسد الجسر بين التقاليد الأسطورية وتحليلات السباق الحديثة.',
    theme: {
      primaryColor: '#eab308',
      secondaryColor: '#f97316',
      accentGlow: 'rgba(234, 179, 8, 0.35)',
      darkBg: '#050507',
    },
    stats: [
      { label: 'TOP SPEED', labelAr: 'السرعة القصوى', value: '210 MPH', valueAr: '٣٣٥ كم/س', detail: 'CRS Simulator Trained', detailAr: 'تدريب محاكي CRS' },
      { label: 'VICTORIES', labelAr: 'الانتصارات', value: 'FLORIDA 500', valueAr: 'فلوريدا ٥٠٠', detail: 'Dinoco 51 Legend', detailAr: 'أسطورة دينوكو ٥١' }
    ],
    timeline: [],
    iconicMoments: [],
    sponsorsEn: ['DINOCO'],
    sponsorsAr: ['دينوكو']
  }
];
