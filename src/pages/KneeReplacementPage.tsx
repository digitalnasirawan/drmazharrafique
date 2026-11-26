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
  Check
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const KneeReplacementPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is knee replacement surgery?",
      a: "Knee replacement is an operation in which a surgeon removes the damaged surfaces of the knee joint and fits artificial parts made of metal and plastic. Its medical name is knee arthroplasty. The aim is to ease pain and help the knee move better."
    },
    {
      q: "When might someone need knee replacement?",
      a: "A doctor may talk about it when the knee is badly damaged, the pain strongly affects daily life, and other treatments have not helped enough. The decision depends on your symptoms, the knee check, X-rays when needed, your general health and your own wishes."
    },
    {
      q: "Is knee replacement necessary for every patient with arthritis?",
      a: "No. Many people with knee arthritis are helped by exercise, physiotherapy, weight control when it applies, and suitable pain medicine. Surgery is considered mainly when other care has not helped enough."
    },
    {
      q: "What is the difference between total and partial knee replacement?",
      a: "In a total knee replacement, the damaged surfaces of the whole knee are replaced. In a partial knee replacement, only the damaged part is replaced and the healthy parts are kept. Only some patients are suitable for a partial replacement. The arthritis must be limited to one area, and the ligaments must be healthy."
    },
    {
      q: "Is knee replacement a major operation?",
      a: "Yes. It is a common operation, but it is major surgery. You need an anaesthetic, time in hospital and a period of rehabilitation. It also carries risks, which your surgeon explains before you decide."
    },
    {
      q: "What are the possible risks of knee replacement?",
      a: "Risks include infection, blood clots, bleeding, stiffness, ongoing pain, injury to nearby nerves or blood vessels, wear or loosening of the implant, and the chance of needing another operation. There are also risks from the anaesthetic. Most people do not have serious problems. Your own risks depend on your health and other factors."
    },
    {
      q: "How long does recovery after knee replacement take?",
      a: "It differs from person to person. Many people do light daily tasks within a few weeks, but full recovery often takes several months or longer. Partial knee replacement usually has a shorter recovery. Your team will explain what to expect for you. No one can promise a fixed date."
    },
    {
      q: "Will I need physiotherapy after surgery?",
      a: "Most people do. Exercises help bring back strength and movement. Your team will tell you which exercises to do and how often. Doing them regularly is an important part of recovery."
    },
    {
      q: "Can knee pain improve without surgery?",
      a: "Often, yes. Exercise, physiotherapy, weight control when it applies, suitable medicines and walking aids help many people. The best choice depends on the cause of the pain, so a doctor needs to check your knee."
    },
    {
      q: "Can an artificial knee wear out?",
      a: "Yes. Artificial knees are expected to last for many years, but the parts can wear or become loose over time. Some people then need further surgery. How long an artificial knee lasts depends on the person, the implant and how the knee is used."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call ${businessConfig.phone}, or send a WhatsApp message to ${businessConfig.whatsappDisplay}. Tell the clinic your main problem. Appointments are made by phone call or WhatsApp only. The clinic is BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. Send a message to ${businessConfig.whatsappDisplay} on WhatsApp, or use the Book Appointment button. You can also call directly on ${businessConfig.phone} for immediate phone inquiries.`
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
          <span className="text-[#111111] font-semibold">Knee Replacement Surgery</span>
        </div>
      </nav>

      {/* B3 — Hero Section */}
      <section className="bg-white border-b border-[#E8E5DE] py-12 lg:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-xs">
                <Activity className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <span>KNEE REPLACEMENT CARE</span>
              </div>
              
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Knee Replacement Surgery in Lahore
              </h1>
              
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Knee replacement is an operation that replaces the worn surfaces of a damaged knee with artificial parts. Doctors may think about it when long-lasting knee pain, often from arthritis, strongly limits daily life. Many people with knee pain do not need it, so a careful check-up comes first. Call or send a WhatsApp message to the clinic to ask for an appointment.
              </p>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Fellowship Trained</span>
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
                  src="/images/doctor/dr-mazhar-rafique-surgery-knee.jpg" 
                  alt="Dr. Mazhar Rafique performing precision knee surgery in Lahore"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E5DE]">
                  <p className="text-xs font-bold text-[#111111]">Consultant Orthopaedic Care in Lahore</p>
                  <p className="text-xs text-[#666666]">Bashir NeuroSpine Institute (BNI), Jail Road, Shadman 1, Lahore</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S01 — What Is Knee Replacement Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 01</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Is Knee Replacement Surgery?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#BE8C1D]" />
                  What does the knee do?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  The knee is the joint in the middle of your leg. It lets you bend and straighten your leg. You use it to walk, sit down, stand up and climb stairs.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Three bones meet at the knee: the thigh bone, the shin bone and the kneecap. Their ends are covered with cartilage. Cartilage is a smooth, slippery layer that lets the bones glide past each other.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  A knee can be damaged by arthritis, an old injury or another joint disease. The cartilage wears thin. The bones start to rub. The knee becomes painful and stiff.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-[#BE8C1D]" />
                  What is knee replacement?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Knee replacement is an operation in which a surgeon removes the damaged surfaces of the knee and fits artificial parts in their place. Its medical name is <strong>knee arthroplasty</strong>.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Doctors also call it <em>resurfacing</em>, because only the worn surfaces of the bones are replaced, not the whole bone. The artificial parts are made of metal and medical-grade plastic.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  The main aim is to ease pain and help the knee move better for everyday activities. Read more about{' '}
                  <Link to="/joint-replacement-surgery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    joint replacement surgery
                  </Link>{' '}
                  in general.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — Signs and Symptoms of Severe Knee Problems */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 02</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Signs That Your Knee Needs Medical Attention
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">Common knee symptoms</h3>
              <p className="text-sm text-[#475569]">
                Knee problems can feel different from person to person. These signs are common:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Knee pain that lasts or keeps coming back",
                  "Pain when you walk",
                  "Trouble climbing stairs or getting up from a chair",
                  "A stiff knee, especially after rest",
                  "Swelling around the knee",
                  "Trouble bending or straightening the knee fully",
                  "Pain that disturbs your sleep or stops you doing daily tasks"
                ].map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-medium">{symptom}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#475569] leading-relaxed">
                These signs do not mean that you need surgery. Many causes of knee pain can be treated without an operation. A doctor needs to check your knee before anyone can say what is wrong. You can read what happens at an{' '}
                <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  orthopaedic consultation
                </Link>.
              </p>

              {/* Urgent Warning Box */}
              <div className="p-5 rounded-xl bg-[#FFF8EE] border border-[#F5D8A0] space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#9A6700]">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  <span>When to get urgent medical help</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6B4701] leading-relaxed">
                  Get medical help straight away if:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#6B4701] space-y-1.5">
                  <li>Your knee becomes hot, red and swollen, and you have a fever or feel very unwell</li>
                  <li>You have a serious injury to the knee and cannot put any weight on the leg</li>
                  <li>The knee looks visibly out of shape after an injury</li>
                </ul>
                <p className="text-xs sm:text-sm font-semibold text-[#9A6700] pt-1">
                  Go to the nearest emergency department. Do not wait for an appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03 — Common Causes of Knee Joint Damage */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 03</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Causes Serious Knee Joint Problems?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Several things can damage a knee. Most of them do not need a knee replacement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#BE8C1D]" />
                  Osteoarthritis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Arthritis means painful, stiff joints. Osteoarthritis is the most common type. The cartilage in the knee wears down over time, and the bones start to rub. It often affects the knees. There is no cure, but many treatments can ease the symptoms.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  Rheumatoid arthritis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  In rheumatoid arthritis, the body's defence system attacks the lining of the joints by mistake. The knee becomes swollen, painful and stiff. It is mainly treated with medicines. Surgery is only one part of care for some people.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Knee injuries
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A serious knee injury, such as a bad break near the joint, can damage the cartilage. Years later, the knee may wear out faster. This is sometimes called arthritis after injury (post-traumatic arthritis).
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#BE8C1D]" />
                  Other causes
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Other problems can also damage the knee. One example is osteonecrosis, where part of a bone loses its blood supply and weakens. A doctor can tell what is causing your knee pain. To learn more, visit{' '}
                  <Link to="/arthritis-treatment/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    arthritis management
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04 — How Is Knee Pain Diagnosed? */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 04</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                How Does a Doctor Check Your Knee?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                This is how a knee problem is usually checked. Not every patient needs every step or every test.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Discuss your symptoms",
                  desc: "You tell the doctor where it hurts, when it started, and what makes it better or worse."
                },
                {
                  step: "2",
                  title: "Review your medical history",
                  desc: "The doctor asks about past illnesses, injuries, operations, allergies and the medicines you take."
                },
                {
                  step: "3",
                  title: "Examine the knee",
                  desc: "The doctor looks at your knee, feels it, and moves it gently. The doctor checks how far it bends and straightens, and whether it feels steady. The doctor may also watch you walk."
                },
                {
                  step: "4",
                  title: "Consider an X-ray",
                  desc: "An X-ray shows the bones and how much space is left in the joint. It is often used when surgery is being thought about. An MRI scan or other tests are not always needed. The doctor orders them only if they will help."
                },
                {
                  step: "5",
                  title: "Discuss treatment options",
                  desc: "The doctor explains what is wrong and the choices you have. These may include exercise, physiotherapy, medicines or surgery. You can ask questions and take your time."
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
                To prepare for your visit, see also our detailed guide on{' '}
                <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  orthopaedic consultation
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05 — Treatment Options Before Knee Replacement */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 05</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Can Knee Pain Improve Without Surgery?
              </h2>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Yes, often. Many people with knee pain feel better with care that does not need an operation. A doctor can help you choose after checking your knee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Exercise and strengthening",
                  desc: "Strong muscles around the knee take some load off the joint. NICE lists exercise as a core treatment for osteoarthritis."
                },
                {
                  title: "Physiotherapy",
                  desc: "A physiotherapist teaches exercises that fit your knee, posture, and mobility needs."
                },
                {
                  title: "Weight management",
                  desc: "If you carry extra weight, losing some takes significant pressure off the knee joint."
                },
                {
                  title: "Pain-relief medicines",
                  desc: "Some medicines can ease pain when your doctor says they are right for you. Please do not start or stop any medicine without medical advice."
                },
                {
                  title: "Walking aids",
                  desc: "A stick or a walking frame can take weight off a painful knee and prevent falls."
                },
                {
                  title: "Other treatments",
                  desc: "Your doctor may suggest other options after the check-up. Always ask how well each one is known to work."
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

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <p className="text-sm text-[#475569] leading-relaxed">
                Doctors may talk about knee replacement when the pain stays severe even after suitable treatment, and it strongly affects daily life. For some knee problems, such as a torn cartilage cushion in a younger knee, keyhole surgery may be considered first. Read about{' '}
                <Link to="/knee-arthroscopy/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  knee arthroscopy
                </Link>{' '}
                and{' '}
                <Link to="/arthritis-treatment/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  arthritis management
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — Types of Knee Replacement */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 06</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Types of Knee Replacement Surgery
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                There is more than one kind of knee replacement. Which one suits you depends on your knee, your health and your doctor's advice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">Total knee replacement</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    In a total knee replacement, the damaged surfaces of the whole knee joint are replaced. This is the most common type. It is used when the damage is spread across the knee.
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
                  <h3 className="text-base font-bold text-[#111111]">Partial knee replacement</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    In a partial knee replacement, only the damaged part of the knee is replaced, and the healthy parts are kept. It is a smaller operation, and recovery is usually shorter. But it suits only some patients whose arthritis is limited to one area and ligaments are strong.
                  </p>
                </div>
                <Link 
                  to="/partial-knee-replacement/" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] group pt-2"
                >
                  <span>Read more about partial knee replacement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">Revision knee replacement</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    A revision is a further operation to repair or replace parts of an earlier knee replacement that has worn, loosened or developed another problem. It is usually more complex than the first operation.
                  </p>
                </div>
                <Link 
                  to="/revision-joint-replacement/" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] group pt-2"
                >
                  <span>Read more about revision joint replacement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* S07 — How Is Knee Replacement Surgery Performed? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 07</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Happens During Knee Replacement Surgery?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Surgeons can use different methods, so the details vary. This is a general picture of a total knee replacement. Your own surgeon will explain what is planned for you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Before the operation</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  You have a check of your general health first. Your team tells you when to stop eating and drinking and which medicines to take. You also meet the anaesthetist, the doctor who looks after you during the operation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#111111]">During the operation</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  You have an anaesthetic so that you feel no pain. Some people are fully asleep. Others have an injection in the back that numbs the legs. Your team explains the choices and their risks. The operation often takes between one and three hours.
                </p>

                <div className="space-y-3">
                  {[
                    "The surgeon makes a cut over the knee and moves the kneecap to one side to reach the joint.",
                    "The surgeon removes the damaged surfaces from the ends of the thigh bone and shin bone, and sometimes from the back of the kneecap.",
                    "The surgeon fits metal parts onto the ends of the bones. Some parts are held in place with special bone cement.",
                    "A plastic spacer goes between the metal parts. It lets the joint glide smoothly.",
                    "The surgeon bends and moves the knee to check that it moves and feels steady.",
                    "The wound is closed with stitches or clips and covered with a dressing."
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                      <span className="w-6 h-6 rounded-full bg-[#BE8C1D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-[#333333]">{step}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#666666] pt-1">
                  After the operation, you rest in a recovery room while you wake up and the pain is managed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S08 — Possible Benefits and Risks */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 08</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Benefits and Risks of Knee Replacement
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Knee replacement is a major operation. It helps many people, but it has risks. Your surgeon should explain both before you decide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Benefits */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#BE8C1D]" />
                  Possible benefits
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  For selected patients, knee replacement may:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Reduce knee pain",
                    "Improve how well the knee moves",
                    "Make walking, stairs and daily activities easier",
                    "Improve quality of life"
                  ].map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#333333]">
                      <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#666666] pt-2 italic">
                  It cannot promise that all pain will go away.
                </p>
              </div>

              {/* Risks */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  Possible risks
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  Most people do not have serious problems. But risks include:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#333333]">
                  <li><strong>Infection:</strong> germs can get into the wound or around the new joint</li>
                  <li><strong>Blood clots:</strong> a clot can form in a leg vein</li>
                  <li><strong>Bleeding:</strong> some bleeding is normal; heavy bleeding may need treatment</li>
                  <li><strong>Stiffness:</strong> the knee may not bend or straighten fully</li>
                  <li><strong>Ongoing pain:</strong> some people still have pain after surgery</li>
                  <li><strong>Nerve or blood vessel injury:</strong> can cause numbness or other problems</li>
                  <li><strong>Implant wear or loosening:</strong> artificial parts can wear over time</li>
                  <li><strong>Further surgery:</strong> some people need another operation later</li>
                  <li><strong>Risks of anaesthetic:</strong> your anaesthetist explains these before surgery</li>
                </ul>
              </div>

            </div>

            {/* Limits */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Limits to know about</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Knee replacement will not let you do more than you could before arthritis began. An artificial knee does not last forever. Your own risks depend on your health, your age, your weight, other illnesses and the type of operation. Ask your surgeon to explain them for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 — Recovery and Rehabilitation */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 09</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Recovery After Knee Replacement Surgery
              </h2>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Recovery is different for everyone. It depends on your age, your health, your fitness before surgery and the type of operation. Many people do light daily tasks again within a few weeks. Full recovery often takes several months or longer. A partial knee replacement usually has a shorter recovery than a total one. No one can promise a fixed date.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#BE8C1D]" />
                  The first days
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  After the operation, your team gives you medicines for pain. They help you stand and walk with support when it is safe, often within a day or two. You may use a frame or crutches. Follow your team's advice on how to move safely.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Exercises and physiotherapy
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Regular exercises are a key part of recovery. They bring back strength and movement. A physiotherapist shows you which exercises to do and how often. Keep doing them, even after formal sessions end.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  Pain, swelling and follow-up
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Your knee will be sore and swollen for a while. Take your medicines as your team advises. Raising your leg can help the swelling. Follow-up visits let the doctor check your wound, movement and progress. Contact your doctor if you have a fever, a red or leaking wound, or a swollen, painful calf.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#BE8C1D]" />
                  Getting back to daily life
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Go back to daily activities step by step. Walking, light housework and stairs usually come first. Ask your team when you can drive and go back to work. Low-impact activities such as walking, swimming and cycling are often suitable later. Read more at{' '}
                  <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    Surgery Preparation &amp; Recovery
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S10 — Preparing for Knee Replacement Surgery */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 10</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                How Can You Prepare for Knee Replacement?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Good preparation can make recovery easier. These steps are general. Your surgical team will give you instructions for your own case.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Talk about your medicines",
                  desc: "Give the team a full list of everything you take. Do not stop any prescribed medicine unless a doctor tells you to."
                },
                {
                  title: "Share your medical conditions",
                  desc: "Tell the team about heart, lung, kidney or blood problems, diabetes, allergies and past operations."
                },
                {
                  title: "Stay as active as you can",
                  desc: "Gentle exercise that strengthens the muscles around the knee helps recovery."
                },
                {
                  title: "Follow instructions before surgery",
                  desc: "This includes when to stop eating and drinking prior to your procedure."
                },
                {
                  title: "Plan help at home",
                  desc: "Arrange for family or friends to help with cooking, shopping and getting around for a while."
                },
                {
                  title: "Ask your questions",
                  desc: "Write them down before your visit. Ask about the benefits, the risks, the other options and what recovery will involve."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#E8E5DE] space-y-1.5">
                  <h3 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-[#BE8C1D]" />
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#475569]">
              Learn more comprehensive guidance at our{' '}
              <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                Surgery Preparation &amp; Recovery
              </Link>{' '}
              guide.
            </p>
          </div>
        </div>
      </section>

      {/* S11 — About Dr. Mazhar Rafique */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              
              <div className="md:col-span-4 flex justify-center">
                <div className="relative rounded-xl overflow-hidden border border-[#E8E5DE] shadow-sm max-w-[240px]">
                  <img 
                    src="/images/doctor/dr-mazhar-headshot-portrait.jpg" 
                    alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D]">
                  <Award className="w-3.5 h-3.5" />
                  <span>ORTHOPAEDIC SPECIALIST</span>
                </div>

                <h2 
                  className="text-2xl sm:text-3xl font-bold text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. His profile describes more than 10 years of experience in orthopaedic, trauma and sports injury care. He completed a fellowship in arthroplasty and joint reconstruction. Arthroplasty means joint replacement surgery. His clinical interests include knee replacement, hip replacement and knee arthroscopy.
                </p>

                <p className="text-sm text-[#475569] leading-relaxed">
                  He sees patients at BNI - Bashir NeuroSpine Institute on Jail Road, Shadman, Lahore.
                </p>

                {/* Verified Credentials */}
                <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                    <span>M.B.B.S</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                    <span>F.C.P.S. (Orthopedic Surgery)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                    <span>Certified ATLS®</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                    <span>Fellowship Arthroplasty &amp; Reconstruction</span>
                  </div>
                </div>

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

      {/* S12 — Related Orthopaedic Services */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 12</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Explore Related Knee &amp; Joint Care
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                These pages may help you learn more about joint care and orthopaedic options.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Joint Replacement Surgery",
                  desc: "See the whole picture of joint replacement, including the hip.",
                  url: "/joint-replacement-surgery/"
                },
                {
                  title: "Partial Knee Replacement",
                  desc: "Find out when only part of the knee is replaced.",
                  url: "/partial-knee-replacement/"
                },
                {
                  title: "Total Joint Replacement",
                  desc: "Learn what \"total\" means for a knee or a hip.",
                  url: "/total-joint-replacement/"
                },
                {
                  title: "Knee Arthroscopy",
                  desc: "Read how a small camera can help doctors look inside the knee.",
                  url: "/knee-arthroscopy/"
                },
                {
                  title: "Arthritis Management",
                  desc: "Learn how arthritis is treated, with and without surgery.",
                  url: "/arthritis-treatment/"
                },
                {
                  title: "Orthopaedic Consultation",
                  desc: "See what happens when you visit an orthopaedic surgeon about knee pain.",
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

      {/* S13 — Clinic Location & Appointments */}
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
                    Knee Replacement Consultation in Lahore
                  </h2>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique sees patients at BNI - Bashir NeuroSpine Institute on Jail Road in Shadman, Lahore. To ask about a consultation for knee pain, call the clinic or send a WhatsApp message. Tell the clinic your main problem. Clinic hours are not listed here, so please ask about appointment times when you contact the clinic. Bring any X-rays, scans and reports you already have. You can find more on the{' '}
                  <Link to="/contact/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    contact page
                  </Link>.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2 text-xs sm:text-sm">
                  <h3 className="font-bold text-[#111111]">Clinic details</h3>
                  <p className="text-[#333333]"><strong>Doctor:</strong> Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon</p>
                  <p className="text-[#333333]"><strong>Clinic:</strong> BNI - Bashir NeuroSpine Institute</p>
                  <p className="text-[#333333]"><strong>Address:</strong> 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Punjab, Pakistan</p>
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
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
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
                Knee Replacement FAQs
              </h2>
              <p className="text-sm text-[#475569]">
                Clear, honest answers to common questions about knee replacement surgery.
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

      {/* S14 — Final Appointment CTA */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-white border border-[#E8E5DE] shadow-sm">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Get Your Knee Pain Checked
            </h2>
            
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto">
              If knee pain or stiffness is making daily life hard, a check-up can help you understand what is happening and what your options are. Many people improve without surgery, and knee replacement is only one choice. Call {businessConfig.phone} or send a WhatsApp message to {businessConfig.whatsappDisplay} to ask about a consultation.
            </p>

            <p className="text-xs text-[#9A6700] bg-[#FFF8EE] border border-[#F5D8A0] p-3 rounded-lg max-w-lg mx-auto">
              For a serious injury or a hot, swollen knee with fever, go to the nearest emergency department straight away.
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
