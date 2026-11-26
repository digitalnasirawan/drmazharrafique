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
  Siren, 
  AlertCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const OrthopaedicTraumaSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What is orthopaedic trauma surgery?',
      a: 'It is surgery to treat serious injuries to the bones and joints, such as complex fractures, open fractures and joint injuries. Not every trauma injury needs surgery.'
    },
    {
      q: 'What injuries are treated in orthopaedic trauma care?',
      a: 'They include broken bones, joint dislocations, injuries to ligaments and cartilage, and damage to the tissues around bones. Nerves and blood vessels near the injury may also be hurt and need urgent care.'
    },
    {
      q: 'What is a high-energy injury?',
      a: 'It is an injury caused by a very strong force, such as a road accident or a fall from a height. These injuries often damage more than one part of the body, so emergency assessment is important.'
    },
    {
      q: 'What is a complex fracture?',
      a: 'It is a break that is harder to treat. The bone may be in many pieces, the break may reach a joint, the bone may have moved, or the tissues, nerves or blood vessels may be hurt as well.'
    },
    {
      q: 'What is an open fracture?',
      a: 'It is a broken bone with a wound near it that reaches the bone. Sometimes the bone can be seen, and sometimes it cannot. It is an emergency, so get medical care at once.'
    },
    {
      q: 'Why are open fractures emergencies?',
      a: 'Germs can get through the wound to the bone and cause infection. Early care, such as antibiotics and cleaning the wound, is used to lower this risk. Almost all open fractures need an operation.'
    },
    {
      q: 'What happens when several bones are broken?',
      a: 'Doctors treat the most urgent problems first, such as breathing and bleeding. Then they plan treatment for each injury. Several kinds of doctors may work together. The plan depends on each person’s injuries and health.'
    },
    {
      q: 'Can trauma damage nerves or blood vessels?',
      a: 'Yes. Signs can include numbness, weakness, loss of movement, or a cold or pale limb. These signs need emergency assessment. Do not wait to see if they go away.'
    },
    {
      q: 'How are serious bone injuries diagnosed?',
      a: 'Doctors usually examine the person and use X-rays. CT scans, MRI scans and blood tests may be used in some cases. The tests depend on the injury.'
    },
    {
      q: 'Do all trauma injuries need surgery?',
      a: 'No. Many fractures heal without surgery. Surgery may be considered for unstable fractures, open fractures, some joint injuries or injuries to nerves or blood vessels. The choice is made person by person.'
    },
    {
      q: 'What is staged trauma surgery?',
      a: 'It means treating an injury in more than one operation. A bone may be held steady first and treated in a more lasting way later. It is used only for some people. It is not needed for everyone.'
    },
    {
      q: 'Why is temporary fixation sometimes used?',
      a: 'It can hold a broken bone steady for a short time when a person or the tissues around the bone are not ready for a longer operation. It is not always needed.'
    },
    {
      q: 'What are the possible risks?',
      a: 'Risks include infection, bleeding, nerve or blood vessel injury, blood clots, compartment syndrome, delayed healing, nonunion, malunion, joint stiffness, ongoing pain, implant problems and further surgery. Your surgeon should explain the risks that apply to you.'
    },
    {
      q: 'How long does recovery take?',
      a: 'It depends on the injury, the treatment and the person. Recovery can be long, and no one can give a fixed time before treatment. Your doctor will explain what to expect for your case.'
    },
    {
      q: 'What complications can happen after trauma?',
      a: 'Infection, slow or failed bone healing, a bone healing in a crooked position, stiff joints, ongoing pain and implant problems can happen. Tell your doctor early if you have fever, more pain, redness, swelling or fluid from a wound.'
    },
    {
      q: 'Will I need physiotherapy?',
      a: 'Many people with serious injuries do. Physiotherapy helps to restore movement, strength and walking. Your surgeon and physiotherapist will plan it for your injury.'
    },
    {
      q: 'When can I return to walking or work?',
      a: 'This depends on the injury and on your healing. Some people must avoid putting weight on the limb for a while. Do not return to walking on the limb, or to work, until your doctor tells you it is safe.'
    },
    {
      q: 'Why are follow-up visits important?',
      a: 'They let the doctor check the wound, the bone and the joint, look at X-rays and find problems early. Keep your visits even if you feel well.'
    },
    {
      q: 'How can I book an appointment with Dr. Mazhar Rafique?',
      a: `For non-emergency consultation or follow-up, call ${businessConfig.phone} or message on WhatsApp. Consultations and follow-up visits take place at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: 'Can I contact the clinic through WhatsApp?',
      a: 'Yes, for non-emergency appointment inquiries. Please do not use WhatsApp for an acute accident or trauma emergency.'
    },
    {
      q: 'Should I use WhatsApp for a serious trauma emergency?',
      a: 'No. In a serious emergency, such as a major accident, an open fracture, heavy bleeding, a cold or pale limb, loss of circulation, a suspected neck or back injury or multiple major injuries, get immediate emergency medical care. Call Rescue 1122 or go to the nearest hospital emergency department. Do not wait for an appointment or a WhatsApp reply.'
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Siren className="w-3.5 h-3.5 text-[#BE8C1D]" />
              COMPLEX FRACTURES & ORTHOPAEDIC TRAUMA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Orthopaedic Trauma Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Serious accidents can cause complex bone and joint injuries. Some people have several injuries at the same time. Treatment may include emergency assessment, stabilising the injury, surgery and rehabilitation. Follow-up orthopaedic care depends on the injury and on each person’s needs.
            </p>

            {/* VISIBLE EMERGENCY WARNING NOTE */}
            <div className="p-4 sm:p-5 rounded-xl bg-rose-50/70 border border-rose-200 text-left mb-8 max-w-2xl mx-auto shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-bold text-rose-950 uppercase tracking-wider mb-1">
                    Emergency Medical Note
                  </h2>
                  <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <strong>Emergency:</strong> Serious accidents, open fractures, heavy bleeding, loss of circulation or multiple major injuries need immediate emergency medical attention. Call <strong>Rescue 1122</strong> or go directly to the nearest hospital emergency department. Do not wait for an appointment.
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
            <p className="text-xs text-slate-500 mt-3">
              Appointments are for scheduled, non-emergency consultations and post-trauma follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS ORTHOPAEDIC TRAUMA SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Orthopaedic Trauma Surgery?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Orthopaedic trauma surgery is specialized surgical care for serious injuries to bones, joints and soft tissues. It handles high-energy fractures, joint dislocations, open fractures with skin wounds, and multiple injuries from sudden physical trauma.
              </p>
              <p>
                Not every trauma patient needs surgery. Some broken bones heal safely with non-surgical splints or casts. Surgery is chosen when bone pieces have shifted, joints are disrupted, or the limb is unstable. For non-surgical fracture management, see our <Link to="/fracture-treatment/" className="text-[#BE8C1D] underline font-medium">fracture care page</Link> or the <Link to="/fracture-trauma-surgery/" className="text-[#BE8C1D] underline font-medium">fracture and trauma surgery overview</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — WHAT CAUSES SERIOUS BONE AND JOINT INJURIES? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Causes Serious Bone and Joint Injuries?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Serious bone and joint injuries occur when a strong mechanical force overwhelms the strength of the skeletal system and surrounding soft tissues:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#BE8C1D]" /> Road Traffic Collisions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Motorcycle crashes, car collisions and pedestrian impacts transfer immense kinetic energy to limbs, pelvis and spine.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#BE8C1D]" /> Falls from Heights
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Falls from roofs, construction scaffolds, ladders or stairs can produce axial compression fractures of the heels, spine and hips.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#BE8C1D]" /> Industrial & Crush Incidents
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Heavy machinery, collapsed masonry or workplace machinery crushing limbs with severe soft tissue damage.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#BE8C1D]" /> Severe Sports & Recreational Trauma
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    High-speed collisions or awkward landings causing high-grade joint dislocations and multi-ligament disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03 & S04 — HIGH ENERGY & COMPLEX FRACTURES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* S03 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is a High-Energy Injury?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A high-energy injury happens when an extreme force impacts the body. Unlike a simple slip and fall, high-energy forces do not just break a bone — they cause severe shockwaves through surrounding muscles, tendons, skin, blood vessels and nerves.
              </p>
              <p>
                In polytrauma, multiple organ systems or body regions are injured simultaneously (such as a chest injury, abdominal injury, head injury and fractured thigh bone). Immediate hospital emergency care stabilizes vital functions before complex definitive limb reconstructions begin.
              </p>
            </div>
          </div>

          {/* S04 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Makes a Fracture Complex?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A fracture is termed complex when treatment requires specialized surgical planning and execution beyond a standard single-line bone break:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>Comminuted pattern:</strong> The bone is shattered into three or more pieces rather than two clean halves.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>Intra-articular extension:</strong> The fracture line runs directly into a smooth joint surface (e.g. knee, ankle, wrist, hip).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>Significant displacement:</strong> Bone ends have shifted, shortened, or rotated significantly away from natural alignment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>Severe soft-tissue disruption:</strong> Crushed muscle, compromised skin flaps, or compartment pressure risks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>Associated neurovascular compromise:</strong> Major nerves or arteries stretched, compressed, or torn by sharp bone fragments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S05 & S06 — MULTIPLE BONES & OPEN FRACTURES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* S05 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Happens When Several Bones Are Injured?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                When a patient sustains multiple fractures, medical teams follow the fundamental principle of <em>"life before limb"</em>. Breathing, heart function, oxygenation, and internal bleeding control come first.
              </p>
              <p>
                Once life-threatening injuries are stabilized, orthopaedic surgeons assess each injured bone. Fractures of large bones like the femur (thigh bone) or pelvis can cause substantial internal blood loss, making early temporary or definitive stabilization a vital step in saving the patient's physiology.
              </p>
            </div>
          </div>

          {/* S06 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S06</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is an Open Fracture?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                An open fracture (formerly called a compound fracture) occurs when the broken bone pierces the skin from the inside, or an external object cuts down to the bone. The bone may be visibly sticking out, or there may simply be a small puncture wound near the fracture site.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h3 className="font-bold text-sm text-amber-900 mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700" /> Open Fractures Are Surgical Emergencies
                </h3>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Bacteria and environmental dirt can enter directly into the bone marrow space, creating a severe risk of deep bone infection (osteomyelitis). Open fractures require immediate hospital admission, urgent intravenous antibiotics, sterile wound irrigation and surgical debridement in the operating theatre. Read more about surgical techniques on our <Link to="/bone-fracture-repair/" className="text-[#BE8C1D] underline font-semibold">bone fracture repair page</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07, S08, S09 — JOINTS, SOFT TISSUES & NERVES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* S07 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S07</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Can Trauma Damage a Joint?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                When a fracture extends into a joint (such as the knee, ankle, hip, shoulder or elbow), the smooth cartilage layer is split apart. If the cartilage heals with even a small "step-off" or uneven ridge, abnormal friction will wear the joint down over time, leading to early post-traumatic arthritis.
              </p>
              <p>
                Surgeons prioritize anatomical joint reconstruction — meticulously lining up the cartilage surface under direct visualization or fluoroscopy so the joint can glide smoothly and preserve long-term mobility.
              </p>
            </div>
          </div>

          {/* S08 & S09 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Soft Tissues Matter
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Bones cannot heal without their surrounding soft tissue envelope. Muscles, periosteum and blood vessels deliver oxygen, growth factors and blood supply.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Severe swelling, blistered skin or contaminated wounds mean surgeons must carefully time internal metalwork so the incision does not break down or become infected.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Nerve & Blood Vessel Damage
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Bone fragments can pinch, stretch or lacerate major arteries or nerves. A pale, pulseless or numb limb is an immediate vascular emergency requiring urgent limb revascularization.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Doctors routinely test peripheral pulses, capillary refill, sensation and motor movement at every stage of trauma evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S10 — EMERGENCY SIGNS & COMPARTMENT SYNDROME */}
      <section className="py-12 border-b border-[#E8E5DE] bg-rose-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> SECTION S10: CRITICAL EMERGENCY WARNING SIGNS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Orthopaedic Trauma an Emergency?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              If you or someone around you has sustained an orthopaedic injury and has any of the following 12 red-flag warning signs, do not wait for an outpatient appointment. Seek immediate emergency care at a major hospital trauma centre or call <strong>Rescue 1122</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 mb-6">
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Bone visible through a wound or active bleeding near a break</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Limb that is cold, pale, blueish, or has no detectable pulse</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe, rapidly worsening numbness, tingling, or paralysis</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe limb deformity, unnatural twisting, or abnormal joint angles</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Excruciating pain completely out of proportion to the injury</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Firm, wood-like tightness and extreme pain on passive stretch (Compartment Syndrome)</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Suspected pelvic, spinal, or neck injury with inability to move</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Loss of consciousness, head impact, dizziness, or confusion</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Shortness of breath, chest pain, or coughing blood after blunt trauma</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Multiple simultaneous broken limbs from a high-speed collision</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Complete inability to bear weight with rapid expansive swelling</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Signs of circulatory shock: cold clammy sweat, racing pulse, faintness</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-100/70 border border-rose-300 text-xs sm:text-sm text-rose-950 leading-relaxed">
              <strong>Compartment Syndrome Alert:</strong> When intense swelling builds inside closed muscle compartments (often in the calf or forearm), pressure cuts off capillary blood supply. Without an urgent surgical release (fasciotomy), permanent muscle death and nerve damage can develop within hours. If pain worsens relentlessly despite high analgesia, go to an emergency room immediately.
            </div>
          </div>
        </div>
      </section>

      {/* S11, S12, S13 — ASSESSMENT, IMAGING & MULTIDISCIPLINARY CARE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* S11 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Happens During an Emergency Trauma Assessment?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Trauma assessment follows standardized Advanced Trauma Life Support (ATLS®) protocols:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">1. Primary Survey (A-B-C-D-E)</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Airway, Breathing, Circulation, Disability (neurological status), and Exposure. Life-threatening hemorrhages and chest injuries are addressed before limb splinting.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">2. Secondary Survey</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    A head-to-toe examination inspecting all bones, joints, spine, nerve function and peripheral arterial circulation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">3. Urgent Limb Realignment & Splinting</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Grossly deformed limbs are gently realigned and splinted to relieve pain, restore circulation, and prevent further skin tension.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* S12 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Are Complex Bone Injuries Diagnosed?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-sm text-[#111111] mb-1">Digital X-Rays</h3>
                <p className="text-xs text-slate-600">
                  Standard orthogonal views (AP and lateral) covering the joint above and the joint below the injury site.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-sm text-[#111111] mb-1">Computed Tomography (CT)</h3>
                <p className="text-xs text-slate-600">
                  High-resolution 3D CT reconstruction maps shattered joint fragments and pelvic fractures for exact surgical planning.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-sm text-[#111111] mb-1">MRI Scans & Angiography</h3>
                <p className="text-xs text-slate-600">
                  Reserved for soft-tissue ligament evaluation, occult fractures, or CT angiography when arterial disruption is suspected.
                </p>
              </div>
            </div>
          </div>

          {/* S13 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Why Several Doctors Work Together in Trauma Care
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Severe trauma requires coordinated care from a multidisciplinary hospital team:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Emergency physicians:</strong> Lead resuscitation, airway control and stabilization.
              </li>
              <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Orthopaedic surgeons:</strong> Reconstruct broken bones, joints, and stable skeletal frames.
              </li>
              <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Vascular surgeons:</strong> Repair torn blood vessels to restore limb circulation.
              </li>
              <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Plastic surgeons:</strong> Provide skin flaps and soft-tissue coverage over exposed bone.
              </li>
              <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Intensivists & Anaesthetists:</strong> Manage ICU care, fluid resuscitation, and safe pain relief.
              </li>
              <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Physiotherapists:</strong> Begin safe progressive motion as soon as bones are stable.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* S14, S15, S16, S17 — SURGICAL PLANNING & STAGED FIXATION */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* S14 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Surgery Considered After Serious Trauma?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Surgery is indicated when non-surgical methods cannot hold the bone in an acceptable anatomical position, or when prolonged bed rest would cause severe general health complications (such as pneumonia or blood clots in elderly patients with hip breaks).
              </p>
              <p>
                Common surgical indications include unstable pelvic rings, displaced femoral shaft fractures, intra-articular breaks of the tibial plateau, open fractures, and associated vascular injuries.
              </p>
            </div>
          </div>

          {/* S15 — STAGED DAMAGE CONTROL ORTHOPAEDICS */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S15</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Why Are Some Trauma Operations Done in Stages?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                In high-energy polytrauma or severe open fractures, performing a lengthy 5-hour internal fixation surgery immediately can cause a dangerous "second hit" to the body's immune system, leading to multi-organ failure. Surgeons often employ <strong>Damage Control Orthopaedics (DCO)</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-1">Stage 1: Urgent Stabilization</span>
                  <p className="text-xs sm:text-sm text-slate-700">
                    A quick, minimally invasive external fixator frame spans the fracture, stops bone movement, and relieves tension while the patient is stabilized in the ICU and soft-tissue swelling subsides.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-1">Stage 2: Planned Definitive Fixation</span>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Once swelling has settled, skin wrinkles return, and the patient is physiologically stable (usually 7–14 days later), definitive internal fixation with anatomical plates and screws is safely completed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* S16 & S17 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16 & S17</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Are Serious Fractures Stabilised & What Are the Goals?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Fixation choices depend on the bone, fracture anatomy, soft tissues, and patient profile:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm my-3">
                <li className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">Internal Fixation (ORIF)</strong>
                  Plates and screws placed directly onto bone surfaces to restore perfect joint anatomy.
                </li>
                <li className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">Intramedullary Nails</strong>
                  Strong metal rods locked inside long bone hollows (femur, tibia) allowing early weight bearing.
                </li>
                <li className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">External Fixators</strong>
                  Rigid external frames connected via percutaneous pins for emergency stability or open fractures.
                </li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-[#E8E5DE]">
                <h3 className="font-bold text-sm text-[#111111] mb-1">Core Goals of Orthopaedic Trauma Surgery:</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  1) Restore limb length, alignment and rotation; 2) Anatomically reconstruct damaged joint surfaces; 3) Provide rigid or elastic stability to permit early joint motion; 4) Minimize wound infection and protect delicate neurovascular bundles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S18 — RISKS & COMPLICATIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S18</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Are the Risks of Orthopaedic Trauma Surgery?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Major trauma carries potential complications from both the initial injury and the surgical reconstruction. Experienced orthopaedic teams take rigorous precautions to prevent and manage these:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1">Fracture-Related Infection</strong>
                Bacteria entering via open wounds or surgery. Managed with sterile technique, prophylactic IV antibiotics, and early wound debridement.
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1">Nonunion & Delayed Union</strong>
                Bone healing fails to occur or takes much longer due to lost blood supply or smoking. May require revision fixation or bone grafting.
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1">Malunion</strong>
                The bone heals in a slightly rotated or shortened position, which may affect joint mechanics and walking posture.
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1">Joint Stiffness & Post-Traumatic Arthritis</strong>
                Scar tissue or cartilage wear after intra-articular fractures. Early guided physiotherapy helps keep joints flexible.
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1">Blood Clots (DVT & PE)</strong>
                Immobility and pelvic/leg fractures raise blood clot risks. Prevented with blood thinners and compression pumps.
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1">Implant Irritation or Failure</strong>
                Plates or screws may loosen, break, or feel prominent under thin skin once bones heal, sometimes requiring removal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S19, S20, S21 — RECOVERY & REHABILITATION */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S19, S20 & S21</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Recovery and Rehabilitation After Orthopaedic Trauma
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Healing from serious bone trauma is a step-by-step journey that takes weeks to months. The biological repair of bone (callus formation and bone remodeling) takes time, and your surgeon tracks your progress with serial X-rays.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Early Phase (0–6 Weeks)</h3>
                  <p className="text-slate-600">
                    Wound care, swelling control, gentle protected range of motion, and non-weight bearing or partial weight bearing using crutches or a walker.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Strengthening (6–12 Weeks)</h3>
                  <p className="text-slate-600">
                    Progressive weight bearing as X-rays confirm early bone bridging. Targeted muscle activation exercises with physiotherapy guidance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Long-Term Remodeling (3–12 Mo)</h3>
                  <p className="text-slate-600">
                    Gradual return to work, independent walking, stair climbing, and recreational activities. For recovery tips, visit our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] underline font-medium">surgical recovery page</Link>.
                  </p>
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
                  <strong>Dr. Mazhar Rafique</strong> is an experienced Consultant Orthopaedic Surgeon in Lahore with over a decade of dedicated clinical practice in complex fracture management, joint reconstruction, and trauma care.
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
              Explore Related Orthopaedic Services:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/fracture-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Fracture Care
                </h4>
                <p className="text-xs text-slate-600">Non-surgical casting, splints, reduction and follow-up.</p>
              </Link>
              <Link to="/bone-fracture-repair/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Bone Fracture Repair
                </h4>
                <p className="text-xs text-slate-600">ORIF, plates, screws, nails, and surgical fixation.</p>
              </Link>
              <Link to="/fracture-trauma-surgery/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Fracture & Trauma Surgery
                </h4>
                <p className="text-xs text-slate-600">Comprehensive category overview of fracture care.</p>
              </Link>
              <Link to="/foot-ankle-paediatric-orthopaedics/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Foot, Ankle & Paediatrics
                </h4>
                <p className="text-xs text-slate-600">Category hub for lower limb and children's bones.</p>
              </Link>
              <Link to="/foot-ankle-surgery/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Foot & Ankle Surgery
                </h4>
                <p className="text-xs text-slate-600">Complex ankle fractures, Achilles repair, and fusion.</p>
              </Link>
              <Link to="/orthopaedic-consultation/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Orthopaedic Consultation
                </h4>
                <p className="text-xs text-slate-600">In-person clinical evaluation and second opinions.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S23 — FINAL CTA SECTION */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S23</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Arrange an Orthopaedic Trauma Follow-Up in Lahore
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            If you have had a serious fracture, trauma surgery or joint injury and need expert follow-up care, X-ray evaluation or a second surgical opinion, contact our clinic at BNI - Bashir NeuroSpine Institute, Lahore.
          </p>

          <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] text-xs sm:text-sm text-slate-700 max-w-xl mx-auto mb-8 text-left">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <div>
                <strong>Clinic Location:</strong> {businessConfig.fullAddress}
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
            Please note: For active accidents or urgent trauma emergencies, call Rescue 1122 or proceed to a hospital emergency room immediately.
          </p>
        </div>
      </section>

      {/* B5 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">B5 — FAQS & TRUST</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Orthopaedic Trauma
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Clear, realistic answers about serious bone injuries, emergency warnings and recovery.
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
