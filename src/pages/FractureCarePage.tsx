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
  HandMetal
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const FractureCarePage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is a bone fracture?",
      a: "A fracture is a broken bone. It can be a thin crack or a complete break. Doctors use \"fracture\" and \"break\" to mean the same thing."
    },
    {
      q: "What causes broken bones?",
      a: "Falls, road accidents, sports injuries, workplace injuries and direct blows are common causes. Weaker bones, such as in osteoporosis, can break after a small fall. Repeated strain can cause stress fractures."
    },
    {
      q: "What are the symptoms of a fracture?",
      a: "Common signs are pain, swelling, bruising, tenderness, a bent or odd-looking limb, trouble moving and trouble putting weight on the limb. Some fractures are small and cause few signs, so get an unclear injury checked."
    },
    {
      q: "What is the difference between open and closed fractures?",
      a: "In a closed fracture, the skin stays whole. In an open fracture, the skin is broken, or the bone comes through the skin. Open fractures are serious because germs can get in, so they need emergency care."
    },
    {
      q: "When is a fracture an emergency?",
      a: "Get emergency help for an open fracture, heavy bleeding, severe deformity, a cold or pale limb, loss of circulation, severe numbness or weakness, a major accident, or a suspected spine injury. Go to the nearest emergency department. In Punjab, you can call Rescue 1122 on 1122."
    },
    {
      q: "How are fractures diagnosed?",
      a: "Doctors ask about the injury, examine the area, and check blood flow and nerves. They usually take X-rays. A CT scan or MRI is used only for some injuries."
    },
    {
      q: "Do all fractures need surgery?",
      a: "No. Many fractures heal with a splint, cast, brace or other non-surgical care. Surgery may be talked about when a fracture is unstable, badly displaced, open, joint-related or not healing. Your doctor will explain the choices."
    },
    {
      q: "Can a broken bone heal with a cast?",
      a: "Yes, many can. A cast holds the bone still and in a good position while it heals. Not every fracture needs a cast. The right treatment depends on the bone and the injury."
    },
    {
      q: "What is the difference between a cast and a splint?",
      a: "A splint usually covers part of the limb and leaves some room for swelling. It is often used first. A cast goes all the way around the limb and gives firmer support. A splint may later be changed to a cast, or the other way round, depending on healing."
    },
    {
      q: "What is closed reduction?",
      a: "It is a way to move a displaced bone back into a better position without surgery. Trained clinicians do it, usually with pain relief or anaesthesia. A splint or cast then holds the bone in place, and follow-up is needed."
    },
    {
      q: "Why are follow-up X-rays needed?",
      a: "X-rays show whether the bone is still lined up and whether healing is on track. They help the doctor decide if the cast, brace or plan needs to change. Not every patient needs the same number of X-rays."
    },
    {
      q: "How long does a broken bone take to heal?",
      a: "It varies. Some small bones heal in a few weeks. Others take several months or more. Age, health, the bone, the injury and following advice all matter. Your doctor can give an idea for your own injury, but no one can promise an exact time."
    },
    {
      q: "What can delay fracture healing?",
      a: "Older age, smoking or nicotine use, poor nutrition, poor blood supply, infection, some illnesses, some medicines, a more severe injury, and moving or loading the bone too soon can slow healing."
    },
    {
      q: "What is a nonunion fracture?",
      a: "A nonunion is a fracture that has not healed together, and scans show little or no progress. It needs a doctor's review. Treatment depends on the cause and may be non-surgical or surgical."
    },
    {
      q: "What is a malunion fracture?",
      a: "A malunion is a bone that healed in a crooked or wrong position. Not every malunion needs treatment. Your doctor will look at how it affects movement and use."
    },
    {
      q: "What are the possible complications?",
      a: "These include delayed healing, nonunion, malunion, infection, stiffness, nerve or blood vessel injury, blood clots in some injuries and cast problems. Many can be treated, especially when found early. Report warning signs promptly."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Not everyone does. After a cast or brace, muscles can be weak and joints stiff. Some people only need home exercises. Others do better with a physiotherapist. Your doctor will say what suits you and when to begin."
    },
    {
      q: "When can I return to work or sports?",
      a: "It depends on the fracture, your job and your sport. Desk work may restart sooner than heavy work. Sport usually returns step by step. Ask your doctor before you go back. Do not rely on pain alone to decide."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `For a non-emergency appointment, call ${businessConfig.phone} or message on WhatsApp. The clinic is at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes, for non-emergency appointment questions, you can message ${businessConfig.phone} on WhatsApp.`
    },
    {
      q: "Should I use WhatsApp for a serious fracture emergency?",
      a: "No. In a serious emergency, get immediate emergency medical care. Go to the nearest hospital emergency department or call Rescue 1122 on 1122 in Punjab. Do not wait for a WhatsApp reply or a clinic appointment. This applies to an open fracture, heavy bleeding, severe deformity, a cold or pale limb, loss of circulation, severe numbness or weakness, a major accident or a suspected spine injury."
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Bandage className="w-3.5 h-3.5" />
              BROKEN BONE ASSESSMENT & FRACTURE CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Fracture Treatment in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              A fracture means a bone has broken. It can happen after a fall, an accident or a sports injury. Many broken bones heal with a splint, a cast or a brace. Some injuries need surgery or a specialist check. Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon, helps patients in Lahore understand their injury and plan safe follow-up.
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
                    Open fractures, severe deformity, heavy bleeding or loss of circulation need immediate emergency medical attention. In Punjab, call <strong>Rescue 1122</strong> or proceed directly to an emergency department. Do not wait for an appointment.
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
            <p className="text-xs text-slate-500 mt-3">Appointments are for non-emergency care.</p>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS A BONE FRACTURE? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is a Bone Fracture?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A fracture is a broken bone. Doctors use the words &quot;fracture&quot; and &quot;break&quot; to mean the same thing.
              </p>
              <p>
                Fractures are not all the same. Some are tiny hairline cracks. Others are complete breaks, where the bone splits into two or more pieces.
              </p>
              <p>
                Think of a plastic ruler. If you bend it a little, it may crack. If you bend it too far, it snaps. Bones act in a similar way under sudden mechanical force.
              </p>
              <p>
                Treatment depends on the injury. Some fractures need only a splint or a cast. Others need closer care or surgical stabilisation. An orthopaedic doctor can examine which kind of fracture you have and determine the safest treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — COMMON CAUSES OF FRACTURES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Broken Bones?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            A bone breaks when the force exerted on it exceeds its natural load-bearing capacity. Common causes include:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Falls:</strong> Slips on wet floors, falling from a ladder, or tripping from a motorcycle.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Road Accidents:</strong> High-energy vehicular crashes resulting in serious complex breaks.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Sports Injuries:</strong> Awkward landings, heavy tackles, or sudden joint twisting.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Workplace Injuries:</strong> Heavy industrial machinery, falling objects, or scaffolding accidents.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Direct Blows:</strong> Direct forceful impact against an arm, forearm, leg, or ribs.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <strong>Weaker Bones (Osteoporosis):</strong> Thinning bones breaking easily after minor trips at home.
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] sm:col-span-2">
              <strong>Repeated Strain:</strong> Repetitive marching or running creating microscopic stress fractures.
            </div>
          </div>
        </div>
      </section>

      {/* S03 — TYPES OF BONE FRACTURES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Different Types of Bone Fractures
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            Doctors describe fractures using specific terms that guide whether conservative casting or surgery is best:
          </p>
          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Fracture Type</th>
                    <th className="p-3 sm:p-4 font-bold">What It Means in Simple Words</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Closed fracture</td>
                    <td className="p-3 sm:p-4">The bone is broken, but the overlying skin remains intact.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Open fracture</td>
                    <td className="p-3 sm:p-4">Skin is punctured or bone shows through. Needs emergency care due to high infection risk.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Non-displaced fracture</td>
                    <td className="p-3 sm:p-4">The bone is cracked or broken through, but the pieces remain perfectly aligned.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Displaced fracture</td>
                    <td className="p-3 sm:p-4">The bone fragments have shifted, separated, or rotated out of normal position.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Stable fracture</td>
                    <td className="p-3 sm:p-4">The broken ends stay in place securely and are unlikely to shift in a cast.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Unstable fracture</td>
                    <td className="p-3 sm:p-4">The pieces can easily slip out of place, often requiring internal surgical fixation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Stress fracture</td>
                    <td className="p-3 sm:p-4">Hairline cracks caused by repeated mechanical strain over time, not one single trauma.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S04 & S05 — LOCATIONS & SYMPTOMS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Which Bones Can Break?
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Wrist:</strong> Common after a fall onto an outstretched hand (FOOSH).</li>
                <li><strong>Arm:</strong> Forearm (radius/ulna) and humerus breaks.</li>
                <li><strong>Shoulder Area:</strong> Collarbone (clavicle) and proximal humerus.</li>
                <li><strong>Hip & Pelvis:</strong> Severe injuries requiring urgent hospital attention.</li>
                <li><strong>Thigh & Knee:</strong> Femur, patella, and tibia plateau fractures.</li>
                <li><strong>Ankle & Foot:</strong> See our <Link to="/foot-ankle-surgery/" className="text-[#BE8C1D] underline font-medium">foot and ankle care</Link> page.</li>
                <li><strong>Hand & Fingers:</strong> See our <Link to="/hand-wrist-surgery/" className="text-[#BE8C1D] underline font-medium">hand and wrist care</Link> page.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Common Signs of a Broken Bone
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Pain:</strong> Severe discomfort worsening with touch or motion.</li>
                <li><strong>Swelling:</strong> Rapid localized puffing up around the bone.</li>
                <li><strong>Bruising:</strong> Skin turning purple, dark, or blue.</li>
                <li><strong>Tenderness:</strong> Pinpoint tenderness directly over the bone.</li>
                <li><strong>Deformity:</strong> Visible angulation, rotation, or shortening.</li>
                <li><strong>Loss of Function:</strong> Inability to bear weight or move the limb.</li>
              </ul>
              <p className="text-xs text-slate-600 mt-2">
                <em>Note:</em> A small crack or stress fracture may cause only a dull ache. Never assume a bone is unbroken just because you can still wiggle fingers or toes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — EMERGENCY WARNING SIGNS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-rose-700 shrink-0 mt-1" />
              <div>
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">SECTION S06 — EMERGENCY WARNING SIGNS</span>
                <h2 className="text-2xl font-bold text-rose-900 mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  When Is a Fracture an Emergency?
                </h2>
                <p className="text-sm text-rose-800 leading-relaxed mb-4">
                  Get emergency medical help straight away if you see any of these signs. Go to the nearest emergency department or in Punjab call <strong>Rescue 1122</strong>:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-rose-900 mb-4">
                  <div>• Open fracture: bone through skin or deep cut near break</div>
                  <div>• Heavy bleeding that does not stop with pressure</div>
                  <div>• Severe deformity: arm or leg twisted or shortened</div>
                  <div>• Cold, pale, blue or white limb (impaired circulation)</div>
                  <div>• Absence of a radial or foot pulse below the break</div>
                  <div>• Severe numbness, tingling, or paralysis of fingers/toes</div>
                  <div>• Rapidly growing, tense swelling with excruciating pain</div>
                  <div>• Suspected neck, back, hip, or thigh bone fracture</div>
                </div>
                <p className="text-xs font-semibold text-rose-800">
                  Do not wait for a clinic appointment or a WhatsApp response in an emergency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — FIRST STEPS AFTER A SUSPECTED FRACTURE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S07</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            First Steps After a Suspected Broken Bone
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">1.</span>
              <span><strong>Get medical help:</strong> Have the injury checked by a doctor promptly. Use emergency services for warning signs.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">2.</span>
              <span><strong>Stay still:</strong> Move the injured part as little as possible. Never bear weight on a hurt leg or foot.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">3.</span>
              <span><strong>Do not straighten it:</strong> If the limb is bent, leave it as it is. Forcing it straight can sever nerves and arteries.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">4.</span>
              <span><strong>Do not push exposed bone in:</strong> Cover the wound loosely with a clean, sterile cloth.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-start gap-3">
              <span className="font-bold text-[#BE8C1D] text-base">5.</span>
              <span><strong>Do not eat or drink:</strong> Keep your stomach empty in case surgical reduction or anaesthesia is required.</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-4">
            For non-urgent consultations and second opinions, you can book an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation</Link>.
          </p>
        </div>
      </section>

      {/* S08, S09 & S10 — DIAGNOSIS, IMAGING & ALIGNMENT */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Diagnosis Steps</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Injury story, gentle physical exam, vascular and nerve function check, standard X-rays, and customized treatment planning.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Imaging Scans</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>X-Ray:</strong> First-line bone check.<br />
                <strong>CT Scan:</strong> 3D views for joint fractures.<br />
                <strong>MRI:</strong> Soft tissue and hidden stress fractures.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S10</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Why Alignment Matters</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bones heal best when fragments touch and line up. Poor alignment leads to malunion, causing chronic pain, joint stiffness, or weakness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S11 & S12 — SPLINTS AND CAST CARE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                How Do Splints Help Broken Bones?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                A splint provides non-circumferential rigid support, allowing room for swelling to expand safely in the first few days after injury. It keeps bone fragments still, relieves pain, and protects the limb until permanent casting or surgery is chosen.
              </p>
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Swelling Tip:</strong> Keep the splinted limb elevated on pillows above heart level. Never remove or re-wrap a splint without medical guidance.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Cast Care & Warning Signs
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                A plaster or fibreglass cast encircles the limb completely, immobilising the bone while it knits together.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 mb-3">
                <li>• Keep it dry: water softens plaster and breaks down skin.</li>
                <li>• Do not poke coat hangers or objects inside to scratch.</li>
                <li>• Do not walk on a cast unless approved by your doctor.</li>
              </ul>
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900 leading-relaxed">
                <strong>Contact Doctor Immediately If:</strong> The cast feels excessively tight, toes/fingers turn cold, pale or numb, severe pain increases, or a foul odour appears.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S13, S14 & S15 — NON-SURGICAL CARE, REDUCTION & WHEN SURGERY IS NEEDED */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Braces, Boots & Other Non-Surgical Options
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In selected fractures, functional braces or removable walking boots are used. They provide rigid support while permitting controlled motion in adjacent joints. Protected weight-bearing with crutches or frames ensures the bone is not overloaded prematurely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is Closed Reduction?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When a fracture has moved slightly out of place, an orthopaedic doctor can manually manipulate the fragments back into alignment without surgery. This is done with local anaesthesia, sedation, or a nerve block. Once aligned, a cast or splint is applied, and follow-up X-rays confirm positioning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S15</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Does a Broken Bone Need Surgery?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                Surgery is considered when a fracture cannot heal safely in a cast—such as unstable fractures that keep shifting, intra-articular breaks disrupting smooth joint surfaces, open fractures, or nerve damage.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold mt-3">
                <Link to="/bone-fracture-repair/" className="text-[#BE8C1D] hover:underline">
                  Learn about Bone Fracture Repair (ORIF) &rarr;
                </Link>
                <Link to="/orthopaedic-trauma-surgery/" className="text-[#BE8C1D] hover:underline">
                  Learn about Orthopaedic Trauma Surgery &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S16, S17, S18, S19 — FOLLOW-UP, HEALING, FACTORS & COMPLICATIONS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Are Follow-Up Visits Important?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Follow-up X-rays confirm the bone has not slipped out of line inside the cast as swelling subsides. Your doctor checks skin integrity, assesses early callus formation, and decides when active motion can commence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                How Does a Broken Bone Heal?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Bone is living tissue. Healing begins with a haematoma (blood collection), followed by soft callus formation, mineralisation into hard bone callus, and gradual bone remodelling over months.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S18 & S19</span>
            <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Factors Affecting Healing & Potential Complications
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700 mb-4">
              <div className="p-3 rounded-lg bg-white border border-[#E8E5DE]">
                <strong>Delayed Union:</strong> Bone healing slower than typical timelines.
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#E8E5DE]">
                <strong>Nonunion:</strong> Bone fails to bridge; may require surgical bone grafting.
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#E8E5DE]">
                <strong>Malunion:</strong> Bone heals in an improper or crooked rotation.
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Factors like smoking, unmanaged diabetes, poor nutrition, and premature weight-bearing significantly delay healing. For persistent concerns about slow bone union, you can <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">arrange an orthopaedic consultation</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S20 & S21 — REHABILITATION & RETURNING TO ACTIVITIES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Is Rehabilitation Important?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Immobilisation weakens muscles and causes joint stiffness. Rehabilitation gently restores range of motion, rebuilds strength, and restores balance safely.
              </p>
              <Link to="/surgery-preparation-recovery/" className="text-xs font-semibold text-[#BE8C1D] hover:underline">
                Explore recovery guidance &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Can You Return to Normal Activities?
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Work:</strong> Desk work may resume in 1–2 weeks; manual labour requires bone consolidation.</li>
                <li><strong>Driving:</strong> Only when you can control the vehicle safely and emergency-brake painlessly.</li>
                <li><strong>Sports:</strong> Contact and impact sports require full radiological healing clearance.</li>
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
                  <strong>Dr. Mazhar Rafique</strong> has more than 10 years of experience in orthopaedic, trauma and sports injury care, practising at {businessConfig.clinicName} in Shadman, Lahore.
                </p>
                <div className="text-xs text-slate-700 space-y-1 mb-4">
                  <p>• <strong>M.B.B.S.</strong></p>
                  <p>• <strong>F.C.P.S. (Orthopedic Surgery)</strong> / FCPS Trauma and Orthopaedic Surgery</p>
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
              Related Fracture & Limb Services
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Fracture & Trauma Surgery", path: "/fracture-trauma-surgery/", desc: "Overview of comprehensive fracture and injury management." },
              { title: "Bone Fracture Repair", path: "/bone-fracture-repair/", desc: "Surgical fixation using anatomical plates, screws, and rods." },
              { title: "Orthopaedic Trauma Surgery", path: "/orthopaedic-trauma-surgery/", desc: "Care for complex polytrauma, pelvic breaks, and open fractures." },
              { title: "Foot & Ankle Surgery", path: "/foot-ankle-surgery/", desc: "Care for ankle fractures, sprains, and foot bone injuries." },
              { title: "Hand & Wrist Surgery", path: "/hand-wrist-surgery/", desc: "Treatment for wrist fractures, broken fingers, and tendon injuries." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "In-depth clinical examination, imaging review, and treatment plans." }
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
              Arrange a Fracture Care Consultation in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you have a fracture, or you are worried about how a bone is healing, you can arrange an orthopaedic consultation with Dr. Mazhar Rafique. Please bring any existing X-rays, scan reports, and a list of your medicines.
            </p>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-900 max-w-xl mx-auto mb-6 text-left">
              <strong>Emergency Reminder:</strong> For open fractures, heavy bleeding, cold limbs, or severe trauma, seek immediate emergency medical care (Rescue 1122). Do not wait for a clinic appointment or WhatsApp reply.
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
              Visit our <Link to="/contact/" className="text-[#BE8C1D] underline">contact page</Link> for additional location details.
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
              Frequently Asked Questions About Fracture Care
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

export default FractureCarePage;
