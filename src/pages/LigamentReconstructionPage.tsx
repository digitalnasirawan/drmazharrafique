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
  Check, 
  Layers, 
  FileText,
  Clock,
  Compass,
  Zap,
  Flame
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const LigamentReconstructionPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is a ligament?",
      a: "A ligament is a strong band of tissue that joins one bone to another. It helps keep a joint steady."
    },
    {
      q: "What causes a ligament tear?",
      a: "Common causes include sports injuries, sudden twisting, bad landings, falls, direct blows and road accidents."
    },
    {
      q: "What are the symptoms of a knee ligament injury?",
      a: "Pain, swelling, bruising, a loose or unstable knee, giving way, trouble walking and less movement. Some people feel or hear a \"pop\" at the time of injury."
    },
    {
      q: "What is the difference between ACL, PCL, MCL and LCL?",
      a: "The ACL and PCL cross inside the knee. The ACL stops the shin bone sliding forward, and the PCL stops it sliding backward. The MCL is on the inner side of the knee, and the LCL is on the outer side. The MCL and LCL stop the knee bending sideways."
    },
    {
      q: "Can ligament tears heal without surgery?",
      a: "Some can. Sprains, partial tears and many isolated MCL or PCL injuries can improve with rest, physiotherapy and sometimes a brace. Whether a tear will heal depends on the ligament and the injury."
    },
    {
      q: "Does every complete ligament tear need reconstruction?",
      a: "No. Some people have a stable knee after a complete tear and do well without surgery. Surgery is more likely if the knee keeps giving way, several ligaments are torn or other injuries are present."
    },
    {
      q: "What is ligament reconstruction?",
      a: "It is surgery in which a surgeon rebuilds a torn ligament using a graft, which is a piece of tendon."
    },
    {
      q: "What is the difference between ligament repair and reconstruction?",
      a: "In repair, the surgeon fixes your own ligament, for example by reattaching it to the bone. In reconstruction, the surgeon builds a new ligament with a graft."
    },
    {
      q: "What is a multiligament knee injury?",
      a: "It means two or more knee ligaments are torn at the same time. It usually follows strong force. It can also injure nerves and blood vessels, so urgent medical assessment is important."
    },
    {
      q: "When might PCL reconstruction be considered?",
      a: "It may be discussed if the knee stays unstable or painful after rehabilitation, if other ligaments are also torn, or in some cases of a complete PCL tear. Many PCL injuries do not need it."
    },
    {
      q: "Do MCL injuries usually need surgery?",
      a: "No. Most isolated MCL injuries heal without surgery. Surgery may be considered if the ligament cannot heal or other ligaments are injured too."
    },
    {
      q: "What are the possible risks of ligament reconstruction?",
      a: "Risks include infection, bleeding, blood clots, stiffness, ongoing pain, graft failure, re-injury, nerve or blood vessel injury, anaesthesia problems and the need for more surgery."
    },
    {
      q: "How long does recovery take?",
      a: "It varies a lot. It depends on the ligament, the operation and your progress. Many people need several months, and combined injuries can take a year or more. Your surgeon will guide you."
    },
    {
      q: "Will I need a knee brace or crutches?",
      a: "Some people do and some do not. It depends on the injury and the type of surgery. Your surgeon will tell you what is right for you."
    },
    {
      q: "Is physiotherapy necessary?",
      a: "Physiotherapy is a key part of care, with or without surgery. It helps restore movement and strength. A plan made for you is best."
    },
    {
      q: "When can I return to sports?",
      a: "No date suits everyone. Doctors usually want no pain or swelling, good movement and good strength first. Your surgeon and physiotherapist will check you before you return."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} or message on WhatsApp at ${businessConfig.phone}. There is no online booking form.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can contact the clinic on WhatsApp via ${businessConfig.phone} to coordinate appointments and discuss consultation requirements.`
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#111111]">
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-2.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
          <Link to="/" className="hover:text-[#BE8C1D]">Home</Link>
          <span className="mx-2 text-slate-400">/</span>
          <Link to="/sports-injury-treatment/" className="hover:text-[#BE8C1D]">Sports Injury &amp; Ligament Surgery</Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-[#111111] font-semibold">Ligament Reconstruction</span>
        </div>
      </nav>

      {/* B3 — HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FAF8F2] to-[#FFFFFF] py-12 sm:py-16 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              KNEE LIGAMENT &amp; JOINT STABILITY CARE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Ligament Reconstruction in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Ligaments are strong bands that hold your bones together and keep your joints steady. When a ligament is badly hurt, your knee may feel loose or give way. Many ligament injuries heal with rest and rehabilitation, while some need surgery. If your knee hurts, swells or feels unstable, an orthopaedic assessment in Lahore can help you understand your options.
            </p>

            <div className="flex flex-wrap justify-center gap-3.5">
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm shadow-sm hover:bg-[#a67a18] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — WHAT ARE LIGAMENTS AND WHY ARE THEY IMPORTANT? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Are Ligaments and Why Are They Important?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-base">
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-1">What a ligament is</h3>
              <p>
                A ligament is a strong band of tissue. It joins one bone to another bone. You can think of ligaments as tough ropes around and inside a joint. They keep the bones in the right place.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-1">How ligaments help your joints</h3>
              <p>
                Your knee has four main ligaments. They connect the thigh bone (femur) to the shin bone (tibia) and the smaller bone beside it (fibula). They help your knee stay steady when you walk, run, jump, turn or change direction.
              </p>
              <p className="mt-2">
                Doctors call this steadiness &ldquo;stability&rdquo;. A stable knee moves in the right way and does not slip or wobble.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-1">What happens when a ligament is injured</h3>
              <p>
                If a ligament is stretched or torn, the joint may move more than it should. The knee may hurt, swell or feel weak. Some people feel the knee &ldquo;give way&rdquo; when they stand, walk or turn.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Ligaments are found in many joints, such as the ankle, elbow and shoulder. This page mainly explains knee ligaments, because they are injured often and can affect daily life and sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — WHAT HAPPENS WHEN A LIGAMENT TEARS? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens When a Ligament Tears?
          </h2>
          <p className="text-slate-700 mb-6">
            A hurt ligament is called a sprain. Doctors often describe a sprain in three grades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-amber-100 text-amber-800 mb-2">Grade 1</span>
              <h3 className="font-bold text-[#111111] text-base mb-1">Stretched</h3>
              <p className="text-sm text-slate-700">The ligament is stretched a little. It is sore, but the joint is still steady.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-orange-100 text-orange-800 mb-2">Grade 2</span>
              <h3 className="font-bold text-[#111111] text-base mb-1">Partial Tear</h3>
              <p className="text-sm text-slate-700">Some fibres of the ligament are torn. The ligament becomes loose, and the joint may feel a little unsteady.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-red-100 text-red-800 mb-2">Grade 3</span>
              <h3 className="font-bold text-[#111111] text-base mb-1">Complete Tear</h3>
              <p className="text-sm text-slate-700">The ligament is torn into two pieces, or it is pulled off the bone. The joint is often unstable.</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-white border border-[#E8E5DE]">
            <h4 className="font-bold text-[#111111] text-sm mb-1">Why symptoms are different for each person</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Two people with the same tear may feel very different. The ligament involved, the grade of injury, other damaged parts of the knee, your muscle strength and your daily activities all matter. A complete tear does not always cause long-term instability, and some people do well with rehabilitation. An orthopaedic doctor can check which group you are in.
            </p>
          </div>
        </div>
      </section>

      {/* S03 — WHAT CAUSES LIGAMENT INJURIES? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Ligament Injuries?
          </h2>
          <p className="text-slate-700 mb-6">
            Ligaments are hurt when a joint is pushed past its normal movement. Common causes include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            <div className="p-4 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Sports injuries</p>
              <p className="text-xs text-slate-600 mt-1">Football, cricket, hockey, kabaddi, basketball and similar games involve running, jumping and tackling.</p>
            </div>
            <div className="p-4 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Sudden twisting</p>
              <p className="text-xs text-slate-600 mt-1">The foot stays on the ground while the body turns quickly.</p>
            </div>
            <div className="p-4 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Sudden changes in direction</p>
              <p className="text-xs text-slate-600 mt-1">Stopping fast or landing awkwardly after a jump can strain the knee.</p>
            </div>
            <div className="p-4 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Direct blows</p>
              <p className="text-xs text-slate-600 mt-1">A hit to the side or front of the knee can stretch or tear a ligament.</p>
            </div>
            <div className="p-4 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Falls</p>
              <p className="text-xs text-slate-600 mt-1">A bad fall, for example from a motorbike or stairs, can twist or bend the knee.</p>
            </div>
            <div className="p-4 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Road traffic accidents</p>
              <p className="text-xs text-slate-600 mt-1">Strong force on the knee can injure more than one ligament simultaneously.</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 italic">
            You do not have to be an athlete to injure a ligament. Office workers, labourers, students and older adults can all hurt a ligament in everyday falls or accidents.
          </p>
        </div>
      </section>

      {/* S04 — THE FOUR MAIN LIGAMENTS OF THE KNEE */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            The Four Main Ligaments of the Knee
          </h2>
          <p className="text-slate-700 mb-6">
            The knee has two ligaments inside the joint and two on the sides.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Ligament</th>
                  <th className="p-3.5">Where it is</th>
                  <th className="p-3.5">What it does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE]">
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">ACL (anterior cruciate ligament)</td>
                  <td className="p-3.5">Inside the knee, towards the front. It crosses the PCL like an &ldquo;X&rdquo;.</td>
                  <td className="p-3.5">Stops the shin bone from sliding too far forward. Helps with twisting and turning.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">PCL (posterior cruciate ligament)</td>
                  <td className="p-3.5">Inside the knee, towards the back.</td>
                  <td className="p-3.5">Stops the shin bone from sliding too far backward. It is stronger than the ACL and is injured less often.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">MCL (medial collateral ligament)</td>
                  <td className="p-3.5">On the inner side of the knee, joining the thigh bone to the shin bone.</td>
                  <td className="p-3.5">Keeps the inner knee steady and stops the knee bending sideways, inwards.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">LCL (lateral collateral ligament)</td>
                  <td className="p-3.5">On the outer side of the knee, joining the thigh bone to the calf bone (fibula).</td>
                  <td className="p-3.5">Keeps the outer knee steady and stops the knee bending sideways, outwards.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            The ACL and PCL are called &ldquo;cruciate&rdquo; ligaments because they cross each other. The MCL and LCL are called &ldquo;collateral&rdquo; ligaments because they run along the sides of the knee. Together, they work as a team.
          </p>
        </div>
      </section>

      {/* S05 — ACL TEARS AND KNEE INSTABILITY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            ACL Tears and Knee Instability
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              The ACL is one of the most commonly injured knee ligaments. Many ACL injuries happen without a hit from another person. They often happen when someone lands from a jump, stops suddenly or twists with the foot planted. Many ACL injuries also come with damage to other parts of the knee, such as the meniscus or another ligament.
            </p>
            <p>
              An ACL tear can make the knee feel unstable. You may feel it &ldquo;give way&rdquo; when you turn or change direction. Treatment depends on your age, your activities, how unstable the knee feels and whether other parts of the knee are hurt. Some people do well with physiotherapy. Others need reconstruction, especially if the knee keeps giving way or other structures are damaged.
            </p>
            <div className="pt-2">
              <Link
                to="/acl-reconstruction/"
                className="inline-flex items-center gap-2 text-[#BE8C1D] font-bold text-sm hover:underline"
              >
                <span>Read complete details on ACL reconstruction</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — WHAT IS A PCL INJURY? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a PCL Injury?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#111111] text-base mb-1">What the PCL does</h3>
              <p>The PCL sits at the back of the knee joint. It stops the shin bone from sliding backward under the thigh bone.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#111111] text-base mb-1">How it may be injured</h3>
              <p>A PCL injury usually needs strong force. A common cause is a blow to the front of the bent knee, for example in a road accident (dashboard injury) or in a hard sports collision. Falling onto a bent knee can also hurt it. The PCL is often injured together with other ligaments or parts of the knee.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#111111] text-base mb-1">Common symptoms</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>Pain and swelling in the knee, often at the back.</li>
                <li>A stiff knee that is hard to bend fully.</li>
                <li>Trouble walking, especially downhill or down stairs.</li>
                <li>A feeling that the knee is loose or wobbly.</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Treatment without surgery</h4>
              <p className="text-sm text-slate-700">
                Many PCL tears are partial, and some can heal without an operation. Care often includes rest, ice, support from a brace or splint when advised, and physiotherapy to strengthen the thigh muscles. Many people with an isolated, less severe PCL injury do well with this approach.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#111111] text-base mb-1">When reconstruction may be considered</h3>
              <p className="text-sm text-slate-700">
                Surgery may be discussed if the knee stays unstable or painful despite good rehabilitation, if other ligaments are also torn, or if the ligament has pulled off the bone. Doctors do not fully agree on the best plan for every isolated complete PCL tear, so the decision should be individual. Not every PCL injury needs reconstruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — WHAT IS AN MCL INJURY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is an MCL Injury?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              <strong>Where the MCL is and what it does:</strong> The MCL runs along the inner side of the knee. It joins the thigh bone to the shin bone and helps stop the knee from bending sideways inwards.
            </p>
            <p>
              <strong>Common causes:</strong> The MCL is often hurt by a force that pushes the knee sideways, such as a hit to the outer side of the knee. It can also be hurt by twisting. It is the knee ligament that is hurt most often among the two side ligaments.
            </p>
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
              <h3 className="font-bold text-emerald-950 text-sm mb-1">Most isolated MCL injuries do not need surgery</h3>
              <p className="text-sm text-emerald-900 leading-relaxed">
                Most isolated MCL injuries heal well without surgery because the medial collateral ligament has a rich blood supply. Treatment often includes ice, a hinged brace when advised, and physiotherapy.
              </p>
            </div>
            <p>
              <strong>When surgery may be considered:</strong> Surgery may be discussed if the ligament has torn in a way that cannot heal, if it has pulled off the bone, or if other ligaments are also injured. MCL tears often occur together with ACL tears, so the whole knee needs to be checked.
            </p>
          </div>
        </div>
      </section>

      {/* S08 — WHAT ARE LCL AND OUTER KNEE LIGAMENT INJURIES? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Are LCL and Outer Knee Ligament Injuries?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              <strong>Where the LCL is:</strong> The LCL runs along the outer side of the knee. It joins the thigh bone to the smaller bone of the lower leg (the fibula). It helps stop the knee from bending sideways outwards.
            </p>
            <p>
              <strong>Why injuries often involve other parts:</strong> The outer side of the knee has a more complex structure. Because of this, an LCL injury often happens together with injury to other parts of the knee. Doctors call the back and outer corner of the knee the &ldquo;posterolateral corner&rdquo; (PLC). Think of it as a small team of ligaments, a tendon and soft tissue. They work together to keep the outer back part of the knee steady and to control twisting.
            </p>
            <div className="p-4 rounded-lg bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-sm mb-1">Symptoms of outer knee instability</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>Pain or swelling on the outer side of the knee.</li>
                <li>A feeling that the knee is unsteady, especially when you walk or turn.</li>
                <li>Giving way.</li>
                <li>Numbness or weakness in the foot after a bad injury (peroneal nerve injury). This needs urgent medical attention.</li>
              </ul>
            </div>
            <p className="text-sm text-slate-700">
              An outer knee injury can be missed or underestimated. A thorough examination, and sometimes an MRI scan, helps the doctor find every injured part. Some isolated LCL sprains improve without surgery. Surgery may be advised if the ligament has pulled off the bone or if other structures are injured.
            </p>
          </div>
        </div>
      </section>

      {/* S09 — WHAT HAPPENS WHEN MORE THAN ONE KNEE LIGAMENT IS INJURED? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens When More Than One Knee Ligament Is Injured?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              A multiligament knee injury means that two or more knee ligaments are torn at the same time. It usually happens after strong force, such as a road accident, a bad fall or a heavy sports collision.
            </p>
            <p>
              When several ligaments are torn, the main supports of the knee are weakened. The knee may feel loose in more than one direction. Sometimes the knee joint is pushed out of place. This is called a <strong>knee dislocation</strong>.
            </p>
            <div className="p-5 rounded-xl bg-slate-900 text-white">
              <h3 className="text-amber-400 font-bold text-base mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Why nerves and blood vessels matter
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Big injuries to the knee can also harm nearby nerves and blood vessels. A blood vessel behind the knee, called the popliteal artery, can be hurt. If blood flow is blocked and is not treated in time, the leg can be in danger. The nerve that lifts the foot can also be hurt, causing numbness or weakness. Some knee dislocations slip back into place on their own, looking almost normal despite severe trauma.
              </p>
            </div>

            {/* Emergency Callout Box */}
            <div className="p-5 rounded-xl border-2 border-red-500 bg-red-50/50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-900 text-base mb-1">Emergency Warning</h4>
                  <p className="text-sm text-red-900 leading-relaxed">
                    If you think your knee has been dislocated, or your foot feels cold, pale, numb or has lost its feeling or colour after a knee injury, go to the nearest hospital emergency department immediately. Do not wait for a routine clinic appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S10 — COMMON SIGNS OF A LIGAMENT INJURY */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of a Ligament Injury
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">Pain at the time of injury and with movement</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">Swelling, often within hours of the incident</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">Bruising around the knee or down the lower leg</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">Instability: the joint feels loose or unsafe</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">Giving way: the knee suddenly buckles</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">Difficulty walking or putting weight on the leg</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">Reduced movement: knee will not bend or straighten</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-3">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-sm text-slate-800">A &ldquo;pop&rdquo; sound or sensation when injury happens</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 italic">
            These signs can also happen with other knee problems, such as a meniscus tear, a fracture or a kneecap injury. You cannot tell the exact injury from symptoms alone. A doctor needs to examine the knee.
          </p>
        </div>
      </section>

      {/* S11 — WHEN SHOULD YOU GET A LIGAMENT INJURY CHECKED? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Get a Ligament Injury Checked?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border-2 border-red-200 bg-red-50/40">
              <h3 className="font-bold text-red-950 text-base mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Go to Emergency immediately if:
              </h3>
              <ul className="space-y-2 text-sm text-red-900">
                <li>• There was severe trauma (road crash, high fall).</li>
                <li>• The knee or leg looks deformed or out of place.</li>
                <li>• You cannot put any weight on the leg.</li>
                <li>• Foot or toes feel numb, or you cannot lift foot.</li>
                <li>• Foot is cold, pale, blue or very painful.</li>
                <li>• You think foot has lost blood supply or suspect dislocation.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-[#BE8C1D]/30 bg-[#FAF8F2]">
              <h3 className="font-bold text-[#111111] text-base mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#BE8C1D]" />
                Book an orthopaedic assessment if:
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Knee is painful and swollen after an injury.</li>
                <li>• Knee feels loose, wobbles or gives way.</li>
                <li>• Finding it hard to walk, climb stairs or play sport.</li>
                <li>• Symptoms not improving after days of rest.</li>
                <li>• Past injury and knee still feels unstable.</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-[#E8E5DE]">
                <Link to="/orthopaedic-consultation/" className="text-xs text-[#BE8C1D] font-bold hover:underline">
                  Learn about our orthopaedic consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S12 — HOW DOES A DOCTOR CHECK A LIGAMENT INJURY? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check a Ligament Injury?
          </h2>
          <div className="space-y-3">
            {[
              { num: "01", title: "Your story", desc: "The doctor asks how the injury happened, what you felt and what you can do now." },
              { num: "02", title: "Your symptoms", desc: "Pain, swelling, giving way, locking and walking problems are noted in detail." },
              { num: "03", title: "Physical examination", desc: "The doctor looks at, feels and moves your knee, comparing it with the healthy side." },
              { num: "04", title: "Stability tests", desc: "Gentle clinical stress tests check whether the joint moves too much in any direction." },
              { num: "05", title: "X-rays when needed", desc: "X-rays do not show ligaments, but rule out broken bones or bone flakes pulled off by a ligament." },
              { num: "06", title: "MRI when indicated", desc: "An MRI clearly shows soft tissues such as ligaments, meniscus and cartilage when diagnosis needs confirmation." },
              { num: "07", title: "Checking for other injuries", desc: "The doctor checks for cartilage, meniscus, nerve, or vascular vessel involvement." }
            ].map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-[#E8E5DE] flex items-start gap-4">
                <span className="font-extrabold text-[#BE8C1D] text-lg shrink-0">{step.num}</span>
                <div>
                  <h3 className="font-bold text-[#111111] text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S13 — CAN LIGAMENT INJURIES IMPROVE WITHOUT SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Ligament Injuries Improve Without Surgery?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Yes, some can. Many knee ligament injuries heal, or become steady enough for daily life, without reconstruction. This is more likely for sprains and partial tears. It is also likely for many isolated MCL injuries and many partial PCL tears. Non-surgical care may include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <p className="font-bold text-sm text-[#111111]">Physiotherapy</p>
                <p className="text-xs text-slate-600 mt-1">Targeted exercises to regain movement, balance, and muscle strength.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <p className="font-bold text-sm text-[#111111]">Activity modifications</p>
                <p className="text-xs text-slate-600 mt-1">Avoiding high-stress twisting movements while tissues heal.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <p className="font-bold text-sm text-[#111111]">Bracing</p>
                <p className="text-xs text-slate-600 mt-1">Hinged knee brace to protect side ligaments from strain.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <p className="font-bold text-sm text-[#111111]">Progress monitoring</p>
                <p className="text-xs text-slate-600 mt-1">Follow-up checks to evaluate whether joint stability is returning safely.</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Every knee is different. Please do not follow a general exercise plan from the internet without advice. If the knee keeps giving way even after good rehabilitation, a surgical opinion may help. You can learn more on our <Link to="/sports-medicine-consultation/" className="text-[#BE8C1D] font-bold hover:underline">sports medicine consultation</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* S14 — WHEN MIGHT A LIGAMENT INJURY NEED RECONSTRUCTION? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might a Ligament Injury Need Reconstruction?
          </h2>
          <p className="text-slate-700 mb-4">
            Reconstruction is not the answer for every ligament injury. A doctor may discuss it when:
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <span><strong>The knee is very unstable:</strong> It gives way in daily life or in sport.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <span><strong>Severe complete tear:</strong> Unlikely to heal in a way that keeps the knee steady.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <span><strong>More than one ligament is injured:</strong> Surgery is frequently needed in multiligament injuries.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <span><strong>Other parts are also hurt:</strong> Concomitant meniscus tears or cartilage damage.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <span><strong>Demanding lifestyle:</strong> Pivoting sports or heavy physical labour requiring full knee confidence.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <span><strong>Symptoms continue:</strong> Instability persists despite structured physiotherapy.</span>
            </li>
          </ul>
          <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
            <h3 className="font-bold text-[#111111] text-sm mb-1">Not every complete tear needs surgery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The decision depends on the ligament, how unstable the knee is, your age, your work and sport, and how well you respond to rehabilitation. Children and teenagers need special care, because their bones are still growing and surgery can affect the growth plates.
            </p>
          </div>
        </div>
      </section>

      {/* S15 — LIGAMENT REPAIR VS LIGAMENT RECONSTRUCTION */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Ligament Repair vs Ligament Reconstruction
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-base mb-1">Ligament repair</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                In a repair, the surgeon fixes the ligament you already have. This may be possible when the ligament is in good condition, for example when it has pulled away from the bone (avulsion) and can be fixed back in place.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-base mb-1">Ligament reconstruction</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                In a reconstruction, the surgeon builds a new ligament using a graft. A graft is a piece of tendon. This is often used when the torn ligament cannot heal by itself or cannot be sewn back together.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE]">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Feature</th>
                  <th className="p-3.5">Ligament repair</th>
                  <th className="p-3.5">Ligament reconstruction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE]">
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Main purpose</td>
                  <td className="p-3.5">Fix the injured ligament so that it heals in place.</td>
                  <td className="p-3.5">Replace the injured ligament with a graft to restore stability.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Tissue used</td>
                  <td className="p-3.5">Your own ligament, often with stitches, anchors or a screw.</td>
                  <td className="p-3.5">A graft: your own tendon (autograft) or donor tendon (allograft).</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">General suitability</td>
                  <td className="p-3.5">May suit tears where the ligament is still in good shape, such as avulsions, usually soon after injury.</td>
                  <td className="p-3.5">May suit tears in the middle of a ligament that cannot heal, or injuries that are old or severe.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Limitations</td>
                  <td className="p-3.5">Not possible if the ligament is badly shredded. Some ligament ends do not heal when sewn together.</td>
                  <td className="p-3.5">Needs graft tissue. Carries graft-related risks, such as graft stretching or failure.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Rehabilitation</td>
                  <td className="p-3.5">Protected movement, then gradual strengthening, guided by the surgeon.</td>
                  <td className="p-3.5">Protected healing of the graft, then gradual strengthening. Rehabilitation is often long.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S16 — WHAT GRAFTS CAN BE USED FOR LIGAMENT RECONSTRUCTION? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Grafts Can Be Used for Ligament Reconstruction?
          </h2>
          <p className="text-slate-700 mb-6">
            A graft is a strong piece of tendon used to rebuild a ligament. There are two main kinds:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-base mb-2">Autograft: tissue from your own body</h3>
              <p className="text-xs text-slate-600 mb-3">
                Commonly harvested from the patellar tendon, hamstring tendon, or quadriceps tendon.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <p><strong>Benefits:</strong> It is your own live tissue. In young, active people, guidelines suggest autograft because graft failure rates may be lower.</p>
                <p><strong>Limitations:</strong> Needs an extra incision to harvest. The donor site can feel sore or weak during early recovery.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-base mb-2">Allograft: tissue from a donor</h3>
              <p className="text-xs text-slate-600 mb-3">
                Sterilised, processed donor tendon tissue.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <p><strong>Benefits:</strong> No harvest cut, no donor-site pain, and useful when several ligaments are being reconstructed at once.</p>
                <p><strong>Limitations:</strong> Higher graft failure rate in young, high-demand athletes. Healing takes longer, and there is a very small theoretical infection risk.</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            The best graft depends on which ligament is hurt, your age, activities, and individual knee stability needs.
          </p>
        </div>
      </section>

      {/* S17 — WHAT HAPPENS DURING LIGAMENT RECONSTRUCTION? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During Ligament Reconstruction?
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { title: "Before surgery", desc: "Detailed clinical assessment and scans. The surgeon explains the plan, risks, and recovery timeline." },
              { title: "Anaesthesia", desc: "Administered so that you remain completely pain-free and comfortable throughout the procedure." },
              { title: "Planning & joint examination", desc: "The surgeon checks joint stability and inspects for meniscus or cartilage damage using keyhole arthroscopy." },
              { title: "Repair or reconstruction", desc: "Based on tissue condition, the torn ligament is secured back to bone or rebuilt with a graft." },
              { title: "Fixing the graft", desc: "The new tendon is secured tightly into anatomical bone tunnels using specialized screws or fixation buttons." },
              { title: "Closing the wounds", desc: "Incisions are closed meticulously and dressed with sterile bandages." },
              { title: "Rehabilitation planning", desc: "Post-operative instructions, brace fitting, crutches, and physiotherapy schedule are provided." }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <h3 className="font-bold text-sm text-[#111111]">{idx + 1}. {item.title}</h3>
                <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600">
            Some operations use <Link to="/knee-arthroscopy/" className="text-[#BE8C1D] font-bold hover:underline">knee arthroscopy</Link> (small cuts and a camera), while others need open approaches. Read more on our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-bold hover:underline">surgery preparation and recovery</Link> page.
          </p>
        </div>
      </section>

      {/* S18 — BENEFITS AND RISKS OF LIGAMENT RECONSTRUCTION */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Risks of Ligament Reconstruction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-base mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Possible benefits
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li>• A steadier knee in suitable patients.</li>
                <li>• Less &ldquo;giving way&rdquo; or buckling during movement.</li>
                <li>• Support for selected sports and physical activities after rehabilitation.</li>
                <li>• Protection of remaining meniscus and cartilage from instability damage.</li>
              </ul>
              <p className="text-xs text-slate-500 mt-4 italic">Results depend on injury severity, surgical precision, and patient commitment to rehab.</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-base mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Possible risks
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Infection or wound healing delays.</li>
                <li>• Bleeding or blood clots (DVT) in the leg.</li>
                <li>• Stiffness or difficulty fully straightening the knee.</li>
                <li>• Ongoing pain or donor-site tenderness.</li>
                <li>• Graft failure or stretching.</li>
                <li>• Re-injury during high-risk pivoting.</li>
                <li>• Nerve or blood vessel irritation.</li>
                <li>• Need for further surgery.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S19 — RECOVERY AFTER LIGAMENT RECONSTRUCTION */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Ligament Reconstruction
          </h2>
          <p className="text-slate-700 mb-6">
            Recovery is different for every ligament and every operation. A simple ACL reconstruction is not the same as a multiligament operation. No fixed timeline suits everyone. Common parts of recovery include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Early recovery</p>
              <p className="text-xs text-slate-600 mt-1">Rest, elevation, ice, and gentle ankle pumps to encourage circulation.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Wound care</p>
              <p className="text-xs text-slate-600 mt-1">Keeping dressings clean and dry, reporting any redness or fever promptly.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Bracing &amp; crutches</p>
              <p className="text-xs text-slate-600 mt-1">Protecting the healing graft with prescribed weight-bearing restrictions.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-sm text-[#111111]">Physiotherapy</p>
              <p className="text-xs text-slate-600 mt-1">The cornerstone of recovery: restoring joint motion and quad activation.</p>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Combined ligament injuries can take 9 to 12 months or longer. Going too fast can stretch the graft, so patience is essential. See our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-bold hover:underline">surgery preparation and recovery</Link> guide.
          </p>
        </div>
      </section>

      {/* S20 — REHABILITATION AFTER LIGAMENT SURGERY */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Rehabilitation After Ligament Surgery
          </h2>
          <p className="text-slate-700 mb-6">
            Rehabilitation is as important as the operation itself. Its general goals are:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0" />
              <div>
                <p className="font-bold text-sm text-[#111111]">Protecting healing tissue</p>
                <p className="text-xs text-slate-600">Allowing graft vascularisation and bone incorporation without shear strain.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0" />
              <div>
                <p className="font-bold text-sm text-[#111111]">Restoring full motion</p>
                <p className="text-xs text-slate-600">Early focus on regaining full extension, followed by progressive knee bending.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0" />
              <div>
                <p className="font-bold text-sm text-[#111111]">Muscle strengthening &amp; neuromuscular balance</p>
                <p className="text-xs text-slate-600">Targeting quadriceps, hamstrings, gluteals, and calf stability.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0" />
              <div>
                <p className="font-bold text-sm text-[#111111]">Return-to-sport testing</p>
                <p className="text-xs text-slate-600">Objective criteria: limb symmetry index &gt;90%, hop tests, and mental readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
            <h2 className="text-2xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience in orthopaedic, trauma and sports injury care. His clinical practice focuses on knee arthroscopy, ACL reconstruction, ligament stabilisations, and joint reconstruction.
            </p>
            <div className="space-y-1.5 text-xs text-slate-800 mb-5">
              <p>• <strong>M.B.B.S.</strong></p>
              <p>• <strong>F.C.P.S. (Orthopedic Surgery)</strong></p>
              <p>• <strong>Certified ATLS®</strong> (Advanced Trauma Life Support)</p>
              <p>• <strong>Fellowship Arthroplasty and Joint Reconstruction</strong></p>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              He sees patients at {businessConfig.clinicName}, {businessConfig.fullAddress}.
            </p>
            <Link
              to="/about/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#BE8C1D] hover:underline"
            >
              <span>Learn More About Dr. Mazhar Rafique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* S22 — EXPLORE RELATED LIGAMENT AND SPORTS INJURY TREATMENTS */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Ligament and Sports Injury Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Sports Injury & Ligament Surgery", path: "/sports-injury-treatment/", desc: "See the full range of ligament, joint and sports injury care in one place." },
              { title: "ACL Reconstruction", path: "/acl-reconstruction/", desc: "Read in detail how a torn ACL is assessed and surgically rebuilt." },
              { title: "Knee Arthroscopy", path: "/knee-arthroscopy/", desc: "Learn how a small camera is used to evaluate and treat knee problems." },
              { title: "Meniscus Repair", path: "/meniscus-repair/", desc: "Find out about the knee's cushioning cartilage and repair techniques." },
              { title: "Sports Injury Treatment", path: "/sports-injury-treatment-lahore/", desc: "Understand care for common acute and overuse injuries in active people." },
              { title: "Sports Medicine Consultation", path: "/sports-medicine-consultation/", desc: "Discuss injury evaluation, return to activity, and conservative care." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Arrange a comprehensive evaluation for bone, joint, and trauma concerns." }
            ].map((linkItem, idx) => (
              <Link
                key={idx}
                to={linkItem.path}
                className="p-4 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block"
              >
                <h3 className="font-bold text-sm text-[#111111] mb-1">{linkItem.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{linkItem.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S23 — GET YOUR LIGAMENT INJURY CHECKED IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <h2 className="text-2xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Ligament Injury Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If your knee feels loose, painful or swollen after an injury, an orthopaedic assessment can help you understand what is happening. Many ligament injuries can be managed without surgery. Others need more detailed care. Early advice helps you choose a safe next step.
            </p>
            <div className="text-xs text-slate-600 mb-6">
              <p className="font-bold text-slate-800">Dr. Mazhar Rafique — {businessConfig.clinicName}</p>
              <p>{businessConfig.fullAddress}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — FAQS */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-2">
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
                <div key={idx} className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#111111] hover:text-[#BE8C1D] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#E8E5DE]/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LigamentReconstructionPage;