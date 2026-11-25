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

export const CartilageRestorationPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is joint cartilage?",
      a: "Joint cartilage is the smooth, slippery layer that covers the ends of bones in a joint. It lets the bones move over each other easily and helps spread pressure."
    },
    {
      q: "What causes cartilage damage?",
      a: "Common causes include sports injuries, falls, twisting injuries, repeated stress, an unstable joint, earlier injuries and age-related wear. Sometimes more than one factor is involved, and sometimes no single cause is found."
    },
    {
      q: "What are the symptoms of knee cartilage damage?",
      a: "People may have pain, swelling, stiffness, catching, locking or a feeling that the knee gives way. These signs can also come from other knee problems, so a doctor needs to examine the knee."
    },
    {
      q: "Can damaged cartilage heal naturally?",
      a: "Cartilage has no blood supply, so it heals poorly. Symptoms may settle with time and proper care, but this is not the same as the cartilage growing back to normal."
    },
    {
      q: "Does every cartilage injury need surgery?",
      a: "No. Many people improve with non-surgical care such as physiotherapy and activity changes. Surgery is considered for selected patients whose symptoms continue and who have a suitable type of injury."
    },
    {
      q: "What is cartilage restoration?",
      a: "It is a group of surgical methods that aim to repair or replace a damaged area of cartilage. The methods differ, and the tissue they produce may not be identical to the original cartilage."
    },
    {
      q: "Who may be suitable for cartilage restoration?",
      a: "It is usually considered for people with a focal injury, symptoms that affect daily life and a joint that is otherwise in reasonable condition. Defect size and position, bone involvement, alignment, stability and activity needs all matter. Only a specialist assessment can tell."
    },
    {
      q: "What is microfracture surgery?",
      a: "Microfracture makes tiny holes in the bone beneath a damaged area. This lets blood and marrow cells enter the spot to form repair tissue. It is usually used for small defects, and the repair tissue may be less durable than the original cartilage."
    },
    {
      q: "What is an osteochondral graft?",
      a: "It is a small plug of cartilage and bone. It can come from another part of your own joint (autograft) or from a donor (allograft). The plug is placed into the damaged area."
    },
    {
      q: "Can cartilage restoration treat advanced knee arthritis?",
      a: "Generally, no. These procedures are mainly for focal injuries. Widespread arthritis is managed differently, and some patients may later need other treatment, including knee replacement."
    },
    {
      q: "Is cartilage restoration the same as knee replacement?",
      a: "No. Restoration treats a limited area and keeps your own joint. Knee replacement replaces worn joint surfaces with an artificial joint and is meant for advanced arthritis."
    },
    {
      q: "Can cartilage restoration be performed arthroscopically?",
      a: "Some can, such as microfracture. Others need a larger or open cut, such as many allograft procedures. It depends on the technique."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, bleeding, blood clots, stiffness, ongoing pain, failure of the repair tissue or graft, problems linked to grafts, the need for more surgery and anaesthesia risks. Your surgeon should explain the risks that apply to you."
    },
    {
      q: "How long does recovery take?",
      a: "It varies a lot between techniques and people. Some take months, and rehabilitation is a major part. Your surgeon will explain what to expect in your case."
    },
    {
      q: "Will I need crutches or physiotherapy?",
      a: "Many patients do. After some procedures, weight on the leg is limited for a time, so crutches may be needed. Physiotherapy is usually an important part of recovery."
    },
    {
      q: "When can I return to sports?",
      a: "There is no fixed date. It depends on the technique, how the repair heals and how the knee feels. Some patients may not return fully to their earlier level."
    },
    {
      q: "How can I book an orthopaedic consultation?",
      a: `Call ${businessConfig.phone} or message on WhatsApp at ${businessConfig.phone}. Please do not delay care if you have urgent symptoms, such as a hot, swollen joint with fever or an inability to bear weight. Go to an emergency department instead.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can arrange an appointment by WhatsApp on ${businessConfig.phone}. Please note that WhatsApp is not for emergencies.`
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
                JOINT CARTILAGE CARE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Cartilage Restoration in Lahore
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Cartilage is the smooth, slippery layer that covers the ends of the bones in your joints. It helps the joint move easily, but injury, twisting, repeated stress or wear over time can damage it. The right treatment depends on the type, size and place of the damage, and many people do not need surgery. If knee or joint pain is not settling, you can call or WhatsApp to arrange an orthopaedic consultation in Lahore.
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
                  <span>Joint Preservation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Focal Defect Repair</span>
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
                  src="/images/doctor/dr-mazhar-physical-exam.jpg" 
                  alt="Medical illustration of a knee joint showing smooth healthy cartilage on one side and a small area of damaged cartilage on the other"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E5DE] shadow-sm">
                  <p className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider mb-1">Joint Preservation & Cartilage Repair</p>
                  <p className="text-sm text-slate-700">Restoring joint gliding surfaces through microfracture & osteochondral transfers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS CARTILAGE IN YOUR JOINTS? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">01</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CARTILAGE ANATOMY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Cartilage in Your Joints?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed">
            <p>
              Cartilage is a smooth, tough and slippery layer. It covers the ends of the bones inside your joints. Doctors call it articular cartilage. "Articular" simply means "of a joint".
            </p>

            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] my-6">
              <h3 className="text-lg font-bold text-[#111111] mb-2">A Simple Knee Example</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Think about your knee. Your thigh bone sits on top of your shin bone. Your kneecap glides over the front of your thigh bone. The ends of all these bones are covered with cartilage. It looks smooth and a little shiny, like the inside of a shell.
              </p>
              <h4 className="font-bold text-[#111111] text-sm mb-2">What healthy cartilage does:</h4>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D]" />
                  <span>It lets the bones slide over each other with very little rubbing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D]" />
                  <span>It spreads pressure across the joint when you walk, run or climb stairs.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D]" />
                  <span>It helps the joint move smoothly and comfortably.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#111111] mt-6 mb-2">Why Damaged Cartilage Can Cause Problems</h3>
            <p>
              Cartilage has no blood vessels. Because of this, it does not heal well after an injury. Cartilage also has no nerves, so pain often comes from the bone underneath or from swelling in the joint lining.
            </p>
            <p>
              When the smooth surface is damaged, the joint may feel painful, swollen or stiff. It may also catch during movement.
            </p>
            <p>
              Cartilage is not the same as the meniscus. The meniscus is a C-shaped cushion between the thigh bone and shin bone. You can read about it on our <Link to="/meniscus-repair/" className="text-[#BE8C1D] hover:underline font-semibold">meniscus repair</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — WHAT HAPPENS WHEN JOINT CARTILAGE IS DAMAGED? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">02</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">DEFECTS VS ARTHRITIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens When Joint Cartilage Is Damaged?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Cartilage damage means the smooth surface has become thin, rough, cracked or worn away. It can happen in one small spot or over a large area.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Small, Focal Defects</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A "focal" defect is damage in one small area. The rest of the joint may still look healthy. It often follows an acute sports injury.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Osteochondral Injury</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Sometimes the injury goes deeper, affecting both cartilage and underlying bone ("osteo" = bone, "chondral" = cartilage).
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Widespread Cartilage Loss</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In osteoarthritis, cartilage wears thin across wide parts of the joint. It is a long-term degenerative condition.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Why Symptoms Differ for Each Person</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Two people can have very different symptoms. The size, depth and position of the damage matter, alongside age, activity level, and the health of the rest of the joint.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              This difference is important. A small focal injury and widespread arthritis are treated in different ways. You can learn more about arthritis on our <Link to="/arthritis-treatment/" className="text-[#BE8C1D] hover:underline font-semibold">arthritis management</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* S03 — WHAT CAUSES CARTILAGE DAMAGE? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">03</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CAUSES & MECHANISMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Cartilage Damage?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Cartilage damage can have many causes. In some people, no single cause can be found.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {[
              { title: "Sports injuries", desc: "A sudden twist or hard blow can crack or bruise the cartilage surface." },
              { title: "Falls and accidents", desc: "A fall onto the knee or a road traffic impact can damage the joint surface." },
              { title: "Twisting injuries", desc: "Turning quickly with the foot firmly planted strains the joint cartilage." },
              { title: "Repeated stress", desc: "Years of heavy loading (hard training or physical labour) wears the surface." },
              { title: "Joint instability", desc: "A loose joint after ligament tears places uneven, extra stress on cartilage." },
              { title: "Earlier injuries", desc: "Past fractures, meniscus tears or ligament injuries raise risk over time." },
              { title: "Age-related changes", desc: "Cartilage naturally becomes thinner and rougher as we age." },
              { title: "Other conditions", desc: "Poor bone blood supply, inflammation, joint infections or leg alignment." }
            ].map((c, idx) => (
              <div key={idx} className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] text-sm mb-1">{c.title}</h4>
                <p className="text-xs text-slate-700">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Often, a few of these factors work together. That is why a careful clinical assessment matters.
          </p>
        </div>
      </section>

      {/* S04 — COMMON SIGNS OF CARTILAGE DAMAGE */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">04</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SYMPTOM CHECKLIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of Cartilage Damage
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Cartilage damage does not always feel the same. Some people notice only mild discomfort, while others have clear problems with movement.
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Joint pain: Often felt during or after activity; worse on stairs, squatting or twisting.",
              "Swelling: The joint may look puffy or feel tight, especially following activity.",
              "Stiffness: The joint may feel hard to bend or straighten, especially after rest.",
              "Catching or locking: The knee may seem to catch, or get stuck for a brief moment.",
              "Giving way: The knee joint may feel unsteady or unreliable.",
              "Trouble with movement: Walking, running or kneeling may feel harder than before.",
              "Less activity tolerance: You find yourself stopping physical activity sooner.",
              "Pain after an injury: Lingering pain that does not settle after a twist or fall."
            ].map((sym, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E8E5DE]">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800">{sym}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            These symptoms can also come from other knee problems, such as a meniscus tear, a ligament injury, arthritis or tendon pain. Only a doctor can determine the cause after examination.
          </p>
        </div>
      </section>

      {/* S05 — WHEN SHOULD YOU GET YOUR JOINT CHECKED? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">05</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CARE GUIDELINES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Get Your Joint Checked?
          </h2>

          <div className="space-y-6">
            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">When an Orthopaedic Check Is a Good Idea:</h3>
              <ul className="space-y-2 text-sm text-slate-700 mb-6">
                <li>• Joint pain that has not improved after a few weeks.</li>
                <li>• Swelling that keeps recurring.</li>
                <li>• Catching, clicking with pain, locking or giving way.</li>
                <li>• Difficulty walking, climbing stairs or doing normal daily tasks.</li>
                <li>• Pain that began after an injury and has not settled.</li>
                <li>• A joint that is slowly losing its range of movement.</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E8E5DE]">
                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-xs sm:text-sm hover:bg-[#a67a18] transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>WhatsApp Appointment</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Get Urgent Medical Help If:
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• You have had a severe high-impact injury (fall, crash or collision).</li>
                <li>• You cannot put any weight on the leg.</li>
                <li>• Your joint is truly locked and you cannot bend or straighten it.</li>
                <li>• Your joint is hot, red, swollen and you have a fever or chills (possible joint infection).</li>
              </ul>
              <p className="text-xs text-slate-500 mt-4 border-t border-[#E8E5DE] pt-3">
                Please go to a hospital emergency department for these acute issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — DIFFERENT TYPES OF CARTILAGE DAMAGE */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">06</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">DAMAGE CLASSIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Different Types of Cartilage Damage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Focal Cartilage Defects</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Damage in one localized spot, frequently following a twist or direct blow. The cartilage surrounding the defect may remain healthy.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Osteochondral Injuries</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Here, a piece of cartilage and the bone under it are both damaged. A small bone-cartilage fragment may loosen in the joint.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Cartilage Wear Linked to Arthritis</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                In osteoarthritis, cartilage wears thin across a wider joint area. It is a gradual process managed differently from an isolated injury.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Combined Ligament or Meniscus Damage</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Cartilage can be injured alongside ligaments or menisci. See our pages on <Link to="/acl-reconstruction/" className="text-[#BE8C1D] hover:underline font-semibold">ACL reconstruction</Link> and <Link to="/meniscus-repair/" className="text-[#BE8C1D] hover:underline font-semibold">meniscus repair</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — HOW DOES A DOCTOR CHECK FOR CARTILAGE DAMAGE? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">07</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">DIAGNOSTIC WORKUP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check for Cartilage Damage?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Finding the cause of joint pain starts with listening and clinical examination. Tests are selected only when they are likely to help.
          </p>

          <div className="space-y-3 mb-6">
            {[
              { title: "Medical history", desc: "The doctor asks when the problem began and what makes it better or worse." },
              { title: "Injury history", desc: "You describe any fall, twist, sports injury or previous surgery." },
              { title: "Physical examination", desc: "The doctor checks for swelling, localized tenderness, leg alignment and your gait." },
              { title: "Movement and stability", desc: "Checking range of motion and ligament firmness." },
              { title: "X-rays when appropriate", desc: "Shows bones, alignment and joint space narrowing (cartilage does not show on X-ray)." },
              { title: "MRI when indicated", desc: "Detailed view of soft tissues, cartilage defects, menisci and ligaments." },
              { title: "Review of options", desc: "Explaining findings and discussing tailored treatment pathways." }
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

          <p className="text-xs text-slate-500">
            Sometimes cartilage is evaluated directly during keyhole surgery. Learn more about <Link to="/knee-arthroscopy/" className="text-[#BE8C1D] hover:underline font-semibold">knee arthroscopy</Link>.
          </p>
        </div>
      </section>

      {/* S08 — CAN CARTILAGE PROBLEMS BE MANAGED WITHOUT SURGERY? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">08</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSERVATIVE MANAGEMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Cartilage Problems Be Managed Without Surgery?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Not every cartilage injury needs an operation. Many people feel better with non-surgical care.
          </p>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Feeling Better vs Regrowing Cartilage</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Treatment can reduce pain and help the joint work better. But it does not usually rebuild lost cartilage. Cartilage heals poorly because it has no blood supply. So the aim of non-surgical care is to calm symptoms and protect the joint.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-3">What Affects the Plan:</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• The type, size and place of the damage.</li>
              <li>• Whether the underlying bone is involved.</li>
              <li>• Whether other parts of the knee (meniscus or ligaments) are injured.</li>
              <li>• How strong, stable and well-aligned the joint is.</li>
              <li>• Your age, health and activity goals.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* S09 — NON-SURGICAL TREATMENT FOR CARTILAGE DAMAGE */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">09</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">THERAPIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Non-Surgical Treatment for Cartilage Damage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Physiotherapy</h3>
              <p className="text-xs text-slate-700">Safe movement training and muscle conditioning around the joint.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Strengthening Exercises</h3>
              <p className="text-xs text-slate-700">Targeted thigh and hip muscle strengthening to offload joint pressure.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Activity Changes</h3>
              <p className="text-xs text-slate-700">Modifying high-impact loading temporarily and returning gradually.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Weight Management</h3>
              <p className="text-xs text-slate-700">Reducing joint stress through healthy weight control.</p>
            </div>
          </div>

          <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-base font-bold text-slate-900 mb-2">A Note on Injections</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Some injections are used to ease symptoms in selected patients. The evidence on how well they work varies. None has been proven to rebuild lost cartilage. Ask your doctor what is known about any injection before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* S10 — WHAT IS CARTILAGE RESTORATION SURGERY? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">10</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SURGICAL CONCEPTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Cartilage Restoration Surgery?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Cartilage restoration is a group of surgical methods. They aim to repair or replace a damaged area of cartilage. The goal is to ease pain and help the joint work better.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">How Procedures Try to Help</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Stimulating bone marrow cells to fill defects with repair tissue (microfracture).</li>
                <li>• Moving healthy cartilage and bone plugs from non-weight-bearing areas (autograft / OATS).</li>
                <li>• Using donor tissue from a tissue bank (allograft).</li>
                <li>• Using cells grown in specialized laboratories (ACI / MACI).</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-slate-900 mb-2">An Honest Note About Results</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Some procedures create repair tissue called <strong>fibrocartilage</strong>. It is different from original hyaline cartilage and may be less durable. Restoration does not simply rebuild a brand-new original joint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S11 — WHO MAY BE SUITABLE FOR CARTILAGE RESTORATION? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">11</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CANDIDACY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Who May Be Suitable for Cartilage Restoration?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Whether restoration suits you depends on many factors. A specialist must look at your whole knee and daily requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {[
              { title: "Focal cartilage injury", desc: "Mainly for damage in a limited area, not widespread arthritis." },
              { title: "Defect size & position", desc: "Different techniques suit different defect sizes and joint surfaces." },
              { title: "Symptoms & impact", desc: "Considered when symptoms clearly affect daily function or mobility." },
              { title: "Joint stability", desc: "A loose knee may need ligament stabilization (e.g. ACL reconstruction)." },
              { title: "Joint alignment", desc: "Bowed or knocked alignment may overload one joint compartment." },
              { title: "Meniscus condition", desc: "A damaged meniscus must be preserved or repaired alongside cartilage." },
              { title: "Bone involvement", desc: "Deep defects with bone damage require osteochondral techniques." },
              { title: "Activity needs", desc: "Tailored to athletic versus general daily lifestyle goals." },
              { title: "Overall joint health", desc: "Widespread osteoarthritis makes restoration less effective." }
            ].map((f, idx) => (
              <div key={idx} className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-slate-700">{f.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            Learn more about initial specialist evaluations at an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] hover:underline font-semibold">orthopaedic consultation</Link>.
          </p>
        </div>
      </section>

      {/* S12 — DIFFERENT CARTILAGE RESTORATION PROCEDURES */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">12</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURAL TECHNIQUES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Different Cartilage Restoration Procedures
          </h2>
          <p className="text-xs text-slate-500 mb-6 italic">
            The techniques below are described for patient education. Which one is suitable, if any, depends on clinical evaluation.
          </p>

          <div className="space-y-6">
            {/* Microfracture */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">1. Microfracture</h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Purpose:</strong> Tiny holes are made in the bone under the defect to release marrow cells and form a repair clot (fibrocartilage).</p>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Suitability:</strong> Usually for smaller defects in patients with lower activity demands.</p>
              <p className="text-xs text-slate-600"><strong>Recovery:</strong> Requires strict initial weight-bearing limits and planned physiotherapy.</p>
            </div>

            {/* OATS */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">2. Osteochondral Autograft Transfer (OATS / Mosaicplasty)</h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Purpose:</strong> Small plugs of bone and healthy cartilage are transferred from a less-loaded area of your own knee into the defect.</p>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Suitability:</strong> Small to medium defects, including those with bone damage.</p>
              <p className="text-xs text-slate-600"><strong>Recovery:</strong> Protected rehabilitation while the plugs integrate.</p>
            </div>

            {/* Allograft */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">3. Osteochondral Allograft Transplantation</h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Purpose:</strong> Uses matched donor cartilage and bone from a tissue bank.</p>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Suitability:</strong> Larger defects or significant bone loss.</p>
              <p className="text-xs text-slate-600"><strong>Recovery:</strong> Careful, gradual recovery with protected loading.</p>
            </div>

            {/* ACI */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">4. Autologous Chondrocyte Implantation (ACI / MACI)</h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Purpose:</strong> Two-stage cell-based treatment. Cartilage cells are harvested, grown in a laboratory, and implanted in a second surgery.</p>
              <p className="text-xs sm:text-sm text-slate-700 mb-2"><strong>Suitability:</strong> Selected patients with larger defects and minimal arthritis.</p>
              <p className="text-xs text-slate-600"><strong>Recovery:</strong> Longer, structured multi-month rehabilitation programme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S13 — CAN CARTILAGE RESTORATION BE DONE THROUGH KEYHOLE SURGERY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">13</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SURGICAL APPROACH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Cartilage Restoration Be Done Through Keyhole Surgery?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            It depends on the technique. Cartilage restoration is not always done through keyhole surgery alone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Keyhole (Arthroscopic) Access</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                In arthroscopy, the surgeon makes small cuts and uses a thin camera and instruments. Microfracture and initial cell harvesting for ACI are commonly done this way.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Open Approaches</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Some techniques need a mini-open or open cut (such as larger allografts or cell implantation membranes) to accurately position and secure the graft.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            A smaller cut does not determine the success of the repair. The quality of fixation and rehabilitation matter most. Learn about <Link to="/arthroscopic-surgery/" className="text-[#BE8C1D] hover:underline font-semibold">arthroscopic surgery</Link>.
          </p>
        </div>
      </section>

      {/* S14 — CARTILAGE RESTORATION VS KNEE REPLACEMENT */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">14</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Cartilage Restoration vs Knee Replacement
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            These two treatments are for different problems. Cartilage restoration treats a limited area of focal damage, whereas knee replacement addresses widespread wear from advanced arthritis.
          </p>

          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-[#111111]">
                    <th className="p-4 font-bold">Question</th>
                    <th className="p-4 font-bold text-[#BE8C1D]">Cartilage Restoration</th>
                    <th className="p-4 font-bold">Knee Replacement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Usual problem</td>
                    <td className="p-4">A focal cartilage injury or defect</td>
                    <td className="p-4">Widespread arthritis with worn joint surfaces</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Main aim</td>
                    <td className="p-4">Repair or replace a damaged spot to ease symptoms</td>
                    <td className="p-4">Replace worn surfaces with an artificial joint</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">What happens to the joint</td>
                    <td className="p-4">Your own joint is kept</td>
                    <td className="p-4">Worn surfaces are replaced with implants</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Who is usually considered</td>
                    <td className="p-4">Selected patients with a limited defect and healthy rest of joint</td>
                    <td className="p-4">Patients with advanced arthritis not controlled by other care</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Main limits</td>
                    <td className="p-4">Repair tissue may differ from original cartilage; not for arthritis</td>
                    <td className="p-4">Major surgical procedure with implant lifespan considerations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Cartilage restoration cannot replace knee replacement in advanced arthritis. Read about <Link to="/knee-replacement-surgery/" className="text-[#BE8C1D] hover:underline font-semibold">knee replacement surgery</Link>.
          </p>
        </div>
      </section>

      {/* S15 — WHAT HAPPENS DURING SURGERY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">15</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE STEPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During Cartilage Restoration Surgery?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The steps differ based on the specific technique. This is a general overview:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { title: "Assessment before surgery", desc: "Reviewing history, exam, and MRI scans." },
              { title: "Anaesthesia", desc: "General or spinal anaesthesia to ensure you feel no pain." },
              { title: "Surgical access", desc: "Reaching the joint through small cuts or an open incision." },
              { title: "Examining the defect", desc: "Direct inspection of the damaged area and entire joint." },
              { title: "Treating the defect", desc: "Applying the chosen restoration technique and fixing concurrent meniscus/ligament issues." },
              { title: "Closing the wounds", desc: "Carefully closing incisions and placing dressings." },
              { title: "Planning rehabilitation", desc: "Providing post-op guidelines on weight-bearing and motion." }
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

          <p className="text-xs text-slate-500">
            For general preparation advice, see our guide on <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] hover:underline font-semibold">surgery preparation and recovery</Link>.
          </p>
        </div>
      </section>

      {/* S16 — BENEFITS AND RISKS OF CARTILAGE RESTORATION */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">16</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">BALANCED PERSPECTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Risks of Cartilage Restoration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Benefits</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Reduced joint pain and swelling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Improved joint function and smoother motion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Preserving natural joint anatomy where appropriate.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                These are possible benefits, not guarantees. Restoration does not prevent arthritis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Risks</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Infection or bleeding</li>
                <li>• Blood clots in the leg</li>
                <li>• Joint stiffness or persistent pain</li>
                <li>• Repair tissue or graft failing to integrate</li>
                <li>• Graft-site soreness (autograft donor site)</li>
                <li>• Need for further surgery or anaesthesia risks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S17 — RECOVERY AFTER CARTILAGE RESTORATION SURGERY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">17</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RECOVERY TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Cartilage Restoration Surgery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Recovery depends on the technique, defect size, and patient health. Some take several months, and rehabilitation is critical.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Wound & Pain Care</h3>
              <p className="text-xs text-slate-700">Clean dressings and prescribed pain management during early healing.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Weight-Bearing Limits</h3>
              <p className="text-xs text-slate-700">Crutches are often required for several weeks to protect new repair tissue.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Guided Physiotherapy</h3>
              <p className="text-xs text-slate-700">Restoring movement and gradual muscle strength in structured stages.</p>
            </div>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Gradual Return to Activity</h3>
              <p className="text-xs text-slate-700">Daily tasks first, followed by higher-impact tasks when cleared by your surgeon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S18 — WHY IS REHABILITATION IMPORTANT? */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">18</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">REHABILITATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Is Rehabilitation Important?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Surgery is only one part of treatment. Rehabilitation gives the repair tissue the best chance to mature safely.
          </p>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] space-y-3 mb-6">
            {[
              "Protecting the treated area while new tissue settles.",
              "Strict adherence to weight-bearing instructions.",
              "Restoring gentle, guided movement to prevent joint stiffness.",
              "Building supporting muscle strength in the thigh and hip.",
              "Improving joint balance and proprioception.",
              "Staged progression: walking, then daily tasks, then sport-specific drills."
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{pt}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            There is no fixed date for return to sports; clearance depends on repair maturity and strength tests.
          </p>
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
                  M.B.B.S., F.C.P.S. (Orthopedic Surgery), ATLS®, Fellowship in Arthroplasty and Joint Reconstruction
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience in orthopaedic care, trauma and sports injuries. His work covers knee and joint problems, sports injuries, and joint preservation. He sees patients at BNI - Bashir NeuroSpine Institute, Shadman, Lahore.
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

      {/* S20 — WHAT TO EXPECT DURING YOUR JOINT CONSULTATION */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">20</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSULTATION JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What to Expect During Your Joint Consultation
          </h2>

          <div className="space-y-3 mb-6">
            {[
              "Talk about your symptoms: describe your pain and how it affects mobility.",
              "Review your injury history: share previous falls, twists, or surgeries.",
              "Examination of the joint: checking range of motion, stability and alignment.",
              "Tests if needed: review X-rays or MRI scans if indicated.",
              "Discuss options: learn about non-surgical vs surgical choices.",
              "Plan the next steps: agree on a clear treatment roadmap."
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
            Learn more about scheduling an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] hover:underline font-semibold">orthopaedic consultation</Link>.
          </p>
        </div>
      </section>

      {/* S21 — EXPLORE RELATED KNEE AND JOINT TREATMENTS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">21</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RELATED SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Knee and Joint Treatments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Arthroscopic Surgery",
                desc: "Learn how keyhole surgery lets a surgeon look inside and treat joints.",
                link: "/arthroscopic-surgery/"
              },
              {
                title: "Knee Arthroscopy",
                desc: "Keyhole procedure to see and treat problems inside the knee.",
                link: "/knee-arthroscopy/"
              },
              {
                title: "Meniscus Repair",
                desc: "Find out how the knee's C-shaped cushion tears and how repair helps.",
                link: "/meniscus-repair/"
              },
              {
                title: "ACL Reconstruction",
                desc: "Understand how a torn knee ligament affects stability and how it is rebuilt.",
                link: "/acl-reconstruction/"
              },
              {
                title: "Knee Replacement Surgery",
                desc: "See when a worn-out knee may need an artificial joint.",
                link: "/knee-replacement-surgery/"
              },
              {
                title: "Arthritis Management",
                desc: "Learn about long-term care for joint pain and stiffness from arthritis.",
                link: "/arthritis-treatment/"
              },
              {
                title: "Orthopaedic Consultation",
                desc: "Find out what happens when you visit for a bone and joint check-up.",
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

      {/* S22 — GET YOUR JOINT PAIN CHECKED IN LAHORE */}
      <section className="py-14 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">22</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CLINICAL LOCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your Joint Pain Checked in Lahore
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you have knee or joint symptoms that keep coming back, an orthopaedic assessment can help you find out why. You do not need to decide on surgery to ask for a check-up.
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
                Visit our <Link to="/contact/" className="text-[#BE8C1D] hover:underline font-semibold">contact page</Link> or read <Link to="/patient-education/" className="text-[#BE8C1D] hover:underline font-semibold">patient education</Link>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111] mb-1">
                Arrange a Consultation
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reach out by WhatsApp or phone call to reserve an evaluation.
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
            Get Your Joint Pain Checked
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Ongoing knee pain, swelling, catching or stiffness should not be ignored. A proper check can identify whether you have a cartilage defect and help you select the safest treatment. Call or message the clinic to arrange an appointment.
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
export default CartilageRestorationPage;
