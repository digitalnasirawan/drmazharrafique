export interface NavSubItem {
  id: string;
  label: string;
  path: string;
  badge?: string;
}

export interface NavCategoryItem {
  id: string;
  categoryName: string;
  categoryPath: string;
  description: string;
  items: NavSubItem[];
}

export interface NavDropdownItem {
  id: string;
  label: string;
  path: string;
  description?: string;
  icon?: string;
}

export interface TopNavItem {
  id: string;
  label: string;
  path: string;
  type: 'simple' | 'mega-menu' | 'dropdown';
  megaCategories?: NavCategoryItem[];
  dropdownItems?: NavDropdownItem[];
}

export const servicesMegaMenuData: NavCategoryItem[] = [
  {
    id: 'P05',
    categoryName: 'Joint Replacement Surgery',
    categoryPath: '/joint-replacement-surgery/',
    description: 'Advanced knee and hip arthroplasty to relieve chronic joint pain.',
    items: [
      { id: 'P06', label: 'Knee Replacement Surgery', path: '/knee-replacement-surgery/' },
      { id: 'P07', label: 'Hip Replacement Surgery', path: '/hip-replacement-surgery/' },
      { id: 'P08', label: 'Total Joint Replacement', path: '/total-joint-replacement/' },
      { id: 'P09', label: 'Partial Knee Replacement', path: '/partial-knee-replacement/' },
      { id: 'P10', label: 'Revision Joint Replacement', path: '/revision-joint-replacement/' },
    ]
  },
  {
    id: 'P11',
    categoryName: 'Arthroscopic Surgery',
    categoryPath: '/arthroscopic-surgery/',
    description: 'Minimally invasive keyhole joint surgery for faster recovery.',
    items: [
      { id: 'P12', label: 'Knee Arthroscopy', path: '/knee-arthroscopy/' },
      { id: 'P13', label: 'Hip Arthroscopy', path: '/hip-arthroscopy/' },
      { id: 'P14', label: 'Shoulder Arthroscopy', path: '/shoulder-arthroscopy/' },
      { id: 'P15', label: 'Meniscus Repair', path: '/meniscus-repair/' },
      { id: 'P16', label: 'Cartilage Restoration', path: '/cartilage-restoration/' },
    ]
  },
  {
    id: 'P17',
    categoryName: 'Sports Injury & Ligament Surgery',
    categoryPath: '/sports-injury-treatment/',
    description: 'Ligament reconstructions and sports injury recovery for active lifestyles.',
    items: [
      { id: 'P18', label: 'ACL Reconstruction', path: '/acl-reconstruction/' },
      { id: 'P19', label: 'Ligament Reconstruction', path: '/ligament-reconstruction/' },
      { id: 'P20', label: 'Sports Injury Treatment', path: '/sports-injury-treatment-lahore/' },
      { id: 'P21', label: 'Sports Medicine Consultation', path: '/sports-medicine-consultation/' },
    ]
  },
  {
    id: 'P22',
    categoryName: 'Shoulder, Hand & Upper Limb Surgery',
    categoryPath: '/upper-limb-surgery/',
    description: 'Rotator cuff repairs, carpal tunnel decompression, and limb care.',
    items: [
      { id: 'P23', label: 'Shoulder Surgery', path: '/shoulder-surgery/' },
      { id: 'P24', label: 'Rotator Cuff Repair', path: '/rotator-cuff-repair/' },
      { id: 'P25', label: 'Carpal Tunnel Release', path: '/carpal-tunnel-release/' },
      { id: 'P26', label: 'Hand & Wrist Surgery', path: '/hand-wrist-surgery/' },
      { id: 'P27', label: 'Elbow Surgery', path: '/elbow-surgery/' },
    ]
  },
  {
    id: 'P28',
    categoryName: 'Fracture & Trauma Surgery',
    categoryPath: '/fracture-trauma-surgery/',
    description: 'ATLS®-certified emergency trauma stabilization and bone repair.',
    items: [
      { id: 'P29', label: 'Fracture Care', path: '/fracture-treatment/' },
      { id: 'P30', label: 'Bone Fracture Repair', path: '/bone-fracture-repair/' },
      { id: 'P31', label: 'Trauma Surgery', path: '/orthopaedic-trauma-surgery/' },
    ]
  },
  {
    id: 'P32',
    categoryName: 'Foot, Ankle & Paediatric Orthopaedics',
    categoryPath: '/foot-ankle-paediatric-orthopaedics/',
    description: 'Ankle ligament repair, bunion correction, and pediatric bone health.',
    items: [
      { id: 'P33', label: 'Foot and Ankle Surgery', path: '/foot-ankle-surgery/' },
      { id: 'P34', label: 'Bunions Treatment', path: '/bunions-treatment/' },
      { id: 'P35', label: 'Paediatric Orthopaedic Surgery', path: '/paediatric-orthopaedic-surgery/' },
    ]
  },
  {
    id: 'P36',
    categoryName: 'Spine & Back Pain',
    categoryPath: '/spine-back-pain/',
    description: 'Clinical evaluation for acute and chronic spine pain hosted at BNI.',
    items: [
      { id: 'P37', label: 'Spine Surgery', path: '/spine-surgery/' },
      { id: 'P38', label: 'Back Pain Treatment', path: '/back-pain-treatment/' },
    ]
  },
  {
    id: 'P39',
    categoryName: 'Arthritis, Bone Health & Consultation',
    categoryPath: '/arthritis-bone-health/',
    description: 'Non-surgical joint preservation, osteoporosis management, and exams.',
    items: [
      { id: 'P40', label: 'Arthritis Management', path: '/arthritis-treatment/' },
      { id: 'P41', label: 'Osteoporosis Management', path: '/osteoporosis-management/' },
      { id: 'P42', label: 'Orthopaedic Consultation & Joint Pain Evaluation', path: '/orthopaedic-consultation/' },
    ]
  }
];

export const medicalEducationDropdownData: NavDropdownItem[] = [
  { id: 'P51', label: 'Surgery Videos', path: '/surgery-videos/' },
  { id: 'P52', label: 'OSPE Preparation', path: '/ospe-preparation/' },
  { id: 'P53', label: 'Surgery MCQs', path: '/surgery-mcqs/' }
];

export const patientEducationDropdownData: NavDropdownItem[] = [
  { id: 'P47', label: 'FAQs', path: '/faqs/' },
  { id: 'P48', label: 'Gallery', path: '/gallery/' },
  { id: 'P49', label: 'Videos', path: '/videos/' }
];

export const topNavItems: TopNavItem[] = [
  { id: 'P01', label: 'Home', path: '/', type: 'simple' },
  { id: 'P02', label: 'About', path: '/about/', type: 'simple' },
  { 
    id: 'P04', 
    label: 'Services', 
    path: '/services/', 
    type: 'mega-menu',
    megaCategories: servicesMegaMenuData
  },
  { 
    id: 'P50', 
    label: 'Medical Education', 
    path: '/medical-education/', 
    type: 'dropdown',
    dropdownItems: medicalEducationDropdownData
  },
  { 
    id: 'P43', 
    label: 'Patient Education', 
    path: '/patient-education/', 
    type: 'dropdown',
    dropdownItems: patientEducationDropdownData
  },
  { id: 'P03', label: 'Contact', path: '/contact/', type: 'simple' }
];
