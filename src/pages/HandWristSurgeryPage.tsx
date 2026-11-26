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

export const HandWristSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is hand and wrist surgery?",
      a: "It includes surgical treatments for bones, joints, ligaments, tendons and nerves of the hand and wrist. It is considered for fractures that have moved, cut tendons, torn ligaments, nerve entrapment, or severe long-term arthritis. It is only one part of care, and many people never need it."
    },
    {
      q: "What conditions may need hand or wrist surgery?",
      a: "Some fractures that have moved out of place, cut or torn tendons, severe ligament tears, nerve compression that does not improve with conservative care, and painful arthritis may need surgery. A doctor decides after a thorough clinical examination."
    },
    {
      q: "Do all wrist fractures need surgery?",
      a: "No. If the bones stay in good alignment, a plaster cast or rigid splint is often enough. Surgery is considered if the bones have moved, if the joint surface is shattered, or if the break is unstable."
    },
    {
      q: "What causes hand and wrist pain?",
      a: "Common causes include traumatic injuries, fractures, sprains, tendon inflammation, nerve compression, and osteoarthritis. Overuse at work or sports can also cause pain. Because causes differ, an orthopaedic check is the best way to find out."
    },
    {
      q: "What is a wrist ligament injury?",
      a: "It is a stretch or tear in one of the fibrous bands linking the small wrist bones. It often follows a fall onto an outstretched hand. It can cause pain, swelling, and a feeling that the wrist is weak, clicking, or unstable."
    },
    {
      q: "What is a hand tendon injury?",
      a: "It means a tendon that flexes or straightens a finger has been cut, torn, or strained. You may be unable to bend or straighten the fingertip. It is best to be evaluated promptly because cut tendons heal best when repaired within 1–2 weeks."
    },
    {
      q: "Can nerve problems cause hand numbness?",
      a: "Yes. A squeezed or damaged nerve causes numbness, tingling, and weakness. The compression may happen at the wrist (carpal tunnel), at the elbow (cubital tunnel), or in the neck."
    },
    {
      q: "What is carpal tunnel syndrome?",
      a: "It happens when the median nerve is compressed inside the carpal tunnel at the wrist. It causes tingling, numbness, and pain in the thumb, index, middle, and ring fingers, often worse at night."
    },
    {
      q: "Can hand arthritis improve without surgery?",
      a: "Yes. While arthritis cannot be completely cured, supportive treatments such as splints, activity modification, hand therapy, anti-inflammatory medications, and targeted injections can substantially ease discomfort."
    },
    {
      q: "How are hand and wrist problems diagnosed?",
      a: "The doctor reviews your symptom timeline, examines your wrist, checks joint stability, tests finger strength and nerve sensation, and orders imaging like X-rays or ultrasound."
    },
    {
      q: "Do I need an MRI?",
      a: "Not always. Most fractures and arthritis are clearly diagnosed on standard X-rays. An MRI is ordered selectively when ligament tears, hidden scaphoid fractures, or complex soft-tissue problems require clarification."
    },
    {
      q: "Can hand and wrist injuries improve without surgery?",
      a: "Many can. Splints, casts, rest, activity modifications, and dedicated hand therapy help a large majority of patients recover without surgery."
    },
    {
      q: "When might surgery be needed?",
      a: "Surgery may be considered for displaced fractures, acute lacerated tendons, severe ligament ruptures, progressive nerve compression with weakness, or severe joint deterioration that fails conservative care."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, joint stiffness, scar tenderness, tendon adhesions, nerve irritation, slow bone healing, and the possibility of further surgery. Your surgeon will discuss specific risks before any procedure."
    },
    {
      q: "How long does recovery take?",
      a: "Recovery depends on the tissue involved and whether surgery was performed. Simple sprains improve in weeks, while bone fractures and tendon repairs take several months to regain maximum strength."
    },
    {
      q: "Will I need a splint or cast?",
      a: "Frequently yes. A splint or cast immobilises the area to protect healing bones, repaired tendons, or injured ligaments during the initial recovery phase."
    },
    {
      q: "Is hand therapy important?",
      a: "Yes. Hand therapy exercises are crucial to regain finger flexion, reduce swelling, prevent tendon adhesions, and rebuild gripping power safely."
    },
    {
      q: "When can I return to work or daily activities?",
      a: "Light desk tasks may be possible within days or weeks. Heavy manual labour, vibrating machinery, and forceful gripping require several months of supervised rehabilitation."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} to arrange an orthopaedic evaluation with Dr. Mazhar Rafique at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can send a WhatsApp message to ${businessConfig.phone} to inquire about appointments. For an acute traumatic emergency, please go directly to a hospital emergency department.`
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Activity className="w-3.5 h-3.5" />
              HAND, WRIST & UPPER LIMB CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Hand & Wrist Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Your hands and wrists help you grip, write, lift and care for yourself every day. A problem here can make simple jobs hard. The cause may be a bone, a joint, a tendon, a ligament or a nerve. Many hand and wrist problems get better without surgery, and some need a closer look from an orthopaedic surgeon. This page explains the common problems, how they are checked and what treatment may involve.
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
          </div>
        </div>
      </section>

      {/* S01 — UNDERSTANDING THE HAND AND WRIST */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Do Your Hand and Wrist Work?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Your hand does many jobs. It holds a spoon, turns a key, writes your name and touches a phone screen. Many small parts work together to make this possible:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Bones and Joints</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your wrist contains eight small carpal bones arranged between the two forearm bones (radius and ulna) and the palm bones (metacarpals). Smooth articular cartilage caps bone ends so joints glide smoothly.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Ligaments, Tendons & Muscles</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ligaments join bone to bone to keep the wrist stable. Flexor tendons on the palm side pull fingers into a fist; extensor tendons on the back straighten them. Most power muscles sit in your forearm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — COMMON CONDITIONS OVERVIEW TABLE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Hand and Wrist Problems
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            Different hand problems often cause similar symptoms such as pain, swelling, and stiffness. The table below outlines common clinical conditions:
          </p>
          <div className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Condition</th>
                    <th className="p-3 sm:p-4 font-bold">What It Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Fractures</td>
                    <td className="p-3 sm:p-4">A broken bone in the wrist (e.g. radius or scaphoid) or fingers, usually from a fall or direct blow.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Sprains</td>
                    <td className="p-3 sm:p-4">A wrist ligament is stretched or partially torn, causing sudden swelling and painful movement.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Ligament Injuries</td>
                    <td className="p-3 sm:p-4">Complete rupture in key stabilizers (e.g. scapholunate ligament), making the wrist feel loose, weak or clicking.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Tendon Injuries</td>
                    <td className="p-3 sm:p-4">A flexor or extensor tendon is cut, torn or inflamed; the affected finger cannot bend or straighten properly.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Nerve Compression</td>
                    <td className="p-3 sm:p-4">Median or ulnar nerve is squeezed, causing numbness, tingling, and progressive weakness in grip.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Arthritis</td>
                    <td className="p-3 sm:p-4">Cartilage wear causing joint ache, morning stiffness, and bony swelling at the wrist or thumb base.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Joint Stiffness</td>
                    <td className="p-3 sm:p-4">Loss of full flexion and extension following swelling, trauma, or prolonged cast immobilisation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Other Conditions</td>
                    <td className="p-3 sm:p-4">Trigger finger (tendon sheath catching), ganglion cysts (fluid-filled lumps), and De Quervain tenosynovitis.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S03, S04 & S05 — FRACTURES, LIGAMENTS & TENDONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Hand and Wrist Fractures
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                A fracture means a broken bone. The most frequent injury is a <strong>distal radius fracture</strong> (broken wrist), typically caused by falling onto an outstretched hand (FOOSH). Another key fracture involves the <strong>scaphoid bone</strong>, which has vulnerable blood flow and can heal poorly if missed.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Undisplaced fractures heal well in a plaster cast. When bones are shifted or intra-articular surfaces are disrupted, surgical stabilization with anatomical plates and screws may be advised. Learn more on our <Link to="/fracture-treatment/" className="text-[#BE8C1D] underline font-medium">fracture care page</Link>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Wrist Ligament Injuries
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Ligaments hold the small wrist bones together in precise alignment. A major ligament injury, such as a tear of the <strong>scapholunate ligament</strong>, alters wrist kinematics and can lead to wrist collapse (SLAC wrist) and chronic pain over time if neglected.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mild sprains heal with splinting and rest. Significant or complete tears causing wrist instability may require arthroscopic evaluation or surgical ligament reconstruction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Hand Tendon Injuries: Urgent Attention Needed
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Tendons transmit muscle power to bend (flexor tendons) or straighten (extensor tendons) the fingers. Deep cuts across the palm or wrist can completely sever these cords.
              </p>
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Time Sensitivity:</strong> Lacerated flexor tendons retract into the palm. They must be evaluated and repaired by an orthopaedic surgeon promptly, ideally within 1 to 2 weeks, before muscle contraction and scar tissue make primary repair impossible.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S06, S07 & S08 — NERVES & ARTHRITIS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S06 & S07</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Nerve Problems & Carpal Tunnel Syndrome
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Three main nerves supply the hand: the <strong>median nerve</strong> (thumb, index, middle fingers), the <strong>ulnar nerve</strong> (little finger and half ring finger), and the <strong>radial nerve</strong> (back of the hand).
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Carpal tunnel syndrome occurs when the median nerve is compressed at the wrist. For complete details on symptoms, splinting, and decompression surgery, see our dedicated <Link to="/carpal-tunnel-release/" className="text-[#BE8C1D] underline font-medium">carpal tunnel release page</Link>.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Can Arthritis Affect Your Hand and Wrist?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Yes. Osteoarthritis commonly affects the base of the thumb (CMC joint) and the finger joints. Inflammatory rheumatoid arthritis frequently attacks wrist joints and tendon sheaths.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Initial care focuses on custom splinting, pain control, activity adjustments, and therapeutic injections. For refractory cases, surgical options include joint fusion (arthrodesis) or joint replacement (arthroplasty).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 & S10 — SYMPTOMS & URGENT EMERGENCY RED FLAGS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs mb-6">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09</span>
            <h2 className="text-2xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Signs of a Hand or Wrist Problem
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Persistent Pain:</strong> Pain on gripping, lifting, or twisting the wrist.
              </div>
              <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Swelling & Bruising:</strong> Visible fullness or bruising after a fall or twist.
              </div>
              <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Stiffness & Limited Motion:</strong> Inability to bend or extend fingers fully.
              </div>
              <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Weak Grip Strength:</strong> Difficulty holding cups or turning door keys.
              </div>
              <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Numbness & Pins:</strong> Tingling in fingers or loss of fingertip feeling.
              </div>
              <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong>Catching / Locking:</strong> A finger snapping shut and getting stuck (trigger finger).
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-rose-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">SECTION S10 — RED FLAGS</span>
                <h3 className="font-bold text-base text-rose-900 mt-1 mb-2">When Is a Hand or Wrist Injury an Emergency?</h3>
                <p className="text-xs sm:text-sm text-rose-800 leading-relaxed mb-3">
                  Certain injuries require immediate emergency medical care. Go to the nearest emergency department right away if you notice:
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-rose-800 space-y-1 mb-3">
                  <li><strong>Open fracture:</strong> Bone piercing through the skin or visible wound at the fracture site.</li>
                  <li><strong>Vascular compromise:</strong> Fingers turn cold, pale, bluish, or lose feeling entirely.</li>
                  <li><strong>Deep sharp lacerations:</strong> Inability to bend or straighten a finger following a cut.</li>
                  <li><strong>Severe crush injury:</strong> Heavy crushing impact with severe tense swelling.</li>
                  <li><strong>Rapidly spreading infection:</strong> Rapid redness, swelling, intense pain with finger bending, and fever.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S11 & S12 — CLINICAL DIAGNOSIS & IMAGING TABLE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S11 & S12</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Are Hand & Wrist Problems Diagnosed?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            An orthopaedic consultation involves careful clinical evaluation followed by targeted diagnostics when necessary:
          </p>
          <div className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Diagnostic Test</th>
                    <th className="p-3 sm:p-4 font-bold">What It Shows</th>
                    <th className="p-3 sm:p-4 font-bold">When It Is Indicated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">X-Rays (Radiographs)</td>
                    <td className="p-3 sm:p-4">Bone fractures, joint alignment, osteoarthritis, and bone loss.</td>
                    <td className="p-3 sm:p-4">Standard first-line test for trauma, suspected fractures, and joint pain.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">MRI Scan</td>
                    <td className="p-3 sm:p-4">Soft tissues, TFCC tears, scapholunate ligament ruptures, occult bone bruises.</td>
                    <td className="p-3 sm:p-4">Ordered when soft-tissue damage or occult scaphoid fracture needs confirmation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Diagnostic Ultrasound</td>
                    <td className="p-3 sm:p-4">Tendon glide, tendon tears, ganglion cysts, median nerve swelling.</td>
                    <td className="p-3 sm:p-4">Useful for dynamic evaluation of lumps, tendons, and carpal canal.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Nerve Conduction (NCS)</td>
                    <td className="p-3 sm:p-4">Electrical conduction velocity of median and ulnar nerves.</td>
                    <td className="p-3 sm:p-4">Indicated for persistent numbness, weakness, or suspected carpal tunnel syndrome.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            For more on the consultation process, visit our <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation overview</Link>.
          </p>
        </div>
      </section>

      {/* S13, S14 & S15 — NON-SURGICAL & SURGICAL INTERVENTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Non-Surgical Treatment Options
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Splinting & Casting:</strong> Resting injured ligaments and stabilizing undisplaced fractures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Activity Modification:</strong> Adjusting daily ergonomics and sport technique.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Hand Physiotherapy:</strong> Targeted mobility, tendon-gliding, and strengthening exercises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Targeted Injections:</strong> Corticosteroid injections to reduce severe synovial swelling in trigger finger or arthritis.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S14 & S15</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Might Surgery Be Needed?
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span><strong>Fracture Fixation:</strong> Realignment and plating for displaced or unstable wrist/finger breaks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span><strong>Tendon Repair:</strong> Surgical reattachment of cut flexor or extensor tendons.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span><strong>Ligament Reconstruction:</strong> Restoring wrist stability after severe tears.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span><strong>Nerve Decompression:</strong> Releasing compressed nerves to prevent permanent loss.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S16, S17 & S18 — PREPARATION, BENEFITS & RISKS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Preparing for Surgery</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pre-operative general medical checks, blood thinner review, arranging home assistance for two-handed tasks, and organizing safe transport.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Benefits & Expectations</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Restoring bone alignment, restoring tendon glide, improving pain, and protecting nerves. Some residual stiffness can persist after severe injuries.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S18</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Risks & Complications</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Wound infection, joint stiffness, tendon scarring/adhesion, scar sensitivity, nerve irritation, hardware discomfort, and prolonged healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S19 & S20 — RECOVERY AND HAND THERAPY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S19</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Recovery After Hand and Wrist Surgery
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Wound Care:</strong> Dressings kept clean and dry until suture check at 10–14 days.</li>
                <li><strong>Swelling Control:</strong> Elevate hand above heart level in the initial post-operative days.</li>
                <li><strong>Gentle Motion:</strong> Uninjured fingers moved gently to prevent joint stiffness and adhesion.</li>
                <li><strong>Protection:</strong> Splints or casts worn as instructed to safeguard healing repairs.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Why Is Hand Therapy Crucial?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                The hand is an intricate mechanical instrument. Dedicated hand therapy guides progressive range of motion, scar massage, swelling resolution, and grip rebuilding.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active patient participation in therapy exercises is one of the strongest determinants of final functional recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — ABOUT DR. MAZHAR RAFIQUE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F2] rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#BE8C1D]/10 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
                <h2 className="text-2xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  <strong>Dr. Mazhar Rafique</strong> provides specialist orthopaedic and trauma care in Lahore. He holds <strong>M.B.B.S.</strong>, <strong>F.C.P.S. (Orthopedic Surgery)</strong>, Certified <strong>ATLS®</strong>, and a <strong>Fellowship in Arthroplasty and Joint Reconstruction</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  With over 10 years of clinical experience in managing fractures, joint injuries, and limb disorders, he evaluates patients at {businessConfig.clinicName} on Jail Road, Shadman, Lahore.
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

      {/* S22 — RELATED SERVICES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Related Upper Limb & Trauma Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Upper Limb Surgery", path: "/upper-limb-surgery/", desc: "Comprehensive category overview for shoulder, elbow, wrist and hand." },
              { title: "Carpal Tunnel Release", path: "/carpal-tunnel-release/", desc: "Targeted decompression of the median nerve at the wrist." },
              { title: "Elbow Surgery", path: "/elbow-surgery/", desc: "Care for tennis elbow, golfer's elbow, cubital tunnel and fractures." },
              { title: "Fracture Care", path: "/fracture-treatment/", desc: "Casting, splinting and conservative fracture management." },
              { title: "Bone Fracture Repair", path: "/bone-fracture-repair/", desc: "Surgical reduction and anatomical plating for broken bones." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Comprehensive evaluation and personalized treatment planning." }
            ].map((srv, idx) => (
              <Link
                key={idx}
                to={srv.path}
                className="p-4 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block"
              >
                <h3 className="font-bold text-sm text-[#111111] mb-1">{srv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S23 — CLINIC LOCATION & FINAL CTA */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE] text-center">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S23</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Hand or Wrist Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If hand or wrist pain, stiffness, numbness or an injury makes everyday tasks difficult, arrange an orthopaedic evaluation. Dr. Mazhar Rafique will examine your hand and explain your treatment pathway.
            </p>
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
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              PATIENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Hand & Wrist Surgery
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

export default HandWristSurgeryPage;
