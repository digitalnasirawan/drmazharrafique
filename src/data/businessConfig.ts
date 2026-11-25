export interface DoctorBusinessConfig {
  doctorName: string;
  designation: string;
  department: string;
  clinicName: string;
  fullAddress: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneRaw: string;
  callUrl: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  website: string;
  experienceYearsText: string;
  qualifications: string[];
  clinicalInterests: string[];
  directionsUrl: string;
  socialLinks: {
    facebookProfile: string;
    facebookPage1: string;
    facebookPage2: string;
    instagram: string;
    tiktok: string;
    oladoc: string;
  };
  getWhatsAppUrl: (customMessage?: string) => string;
}

export const businessConfig: DoctorBusinessConfig = {
  doctorName: "Dr. Mazhar Rafique",
  designation: "Consultant Orthopaedic Surgeon",
  department: "Orthopaedic, Trauma & Joint Replacement Surgery",
  clinicName: "BNI - Bashir NeuroSpine Institute",
  fullAddress: "18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan",
  city: "Lahore",
  province: "Punjab",
  postalCode: "54000",
  country: "Pakistan",
  phone: "0310 5033337",
  phoneRaw: "+923105033337",
  callUrl: "tel:+923105033337",
  whatsappNumber: "923105033337",
  whatsappDisplay: "+92 310 5033337",
  whatsappUrl: "https://wa.me/923105033337?text=Hello%20Dr.%20Mazhar%20Rafique%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment%20for%20an%20orthopaedic%20consultation.",
  website: "https://drmazharrafique.com/",
  experienceYearsText: "Over 10 Years Clinical Experience",
  qualifications: [
    "M.B.B.S",
    "F.C.P.S. (Orthopedic Surgery)",
    "FCPS Trauma and Orthopaedic Surgery",
    "Certified ATLS®",
    "Fellowship Arthroplasty and Joint Reconstruction"
  ],
  clinicalInterests: [
    "Joint Replacement Surgery (Knee & Hip Arthroplasty)",
    "Arthroscopic & Minimally Invasive Surgery",
    "Sports Injury Treatment & ACL Reconstruction",
    "Complex Fracture & Orthopaedic Trauma Surgery",
    "Arthritis Management & Joint Pain Evaluation"
  ],
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=BNI+-+Bashir+NeuroSpine Institute+18+Jail+Rd+Shadman+1+Lahore+Pakistan",
  socialLinks: {
    facebookProfile: "https://www.facebook.com/mazraf",
    facebookPage1: "https://www.facebook.com/mazharafique",
    facebookPage2: "https://www.facebook.com/drmazharrafique",
    instagram: "https://www.instagram.com/mazharafique/",
    tiktok: "https://www.tiktok.com/@mazharafique/",
    oladoc: "https://oladoc.com/pakistan/lahore/dr/orthopedic-surgeon/mazhar-rafique/1573577"
  },
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = "Hello Dr. Mazhar Rafique Clinic, I would like to book an appointment for an orthopaedic consultation.";
    const text = customMessage || defaultMsg;
    return `https://wa.me/923105033337?text=${encodeURIComponent(text)}`;
  }
};
