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
  Clock, 
  FileText,
  Layers,
  Zap,
  Check,
  Bandage,
  Wrench
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const BoneFractureRepairPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is bone fracture repair surgery?",
      a: "It is an operation that puts a broken bone back into the right position and holds it steady while it heals. The surgeon may use plates, screws, rods, pins or an external frame."
    },
    {
      q: "When does a broken bone need surgery?",
      a: "Surgery may be considered for unstable fractures, some displaced fractures, joint fractures, open fractures, and fractures with other injuries. Your doctor decides after an examination and imaging."
    },
    {
      q: "Do all fractures require surgical fixation?",
      a: "No. Many fractures heal well in a cast or splint. Surgery is for fractures that are unlikely to heal well without it."
    },
    {
      q: "What is ORIF surgery?",
      a: "ORIF means open reduction and internal fixation. The surgeon makes a cut, moves the bone pieces back into line and holds them with implants inside the body."
    },
    {
      q: "What are plates and screws used for?",
      a: "A plate works like a splint inside the body. Screws fix the plate to the bone or hold small bone pieces in place. They keep the bone steady while it heals."
    },
    {
      q: "What is an intramedullary nail?",
      a: "It is a metal rod placed inside the hollow centre of a long bone. It holds a break steady from the inside. It is often used for the thigh bone and shin bone but is not right for every fracture."
    },
    {
      q: "What is external fixation?",
      a: "Pins in the bone are joined to a frame outside the skin. It can be temporary until another method is used, or it can hold the bone until it heals. This depends on the injury."
    },
    {
      q: "How is the fixation method chosen?",
      a: "The surgeon considers the bone, the fracture pattern, alignment, stability, the condition of the skin and muscle, infection risk and your general health. No method is best for every fracture."
    },
    {
      q: "What happens before fracture surgery?",
      a: "The team takes your history, examines the limb, checks circulation and nerves, reviews X-rays or other scans, checks your general health, plans anaesthesia, and explains the risks and benefits. You then give consent."
    },
    {
      q: "What type of anaesthesia is used?",
      a: "It may be general anaesthesia, regional anaesthesia such as a spinal or nerve block, or a mix. The anaesthetist chooses with you based on your health and the operation."
    },
    {
      q: "Is fracture repair surgery painful?",
      a: "You will not feel pain during the operation. After surgery there is pain and swelling, and your team will help you manage it safely. Pain usually eases as healing goes on, but this varies."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, bleeding, nerve or blood vessel injury, blood clots, stiffness, ongoing pain, delayed healing, nonunion, malunion, implant problems, anaesthesia risks and the need for more surgery. Your surgeon will explain the risks that apply to you."
    },
    {
      q: "How long does bone healing take?",
      a: "It varies. It depends on the bone, the type of fracture, your age and your health. Your doctor follows your healing with examinations and X-rays. No one can promise a fixed time."
    },
    {
      q: "When can I start walking after fracture surgery?",
      a: "It depends on the bone and on how stable the fixation is. Some people must avoid putting weight on the limb for a time. Others may be allowed to put weight on it sooner. Follow your surgeon's instructions."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Many people do. Physiotherapy and exercises help restore movement and strength and reduce stiffness. Your surgeon or physiotherapist will plan this for you."
    },
    {
      q: "Do plates and screws need to be removed?",
      a: "Not always. Often they stay in place. They may be removed if they cause pain or problems. Your surgeon will advise you."
    },
    {
      q: "What happens if the fracture does not heal?",
      a: "Your doctor will look for the cause. This may include X-rays, scans and blood tests. Treatment may include better fixation, treating infection or bone grafting. Results cannot be guaranteed."
    },
    {
      q: "When can I return to work or sports?",
      a: "It depends on the fracture, the bone, your job and your recovery. Desk work may start earlier than heavy work. Sports usually come last. Get your surgeon's clearance first."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `For a non-emergency appointment, call ${businessConfig.phone} or message on WhatsApp. These numbers are for scheduled consultations at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes, for non-emergency appointment questions, you can send a message to ${businessConfig.phone} on WhatsApp.`
    },
    {
      q: "Should I use WhatsApp for a serious fracture emergency?",
      a: "No. For a serious fracture or emergency warning signs, seek immediate emergency medical care. Go to the nearest hospital emergency department or call an ambulance (Rescue 1122 in Punjab). Do not wait for an appointment or a WhatsApp reply. Warning signs include an open fracture, heavy bleeding, severe deformity, a cold or pale limb, severe numbness or weakness, or a suspected spine injury."
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Wrench className="w-3.5 h-3.5" />
              SURGICAL FRACTURE FIXATION & BONE REPAIR
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Bone Fracture Repair in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Some broken bones need surgery to bring them back into line and hold them steady. The surgeon may use plates, screws, nails or other fixation methods. The best choice depends on the fracture and on you. An orthopaedic assessment helps to find the right treatment.
            </p>

            {/* VISIBLE EMERGENCY NOTE */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] text-left mb-8 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">
                    Emergency Medical Note
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Open fractures, heavy bleeding, severe deformity or loss of circulation need immediate emergency medical attention. Go to the nearest hospital emergency department or call <strong>Rescue 1122</strong>. Do not wait for an appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#BE8C1D] hover:bg-[#a67a18] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Appointment ({businessConfig.phone})</span>
              </a>
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-3">Appointments are for scheduled, non-emergency consultations.</p>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS BONE FRACTURE REPAIR SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Bone Fracture Repair Surgery?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A fracture is a broken bone. Bone fracture repair is an operation that fixes some broken bones. The surgeon puts the bone pieces back in the right place, then holds them steady with surgical implants while your body knits the bone back together.
              </p>
              <p>
                The surgeon may use plates, screws, rods, pins or wires. These implants act like a scaffolding or internal splint. Your body still does the natural biological healing; the implants simply maintain rigid stability so that union can occur cleanly.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-sm text-[#111111] mb-1">Why Not Every Broken Bone Needs Surgery</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Many broken bones heal well in a cast or splint without surgery. Surgery is reserved for fractures that cannot heal well that way. For non-surgical casting and splints, see our <Link to="/fracture-treatment/" className="text-[#BE8C1D] underline font-medium">fracture care page</Link> or the wider <Link to="/fracture-trauma-surgery/" className="text-[#BE8C1D] underline font-medium">fracture and trauma surgery section</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02 & S03 — WHEN SURGERY IS CONSIDERED & ALIGNMENT */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Is Surgery Considered for a Broken Bone?
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• <strong>Unstable fractures:</strong> Pieces slip out of line even inside a plaster cast.</li>
                <li>• <strong>Displaced fractures:</strong> Fragments have shifted too far apart to knit properly.</li>
                <li>• <strong>Joint fractures:</strong> Break disrupts the smooth articular cartilage surface.</li>
                <li>• <strong>Open fractures:</strong> Bone breaks through skin, requiring urgent debridement.</li>
                <li>• <strong>Associated injuries:</strong> Damage to nearby major nerves or blood vessels.</li>
                <li>• <strong>Nonunions:</strong> Fractures that have failed to heal after conservative care.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Is Bone Alignment Important?
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <p><strong>Alignment:</strong> Restoring the normal anatomical axis so the limb bears weight evenly.</p>
                <p><strong>Displacement:</strong> When broken ends shift, bones heal crookedly unless realigned.</p>
                <p><strong>Stability:</strong> Mechanical stability allows capillaries to bridge the fracture gap.</p>
                <p className="text-slate-600">
                  If a bone heals out of line, it is called a <em>malunion</em>, which can cause permanent joint stiffness, premature arthritis, and chronic pain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04 — WHICH FRACTURES NEED SURGICAL FIXATION? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Which Fractures May Need Surgical Fixation?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-2">High-Risk Fracture Types</h3>
              <ul className="space-y-1.5 text-slate-600">
                <li>• Long bone breaks that are unstable or multi-fragmentary.</li>
                <li>• Intra-articular fractures where joint congruence is broken.</li>
                <li>• Comminuted fractures broken into numerous fragments.</li>
                <li>• Open compound fractures with cutaneous breakdown.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-2">Common Surgical Locations</h3>
              <ul className="space-y-1.5 text-slate-600">
                <li>• Thigh bone (femur) and shin bone (tibia).</li>
                <li>• Hip fractures in elderly patients (urgent fixation/replacement).</li>
                <li>• Displaced forearm and wrist fractures (<Link to="/hand-wrist-surgery/" className="text-[#BE8C1D] underline">hand & wrist surgery</Link>).</li>
                <li>• Ankle and foot fractures (<Link to="/foot-ankle-surgery/" className="text-[#BE8C1D] underline">foot & ankle surgery</Link>).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S05, S06, S07 & S08 — SURGICAL TECHNIQUES (ORIF, PLATES, NAILS, EXTERNAL FIXATION) */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S05 – S08 — FIXATION METHODS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Are Broken Bones Surgically Repaired?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-base text-[#111111] mb-1">What Is ORIF Surgery?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                <strong>Open Reduction and Internal Fixation:</strong> The surgeon makes an incision to see the bone directly, realigns the broken ends with instruments (reduction), and fixes them with implants under the skin (internal fixation).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-base text-[#111111] mb-1">Plates and Screws</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                Specialized titanium or stainless steel plates are contoured along the outer cortex of the bone and secured with locking screws. They compress bone fragments tightly, particularly around joint surfaces.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-base text-[#111111] mb-1">Intramedullary Nails (Rods)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                For long bones like the femur or tibia, a strong metal rod is placed down the hollow internal marrow canal. Locking screws at top and bottom prevent bone shortening or rotation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-base text-[#111111] mb-1">External Fixation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                Metal pins enter the bone through small skin stabs and connect to a rigid carbon-fibre frame outside the body. Used for severe open fractures, polytrauma, or temporary &quot;damage control.&quot; See <Link to="/orthopaedic-trauma-surgery/" className="text-[#BE8C1D] underline">trauma surgery</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 — HOW A FIXATION METHOD IS CHOSEN (COMPARISON TABLE) */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Is a Fracture Fixation Method Chosen?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            No single method is best for every fracture. The surgeon selects the approach based on bone anatomy, soft-tissue condition, and patient health:
          </p>
          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Method</th>
                    <th className="p-3 sm:p-4 font-bold">What It Is</th>
                    <th className="p-3 sm:p-4 font-bold">Often Considered For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Plates and screws</td>
                    <td className="p-3 sm:p-4">Metal plate contoured to bone exterior and screwed in place</td>
                    <td className="p-3 sm:p-4">Breaks near joints, forearm bones, and peri-articular fractures</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Intramedullary nail</td>
                    <td className="p-3 sm:p-4">Strong metal rod inserted inside the hollow bone canal</td>
                    <td className="p-3 sm:p-4">Shaft fractures of the thigh bone (femur) and shin bone (tibia)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">External fixation</td>
                    <td className="p-3 sm:p-4">Pins in bone attached to an external scaffolding frame</td>
                    <td className="p-3 sm:p-4">Open fractures, severe soft-tissue injury, or temporary hold</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Wires and pins</td>
                    <td className="p-3 sm:p-4">Thin smooth or threaded metal wires (K-wires)</td>
                    <td className="p-3 sm:p-4">Small bones in fingers, toes, or pediatric fracture stabilization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S10, S11, S12, S13 — PRE-OP, PREP, SURGICAL PROCEDURE & ANAESTHESIA */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S10 & S11</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Preparing for Fracture Repair Surgery
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Pre-op review: medical history, blood work, ECG, and scan planning.</li>
                <li>• Fasting instructions: strict stopping of food and drink before anaesthesia.</li>
                <li>• Medications: review blood thinners and diabetes medications with team.</li>
                <li>• Home preparation: arrange help for two-handed tasks and transport.</li>
              </ul>
              <p className="text-xs text-slate-600 mt-2">
                Learn more on our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] underline">surgery preparation and recovery guide</Link>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12 & S13</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                During Surgery & Anaesthesia
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• <strong>Anaesthesia:</strong> General (fully asleep) or regional (spinal/nerve block).</li>
                <li>• <strong>Fluoroscopic control:</strong> Real-time intra-operative X-rays guide placement.</li>
                <li>• <strong>Rigid fixation:</strong> Implants applied to achieve anatomical stability.</li>
                <li>• <strong>Monitoring:</strong> Post-op recovery checks limb warmth, pulses, and comfort.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S14 & S15 — BENEFITS AND RISKS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Possible Benefits of Fracture Surgery
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Restores precise anatomical alignment of broken bone fragments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Provides rigid mechanical stability to support uninterrupted bone healing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Levels out damaged articular joint surfaces to reduce post-traumatic arthritis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Allows earlier safe joint motion, reducing long-term muscle atrophy and stiffness.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S15</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Risks of Bone Fracture Repair
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Wound or deep bone infection (higher in open fractures).</li>
                <li>• Bleeding, bruising, or localized haematoma.</li>
                <li>• Rare nerve or blood vessel stretch or injury.</li>
                <li>• Blood clots (deep vein thrombosis) in lower limb injuries.</li>
                <li>• Delayed union or nonunion requiring revision bone grafting.</li>
                <li>• Implant irritation, loosening, or subsequent hardware removal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S16, S17, S18 & S19 — AFTER SURGERY, HEALING, WEIGHT BEARING & NONUNION */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S16 & S17</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Post-Op Care & Bone Healing
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Keep surgical dressings dry and undisturbed. Limb elevation minimizes post-operative throbbing and swelling. Bone consolidates gradually from soft callus into hard bone, reshaped over months.
              </p>
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900 leading-relaxed">
                <strong>When to Seek Immediate Help:</strong> Fever, foul-smelling wound discharge, sudden calf pain, cold pale digits, or acute shortness of breath.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S18 & S19</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Weight Bearing & Nonunion Concerns
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                Weight bearing is strictly guided by your surgeon: some fractures permit early protected stepping, while others demand 6–12 weeks of non-weight-bearing with crutches.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                If a fracture fails to bridge (<em>nonunion</em>) due to smoking, infection, or poor blood flow, further surgical intervention like revision plating and autologous bone grafting may be indicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S20 & S21 — REHABILITATION & RETURNING TO LIFE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Is Rehabilitation Important?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Internal fixation protects the bone, but guided physiotherapy protects your joints and muscles. Early controlled motion prevents joint contractures, restores range of motion, and rebuilds muscular stamina.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Returning to Normal Activities
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• <strong>Work:</strong> Light office work possible in 1–3 weeks; heavy lifting requires solid radiological union.</li>
                <li>• <strong>Driving:</strong> Permitted only when pain-free emergency braking can be executed reliably.</li>
                <li>• <strong>Sports:</strong> Contact sports delayed until bone remodelling is mature and cleared by your surgeon.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S22 — ABOUT DR. MAZHAR RAFIQUE & RELATED SERVICES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F2] rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#BE8C1D]/10 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
                <h2 className="text-2xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  <strong>Dr. Mazhar Rafique</strong> is a Consultant Orthopaedic Surgeon at BNI - Bashir NeuroSpine Institute in Shadman, Lahore, with over 10 years of experience in orthopaedic fracture fixation, trauma, and joint reconstruction.
                </p>
                <div className="text-xs text-slate-700 space-y-1 mb-4">
                  <p>• <strong>M.B.B.S.</strong></p>
                  <p>• <strong>F.C.P.S. (Orthopedic Surgery)</strong></p>
                  <p>• <strong>Certified ATLS®</strong> (Advanced Trauma Life Support)</p>
                  <p>• <strong>Fellowship in Arthroplasty and Joint Reconstruction</strong></p>
                </div>
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#BE8C1D] hover:text-[#936A12]"
                >
                  <span>Learn More About Dr. Mazhar Rafique</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Related Fracture & Surgical Care Services
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Fracture & Trauma Surgery", path: "/fracture-trauma-surgery/", desc: "Overview of comprehensive fracture and trauma services." },
              { title: "Fracture Care", path: "/fracture-treatment/", desc: "Casts, splints, and conservative treatment for un-displaced fractures." },
              { title: "Orthopaedic Trauma Surgery", path: "/orthopaedic-trauma-surgery/", desc: "Complex reconstruction for high-energy polytrauma accidents." },
              { title: "Foot & Ankle Surgery", path: "/foot-ankle-surgery/", desc: "Surgical fixation for ankle, hindfoot, and metatarsal fractures." },
              { title: "Hand & Wrist Surgery", path: "/hand-wrist-surgery/", desc: "Operative fixation for wrist fractures, distal radius, and scaphoid." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Thorough pre-operative planning and imaging reviews." }
            ].map((srv, idx) => (
              <Link
                key={idx}
                to={srv.path}
                className="p-4 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block"
              >
                <h4 className="font-bold text-sm text-[#111111] mb-1">{srv.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S23 — CLINIC LOCATION & FINAL CTA */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S23</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Arrange a Fracture Surgery Consultation in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you have a fracture that may need a surgical opinion, you can arrange an orthopaedic consultation with Dr. Mazhar Rafique. He will examine you, review your X-rays or CT scans, and discuss your options clearly.
            </p>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-900 max-w-xl mx-auto mb-6 text-left">
              <strong>Emergency Warning Signs:</strong> For open fractures, heavy bleeding, severe deformity, or cold limbs, seek immediate emergency care (Rescue 1122). Please do not wait for an appointment or a WhatsApp response.
            </div>

            <div className="text-xs text-slate-600 mb-6">
              <p className="font-bold text-slate-800">Dr. Mazhar Rafique — {businessConfig.clinicName}</p>
              <p>{businessConfig.fullAddress}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {businessConfig.phone}</span>
              </a>
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Visit our <Link to="/contact/" className="text-[#BE8C1D] underline">contact page</Link> for additional appointment information.
            </p>
          </div>
        </div>
      </section>

      {/* B5 — FAQS ACCORDION */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              PATIENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Bone Fracture Repair
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

export default BoneFractureRepairPage;
