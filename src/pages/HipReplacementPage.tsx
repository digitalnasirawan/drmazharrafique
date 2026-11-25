import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ChevronRight,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Award,
  HelpCircle,
  Clock,
  ClipboardList,
  Check,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const HipReplacementPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is hip replacement surgery?",
      a: "Hip replacement surgery is an operation in which the surgeon replaces damaged parts of the hip joint with artificial parts. Doctors also call it hip arthroplasty. The aim is to reduce pain and help the hip move better."
    },
    {
      q: "When might someone need hip replacement?",
      a: "It may be considered when hip pain and stiffness limit daily life, when pain continues at rest or at night, or when other treatments such as exercise, physiotherapy and medicines have not helped enough. A doctor decides after a full check."
    },
    {
      q: "Is hip replacement necessary for every patient with arthritis?",
      a: "No. Many people with hip arthritis manage well with non-surgical care. Surgery is usually considered only when symptoms stay severe despite suitable treatment, or when other treatments are not suitable."
    },
    {
      q: "What is the difference between total and partial hip replacement?",
      a: "A total hip replacement replaces both the ball and the socket. A partial hip replacement replaces only the ball. Partial replacement is usually considered in selected cases, such as some hip fractures, and is not a routine treatment for hip arthritis."
    },
    {
      q: "Is hip replacement a major operation?",
      a: "Yes. It is a common operation, but it is considered major surgery. It needs anaesthesia, careful planning and a period of rehabilitation. Your surgeon will explain what it means for you."
    },
    {
      q: "What are the possible risks of hip replacement?",
      a: "Possible risks include infection, blood clots, bleeding, hip dislocation, a difference in leg length, nerve or blood vessel injury, fracture around the implant, and loosening or wear of the implant over time. Some problems may need further surgery. Your own risks depend on your health and the operation."
    },
    {
      q: "How long does recovery after hip replacement take?",
      a: "Recovery is different for each person. Many people return to light daily activities over several weeks, but it may take several months to recover fully. Your surgeon and physiotherapist will guide you."
    },
    {
      q: "Will I need physiotherapy after surgery?",
      a: "Most people are advised to do exercises and some are guided by a physiotherapist. Exercise helps build strength and movement in the new hip. Your care team will tell you what is right for you."
    },
    {
      q: "Can hip pain improve without surgery?",
      a: "Sometimes, yes. Suitable exercise, physiotherapy, weight management, walking aids and some medicines may help. A doctor can advise you after checking your hip."
    },
    {
      q: "Can an artificial hip wear out?",
      a: "Yes. Artificial hips can wear or loosen over time. Modern hip replacements are designed to last for many years, and how long yours lasts depends on things such as your activity, your weight and your general health. If an implant wears out or becomes painful, another operation may be needed."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call the clinic on ${businessConfig.phone} or send a message on WhatsApp to ${businessConfig.whatsappDisplay}. The clinic is at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can ask about an appointment through WhatsApp on ${businessConfig.whatsappDisplay}. You can also call directly on ${businessConfig.phone} for immediate assistance.`
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-3 text-xs text-[#666666]">
        <div className="site-container flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-[#BE8C1D] transition-colors">Home</Link>
          <span className="text-[#BE8C1D]">&#8250;</span>
          <Link to="/services/" className="hover:text-[#BE8C1D] transition-colors">Services</Link>
          <span className="text-[#BE8C1D]">&#8250;</span>
          <Link to="/joint-replacement-surgery/" className="hover:text-[#BE8C1D] transition-colors">Joint Replacement Surgery</Link>
          <span className="text-[#BE8C1D]">&#8250;</span>
          <span className="text-[#111111] font-semibold">Hip Replacement Surgery</span>
        </div>
      </nav>

      {/* B3 — Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF8F2] to-[#FFFFFF] border-b border-[#E8E5DE] py-12 lg:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-xs">
                <Activity className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <span>HIP REPLACEMENT CARE</span>
              </div>
              
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Hip Replacement Surgery in Lahore
              </h1>
              
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Hip replacement surgery replaces a damaged hip joint with artificial parts. People may think about it when hip pain and stiffness make daily life hard, and other treatments have not helped enough. A medical check shows what is causing your pain and which treatment may suit you. You can call or WhatsApp our clinic in Lahore to ask about an appointment.
              </p>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>FCPS Orthopedic Surgery</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE]">
                  <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE] col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>BNI Shadman Lahore</span>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#A37513] transition-all shadow-sm group"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-[#111111] text-[#111111] font-semibold text-sm hover:bg-[#FAF8F2] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#111111]" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Clinical Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DE] shadow-md bg-white">
                <img 
                  src="/images/doctor/dr-mazhar-consultation.jpg" 
                  alt="Dr. Mazhar Rafique discussing orthopaedic hip care with a patient"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E5DE]">
                  <p className="text-xs font-bold text-[#111111]">Consultant Orthopaedic Examination</p>
                  <p className="text-xs text-[#666666]">Dr. Mazhar Rafique, BNI Hospital, Shadman 1, Lahore</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S01: What Is Hip Replacement Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 01</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Is Hip Replacement Surgery?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#BE8C1D]" />
                  How Does a Healthy Hip Work?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  The hip is one of the biggest joints in your body. It joins your thigh bone to your pelvis. The pelvis is the large bone at the base of your spine.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  The hip works like a ball and socket. The ball is the round top of your thigh bone. The socket is a cup-shaped part of your pelvis. The ball sits inside the socket and turns smoothly. This helps you walk, sit, bend and climb stairs.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  A smooth, slippery tissue called cartilage covers the ball and the socket. Cartilage works like a soft cushion. A thin lining around the joint also makes a little fluid. This fluid helps the joint move without rubbing.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-[#BE8C1D]" />
                  What Does Hip Replacement Mean?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Sometimes the cartilage wears away, or the bone is damaged. Arthritis, an injury or poor blood supply to the bone can cause this. Then the bones rub together. This can cause pain, stiffness and trouble walking.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  In a hip replacement, the surgeon replaces damaged parts of the hip joint with artificial parts. Doctors also call this operation <strong>hip arthroplasty</strong>. The artificial parts are usually made of metal, plastic or ceramic. Together they work like a new ball and socket.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  The main aim of surgery is to reduce pain and help the hip move better. This can make daily activities easier. Hip replacement is not needed for everyone with hip pain. Many people feel better with other treatments first, and your doctor will talk with you about the right choice. You can read more about the wider topic on our{' '}
                  <Link to="/joint-replacement-surgery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    joint replacement surgery
                  </Link>{' '}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02: Signs That Your Hip Needs Medical Attention */}
      <section className="py-12 lg:py-16 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 02</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Signs That Your Hip Needs Medical Attention
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">Common Hip Problems</h3>
              <p className="text-sm text-[#475569]">
                Hip problems can feel different from person to person. You may notice one or more of these signs:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Pain in the hip or the groin (the area where your leg joins your body)",
                  "Pain when you walk",
                  "Trouble climbing stairs",
                  "A stiff hip that is hard to move",
                  "Less movement than before, for example when lifting your leg",
                  "Trouble putting on shoes or socks",
                  "Pain that wakes you at night or stops you from doing daily jobs"
                ].map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-medium">{symptom}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-base font-bold text-[#111111]">Does This Mean I Need Surgery?</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  No. These signs mean that your hip should be checked by a doctor. Many causes of hip pain can improve without surgery. A check-up helps find out what is causing the trouble and what can be done. You can read about the check-up process on our{' '}
                  <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    orthopaedic consultation
                  </Link>{' '}
                  page.
                </p>
                <div className="pt-1">
                  <a
                    href={businessConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#BE8C1D] hover:text-[#A37513]"
                  >
                    <span>Have questions about hip pain? Ask about an appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Urgent Warning Box */}
              <div className="p-5 rounded-xl bg-[#FFF8EE] border border-[#F5D8A0] space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#9A6700]">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  <span>When to Get Urgent Help</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6B4701] leading-relaxed">
                  Some hip problems need care straight away. Go to the nearest emergency department or ask someone to take you there if:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#6B4701] space-y-1.5">
                  <li>You cannot put any weight on your leg after a fall or an injury</li>
                  <li>Your hip or leg looks twisted, shortened or out of shape</li>
                  <li>The hip area is suddenly hot, red and swollen, and you feel unwell or have a fever</li>
                </ul>
                <p className="text-xs sm:text-sm font-semibold text-[#9A6700] pt-1">
                  Do not wait for an appointment in these cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: What Causes Serious Hip Joint Problems? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 03</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Causes Serious Hip Joint Problems?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Several problems can damage the hip joint. Most people with hip pain do not need a hip replacement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#BE8C1D]" />
                  Osteoarthritis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  This is the most common reason for hip replacement. The cartilage cushion wears away over time, so the bones rub. It often develops slowly in older adults, but younger people can also have it.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  Rheumatoid Arthritis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  In rheumatoid arthritis, the body's immune system attacks the joint lining. The joint becomes swollen and irritated, and over time the cartilage and bone can be damaged. Medicines are the main treatment; surgery may be discussed if the joint is badly worn.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Avascular Necrosis (Osteonecrosis)
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  If the blood supply to the ball of the thigh bone is reduced, bone cells can die. The bone surface can weaken and collapse, and arthritis can follow. A hip injury can cause it, and some illnesses can too.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#BE8C1D]" />
                  Injury and Fracture
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A serious hip injury or a broken hip can damage the cartilage. Years later, this can lead to arthritis, which is called post-traumatic arthritis. In some hip fractures, doctors may suggest replacing the broken part of the joint.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2 col-span-1 sm:col-span-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#BE8C1D]" />
                  Hip Problems From Childhood
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Some babies and children have hip problems. Even when these are treated well, the hip may not grow normally. This can affect the joint surfaces and cause arthritis later in life. If you have arthritis in your hip, our{' '}
                  <Link to="/arthritis-treatment/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    arthritis management
                  </Link>{' '}
                  page explains how arthritis care is approached.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* S04: How Does a Doctor Check Your Hip? */}
      <section className="py-12 lg:py-16 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 04</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                How Does a Doctor Check Your Hip?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                A hip check usually follows a simple path. The exact steps can differ for each person.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Talking about your symptoms",
                  desc: "The doctor asks where it hurts, when it hurts and how it affects your day."
                },
                {
                  step: "2",
                  title: "Looking at your health history",
                  desc: "You share past injuries, illnesses, operations and the medicines you take."
                },
                {
                  step: "3",
                  title: "Checking how your hip moves",
                  desc: "The doctor moves your leg and checks movement, strength and position."
                },
                {
                  step: "4",
                  title: "Watching how you walk and move",
                  desc: "This shows how the hip affects your everyday activity."
                },
                {
                  step: "5",
                  title: "Looking at tests when needed",
                  desc: "An X-ray is often used to see the bones and the space in the joint. Some people may need other tests, such as an MRI scan. Not every patient needs an MRI."
                },
                {
                  step: "6",
                  title: "Talking about treatment options",
                  desc: "The doctor explains the possible choices, the benefits and the risks, and listens to your wishes."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white border border-[#E8E5DE] items-start">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F2] border border-[#BE8C1D] text-[#BE8C1D] font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#111111]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-sm text-[#475569]">
                The aim is to understand the cause of your pain before choosing a treatment. You can read about the general process on our{' '}
                <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  orthopaedic consultation
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05: Can Hip Pain Improve Without Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 05</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Can Hip Pain Improve Without Surgery?
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">Treatments Often Tried First</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Yes, hip pain can sometimes improve without surgery. Doctors often suggest these treatments first, depending on the cause of your pain:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Suitable exercise",
                    desc: "Gentle, regular exercise helps to keep the muscles around the hip strong. Walking, swimming and cycling are low-impact choices that doctors often mention."
                  },
                  {
                    title: "Physiotherapy",
                    desc: "A physiotherapist can teach you exercises that fit your hip and your fitness."
                  },
                  {
                    title: "Weight management",
                    desc: "If you are carrying extra weight, losing some can take strain off your hips and may reduce pain."
                  },
                  {
                    title: "Pain-relief medicines",
                    desc: "Some medicines, creams or gels may help. Use them only as your doctor advises."
                  },
                  {
                    title: "Walking aids",
                    desc: "A stick or frame can take some load off the hip and make walking safer."
                  },
                  {
                    title: "Joint injections",
                    desc: "In some cases, a doctor may suggest an injection into the joint to ease pain for a time."
                  }
                ].map((opt, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-1.5">
                    <h3 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#BE8C1D]" />
                      {opt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E5DE] text-xs sm:text-sm text-[#666666] italic">
                Be careful with treatments that promise to cure the hip or grow back worn cartilage. Ask your doctor how strong the proof is before you spend money or time on them.
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
                <h3 className="text-lg font-bold text-[#111111]">When Is Surgery Considered?</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Doctors may talk about hip replacement when hip symptoms still affect your quality of life a lot, even after suitable non-surgical treatment. It may also be discussed when those treatments are not suitable for you. The decision is made together with you, using your symptoms, examination, scans when needed, your health and your wishes.
                </p>
                <div className="pt-2">
                  <a
                    href={businessConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FAF8F2] border border-[#BE8C1D] text-xs font-bold text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Send a WhatsApp message to ask about an appointment</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S06: Types of Hip Replacement Surgery */}
      <section className="py-12 lg:py-16 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 06</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Types of Hip Replacement Surgery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">Total Hip Replacement</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    This is the most common type. Both main parts of the joint are replaced: the damaged socket in the pelvis, and the ball at the top of the thigh bone. A stem is placed inside the thigh bone with a smooth liner so the joint can glide.
                  </p>
                </div>
                <Link 
                  to="/total-joint-replacement/" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] group pt-2"
                >
                  <span>Read more about total joint replacement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">Partial Hip Replacement</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    In a partial hip replacement, only the ball of the hip joint is replaced. The natural socket stays. Doctors usually think about this operation in selected cases of broken hip (fractures). It is not a routine treatment for hip arthritis.
                  </p>
                </div>
                <div className="text-xs text-[#666666] pt-2 italic">
                  Often suited for acute fracture repair.
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">Revision Hip Replacement</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    A revision is a second operation on a hip that was replaced before. It may be considered if the first replacement becomes loose, worn, infected or unstable. A revision can be more complex than a first operation.
                  </p>
                </div>
                <Link 
                  to="/revision-joint-replacement/" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] group pt-2"
                >
                  <span>Read about revision joint replacement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Which Operation Is Right?</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                The right operation depends on your condition, your hip, your general health and your needs. Your surgeon will explain the choices and answer your questions before you decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S07: What Happens During Hip Replacement Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 07</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Happens During Hip Replacement Surgery?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Hip replacement is done in an operating theatre by a surgical team. The surgery often takes about one to two hours, but the time can vary. A typical operation follows these steps:
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: "Getting ready", desc: "The team checks your health, confirms the plan and prepares your skin and the area of the operation." },
                { title: "Anaesthesia", desc: "You will have anaesthesia so you feel no pain. This may be general anaesthesia, where you are asleep, or spinal/regional anaesthesia, where you are awake but numb from the waist down." },
                { title: "Reaching the hip joint", desc: "The surgeon makes a cut near the hip and moves the tissues aside to see the joint clearly." },
                { title: "Removing the damaged parts", desc: "The surgeon removes the damaged ball and the worn cartilage and bone from the socket." },
                { title: "Fitting the artificial parts", desc: "A new socket is placed in the pelvis. A stem and a new ball are placed in the thigh bone. Some parts are fixed with bone cement, while others are held by bone growing onto them." },
                { title: "Checking movement and stability", desc: "The surgeon moves the hip to make sure it is steady and moves smoothly through its range." },
                { title: "Closing the wound", desc: "The cut is closed and covered. You are then taken to a recovery area to wake up and be closely monitored." }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <span className="w-6 h-6 rounded-full bg-[#BE8C1D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#111111]">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Different Approaches and Implants</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Surgeons use different ways to reach the hip. Many types of implant designs and materials are also used. Your surgeon will explain what is planned for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S08: Benefits and Risks of Hip Replacement */}
      <section className="py-12 lg:py-16 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 08</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Benefits and Risks of Hip Replacement
              </h2>
            </div>

            {/* Possible Benefits */}
            <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
              <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#BE8C1D]" />
                Possible Benefits
              </h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                For some people, hip replacement may help with:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Hip pain reduction",
                  "How well the hip moves",
                  "Walking ability and endurance",
                  "Daily activities such as dressing, standing up and climbing stairs",
                  "Overall quality of life"
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#333333]">
                    <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#666666] pt-1 italic">
                Results differ from person to person. Surgery may not remove all pain, and a few people continue to have some pain afterwards.
              </p>
            </div>

            {/* Two-Column Risks Table */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                Possible Risks
              </h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                All operations have risks. Hip replacement is a major operation. Serious problems are not common, but they can happen. Here are the main ones in simple words:
              </p>

              <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE]">
                      <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider w-1/3">
                        Possible Risk
                      </th>
                      <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider">
                        What It Means
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E5DE] text-xs sm:text-sm">
                    {[
                      { risk: "Infection", meaning: "Germs can enter the wound or the joint. A wound infection is usually treated with antibiotics. A deep infection may need more surgery." },
                      { risk: "Blood clots", meaning: "A clot can form in a leg vein after surgery. Sometimes a clot travels to the lungs, which is serious. Your team will suggest ways to lower this risk." },
                      { risk: "Bleeding", meaning: "Some bleeding happens in every operation. Sometimes it is heavier than expected and needs extra care." },
                      { risk: "Hip dislocation", meaning: "The new ball can come out of the socket. This is not common and is most likely in the first months while the tissues heal." },
                      { risk: "Difference in leg length", meaning: "One leg may feel a little longer or shorter. The difference is often small. A shoe lift can help some people." },
                      { risk: "Nerve or blood vessel injury", meaning: "A nerve or blood vessel near the hip can be hurt during surgery. This is not common and often heals or can be repaired." },
                      { risk: "Fracture around the implant", meaning: "The bone near the implant can break, either during surgery or later, for example after a fall." },
                      { risk: "Implant loosening or wear", meaning: "Over many years, the artificial parts can wear out or become loose. This can cause pain." },
                      { risk: "Further surgery", meaning: "Some problems, such as deep infection, repeated dislocation or a worn implant, may need another operation." }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF8F2] transition-colors">
                        <td className="p-3.5 font-bold text-[#111111] align-top">
                          {row.risk}
                        </td>
                        <td className="p-3.5 text-[#475569] leading-relaxed">
                          {row.meaning}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risks Are Different for Each Person */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Risks Are Different for Each Person</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Your own risks depend on your age, general health, long-term illnesses and the type of operation. Ask your surgeon to explain your personal risks and what can be done to lower them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09: Recovery After Hip Replacement Surgery */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 09</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Recovery After Hip Replacement Surgery
              </h2>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Recovery is a step-by-step process. It is different for each person. It depends on your age, general health, the surgery and how well you follow your care team’s advice. Please do not compare your recovery with someone else’s. It may take several months to recover fully.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#BE8C1D]" />
                  The First Days
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  After the operation you rest in a recovery area. You will receive medicines for pain. The team will help you to start moving, often with the help of a physiotherapist. Many people use crutches or a walking frame at first.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  Moving Safely
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Your surgeon or physiotherapist may give you movement rules to protect the new hip. They may include not crossing your legs, not bending the hip too far and not sitting in very low chairs. Avoid falls, and use your walking aid until your team says it is safe.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Physiotherapy and Exercises
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Exercise is a very important part of recovery. A physiotherapist can show you gentle exercises to make the hip stronger and more flexible. Start with short walks and slowly walk more as you feel able.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#BE8C1D]" />
                  Wound Care and Follow-Up
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Keep the wound clean and dry as instructed. Go to follow-up visits. Contact your doctor soon if you notice fever, redness, oozing, or new calf swelling. Seek emergency help for chest pain or trouble breathing.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2 col-span-1 sm:col-span-2">
                <h3 className="text-base font-bold text-[#111111]">Getting Back to Daily Life</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Most people slowly return to light daily activities over several weeks. When you can drive, go back to work or resume other activities depends on you and your job. Ask your surgeon before you restart them. Low-impact activities such as walking and swimming are usually encouraged. For more ideas, see our page on{' '}
                  <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    surgery preparation and recovery
                  </Link>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* S10: How Can You Prepare for Hip Replacement? */}
      <section className="py-12 lg:py-16 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 10</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                How Can You Prepare for Hip Replacement?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Before the Operation Checklist */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-[#BE8C1D]" />
                  Before the Operation
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  If you and your surgeon decide on surgery, these simple steps can help:
                </p>
                <div className="space-y-3">
                  {[
                    { t: "Talk about your medicines", d: "Tell the team about every medicine, supplement and herbal product. Do not stop prescribed medicine unless instructed." },
                    { t: "Share your health conditions", d: "Tell your team about diabetes, heart, kidney or lung problems, allergies and anaesthesia reactions." },
                    { t: "Follow pre-op instructions", d: "Follow advice on fasting, tests, skin care, and report any rashes or infections." },
                    { t: "Stay active safely", d: "Gentle exercise approved by your doctor helps build stamina for recovery." },
                    { t: "Plan help at home", d: "Arrange support with cooking, shopping, bathing and travel for a few weeks." },
                    { t: "Prepare safe movement spaces", d: "Remove loose rugs, prepare a firm chair with arms, and ask about raised toilet seats." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#111111]">{item.t}:</strong> <span className="text-[#475569]">{item.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions to Ask Your Surgeon */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <QuestionIcon className="w-5 h-5 text-[#BE8C1D]" />
                  Questions to Ask Your Surgeon
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  Write your questions down before the visit. You may want to ask:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#333333]">
                  {[
                    "Why do you think I need this operation, and what are my other options?",
                    "What are the risks for me in particular?",
                    "What type of operation and implant do you suggest, and why?",
                    "What kind of anaesthesia will I have?",
                    "What will my recovery and rehabilitation look like?",
                    "Who do I contact if I have a problem after surgery?"
                  ].map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF8F2] border border-[#BE8C1D] text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ?
                      </span>
                      <span className="text-[#475569]">{q}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <p className="text-xs text-[#666666]">
                    Our{' '}
                    <Link to="/patient-education/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                      patient education
                    </Link>{' '}
                    pages have more general information.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* S11: Consultant Orthopaedic Surgeon in Lahore */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              
              <div className="md:col-span-4 flex justify-center">
                <div className="relative rounded-xl overflow-hidden border border-[#E8E5DE] shadow-sm max-w-[240px]">
                  <img 
                    src="/images/doctor/dr-mazhar-physical-exam.jpg" 
                    alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D]">
                  <Award className="w-3.5 h-3.5" />
                  <span>CONSULTANT ORTHOPAEDIC SURGEON</span>
                </div>

                <h2 
                  className="text-2xl sm:text-3xl font-bold text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. He holds MBBS and FCPS (Orthopaedic Surgery) qualifications. He has more than 10 years of experience in orthopaedic care. His clinical interests include hip replacement and the care of joint problems.
                </p>

                <p className="text-sm text-[#475569] leading-relaxed">
                  He sees patients at BNI - Bashir NeuroSpine Institute in Shadman, Lahore. At a consultation, he listens to your symptoms, examines your hip and explains the options in clear words, so you can make an informed choice.
                </p>

                <div className="pt-2">
                  <Link 
                    to="/about/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#111111] text-xs font-bold text-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-xs"
                  >
                    <span>Learn More About Dr. Mazhar Rafique</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* S12: Explore Related Hip & Joint Care */}
      <section className="py-12 lg:py-16 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 12</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Explore Related Hip &amp; Joint Care
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Hip problems often connect with other joint topics. These pages may help you learn more.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Joint Replacement Surgery",
                  desc: "A wider look at replacing damaged joints, such as the hip and the knee.",
                  url: "/joint-replacement-surgery/"
                },
                {
                  title: "Total Joint Replacement",
                  desc: "How a joint is replaced when both of its surfaces are damaged.",
                  url: "/total-joint-replacement/"
                },
                {
                  title: "Revision Joint Replacement",
                  desc: "Information about second operations when an earlier replacement has problems.",
                  url: "/revision-joint-replacement/"
                },
                {
                  title: "Hip Arthroscopy",
                  desc: "A keyhole approach that is sometimes used for certain hip problems.",
                  url: "/hip-arthroscopy/"
                },
                {
                  title: "Arthritis Management",
                  desc: "Ways arthritis in the joints can be assessed and managed.",
                  url: "/arthritis-treatment/"
                },
                {
                  title: "Orthopaedic Consultation",
                  desc: "What to expect when you see an orthopaedic surgeon about bone or joint pain.",
                  url: "/orthopaedic-consultation/"
                }
              ].map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.url}
                  className="p-5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] hover:shadow-xs transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">{link.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#BE8C1D] pt-2">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S13: Hip Replacement Consultation in Lahore */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 13</div>
                  <h2 
                    className="text-2xl sm:text-3xl font-bold text-[#111111]"
                    style={{ fontFamily: "'Maven Pro', sans-serif" }}
                  >
                    Hip Replacement Consultation in Lahore
                  </h2>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2 text-xs sm:text-sm">
                  <h3 className="font-bold text-[#111111]">Clinic Address</h3>
                  <p className="text-[#333333]"><strong>Doctor:</strong> Dr. Mazhar Rafique</p>
                  <p className="text-[#333333]"><strong>Clinic:</strong> BNI - Bashir NeuroSpine Institute</p>
                  <p className="text-[#333333]"><strong>Address:</strong> 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Punjab, Pakistan</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#111111]">How to Ask About an Appointment</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Tell the team that you would like to ask about a hip problem. They can explain the next steps and available appointment times. When you visit, it may help to have any earlier X-rays, scan reports and a list of your medicines ready. You can also visit our{' '}
                    <Link to="/contact/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                      contact page
                    </Link>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={businessConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-xs sm:text-sm hover:bg-[#A37513] transition-all shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Book Appointment</span>
                  </a>

                  <a
                    href={businessConfig.callUrl}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#111111] text-[#111111] font-semibold text-xs sm:text-sm hover:bg-[#FAF8F2] transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#111111]" />
                    <span>Call: {businessConfig.phone}</span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#E8E5DE] shadow-xs">
                  <img 
                    src="/images/doctor/bni-clinic-exterior.jpg" 
                    alt="BNI - Bashir NeuroSpine Institute, Jail Road Lahore"
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-3 bg-white text-center border-t border-[#E8E5DE]">
                    <span className="text-xs font-semibold text-[#666666]">BNI - Bashir NeuroSpine Institute, Jail Road Lahore</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* B5 — Frequently Asked Questions */}
      <section className="py-12 lg:py-16 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Hip Replacement FAQs
              </h2>
              <p className="text-sm text-[#475569]">
                Clear, honest answers to common questions about hip replacement surgery.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-[#E8E5DE] rounded-xl bg-white overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F2] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-[#111111]">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-[#BE8C1D] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F0EEE6]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* S14: Get Your Hip Pain Checked */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#FAF8F2] to-[#FFFFFF] border border-[#E8E5DE] shadow-sm">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Get Your Hip Pain Checked
            </h2>
            
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto">
              Hip pain or stiffness that does not go away is worth checking. A medical assessment can find the cause and explain your choices. For many people, the answer is not surgery. For others, surgery may be a choice to talk about carefully. Either way, you decide with the doctor, at your own pace.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#A37513] transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Book Appointment</span>
              </a>

              <a
                href={businessConfig.callUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white border border-[#111111] text-[#111111] font-semibold text-sm hover:bg-[#FAF8F2] transition-all"
              >
                <Phone className="w-4 h-4 text-[#111111]" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

    </div>
  );
};
