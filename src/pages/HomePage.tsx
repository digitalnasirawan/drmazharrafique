import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  ChevronDown, 
  ExternalLink, 
  Stethoscope, 
  Maximize2,
  AlertTriangle,
  Video,
  Image as ImageIcon,
  Navigation,
  GraduationCap,
  Star,
  Sparkles,
  HeartPulse,
  Compass,
  UserCheck,
  FileText,
  CalendarCheck,
  Clock,
  MessageSquare
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';
import { GalleryLightboxModal, GalleryItem } from '../components/interactive/GalleryLightboxModal';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedHeroService, setSelectedHeroService] = useState('Knee Joint / Arthritis');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const homeGalleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Minimally Invasive Arthroscopic Surgery",
      category: "surgery",
      image: "/images/doctor/dr-mazhar-arthroscopy-tech.jpg",
      caption: "Operating room keyhole instrumentation with Smith & Nephew high-definition arthroscopic tower."
    },
    {
      id: 2,
      title: "Knee Joint Reconstruction Surgery",
      category: "surgery",
      image: "/images/doctor/dr-mazhar-rafique-surgery-knee.jpg",
      caption: "Precision surgical knee joint reconstruction and pulsed lavage irrigation in sterile operating theatre."
    },
    {
      id: 3,
      title: "Hands-on Clinical Joint Examination",
      category: "consultation",
      image: "/images/doctor/dr-mazhar-physical-exam.jpg",
      caption: "Detailed physical evaluation, knee joint laxity assessments, and range-of-motion testing at clinic."
    },
    {
      id: 4,
      title: "Academic Teaching & Radiograph Analysis",
      category: "academic",
      image: "/images/doctor/dr-mazhar-teaching-xray.jpg",
      caption: "Teaching radiographic evaluation, joint line analysis, and fracture classification to surgical trainees."
    },
    {
      id: 5,
      title: "Patient Consultation & Chart Review",
      category: "consultation",
      image: "/images/doctor/dr-mazhar-consultation.jpg",
      caption: "Comprehensive patient history review, imaging correlation, and conservative treatment counseling."
    },
    {
      id: 6,
      title: "BNI - Bashir NeuroSpine Institute",
      category: "facility",
      image: "/images/doctor/bni-clinic-exterior.jpg",
      caption: "Exterior view of the clinical building at 18 Jail Road, Shadman 1, Lahore, Pakistan."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // S01 Credentials Data with Custom Icons and Subtitles
  const credentials = [
    {
      title: "M.B.B.S",
      meaning: "The basic medical degree from King Edward Medical University. It is the first step to becoming a doctor.",
      icon: GraduationCap,
      tag: "Medical Degree"
    },
    {
      title: "F.C.P.S. (Trauma & Orthopaedics)",
      meaning: "Specialist qualification in bone, joint and trauma surgery from the College of Physicians and Surgeons Pakistan.",
      icon: Award,
      tag: "Fellowship"
    },
    {
      title: "Certified ATLS®",
      meaning: "ATLS means Advanced Trauma Life Support. It is an internationally recognized standard for acute trauma management.",
      icon: ShieldCheck,
      tag: "Trauma Certified"
    },
    {
      title: "Fellowship Arthroplasty & Joint Reconstruction",
      meaning: "Sub-specialist fellowship training in partial, total, and complex knee and hip joint replacements.",
      icon: Stethoscope,
      tag: "Joint Specialist"
    }
  ];

  // S04 Eight Service Categories Data with Distinct Icons & Tags
  const serviceCategories = [
    {
      name: "Joint Replacement Surgery",
      slug: "/joint-replacement-surgery/",
      desc: "Learn how a worn joint, such as the knee or hip, can be replaced with an artificial one to restore painless daily mobility.",
      icon: Activity,
      tag: "Arthroplasty"
    },
    {
      name: "Arthroscopic Surgery",
      slug: "/arthroscopic-surgery/",
      desc: "Keyhole surgery using miniature cameras and precision tools to check and treat joint issues through tiny incisions.",
      icon: Sparkles,
      tag: "Keyhole Technique"
    },
    {
      name: "Sports Injury & Ligament Surgery",
      slug: "/sports-injury-treatment/",
      desc: "Specialized care for ACL tears, meniscus injuries, and joint instability to help athletes and active individuals recover safely.",
      icon: HeartPulse,
      tag: "Sports Medicine"
    },
    {
      name: "Shoulder, Hand & Upper Limb Surgery",
      slug: "/upper-limb-surgery/",
      desc: "Treatment for rotator cuff tears, shoulder dislocations (Bankart repair), impingement, and wrist conditions.",
      icon: Compass,
      tag: "Upper Limb"
    },
    {
      name: "Fracture & Trauma Surgery",
      slug: "/fracture-trauma-surgery/",
      desc: "Urgent and planned management of bone fractures, complex trauma injuries, and surgical fixation using modern implants.",
      icon: ShieldCheck,
      tag: "Bone Trauma"
    },
    {
      name: "Foot, Ankle & Paediatric Orthopaedics",
      slug: "/foot-ankle-paediatric-orthopaedics/",
      desc: "Care for foot deformities, club foot (congenital talipes), ankle sprains, and developmental bone problems in children.",
      icon: UserCheck,
      tag: "Paediatric Care"
    },
    {
      name: "Spine & Back Pain",
      slug: "/spine-back-pain/",
      desc: "Structured evaluation of cervical and lumbar disc problems, sciatic nerve pain, and non-surgical spine rehabilitation.",
      icon: FileText,
      tag: "Spine Care"
    },
    {
      name: "Arthritis, Bone Health & Consultation",
      slug: "/arthritis-bone-health/",
      desc: "Comprehensive management of osteoarthritis, rheumatoid arthritis, weak bones (osteoporosis), and joint preservation.",
      icon: Stethoscope,
      tag: "Joint Preservation"
    }
  ];

  // S05 Featured Treatments Data
  const featuredTreatments = [
    {
      title: "Knee Replacement Surgery",
      slug: "/joint-replacement-surgery/",
      category: "Joint Replacement",
      desc: "Knee replacement is an operation that replaces a damaged knee joint with an artificial one. Doctors think about it when severe arthritis causes strong pain and other treatments have not helped enough. It is a major operation, so your doctor will explain the benefits and risks first.",
      image: "/images/doctor/dr-mazhar-rafique-surgery-knee.jpg",
      highlight: "Primary & Revision"
    },
    {
      title: "Hip Replacement Surgery",
      slug: "/joint-replacement-surgery/",
      category: "Joint Replacement",
      desc: "Hip replacement swaps a worn hip joint for an artificial one. It may be an option when hip pain makes walking and daily tasks hard and other treatments have not helped enough. Your doctor will explain the benefits and risks first.",
      image: "/images/doctor/dr-mazhar-rafique-procedure.jpg",
      highlight: "Total Hip Arthroplasty"
    },
    {
      title: "ACL Reconstruction",
      slug: "/sports-injury-treatment/",
      category: "Sports Medicine",
      desc: "The ACL is a strong band inside the knee that keeps it steady. When it tears, the knee may feel loose or give way. ACL reconstruction is surgery that replaces the torn band with a graft, which is a piece of tissue. Not every ACL tear needs surgery.",
      image: "/images/doctor/dr-mazhar-rafique-arthroscopy.jpg",
      highlight: "Anatomic Ligament Repair"
    },
    {
      title: "Shoulder Arthroscopy",
      slug: "/arthroscopic-surgery/",
      category: "Arthroscopic Surgery",
      desc: "Shoulder arthroscopy is keyhole surgery. The surgeon makes small cuts and uses a tiny camera and thin tools to look inside the shoulder. It may be used to treat some shoulder problems.",
      image: "/images/doctor/dr-mazhar-arthroscopy-tech.jpg",
      highlight: "Minimally Invasive"
    },
    {
      title: "Rotator Cuff Repair",
      slug: "/upper-limb-surgery/",
      category: "Upper Limb",
      desc: "The rotator cuff is a group of muscles and tendons that keeps the shoulder joint steady. A tear can cause pain and weakness when you lift your arm. Some people improve with exercise and other treatment. Others may need surgery to repair the tendon.",
      image: "/images/doctor/dr-mazhar-operating-theatre.jpg",
      highlight: "Tendon Reattachment"
    },
    {
      title: "Fracture Treatment",
      slug: "/fracture-trauma-surgery/",
      category: "Trauma Surgery",
      desc: "A fracture is a broken bone. Some fractures heal in a cast or splint. Others need surgery to hold the bone in place while it heals. A doctor checks the injury, often with an X-ray, to decide the best plan.",
      image: "/images/doctor/dr-mazhar-reviewing-xray.jpg",
      highlight: "Modern Fixation"
    }
  ];

  // S08 Consultation Steps
  const consultationSteps = [
    {
      step: "01",
      title: "Contact the Clinic",
      desc: `Call ${businessConfig.phone} or message on WhatsApp to ask for an appointment. Tell the clinic about your main problem, such as knee pain or an injury. Appointments are made by phone or WhatsApp.`,
      icon: Phone,
      badge: "Fast Booking"
    },
    {
      step: "02",
      title: "Discuss Your Symptoms",
      desc: "At your visit, tell the doctor what is wrong. Say when the problem started, what makes it better or worse, and how it affects your day. Tell the doctor about past illnesses, operations, allergies and medicines. Bring any old X-rays, scans and reports.",
      icon: MessageSquare,
      badge: "In-Depth Review"
    },
    {
      step: "03",
      title: "Clinical Assessment & Treatment Discussion",
      desc: "The doctor checks the painful area and may ask for tests, such as an X-ray, if they are needed. Then the doctor explains what is wrong and talks about your options. These may include rest, exercise, physiotherapy, medicine or surgery. Not every patient needs the same tests or the same treatment.",
      icon: Stethoscope,
      badge: "Physical Examination"
    },
    {
      step: "04",
      title: "Follow-Up Planning When Appropriate",
      desc: "Some patients need another visit to check how they are doing or to look at test results. The doctor will tell you if you need one and what happens next.",
      icon: CalendarCheck,
      badge: "Care Continuity"
    }
  ];

  // B5 FAQs (All 8 Approved Questions)
  const faqs = [
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call the clinic on ${businessConfig.phone} or message directly on WhatsApp (${businessConfig.whatsappDisplay}). Appointments are made by phone or WhatsApp. Tell the clinic your main problem when you call or message.`
    },
    {
      q: "Where is Dr. Mazhar Rafique's clinic in Lahore?",
      a: `Dr. Mazhar Rafique sees patients at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan. Call ${businessConfig.phone} or message on WhatsApp to ask about appointment times.`
    },
    {
      q: "What does an orthopaedic surgeon treat?",
      a: "An orthopaedic surgeon treats problems of the bones, joints, ligaments, tendons and muscles. These include broken bones, arthritis, joint pain and sports injuries. They also include problems of the shoulder, hand, hip, knee, foot, ankle and spine. Some problems are treated without surgery. Surgery is used when it is the right choice for the patient."
    },
    {
      q: "Does joint pain always need surgery?",
      a: "No. Many people with joint pain do not need surgery. For osteoarthritis, the most common type of arthritis, NICE lists exercise and weight management (when it applies to you) as core treatments. Other options include physiotherapy and pain medicine. Doctors usually think about surgery when other treatments have not helped enough and the pain strongly affects daily life. Your doctor decides after checking you."
    },
    {
      q: "What should I bring to an orthopaedic consultation?",
      a: "Bring any X-rays, scans and reports you already have. Bring a list of your medicines, your allergies, and your past illnesses and operations. Write down when the pain started and the questions you want to ask. Wear loose clothes so the doctor can check the painful area. You may bring a family member with you."
    },
    {
      q: "Where can I find orthopaedic patient education resources?",
      a: "Visit the Patient Education (/patient-education/) section. You can find quick answers in the Orthopaedic FAQs (/faqs/), view verified photos in the Gallery (/gallery/), and watch educational walkthroughs in the Videos (/videos/) library."
    },
    {
      q: "When should I see an orthopaedic surgeon?",
      a: "See a doctor if pain lasts, keeps coming back, or makes walking, work or sleep hard. See a doctor too if a joint is swollen, stiff or unstable, or after an injury. Go to an emergency department straight away if a bone looks bent, the skin is broken over an injury, there is heavy bleeding, or you cannot move a limb."
    },
    {
      q: "Can this website tell me what is wrong with me?",
      a: "No. This website gives general information to help you understand common problems. Only a doctor who checks you can tell you what is wrong and which treatment is right for you."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* =========================================================================
          B3 — HERO SECTION (MOBILE: IMAGE FIRST, DESKTOP: TEXT LEFT, IMAGE RIGHT)
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#FAF8F2] via-white to-white border-b border-[#E8E5DE] pt-10 pb-12 lg:pt-16 lg:pb-20 overflow-hidden">
        
        {/* Subtle geometric luxury pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#BE8C1D 0.75px, transparent 0.75px)',
            backgroundSize: '24px 24px'
          }}
          aria-hidden="true"
        />

        {/* Ambient gold radial glow */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#BE8C1D]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-[#BE8C1D]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* HERO IMAGE: SHOWS FIRST ON MOBILE (order-1), RIGHT COLUMN ON DESKTOP (lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-5 relative">
              <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
                
                {/* Decorative background border */}
                <div className="absolute -inset-2.5 sm:-inset-3 rounded-3xl bg-[#FAF8F2] border border-[#E8E5DE] -z-10 rotate-1 shadow-sm"></div>
                
                {/* Clean Doctor Photo Card (Ultra clean) */}
                <div className="overflow-hidden rounded-2xl border-2 border-[#E8E5DE] bg-white shadow-2xl relative group">
                  <img 
                    src="/images/doctor/dr-mazhar-rafique-portrait.jpg" 
                    alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore"
                    className="w-full h-auto object-cover object-top aspect-[4/5] group-hover:scale-[1.01] transition-transform duration-500"
                    width={500}
                    height={625}
                    loading="eager"
                  />
                  {/* Subtle luxury edge gradient */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                </div>

              </div>
            </div>

            {/* HERO TEXT: SHOWS SECOND ON MOBILE (order-2), LEFT COLUMN ON DESKTOP (lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow Label with Pulsing Live Status */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E5DE] shadow-xs hover:border-[#BE8C1D] transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Best Orthopedic Surgeon in Lahore
                </span>
              </div>

              {/* H1 Heading */}
              <div className="space-y-1">
                <h1 
                  className="h1-title text-[#111111] tracking-tight"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Dr. Mazhar Rafique
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#BE8C1D] uppercase tracking-wider">
                  MBBS (KEMU) &bull; FCPS (Trauma &amp; Orthopaedics) &bull; Fellowship Joint Reconstruction
                </p>
              </div>

              {/* Supporting Copy (Exact Required Text) */}
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with over 10 years of experience in orthopaedic, trauma, and sports injury care. He specializes in knee and hip replacement surgery, knee and shoulder arthroscopy, ACL reconstruction, meniscus repair, Bankart repair, and rotator cuff repair. He also treats fractures, arthritis, joint pain, back pain, neck pain, club foot, paediatric orthopaedic conditions, and trauma-related problems. He holds MBBS (KEMU), FCPS (Trauma &amp; Orthopaedics), and fellowship training in Joint Reconstruction &amp; Arthroplasty. To discuss your condition and treatment options, book an appointment for consultation.
              </p>

              {/* Dual Conversion Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* 1st Main CTA: WhatsApp Appointment (White Text & White Icon) */}
                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(true)}
                  className="py-3.5 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl text-sm sm:text-base cursor-pointer hover:scale-[1.02] active:scale-[0.98] border border-amber-600/30"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>WhatsApp Appointment</span>
                </button>

                {/* 2nd Main CTA: Call Appointment */}
                <a 
                  href={businessConfig.callUrl}
                  className="py-3.5 px-5 rounded-xl font-bold text-[#111111] bg-white hover:bg-[#FAF8F2] border-1.5 border-[#BE8C1D] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                  aria-label={`Call Dr. Mazhar Rafique clinic at ${businessConfig.phone}`}
                >
                  <Phone className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Call: {businessConfig.phone}</span>
                </a>

                {/* Secondary CTA: Explore Services */}
                <Link 
                  to="/services/"
                  className="btn-secondary text-xs sm:text-sm py-3 px-4"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

          {/* Quick Trust Highlights Strip at Bottom of Hero */}
          <div className="mt-12 pt-8 border-t border-[#E8E5DE] grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8E5DE] shadow-2xs hover:border-[#BE8C1D] transition-all">
              <span className="text-xl sm:text-2xl font-black text-[#BE8C1D] block" style={{ fontFamily: "'Maven Pro', sans-serif" }}>10+ Years</span>
              <span className="text-xs font-semibold text-[#111111] block mt-0.5">Clinical &amp; Surgical Experience</span>
              <span className="text-[11px] text-[#475569] block mt-0.5">Trauma, Joints &amp; Sports Care</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8E5DE] shadow-2xs hover:border-[#BE8C1D] transition-all">
              <span className="text-xl sm:text-2xl font-black text-[#BE8C1D] block" style={{ fontFamily: "'Maven Pro', sans-serif" }}>FCPS &amp; KEMU</span>
              <span className="text-xs font-semibold text-[#111111] block mt-0.5">Specialist Credentials</span>
              <span className="text-[11px] text-[#475569] block mt-0.5">Trauma &amp; Orthopaedic Surgery</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8E5DE] shadow-2xs hover:border-[#BE8C1D] transition-all">
              <span className="text-xl sm:text-2xl font-black text-[#BE8C1D] block" style={{ fontFamily: "'Maven Pro', sans-serif" }}>Fellowship</span>
              <span className="text-xs font-semibold text-[#111111] block mt-0.5">Joint Reconstruction</span>
              <span className="text-[11px] text-[#475569] block mt-0.5">Knee &amp; Hip Arthroplasty</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8E5DE] shadow-2xs hover:border-[#BE8C1D] transition-all">
              <span className="text-xl sm:text-2xl font-black text-[#BE8C1D] block" style={{ fontFamily: "'Maven Pro', sans-serif" }}>BNI Hospital</span>
              <span className="text-xs font-semibold text-[#111111] block mt-0.5">Central Practice Location</span>
              <span className="text-[11px] text-[#475569] block mt-0.5">18 Jail Road, Shadman 1, Lahore</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S01 — QUALIFICATIONS & PROFESSIONAL CREDENTIALS
          ========================================================================= */}
      <section className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-12 sm:py-16">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#BE8C1D] block">
              VERIFIED CREDENTIALS
            </span>
            <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Dr. Mazhar Rafique's Qualifications
            </h2>
            <p className="text-sm text-[#475569]">
              Dr. Mazhar Rafique has trained for many years to care for bones and joints. Here are his qualifications. Each one comes with a short, simple meaning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((cred, idx) => {
              const IconComp = cred.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E5DE] flex flex-col justify-between shadow-2xs hover:border-[#BE8C1D] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D] group-hover:bg-[#BE8C1D] group-hover:text-black transition-colors shadow-2xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF8F2] text-[#475569] border border-[#E8E5DE]">
                        {cred.tag}
                      </span>
                    </div>

                    <strong className="text-sm sm:text-base font-bold text-[#111111] block leading-snug group-hover:text-[#936A12] transition-colors" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                      {cred.title}
                    </strong>
                    
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {cred.meaning}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <Link 
              to="/about/" 
              className="text-xs sm:text-sm font-bold text-[#BE8C1D] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Read Dr. Rafique's Full Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S02 — ABOUT DOCTOR PREVIEW
          ========================================================================= */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Portrait with Luxury Frame */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8E5DE] shadow-xl bg-white group">
                <img 
                  src="/images/doctor/dr-mazhar-consultation.jpg" 
                  alt="Portrait of Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon" 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Text & Bullets */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>ABOUT THE SURGEON</span>
              </div>

              <h2 
                className="h2-title text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Meet Dr. Mazhar Rafique
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. He has more than 10 years of experience in orthopaedic, trauma and sports injury care.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Orthopaedics is the part of medicine that looks after bones, joints and muscles. Trauma means a serious injury, such as a broken bone after an accident. Sports injuries happen when a person plays or trains.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Dr. Rafique also completed a fellowship in arthroplasty and joint reconstruction. This is extra training in joint replacement and joint repair.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                He sees patients at BNI - Bashir NeuroSpine Institute on Jail Road in Lahore. His full profile explains his training and what to expect at a visit.
              </p>

              <div className="p-5 bg-[#FAF8F2] border border-[#E8E5DE] rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Training and experience
                </h3>
                <ul className="text-xs sm:text-sm text-[#475569] space-y-2">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Orthopaedic care for bones, joints and muscles</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Trauma care for serious injuries, including broken bones</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sports injury care</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Joint replacement and joint reconstruction (fellowship training)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link 
                  to="/about/"
                  className="py-3 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors text-xs sm:text-sm flex items-center gap-2 shadow-xs cursor-pointer hover:shadow-md"
                >
                  <span>Read Dr. Rafique's Full Profile</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(true)}
                  className="btn-secondary text-xs sm:text-sm flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                  <span>Book Appointment</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S04 — EIGHT SERVICE CATEGORIES
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
              CLINICAL DOMAINS
            </span>
            <h2 
              className="h2-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Orthopaedic Service Categories
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Orthopaedic care covers many parts of the body. Choose a category to read simple information about common problems and treatment options. A visit to the clinic is the way to find out what is right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {serviceCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-2xl p-6 hover:border-[#BE8C1D] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D] group-hover:bg-[#BE8C1D] group-hover:text-black transition-colors shadow-2xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF8F2] text-[#475569] border border-[#E8E5DE]">
                        {cat.tag}
                      </span>
                    </div>

                    <h3 
                      className="text-lg font-bold text-[#111111] group-hover:text-[#936A12] transition-colors"
                      style={{ fontFamily: "'Maven Pro', sans-serif" }}
                    >
                      {cat.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E8E5DE]">
                    <Link 
                      to={cat.slug}
                      className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>{cat.name} &rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-10">
            <Link 
              to="/services/"
              className="btn-secondary text-sm inline-flex items-center gap-2 hover:shadow-md"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S05 — FEATURED TREATMENTS
          ========================================================================= */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
              SURGICAL &amp; CONSERVATIVE OPTIONS
            </span>
            <h2 
              className="h2-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Featured Orthopaedic Treatments
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              These pages explain some common orthopaedic treatments. Whether you need any of them depends on your own check-up. Many people improve without surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {featuredTreatments.map((treatment, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#111111] px-2.5 py-1 rounded-md border border-[#E8E5DE] shadow-xs">
                      {treatment.category}
                    </span>
                    <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white/90 drop-shadow-sm">
                      {treatment.highlight}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 
                      className="text-lg font-bold text-[#111111] group-hover:text-[#936A12] transition-colors"
                      style={{ fontFamily: "'Maven Pro', sans-serif" }}
                    >
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {treatment.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link 
                    to={treatment.slug}
                    className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read about {treatment.title.toLowerCase()} &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <Link 
              to="/services/"
              className="btn-secondary text-sm inline-flex items-center gap-2 hover:shadow-md"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S07 — WHY CONSULT DR. MAZHAR RAFIQUE
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
                VERIFIED FACTS
              </span>

              <h2 
                className="h2-title text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Why Consult Dr. Mazhar Rafique?
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                Choosing a doctor is an important decision. These facts may help you decide.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Consultant Orthopaedic Surgeon with more than 10 years of experience in orthopaedic, trauma and sports injury care",
                  "Specialist qualifications: M.B.B.S and F.C.P.S. (Orthopedic Surgery)",
                  "Certified ATLS®, which is training in the first care of people with serious injuries",
                  "Fellowship training in arthroplasty and joint reconstruction",
                  "A clinic at BNI - Bashir NeuroSpine Institute on Jail Road, Shadman, Lahore",
                  `Simple booking by phone: ${businessConfig.phone}`,
                  "Clear information on this website for patients, and a Medical Education area for students and residents"
                ].map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E8E5DE] shadow-2xs hover:border-[#BE8C1D] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#111111] font-medium leading-relaxed">
                      {fact}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a 
                  href={businessConfig.callUrl}
                  className="py-3 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors text-xs sm:text-sm flex items-center gap-2 shadow-xs hover:shadow-md"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(true)}
                  className="btn-secondary text-xs sm:text-sm flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                  <span>Book Appointment</span>
                </button>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-[#E8E5DE] shadow-xl bg-white group">
                <img 
                  src="/images/doctor/dr-mazhar-physical-exam.jpg" 
                  alt="Dr. Mazhar Rafique performing a clinical knee examination" 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          S08 — CONSULTATION JOURNEY (WHAT HAPPENS AT YOUR VISIT?)
          ========================================================================= */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
              PATIENT CARE PATHWAY
            </span>
            <h2 
              className="h2-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              What Happens at Your Visit?
            </h2>
            <p className="text-sm text-[#475569]">
              Not sure what happens at a first visit? Here are four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {consultationSteps.map((item, index) => {
              const StepIcon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#FAF8F2] border border-[#E8E5DE] rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#BE8C1D] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-2xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DE] text-[#BE8C1D] flex items-center justify-center font-black text-sm group-hover:bg-[#BE8C1D] group-hover:text-black transition-colors" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                        {item.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#475569] bg-white px-2 py-0.5 rounded-md border border-[#E8E5DE]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 
                      className="text-base font-bold text-[#111111] mb-2 group-hover:text-[#936A12] transition-colors"
                      style={{ fontFamily: "'Maven Pro', sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button Below Step 4 */}
          <div className="text-center pt-10 flex flex-wrap justify-center gap-3">
            <a 
              href={businessConfig.callUrl}
              className="py-3 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] flex items-center justify-center gap-2 shadow-md cursor-pointer text-sm transition-colors hover:shadow-lg"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call for Appointment</span>
            </a>

            <button 
              type="button"
              onClick={() => setAppointmentModalOpen(true)}
              className="btn-secondary text-sm flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
              <span>Book Online Consultation</span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S11 — GALLERY & VIDEO PREVIEW
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
              APPROVED MEDIA
            </span>
            <h2 
              className="h2-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Gallery and Videos
            </h2>
            <p className="text-sm text-[#475569]">
              See the practice and learn through video. Only approved photos and videos appear on this website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
            
            {/* Card 1: Photo Gallery */}
            <div className="bg-white border border-[#E8E5DE] rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#BE8C1D] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Photo Gallery
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The gallery brings together approved photos from the clinical suites, operating rooms, and facilities.
                </p>
              </div>
              
              <div className="pt-2">
                <Link 
                  to="/gallery/"
                  className="py-2.5 px-5 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] text-xs inline-flex items-center gap-2 shadow-xs transition-colors hover:shadow-md"
                >
                  <span>Visit the Gallery</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Card 2: Videos */}
            <div className="bg-white border border-[#E8E5DE] rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#BE8C1D] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Videos
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The videos page brings together approved video content and clinical walkthroughs from Dr. Mazhar Rafique.
                </p>
              </div>

              <div className="pt-2">
                <Link 
                  to="/videos/"
                  className="py-2.5 px-5 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] text-xs inline-flex items-center gap-2 shadow-xs transition-colors hover:shadow-md"
                >
                  <span>Watch Videos</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

          </div>

          {/* Genuine photo grid preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {homeGalleryItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
                className="rounded-xl overflow-hidden border border-[#E8E5DE] bg-white shadow-2xs group text-left cursor-pointer hover:border-[#BE8C1D] hover:shadow-md transition-all aspect-[4/3] relative"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-2xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          B5 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
                PATIENT QUESTIONS
              </span>
              <h2 
                className="h2-title text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#475569]">
                Clear answers regarding clinic appointments, consultations, and orthopaedic care in Lahore.
              </p>
            </div>

            <div className="space-y-3 text-left" role="region" aria-label="Frequently Asked Questions Accordion">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border border-[#E8E5DE] rounded-xl overflow-hidden bg-white hover:border-[#BE8C1D]/60 transition-colors shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#111111] hover:text-[#936A12] transition-colors focus-visible:outline-2 focus-visible:outline-[#BE8C1D] cursor-pointer"
                    aria-expanded={openFaq === idx}
                  >
                    <span style={{ fontFamily: "'Maven Pro', sans-serif" }}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#BE8C1D] shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>

                  {openFaq === idx && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm text-[#475569] leading-relaxed border-t border-[#FAF8F2] pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setAppointmentModalOpen(true)}
                className="py-2.5 px-5 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] text-xs flex items-center gap-2 shadow-2xs transition-colors cursor-pointer hover:shadow-md"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>Book Appointment</span>
              </button>

              <Link 
                to="/faqs/" 
                className="btn-secondary text-xs"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          S12 — PRACTICE LOCATION & CLINIC VISITS (HIGH CRO OPTIMIZATION)
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]" id="practice-location">
        <div className="site-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left: Clinic Info & High-Converting Action Block */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-left">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-2xs mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>PRACTICE LOCATION</span>
                </div>
                
                <h2 
                  className="h2-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Visit Dr. Mazhar Rafique in Lahore
                </h2>
                
                <p className="text-sm sm:text-base text-[#475569] mt-2 leading-relaxed">
                  Consult Dr. Mazhar Rafique at <strong>BNI - Bashir NeuroSpine Institute</strong>, centrally located on Jail Road in Shadman 1, Lahore. Comprehensive clinical evaluations, joint pain consultations, and MRI / X-ray surgical reviews.
                </p>
              </div>

              {/* Conversion-Focused Clinic Details Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#E8E5DE] shadow-sm space-y-4">
                
                <div className="flex items-start justify-between gap-3 border-b border-[#FAF8F2] pb-3">
                  <div>
                    <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                      BNI - Bashir NeuroSpine Institute
                    </h3>
                    <p className="text-xs text-[#475569] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#BE8C1D] shrink-0" />
                      <span>18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Punjab, Pakistan</span>
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200 shrink-0">
                    Open for Appointments
                  </span>
                </div>

                {/* Direct Contact & Booking Channels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  
                  {/* Phone Call Box */}
                  <a 
                    href={businessConfig.callUrl}
                    className="p-3.5 rounded-xl bg-[#FAF8F2] hover:bg-[#F3EEDC] border border-[#E8E5DE] transition-colors flex items-center gap-3 group"
                    aria-label={`Call clinic at ${businessConfig.phone}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#BE8C1D] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider block">Call Direct</span>
                      <strong className="text-sm text-[#111111] group-hover:text-[#936A12] block">
                        {businessConfig.phone}
                      </strong>
                    </div>
                  </a>

                  {/* WhatsApp Desk Box */}
                  <button
                    type="button"
                    onClick={() => setAppointmentModalOpen(true)}
                    className="p-3.5 rounded-xl bg-[#FAF8F2] hover:bg-[#F3EEDC] border border-[#E8E5DE] transition-colors flex items-center gap-3 text-left group cursor-pointer"
                    aria-label="Connect on WhatsApp"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider block">WhatsApp Desk</span>
                      <strong className="text-sm text-[#111111] group-hover:text-[#25D366] block">
                        {businessConfig.whatsappDisplay}
                      </strong>
                    </div>
                  </button>

                </div>

                {/* Quick Trust Highlights */}
                <div className="pt-2 border-t border-[#FAF8F2] grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs text-[#475569]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Prime Jail Rd Location</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Wheelchair Accessible</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>On-Site Diagnostics</span>
                  </div>
                </div>

              </div>

              {/* High-Converting Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* 1st Main CTA: WhatsApp Appointment */}
                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(true)}
                  className="py-3.5 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>WhatsApp Appointment</span>
                </button>

                {/* 2nd Main CTA: Call Appointment */}
                <a 
                  href={businessConfig.callUrl}
                  className="py-3.5 px-5 rounded-xl font-bold text-[#111111] bg-white hover:bg-[#FAF8F2] border-1.5 border-[#BE8C1D] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Call: {businessConfig.phone}</span>
                </a>

                {/* Get Directions Link */}
                <a 
                  href={businessConfig.directionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="py-3.5 px-4 rounded-xl font-bold text-[#475569] hover:text-[#111111] bg-white hover:bg-[#FAF8F2] border border-[#E8E5DE] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Get GPS Directions</span>
                </a>
              </div>

            </div>

            {/* Right: Interactive Google Business Profile Map */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="h-full min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] rounded-2xl overflow-hidden border-2 border-[#E8E5DE] shadow-xl bg-white flex flex-col">
                
                {/* Header ribbon with Google Reviews indicator */}
                <div className="p-3 sm:p-3.5 bg-white border-b border-[#E8E5DE] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="font-bold text-[#111111]">Google Business Profile</span>
                    <span className="text-[#475569] hidden sm:inline">&bull; Dr. Mazhar Rafique</span>
                  </div>
                  <a 
                    href={businessConfig.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#BE8C1D] hover:underline font-bold inline-flex items-center gap-1 text-[11px] sm:text-xs"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Interactive Map Iframe */}
                <div className="relative flex-1 w-full min-h-[350px] sm:min-h-[400px] bg-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3459680750466!2d74.3314406!3d31.542118600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905bd50d9e697%3A0x3a696719c88de997!2sDr.%20Mazhar%20Rafique%20(Consultant%20Orthopaedic%20Surgeon)!5e0!3m2!1sen!2s!4v1794184710052!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    title="Dr. Mazhar Rafique Practice Location and Reviews at BNI Lahore"
                    className="absolute inset-0 w-full h-full border-0 block"
                  />
                </div>

                {/* Footer bar */}
                <div className="p-3 bg-[#FAF8F2] border-t border-[#E8E5DE] flex items-center justify-between text-xs text-[#475569]">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#BE8C1D] shrink-0" />
                    <span className="truncate font-medium text-[#111111]">BNI, 18 Jail Rd, Shadman 1, Lahore</span>
                  </div>
                  <a
                    href={businessConfig.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#BE8C1D] hover:underline shrink-0 ml-2"
                  >
                    Directions &rarr;
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          S13 — FINAL APPOINTMENT CTA
          ========================================================================= */}
      <section className="section-padding bg-gradient-to-r from-[#FAF8F2] via-white to-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>APPOINTMENT &amp; CLINIC CONSULTATION</span>
            </div>

            <h2 
              className="h2-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Discuss Your Bone or Joint Problem With Dr. Mazhar Rafique
            </h2>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              If pain or an injury is limiting your life, a check-up can help you understand what is happening and what your options are. Call the clinic on {businessConfig.phone} to book your visit.
            </p>

            <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-800 max-w-xl mx-auto flex items-center justify-center gap-2.5 shadow-2xs">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
              <span>For an emergency, such as a serious injury or heavy bleeding, go to the nearest emergency department straight away.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              {/* 1st Main CTA: WhatsApp Appointment */}
              <button
                type="button"
                onClick={() => setAppointmentModalOpen(true)}
                className="py-3.5 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl text-sm sm:text-base cursor-pointer hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>WhatsApp Appointment</span>
              </button>

              {/* 2nd Main CTA: Call Appointment */}
              <a 
                href={businessConfig.callUrl} 
                className="btn-secondary text-sm sm:text-base"
                aria-label={`Call Dr. Mazhar Rafique clinic at ${businessConfig.phone}`}
              >
                <Phone className="w-4 h-4 text-[#BE8C1D]" />
                <span>Call: {businessConfig.phone}</span>
              </a>

              <Link 
                to="/contact/" 
                className="btn-secondary text-sm sm:text-base"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
        defaultService={selectedHeroService}
      />

      {/* Gallery Lightbox Modal */}
      <GalleryLightboxModal 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={homeGalleryItems}
        currentIndex={lightboxIndex}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

    </div>
  );
};
