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
  Eye,
  Layers,
  FileText,
  UserCheck
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const MeniscusRepairPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is the meniscus?",
      a: "The meniscus is a C-shaped cushion inside the knee. Each knee has two: an inner (medial) one and an outer (lateral) one. They absorb shock, share weight and help the knee move smoothly."
    },
    {
      q: "What causes a meniscus tear?",
      a: "Tears can come from a twisting injury, a sports injury, a fall or a sudden change of direction. In older adults, the meniscus gets weaker, so even a small twist can cause a tear. Some tears have no clear cause."
    },
    {
      q: "What are the symptoms of a torn meniscus?",
      a: "Common signs are knee pain, swelling, clicking or catching, locking, trouble bending or straightening the knee, and pain when twisting. Other knee problems can look similar, so a doctor needs to check."
    },
    {
      q: "Can a meniscus tear heal without surgery?",
      a: "Some can. Tears near the outer edge, where blood supply is better, may heal more easily. Many degenerative tears settle with physiotherapy and activity changes. Not every tear heals fully without surgery. A doctor can advise you."
    },
    {
      q: "Does every meniscus tear need an operation?",
      a: "No. Many tears are treated without surgery. Surgery is usually discussed if symptoms stay strong, the knee locks, or other treatment has not helped enough."
    },
    {
      q: "What is arthroscopic meniscus repair?",
      a: "It is keyhole surgery to stitch a torn meniscus. The surgeon uses small cuts and a tiny camera to see inside the knee and repair suitable tears."
    },
    {
      q: "What is the difference between meniscus repair and meniscus removal?",
      a: "Repair stitches the tear so the tissue can heal. Partial meniscectomy trims away only the damaged part when repair is not suitable. Repair aims to keep more tissue, but it is not always possible."
    },
    {
      q: "Can every meniscus tear be repaired?",
      a: "No. Whether a tear can be repaired depends on its place, pattern, tissue quality, blood supply, other injuries and your needs."
    },
    {
      q: "Is meniscus repair a major operation?",
      a: "It is usually done with keyhole surgery and small cuts. It is still an operation with anaesthesia and risks. The recovery is also important. Your surgeon will explain how it applies to you."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, bleeding, blood clots, nerve or blood vessel injury, stiffness, ongoing pain, the repair not healing, re-tear and further surgery. Your surgeon will talk about them before you decide."
    },
    {
      q: "How long does recovery take?",
      a: "It varies. It depends on the tear, the type of repair and your health. Recovery after repair is often longer than after trimming the meniscus. Your surgeon will give a plan for your knee."
    },
    {
      q: "Will I need crutches or a knee brace?",
      a: "Some patients do, for a period. It depends on the repair. Your surgeon will tell you if you need them and how much weight you can put on the leg."
    },
    {
      q: "When can I return to sports?",
      a: "There is no set date for everyone. Your surgeon decides based on healing, strength and how the knee works. Returning too early can harm the repair."
    },
    {
      q: "Can a meniscus tear happen with an ACL injury?",
      a: "Yes. The two injuries often happen together after a twisting injury. Treatment plans look at both."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call the clinic on ${businessConfig.phone} or send a message on WhatsApp at ${businessConfig.phone} to arrange a consultation.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can use WhatsApp at ${businessConfig.phone} to ask about an appointment. Please do not use it for emergencies. For urgent knee problems, go to a hospital emergency department.`
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

      {/* B3 — HERO SECTION */}
      <section className="relative bg-white border-b border-[#E8E5DE] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
                <Activity className="w-3.5 h-3.5" />
                MENISCUS TEAR & KNEE CARE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Meniscus Repair in Lahore
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                The meniscus is a soft cushion inside your knee. When it tears, you may feel pain, swelling, catching or locking. Some tears heal with simple care and exercise. Some may be stitched, and some need no surgery at all. Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore, can check your knee and explain your options. Call or message the clinic to arrange a consultation.
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
                  <span>Cartilage Preservation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Keyhole Repair</span>
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
                  alt="Simple illustration of a knee joint showing the C-shaped medial and lateral meniscus cushions between the thigh bone and shin bone."
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E5DE] shadow-sm">
                  <p className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider mb-1">Preserving Natural Shock Absorption</p>
                  <p className="text-sm text-slate-700">Expert arthroscopic suturing and joint-sparing meniscus care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS THE MENISCUS IN YOUR KNEE? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">01</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">KNEE ANATOMY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is the Meniscus in Your Knee?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed">
            <p>
              Your knee is a joint. It joins your thigh bone to your shin bone. Between these two bones sit two soft, rubbery pads. Each pad is called a meniscus. Together, they are called the menisci.
            </p>
            <p>
              Each meniscus is shaped like the letter C. One sits on the inner side of the knee. This is the <strong>medial meniscus</strong>. The other sits on the outer side. This is the <strong>lateral meniscus</strong>.
            </p>

            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] my-6">
              <h3 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#BE8C1D]" />
                What Does the Meniscus Do?
              </h3>
              <p className="text-slate-700 mb-3">
                The meniscus works like a cushion. When you walk, run or jump, it takes some of the shock. It also spreads your body weight across the joint. This protects the smooth surface on the ends of your bones. The meniscus also helps your knee move smoothly and stay steady.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E8E5DE] text-sm font-medium text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Shock absorption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Weight distribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Joint stability</span>
                </div>
              </div>
            </div>

            <p>
              Many people call the meniscus “knee cartilage”. That is fine. But your knee has other cartilage too. The meniscus is the cushion pad between the bones.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — WHAT IS A MENISCUS TEAR? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">02</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">UNDERSTANDING TEARS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Meniscus Tear?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A meniscus tear means the cushion has a crack or split. The tear can be small or large. It can be in one spot or in several places.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Traumatic Tears</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Traumatic tears happen after an injury. A twist of the knee during sport is a common cause. These tears are more common in younger and active people.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Degenerative Tears</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Degenerative tears happen slowly. As we grow older, the meniscus becomes weaker and more worn. A small twist, such as standing up from a chair, may then cause a tear.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Why Do Symptoms Differ?</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Two people can have a tear and feel very different things. One person may have strong pain and a catching knee. Another may have only mild pain. The size, shape and place of the tear all matter.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              A meniscus tear is common. It is not usually an emergency. Many tears settle with time and care. Some need a doctor’s help. A check-up tells you which group you are in.
            </p>
          </div>
        </div>
      </section>

      {/* S03 — COMMON TYPES OF MENISCUS TEARS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">03</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">TEAR PATTERNS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Types of Meniscus Tears
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Doctors name tears by their shape and place. The type of tear helps guide treatment. Here are the common types in simple words:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { type: "Longitudinal tear", desc: "A split that runs along the length of the meniscus, like a crack along a curved road." },
              { type: "Radial tear", desc: "A split that runs across the meniscus, from the inner edge toward the outer edge, like a slice in a pie." },
              { type: "Bucket-handle tear", desc: "A large longitudinal tear where a piece flips into the middle of the joint. It can make the knee lock." },
              { type: "Horizontal tear", desc: "A split that cuts the meniscus into a top layer and a bottom layer, like opening a sandwich. Often linked with wear." },
              { type: "Flap tear", desc: "A piece of the meniscus becomes loose, like a flap. It can catch in the joint." },
              { type: "Complex tear", desc: "A tear with more than one pattern. It is common in worn menisci." },
              { type: "Root tear", desc: "A tear at the 'root', where the meniscus anchors to the shin bone. Affects weight sharing significantly." }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">{t.type}: </span>
                  <span className="text-sm text-slate-700">{t.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Tear type is only one piece of the puzzle. Your doctor also looks at where the tear sits, your symptoms, your age and your daily activities.
          </p>
        </div>
      </section>

      {/* S04 — WHAT CAUSES A MENISCUS TEAR? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">04</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CAUSES & TRIGGERS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes a Meniscus Tear?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Injury-Related Causes</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                A sudden twisting force on a bent knee is the classic cause. It often happens in sports like football, cricket, basketball or running.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>• Quick changes of direction or pivoting</li>
                <li>• Awkward landing from a jump</li>
                <li>• Heavy tackle or direct impact to the knee</li>
                <li>• Deep kneeling or lifting heavy objects awkwardly</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Age-Related Causes</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                As we age, cartilage naturally loses moisture and flexibility. Normal daily wear can thin the tissue over decades.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                In older knees, a tear may occur during simple everyday tasks like squatting to pick something up or stepping off a curb.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Learn more about managing active and athletic injuries in our guide on <Link to="/sports-injury-treatment-lahore/" className="text-[#BE8C1D] hover:underline font-semibold">sports injury treatment in Lahore</Link>.
          </p>
        </div>
      </section>

      {/* S05 — COMMON SIGNS OF A TORN MENISCUS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">05</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SYMPTOM CHECKLIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of a Torn Meniscus
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A torn meniscus can cause different signs. You may notice one or several of these:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Knee pain, often on the inner or outer side of the knee",
              "Swelling or stiffness building up over a day or two",
              "Clicking or catching when you move the knee",
              "Locking, when the knee gets stuck and cannot bend/straighten fully",
              "Trouble bending or straightening the knee all the way",
              "Pain when you twist, turn, or squat",
              "The knee feels like it gives way, or it is hard to walk normally"
            ].map((sym, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-[#FAF8F2] p-3.5 rounded-xl border border-[#E8E5DE]">
                <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-800">{sym}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            These signs can also come from other knee problems, such as ligament injury or arthritis. Only a doctor can tell what is causing them.
          </p>
        </div>
      </section>

      {/* S06 — WHEN SHOULD YOU GET YOUR KNEE CHECKED? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">06</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CARE GUIDANCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Get Your Knee Checked?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-3">Book a Consultation If:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Knee pain that does not settle over time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Swelling that persists after an injury.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Trouble walking or climbing stairs comfortably.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Catching or clicking that keeps recurring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>A knee that will not fully straighten.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Get Urgent Medical Help If:
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                  <span>Your knee is truly locked and will not move.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                  <span>You had a major injury or heavy high-impact fall.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                  <span>You cannot put any weight on your leg.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                  <span>Your knee is hot, red, swollen and you have a fever.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4 border-t border-[#E8E5DE] pt-2">
                If you experience these urgent signs, visit an emergency facility immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — HOW DOES A DOCTOR CHECK FOR A MENISCUS TEAR? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">07</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">DIAGNOSTIC PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check for a Meniscus Tear?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg font-bold text-[#111111] mb-2">What the Doctor Does</h3>
              {[
                "You describe your symptoms and pain pattern.",
                "You explain how the knee was hurt, if you recall.",
                "The doctor looks at and feels around your knee.",
                "The doctor moves your knee to test bending, straightening and pain.",
                "Gentle clinical stress tests (e.g. McMurray test) on the meniscus.",
                "Recommending scans if useful.",
                "Discussing treatment options and next steps together."
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#FAF8F2] p-3 rounded-lg border border-[#E8E5DE] text-sm text-slate-800">
                  <span className="w-6 h-6 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="md:col-span-5 bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#111111] mb-3">What About X-ray and MRI?</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  <strong>X-rays</strong> show bones, not cartilage or menisci. They help rule out bone fractures or joint arthritis.
                </p>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  <strong>MRI scans</strong> show soft tissues including the meniscus in detail. It is ordered if surgery is considered or diagnosis is unclear.
                </p>
              </div>
              <p className="text-xs text-slate-500 border-t border-[#E8E5DE] pt-3">
                An MRI result alone does not decide whether you need an operation. Your doctor matches scans with your physical exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S08 — CAN A TORN MENISCUS IMPROVE WITHOUT SURGERY? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">08</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">NATURAL HEALING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can a Torn Meniscus Improve Without Surgery?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Yes, some torn menisci improve without surgery. Health services such as the NHS note that a meniscus tear can get better on its own, although it can take time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Blood Supply Matters</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Blood carries the building materials that help tissue heal. The outer edge of the meniscus has a blood supply (the red zone). The inner part has very little (the white zone). Tears near the outer edge have a better chance to heal naturally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Symptoms and Function Matter</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A tear may be seen on a scan, but the key question is how your knee feels and works. If pain settles and the knee does not lock, many people do well with non-surgical care. Degenerative tears are often treated this way first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 — NON-SURGICAL TREATMENT FOR MENISCUS TEARS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">09</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSERVATIVE THERAPIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Non-Surgical Treatment for Meniscus Tears
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Many people start with non-surgical care. The goal is to calm the pain and help the knee work well again.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Activity changes</h3>
              <p className="text-xs text-slate-700">Take a break from sports or movements that hurt, such as deep squats and twisting.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Physiotherapy</h3>
              <p className="text-xs text-slate-700">A physiotherapist guides gentle movements and exercises to keep the knee mobile.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Strengthening exercises</h3>
              <p className="text-xs text-slate-700">Strong thigh and hip muscles help support and offload stress from the knee joint.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Pain relief & rest</h3>
              <p className="text-xs text-slate-700">Ice wrapped in cloth, leg elevation, and safe medical pain relief as advised by a doctor.</p>
            </div>
          </div>

          <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#BE8C1D]" />
              Important Safety Note
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Do not force exercises on a knee that is locked or acutely injured. Get it checked first. Injections may have limited roles and must be clinically evaluated. Learn more in our <Link to="/patient-education/" className="text-[#BE8C1D] hover:underline font-semibold">patient education section</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S10 — WHEN MIGHT A MENISCUS TEAR NEED REPAIR? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">10</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SURGICAL SUITABILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might a Meniscus Tear Need Repair?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Surgery is not the first step for most people. It may be discussed when symptoms stay strong, when the knee locks, or when other treatment has not helped enough.
          </p>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="text-xl font-bold text-[#111111] mb-4">What the Surgeon Looks At</h3>
            <div className="space-y-3">
              {[
                { title: "Where the tear is", desc: "Tears near the outer, blood-rich edge have a better chance to heal." },
                { title: "What the tear looks like", desc: "Some patterns (like longitudinal tears) can be repaired more easily than complex tears." },
                { title: "How healthy the tissue is", desc: "Worn, thin tissue holds stitches less securely." },
                { title: "Blood supply", desc: "Tissue needs adequate blood flow to heal after suturing." },
                { title: "Your age and activity", desc: "Younger and active people may gain significantly from saving meniscus cushioning." },
                { title: "Other injuries", desc: "A torn ACL or ligament injury changes surgical planning." },
                { title: "Your symptoms and daily needs", desc: "How much the knee limits your mobility and work matters most." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111]">{item.title}: </span>
                    <span className="text-sm text-slate-700">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Learn more about initial specialist evaluations at an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] hover:underline font-semibold">orthopaedic consultation</Link>.
          </p>
        </div>
      </section>

      {/* S11 — MENISCUS REPAIR VS MENISCUS REMOVAL */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">11</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURAL COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Meniscus Repair vs Meniscus Removal
          </h2>

          <div className="space-y-4 mb-6">
            <p className="text-slate-700 leading-relaxed">
              <strong>Meniscus repair:</strong> The surgeon stitches the torn pieces together so your own meniscus can heal and continue protecting the joint.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Partial meniscectomy:</strong> The surgeon trims away only the damaged, torn part while leaving healthy tissue intact, usually when repair is not technically possible.
            </p>
            <p className="text-sm text-slate-600">
              Why does saving the meniscus matter? Taking away cushion tissue alters weight distribution and can accelerate cartilage wear. When feasible, saving healthy meniscus tissue is preferred.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-[#111111]">
                    <th className="p-4 font-bold">Topic</th>
                    <th className="p-4 font-bold text-[#BE8C1D]">Meniscus Repair</th>
                    <th className="p-4 font-bold">Partial Meniscectomy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Main purpose</td>
                    <td className="p-4">Stitch the tear so it can heal</td>
                    <td className="p-4">Trim away the torn, damaged part</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Tissue preservation</td>
                    <td className="p-4">Aims to keep the torn meniscus tissue</td>
                    <td className="p-4">Keeps healthy meniscus, removes the torn part</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Suitable situations</td>
                    <td className="p-4">Tears with healing potential (vascular edge, good tissue)</td>
                    <td className="p-4">Tears that cannot be repaired or are unlikely to heal</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Recovery considerations</td>
                    <td className="p-4">Longer, careful recovery to protect healing stitches</td>
                    <td className="p-4">Usually a quicker return to normal activity</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Limitations</td>
                    <td className="p-4">The repair may not heal; not every tear can be repaired</td>
                    <td className="p-4">Removing tissue may increase future joint wear</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S12 — WHAT HAPPENS DURING MENISCUS REPAIR SURGERY? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">12</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE OVERVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During Meniscus Repair Surgery?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Meniscus repair is usually done by arthroscopy. This is keyhole surgery. It uses small cuts and a tiny camera. Here is a simple overview:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { num: "01", title: "Check-up before surgery", desc: "The team reviews your health, medicines and scans." },
              { num: "02", title: "Anaesthesia", desc: "You receive anaesthesia so you feel no pain during the procedure." },
              { num: "03", title: "Small cuts", desc: "The surgeon makes a few small incisions around the knee joint." },
              { num: "04", title: "Camera look", desc: "A small camera shows the inside of the knee on a high-definition screen." },
              { num: "05", title: "Checking the tear", desc: "The surgeon checks the meniscus and the rest of the joint surfaces." },
              { num: "06", title: "Repairing the tear", desc: "If suitable, the surgeon stitches the tear using precise suturing devices." },
              { num: "07", title: "Closing the cuts", desc: "The small wounds are closed with sutures or tapes and dressed." },
              { num: "08", title: "Planning rehabilitation", desc: "You are given instructions on brace use, crutches, and exercises." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <span className="text-sm font-bold text-[#BE8C1D]">{step.num}</span>
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">{step.title}</h4>
                  <p className="text-xs text-slate-700 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            For more on knee keyhole procedures, read about <Link to="/knee-arthroscopy/" className="text-[#BE8C1D] hover:underline font-semibold">knee arthroscopy</Link> and <Link to="/arthroscopic-surgery/" className="text-[#BE8C1D] hover:underline font-semibold">arthroscopic surgery</Link>.
          </p>
        </div>
      </section>

      {/* S13 — CAN A MENISCUS TEAR HAPPEN WITH AN ACL INJURY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">13</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">COMBINED INJURIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can a Meniscus Tear Happen With an ACL Injury?
          </h2>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
            <p className="text-slate-700 leading-relaxed mb-3">
              Yes. A meniscus tear often happens together with an ACL tear. The ACL is a strong band inside the knee that keeps it steady. A twisting injury can damage both at the same time.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              This matters because a stable knee protects the meniscus. If the ACL is torn and the knee keeps giving way, a repaired meniscus may be put under stress again. So your surgeon looks at both injuries when planning treatment.
            </p>
            <p className="text-sm text-slate-700">
              To learn about ligament surgery, read our page on <Link to="/acl-reconstruction/" className="text-[#BE8C1D] hover:underline font-semibold">ACL reconstruction in Lahore</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S14 — BENEFITS AND RISKS OF MENISCUS REPAIR */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">14</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">BALANCED ASSESSMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Risks of Meniscus Repair
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Benefits</h3>
              <p className="text-xs text-slate-600 mb-3">For a suitable tear, repair aims to:</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Keep your own meniscus tissue intact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Help your knee maintain natural cushioning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Ease symptoms caused by painful tears.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Risks</h3>
              <p className="text-xs text-slate-600 mb-3">Risks are evaluated thoroughly and include:</p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Infection or bleeding/bruising in the knee</li>
                <li>• Blood clots in the leg</li>
                <li>• Injury to nearby nerves or vessels</li>
                <li>• Knee stiffness or ongoing pain</li>
                <li>• The repair failing to heal fully</li>
                <li>• Re-tear requiring further intervention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S15 — RECOVERY AFTER MENISCUS REPAIR */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">15</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RECOVERY PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Meniscus Repair
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Recovery after meniscus repair is different for each person. It depends on the tear, the type of repair and your health. It is often slower than recovery after trimming the meniscus, because the stitches need time to heal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-3">Early Recovery</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• <strong>Pain & swelling:</strong> Managed with ice and medication.</li>
                <li>• <strong>Wound care:</strong> Keep incisions clean and dry.</li>
                <li>• <strong>Brace & crutches:</strong> Many patients protect the knee with a brace and crutches for several weeks.</li>
                <li>• <strong>Weight-bearing limits:</strong> Follow exact instructions on weight restrictions.</li>
              </ul>
            </div>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-3">Later Recovery</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• <strong>Physiotherapy:</strong> Progressive exercises to restore motion and strength.</li>
                <li>• <strong>Follow-up visits:</strong> Regular clinical checks to track healing.</li>
                <li>• <strong>Gradual activity:</strong> Returning to walking, work and sport in staged steps.</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            For broader surgery prep guidance, see our guide on <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] hover:underline font-semibold">surgery preparation and recovery</Link>.
          </p>
        </div>
      </section>

      {/* S16 — WHY IS REHABILITATION IMPORTANT? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">16</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">REHABILITATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Is Rehabilitation Important After Meniscus Repair?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Rehabilitation is a big part of success after meniscus repair. The stitches need time and protection. Exercises that are too early or too hard can harm the repair. Exercises that are too late can leave the knee stiff and weak.
          </p>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] space-y-3">
            {[
              "Protecting the repair while it heals.",
              "Gradual movement to keep the knee from becoming stiff.",
              "Muscle strengthening for the thigh, hip and calf.",
              "Balance and control training to help the knee feel steady.",
              "Following your surgeon’s plan and your physiotherapist’s advice.",
              "Avoiding a quick return to sport before the knee is ready."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S17 — WHEN CAN YOU RETURN TO SPORTS? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">17</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RETURN TO SPORT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Can You Return to Sports After Meniscus Repair?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Everyone asks this question. The honest answer is: it depends. No fixed date fits every person. Healing takes time, and different activities place different loads on the knee.
          </p>

          <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="font-bold text-[#111111] text-sm mb-3">Your surgeon decides readiness by checking:</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li>• How well the repair is healing.</li>
              <li>• How strong your leg muscles are.</li>
              <li>• How steady and pain-free your knee feels.</li>
              <li>• How well the knee works in functional movement tests.</li>
            </ul>
          </div>

          <p className="text-xs text-slate-500">
            Read about care for athletes in <Link to="/sports-injury-treatment-lahore/" className="text-[#BE8C1D] hover:underline font-semibold">sports injury treatment</Link>.
          </p>
        </div>
      </section>

      {/* S18 — HOW CAN YOU PREPARE FOR MENISCUS REPAIR? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">18</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PREPARATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Prepare for Meniscus Repair?
          </h2>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Tell the team about all medicines, vitamins and supplements. Do not stop prescribed medicines without doctor advice.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Share your full medical history and allergies.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Follow fasting rules (food and drink limits) before surgery.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Arrange for someone to take you home after the procedure.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Plan help at home for the first few days (meals, moving around).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Ask about crutches, brace use and write down your questions beforehand.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* S19 — CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">19</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ORTHOPAEDIC SPECIALIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Consultant Orthopaedic Surgeon in Lahore
          </h2>

          <div className="bg-[#FAF8F2] p-6 sm:p-8 rounded-2xl border border-[#E8E5DE]">
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
                  MBBS, FCPS (Orthopaedic Surgery) — Consultant Orthopaedic Surgeon
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. He has more than 10 years of experience. His clinical interests include knee arthroscopy, meniscus repair and sports injuries. He sees patients at BNI - Bashir NeuroSpine Institute in Shadman, Lahore.
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

      {/* S20 — WHAT TO EXPECT DURING YOUR KNEE CONSULTATION */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">20</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSULTATION JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What to Expect During Your Knee Consultation
          </h2>

          <div className="space-y-3 mb-6">
            {[
              "You talk: describe your knee pain and symptoms.",
              "History: explain how the problem began and prior treatments tried.",
              "Examination: the doctor checks your knee and how it moves.",
              "Tests if needed: the doctor may suggest an X-ray or MRI.",
              "Options: discuss non-surgical and surgical options with benefits and risks.",
              "Next steps: agree on a plan that suits you."
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <span className="w-7 h-7 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base text-slate-800">{step}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Nobody pressures you into surgery. See details on arranging an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] hover:underline font-semibold">orthopaedic consultation</Link>.
          </p>
        </div>
      </section>

      {/* S21 — EXPLORE RELATED KNEE TREATMENTS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">21</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RELATED SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Knee Treatments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Arthroscopic Surgery",
                desc: "Learn how keyhole surgery treats many joint problems.",
                link: "/arthroscopic-surgery/"
              },
              {
                title: "Knee Arthroscopy",
                desc: "See how a small camera helps check and treat problems inside the knee.",
                link: "/knee-arthroscopy/"
              },
              {
                title: "ACL Reconstruction",
                desc: "Read about treatment for a torn ACL, which often happens with a meniscus tear.",
                link: "/acl-reconstruction/"
              },
              {
                title: "Ligament Reconstruction",
                desc: "Find out how other knee ligament injuries are treated.",
                link: "/ligament-reconstruction/"
              },
              {
                title: "Sports Injury Treatment",
                desc: "Get care for injuries from football, cricket and other sports.",
                link: "/sports-injury-treatment-lahore/"
              },
              {
                title: "Cartilage Restoration",
                desc: "Learn about treatment for damage to the smooth joint surface.",
                link: "/cartilage-restoration/"
              },
              {
                title: "Orthopaedic Consultation",
                desc: "See how a first visit for bone and joint problems works.",
                link: "/orthopaedic-consultation/"
              }
            ].map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="group p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">{card.desc}</p>
                </div>
                <span className="text-xs font-semibold text-[#BE8C1D] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S22 — MENISCUS TEAR CONSULTATION IN LAHORE */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">22</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">APPOINTMENT BOOKING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Meniscus Tear Consultation in Lahore
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you have knee pain or think you may have a meniscus tear, you can contact the clinic to arrange a consultation with Dr. Mazhar Rafique.
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
                Visit our <Link to="/contact/" className="text-[#BE8C1D] hover:underline font-semibold">contact page</Link> for detailed directions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111] mb-1">
                Schedule Your Knee Check
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reach out by WhatsApp or phone call to reserve your slot.
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

      {/* S23 — GET YOUR KNEE INJURY CHECKED (FINAL CTA) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your Knee Injury Checked
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Do you have ongoing knee pain, swelling, catching or locking? A proper check can tell you what is happening and what your choices are. Many knee problems improve with simple care. Some need more. Either way, you do not have to guess. Call or message the clinic to arrange a consultation.
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
export default MeniscusRepairPage;
