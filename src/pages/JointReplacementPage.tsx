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
  HelpCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const JointReplacementPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is joint replacement surgery?",
      a: "Joint replacement is an operation in which a surgeon replaces damaged parts of a joint with artificial parts. The parts are made of metal, plastic or ceramic. The knee and hip are replaced most often."
    },
    {
      q: "When might someone need joint replacement?",
      a: "A doctor may talk about it when a joint is badly damaged, the pain or stiffness strongly affects daily life, and other treatments have not helped enough. Only a doctor who checks you can say whether it is right for you."
    },
    {
      q: "Is joint replacement always necessary for arthritis?",
      a: "No. Many people with arthritis are helped by exercise, physiotherapy, weight control when it applies, and pain medicine. NICE lists exercise and weight management as core treatments for osteoarthritis. Surgery is considered mainly when other care has not helped enough."
    },
    {
      q: "What is the difference between total and partial knee replacement?",
      a: "In a total knee replacement, the surfaces of the whole knee joint are replaced. In a partial knee replacement, only the damaged part is replaced and the healthy parts are kept. Only some patients, whose damage is limited to one area, are suitable for a partial replacement."
    },
    {
      q: "What is the difference between knee and hip replacement?",
      a: "They treat different joints. The knee is a hinge joint where the thigh bone meets the shin bone. The hip is a ball-and-socket joint where the top of the thigh bone fits into the pelvis. The operations, the artificial parts and the exercises afterwards are different."
    },
    {
      q: "How long does recovery after joint replacement take?",
      a: "It differs from person to person. It can take several months to recover fully. It depends on your health, your age, the joint and your rehabilitation. Your surgical team will explain what to expect for you. No one can promise a fixed date."
    },
    {
      q: "What are the possible risks of joint replacement?",
      a: "Possible risks include infection, blood clots, bleeding, stiffness, problems with the implant such as wear or loosening, injury to nearby nerves or blood vessels, and risks of the anaesthetic. Most people do not have serious problems. Your doctor explains your own risks before surgery."
    },
    {
      q: "Can joint pain improve without surgery?",
      a: "Often, yes. Exercise, physiotherapy, weight control when it applies, suitable medicines and walking aids help many people. The best choice depends on the cause of the pain."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call ${businessConfig.phone}, or send a WhatsApp message to ${businessConfig.whatsappDisplay}. Tell the clinic your main problem. Appointments are made by phone call or WhatsApp only. The clinic is BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. Send a message to ${businessConfig.whatsappDisplay} on WhatsApp, or use the Book Appointment button. Use this number for WhatsApp and phone calls (${businessConfig.phone}) directly to the clinic desk.`
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* =========================================================================
          B3 — HERO SECTION
          ========================================================================= */}
      <section className="bg-gradient-to-b from-[#FAF8F2] via-white to-white border-b border-[#E8E5DE] py-10 lg:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-1" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-[#111111]">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <Link to="/services/" className="hover:text-[#111111]">Services</Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <span className="text-[#111111] font-semibold">Joint Replacement Surgery</span>
              </nav>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-2xs">
                <Activity className="w-3.5 h-3.5" />
                <span>JOINT REPLACEMENT CARE</span>
              </div>

              <h1 
                className="h1-title text-[#111111] tracking-tight"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Joint Replacement Surgery in Lahore
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Joint replacement is an operation in which a surgeon replaces damaged parts of a joint with artificial parts. Doctors may think about it for severe knee or hip pain, often caused by arthritis. It is not the right first step for everyone, so a proper check-up comes first. Call or send a WhatsApp message to the clinic to ask for an appointment.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(true)}
                  className="py-3.5 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl text-sm sm:text-base cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Book Appointment</span>
                </button>

                <a 
                  href={businessConfig.callUrl}
                  className="py-3.5 px-5 rounded-xl font-bold text-[#111111] bg-white hover:bg-[#FAF8F2] border-1.5 border-[#BE8C1D] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-[#475569]">
                <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                <span>Dr. Mazhar Rafique &bull; BNI - Bashir NeuroSpine Institute, Shadman 1, Lahore</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-[#E8E5DE] shadow-xl bg-white group">
                <img 
                  src="/images/doctor/dr-mazhar-rafique-surgery-knee.jpg" 
                  alt="Dr. Mazhar Rafique performing joint reconstruction surgery in operating theatre" 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                <div className="p-3.5 bg-[#FAF8F2] border-t border-[#E8E5DE] text-xs text-[#475569] text-left">
                  <strong>Arthroplasty &amp; Joint Reconstruction:</strong> Dedicated surgical care for severe knee and hip arthritis.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S01 — WHAT IS JOINT REPLACEMENT SURGERY?
          ========================================================================= */}
      <section className="section-padding bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                ANATOMY &amp; PROCEDURE EXPLAINED
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is Joint Replacement Surgery?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 p-6 bg-[#FAF8F2] rounded-2xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  What is a joint?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  A joint is a place where two or more bones meet. Your knee, hip, shoulder and elbow are joints. The ends of the bones are covered with cartilage. Cartilage is a smooth, slippery layer. It lets the bones glide past each other when you move.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Over time, cartilage can wear thin. Arthritis, an old injury or other joint disease can cause this. Then the bones may rub together. The joint can become painful and stiff.
                </p>
              </div>

              <div className="space-y-4 p-6 bg-[#FAF8F2] rounded-2xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  What happens in joint replacement?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Joint replacement is an operation in which a surgeon replaces damaged parts of a joint with artificial parts. The artificial parts are called an implant or a prosthesis. They are made of metal, plastic or ceramic. They are made to move like a healthy joint.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  The knee and the hip are the joints replaced most often. Other joints, such as the shoulder, can also be replaced. This page focuses on the knee and hip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S02 — WHEN MIGHT YOU NEED JOINT REPLACEMENT?
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                EVALUATION CRITERIA
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Might You Need Joint Replacement?
              </h2>
              <p className="text-base text-[#475569] mt-2">
                Most people with joint pain do not need a new joint. A doctor may talk about joint replacement when a joint is badly damaged and other treatments have not helped enough.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Severe joint pain that does not settle",
                "Stiffness that makes the joint hard to move",
                "Trouble walking, standing up or climbing stairs",
                "Pain that makes daily tasks, work or sleep hard",
                "Advanced arthritis that shows clearly on an X-ray",
                "Symptoms that continue even after suitable treatment, such as exercise, physiotherapy and medicine"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E8E5DE] shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-[#111111] font-medium leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-white rounded-xl border-l-4 border-[#BE8C1D] shadow-xs text-sm text-[#475569] space-y-2">
              <strong className="text-[#111111] block">Important Clinical Check Note:</strong>
              <p>
                These signs do not prove that you need surgery. Only a doctor who checks you can say whether joint replacement is right for you. Many people do well with other treatments. You can read about the <Link to="/orthopaedic-consultation/" className="font-bold text-[#BE8C1D] hover:underline">orthopaedic consultation</Link> to see how this check works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S03 — COMMON JOINT PROBLEMS
          ========================================================================= */}
      <section className="section-padding bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                UNDERLYING CAUSES
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Common Joint Problems
              </h2>
              <p className="text-base text-[#475569] mt-2">
                Several problems can damage a joint. Most of them do not lead to joint replacement. Here are the main ones:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-2">
                <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Osteoarthritis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Osteoarthritis is the most common type of arthritis. The cartilage in a joint wears down over time. The knees and hips are often affected. It causes pain and stiffness. There is no cure, but many treatments can ease the symptoms. Exercise and weight control, when they apply to you, are key parts of care.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-2">
                <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Rheumatoid arthritis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  In rheumatoid arthritis, the body's defence system attacks the lining of the joints by mistake. The joints become swollen, painful and stiff. Doctors treat it mainly with medicines. Surgery is only one part of care for some people.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-2">
                <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Joint damage after an injury
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A serious injury to a joint, such as a bad break near the joint, can damage the cartilage. Years later, the joint may wear out faster and become painful.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-2">
                <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Some hip fractures
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A hip fracture is a break in the top of the thigh bone, near the hip joint. Some hip fractures are treated by replacing part or all of the hip joint. Other hip fractures are fixed with screws or plates. The doctor chooses based on the break and the patient's health.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#E8E5DE] bg-[#FAF8F2] md:col-span-2 space-y-2">
                <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Other joint damage
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Other problems can also damage a joint. One example is osteonecrosis, where part of a bone loses its blood supply and weakens. Only a doctor can tell what is causing your pain. To learn more about arthritis, visit <Link to="/arthritis-bone-health/" className="font-bold text-[#BE8C1D] hover:underline">Arthritis &amp; Bone Health</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S04 — TYPES OF JOINT REPLACEMENT SURGERY (5 CARDS)
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                SPECIFIC PROCEDURES
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Types of Joint Replacement Surgery
              </h2>
              <p className="text-base text-[#475569] mt-2">
                There is more than one kind of joint replacement. Here are five topics. Each page explains its topic in simple words. A doctor decides which one, if any, may suit you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Knee Replacement */}
              <div className="p-6 bg-white border border-[#E8E5DE] rounded-2xl hover:border-[#BE8C1D] hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    Knee Replacement Surgery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    This operation replaces a damaged knee joint with an artificial one. Doctors usually think about it for severe knee arthritis when other treatments have not helped enough.
                  </p>
                  <p className="text-xs font-semibold text-[#111111] bg-[#FAF8F2] p-2.5 rounded-lg border border-[#E8E5DE]">
                    <strong>Main concern:</strong> long-lasting knee pain that makes walking and stairs hard.
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-[#FAF8F2]">
                  <Link to="/knee-replacement-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                    <span>Read about knee replacement surgery &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Hip Replacement */}
              <div className="p-6 bg-white border border-[#E8E5DE] rounded-2xl hover:border-[#BE8C1D] hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    Hip Replacement Surgery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    The hip is a ball-and-socket joint. In this operation, the worn ball and socket are replaced with artificial parts. It may be an option when hip pain strongly limits daily life.
                  </p>
                  <p className="text-xs font-semibold text-[#111111] bg-[#FAF8F2] p-2.5 rounded-lg border border-[#E8E5DE]">
                    <strong>Main concern:</strong> hip pain, often felt in the groin, that makes walking and standing hard.
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-[#FAF8F2]">
                  <Link to="/hip-replacement-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                    <span>Read about hip replacement surgery &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Total Joint Replacement */}
              <div className="p-6 bg-white border border-[#E8E5DE] rounded-2xl hover:border-[#BE8C1D] hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    Total Joint Replacement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    "Total" means that both sides of the joint surface are replaced. In the hip, this means the ball and the socket. In the knee, it means the ends of the thigh bone and shin bone, and sometimes the back of the kneecap.
                  </p>
                  <p className="text-xs font-semibold text-[#111111] bg-[#FAF8F2] p-2.5 rounded-lg border border-[#E8E5DE]">
                    <strong>Main concern:</strong> a joint that is worn across its whole surface.
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-[#FAF8F2]">
                  <Link to="/total-joint-replacement/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                    <span>Read about total joint replacement &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Card 4: Partial Knee Replacement */}
              <div className="p-6 bg-white border border-[#E8E5DE] rounded-2xl hover:border-[#BE8C1D] hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    Partial Knee Replacement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Only the damaged part of the knee is replaced, and the healthy parts are kept. It suits only some patients, whose arthritis is limited to one area of the knee. Most people with knee arthritis have damage in more than one area.
                  </p>
                  <p className="text-xs font-semibold text-[#111111] bg-[#FAF8F2] p-2.5 rounded-lg border border-[#E8E5DE]">
                    <strong>Main concern:</strong> arthritis in just one part of the knee.
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-[#FAF8F2]">
                  <Link to="/partial-knee-replacement/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                    <span>Read about partial knee replacement &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Card 5: Revision Joint Replacement */}
              <div className="p-6 bg-white border border-[#E8E5DE] rounded-2xl hover:border-[#BE8C1D] hover:shadow-md transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    Revision Joint Replacement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    A revision is a further operation to repair or replace parts of an artificial joint that has worn, loosened or become a problem. It is usually a more complex operation than the first replacement.
                  </p>
                  <p className="text-xs font-semibold text-[#111111] bg-[#FAF8F2] p-2.5 rounded-lg border border-[#E8E5DE]">
                    <strong>Main concern:</strong> pain or a problem with an earlier joint replacement.
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-[#FAF8F2]">
                  <Link to="/revision-joint-replacement/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                    <span>Read about revision joint replacement &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S05 — CAN JOINT PAIN BE TREATED WITHOUT SURGERY?
          ========================================================================= */}
      <section className="section-padding bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                CONSERVATIVE MODALITIES
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Can Joint Pain Be Treated Without Surgery?
              </h2>
              <p className="text-base text-[#475569] mt-2">
                Yes, often. Many people with joint pain feel better with care that does not involve an operation. The best choice depends on what is causing the pain. A doctor can help you decide after checking you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {[
                { title: "Suitable exercises", desc: "Gentle movement and muscle strengthening can ease pain and keep a joint working." },
                { title: "Physiotherapy", desc: "A physiotherapist teaches exercises that fit your problem." },
                { title: "Weight management", desc: "If you carry extra weight, losing some can take pressure off the knees and hips." },
                { title: "Pain-relief medicines", desc: "Some medicines can ease pain when your doctor says they are suitable for you." },
                { title: "Walking aids", desc: "A stick or a frame can take weight off a painful joint." },
                { title: "Other treatments", desc: "Your doctor may suggest other options after the check-up." }
              ].map((opt, idx) => (
                <div key={idx} className="p-4 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl space-y-1">
                  <strong className="text-sm font-bold text-[#111111] block">{opt.title}</strong>
                  <p className="text-xs text-[#475569] leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
              <strong>Medical Guidance:</strong> Please do not start or stop any medicine without asking a doctor. If these steps do not help enough, your doctor may talk about surgery.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S06 — HOW IS A JOINT PROBLEM CHECKED?
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                CLINICAL PATHWAY
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                How Is a Joint Problem Checked?
              </h2>
              <p className="text-base text-[#475569] mt-2">
                Here is how a joint problem is usually checked. Not every patient needs every step or every test.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { step: "1", title: "Discuss your symptoms", desc: "You tell the doctor where it hurts, when it started and what makes it better or worse." },
                { step: "2", title: "Review your medical history", desc: "The doctor asks about past illnesses, operations, allergies and the medicines you take." },
                { step: "3", title: "Examine the joint", desc: "The doctor looks at the joint, feels it and moves it gently. The doctor may also watch you walk." },
                { step: "4", title: "Review X-rays or other tests", desc: "An X-ray shows the bones and how much of the joint space is left. The doctor may ask for other tests only if they are needed." },
                { step: "5", title: "Discuss treatment options", desc: "The doctor explains what is wrong and the choices you have. These may include exercise, physiotherapy, medicine or surgery. You can ask questions and take your time to decide." }
              ].map((s, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E8E5DE] shadow-2xs">
                  <span className="w-8 h-8 rounded-lg bg-[#BE8C1D] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#111111] block mb-0.5">{s.title}</strong>
                    <p className="text-xs text-[#475569] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#475569]">
              Read more about the <Link to="/orthopaedic-consultation/" className="font-bold text-[#BE8C1D] hover:underline">orthopaedic consultation</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S07 — BENEFITS, RISKS & LIMITATIONS
          ========================================================================= */}
      <section className="section-padding bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                BALANCED INFORMATION
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Possible Benefits and Risks of Joint Replacement
              </h2>
              <p className="text-base text-[#475569] mt-2">
                Joint replacement is a major operation. It can help some people a lot, but it also has risks. Your doctor should explain both before you decide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Benefits */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>Possible benefits</span>
                </h3>
                <p className="text-xs text-[#475569]">For selected patients, joint replacement may:</p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#111111]">
                  <li className="flex items-center gap-2">&bull; Reduce joint pain</li>
                  <li className="flex items-center gap-2">&bull; Improve how well the joint moves</li>
                  <li className="flex items-center gap-2">&bull; Make walking and daily tasks easier</li>
                </ul>
                <p className="text-xs text-[#475569] pt-2 border-t border-emerald-200">
                  It cannot promise that all pain will go away.
                </p>
              </div>

              {/* Risks */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <h3 className="text-base font-bold text-amber-950 flex items-center gap-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  <AlertTriangle className="w-5 h-5 text-amber-700" />
                  <span>Possible risks</span>
                </h3>
                <p className="text-xs text-[#475569]">Most people do not have serious problems. Possible risks include:</p>
                <ul className="space-y-1.5 text-xs text-[#111111]">
                  <li><strong>Infection:</strong> germs can get into the wound or around the new joint</li>
                  <li><strong>Blood clots:</strong> a clot can form in a leg vein</li>
                  <li><strong>Bleeding:</strong> some bleeding is normal, heavy bleeding can need treatment</li>
                  <li><strong>Stiffness:</strong> the joint may stay stiff or not move fully</li>
                  <li><strong>Implant problems:</strong> the artificial joint can wear, loosen or come out of its socket</li>
                  <li><strong>Injury:</strong> to nearby nerves or blood vessels</li>
                  <li><strong>Anaesthetic risks:</strong> the anaesthetist explains these before surgery</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] text-xs text-[#475569] space-y-1">
              <strong className="text-[#111111] block">Limits to know about:</strong>
              <p>
                An artificial joint does not last forever. Some people need another operation later, such as a revision. Your doctor will explain your own risks before surgery, based on your health and the joint involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S08 — RECOVERY AFTER JOINT REPLACEMENT
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                REHABILITATION &amp; HEALING
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is Recovery Like After Joint Replacement?
              </h2>
              <p className="text-base text-[#475569] mt-2 leading-relaxed">
                Recovery is different for every person. It depends on your age, your health, the joint and the type of operation. It can take several months to recover fully. No one can promise when you will walk without help, return to work or drive.
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              {[
                "Moving early and doing your exercises helps strength and movement come back.",
                "Your care team may suggest physiotherapy.",
                "Follow-up visits let the doctor check your progress.",
                "Follow your surgical team's instructions on activity, wound care and medicines.",
                "Contact your doctor if you notice signs of a problem, such as a fever, a red or leaking wound, or a swollen, painful calf."
              ].map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E8E5DE]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111111]">{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#475569] pt-2">
              To learn more, visit <Link to="/surgery-preparation-recovery/" className="font-bold text-[#BE8C1D] hover:underline">Surgery Preparation &amp; Recovery</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S09 — ABOUT DR. MAZHAR RAFIQUE
          ========================================================================= */}
      <section className="section-padding bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border-2 border-[#E8E5DE] shadow-lg bg-white">
                  <img 
                    src="/images/doctor/dr-mazhar-consultation.jpg" 
                    alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in consultation" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block">
                  FELLOWSHIP TRAINED SPECIALIST
                </span>
                <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. His profile describes more than 10 years of experience in orthopaedic, trauma and sports injury care. He completed a fellowship in arthroplasty and joint reconstruction. Arthroplasty means joint replacement surgery. His clinical interests include knee replacement and hip replacement.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  He sees patients at BNI - Bashir NeuroSpine Institute on Jail Road, Shadman, Lahore.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-semibold text-[#111111]">
                  <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D]" />
                    <span>M.B.B.S</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D]" />
                    <span>F.C.P.S. (Orthopedics)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D]" />
                    <span>Certified ATLS®</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D]" />
                    <span>Fellowship Arthroplasty</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/about/" className="btn-secondary text-xs inline-flex items-center gap-2">
                    <span>Learn More About Dr. Mazhar Rafique</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S10 — EXPLORE RELATED ORTHOPAEDIC CARE
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                RELATED CLINICAL AREAS
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Explore Related Orthopaedic Care
              </h2>
              <p className="text-sm text-[#475569]">If you are still deciding, these pages may help:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              <div className="p-5 bg-white border border-[#E8E5DE] rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#111111] mb-1">Arthroscopic Surgery</h3>
                  <p className="text-xs text-[#475569]">Keyhole surgery uses a small camera to look inside a joint. It may help with some joint problems that are not yet ready for replacement.</p>
                </div>
                <Link to="/arthroscopic-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline pt-3 mt-2 border-t border-[#FAF8F2]">
                  Arthroscopic Surgery &rarr;
                </Link>
              </div>

              <div className="p-5 bg-white border border-[#E8E5DE] rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#111111] mb-1">Arthritis &amp; Bone Health</h3>
                  <p className="text-xs text-[#475569]">Learn what arthritis is, how doctors treat it, and how to keep your bones strong.</p>
                </div>
                <Link to="/arthritis-bone-health/" className="text-xs font-bold text-[#BE8C1D] hover:underline pt-3 mt-2 border-t border-[#FAF8F2]">
                  Arthritis &amp; Bone Health &rarr;
                </Link>
              </div>

              <div className="p-5 bg-white border border-[#E8E5DE] rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#111111] mb-1">Orthopaedic Consultation</h3>
                  <p className="text-xs text-[#475569]">Find out what happens when you see an orthopaedic surgeon about a painful joint.</p>
                </div>
                <Link to="/orthopaedic-consultation/" className="text-xs font-bold text-[#BE8C1D] hover:underline pt-3 mt-2 border-t border-[#FAF8F2]">
                  Orthopaedic Consultation &rarr;
                </Link>
              </div>

              <div className="p-5 bg-white border border-[#E8E5DE] rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#111111] mb-1">Patient Education</h3>
                  <p className="text-xs text-[#475569]">Read simple guides on bone and joint problems, surgery preparation and recovery.</p>
                </div>
                <Link to="/patient-education/" className="text-xs font-bold text-[#BE8C1D] hover:underline pt-3 mt-2 border-t border-[#FAF8F2]">
                  Patient Education &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S11 — CLINIC LOCATION & APPOINTMENTS
          ========================================================================= */}
      <section className="section-padding bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block">
                  PRACTICE LOCATION
                </span>
                <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Joint Replacement Consultation in Lahore
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique sees patients at BNI - Bashir NeuroSpine Institute on Jail Road in Shadman, Lahore. To ask about a consultation for joint pain, call the clinic or send a WhatsApp message. Tell the clinic your main problem. Clinic hours are not listed here, so please ask about appointment times when you contact the clinic. Bring any X-rays, scans and reports you already have. You can find more on the <Link to="/contact/" className="font-bold text-[#BE8C1D] hover:underline">contact page</Link>.
                </p>

                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] space-y-2 text-xs text-[#475569]">
                  <h3 className="text-sm font-bold text-[#111111] mb-1">Clinic details</h3>
                  <p><strong>Doctor:</strong> Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon</p>
                  <p><strong>Clinic:</strong> BNI - Bashir NeuroSpine Institute</p>
                  <p><strong>Address:</strong> 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan</p>
                  <p><strong>Call Appointment:</strong> {businessConfig.phone}</p>
                  <p><strong>WhatsApp Appointment:</strong> {businessConfig.whatsappDisplay}</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setAppointmentModalOpen(true)}
                    className="py-3 px-5 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Book Appointment</span>
                  </button>

                  <a 
                    href={businessConfig.callUrl}
                    className="py-3 px-4 rounded-xl font-bold border border-[#E8E5DE] bg-white text-[#111111] hover:bg-[#FAF8F2] transition-colors flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#BE8C1D]" />
                    <span>Call: {businessConfig.phone}</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden border-2 border-[#E8E5DE] shadow-md bg-white">
                  <img 
                    src="/images/doctor/bni-clinic-exterior.jpg" 
                    alt="BNI - Bashir NeuroSpine Institute on Jail Road, Lahore" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="p-3 bg-[#FAF8F2] text-xs text-[#475569] flex items-center justify-between">
                    <span>18 Jail Rd, Shadman 1, Lahore</span>
                    <a href={businessConfig.directionsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#BE8C1D] hover:underline">
                      View on Map &rarr;
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          B5 — FREQUENTLY ASKED QUESTIONS (10 APPROVED QUESTIONS)
          ========================================================================= */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">
                PATIENT QUESTIONS
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#475569]">
                Clear answers regarding joint replacement surgery, non-surgical options, and booking in Lahore.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border border-[#E8E5DE] rounded-xl overflow-hidden bg-white hover:border-[#BE8C1D]/60 transition-colors shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#111111] hover:text-[#936A12] transition-colors cursor-pointer"
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
          </div>
        </div>
      </section>

      {/* =========================================================================
          S12 — FINAL APPOINTMENT CTA
          ========================================================================= */}
      <section className="section-padding bg-gradient-to-r from-[#FAF8F2] via-white to-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CONSULTATION IN LAHORE</span>
            </div>

            <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Discuss Your Joint Pain With an Orthopaedic Surgeon
            </h2>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              If joint pain or stiffness is making daily life hard, a check-up can help you understand what is happening and what your options are. Surgery is only one of them. Call {businessConfig.phone} or send a WhatsApp message to {businessConfig.whatsappDisplay} to ask about a consultation.
            </p>

            <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-800 max-w-xl mx-auto flex items-center justify-center gap-2.5 shadow-2xs">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
              <span>For a serious injury or heavy bleeding, go to the nearest emergency department straight away.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => setAppointmentModalOpen(true)}
                className="py-3.5 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl text-sm sm:text-base cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Book Appointment</span>
              </button>

              <a 
                href={businessConfig.callUrl}
                className="py-3.5 px-5 rounded-xl font-bold text-[#111111] bg-white hover:bg-[#FAF8F2] border-1.5 border-[#BE8C1D] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#BE8C1D]" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
        defaultService="Joint Replacement Surgery"
      />

    </div>
  );
};
