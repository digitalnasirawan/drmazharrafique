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
  Info,
  HeartPulse,
  Check
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const CarpalTunnelReleasePage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is carpal tunnel syndrome?",
      a: "It is a condition where the median nerve is squeezed at the wrist. It can cause tingling, numbness, pain and weakness in the hand."
    },
    {
      q: "What causes carpal tunnel syndrome?",
      a: "Pressure rises inside the carpal tunnel. Often no single cause is found. Swelling, pregnancy, diabetes, thyroid problems, rheumatoid arthritis, past wrist injury and the shape of the wrist can all play a part."
    },
    {
      q: "What are the common symptoms?",
      a: "Common symptoms are tingling, numbness, aching, night symptoms, a weak grip and dropping things."
    },
    {
      q: "Which fingers are usually affected?",
      a: "The thumb, index finger, middle finger and part of the ring finger. The little finger is usually not affected."
    },
    {
      q: "Can carpal tunnel syndrome cause hand weakness?",
      a: "Yes. The nerve helps move thumb muscles. If it is squeezed for a long time, grip and pinch strength may fall. Weakness needs a medical check."
    },
    {
      q: "Can hand numbness have other causes?",
      a: "Yes. A pinched nerve in the neck or elbow, peripheral neuropathy, and some health problems can also cause numbness. A doctor needs to examine you to know the cause."
    },
    {
      q: "How is carpal tunnel syndrome diagnosed?",
      a: "Doctors often use your story and an examination of your hand. Some people also need a nerve conduction test or an ultrasound."
    },
    {
      q: "Do I need a nerve conduction test?",
      a: "Not always. It may help if the diagnosis is unclear, if another nerve problem is possible, or when surgery is being considered. Your doctor will advise you."
    },
    {
      q: "Can carpal tunnel syndrome improve without surgery?",
      a: "Yes, in many people. Night splints, changing activities, treating related health problems and sometimes a steroid injection can help. Symptoms can come back after treatment."
    },
    {
      q: "When might surgery be needed?",
      a: "Surgery may be considered when symptoms last, treatment has not helped, the hand is weak, or the nerve is badly squeezed. It is not needed for everyone."
    },
    {
      q: "What is carpal tunnel release?",
      a: "It is an operation that cuts the ligament forming the roof of the carpal tunnel. This gives the median nerve more room."
    },
    {
      q: "What is the difference between open and endoscopic release?",
      a: "Open release uses a small cut in the palm or wrist so the surgeon can see the ligament. Endoscopic release uses a thin camera tube and smaller cuts. Both cut the same ligament. Which suits you depends on your hand and your surgeon."
    },
    {
      q: "Is carpal tunnel release painful?",
      a: "The operation is usually done with a numbing injection, so the hand is numb during surgery. Some soreness after surgery is common. The scar may stay tender for a while. Your team will advise on pain relief."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, bleeding, a tender scar, ongoing pain, nerve injury, numbness that stays, incomplete relief and symptoms that come back. Serious problems are not common."
    },
    {
      q: "How long does recovery take?",
      a: "It is different for each person. Some symptoms may ease soon, while strength and feeling can take months to improve. Your surgeon will guide you."
    },
    {
      q: "Will numbness go away after surgery?",
      a: "Often it improves, but this is not certain. If the nerve was squeezed for a long time, some numbness may remain."
    },
    {
      q: "Can carpal tunnel syndrome come back?",
      a: "Yes. Symptoms can return after treatment, including after surgery. Some people may need more treatment."
    },
    {
      q: "When can I return to work?",
      a: "It depends on your job and your recovery. Office work may be easier to return to than heavy work. Your surgeon will advise you."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} to arrange an orthopaedic assessment with Dr. Mazhar Rafique at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can send a WhatsApp message to ${businessConfig.phone} to arrange an appointment. For an emergency, please visit the nearest hospital emergency department immediately.`
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Zap className="w-3.5 h-3.5" />
              HAND NUMBNESS, TINGLING & NERVE COMPRESSION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Carpal Tunnel Release in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Carpal tunnel syndrome can cause numbness, tingling and weakness in the hand. It happens when the median nerve is squeezed at the wrist. Many people improve without surgery. Some people may need a surgical assessment, and a doctor can help you decide.
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

      {/* S01 — WHAT IS CARPAL TUNNEL SYNDROME? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Carpal Tunnel Syndrome?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Carpal tunnel syndrome is a problem in the wrist. A nerve called the median nerve gets squeezed. This nerve passes through a narrow space in the wrist called the carpal tunnel.
              </p>
              <p>
                The nerve runs from the forearm into the hand. When it is squeezed at the wrist, the hand can feel the effects. You may notice tingling, numbness, pain or weakness in parts of the hand.
              </p>
              <p>
                Symptoms often start slowly and come and go. They are often worse at night. Some people have mild symptoms that settle with simple care. Others have stronger or longer-lasting symptoms. The right treatment depends on how severe the problem is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — UNDERSTANDING THE MEDIAN NERVE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Does the Median Nerve Do?
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            <p>
              Nerves are like thin cables. They carry messages between the brain and the body. The median nerve does two main jobs in the hand:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-base text-[#111111] mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Sensory Function (Feeling)
                </h3>
                <p className="text-sm text-slate-600">
                  It carries touch, pain and temperature signals from the thumb, index finger, middle finger and part of the ring finger.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-base text-[#111111] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                  Motor Function (Thumb Movement)
                </h3>
                <p className="text-sm text-slate-600">
                  It helps move small muscles at the base of the thumb (thenar muscles). These muscles help you grip, pinch, and turn your thumb.
                </p>
              </div>
            </div>
            <p>
              The nerve passes through the carpal tunnel with several tendons. The floor and sides of the tunnel are made of wrist bones. The roof is a strong band called the <strong>transverse carpal ligament</strong>. If the space becomes tight, the nerve is squeezed. A squeezed nerve cannot send messages well. That is why you may feel tingling, numbness or weakness.
            </p>
          </div>
        </div>
      </section>

      {/* S03 — WHAT CAUSES CARPAL TUNNEL SYNDROME? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Carpal Tunnel Syndrome?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            Carpal tunnel syndrome happens when pressure inside the carpal tunnel goes up. In many people, no single clear cause is found. The shape of the wrist may play a part, and some people have a smaller tunnel naturally.
          </p>
          <div className="bg-white rounded-xl p-5 border border-[#E8E5DE] space-y-3 mb-4">
            <h3 className="font-bold text-sm text-[#111111]">Factors that can raise the chance of carpal tunnel syndrome:</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Tendon swelling:</strong> Swelling or inflammation around the flexor tendons inside the wrist tunnel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Systemic health conditions:</strong> Diabetes, underactive thyroid (hypothyroidism), or rheumatoid arthritis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Pregnancy:</strong> Fluid retention can temporarily raise canal pressure; symptoms often settle after delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Past wrist injury:</strong> Wrist fractures (like distal radius fractures) or dislocations that narrowed the canal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Body weight & age:</strong> Being overweight, advancing age, and higher prevalence among women.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Family history:</strong> Inherited narrower carpal tunnel anatomy.</span>
              </li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Work and hobbies may be linked in some people, particularly jobs with repeated forceful hand movements or vibrating tools. However, keyboard typing or mobile phone use does not explain every case. Your doctor will look at your overall medical health and daily habits.
          </p>
        </div>
      </section>

      {/* S04 — SYMPTOMS OF CARPAL TUNNEL SYNDROME */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of Carpal Tunnel Syndrome
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Tingling & Pins and Needles", desc: "Prickling sensation in the thumb, index, middle, and ring fingers." },
              { title: "Hand & Finger Numbness", desc: "Dulled sensation or loss of fine feeling in fingertips when touching objects." },
              { title: "Aching Wrist or Arm Pain", desc: "Discomfort radiating up into the forearm or aching deep within the palm." },
              { title: "Nocturnal Waking", desc: "Waking up at night needing to shake or hang the hand over the bed to get relief." },
              { title: "Weak Thumb & Grip", desc: "Clumsiness opening jars, turning keys, or holding mobile phones securely." },
              { title: "Dropping Objects", desc: "Unintentionally dropping cups, pens, or keys due to lost sensory feedback and weak pinch." }
            ].map((sym, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-sm text-[#111111] mb-1">{sym.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sym.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F2] border-l-4 border-[#BE8C1D] text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong>Important Anatomical Clue:</strong> The sensations are usually felt in the thumb, index finger, middle finger, and the thumb-side half of the ring finger. <em>The little finger is spared by carpal tunnel syndrome</em> because it is supplied by a different nerve (the ulnar nerve). If your little finger is numb, your doctor will check for other conditions.
          </div>
        </div>
      </section>

      {/* S05 — MILD, MODERATE AND SEVERE SYMPTOMS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Serious Can Carpal Tunnel Syndrome Become?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">STAGE 1</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Mild / Intermittent</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Symptoms come and go. They may appear at night or after driving, holding a book, or typing. Many people improve with simple wrist splints and conservative care.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">STAGE 2</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Longer-Lasting</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Numbness stays for longer periods during daytime. Tasks like buttoning a shirt or picking up coins become harder as fine sensation diminishes.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE]">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">STAGE 3</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Severe & Chronic</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Persistent numbness. The thumb muscles (thenar eminence) look noticeably thinner (muscle wasting). Chronic nerve compression causes permanent nerve fiber injury if left untreated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — WHEN SHOULD YOU SEEK MEDICAL ATTENTION? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S06</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Seek Medical Attention?
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            <p>
              It is sensible to arrange an orthopaedic evaluation if numbness, tingling, or wrist pain lasts more than a few weeks, wakes you up frequently, or makes everyday tasks difficult. Early treatment helps prevent nerve damage.
            </p>
            <div className="p-5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-rose-900 mb-1">Emergency Warning: Stroke Signs vs Hand Symptoms</h3>
                  <p className="text-xs sm:text-sm text-rose-800 leading-relaxed mb-2">
                    Sudden numbness or weakness on one side of the body can be a sign of a stroke, not carpal tunnel syndrome. If sudden hand weakness is accompanied by:
                  </p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-rose-800 space-y-1 mb-2">
                    <li>Face drooping on one side</li>
                    <li>Sudden arm weakness or inability to raise both arms</li>
                    <li>Slurred speech or difficulty understanding words</li>
                    <li>Sudden severe headache, dizziness, or loss of balance</li>
                  </ul>
                  <p className="text-xs font-bold text-rose-900">
                    Call emergency medical services or go to the nearest emergency room immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — OTHER CAUSES OF HAND NUMBNESS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S07</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Other Causes of Hand Numbness
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            Not all hand numbness is caused by carpal tunnel syndrome. Other conditions that can produce similar symptoms include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Cubital Tunnel Syndrome</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ulnar nerve compression at the inner elbow, causing numbness specifically in the little finger and outer ring finger.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Cervical Radiculopathy (Neck Nerve Pinch)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A compressed nerve root in the cervical spine radiating pain and tingling down the arm into the hand.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Peripheral Neuropathy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generalized nerve endings damage from diabetes, chronic kidney disease, or nutritional deficiencies (such as Vitamin B12).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Tenosynovitis & Arthritis</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tendon sheath inflammation (e.g. De Quervain tenosynovitis) or thumb basal joint arthritis causing local pain and stiffness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S08 — HOW IS CARPAL TUNNEL SYNDROME DIAGNOSED? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Is Carpal Tunnel Syndrome Diagnosed?
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            <p>
              In most cases, diagnosis begins with your clinical history and a careful physical examination by an orthopaedic surgeon:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Clinical History:</strong> Understanding when symptoms occur, nocturnal waking, and which fingers are involved.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Sensory Testing:</strong> Testing light touch and two-point discrimination across median vs ulnar finger territories.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Motor Strength:</strong> Testing thumb abduction and pinch grip strength against resistance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                <span><strong>Provocative Tests:</strong> <em>Phalen’s test</em> (holding wrists flexed for 60 seconds) and <em>Tinel’s sign</em> (lightly tapping over the median nerve at the wrist to elicit tingling).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* S09 & S10 — NERVE CONDUCTION STUDIES & IMAGING */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Nerve Conduction Studies (NCS / EMG)
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Nerve conduction tests measure electrical signal speed through the median nerve. Tiny electrodes stimulate the nerve to see if conduction is slowed across the carpal tunnel.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                This test is particularly helpful if the clinical picture is unclear, if double-crush neck nerve involvement is suspected, or to grade severity before surgical decompression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S10</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Do You Need an MRI or Ultrasound?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Most patients with typical carpal tunnel syndrome do <strong>not</strong> require an MRI. Diagnostic ultrasound can assess median nerve cross-sectional area swelling and rule out ganglion cysts or space-occupying lesions.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wrist X-rays may be ordered if past trauma or arthritis is suspected. Blood tests may check for diabetes, thyroid dysfunction, or inflammatory markers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S11 — NON-SURGICAL TREATMENT */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Carpal Tunnel Syndrome Improve Without Surgery?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            For many people, particularly with mild symptoms or recent onset, conservative non-surgical management is effective:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">1. Neutral Night Wrist Splint</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A rigid splint keeps the wrist in a neutral (straight) position while sleeping, preventing wrist bending that triples canal pressure and causes nocturnal numbness.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">2. Activity & Ergonomic Adjustments</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Taking regular rest breaks from repetitive gripping, adjusting workstation ergonomics, and reducing exposure to vibrating tools.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">3. Management of Underlying Health Conditions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Optimizing glycemic control in diabetes, managing thyroid replacement in hypothyroidism, and controlling systemic inflammation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">4. Corticosteroid Injection</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A targeted steroid injection around the carpal canal can rapidly reduce soft tissue swelling. Relief is often temporary (weeks to months), but helps confirm the diagnosis and relieve acute flare-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S12 — WHEN MIGHT SURGERY BE CONSIDERED? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might Carpal Tunnel Release Be Needed?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            Surgery is not the first choice for most patients. An orthopaedic surgeon may recommend surgical decompression when:
          </p>
          <ul className="space-y-2.5 text-sm text-slate-700 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
              <span>Symptoms have lasted for many months without relief from splints or injections.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
              <span>Constant numbness has replaced intermittent tingling, indicating ongoing nerve distress.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
              <span>There is visible muscle wasting (atrophy) of the thenar muscles at the base of the thumb.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
              <span>Nerve conduction studies confirm severe or progressive median axonal slowing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
              <span>Hand weakness severely compromises employment or essential daily self-care.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* S13 & S14 — SURGICAL PROCEDURE DETAILS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is Carpal Tunnel Release?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Carpal tunnel release is a targeted decompression procedure. The surgeon divides the transverse carpal ligament—the dense fibrous band forming the rigid ceiling of the carpal tunnel.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dividing this roof instantly increases carpal canal volume, eliminates pressure on the median nerve, and restores capillary microcirculation to dormant nerve fibers.
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Happens During Surgery?
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>1. Anaesthesia:</strong> Usually performed as a day-case procedure under local anaesthetic (with or without mild sedation).</li>
                <li><strong>2. Incision:</strong> A small opening is made in the palm aligned with natural skin creases.</li>
                <li><strong>3. Division:</strong> The transverse carpal ligament is carefully transected under direct vision while protecting the median nerve and its motor branch.</li>
                <li><strong>4. Closure:</strong> Skin is closed with fine sutures, and a protective dressing is applied. Patients return home the same day.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* S15 — OPEN VS ENDOSCOPIC COMPARISON TABLE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S15</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Open vs Endoscopic Carpal Tunnel Release
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            There are two main surgical approaches. Both aim to divide the exact same transverse carpal ligament to decompress the median nerve:
          </p>
          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold">Feature</th>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Open Carpal Tunnel Release</th>
                    <th className="p-3 sm:p-4 font-bold text-slate-800">Endoscopic Carpal Tunnel Release</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">How is it done?</td>
                    <td className="p-3 sm:p-4">Small incision in the palm; surgeon sees the ligament directly.</td>
                    <td className="p-3 sm:p-4">Tiny cut at wrist crease; thin tube with miniature camera.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Size of incision</td>
                    <td className="p-3 sm:p-4">Approx. 2–3 cm small palm incision.</td>
                    <td className="p-3 sm:p-4">Smaller (approx. 1 cm), located at wrist crease.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Possible benefits</td>
                    <td className="p-3 sm:p-4">Direct, comprehensive view of anatomy; time-tested safety.</td>
                    <td className="p-3 sm:p-4">Smaller scar; potentially less palm scar tenderness in early weeks.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Possible limitations</td>
                    <td className="p-3 sm:p-4">Pillar pain (scar tenderness) can take a few weeks to settle.</td>
                    <td className="p-3 sm:p-4">Requires specialized equipment; not suitable for all anatomy.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Complication rates</td>
                    <td className="p-3 sm:p-4">Very low; equivalent long-term success.</td>
                    <td className="p-3 sm:p-4">Similar long-term results to open technique in clinical studies.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Who decides?</td>
                    <td className="p-3 sm:p-4" colSpan={2}>
                      The surgeon evaluates your hand anatomy, medical history, past wrist surgeries, and discusses which approach offers the highest safety for you.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Source: British Society for Surgery of the Hand (BSSH) & NHS Orthopaedic Guidelines.
          </p>
        </div>
      </section>

      {/* S16 — PREPARING FOR SURGERY */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Prepare for Carpal Tunnel Release?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Pre-Operative Check & Medical History</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Inform the surgical team about all current health conditions, especially diabetes, blood pressure, and allergies.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Medication Review</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Blood-thinning medications (aspirin, clopidogrel, anticoagulants) require specific advice. Do not stop prescribed medication without medical clearance.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Transportation & Home Assistance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Arrange for someone to accompany you home after surgery as your operated hand will be bandaged and driving is unsafe.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111] mb-1">Home Preparation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prepare simple meals and keep everyday items within easy reach so you can manage two-handed tasks effortlessly for the first 48 hours.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            For general pre-operative checklists, review our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] underline font-medium">surgery preparation and recovery guide</Link>.
          </p>
        </div>
      </section>

      {/* S17 & S18 — BENEFITS, LIMITATIONS & RISKS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Possible Benefits & Realistic Limitations
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <p><strong>Benefits:</strong> Significant reduction or elimination of nocturnal hand tingling, pins and needles, and pain; prevention of permanent motor nerve damage.</p>
                <p><strong>Limitations:</strong> If the median nerve has been severely compressed for years with chronic axonal injury, sensation and thenar muscle strength may recover only partially. Full nerve regeneration can take 6–12 months.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S18</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Risks and Potential Complications
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <p>Serious complications are rare, but all surgeries carry considerations:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs">
                  <li>Wound infection or delayed skin healing (1–2%)</li>
                  <li>Temporary scar tenderness (&quot;pillar pain&quot;) lasting several weeks</li>
                  <li>Incomplete relief of numbness in long-standing cases</li>
                  <li>Rare injury to the palmar cutaneous or recurrent motor branches</li>
                  <li>Recurrence of carpal tunnel symptoms over subsequent years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S19 & S20 — RECOVERY AND RETURNING TO WORK */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S19</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Recovery After Carpal Tunnel Release
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Wound Care:</strong> Keep dressing clean and dry. Sutures removed around day 10–14.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Early Finger Motion:</strong> Gently flex and extend all fingers from day one to prevent tendon adhesions and finger stiffness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Limb Elevation:</strong> Elevate hand on pillows above heart level for the first 48 hours to minimize post-operative swelling.</span>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Can You Use Your Hand Normally?
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Light Tasks (Day 1–7):</strong> Typing, writing, and holding light items are permitted as comfort allows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Desk Work (1–2 Weeks):</strong> Office work can typically be resumed within 1 to 2 weeks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Heavy Manual Labour (4–6 Weeks):</strong> Heavy lifting, forceful gripping, or vibration tasks require 4 to 6 weeks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Driving:</strong> Return to driving only when you can grip and turn the steering wheel firmly and painlessly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — ABOUT DR. MAZHAR RAFIQUE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
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
                  <strong>Dr. Mazhar Rafique</strong> is a Consultant Orthopaedic Surgeon in Lahore holding verified qualifications: <strong>M.B.B.S.</strong> and <strong>F.C.P.S. (Orthopedic Surgery)</strong>, Certified <strong>ATLS®</strong>, with an advanced <strong>Fellowship in Arthroplasty and Joint Reconstruction</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  With over 10 years of clinical experience in orthopaedics, complex trauma, and upper limb care, he practices at {businessConfig.clinicName} on Jail Road, Shadman, Lahore.
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

      {/* S22 — RELATED ORTHOPAEDIC SERVICES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Related Hand & Upper Limb Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Upper Limb Surgery", path: "/upper-limb-surgery/", desc: "Comprehensive care for shoulder, elbow, wrist and hand conditions." },
              { title: "Hand & Wrist Surgery", path: "/hand-wrist-surgery/", desc: "Treatment for wrist fractures, tendon lacerations and ligament instability." },
              { title: "Elbow Surgery", path: "/elbow-surgery/", desc: "Management of cubital tunnel syndrome, tennis elbow, and joint stiffness." },
              { title: "Shoulder Surgery", path: "/shoulder-surgery/", desc: "Specialized assessment for rotator cuff tears and shoulder impingement." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Thorough clinical examination, imaging review, and treatment planning." }
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

      {/* S23 — CLINIC LOCATION & FINAL CTA */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs text-center">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S23</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Hand Numbness Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Numbness, tingling or weakness in the hand deserves a proper clinical check. A doctor can identify the exact nerve involved and explain non-surgical and surgical options clearly.
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
              Frequently Asked Questions About Carpal Tunnel Release
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

export default CarpalTunnelReleasePage;
