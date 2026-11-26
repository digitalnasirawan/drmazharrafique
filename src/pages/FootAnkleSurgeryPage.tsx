import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  ChevronDown, 
  AlertTriangle, 
  Stethoscope, 
  Award, 
  Check, 
  Activity, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const FootAnkleSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What is foot and ankle surgery?',
      a: 'It is an operation on the foot or ankle to treat an injury, a joint problem or a deformity. It is only used for some people. Many problems improve without surgery.'
    },
    {
      q: 'What conditions may need foot or ankle surgery?',
      a: 'Examples are unstable or out-of-place broken bones, ankles that keep giving way, significant tendon tears, painful deformities and joints damaged by arthritis. A doctor decides after examining you.'
    },
    {
      q: 'Do all ankle sprains need surgery?',
      a: 'No. Nearly all sprains heal without surgery. Even a fully torn ligament can heal with protection and a rehabilitation plan. Surgery is considered only if the ankle stays unstable after proper treatment.'
    },
    {
      q: 'What causes chronic ankle instability?',
      a: 'It often follows earlier sprains that left the ligaments loose and the muscles and balance weak. Some foot shapes, such as high arches, can add to the problem.'
    },
    {
      q: 'Can ankle instability improve without surgery?',
      a: 'Often, yes. Strengthening, balance training and a brace help many people. Surgery is usually kept for those who do not improve after a proper trial.'
    },
    {
      q: 'When does an ankle fracture need surgery?',
      a: 'When the bones have moved out of place, the ankle is unstable or the joint is out of position. A stable break with the bones still in line may heal in a cast or boot.'
    },
    {
      q: 'Do all foot fractures require surgery?',
      a: 'No. Many heal with a boot, cast or special shoe. Surgery may be considered when bones have moved, the joint surface is damaged, the break is unstable or the skin is broken.'
    },
    {
      q: 'What is an Achilles tendon injury?',
      a: 'It is damage to the thick tendon at the back of the ankle that joins the calf to the heel. It can be irritated, partly torn or fully torn.'
    },
    {
      q: 'Can Achilles tendon injuries heal without surgery?',
      a: 'Some can. Small partial tears often do well without surgery, and some complete tears are also treated this way. Others are repaired by surgery. The choice depends on the tear, your age, activity and work.'
    },
    {
      q: 'What is ankle arthroscopy?',
      a: 'It is keyhole surgery. A small camera and tools go into the joint through tiny cuts. It is used only for selected problems and is not right for every ankle.'
    },
    {
      q: 'What is ankle ligament reconstruction?',
      a: 'It is an operation to tighten or rebuild loose ankle ligaments. It is considered for some people whose ankle keeps giving way after proper rehabilitation. It is not needed for most sprains.'
    },
    {
      q: 'Can foot deformities be treated without surgery?',
      a: 'Often, yes. Wider shoes, insoles, exercises and activity changes help many people. Surgery may be discussed if pain and trouble walking continue.'
    },
    {
      q: 'When might arthritis need surgery?',
      a: 'When pain and stiffness stay bad despite non-surgical care and daily life is affected. Options such as fusion or joint replacement are discussed in selected people.'
    },
    {
      q: 'What tests are needed before surgery?',
      a: 'It depends on you and the operation. Usually the surgeon reviews your X-rays and any other scans. A health check and sometimes blood tests may also be done.'
    },
    {
      q: 'What type of anaesthesia is used?',
      a: 'It can be general anaesthesia, or numbing of the leg with or without light sleep. The anaesthetist explains what is planned and why before surgery.'
    },
    {
      q: 'What are the possible risks?',
      a: 'They include infection, bleeding, nerve injury, blood clots, stiffness, ongoing pain, wound problems, slow healing and the need for more surgery. Your surgeon will explain which matter most for you.'
    },
    {
      q: 'How long does recovery take?',
      a: 'It is different for everyone. It depends on the problem, the operation and your health. Some people recover in weeks. Others take many months.'
    },
    {
      q: 'When can I walk after surgery?',
      a: 'Your surgeon decides this for you. Some people must keep weight off the foot for a time. Others can walk in a boot earlier. Follow your own plan.'
    },
    {
      q: 'Will I need physiotherapy?',
      a: 'Many people do. Physiotherapy helps restore movement, strength and balance. Your surgeon will say what you need.'
    },
    {
      q: 'When can I return to work or sports?',
      a: 'It depends on your job, the injury and how you heal. Desk work may restart sooner than heavy or standing work. Return to sport only after your doctor or physiotherapist says it is safe.'
    },
    {
      q: 'How can I book an appointment with Dr. Mazhar Rafique?',
      a: `Call ${businessConfig.phone} or send a message on WhatsApp to schedule an assessment at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: 'Can I contact the clinic through WhatsApp?',
      a: `Yes. You can inquire about an appointment on WhatsApp at ${businessConfig.phone}. For emergencies, proceed to the nearest emergency department immediately.`
    },
    {
      q: 'When is a foot or ankle injury an emergency?',
      a: 'Seek urgent emergency medical help for an open wound over a broken bone, a badly deformed foot, heavy bleeding, a cold, pale or blue foot, loss of feeling, severe pain with rapid swelling, or fever with a hot swollen joint.'
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Activity className="w-3.5 h-3.5 text-[#BE8C1D]" />
              FOOT & ANKLE SURGICAL ASSESSMENT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Foot and Ankle Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Foot and ankle injuries can make walking, balance and daily life hard. Many problems get better with rest, exercises, supports and other non-surgical care. Some broken bones, ligament injuries, tendon problems and foot deformities may need a surgeon's assessment. The right treatment depends on what is wrong and what you need from your foot and ankle.
            </p>

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
            <p className="text-xs text-slate-500 mt-3">
              Consultations and evaluations at BNI - Bashir NeuroSpine Institute, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* S01 & S02 — WHAT IS FOOT & ANKLE SURGERY & HOW IT WORKS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Foot and Ankle Surgery?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Foot and ankle surgery encompasses surgical interventions on the lower leg, ankle joint, hindfoot, midfoot, and forefoot. Orthopaedic surgeons use these procedures to repair broken bones, stabilize loose ligaments, mend torn tendons, correct structural deformities, and treat severe joint arthritis.
              </p>
              <p>
                Most patients with foot or ankle symptoms do not require surgery. Conservative care—including bracing, custom orthotics, targeted physical therapy, and guided rest—is always evaluated first. Surgery is considered only when conservative methods fail to relieve symptoms or when acute structural disruption requires immediate surgical stabilization.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Do the Foot and Ankle Work?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                The ankle and foot operate together during every step of the human gait cycle. The true ankle joint (talocrural joint) permits upward and downward bending. Immediately below, the subtalar joint accommodates uneven terrain by tilting inward and outward.
              </p>
              <p>
                Dozens of robust ligaments tether bones firmly, while powerful tendons—such as the Achilles, posterior tibial, and peroneals—convert calf muscular contraction into propulsion. When any link in this kinetic chain is damaged, walking mechanics and balance are directly compromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03 & S04 — LIGAMENT INJURIES & SPRAIN GRADES TABLE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03 & S04</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Can Ankle Ligaments Be Injured?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              An ankle sprain occurs when an awkward twist stretches or tears stabilizing ligaments—most commonly the anterior talofibular ligament (ATFL) on the outer ankle. Ligament injuries are graded based on tissue disruption:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E5DE] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold text-slate-800">Sprain Grade</th>
                    <th className="p-3.5 font-bold text-slate-800">What Happens to Ligament</th>
                    <th className="p-3.5 font-bold text-slate-800">Usual Treatment Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE]">
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Grade 1 (Mild)</td>
                    <td className="p-3.5 text-slate-700">Microscopic ligament stretching without macroscopic tear. Mild swelling and tenderness.</td>
                    <td className="p-3.5 text-slate-700">Protection, rest, ice, elevation, and early gentle movement as pain permits.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Grade 2 (Moderate)</td>
                    <td className="p-3.5 text-slate-700">Partial ligament tear with moderate swelling, bruising, and painful weight bearing.</td>
                    <td className="p-3.5 text-slate-700">Supportive ankle brace or removable boot, followed by structured physical therapy.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Grade 3 (Severe)</td>
                    <td className="p-3.5 text-slate-700">Complete rupture of one or more ligaments. Significant swelling, ecchymosis, and instability.</td>
                    <td className="p-3.5 text-slate-700">Short immobilization in a walking boot, followed by aggressive proprioceptive rehabilitation.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              <strong>Do sprains need surgery?</strong> Nearly all acute ankle sprains heal without surgery. Even full Grade 3 tears usually heal robustly when protected and followed by physiotherapy. Surgery is reserved for patients who develop persistent chronic instability.
            </p>
          </div>

          {/* S05 — CHRONIC ANKLE INSTABILITY */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Why Does an Ankle Keep Giving Way? (Chronic Instability)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                When an acute sprain does not heal in a tight anatomical position, or when neuromuscular reflexes (proprioception) remain impaired, the ankle becomes mechanically loose. The person experiences frequent rolling or a feeling that the ankle is untrustworthy when walking on uneven ground.
              </p>
              <p>
                If 3 to 6 months of dedicated balance retraining and peroneal strengthening fail to stop the ankle from giving way, surgical ligament reconstruction (such as the Broström-Gould procedure) may be evaluated to re-tighten the attenuated ligaments and restore mechanical stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 & S07 — ANKLE & FOOT FRACTURES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S06 & S07</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Do Broken Ankle & Foot Bones Need Surgery?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Ankle fractures involve the lateral malleolus (fibula), medial malleolus (tibia), or posterior malleolus. When bone fragments remain perfectly aligned and the talus stays centred in the mortise, healing in a below-knee cast or boot is effective (see our <Link to="/fracture-treatment/" className="text-[#BE8C1D] underline font-medium">fracture care guide</Link>).
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-sm text-[#111111] mb-1">When Fracture Surgery Is Advised:</h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                  <li><strong>Displacement or widening:</strong> The ankle mortise has shifted even 1–2 mm, which drastically increases joint contact pressures and causes post-traumatic arthritis.</li>
                  <li><strong>Bimalleolar or Trimalleolar fractures:</strong> Breaks on both sides of the joint create gross joint instability.</li>
                  <li><strong>Open fractures:</strong> The skin is broken, demanding emergency debridement and stabilization.</li>
                  <li><strong>Displaced heel (calcaneus) or talus fractures:</strong> Complex hindfoot fractures requiring anatomical plate and screw fixation to preserve walking mechanics.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S08 & S09 — ACHILLES TENDON & OTHER TENDONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Achilles Tendon Injury: Surgical vs Non-Surgical Choices
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              A rupture of the Achilles tendon often feels like an unexpected kick or pop in the back of the calf, causing sudden loss of push-off power. A clinical calf squeeze test (Thompson test) confirms whether the tendon is intact. Treatment options are balanced:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E5DE] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold text-slate-800 w-1/2">Non-Surgical Functional Bracing</th>
                    <th className="p-3.5 font-bold text-slate-800 w-1/2">Surgical Tendon Repair</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE]">
                  <tr>
                    <td className="p-3.5 text-slate-700">Immobilization in a rigid boot with heel wedges, gradually lowered over 8–10 weeks.</td>
                    <td className="p-3.5 text-slate-700">The torn tendon ends are surgically brought together and stitched securely.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-700">Zero surgical risks (no wound breakdown, no skin infection, no nerve irritation).</td>
                    <td className="p-3.5 text-slate-700">May offer a slightly lower risk of re-rupture in highly active athletic patients.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-700">Preferred for less active individuals, older adults, or those with medical risk factors.</td>
                    <td className="p-3.5 text-slate-700">Frequently discussed for competitive athletes, delayed presentations, or active laborers.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">SECTION S09: OTHER TENDON DISORDERS</span>
              <h3 className="font-bold text-sm text-[#111111] mb-1">Peroneal Tendons & Posterior Tibial Tendon</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The peroneal tendons on the outside of the ankle can slip out of their groove (subluxation) or tear, causing snapping and outer ankle pain. The posterior tibial tendon supports the arch of the foot; chronic degeneration (PTTD) can lead to adult flatfoot and progressive medial ankle pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S10 & S11 — ARTHRITIS & FOOT DEFORMITIES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S10</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Foot & Ankle Arthritis
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
                <p>
                  Severe cartilage wear from prior injuries or osteoarthritis causes chronic stiffness and grinding joint pain.
                </p>
                <p>
                  <strong>Ankle Arthrodesis (Fusion):</strong> The damaged joint surfaces are removed and bones are fused with screws into solid bone, providing durable pain relief.
                </p>
                <p>
                  <strong>Total Ankle Arthroplasty:</strong> Artificial joint replacement selected for non-labor intensive, older individuals to preserve hinge motion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Common Foot Deformities
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
                <p>
                  <strong>Bunions (Hallux Valgus):</strong> Prominent bony bump at the big toe base. When painful, corrective osteotomy realigns the metatarsal. Learn more on our <Link to="/bunions-treatment/" className="text-[#BE8C1D] underline font-medium">Bunions Treatment</Link> page.
                </p>
                <p>
                  <strong>Hammer Toes & Claw Toes:</strong> Contracted lesser toe joints causing painful corns and rubbing against footwear.
                </p>
                <p>
                  <strong>High Arch (Pes Cavus) & Flatfoot (Pes Planus):</strong> Abnormal arch shapes that place uneven strain on ligaments and tendons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S12 — RED FLAGS & EMERGENCY WARNING BOX */}
      <section className="py-12 border-b border-[#E8E5DE] bg-rose-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> SECTION S12: RED FLAGS & URGENT CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Should You See an Orthopaedic Doctor Urgently?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              While many foot issues can be scheduled routinely, certain acute trauma warning signs demand immediate emergency room medical evaluation:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 mb-6">
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Open wound with visible bone or active bleeding near a break</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Foot or toes that are cold, pale, blue, or pulseless</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Complete numbness, loss of feeling, or inability to move toes</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe, obvious bone or joint deformity with unnatural angles</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Rapidly expanding swelling with tight, shiny skin and excruciating pain</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Fever accompanied by a hot, swollen, intensely red joint</span>
              </div>
            </div>

            <p className="text-xs text-rose-900 leading-relaxed">
              If any of these red flags are present, go immediately to the nearest hospital emergency room. Do not wait for a routine clinic appointment. For elective consultations, see our <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">consultation page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S13 — DIAGNOSTIC IMAGING MATRIX TABLE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Are Foot and Ankle Problems Diagnosed?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Diagnosis begins with your medical history, clinical examination of tenderness, ligament stress tests, and observation of your standing posture and walking gait. Targeted imaging tests are ordered when indicated:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E5DE] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold text-slate-800">Diagnostic Test</th>
                    <th className="p-3.5 font-bold text-slate-800">What It Shows</th>
                    <th className="p-3.5 font-bold text-slate-800">When It Is Typically Used</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE]">
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Weight-Bearing X-Rays</td>
                    <td className="p-3.5 text-slate-700">Bone fractures, joint space narrowing, bone spurs, and structural arch alignment under gravity.</td>
                    <td className="p-3.5 text-slate-700">Initial standard test for trauma, deformities, bunions, and arthritis.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">High-Resolution Ultrasound</td>
                    <td className="p-3.5 text-slate-700">Superficial soft tissues, tendon tears, fluid collections, and dynamic tendon movement.</td>
                    <td className="p-3.5 text-slate-700">Suspected Achilles ruptures, plantar fasciitis, and peroneal tendon subluxation.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Magnetic Resonance Imaging (MRI)</td>
                    <td className="p-3.5 text-slate-700">Deep ligaments, articular cartilage defects, stress fractures, and bone marrow edema.</td>
                    <td className="p-3.5 text-slate-700">Persistent pain after sprains, osteochondral lesions of the talus, and occult fractures.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Computed Tomography (CT Scan)</td>
                    <td className="p-3.5 text-slate-700">Detailed 3D cross-sectional bony anatomy, fracture fragmentation, and joint depression.</td>
                    <td className="p-3.5 text-slate-700">Complex calcaneal, pilon, or talus fractures requiring surgical roadmap planning.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S14, S15, S16 — SURGERY CONSIDERATIONS & TYPES OF SURGERY TABLE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14 & S15</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Foot or Ankle Surgery Considered?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Surgery is considered only when non-surgical measures (rest, shoe modifications, orthotics, bracing, physical therapy) have failed to provide adequate pain relief and function, or in acute injuries where bones and joints are displaced or unstable.
              </p>
              <p>
                The surgical decision is a collaborative discussion weighing your functional expectations, overall medical health, bone quality, occupation, and commitment to postoperative rehabilitation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16: SURGICAL PROCEDURES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Types of Foot and Ankle Surgery Exist?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Educational overview of the core categories of foot and ankle surgical interventions:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E5DE] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold text-slate-800">Procedure Category</th>
                    <th className="p-3.5 font-bold text-slate-800">What It Involves</th>
                    <th className="p-3.5 font-bold text-slate-800">When It May Be Considered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE]">
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Fracture Fixation (ORIF)</td>
                    <td className="p-3.5 text-slate-700">Anatomical reduction using biocompatible plates and screws. Read about <Link to="/bone-fracture-repair/" className="text-[#BE8C1D] underline font-medium">bone fracture repair</Link>.</td>
                    <td className="p-3.5 text-slate-700">Displaced, unstable malleolar, metatarsal, or heel fractures.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Ligament Reconstruction</td>
                    <td className="p-3.5 text-slate-700">Tightening (Broström) or autograft tendon augmentation of torn lateral ligaments.</td>
                    <td className="p-3.5 text-slate-700">Chronic ankle instability refractory to dedicated physical therapy.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Tendon Repair / Transfer</td>
                    <td className="p-3.5 text-slate-700">End-to-end tendon suturing or rerouting a nearby tendon to restore lost power.</td>
                    <td className="p-3.5 text-slate-700">Acute Achilles ruptures, peroneal tears, or posterior tibial tendon dysfunction.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Ankle Arthroscopy</td>
                    <td className="p-3.5 text-slate-700">Keyhole surgery using miniature cameras and precision tools through 5mm portals.</td>
                    <td className="p-3.5 text-slate-700">Removing loose bone fragments, debriding impingement spurs, and microfracture.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Deformity Correction</td>
                    <td className="p-3.5 text-slate-700">Bone-cutting osteotomies and soft tissue releases to realign crooked bones.</td>
                    <td className="p-3.5 text-slate-700">Painful bunions, hammer toes, and severe pes cavus / flatfoot deformities.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Joint Fusion (Arthrodesis)</td>
                    <td className="p-3.5 text-slate-700">Fusing damaged joints together into solid, stable bone using internal screws.</td>
                    <td className="p-3.5 text-slate-700">End-stage osteoarthritis of the ankle, subtalar, or midfoot joints.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Total Ankle Replacement</td>
                    <td className="p-3.5 text-slate-700">Replacing worn joint cartilage surfaces with artificial metal and polyethylene implants.</td>
                    <td className="p-3.5 text-slate-700">Severe ankle arthritis in carefully selected patients wishing to preserve motion.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S17 TO S21 — BEFORE, DURING, RISKS & RECOVERY PHASES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17 TO S21</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Surgical Journey, Risks and Rehabilitation Phases
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Pre-Operative Preparation & Anaesthesia</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Thorough medical clearance, blood tests, and anesthesia consultation. Many procedures use regional nerve blocks that numb the entire leg and provide excellent postoperative pain relief for 18–24 hours, often allowing same-day discharge.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Understanding Potential Risks</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  All surgical interventions involve risks: wound infection, deep vein thrombosis (DVT), nerve numbness, delayed bone union, joint stiffness, and persistent discomfort. Surgeons take meticulous preventive steps, including sterile air flows, antibiotic prophylaxis, and blood thinners.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Phased Rehabilitation Journey</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                    <strong className="block text-[#111111] mb-1">Weeks 0–6 (Protected)</strong>
                    Strict leg elevation, splint or plaster cast, non-weight bearing with crutches, swelling management.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                    <strong className="block text-[#111111] mb-1">Weeks 6–12 (Progressive)</strong>
                    Transition to a removable walking boot, progressive partial weight bearing, guided ankle range of motion.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                    <strong className="block text-[#111111] mb-1">Months 3–6+ (Functional)</strong>
                    Weaning off boots into supportive shoes, balance retraining, muscle strengthening, and gradual sport return.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S22 — DOCTOR PROFILE & 6 RELATED SERVICES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FAF8F2] border border-[#BE8C1D]/30 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-12 h-12" />
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-700">
                <p>
                  <strong>Dr. Mazhar Rafique</strong> is an experienced Consultant Orthopaedic Surgeon in Lahore with more than 10 years of clinical and surgical expertise across joint reconstruction, arthroscopy, sports trauma, and lower extremity care at BNI - Bashir NeuroSpine Institute.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>M.B.B.S. & F.C.P.S. (Orthopaedic Surgery)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>Certified ATLS® (Advanced Trauma Life Support)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>Fellowship in Arthroplasty & Reconstruction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>BNI - Bashir NeuroSpine Institute, Shadman, Lahore</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Related Services:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/foot-ankle-paediatric-orthopaedics/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Foot, Ankle & Paediatrics
                </h4>
                <p className="text-xs text-slate-600">Category hub for adult foot & children's bones.</p>
              </Link>
              <Link to="/bunions-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Bunions Treatment
                </h4>
                <p className="text-xs text-slate-600">Hallux valgus assessment, orthotics and osteotomy.</p>
              </Link>
              <Link to="/fracture-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Fracture Care
                </h4>
                <p className="text-xs text-slate-600">Non-surgical splints, casts and fracture healing.</p>
              </Link>
              <Link to="/bone-fracture-repair/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Bone Fracture Repair
                </h4>
                <p className="text-xs text-slate-600">ORIF, plates, screws, and surgical bone fixation.</p>
              </Link>
              <Link to="/sports-injury-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Sports Injury Treatment
                </h4>
                <p className="text-xs text-slate-600">Ligament reconstruction and athletic conditioning.</p>
              </Link>
              <Link to="/orthopaedic-consultation/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Orthopaedic Consultation
                </h4>
                <p className="text-xs text-slate-600">Clinical assessment at BNI Shadman, Lahore.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S23 — FINAL CTA */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S23</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Arrange a Foot and Ankle Consultation in Lahore
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            If you have persistent foot or ankle pain, recurring sprains, tendon trouble, or a suspected broken bone, book a clinical evaluation with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute, Lahore.
          </p>

          <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] text-xs sm:text-sm text-slate-700 max-w-xl mx-auto mb-8 text-left">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <div>
                <strong>Clinic Address:</strong> {businessConfig.fullAddress}
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
          <p className="text-xs text-rose-700 font-semibold mt-4">
            Safety note: Open fractures, heavy bleeding, loss of circulation or sudden severe deformity require emergency medical attention. Please go to the nearest emergency department immediately.
          </p>
        </div>
      </section>

      {/* B5 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">B5 — FAQS & TRUST</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Foot & Ankle Surgery
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Clear, realistic answers about surgical choices, tendon care, sprains, and recovery expectations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-[#111111] hover:text-[#BE8C1D] transition-colors"
                  >
                    <span className="pr-4">{idx + 1}. {faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#BE8C1D]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK APPOINTMENT MODAL */}
      <QuickAppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </div>
  );
};
