import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Phone, 
  MapPin, 
  ChevronDown, 
  AlertTriangle, 
  Stethoscope, 
  Award, 
  Check, 
  ShieldCheck, 
  Clock, 
  AlertCircle,
  ArrowRight,
  Bone,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const ArthritisTreatmentPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
        "q": "What is arthritis?",
        "a": "Arthritis means a problem in one or more joints. It can cause pain, stiffness, swelling and trouble moving. There are more than 100 types, and each may need different care."
    },
    {
        "q": "What is osteoarthritis?",
        "a": "Osteoarthritis is the most common type of arthritis. It affects the cartilage, bone and other tissues inside a joint. It often affects the knees, hips and small joints of the hands."
    },
    {
        "q": "How is rheumatoid arthritis different?",
        "a": "Rheumatoid arthritis is an autoimmune condition. The body's defence system attacks the joint lining. It often affects several joints on both sides, causes long morning stiffness and tiredness, and needs different treatment."
    },
    {
        "q": "What causes knee arthritis?",
        "a": "There is often no single cause. Age, earlier knee injury, family history, extra body weight and heavy joint loading can all play a part. Women are affected more often."
    },
    {
        "q": "Can arthritis affect the hip?",
        "a": "Yes. Hip arthritis can cause pain in the groin or thigh, stiffness and trouble with shoes, socks or getting into a car."
    },
    {
        "q": "Can arthritis affect the hands?",
        "a": "Yes. Osteoarthritis often affects the finger joints and the base of the thumb. It can make gripping, writing and opening jars harder."
    },
    {
        "q": "What are common arthritis symptoms?",
        "a": "Common symptoms are joint pain, stiffness, swelling, less movement and trouble walking. Symptoms may come and go in flare-ups."
    },
    {
        "q": "Can arthritis be cured?",
        "a": "There is no universal cure for osteoarthritis. Treatment aims to ease symptoms, keep you moving and protect daily function. Many people stay active with the right care. Results differ for each person."
    },
    {
        "q": "Can arthritis improve without surgery?",
        "a": "Symptoms often improve with non-surgical care such as exercise, physiotherapy, help with weight when needed and suitable medicines. The arthritis itself usually remains, but many people manage well. Surgery is not needed by most people."
    },
    {
        "q": "Does exercise help arthritis?",
        "a": "Yes, for many people. Exercise strengthens the muscles around the joint, helps movement and improves daily function. It may feel uncomfortable at first, so start slowly and get advice."
    },
    {
        "q": "Can physiotherapy help?",
        "a": "Often, yes. A physiotherapist can plan exercises for movement, strength, balance and walking. The plan is made for your joints and health."
    },
    {
        "q": "Does weight management help knee arthritis?",
        "a": "For people who carry extra weight, losing some may reduce knee pain and improve function. Even a small loss may help. Support should be kind and realistic."
    },
    {
        "q": "What medicines are used for arthritis?",
        "a": "Options include gels or creams rubbed on the joint, anti-inflammatory tablets for some people and simple painkillers. Inflammatory types need other medicines under specialist care. Ask a doctor or pharmacist before you start any medicine."
    },
    {
        "q": "Are arthritis medicines safe for everyone?",
        "a": "No. Medicines have benefits and risks. Some, such as anti-inflammatory tablets, can affect the stomach, kidneys, heart and blood pressure. Your doctor must check what is suitable for you."
    },
    {
        "q": "Can joint injections help?",
        "a": "A steroid injection may give short-term relief for some people when other treatments are not enough. The effect is usually weeks, not months. It does not repair the joint and has risks. Please ask the clinic whether a treatment is available."
    },
    {
        "q": "Do injections regrow cartilage?",
        "a": "No. No injection is known to regrow cartilage or reverse arthritis. The evidence for some injections is limited or uncertain."
    },
    {
        "q": "When should I see a doctor?",
        "a": "See a doctor if joint pain, swelling or stiffness lasts or keeps returning, if movement is reduced or if daily tasks are harder. Early assessment helps find the cause."
    },
    {
        "q": "Do I need an X-ray?",
        "a": "Not always. For many adults aged 45 or over with typical symptoms, osteoarthritis can be diagnosed from the story and examination. X-rays or other tests may be used when the diagnosis is unclear, symptoms are unusual or surgery is being planned."
    },
    {
        "q": "When is joint pain an emergency?",
        "a": "A suddenly hot, swollen, very painful joint, joint pain with fever, inability to move the joint or bear weight, a suspected broken bone, severe injury or signs of poor blood flow need urgent care. Go to the nearest hospital emergency department."
    },
    {
        "q": "When might joint replacement be considered?",
        "a": "It may be considered for selected people with severe pain and loss of function who have not had enough relief from proper non-surgical care. It is decided after an individual assessment."
    },
    {
        "q": "Is knee replacement necessary for every patient?",
        "a": "No. Most people with knee arthritis never need it. It is for selected people with severe symptoms despite non-surgical care."
    },
    {
        "q": "Can arthritis symptoms return?",
        "a": "Yes. Arthritis is often long-term, and flare-ups can happen. Regular exercise, a good plan and follow-up help you manage them."
    },
    {
        "q": "How can I manage arthritis at home?",
        "a": "Stay active with gentle exercise, pace your tasks, wear supportive shoes, use a walking aid if advised and make simple changes at home. Ask your doctor before starting new medicines."
    },
    {
        "q": "How can I book an appointment in Lahore?",
        "a": "Call 0345 8422505 to arrange an appointment. The clinic is at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000."
    },
    {
        "q": "Can I contact the clinic through WhatsApp?",
        "a": "Yes. Use WhatsApp Appointment at 0312 014318. This is a different number from the call number. Please do not use WhatsApp for emergencies."
    }
];

  return (
    <div className="bg-[#FAF8F2] text-slate-800 font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Activity className="w-3.5 h-3.5 text-[#BE8C1D]" />
              JOINT PAIN, STIFFNESS & ARTHRITIS CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Arthritis Treatment in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Understand arthritis, knee and hip joint pain, clinical diagnosis, exercise therapy, safe medication principles and when joint replacement may be considered with Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore.
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
              Consultations at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* S01 & S02 — WHAT IS ARTHRITIS & HEALTHY JOINT MECHANICS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01 & S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Arthritis & How Do Healthy Joints Work?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Arthritis refers to inflammation, wear, or degenerative damage within one or more joints. Rather than being a single illness, it describes over 100 distinct joint conditions, each requiring tailored clinical management.
              </p>
              <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] space-y-2">
                <h4 className="font-bold text-[#111111] text-sm sm:text-base">Anatomy of a Functional Joint:</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                  <p>• <strong>Articular Cartilage:</strong> Smooth, slippery tissue capping bone ends, allowing low-friction glide.</p>
                  <p>• <strong>Synovial Membrane & Fluid:</strong> Produces lubricating viscous fluid that nourishes cartilage cells.</p>
                  <p>• <strong>Joint Capsule & Ligaments:</strong> Tough fibrous bands providing mechanical stability.</p>
                  <p>• <strong>Surrounding Muscles:</strong> Absorb kinetic shock and control joint movement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03 — MAIN TYPES OF ARTHRITIS COMPARISON TABLE */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Main Types of Arthritis
          </h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#E8E5DE]">
              <thead>
                <tr className="bg-[#FAF8F2] text-[#111111] font-bold">
                  <th className="p-3 border border-[#E8E5DE]">Arthritis Type</th>
                  <th className="p-3 border border-[#E8E5DE]">Primary Mechanism</th>
                  <th className="p-3 border border-[#E8E5DE]">Typical Joints</th>
                  <th className="p-3 border border-[#E8E5DE]">Clinical Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-[#111111] border border-[#E8E5DE]">Osteoarthritis (OA)</td>
                  <td className="p-3 border border-[#E8E5DE]">Mechanical cartilage wear & whole-joint remodeling</td>
                  <td className="p-3 border border-[#E8E5DE]">Knees, hips, finger joints, base of thumb, spine</td>
                  <td className="p-3 border border-[#E8E5DE]">Pain with movement, brief morning stiffness (&lt; 30 min), crepitus</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#111111] border border-[#E8E5DE]">Rheumatoid Arthritis (RA)</td>
                  <td className="p-3 border border-[#E8E5DE]">Autoimmune inflammatory synovitis</td>
                  <td className="p-3 border border-[#E8E5DE]">Wrists, MCP/PIP finger joints, balls of feet (symmetrical)</td>
                  <td className="p-3 border border-[#E8E5DE]">Warm boggy swelling, morning stiffness &gt; 60 min, fatigue</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#111111] border border-[#E8E5DE]">Spondyloarthritis</td>
                  <td className="p-3 border border-[#E8E5DE]">Enthesitis & axial/peripheral immune inflammation</td>
                  <td className="p-3 border border-[#E8E5DE]">Sacroiliac joints, spine, ankles, large joints</td>
                  <td className="p-3 border border-[#E8E5DE]">Worse with rest, improves with exercise, psoriasis or eye signs</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#111111] border border-[#E8E5DE]">Gout & Crystal Arthritis</td>
                  <td className="p-3 border border-[#E8E5DE]">Urate or calcium pyrophosphate crystals</td>
                  <td className="p-3 border border-[#E8E5DE]">Big toe (podagra), ankle, knee</td>
                  <td className="p-3 border border-[#E8E5DE]">Sudden explosive attacks of intense pain, redness, and heat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S04, S05, S06, S07 — JOINT SITES: KNEE, HIP & HANDS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04 – S07</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Arthritis Affects Key Joints
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] text-base mb-2">1. Knee Osteoarthritis</h3>
                <p className="text-sm text-slate-600 mb-3">
                  The knee absorbs massive forces during daily life. When cartilage wears away, patients experience deep aching along the inner or outer joint lines, swelling, and stiffness after rest. Climbing stairs, praying, or rising from a low chair become challenging.
                </p>
                <Link to="/knee-replacement-surgery/" className="text-xs font-semibold text-[#BE8C1D] hover:underline inline-flex items-center gap-1">
                  <span>Explore Knee Replacement Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] text-base mb-2">2. Hip Osteoarthritis</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Hip arthritis typically causes pain in the groin and front of the thigh, often radiating down towards the knee. It impairs internal rotation, making it tough to put on shoes, trim toenails, or get in and out of a car.
                </p>
                <Link to="/hip-replacement-surgery/" className="text-xs font-semibold text-[#BE8C1D] hover:underline inline-flex items-center gap-1">
                  <span>Explore Hip Replacement Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] text-base mb-2">3. Hands & Other Peripheral Joints</h3>
                <p className="text-sm text-slate-600">
                  Osteoarthritis often involves the distal finger joints (Heberden's nodes), middle finger joints (Bouchard's nodes), and the base of the thumb (carpometacarpal joint). Symptoms include bony enlargement, stiffness, and weakness when opening jars or turning keys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S08 & S09 — SYMPTOMS & WHO IS MORE LIKELY TO DEVELOP ARTHRITIS */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Recognizing Symptom Patterns: OA vs Inflammatory Arthritis
            </h2>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#E8E5DE]">
                <thead>
                  <tr className="bg-[#FAF8F2] text-[#111111] font-bold">
                    <th className="p-3 border border-[#E8E5DE]">Feature</th>
                    <th className="p-3 border border-[#E8E5DE]">Osteoarthritis</th>
                    <th className="p-3 border border-[#E8E5DE]">Inflammatory Arthritis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 font-semibold border border-[#E8E5DE]">Morning Stiffness</td>
                    <td className="p-3 border border-[#E8E5DE]">Short-lived, usually &lt; 30 minutes</td>
                    <td className="p-3 border border-[#E8E5DE]">Prolonged, often &gt; 60 minutes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-[#E8E5DE]">Effect of Movement</td>
                    <td className="p-3 border border-[#E8E5DE]">Pain worsens with high activity; settles with rest</td>
                    <td className="p-3 border border-[#E8E5DE]">Stiffness eases with gentle motion; worse with rest</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-[#E8E5DE]">Joint Appearance</td>
                    <td className="p-3 border border-[#E8E5DE]">Hard, bony swelling, cool or mild warmth</td>
                    <td className="p-3 border border-[#E8E5DE]">Soft, puffy, spongy swelling with notable heat and redness</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold border border-[#E8E5DE]">Symmetry</td>
                    <td className="p-3 border border-[#E8E5DE]">Often asymmetric (one knee more than the other)</td>
                    <td className="p-3 border border-[#E8E5DE]">Classically symmetrical across both sides of the body</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S11 — EMERGENCY WARNING BOX: SEPTIC ARTHRITIS */}
      <section className="py-8 bg-red-50/70 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-red-900 leading-relaxed">
              <h3 className="text-base font-bold text-red-950 uppercase tracking-wide">
                Urgent Warning: When Joint Pain Is a Medical Emergency (Septic Arthritis)
              </h3>
              <p>
                If a joint becomes <strong>rapidly hot, red, extremely swollen, and excruciatingly painful</strong> over hours or 1–2 days, particularly when accompanied by fever, chills, or sweating, you must treat this as an acute medical emergency.
              </p>
              <p>
                <strong>Bacterial joint infection (septic arthritis)</strong> rapidly destroys articular cartilage and can cause life-threatening sepsis if not drained and treated with IV antibiotics within hours.
              </p>
              <p className="text-xs font-semibold text-red-900 mt-1">
                Do not wait for a clinic appointment. Go directly to the nearest hospital emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S12 & S13 — CLINICAL DIAGNOSIS & ROLE OF X-RAYS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12 & S13</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Is Arthritis Diagnosed & Do You Need an X-Ray?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                According to international orthopaedic guidelines (including NICE NG226), osteoarthritis can often be diagnosed <strong>clinically without routine X-rays</strong> in individuals aged 45 or older who have activity-related joint pain and morning stiffness lasting 30 minutes or less.
              </p>
              <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] space-y-2">
                <h4 className="font-bold text-[#111111] text-sm">When X-Rays or Further Imaging Are Recommended:</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>Sudden, rapid worsening of symptoms or atypical presentation</li>
                  <li>History of trauma, suspected bone fracture, or joint deformity</li>
                  <li>Excluding other pathologies (osteonecrosis, bone tumours, or infection)</li>
                  <li>Planning surgical intervention (such as partial or total joint replacement)</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500 italic">
                Notice: X-ray changes do not always match symptom severity. Some people with marked joint space narrowing have mild symptoms, while others with minor radiographic changes experience significant pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S14, S15, S16, S17, S18, S19 — EVIDENCE-BASED MANAGEMENT */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14 – S19</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Non-Surgical Arthritis Management Pathways
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Therapeutic Exercise
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The cornerstone of osteoarthritis management. Low-impact aerobic activity (swimming, stationary cycling, walking) combined with quadriceps and hip abductor muscle strengthening offloads joint stress and improves mobility.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                  Weight Optimization
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Biomechanical studies confirm that losing 1 kg of body mass reduces knee joint loading by approximately 4 kg per step. Modest weight loss dramatically reduces knee and hip arthritis pain.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#BE8C1D]" />
                  Safe Medication Principles
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Topical NSAID gels are recommended as first-line medical therapy for knee and hand OA because of low systemic absorption. Oral anti-inflammatories should only be used under medical guidance, in the lowest effective dose for short periods, respecting renal and cardiac safety.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  Joint Injections: Realistic Expectations
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Intra-articular corticosteroid injections provide short-term pain reduction (typically weeks) during severe acute flares, but repeated frequent injections can accelerate cartilage loss. Hyaluronic acid and PRP have variable evidence and are not universal first-line solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S21 & S22 — SURGICAL TIMING & JOINT REPLACEMENT */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21 & S22</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Joint Replacement Surgery Considered?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Surgery is never the starting point for osteoarthritis. It is an elective, quality-of-life procedure considered only when:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600">
                <li>Severe, unrelenting joint pain persists despite dedicated conservative management</li>
                <li>Rest pain or night pain consistently awakens you or prevents sleep</li>
                <li>Significant loss of functional independence—unable to walk modest distances, use stairs, or work</li>
                <li>Radiographic evidence confirms severe bone-on-bone joint destruction matching clinical pain</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#E8E5DE] flex flex-wrap gap-4">
                <Link to="/joint-replacement-surgery/" className="text-sm font-semibold text-[#BE8C1D] hover:underline flex items-center gap-1.5">
                  <span>Explore Joint Replacement Surgery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/knee-replacement-surgery/" className="text-sm font-semibold text-[#BE8C1D] hover:underline flex items-center gap-1.5">
                  <span>Knee Replacement Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/hip-replacement-surgery/" className="text-sm font-semibold text-[#BE8C1D] hover:underline flex items-center gap-1.5">
                  <span>Hip Replacement Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S24 — SURGEON PROFILE & RELATED SPECIALTIES */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S24 — CLINICAL PROFILE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Orthopaedic Arthritis Care with Dr. Mazhar Rafique
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore specializing in adult joint reconstruction, arthroscopy, and complex trauma. His verified clinical qualifications include:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 my-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>M.B.B.S.</strong> — Basic Medical Degree</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>F.C.P.S. (Orthopedic Surgery)</strong> — Fellow of College of Physicians & Surgeons Pakistan</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>Fellowship in Arthroplasty</strong> & Joint Reconstruction</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>Certified ATLS®</strong> (Advanced Trauma Life Support)</span>
                </div>
              </div>
              <p>
                With over a decade of surgical experience, Dr. Rafique provides balanced, ethical counselling—prioritizing joint preservation and non-surgical therapy whenever possible, and performing precision joint reconstruction when indicated.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm uppercase tracking-wider mb-3">
                Related Clinical Services
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
                <Link to="/arthritis-bone-health/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Arthritis & Bone Health Hub
                </Link>
                <Link to="/osteoporosis-management/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Osteoporosis Management
                </Link>
                <Link to="/orthopaedic-consultation/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Orthopaedic Consultation
                </Link>
                <Link to="/joint-replacement-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Joint Replacement Surgery
                </Link>
                <Link to="/knee-replacement-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Knee Replacement Surgery
                </Link>
                <Link to="/hip-replacement-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Hip Replacement Surgery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — 25 FAQS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION B5</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Arthritis Management
            </h2>
            <p className="text-sm text-slate-600">
              Clear clinical guidance on joint pain, osteoarthritis treatment, medications, injections, and surgery:
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#FAF8F2] transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#111111]">
                    {idx + 1}. {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#BE8C1D] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#E8E5DE]/60 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S25 — CLOSING CLINIC DETAILS & APPOINTMENT CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F2] rounded-2xl p-6 sm:p-10 border border-[#E8E5DE] text-center">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S25 — APPOINTMENTS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Arrange an Arthritis Consultation in Lahore
            </h2>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If knee, hip, or hand joint pain is limiting your daily mobility, schedule an in-person clinical evaluation with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute, Lahore.
            </p>

            <div className="p-4 bg-white rounded-xl border border-[#E8E5DE] max-w-lg mx-auto mb-6 text-left text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span><strong>Clinic Location:</strong> {businessConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                <span><strong>Direct Line:</strong> {businessConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                <span><strong>OPD Consultations:</strong> By prior appointment</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#BE8C1D] hover:bg-[#a67a18] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessConfig.phone}</span>
              </a>
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Message on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setAppointmentModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
              >
                <span>Request Online Booking</span>
              </button>
            </div>
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

export default ArthritisTreatmentPage;
