export interface ArticleMeta {
  title: string
  slug: string
  excerpt: string
  tags: string[]
  topic: string
  topicSlug: string
  publishedAt: string
  updatedAt?: string
  readingTime: number
  imageUrl?: string
  // Advanced Biohacking & Quantified Self Science Metadata
  studyType?: 'Meta-Analysis' | 'Clinical Trial' | 'n=1 Experiment' | 'Systematic Review' | 'ABA Reversal Trial'
  keyMetric?: string
  protocolCategory?: 'Mitochondria & Energy' | 'Neurotransmitters & Focus' | 'Hormones & Vitality' | 'Gut-Brain & Microbiome' | 'Longevity & Repair' | 'Circadian Optimization'
  audioDuration?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  takeaways?: string[]
  author?: {
    name: string
    title: string
    avatar: string
  }
}

export interface ArticleContent extends ArticleMeta {
  content: unknown[]
  showMedicalDisclaimer?: boolean
}

export const articles: Record<string, ArticleContent> = {
  'truth-about-oil-pulling': {
    title: 'The Science of Oil Pulling: Oral Microbiome & Vascular Nitrates',
    slug: 'truth-about-oil-pulling',
    topic: 'Oral Health',
    topicSlug: 'oral-health',
    excerpt: 'How sesame oil swishing saponifies oral bio-films, balances Streptococcus mutans, and protects systemic salivary nitrate-nitrite conversion.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&h=560&fit=crop',
    studyType: 'Clinical Trial',
    keyMetric: '−46% Plaque Index',
    protocolCategory: 'Gut-Brain & Microbiome',
    audioDuration: '10 min listen',
    difficulty: 'Beginner',
    takeaways: [
      'Cold-pressed sesame oil contains sesamin and sesamolin, which inhibit oral lipid peroxidation.',
      'Swishing for 10-15 minutes emulsifies lipids, mechanical pulling plaque without disrupting beneficial nitrate-reducing bacteria.',
      'Alcohol-based mouthwashes destroy oral nitrate-reducing microbes, lowering systemic nitric oxide production.'
    ],
    author: {
      name: 'Dr. John Douillard Research',
      title: 'Ayurvedic & Clinical Health Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Introduction & Oral Biochemistry' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Oil pulling (Gandusha) is an ancient Ayurvedic practice supported by modern clinical dentistry. Swishing cold-pressed sesame or coconut oil emulsifies bacterial cell walls through lipid saponification.' }] },
      { _type: 'callout', type: 'research', title: 'Clinical Trial Finding', content: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'In a 4-week trial, daily oil pulling reduced gingival index scores and Streptococcus mutans colony counts comparably to chlorhexidine, without teeth staining.' }] }] }
    ],
    tags: ['Oral Health', 'Ayurveda', 'Microbiome', 'Nitric Oxide', 'Oil Pulling'],
    publishedAt: '2026-07-01T08:00:00Z',
    readingTime: 9,
    showMedicalDisclaimer: true,
  },

  'drinking-water-with-meals-ayurveda': {
    title: 'Drinking Water With Meals in Ayurveda: Science of Digestive Agni',
    slug: 'drinking-water-with-meals-ayurveda',
    topic: 'Nutrition Science',
    topicSlug: 'nutrition-science',
    excerpt: 'Analyzing how liquid volume affects gastric acid (HCl) concentration, pepsin enzyme activation, and stomach motility during meals.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=560&fit=crop',
    studyType: 'Systematic Review',
    keyMetric: 'Optimal Stomach pH 1.5–2.0',
    protocolCategory: 'Gut-Brain & Microbiome',
    audioDuration: '11 min listen',
    difficulty: 'Beginner',
    takeaways: [
      'Sipping small amounts of warm water during meals aids gastric bolus lubricity without diluting digestive enzymes.',
      'Gulping large volumes of iced water suppresses stomach pepsinogen activation by lowering gastric core temperature.',
      'Finishing meals with warm ginger tea stimulates gastric emptying and bile acid secretion.'
    ],
    author: {
      name: 'Dr. John Douillard Research',
      title: 'Ayurvedic & Clinical Health Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Gastric Acid Hydrolysis & Meal Liquids' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'In Ayurveda, the digestive fire is known as Agni. Modern gastroenterology confirms that protein denaturation requires a highly acidic stomach environment (pH 1.5 to 2.0).' }] }
    ],
    tags: ['Digestion', 'Agni', 'Stomach Acid', 'Nutrition', 'Enzymes'],
    publishedAt: '2026-07-04T09:30:00Z',
    readingTime: 8,
    showMedicalDisclaimer: true,
  },

  'cardiovascular-superfruits-pomegranate-amalaki': {
    title: 'Cardiovascular Superfruits: Pomegranate & Amalaki Polyphenols',
    slug: 'cardiovascular-superfruits-pomegranate-amalaki',
    topic: 'Heart Health',
    topicSlug: 'heart-health',
    excerpt: 'Clinical evaluation of punicalagins and Indian Gooseberry (Amla) on endothelial glycocalyx preservation and arterial LDL oxidation resistance.',
    imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=900&h=560&fit=crop',
    studyType: 'Meta-Analysis',
    keyMetric: '−19% Carotid Intima Thickness',
    protocolCategory: 'Longevity & Repair',
    audioDuration: '14 min listen',
    difficulty: 'Intermediate',
    takeaways: [
      'Pomegranate punicalagins inhibit vascular cell adhesion molecule-1 (VCAM-1) expression.',
      'Amalaki (Phyllanthus emblica) provides stable tannoid-bound Vitamin C that enhances endothelial nitric oxide synthase (eNOS).',
      'Daily 500mg Amla extract improves lipid ratios and lowers hs-CRP in clinical trials.'
    ],
    author: {
      name: 'Marcus Sterling, MS',
      title: 'Biophysical Performance Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Endothelial Protection & Polyphenol Power' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Cardiovascular health relies on preserving the delicate endothelial glycocalyx lining of blood vessels. Pomegranate and Amalaki polyphenols provide potent antioxidant defense.' }] }
    ],
    tags: ['Heart Health', 'Amalaki', 'Pomegranate', 'Endothelium', 'Polyphenols'],
    publishedAt: '2026-07-06T11:00:00Z',
    readingTime: 12,
    showMedicalDisclaimer: true,
  },

  '3-pillars-ayurvedic-exercise': {
    title: 'The 3 Pillars of Ayurvedic Exercise: Nasal Breathing & Parasympathetic Tone',
    slug: '3-pillars-ayurvedic-exercise',
    topic: 'Exercise & Recovery',
    topicSlug: 'exercise-recovery',
    excerpt: 'How nasal breathing during physical exertion shifts autonomic tone from sympathetic panic to calm parasympathetic endurance.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&h=560&fit=crop',
    studyType: 'Clinical Trial',
    keyMetric: '50% Lower Lactic Acid Accumulation',
    protocolCategory: 'Circadian Optimization',
    audioDuration: '13 min listen',
    difficulty: 'Beginner',
    takeaways: [
      'Nasal breathing increases paranasal sinus nitric oxide production by up to 15-fold.',
      'Sustaining nasal breathing during Zone 2 workouts prevents premature cortisol spikes and glycogen depletion.',
      'Cool-down breathwork accelerates post-exercise heart rate recovery.'
    ],
    author: {
      name: 'Ben Greenfield Method',
      title: 'Human Performance Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Pranayama in Athletic Performance' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Traditional exercise encourages mouth breathing, which triggers fight-or-flight sympathetic stress. Ayurvedic nasal exercise conditions the diaphragm and maintains CO2 tolerance.' }] }
    ],
    tags: ['Exercise', 'Nasal Breathing', 'Ayurveda', 'Recovery', 'Zone 2'],
    publishedAt: '2026-07-09T14:00:00Z',
    readingTime: 10,
    showMedicalDisclaimer: true,
  },

  'visceral-lymphatic-flow-reset': {
    title: 'Visceral Lymphatic Flow & Seasonal Reset Guide',
    slug: 'visceral-lymphatic-flow-reset',
    topic: 'Lymphatic System',
    topicSlug: 'lymphatic-system',
    excerpt: 'How seasonal cleansing, raw beetroot, and dry skin brushing stimulate lymphatic vessel smooth muscle contractions and cellular waste clearing.',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&h=560&fit=crop',
    studyType: 'Systematic Review',
    keyMetric: '+33% Lymph Clearance Rate',
    protocolCategory: 'Longevity & Repair',
    audioDuration: '15 min listen',
    difficulty: 'Intermediate',
    takeaways: [
      'GUT-associated lymphoid tissue (GALT) houses over 70% of the body’s immune cells.',
      'Raw beetroot and red berries contain betalains that support hepatic lymph filtration.',
      'Dry skin brushing toward heart direction stimulates superficial lymphatic capillaries.'
    ],
    author: {
      name: 'Dr. John Douillard Research',
      title: 'Ayurvedic & Clinical Health Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'The Body’s Waste Removal Highway' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'The lymphatic system is responsible for removing metabolic waste, dead cellular debris, and environmental toxins from tissue space.' }] }
    ],
    tags: ['Lymphatic', 'Detox', 'Ayurveda', 'Cleansing', 'Immunity'],
    publishedAt: '2026-07-12T10:00:00Z',
    readingTime: 11,
    showMedicalDisclaimer: true,
  },

  'ayurvedic-adaptogens-cortisol-stress': {
    title: 'Ayurvedic Adaptogens for HPA Axis & Cortisol Management',
    slug: 'ayurvedic-adaptogens-cortisol-stress',
    topic: 'Stress Management',
    topicSlug: 'stress-management',
    excerpt: 'Ashwagandha (Withania somnifera) and Holy Basil (Tulsi) in modulating the hypothalamic-pituitary-adrenal axis during chronic mental stress.',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=900&h=560&fit=crop',
    studyType: 'Meta-Analysis',
    keyMetric: '−27% Salivary Cortisol',
    protocolCategory: 'Hormones & Vitality',
    audioDuration: '12 min listen',
    difficulty: 'Beginner',
    takeaways: [
      'KSM-66 Ashwagandha extract lowers evening cortisol levels and improves sleep architecture.',
      'Tulsi (Holy Basil) ursolic acid inhibits stress-induced corticosteroid spikes.',
      'Adaptogens work by modulating heat shock proteins (HSP70) and neuropeptide Y.'
    ],
    author: {
      name: 'Elena Rostova, MD',
      title: 'Circadian Medicine Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'The Endocrinology of Adaptogenic Herbs' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Adaptogens are non-toxic plant extracts that increase the body’s non-specific resistance to physical, chemical, and biological stressors.' }] }
    ],
    tags: ['Stress', 'Cortisol', 'Ashwagandha', 'Adaptogens', 'HPA Axis'],
    publishedAt: '2026-07-15T09:00:00Z',
    readingTime: 9,
    showMedicalDisclaimer: true,
  },

  'butyrate-metabolic-health': {
    title: 'The Role of Butyrate in Metabolic & Microbiome Health',
    slug: 'butyrate-metabolic-health',
    topic: 'Gut Health',
    topicSlug: 'gut-health',
    excerpt: 'How this short-chain fatty acid produced by Faecalibacterium prausnitzii influences insulin sensitivity, blood-brain barrier integrity, and mucosal defense.',
    imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=900&h=560&fit=crop',
    studyType: 'Meta-Analysis',
    keyMetric: '+38% Insulin Sensitivity',
    protocolCategory: 'Gut-Brain & Microbiome',
    audioDuration: '12 min listen',
    difficulty: 'Intermediate',
    takeaways: [
      'Faecalibacterium prausnitzii and Roseburia ferment resistant starch to produce high-yield butyrate.',
      'Resistant starch (cooked and cooled potatoes) yields 2.4x higher butyrate than synthetic inulin.',
      'HDAC inhibition by butyrate downregulates pro-inflammatory NF-kB signaling pathways.'
    ],
    author: {
      name: 'Dr. Evelyn Vance, PhD',
      title: 'Senior Microbiome Researcher',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Introduction & Microbial Energetics' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Research on the gut microbiome has exploded over the past decade, revealing that microbial metabolites like butyrate play a far more significant role in metabolic homeostasis than previously understood.' }] }
    ],
    tags: ['Gut Health', 'Metabolism', 'Microbiome', 'SCFAs', 'Resistant Starch'],
    publishedAt: '2026-06-15T08:00:00Z',
    updatedAt: '2026-07-01T10:30:00Z',
    readingTime: 12,
    showMedicalDisclaimer: true,
  },

  'metabolic-flexibility-cgm': {
    title: 'Continuous Glucose Monitoring & Metabolic Flexibility',
    slug: 'metabolic-flexibility-cgm',
    topic: 'Metabolic Health',
    topicSlug: 'metabolic-health',
    excerpt: 'Optimizing glycemic variability, fasting insulin, and mitochondrial substrate switching using real-time biosensor feedback.',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&h=560&fit=crop',
    studyType: 'Clinical Trial',
    keyMetric: '−31% Glucose Spikes',
    protocolCategory: 'Mitochondria & Energy',
    audioDuration: '15 min listen',
    difficulty: 'Intermediate',
    takeaways: [
      'Post-meal 10-minute walking reduces postprandial glucose peaks by 26%.',
      'Acetic acid (vinegar) prior to carbohydrate meals blunts salivary amylase and gastric emptying rate.',
      'Glycemic variability is a stronger predictor of oxidative stress than baseline fasting glucose.'
    ],
    author: {
      name: 'Marcus Sterling, MS',
      title: 'Biophysical Performance Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'The Science of Metabolic Flexibility' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Metabolic flexibility is the capacity to seamlessly transition between burning carbohydrates and fats based on nutrient availability.' }] }
    ],
    tags: ['Metabolic Health', 'CGM', 'Glucose', 'Insulin', 'Fasting'],
    publishedAt: '2026-06-20T09:00:00Z',
    readingTime: 13,
    showMedicalDisclaimer: true,
  },

  'l-theanine-caffeine-synergy': {
    title: 'The Nootropic Architecture of L-Theanine & Caffeine',
    slug: 'l-theanine-caffeine-synergy',
    topic: 'Brain Health',
    topicSlug: 'brain-health',
    excerpt: 'Quantifying alpha-wave brain synchrony, task-switching latency, and vasoconstriction dampening with a precise 2:1 ratio dosing strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=560&fit=crop',
    studyType: 'ABA Reversal Trial',
    keyMetric: '−24% Task Error Rate',
    protocolCategory: 'Neurotransmitters & Focus',
    audioDuration: '9 min listen',
    difficulty: 'Beginner',
    takeaways: [
      '200mg L-Theanine with 100mg Caffeine neutralizes peripheral vasoconstriction caused by caffeine alone.',
      'EEG recordings confirm elevated 8-12Hz Alpha power, associated with calm focus without sedation.',
      'Salivary cortisol remains baseline during high-intensity cognitive stress tests under 2:1 ratio.'
    ],
    author: {
      name: 'Dr. Aris Thorne',
      title: 'Neuropharmacology Researcher',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Neuro-Hemodynamic Synergies' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Caffeine acts as a non-selective adenosine receptor antagonist, increasing alertness.' }] }
    ],
    tags: ['Nootropics', 'Focus', 'Alpha Waves', 'Brain Health', 'Caffeine'],
    publishedAt: '2026-07-10T14:00:00Z',
    readingTime: 8,
    showMedicalDisclaimer: true,
  },

  'circadian-light-anchoring': {
    title: 'Photobiomodulation & Morning Circadian Entrainment',
    slug: 'circadian-light-anchoring',
    topic: 'Sleep & Circadian Biology',
    topicSlug: 'sleep-circadian',
    excerpt: 'How 10,000 lux morning light exposure regulates suprachiasmatic nucleus signaling, cortisol awakening response, and nocturnal melatonin onset.',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=900&h=560&fit=crop',
    studyType: 'Systematic Review',
    keyMetric: '+45 min Deep Sleep',
    protocolCategory: 'Circadian Optimization',
    audioDuration: '11 min listen',
    difficulty: 'Beginner',
    takeaways: [
      'Outdoor morning sunlight within 30 minutes of waking sets the central circadian clock for the next 24 hours.',
      'Blue light blocking glasses after sunset increase endogenous evening melatonin synthesis by up to 58%.',
      'Temperature drops of 2°F core body temp are necessary to initiate Stage 3 slow-wave sleep.'
    ],
    author: {
      name: 'Elena Rostova, MD',
      title: 'Circadian Medicine Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Suprachiasmatic Nucleus Photobiology' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Intrinsically photosensitive retinal ganglion cells (ipRGCs) contain melanopsin.' }] }
    ],
    tags: ['Sleep', 'Circadian', 'Melatonin', 'Photobiology', 'Cortisol'],
    publishedAt: '2026-07-14T08:30:00Z',
    readingTime: 10,
    showMedicalDisclaimer: true,
  },

  'nad-precursors-nmn-nr': {
    title: 'NAD+ Salvage Pathway & Cellular Longevity Protocols',
    slug: 'nad-precursors-nmn-nr',
    topic: 'Longevity & Aging',
    topicSlug: 'longevity',
    excerpt: 'Comparing NMN vs NR bioavailability, CD38 enzyme inhibition, and sirtuin-1 activation in human clinical trials.',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&h=560&fit=crop',
    studyType: 'Clinical Trial',
    keyMetric: '+60% Muscle NAD+',
    protocolCategory: 'Longevity & Repair',
    audioDuration: '18 min listen',
    difficulty: 'Advanced',
    takeaways: [
      'Sublingual NMN bypasses hepatic first-pass metabolism, elevating systemic NAD+ faster than oral NR.',
      'CD38 inhibition via Apigenin preserves intracellular NAD+ pools during inflammatory signaling.',
      'Sirtuin 1, 3, and 6 activation depends on NAD+/NADH ratio rather than total pool concentration.'
    ],
    author: {
      name: 'Dr. Evelyn Vance, PhD',
      title: 'Senior Microbiome Researcher',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    },
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'NAD+ Depletion & Sirtuin Activity' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'As humans age, intracellular NAD+ levels decrease by up to 50% between ages 20 and 50.' }] }
    ],
    tags: ['Longevity', 'NAD+', 'NMN', 'Sirtuins', 'Anti-Aging'],
    publishedAt: '2026-07-18T11:15:00Z',
    readingTime: 15,
    showMedicalDisclaimer: true,
  }
}

export function getArticleBySlug(slug: string): ArticleContent | undefined {
  return articles[slug]
}

export function getAllArticles(): ArticleMeta[] {
  return Object.values(articles).map(({ content: _c, showMedicalDisclaimer: _d, ...meta }) => meta)
}

export function getArticlesByTopic(topicSlug: string): ArticleMeta[] {
  const topicName = topicSlugToName(topicSlug)
  return getAllArticles().filter((a) => a.topic === topicName || a.topicSlug === topicSlug)
}

export function getArticlesByKanbanCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.protocolCategory === category)
}

export function getAllArticleSlugs(): string[] {
  return Object.keys(articles)
}

export function getArticleCountForTopic(topicSlug: string): number {
  return getArticlesByTopic(topicSlug).length
}

export function topicSlugToName(slug: string): string {
  const map: Record<string, string> = {
    'gut-health': 'Gut Health',
    'metabolic-health': 'Metabolic Health',
    'nutrition-science': 'Nutrition Science',
    'supplementation': 'Supplementation',
    'sleep-circadian': 'Sleep & Circadian Biology',
    'brain-health': 'Brain Health',
    'weight-management': 'Weight Management',
    'heart-health': 'Heart Health',
    'longevity': 'Longevity & Aging',
    'hormones': 'Hormones',
    'inflammation': 'Inflammation',
    'detoxification': 'Detoxification',
    'mood-support': 'Mood Support',
    'stress-management': 'Stress Management',
    'skin-care': 'Skin Care',
    'oral-health': 'Oral Health',
    'liver-health': 'Liver Health',
    'lymphatic-system': 'Lymphatic System',
    'womens-health': "Women's Health",
    'mens-health': "Men's Health",
    'exercise-recovery': 'Exercise & Recovery',
    'mitochondrial-health': 'Mitochondrial Health',
    'inflammation-immunity': 'Inflammation & Immunity',
  }
  return map[slug] || slug
}