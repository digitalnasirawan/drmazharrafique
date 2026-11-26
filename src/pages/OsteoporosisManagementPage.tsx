import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bone, 
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
  Activity,
  CheckCircle2,
  FileText,
  ShieldAlert,
  Flame
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const OsteoporosisManagementPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
        "q": "What is osteoporosis?",
        "a": "Osteoporosis makes bones weaker and more likely to break, sometimes after a small fall. It usually develops slowly, over many years."
    },
    {
        "q": "What is osteopenia?",
        "a": "Osteopenia means bone density is lower than normal but not low enough to be called osteoporosis. It does not always lead to osteoporosis. Healthy habits can help protect bone."
    },
    {
        "q": "What causes osteoporosis?",
        "a": "Bone loss with age is the main cause. Menopause, family history, low body weight, long-term steroid use, some medical conditions, smoking, heavy drinking and little exercise can all add to the risk."
    },
    {
        "q": "Can osteoporosis affect men?",
        "a": "Yes. Men can have osteoporosis too, especially with low testosterone, long-term steroid use, heavy drinking, smoking or certain medical conditions. It can be missed in men."
    },
    {
        "q": "Why is osteoporosis common after menopause?",
        "a": "Oestrogen helps protect bone. After the menopause, oestrogen falls, and bone is lost faster. Not every woman develops osteoporosis."
    },
    {
        "q": "Does osteoporosis cause pain?",
        "a": "Not by itself. Osteoporosis often has no symptoms until a bone breaks. Broken bones, especially in the spine, can cause pain. Not all back pain is caused by osteoporosis."
    },
    {
        "q": "What is a fragility fracture?",
        "a": "It is a broken bone after a fall from standing height or lower, or after an everyday movement, that would not usually break a healthy bone. It can be a sign of weak bones."
    },
    {
        "q": "Can osteoporosis cause hip fractures?",
        "a": "Yes. Hip fractures are serious and usually follow a fall. A suspected hip fracture needs urgent medical care."
    },
    {
        "q": "Can osteoporosis cause spinal fractures?",
        "a": "Yes. Weak spine bones can collapse slightly, causing back pain, loss of height or a more rounded back. Some spinal fractures cause no obvious pain."
    },
    {
        "q": "Can osteoporosis cause wrist fractures?",
        "a": "Yes. A broken wrist after a simple fall is common and can be a first sign of weak bones."
    },
    {
        "q": "How is osteoporosis diagnosed?",
        "a": "A doctor looks at your history, fractures, family history, medicines and risk factors, and may examine you. A bone density (DXA) scan is often used to confirm osteoporosis. Other tests may be advised."
    },
    {
        "q": "What is a DXA scan?",
        "a": "It is a quick, painless scan that uses a very low dose of X-rays to measure bone density, usually at the spine and hip. This page does not state that the clinic offers DXA scanning."
    },
    {
        "q": "What does a T-score mean?",
        "a": "A T-score compares your bone density with that of a healthy young adult. Above -1 is normal. Between -1 and -2.5 is osteopenia. -2.5 or lower is osteoporosis. A doctor reads it together with your age, history and other risks."
    },
    {
        "q": "Who needs bone density testing?",
        "a": "Doctors consider testing for people with risk factors or a fragility fracture, depending on age and overall risk. Not everyone needs a scan. Your doctor can advise you."
    },
    {
        "q": "What is FRAX?",
        "a": "FRAX is an online tool that helps doctors estimate your ten-year chance of a major osteoporotic fracture and of a hip fracture. It uses details such as age, weight, past fractures and family history. It gives an estimate, not a promise."
    },
    {
        "q": "Can osteoporosis be treated?",
        "a": "Yes. Care may include healthy habits, exercise, falls prevention, calcium and vitamin D when needed, and medicines in suitable people. Treatment aims to lower fracture risk. The plan depends on your own risk."
    },
    {
        "q": "Can osteoporosis be cured completely?",
        "a": "Osteoporosis is a long-term condition. Treatment can lower the chance of fractures, and some medicines can improve bone strength. But it is not right to promise a complete cure or complete fracture prevention."
    },
    {
        "q": "Does calcium alone treat osteoporosis?",
        "a": "No. Calcium supports bones but is not always enough. Some people also need vitamin D, exercise, falls prevention and medicines. Do not start supplements without advice."
    },
    {
        "q": "Why is vitamin D important?",
        "a": "Vitamin D helps the body take in calcium and supports bone renewal and muscle strength. Low levels are common, even in sunny countries. A doctor can advise whether you need tests or supplements."
    },
    {
        "q": "Can exercise help bone health?",
        "a": "Yes. Weight-bearing, muscle-strengthening and balance exercise can support bone and muscle strength and lower the risk of falls. The right type depends on your bones, fracture history and ability."
    },
    {
        "q": "Which exercises may be unsafe after fractures?",
        "a": "It depends on the person. Heavy lifting, deep forward bending, twisting and high-impact movements may not be safe for some people with weak bones or spinal fractures. Ask your doctor or physiotherapist before starting."
    },
    {
        "q": "What medicines are used for osteoporosis?",
        "a": "Doctors may use bisphosphonates, denosumab, bone-forming medicines such as teriparatide or romosozumab, raloxifene or hormone therapy in selected people. The choice depends on risk and health. This page gives no doses and does not say the clinic prescribes them."
    },
    {
        "q": "Do osteoporosis medicines have side effects?",
        "a": "Yes, all medicines can. Examples include stomach upset or food pipe irritation with some tablets, and injection-site reactions or low calcium with others. Rare problems include jaw bone problems and unusual thigh bone fractures. Talk to your doctor about your own risks."
    },
    {
        "q": "How often is bone density testing repeated?",
        "a": "There is no one schedule for everyone. Some people have a repeat scan after a period of time, and some do not need one. Your doctor will decide."
    },
    {
        "q": "How can I reduce my fracture risk?",
        "a": "Eat well, get enough vitamin D, stay active, prevent falls, avoid smoking, keep alcohol low, review medicines with your doctor and follow any prescribed treatment. These steps help but cannot guarantee that a fracture will never happen."
    },
    {
        "q": "When should I see a doctor?",
        "a": "See a doctor if you have had a fracture after a minor fall, have risk factors, take steroid tablets long-term, are losing height, fall often or have new back pain that is not getting better."
    },
    {
        "q": "When is a fracture an emergency?",
        "a": "Severe pain after a fall, a suspected hip fracture, being unable to put weight on a leg, sudden severe back pain after a minor injury, or new weakness, numbness or bladder or bowel problems need urgent care. Go to an emergency department."
    },
    {
        "q": "How can I arrange an orthopaedic consultation in Lahore?",
        "a": "Call 0345 8422505 or message on WhatsApp at 0312 014318. The clinic is at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan. You can ask whether bone-health assessment or referral is available for your concern."
    },
    {
        "q": "Can I contact the clinic through WhatsApp?",
        "a": "Yes. Message 0312 014318 on WhatsApp for appointment enquiries. For phone calls, use 0345 8422505. These are two different numbers. Please do not use WhatsApp or phone enquiries for emergencies."
    }
];

  return (
    <div className="bg-[#FAF8F2] text-slate-800 font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Bone className="w-3.5 h-3.5 text-[#BE8C1D]" />
              BONE STRENGTH & FRACTURE RISK ASSESSMENT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Osteoporosis Treatment in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Learn about weak bones, bone mineral density testing, fragility fracture risk, and evidence-based osteoporosis care. Enquire about orthopaedic assessment in Lahore with Dr. Mazhar Rafique.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#BE8C1D] hover:bg-[#a67a18] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Assessment ({businessConfig.phone})</span>
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

      {/* S01 & S02 — WHAT IS OSTEOPOROSIS & HEALTHY BONE REMODELLING */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01 & S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Osteoporosis & How Healthy Bones Stay Strong
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Osteoporosis (literally meaning "porous bone") is a systemic skeletal condition where bone mineral density and micro-architectural bone strength gradually deteriorate. The internal honeycomb structure becomes porous and thin, making bones brittle and vulnerable to fractures from minor falls or low-energy stresses.
              </p>
              <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] space-y-2">
                <h4 className="font-bold text-[#111111] text-sm">The Dynamic Bone Remodelling Cycle:</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Bone is active living tissue, continuously remodelled by two specialized cell types: <strong>osteoclasts</strong>, which break down old bone tissue, and <strong>osteoblasts</strong>, which lay down new mineralized bone. Throughout youth and early adulthood, new bone formation matches or exceeds bone breakdown. With advancing age, hormonal changes, and lifestyle factors, resorption begins to outpace rebuilding, leading to progressive bone thinning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03 — OSTEOPENIA VS OSTEOPOROSIS: T-SCORE BANDS TABLE */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Understanding T-Score Bands: Osteopenia vs Osteoporosis
          </h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#E8E5DE]">
              <thead>
                <tr className="bg-[#FAF8F2] text-[#111111] font-bold">
                  <th className="p-3 border border-[#E8E5DE]">Classification</th>
                  <th className="p-3 border border-[#E8E5DE]">T-Score Range (DXA)</th>
                  <th className="p-3 border border-[#E8E5DE]">What It Means</th>
                  <th className="p-3 border border-[#E8E5DE]">Clinical Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-emerald-800 border border-[#E8E5DE]">Normal Bone Density</td>
                  <td className="p-3 font-mono border border-[#E8E5DE]">-1.0 or higher</td>
                  <td className="p-3 border border-[#E8E5DE]">Bone density matches healthy young adult levels</td>
                  <td className="p-3 border border-[#E8E5DE]">Maintain active lifestyle, balanced calcium, and vitamin D</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-amber-800 border border-[#E8E5DE]">Osteopenia (Low Bone Mass)</td>
                  <td className="p-3 font-mono border border-[#E8E5DE]">Between -1.0 and -2.5</td>
                  <td className="p-3 border border-[#E8E5DE]">Bone mass is lower than normal, but not yet osteoporotic</td>
                  <td className="p-3 border border-[#E8E5DE]">FRAX risk calculation, lifestyle, targeted strength training</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-red-800 border border-[#E8E5DE]">Osteoporosis</td>
                  <td className="p-3 font-mono border border-[#E8E5DE]">-2.5 or lower</td>
                  <td className="p-3 border border-[#E8E5DE]">Substantial bone loss; elevated fragility fracture risk</td>
                  <td className="p-3 border border-[#E8E5DE]">Medical therapy consideration, fall prevention, fracture care</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-purple-900 border border-[#E8E5DE]">Severe / Established Osteoporosis</td>
                  <td className="p-3 font-mono border border-[#E8E5DE]">-2.5 or lower + Fracture</td>
                  <td className="p-3 border border-[#E8E5DE]">Osteoporotic density with one or more sustained fragility fractures</td>
                  <td className="p-3 border border-[#E8E5DE]">Intensive anti-resorptive or anabolic therapy, orthopaedic support</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic">
            World Health Organization (WHO) definition: A T-score represents the standard deviation comparing your bone mineral density to that of a healthy young reference population.
          </p>
        </div>
      </section>

      {/* S04, S05, S06, S07 — RISK FACTORS, MENOPAUSE & OSTEOPOROSIS IN MEN */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04 – S07</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Who Is at Risk of Osteoporosis?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Osteoporosis can affect anyone, though certain populations face significantly higher susceptibility:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Post-Menopausal Women</h4>
                  <p className="text-xs text-slate-600">
                    Oestrogen protects bone mass. During and after menopause, dropping oestrogen levels trigger a rapid bone resorption phase, causing women to lose up to 10–20% of their bone mass within the first 5 to 7 years.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Osteoporosis in Men</h4>
                  <p className="text-xs text-slate-600">
                    Frequently under-recognized. About 1 in 5 men over 50 will suffer an osteoporotic fracture. Causes include low testosterone (hypogonadism), prolonged oral steroid usage, smoking, and heavy alcohol consumption.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Secondary Medical Risks</h4>
                  <p className="text-xs text-slate-600">
                    Long-term corticosteroid (prednisolone) use for asthma or rheumatoid arthritis, malabsorption disorders (celiac disease, Crohn's), hyperthyroidism, and chronic kidney disease.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">The "Silent" Presentation</h4>
                  <p className="text-xs text-slate-600">
                    Bone density loss causes zero pain until a fracture occurs. Gradual loss of height (&gt; 4 cm), a curved upper spine (dowager's hump or kyphosis), or sudden back pain upon bending can indicate silent vertebral fractures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S08, S09, S10, S11 — FRAGILITY FRACTURES (HIP, SPINE, WRIST) */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08 – S11</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Fragility Fractures: The True Impact of Osteoporosis
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A <strong>fragility fracture</strong> is defined as a broken bone resulting from low-energy trauma that would not normally break a healthy bone—most commonly a fall from standing height or less:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#111111] text-base mb-2">Hip Fractures</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      The most severe consequence of osteoporosis. Almost always requires emergency hospital admission and surgical fixation or hemiarthroplasty to restore mobility and prevent life-threatening recumbency complications.
                    </p>
                  </div>
                  <Link to="/hip-replacement-surgery/" className="text-xs font-semibold text-[#BE8C1D] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#E8E5DE]">
                    <span>Hip Arthroplasty Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#111111] text-base mb-2">Vertebral Fractures</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Weakened thoracic and lumbar vertebrae can collapse under body weight or minor strain, causing sharp back pain, progressive loss of height, and a stooped spinal curvature.
                    </p>
                  </div>
                  <Link to="/spine-back-pain/" className="text-xs font-semibold text-[#BE8C1D] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#E8E5DE]">
                    <span>Spine & Back Pain Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#111111] text-base mb-2">Wrist Fractures</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      A distal radius (Colles) fracture from reaching out to break a fall is frequently the "sentinel event"—the first visible sign of underlying low bone density requiring formal investigation.
                    </p>
                  </div>
                  <Link to="/fracture-treatment/" className="text-xs font-semibold text-[#BE8C1D] hover:underline inline-flex items-center gap-1 pt-2 border-t border-[#E8E5DE]">
                    <span>Fracture Treatment Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S13 — EMERGENCY WARNING BOX: SUSPECTED HIP FRACTURE & SPINAL RED FLAGS */}
      <section className="py-8 bg-red-50/70 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-red-900 leading-relaxed">
              <h3 className="text-base font-bold text-red-950 uppercase tracking-wide">
                Urgent Warning: When a Bone Injury Requires Immediate Emergency Care
              </h3>
              <p>
                Seek urgent emergency hospital evaluation if you or an elderly relative experience:
              </p>
              <ul className="list-disc list-inside space-y-1 text-red-800">
                <li><strong>Suspected Hip Fracture:</strong> Severe groin or hip pain after a fall, absolute inability to stand or bear weight, with the injured leg appearing shortened and rotated outwards.</li>
                <li><strong>Spinal Neurological Compression:</strong> Sudden severe back pain accompanied by numbness between the thighs or groin (saddle anesthesia), sudden loss of bowel or bladder control, or progressive leg paralysis.</li>
                <li><strong>Open Bone Injury:</strong> Any bone injury where broken bone fragments pierce through the skin (compound fracture).</li>
              </ul>
              <p className="text-xs font-semibold text-red-900 mt-1">
                Do not wait for outpatient clinic hours. Call an ambulance or proceed directly to an emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S14, S15, S16, S17 — ASSESSMENT, DXA SCANS & FRAX RISK */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14 – S17</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Osteoporosis & Fracture Risk Are Evaluated
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Comprehensive bone health assessment combines clinical history, validated fracture risk tools, bone densitometry, and targeted blood panels:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Dual-Energy X-Ray Absorptiometry (DXA)</h4>
                  <p className="text-xs text-slate-600">
                    A painless, non-invasive scan utilizing extremely low radiation to measure bone density at the lumbar spine and hip neck. It produces the diagnostic T-score used to confirm osteopenia or osteoporosis.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">FRAX 10-Year Fracture Estimation</h4>
                  <p className="text-xs text-slate-600">
                    A validated computer algorithm developed by WHO that integrates age, sex, body mass index, parental hip fracture, smoking, steroid use, and DXA findings to estimate your exact 10-year percentage probability of major osteoporotic fracture.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Targeted Blood Panels</h4>
                  <p className="text-xs text-slate-600">
                    Serum calcium, phosphate, 25-hydroxyvitamin D, full blood count, renal function, alkaline phosphatase, and thyroid function tests to identify treatable secondary causes of accelerated bone loss.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Physical & Mobility Exam</h4>
                  <p className="text-xs text-slate-600">
                    Evaluation of gait stability, lower limb muscle strength, balance, thoracic kyphosis, and height measurement compared against earlier records.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Educational notice: We provide clinical evaluation, risk assessment, and orthopaedic fracture counselling. If a DXA scan or specialized imaging is recommended, our team coordinates with accredited diagnostic imaging centres in Lahore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S18, S19, S20 — CALCIUM, VITAMIN D, EXERCISE & FALL PREVENTION */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S18 – S20</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Lifestyle Foundations: Nutrition, Exercise & Fall Prevention
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 my-6">
              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Calcium & Vitamin D
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calcium provides the physical building blocks of bone mineral, while vitamin D enables efficient intestinal calcium absorption. Emphasize dietary sources: milk, yogurt, paneer, dark green vegetables, and fortified foods. Discuss safe supplementation with your doctor.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                  Targeted Exercise
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Weight-bearing impact exercises (brisk walking, low-impact aerobics, climbing stairs) stimulate bone remodelling. Muscle-strengthening resistance work and balance exercises (such as heel-to-toe walking or Tai Chi) protect against falls.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  Home Fall Prevention
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Most osteoporotic fractures follow a domestic fall. Secure loose floor rugs, ensure well-lit hallways, install bathroom grab handles, wear non-slip supportive footwear, and review medications that cause lightheadedness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S21 & S22 — MEDICATIONS & LONG-TERM MONITORING */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21 & S22</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Medical Therapies & Ongoing Monitoring
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                When fracture risk is substantially elevated or after a fragility fracture, lifestyle measures alone are insufficient. Prescription medications strengthen bone matrix and dramatically cut future fracture incidence:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Anti-Resorptive Medications</h4>
                  <p className="text-xs text-slate-600">
                    <strong>Bisphosphonates</strong> (oral weekly alendronate/risedronate or annual IV zoledronic acid) and <strong>Denosumab</strong> (subcutaneous 6-monthly injection). They slow down osteoclast activity, allowing bone mineral to rebuild and stabilize.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Anabolic (Bone-Building) Agents</h4>
                  <p className="text-xs text-slate-600">
                    <strong>Teriparatide</strong> (parathyroid hormone analogue) and <strong>Romosozumab</strong> (sclerostin inhibitor). Reserved for severe osteoporosis with high fracture risk, actively stimulating osteoblasts to create new trabecular bone.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-xs sm:text-sm text-slate-700">
                <p className="font-semibold text-[#111111] mb-1">Important Patient Safety Considerations:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Never stop prescribed osteoporosis medication without medical consultation. Sudden cessation of denosumab can trigger rapid bone loss and rebound vertebral fractures.</li>
                  <li>Ensure good dental hygiene and complete elective dental work prior to long-term anti-resorptive treatment (rare risk of osteonecrosis of the jaw).</li>
                  <li>Treatment is typically monitored with repeat DXA densitometry every 2 to 3 years to assess response and evaluate drug holidays.</li>
                </ul>
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
              Orthopaedic Bone Health Assessment with Dr. Mazhar Rafique
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with clinical expertise in bone health, fracture care, and adult joint reconstruction. Verified credentials:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 my-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-1" />
                  <span><strong>M.B.B.S.</strong> — Basic Medical Qualification</span>
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
                With over a decade of hands-on experience treating fragility fractures and complex bone injuries, Dr. Rafique provides balanced, unhurried evaluations at BNI - Bashir NeuroSpine Institute, Lahore.
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
                <Link to="/arthritis-treatment/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Arthritis Management
                </Link>
                <Link to="/fracture-treatment/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Fracture Care
                </Link>
                <Link to="/hip-replacement-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Hip Replacement Surgery
                </Link>
                <Link to="/spine-back-pain/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Spine & Back Pain Hub
                </Link>
                <Link to="/orthopaedic-consultation/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Orthopaedic Consultation
                </Link>
                <Link to="/joint-replacement-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Joint Replacement Surgery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — 29 FAQS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION B5</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Osteoporosis & Bone Health
            </h2>
            <p className="text-sm text-slate-600">
              Clear clinical answers regarding weak bones, DXA scanning, T-scores, fragility fractures, and treatments:
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
              Arrange an Orthopaedic Bone Health Assessment in Lahore
            </h2>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you have concerns about weak bones, osteopenia, past fragility fractures, or wish to review your bone mineral density scan, arrange a consultation with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute, Lahore.
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

export default OsteoporosisManagementPage;
