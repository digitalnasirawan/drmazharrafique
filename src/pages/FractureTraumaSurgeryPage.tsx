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
  Flame,
  Info,
  Bandage
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const FractureTraumaSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is a bone fracture?",
      a: "A fracture is a broken bone. It can be a small crack or a break into several pieces. Fractures can happen in any bone."
    },
    {
      q: "What is orthopaedic trauma?",
      a: "Orthopaedic trauma means a sudden injury to the bones, joints or the tissues around them, such as after a fall or an accident. Some of these injuries are serious and affect more than one part of the body."
    },
    {
      q: "What are the common causes of fractures?",
      a: "Common causes are falls, road accidents, sports injuries, work injuries and direct blows. Bones can also break more easily in people with weak bones, such as in osteoporosis. Repeated stress can cause stress fractures."
    },
    {
      q: "What are the symptoms of a broken bone?",
      a: "Common signs are pain, swelling, bruising, a limb that looks out of shape, trouble moving the limb, and trouble putting weight on it. Some fractures are less obvious, so an injury that does not settle should be checked."
    },
    {
      q: "What is the difference between open and closed fractures?",
      a: "In a closed fracture, the skin is not broken. In an open fracture, the skin is broken near the fracture, and bone may show through the wound. Open fractures are serious because of the risk of infection and need urgent care."
    },
    {
      q: "When is a fracture an emergency?",
      a: "Seek emergency medical care straight away for an open wound with bone showing, heavy bleeding, severe deformity, a cold, pale or blue limb, severe numbness or weakness, a severe crush injury, a suspected neck or back injury, quickly growing swelling with severe pain, or injuries after a major accident. Do not wait for a routine appointment."
    },
    {
      q: "How are fractures diagnosed?",
      a: "A doctor asks how the injury happened, examines the area, and checks blood flow and nerves. An X-ray is usually the first test. Other scans are used only when they are needed."
    },
    {
      q: "Do all fractures need surgery?",
      a: "No. Many fractures heal with a cast, splint or brace and regular follow-up. Surgery is considered only for some fractures, such as unstable, some displaced, some joint and open fractures."
    },
    {
      q: "Can a broken bone heal with a cast?",
      a: "Often, yes. A cast holds the bone in the right position while it heals. Whether a cast is enough depends on the bone, the type of fracture and your health. Your doctor will check progress during follow-up."
    },
    {
      q: "When might fracture surgery be needed?",
      a: "Surgery may be considered when a cast or splint cannot keep the bone steady, when the bone has moved out of position, when a break reaches a joint, for open fractures, or when other injuries are present. Your age, health and daily needs are also considered."
    },
    {
      q: "What is bone fracture repair?",
      a: "Bone fracture repair is surgery that moves a broken bone back into position and holds it steady while it heals. The surgeon may use plates, screws, rods or other devices. Not every fracture needs this."
    },
    {
      q: "What is orthopaedic trauma surgery?",
      a: "It is surgical care for serious or complex bone and joint injuries. This may include breaks that reach a joint, several broken bones, or problems after a major injury. Some patients need care from more than one team."
    },
    {
      q: "What are plates and screws used for?",
      a: "Plates and screws hold the pieces of a broken bone together in the correct position while the bone heals. Some patients keep them after healing, and some have them removed. Your surgeon will advise what applies to you."
    },
    {
      q: "How long does bone healing take?",
      a: "Healing time is different for each person. It depends on the bone, the type of fracture, your age and health, and how well you follow advice. No fixed time suits everyone, so your doctor will check your progress."
    },
    {
      q: "What can delay fracture healing?",
      a: "Healing may be slower with an open or severe fracture, infection, poor blood supply, smoking, diabetes, weak bones, or using the limb too early. Missing follow-up visits can also delay the discovery of a problem."
    },
    {
      q: "What are the possible complications?",
      a: "Possible complications include delayed healing, a bone that does not heal (nonunion), healing in a poor position (malunion), infection, stiffness, nerve or blood vessel injury, and blood clots. Your doctor will explain the risks for your injury."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Many people benefit from physiotherapy after a fracture, to restore movement and strength. Your doctor will tell you if you need it and when to start."
    },
    {
      q: "When can I return to daily activities?",
      a: "This depends on the bone, the injury and your job or daily tasks. Most people return step by step. Please ask your doctor before you put weight on the limb, drive, lift or play sport."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call the clinic on ${businessConfig.phone} or send a WhatsApp message to arrange a non-emergency consultation at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can message on WhatsApp to discuss non-emergency appointment scheduling. For emergencies, please call Rescue 1122 or proceed immediately to an emergency hospital.`
    },
    {
      q: "Should I use WhatsApp for a serious fracture emergency?",
      a: "No. For a serious injury or any emergency warning sign, get immediate emergency medical care. Go to the nearest emergency department or call Rescue 1122 in Punjab. Do not wait for a WhatsApp reply or a clinic appointment."
    }
  ];

  return (
    <div className="bg-[#FAF8F2] text-slate-800 font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Bandage className="w-3.5 h-3.5" />
              FRACTURE CARE & ORTHOPAEDIC TRAUMA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Fracture & Trauma Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              A broken bone or a serious injury can make it hard to move and to do daily tasks. Many fractures heal without surgery, using a cast, splint or brace and regular check-ups. More serious or unstable injuries may need surgical care. For non-emergency concerns, you can call or message the clinic in Lahore to arrange an orthopaedic assessment.
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
                    Serious injuries, open fractures, severe deformity, heavy bleeding or loss of circulation need immediate emergency medical attention. In Punjab, call <strong>Rescue 1122</strong> or go directly to the nearest emergency department. Do not wait for a clinic appointment or a WhatsApp reply.
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
            <p className="text-xs text-slate-500 mt-3">Both appointment buttons are for routine, non-emergency consultations.</p>
          </div>
        </div>
      </section>

      {/* S01 — UNDERSTANDING FRACTURES AND ORTHOPAEDIC INJURIES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Understanding Fractures and Orthopaedic Injuries
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-base text-[#111111] mb-2">What Is a Fracture?</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A fracture is a broken bone. The bone may have a small crack, or it may break into several pieces. Some fractures are easy to see, while others are hairline and hard to notice without imaging.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-base text-[#111111] mb-2">What Is Orthopaedic Trauma?</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Orthopaedic trauma means a sudden injury to the bones, joints or the soft tissues around them. A fall, a road accident or a hard blow can cause it, affecting mobility, walking, and daily self-care.
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Bones and joints work together. A broken bone near a joint may also damage the joint cartilage. Nearby muscles, nerves and blood vessels can also be hurt. That is why a proper medical check matters. For an overview of all care areas, visit our <Link to="/services/" className="text-[#BE8C1D] underline font-medium">services overview</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — WHAT CAUSES BROKEN BONES? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Broken Bones?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            Bones are resilient living tissue, but they break when excessive physical force hits them. Common causes include:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-4">
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Falls:</strong> A slip on a wet surface, a fall from a height, or a motorcycle spill.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Road Traffic Accidents:</strong> High-impact crashes causing multiple fractures and soft tissue trauma.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Sports Injuries:</strong> Awkward landings, heavy collisions, or severe joint twisting forces.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Workplace Injuries:</strong> Heavy falling objects, industrial machinery, or construction falls.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Direct Blows:</strong> Sudden violent impact to an arm, leg, or facial bone.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Weak Bones (Osteoporosis):</strong> Fragile bones breaking easily after minor everyday trips.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] sm:col-span-2">
              <strong>Repeated Stress:</strong> Continuous repetitive force over time leading to microscopic stress fractures.
            </div>
          </div>
        </div>
      </section>

      {/* S03 — COMMON TYPES OF BONE FRACTURES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Types of Bone Fractures
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            Doctors classify fractures in specific medical terms to determine whether a cast, splint, or surgical fixation is required:
          </p>
          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Fracture Type</th>
                    <th className="p-3 sm:p-4 font-bold">What It Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Closed fracture</td>
                    <td className="p-3 sm:p-4">The bone is broken, but the overlying skin remains intact.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Open fracture</td>
                    <td className="p-3 sm:p-4">Skin is broken near the fracture; bone may protrude. High infection risk; needs urgent surgery.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Non-displaced fracture</td>
                    <td className="p-3 sm:p-4">The bone is cracked or broken through, but the pieces remain in anatomical alignment.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Displaced fracture</td>
                    <td className="p-3 sm:p-4">The broken bone fragments have shifted, rotated, or separated out of alignment.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Comminuted fracture</td>
                    <td className="p-3 sm:p-4">The bone shatters into three or more pieces, often from high-energy impact.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Stress fracture</td>
                    <td className="p-3 sm:p-4">Hairline cracks developing gradually from repetitive mechanical loading or sudden training increases.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S04 & S05 — WHICH BONES BREAK & SIGNS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Which Bones Can Break?
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Wrist & Forearm:</strong> Common after falling on an outstretched hand (FOOSH).</li>
                <li><strong>Arm & Shoulder:</strong> Broken collarbone (clavicle) or humerus from direct blows.</li>
                <li><strong>Hip & Pelvis:</strong> Severe injuries in elderly patients requiring hospital admission.</li>
                <li><strong>Thigh (Femur):</strong> The body&apos;s longest bone; breaking it involves heavy force.</li>
                <li><strong>Knee & Lower Leg:</strong> Patella, tibia (shin) and fibula fractures.</li>
                <li><strong>Ankle & Foot:</strong> Twisting ankle breaks, metatarsal and toe fractures.</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Common Signs of a Fracture
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Pain:</strong> Intense, sharp pain worsening with touch or motion.</li>
                <li><strong>Rapid Swelling:</strong> Swelling puffing up within minutes or hours.</li>
                <li><strong>Bruising:</strong> Extensive purple, blue, or dark discolouration.</li>
                <li><strong>Deformity:</strong> An arm, leg, or finger visibly bent or shortened.</li>
                <li><strong>Inability to Bear Weight:</strong> Inability to step on a hurt leg or foot.</li>
                <li><strong>Point Tenderness:</strong> Sharp tenderness directly over the bone.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — WHEN IS A FRACTURE AN EMERGENCY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-rose-700 shrink-0 mt-1" />
              <div>
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">SECTION S06 — CRITICAL GUIDANCE</span>
                <h2 className="text-2xl font-bold text-rose-900 mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  When Is a Fracture an Emergency?
                </h2>
                <p className="text-sm text-rose-800 leading-relaxed mb-4">
                  Some injuries cannot wait for a clinic appointment. Go to the nearest hospital emergency department straight away, or in Punjab call <strong>Rescue 1122</strong>, if you see any of these warning signs:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-rose-900 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>An open wound with bone showing or deep laceration near break.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>Heavy or continuous bleeding that does not stop with pressure.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>A limb that is badly bent, twisted, or severely shortened.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>Loss of blood flow: cold, pale, bluish, or grey hand or foot.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>Severe numbness, tingling, or complete loss of feeling.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>A severe crush injury or suspected spine/neck trauma.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>Rapidly expanding tense swelling with excruciating pain.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span>Suspected broken hip or thigh bone in an elderly person.</span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-rose-800">
                  This website and our appointment numbers are for non-emergency consultations only. Do not wait for a WhatsApp reply in an emergency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — WHAT TO DO AFTER A SUSPECTED FRACTURE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S07</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Should You Do After a Suspected Fracture?
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">1.</span>
              <span><strong>Get medical help:</strong> Seek emergency care if warning signs exist, or be checked as soon as possible.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">2.</span>
              <span><strong>Keep the injured area still:</strong> Support the limb gently in the most comfortable resting position.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">3.</span>
              <span><strong>Do not try to straighten it:</strong> Forcing a bent limb straight can lacerate blood vessels and nerves.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">4.</span>
              <span><strong>Do not push exposed bone in:</strong> Cover the wound lightly with a clean cloth.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">5.</span>
              <span><strong>Do not eat or drink:</strong> You may require surgical reduction or anaesthesia shortly after arrival.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">6.</span>
              <span><strong>Do not drive yourself:</strong> Ask a family member or ambulance service to transport you safely.</span>
            </div>
          </div>
        </div>
      </section>

      {/* S08 & S09 — HOW DOCTORS CHECK & SCANS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                How Does a Doctor Check a Broken Bone?
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>1. History:</strong> Understanding how the injury occurred and your general medical background.</li>
                <li><strong>2. Examination:</strong> Checking for swelling, skin tenting, wounds, and pinpoint tenderness.</li>
                <li><strong>3. Neurovascular check:</strong> Testing pulses, capillary refill, skin warmth, and sensation.</li>
                <li><strong>4. Radiographs (X-rays):</strong> Standard views to confirm fracture lines and alignment.</li>
                <li><strong>5. Planning:</strong> Determining non-surgical casting vs surgical fixation.</li>
              </ol>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Will You Need an X-Ray, CT Scan or MRI?
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>X-Ray:</strong> The essential initial diagnostic tool for identifying bone breaks and displacement.</li>
                <li><strong>CT Scan:</strong> 3D bone mapping for complex, shattered (comminuted), or intra-articular fractures.</li>
                <li><strong>MRI Scan:</strong> Evaluates soft tissues, ligaments, tendons, and occult stress fractures.</li>
              </ul>
              <p className="text-xs text-slate-600 mt-3">
                Scans are chosen carefully based on clinical necessity to avoid unnecessary costs and radiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S10, S11, S12, S13 — TREATMENT PATHWAYS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S10</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Can a Broken Bone Heal Without Surgery?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Yes. Many fractures heal reliably without surgery. Splints and plaster or fibreglass casts hold bone ends still while your body forms new bone. If pieces have shifted slightly, a doctor can perform a closed reduction to set them back in line. Learn more on our <Link to="/fracture-treatment/" className="text-[#BE8C1D] underline font-medium">fracture care page</Link>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S11 & S12</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Might a Fracture Need Surgery?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Surgery is indicated when a cast cannot maintain bone position safely—such as unstable fractures, severely displaced fragments, breaks extending into joint cartilage, or open wounds.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Surgeons use internal fixation with titanium plates, screws, or intramedullary rods to steady the bone so it heals correctly. Read more on our <Link to="/bone-fracture-repair/" className="text-[#BE8C1D] underline font-medium">bone fracture repair page</Link>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is Orthopaedic Trauma Surgery?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                Orthopaedic trauma surgery addresses complex, high-energy polytrauma injuries sustained in road accidents or falls. It involves multi-fragment joint reconstructions, external frame stabilization, and multidisciplinary care.
              </p>
              <Link to="/orthopaedic-trauma-surgery/" className="text-xs font-semibold text-[#BE8C1D] hover:underline">
                Explore Orthopaedic Trauma Surgery &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S14, S15, S16, S17 — FOLLOW-UP, COMPLICATIONS, HEALING & REHAB */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Is Fracture Follow-Up Important?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Bone treatment does not end when the cast is applied or the operation concludes. Follow-up visits ensure the bone has not slipped out of line, the cast fits properly as swelling recedes, and healing is progressing normally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S15</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Possible Complications
              </h2>
              <ul className="space-y-1 text-xs text-slate-700">
                <li><strong>Delayed Union:</strong> Bone healing slower than typical timelines.</li>
                <li><strong>Nonunion:</strong> Bone fails to knit together; may require revision surgery.</li>
                <li><strong>Malunion:</strong> Bone heals in an imperfect or crooked alignment.</li>
                <li><strong>Joint Stiffness:</strong> Loss of range of motion during immobilisation.</li>
                <li><strong>Deep Vein Thrombosis:</strong> Blood clots in lower limb veins.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                How Long Does a Bone Take to Heal?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Healing timelines vary widely. Small finger bones may heal in 4 to 6 weeks, while major leg or thigh bones take several months. Factors like diabetes, smoking, poor nutrition, and premature weight-bearing can prolong recovery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Is Rehabilitation Essential?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                A healed bone is only half the battle. Muscles weaken and joints stiffen while resting. Guided rehabilitation restores joint movement, rebuilds muscle strength, and returns you safely to work and sports.
              </p>
              <Link to="/surgery-preparation-recovery/" className="text-xs font-semibold text-[#BE8C1D] hover:underline">
                Read surgery preparation and recovery guidance &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S18 — EXPLORE FRACTURE & TRAUMA TREATMENTS (3 CHILD HUBS) */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S18 — TREATMENT PATHWAYS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Fracture and Trauma Treatments
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Choose the dedicated guide that matches your clinical question. An orthopaedic consultation can help confirm the appropriate pathway.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>Fracture Care</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Learn how a broken bone is checked and treated without surgery. Covers clinical exams, X-rays, splints, casts, follow-up, and recovery.
                </p>
              </div>
              <Link
                to="/fracture-treatment/"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white text-xs font-semibold transition-all"
              >
                Explore Fracture Care
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>Bone Fracture Repair</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Read how surgical internal fixation (ORIF) steadies displaced broken bones with anatomical titanium plates, screws, or intramedullary rods.
                </p>
              </div>
              <Link
                to="/bone-fracture-repair/"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white text-xs font-semibold transition-all"
              >
                Explore Bone Fracture Repair
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>Orthopaedic Trauma Surgery</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Care for complex bone and joint injuries, breaks reaching inside joints, multiple broken bones, and severe road accident injuries.
                </p>
              </div>
              <Link
                to="/orthopaedic-trauma-surgery/"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white text-xs font-semibold transition-all"
              >
                Explore Orthopaedic Trauma Surgery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S19 — ABOUT DR. MAZHAR RAFIQUE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#BE8C1D]/10 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S19</span>
                <h2 className="text-2xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  <strong>Dr. Mazhar Rafique</strong> is a Consultant Orthopaedic Surgeon at BNI - Bashir NeuroSpine Institute in Lahore with more than 10 years of experience in orthopaedic, trauma and sports injury care.
                </p>
                <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE] mb-4">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Verified Professional Qualifications:</h3>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• <strong>M.B.B.S.</strong></li>
                    <li>• <strong>F.C.P.S. in Orthopaedic Surgery</strong> (also listed as FCPS Trauma and Orthopaedic Surgery)</li>
                    <li>• <strong>Certified ATLS®</strong> (Advanced Trauma Life Support)</li>
                    <li>• <strong>Fellowship in Arthroplasty and Joint Reconstruction</strong></li>
                  </ul>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  Clinical interests include fractures, orthopaedic trauma, joint injuries, sports injuries, knee and hip replacement, and arthroscopic surgery.
                </p>
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
        </div>
      </section>

      {/* S20 — RELATED ORTHOPAEDIC SERVICES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Related Orthopaedic Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Joint Replacement Surgery", path: "/joint-replacement-surgery/", desc: "Care for worn or damaged hip and knee joints, including post-traumatic arthritis." },
              { title: "Sports Injury & Ligament Surgery", path: "/sports-injury-treatment/", desc: "Treatment for acute ligament, tendon and sports-related joint injuries." },
              { title: "Shoulder, Hand & Upper Limb Surgery", path: "/upper-limb-surgery/", desc: "Care for complex fractures and disorders of the shoulder, elbow, wrist and hand." },
              { title: "Foot & Ankle Surgery", path: "/foot-ankle-surgery/", desc: "Treatment for ankle fractures, sprains, and foot bone injuries." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Comprehensive clinical assessment and diagnostic workup." }
            ].map((srv, idx) => (
              <Link
                key={idx}
                to={srv.path}
                className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block"
              >
                <h3 className="font-bold text-sm text-[#111111] mb-1">{srv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S21 — ARRANGE A CONSULTATION IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Arrange an Orthopaedic Consultation in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you have a fracture, a bone injury or an orthopaedic injury concern that is not an emergency, you can arrange a consultation with Dr. Mazhar Rafique at BNI Lahore.
            </p>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-900 max-w-xl mx-auto mb-6 text-left">
              <strong>Emergency Notice:</strong> For severe injuries, open wounds, heavy bleeding, or loss of circulation, seek immediate emergency hospital care (Rescue 1122). Please do not wait for an appointment or WhatsApp reply.
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
          </div>
        </div>
      </section>

      {/* B5 — FAQS ACCORDION */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              PATIENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Fracture and Trauma Care: Your Questions Answered
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

export default FractureTraumaSurgeryPage;
