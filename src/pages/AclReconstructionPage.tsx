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
  AlertTriangle, 
  Stethoscope, 
  Award, 
  HelpCircle, 
  Sparkles, 
  Eye, 
  UserCheck, 
  Check, 
  Layers, 
  FileText 
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const AclReconstructionPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is the ACL?",
      a: "The ACL, or anterior cruciate ligament, is a strong band inside the knee. It joins the thigh bone to the shin bone. It helps keep the knee steady, especially when you turn or twist."
    },
    {
      q: "What causes an ACL tear?",
      a: "Common causes are sudden stopping, fast changes of direction, twisting, awkward landings and direct blows to the knee. It often happens in sport, but a fall or slip can also cause it."
    },
    {
      q: "What are the symptoms of an ACL injury?",
      a: "People may feel a pop, have fast swelling and pain, feel the knee give way, and find it hard to walk or move the knee. These signs can also come from other knee injuries, so a doctor needs to examine the knee."
    },
    {
      q: "Can an ACL tear heal without surgery?",
      a: "A fully torn ACL does not usually join back together by itself. But some people manage well without surgery through rehabilitation and activity changes. Others keep having giving-way episodes. Your doctor can help you decide."
    },
    {
      q: "Does every ACL tear need reconstruction?",
      a: "No. Some people do well with physiotherapy and activity changes. Surgery may be considered when the knee keeps giving way, when other injuries are present, or when someone needs a steady knee for demanding activities. The choice is personal."
    },
    {
      q: "What is ACL reconstruction?",
      a: "It is an operation that replaces a torn ACL with a graft, which is a piece of tendon. The graft acts as a new ligament. Rehabilitation after surgery is an important part of the treatment."
    },
    {
      q: "What grafts are used for ACL reconstruction?",
      a: "Common choices are hamstring tendon, patellar tendon and quadriceps tendon grafts from your own body, and donor (allograft) tendon. Each has advantages and limits. Your surgeon will discuss which options suit you."
    },
    {
      q: "Is ACL reconstruction performed through keyhole surgery?",
      a: "It is usually done with arthroscopy, which uses small cuts and a thin camera. The surgeon will explain the approach planned for your knee."
    },
    {
      q: "What is the difference between ACL repair and reconstruction?",
      a: "Repair fixes your own ligament. Reconstruction replaces it with a graft. Reconstruction is more common for many complete tears. Repair is used only in selected cases."
    },
    {
      q: "Is ACL reconstruction a major operation?",
      a: "It is a significant operation that needs anaesthesia and a planned recovery. Because it is keyhole surgery, the cuts are small, but rehabilitation takes time and effort. Your surgeon will explain what to expect."
    },
    {
      q: "What are the possible risks?",
      a: "Possible risks include infection, bleeding, blood clots, stiffness, ongoing pain, graft failure, another injury, pain where the tendon was taken, nerve or blood vessel injury, anaesthesia risks, and the need for more surgery. Your surgeon will explain the risks that apply to you."
    },
    {
      q: "How long does ACL recovery take?",
      a: "Recovery varies from person to person. Many people need several months, and full recovery can take up to a year or longer. No one can promise an exact timeline."
    },
    {
      q: "Will I need crutches or a knee brace?",
      a: "Many people use crutches for some weeks after surgery. Some also wear a brace for a time. This depends on the operation and any other injuries. Your team will tell you what is right for you."
    },
    {
      q: "Is physiotherapy necessary?",
      a: "Yes, physiotherapy is a key part of care, with or without surgery. It helps restore movement, strength, balance and control, and it helps protect the graft after surgery."
    },
    {
      q: "When can I return to sports?",
      a: "It depends on your knee, your sport and how rehabilitation goes. Doctors look at stability, strength, movement quality, functional tests and your confidence, not only the time since surgery. Your surgeon and physiotherapist will advise you."
    },
    {
      q: "Can an ACL injury happen with a meniscus tear?",
      a: "Yes. ACL tears often happen along with meniscus, cartilage or other ligament injuries. These can change the treatment plan."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} or message on WhatsApp at ${businessConfig.phone}. The clinic is at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. Use WhatsApp at ${businessConfig.phone} to inquire about an appointment. Please do not use WhatsApp for emergencies.`
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans">
      {/* Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

      {/* B3 — HERO SECTION */}
      <section className="relative bg-[#FAF8F2] border-b border-[#E8E5DE] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
                <Activity className="w-3.5 h-3.5" />
                ACL INJURY & KNEE STABILITY CARE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                ACL Reconstruction in Lahore
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                The ACL is a strong band inside your knee that helps keep it steady when you turn, stop or land. When it tears, the knee may feel loose or give way. Some people manage well with physiotherapy, while others need ACL reconstruction. Call or WhatsApp to arrange an orthopaedic consultation with Dr. Mazhar Rafique in Lahore.
              </p>

              {/* DUAL CTAS */}
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-base shadow-sm hover:bg-[#a67a18] transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Book Appointment</span>
                </a>
                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-base transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E5DE]/80 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Anatomical Reconstruction</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Autograft Techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DE] shadow-md bg-white p-3">
                <img 
                  src="/images/doctor/dr-mazhar-surgery-knee.jpg" 
                  alt="Simple medical illustration of a knee joint showing the anterior cruciate ligament inside the knee"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E5DE] shadow-sm">
                  <p className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider mb-1">Restoring Knee Stability</p>
                  <p className="text-sm text-slate-700">Precision arthroscopic reconstruction for athletic and daily knee confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS THE ACL IN YOUR KNEE? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">01</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ACL ANATOMY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is the ACL in Your Knee?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed">
            <p>
              ACL stands for anterior cruciate ligament. That is a long name, so most people just say ACL.
            </p>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE] my-6">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Where is the ACL?</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                A ligament is a strong band of tissue that joins one bone to another bone. The ACL is deep inside your knee. It joins your thigh bone (femur) to your shin bone (tibia). It runs diagonally through the middle of the knee. Another ligament, the PCL, sits behind it. Together they cross like the letter X.
              </p>
              <h3 className="text-lg font-bold text-[#111111] mb-2">What does the ACL do?</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                The ACL stops your shin bone from sliding too far forward under your thigh bone. It also helps the knee stay steady when you twist or turn. You can think of it as a strong rope inside the knee that keeps the joint in line.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#111111] mb-2">Why does it matter?</h3>
            <p>
              You use your ACL in sport. You also use it every day. It helps when you change direction, step off a kerb, climb stairs or turn quickly. Your muscles, the meniscus (a cushion in the knee) and other ligaments all work with the ACL. When the ACL is hurt, the whole knee can feel different.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — WHAT HAPPENS WHEN THE ACL TEARS? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">02</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">TEAR SEVERITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens When the ACL Tears?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The ACL can be hurt in different ways. Doctors often describe the damage by how much of the ligament is injured:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Stretched Ligament</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The ligament is stretched but still in one piece. It may feel a little loose or sore, but stability remains mostly intact.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Partial Tear</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Some fibres are torn while others remain joined. Less common than complete tears; requires careful testing.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Complete Tear</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The ligament has completely split into two parts. A fully torn ACL does not usually join back together by itself.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Why Do Symptoms Differ?</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Not every ACL tear feels the same. Some knees feel very loose and give way during daily walking, while others feel steady walking but give way during sport. Damage to nearby structures (like the meniscus) also alters symptoms. Two people with identical MRI scans may need different treatment.
            </p>
          </div>
        </div>
      </section>

      {/* S03 — WHAT CAUSES AN ACL INJURY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">03</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">MECHANISMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes an ACL Injury?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            An ACL injury happens when the force on the ligament is more than the tissue can handle. Common causes include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Changing direction very fast (cutting or pivoting).",
              "Twisting the knee while the foot stays firmly planted.",
              "Landing awkwardly after a jump.",
              "Stopping suddenly while running at full speed.",
              "A direct knock to the knee (e.g. hard tackle or collision)."
            ].map((cause, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-[#FAF8F2] p-3.5 rounded-xl border border-[#E8E5DE]">
                <Activity className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800">{cause}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            Many ACL injuries happen without contact. Beyond athletes (football, cricket, kabaddi, basketball), everyday slips on wet floors or falls can also tear the ACL.
          </p>
        </div>
      </section>

      {/* S04 — COMMON SIGNS OF AN ACL INJURY */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">04</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SYMPTOM CHECKLIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of an ACL Injury
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            After an ACL injury, people may notice one or more of these classic signs:
          </p>

          <div className="space-y-2 mb-6">
            {[
              "A popping sound or feeling inside the knee at the moment of injury.",
              "Swelling that comes on rapidly, often within a few hours to a day.",
              "Knee pain, especially when attempting to put weight on the leg.",
              "A loose or unstable feeling, or the knee giving way under you.",
              "Trouble walking normally without limping.",
              "Difficulty fully bending or straightening the knee joint.",
              "Loss of confidence in returning to sports or dynamic movements."
            ].map((sym, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E8E5DE]">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800">{sym}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            These signs are not a self-diagnosis. Meniscus or cartilage injuries can feel similar. Read our <Link to="/patient-education/" className="text-[#BE8C1D] hover:underline font-semibold">patient education section</Link>.
          </p>
        </div>
      </section>

      {/* S05 — WHY DOES THE KNEE FEEL UNSTABLE AFTER AN ACL TEAR? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">05</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">INSTABILITY MECHANISM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Does the Knee Feel Unstable After an ACL Tear?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The ACL stops the shin bone from sliding forward and twisting excessively. If torn, the joint slides or shifts out of its normal alignment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">What Does "Giving Way" Mean?</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Giving way means the knee suddenly buckles or shifts under load. It occurs during pivoting, changing direction, or walking on uneven surfaces.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Why Does It Matter?</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Repeated giving way can lead to falls and cause secondary trauma to meniscal cartilage and articular surfaces. Preventing recurrent instability protects long-term joint health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — WHEN SHOULD YOU GET AN ACL INJURY CHECKED? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">06</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CARE GUIDELINES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Get an ACL Injury Checked?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">See an Orthopaedic Doctor If You Notice:</h3>
              <ul className="space-y-2 text-sm text-slate-700 mb-6">
                <li>• Swelling that appears quickly following an acute knee injury.</li>
                <li>• Inability to walk or put weight on the knee comfortably.</li>
                <li>• The knee giving way repeatedly.</li>
                <li>• Persistent pain or stiffness that does not settle with rest.</li>
                <li>• Suspicion that a knee ligament is torn.</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E8E5DE]">
                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
                <Link
                  to="/orthopaedic-consultation/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-xs sm:text-sm hover:bg-[#a67a18] transition-all"
                >
                  <span>Arrange an Orthopaedic Consultation</span>
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Get Urgent Medical Care If You Have Any of These:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• A major accident or heavy direct blow to the knee.</li>
                <li>• Total inability to bear any weight on the leg.</li>
                <li>• The knee or leg looks visibly deformed or out of shape.</li>
                <li>• The knee is completely locked and will not move.</li>
                <li>• The foot is cold, pale, blue, or has numbness and tingling.</li>
              </ul>
              <p className="text-xs text-slate-500 mt-4 border-t border-[#E8E5DE] pt-3">
                Go to the nearest emergency room immediately for these urgent signs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — HOW DOES A DOCTOR CHECK FOR AN ACL TEAR? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">07</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">DIAGNOSTIC WORKUP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check for an ACL Tear?
          </h2>

          <div className="space-y-3 mb-6">
            {[
              { title: "Your story", desc: "The doctor asks how the injury happened, what you felt, and your sport/work demands." },
              { title: "Physical examination", desc: "Checking swelling, tenderness, range of motion, and stability tests (e.g. Lachman test)." },
              { title: "X-rays", desc: "Checks for associated bone fractures or avulsions (cartilage and ligaments do not show on X-ray)." },
              { title: "MRI scan", desc: "Shows soft tissues, confirming ACL tears and inspecting menisci and cartilage." },
              { title: "Checking for other injuries", desc: "Assessing combined damage to collateral ligaments or joint cushioning." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
                <span className="w-7 h-7 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">{step.title}</h4>
                  <p className="text-xs text-slate-700 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S08 — CAN AN ACL TEAR DAMAGE OTHER PARTS OF THE KNEE? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">08</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">COMBINED INJURIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can an ACL Tear Damage Other Parts of the Knee?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6 font-medium">
            Yes. About half of ACL injuries involve damage to other parts of the knee. The same twisting force can injure nearby structures:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Meniscus injuries</h4>
              <p className="text-xs text-slate-700">Torn knee cushions. Read our dedicated guide on <Link to="/meniscus-repair/" className="text-[#BE8C1D] hover:underline font-semibold">meniscus repair</Link>.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Cartilage injuries</h4>
              <p className="text-xs text-slate-700">Articular surface damage. See our guide on <Link to="/cartilage-restoration/" className="text-[#BE8C1D] hover:underline font-semibold">cartilage restoration</Link>.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Side ligament sprains</h4>
              <p className="text-xs text-slate-700">Tearing of the medial (MCL) or lateral (LCL) collateral ligaments.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Bone bruising</h4>
              <p className="text-xs text-slate-700">Micro-trabecular bone impact bruising commonly seen on MRI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 & S10 — NON-SURGICAL CARE */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">09</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSERVATIVE CARE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can an ACL Injury Be Treated Without Surgery?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Yes, for some people. While a fully torn ACL does not usually heal back together on its own, strong thigh and hip muscles combined with activity modifications can provide adequate functional stability for lower-demand lifestyles.
          </p>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="text-lg font-bold text-[#111111] mb-3">Main Components of Non-Surgical Care:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div>• Structured, guided physiotherapy</div>
              <div>• Quadriceps and hamstring strengthening</div>
              <div>• Proprioception and balance training</div>
              <div>• Avoiding dynamic pivoting sports</div>
              <div>• Supportive bracing when appropriate</div>
              <div>• Regular clinical progress monitoring</div>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            For knees that continue giving way despite rehabilitation, reconstruction is considered. Visit our <Link to="/patient-education/" className="text-[#BE8C1D] hover:underline font-semibold">patient education pages</Link>.
          </p>
        </div>
      </section>

      {/* S11 — WHEN MIGHT ACL RECONSTRUCTION BE NEEDED? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">11</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SURGERY CANDIDACY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might ACL Reconstruction Be Needed?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            ACL reconstruction is a collaborative choice, not a universal rule. Key factors include:
          </p>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] space-y-3 mb-6">
            {[
              "Repeated knee giving way that impairs daily activities or job performance.",
              "High physical activity demands (running, jumping, heavy manual labor).",
              "Participation in pivoting or cutting sports (football, basketball, cricket, kabaddi).",
              "Combined injuries such as repairable meniscus tears requiring joint stability.",
              "Personal goals for return to dynamic high-level physical recreation.",
              "Persistent knee instability despite structured non-surgical rehabilitation."
            ].map((crit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{crit}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Surgeons often wait until acute swelling settles and full knee extension returns before performing surgery ("prehabilitation").
          </p>
        </div>
      </section>

      {/* S12 & S13 — GRAFT SELECTION (4-GRAFT TABLE) */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">13</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">GRAFT OPTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Which Grafts Can Be Used for ACL Reconstruction?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The graft replaces the torn ligament. It can come from your own body (autograft) or a donor (allograft). Each has distinct advantages and trade-offs:
          </p>

          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-[#111111]">
                    <th className="p-4 font-bold">Graft</th>
                    <th className="p-4 font-bold">Where It Comes From</th>
                    <th className="p-4 font-bold text-[#BE8C1D]">Possible Advantages</th>
                    <th className="p-4 font-bold">Possible Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700 text-xs sm:text-sm">
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Hamstring autograft</td>
                    <td className="p-4">Back of thigh</td>
                    <td className="p-4">Smaller incision; less anterior knee pain/stiffness.</td>
                    <td className="p-4">May stretch slightly; temporary hamstring weakness.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Patellar tendon autograft</td>
                    <td className="p-4">Below kneecap with bone blocks</td>
                    <td className="p-4">Very strong; bone-to-bone rapid healing; low failure rate.</td>
                    <td className="p-4">Anterior knee pain or kneeling discomfort.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Quadriceps autograft</td>
                    <td className="p-4">Above kneecap</td>
                    <td className="p-4">Robust graft volume; useful in primary and revision cases.</td>
                    <td className="p-4">Fixation techniques vary; surgeon experience required.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Allograft</td>
                    <td className="p-4">Donor tissue bank</td>
                    <td className="p-4">No donor site cut; less immediate post-op pain.</td>
                    <td className="p-4">Higher re-tear rate in young athletes; slower biological incorporation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Learn more about wider multi-ligament surgery on our <Link to="/ligament-reconstruction/" className="text-[#BE8C1D] hover:underline font-semibold">ligament reconstruction page</Link>.
          </p>
        </div>
      </section>

      {/* S14 — WHAT HAPPENS DURING ACL RECONSTRUCTION? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">14</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE STEPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During ACL Reconstruction?
          </h2>

          <div className="space-y-3 mb-6">
            {[
              { title: "Before surgery", desc: "Check-up of knee mobility, scans, and anaesthesia planning." },
              { title: "Anaesthesia", desc: "General or regional spinal anaesthesia so you feel zero discomfort." },
              { title: "Looking inside the knee", desc: "Arthroscopic camera through small cuts to inspect the ACL, meniscus and cartilage." },
              { title: "Preparing the graft", desc: "Harvesting and sizing the tendon autograft." },
              { title: "Rebuilding the ligament", desc: "Anatomically positioning the graft through bone tunnels where the original ACL sat." },
              { title: "Holding the graft in place", desc: "Securing the graft firmly with precision buttons or bio-absorbable screws." },
              { title: "Closing the cuts", desc: "Closing micro-incisions with sutures and sterile dressing." },
              { title: "Planning rehabilitation", desc: "Establishing initial crutch, brace, and motion guidelines." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <span className="w-7 h-7 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">{step.title}</h4>
                  <p className="text-xs text-slate-700 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Read about keyhole surgical visualization on our <Link to="/knee-arthroscopy/" className="text-[#BE8C1D] hover:underline font-semibold">knee arthroscopy page</Link>.
          </p>
        </div>
      </section>

      {/* S15 & S16 — BENEFITS AND RISKS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">16</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">BALANCED PERSPECTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Risks of ACL Reconstruction
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Benefits</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>A steady, reliable knee that stops giving way.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Protection for menisci and cartilage from secondary twists.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Support for returning to dynamic recreational sports.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Surgery does not promise an immediate return to sports and does not eliminate future arthritis risk.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Risks</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Infection or bleeding/haemarthrosis</li>
                <li>• Blood clots in the leg (DVT)</li>
                <li>• Joint stiffness or loss of terminal extension</li>
                <li>• Graft failure or re-rupture upon return to sport</li>
                <li>• Donor-site discomfort (kneeling pain with patellar grafts)</li>
                <li>• Need for revision surgery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S17 & S18 & S19 — RECOVERY, REHAB & RETURN TO SPORT */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">18</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">REHABILITATION & SPORT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Is Physiotherapy Important After ACL Reconstruction?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The operation provides the graft; physiotherapy teaches the knee how to work again safely.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Key Goals of Rehabilitation:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <div>• Restoring early full extension & flexion</div>
                <div>• Quadriceps muscle reactivation</div>
                <div>• Balance, proprioception & stability training</div>
                <div>• Protecting the graft during biological integration</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">When Can You Return to Sports?</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                Return to sport is based on objective clinical milestones, not arbitrary calendar dates.
              </p>
              <p className="text-xs text-slate-600">
                Criteria include: limb symmetry index &gt;90% on strength testing, negative pivot shift, passing hop tests, and psychological confidence.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            For surgical preparation tips, view our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] hover:underline font-semibold">surgery preparation and recovery guide</Link>.
          </p>
        </div>
      </section>

      {/* S20 — ACL RECONSTRUCTION VS ACL REPAIR */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">20</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            ACL Reconstruction vs ACL Repair
          </h2>

          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-[#111111]">
                    <th className="p-4 font-bold">Question</th>
                    <th className="p-4 font-bold text-[#BE8C1D]">ACL Reconstruction</th>
                    <th className="p-4 font-bold">ACL Repair</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">What is done?</td>
                    <td className="p-4">Torn ligament is replaced with a tendon graft</td>
                    <td className="p-4">Torn ligament is fixed or re-attached</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Is it a graft?</td>
                    <td className="p-4">Yes (autograft or allograft)</td>
                    <td className="p-4">Usually no</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">How often is it used?</td>
                    <td className="p-4">Standard of care for most complete tears</td>
                    <td className="p-4">Selected proximal avulsions/acute tears only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">What does it depend on?</td>
                    <td className="p-4">Joint looseness, activity goals, concurrent tears</td>
                    <td className="p-4">Tear location, tissue quality, and how recent the injury is</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Is rehabilitation needed?</td>
                    <td className="p-4">Yes, in a full structured programme</td>
                    <td className="p-4">Yes, in a full structured programme</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">21</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ORTHOPAEDIC SPECIALIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Consultant Orthopaedic Surgeon in Lahore
          </h2>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E5DE] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <img 
                  src="/images/doctor/dr-mazhar-headshot-portrait.jpg" 
                  alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore"
                  className="w-full rounded-xl object-cover shadow-sm border border-[#E8E5DE]"
                />
              </div>
              <div className="md:col-span-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Dr. Mazhar Rafique
                </h3>
                <p className="text-sm font-semibold text-[#BE8C1D] mb-4">
                  M.B.B.S., F.C.P.S. (Orthopaedic Surgery), Certified ATLS®, Fellowship in Arthroplasty and Joint Reconstruction
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Dr. Mazhar Rafique has more than 10 years of experience in orthopaedic, trauma and sports injury care. His clinical interests include ACL reconstruction, knee arthroscopy and sports injuries. He sees patients at BNI - Bashir NeuroSpine Institute, Shadman, Lahore.
                </p>
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Learn More About Dr. Mazhar Rafique</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S22 — EXPLORE RELATED KNEE AND SPORTS INJURY TREATMENTS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">22</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RELATED SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Knee and Sports Injury Treatments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Sports Injury & Ligament Surgery",
                desc: "An overview of ligament and sports injury care.",
                link: "/sports-injury-treatment/"
              },
              {
                title: "Ligament Reconstruction",
                desc: "How other knee ligaments are rebuilt, beyond the ACL.",
                link: "/ligament-reconstruction/"
              },
              {
                title: "Knee Arthroscopy",
                desc: "Keyhole surgery to look inside and treat knee pathology.",
                link: "/knee-arthroscopy/"
              },
              {
                title: "Meniscus Repair",
                desc: "Treatment for the knee cushion when it tears.",
                link: "/meniscus-repair/"
              },
              {
                title: "Cartilage Restoration",
                desc: "Options for damaged cartilage on the joint surface.",
                link: "/cartilage-restoration/"
              },
              {
                title: "Sports Injury Treatment",
                desc: "Care for common sports injuries in Lahore.",
                link: "/sports-injury-treatment-lahore/"
              },
              {
                title: "Sports Medicine Consultation",
                desc: "Assessment for athletes with training concerns.",
                link: "/sports-medicine-consultation/"
              },
              {
                title: "Orthopaedic Consultation",
                desc: "General bone, joint and muscle assessment.",
                link: "/orthopaedic-consultation/"
              }
            ].map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="group p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">{card.desc}</p>
                </div>
                <span className="text-xs font-semibold text-[#BE8C1D] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Read Guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S23 — GET YOUR ACL INJURY CHECKED IN LAHORE */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">23</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">APPOINTMENT BOOKING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your ACL Injury Checked in Lahore
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            If your knee feels unstable, swells after an injury, or you think you may have torn your ACL, you can arrange an orthopaedic assessment. You do not have to decide on surgery to book a visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E5DE]">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#BE8C1D]" />
                Clinic Location
              </h3>
              <p className="font-semibold text-slate-800">Dr. Mazhar Rafique</p>
              <p className="text-slate-700 text-sm mt-1">{businessConfig.clinicName}</p>
              <p className="text-slate-600 text-sm mt-1">{businessConfig.fullAddress}</p>
              <p className="text-xs text-slate-500 mt-4">
                Visit our <Link to="/contact/" className="text-[#BE8C1D] hover:underline font-semibold">contact page</Link> for location assistance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111] mb-1">
                Book Your Knee Assessment
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reach out by WhatsApp or phone call to reserve an appointment slot.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm shadow-sm hover:bg-[#a67a18] transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Book Appointment (WhatsApp)</span>
                </a>
                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — FAQS SECTION */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              PATIENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#111111] hover:text-[#BE8C1D] transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-[#E8E5DE]/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL APPOINTMENT CTA */}
      <section className="py-16 bg-[#FAF8F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your ACL Injury Checked
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Do not let knee instability limit your active life. An orthopaedic examination helps you understand your tear, discuss graft options, and choose the right treatment path with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={businessConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-base shadow-sm hover:bg-[#a67a18] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Book Appointment</span>
            </a>
            <a
              href={businessConfig.callUrl}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-base transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AclReconstructionPage;
