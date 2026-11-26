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
  HeartPulse,
  HelpCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const ArthritisBoneHealthPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
        "q": "What is arthritis?",
        "a": "Arthritis means a joint problem that causes pain, stiffness and sometimes swelling. It is not one disease. There are many types, such as osteoarthritis and inflammatory arthritis."
    },
    {
        "q": "What is osteoarthritis?",
        "a": "It is the most common type of arthritis. The cartilage on the bone ends slowly wears thin, and the tissues around the joint can change. It often affects the knees, hips, hands and spine."
    },
    {
        "q": "How is inflammatory arthritis different?",
        "a": "It is linked to the immune system, which wrongly causes inflammation in the joint lining. Rheumatoid arthritis is one example. It often brings swelling and long morning stiffness, and it needs different treatment from osteoarthritis."
    },
    {
        "q": "What causes joint pain?",
        "a": "Causes include arthritis, injuries, overuse, tendon problems, inflammation, gout, infection and problems nearby, such as in the back. Not every painful joint has arthritis."
    },
    {
        "q": "What are common arthritis symptoms?",
        "a": "Common symptoms are pain, stiffness, swelling, less movement, weakness and trouble with daily tasks. These can also come from other conditions, so a doctor needs to check."
    },
    {
        "q": "Can arthritis be cured?",
        "a": "Not always. Osteoarthritis has no cure, but many treatments can ease symptoms and keep you active. Some inflammatory types can be controlled with specialist medical care."
    },
    {
        "q": "Can arthritis be managed without surgery?",
        "a": "Yes, for many people. Exercise, physiotherapy, weight management where needed, activity changes and suitable pain relief are common parts of care."
    },
    {
        "q": "Can exercise help arthritis?",
        "a": "Yes. Exercise is a core treatment for osteoarthritis. It can reduce pain and improve movement over time. Pain may rise a little at first. A tailored plan is best."
    },
    {
        "q": "When is joint replacement considered?",
        "a": "It is considered for selected people with severe pain or loss of function that continues despite proper non-surgical care. Most people with arthritis do not need it."
    },
    {
        "q": "What is osteoporosis?",
        "a": "Osteoporosis makes bones weaker and more likely to break. It usually develops slowly over years."
    },
    {
        "q": "Can osteoporosis develop without symptoms?",
        "a": "Yes. Many people have no symptoms until a bone breaks. Back pain, a stooped back or loss of height can sometimes be signs of broken spine bones."
    },
    {
        "q": "Who is at risk of osteoporosis?",
        "a": "Risk rises with age, menopause (especially early), a past fragility fracture, family history of hip fracture, long-term steroid use, some medical conditions, low body weight, smoking and heavy alcohol use. Men can be affected too."
    },
    {
        "q": "What is a fragility fracture?",
        "a": "It is a broken bone after a minor injury, such as a fall from standing height. Wrist, hip and spine bones are common sites. It can signal weak bones."
    },
    {
        "q": "What is a DXA scan?",
        "a": "A DXA scan uses a very low dose of X-rays to measure bone density, usually at places such as the hip and spine. It is painless and takes about 10 to 20 minutes."
    },
    {
        "q": "Does everyone need a bone density test?",
        "a": "No. It is considered for people with risk factors, such as a past fragility fracture or long-term steroid use. Your doctor may first estimate your fracture risk with a tool such as FRAX."
    },
    {
        "q": "Can osteoporosis be treated?",
        "a": "Yes. Treatment can lower the chance of fractures. It cannot promise that you will never have a fracture. The plan depends on your fracture risk and health."
    },
    {
        "q": "Does calcium alone prevent osteoporosis?",
        "a": "No. Calcium helps, but bone health also needs vitamin D, protein, exercise and a healthy lifestyle. Calcium supplements alone do not cure osteoporosis. Ask your doctor before starting any supplement."
    },
    {
        "q": "How can I reduce fracture risk?",
        "a": "Stay active with strength and balance exercise, eat a balanced diet, avoid smoking, keep alcohol low, make your home safer, check your eyesight and ask for a medicine review. Ask about a bone health assessment if you have risk factors. These steps help but cannot guarantee that a fracture will not happen."
    },
    {
        "q": "Can osteoporosis affect men?",
        "a": "Yes. It is more common in women, but men can have it too, especially with risk factors such as long-term steroid use, some medical conditions, smoking or heavy alcohol use."
    },
    {
        "q": "When should I see an orthopaedic doctor?",
        "a": "See one if joint pain, stiffness or swelling lasts or limits daily life, if you have repeated falls or a fragility fracture, or if you worry about bone health. For danger signs, go to an emergency department instead."
    },
    {
        "q": "What happens during an orthopaedic consultation?",
        "a": "The doctor asks about your symptoms and health, examines you, reviews any X-rays or scans, explains what may be wrong and discusses options and follow-up with you."
    },
    {
        "q": "Do I need an X-ray for joint pain?",
        "a": "Not always. Osteoarthritis can often be diagnosed from your story and an examination. X-rays are used when they are likely to help, for example after an injury or when the cause is unclear."
    },
    {
        "q": "When is joint pain an emergency?",
        "a": "Seek urgent help for a suddenly hot, swollen and very painful joint, joint pain with fever, a suspected fracture, severe injury, inability to bear weight, severe deformity, a cold or pale limb or significant new numbness or weakness."
    },
    {
        "q": "How can I book an appointment in Lahore?",
        "a": "Call 0345 8422505 or message on WhatsApp at 0312 014318 to arrange an orthopaedic appointment. These numbers are not for emergencies."
    },
    {
        "q": "Can I contact the clinic through WhatsApp?",
        "a": "Yes. You can enquire on WhatsApp at 0312 014318. Please do not use WhatsApp for emergencies. Trust Verified credentials M.B.B.S.; F.C.P.S. (Orthopedic Surgery); Certified ATLS®; Fellowship in Arthroplasty and Joint Reconstruction Verified experience More than 10 years of orthopaedic, trauma and sports injury care (supplied profile) Verified clinical interests Arthritis; joint pain; knee and hip conditions; joint replacement; fractures and trauma; orthopaedic assessment Clinic BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan Testimonials N/A Results N/A (no patient outcomes or success rates are used) Forms N/A. Phone and WhatsApp appointments only. Conversion Plan Calm, ethical calls to action appear in the hero, after S14, in S21 and in S24 only. The emergency section S15 has no appointment buttons. Language never pressures readers toward surgery and never promises a cure."
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
              JOINT HEALTH, ARTHRITIS & BONE STRENGTH
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Arthritis and Bone Health Treatment in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Joint pain, stiffness and bone strength concerns can make everyday movement difficult. Learn about arthritis, osteoporosis, fracture risk and assessment options, and how to arrange an orthopaedic consultation in Lahore with Dr. Mazhar Rafique.
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

      {/* S01 & S02 — HEALTHY JOINTS, STRONG BONES & WHAT IS ARTHRITIS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Healthy Joints and Strong Bones
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Your joints let you move. Your bones hold your body up. Together they help you walk, bend, lift and play.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h3 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#BE8C1D]" />
                    Healthy Joints
                  </h3>
                  <p className="text-sm text-slate-600">
                    A joint is where two bones meet, such as the knee or the hip. The ends of the bones are covered with smooth cartilage. A thin lining and joint fluid help it glide smoothly, while ligaments and muscles keep it steady.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h3 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                    <Bone className="w-4 h-4 text-[#BE8C1D]" />
                    Strong Bones
                  </h3>
                  <p className="text-sm text-slate-600">
                    Bone is living tissue that is continually renewed. Strong bones absorb the forces of daily life. As we get older, keeping joints moving and bones strong is vital for independence and comfort.
                  </p>
                </div>
              </div>
              <p>
                When a joint or bone is hurting, it is important to find out what is going on. This category page explains common joint and bone conditions, what you can do, and when an orthopaedic check can help.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Arthritis?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Arthritis is not a single disease. It is an umbrella term for conditions causing joint pain, stiffness and swelling.
              </p>
              <p>
                In some types, cartilage slowly wears thin over years. In other types, the body's immune system mistakenly attacks the lining of the joints, causing active inflammation, heat and swelling.
              </p>
              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-sm text-slate-700">
                <p className="font-semibold text-[#111111] mb-1">Common Effects of Arthritis:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Pain when moving, standing, walking, and sometimes at rest or at night</li>
                  <li>Morning stiffness or stiffness after sitting for a period</li>
                  <li>Swelling or a feeling of fullness around the joint</li>
                  <li>Difficulty with everyday activities like stair-climbing or getting out of a chair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03 & S04 — OSTEOARTHRITIS VS INFLAMMATORY ARTHRITIS */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Osteoarthritis: The Most Common Type
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Osteoarthritis is the most frequent form of arthritis. The protective cartilage cushioning bone ends gradually becomes thinner and rougher over time. The bone underneath, joint lining and surrounding soft tissues change as well.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Commonly Affected Joints</h4>
                  <p className="text-sm text-slate-600">
                    Knees, hips, finger joints, base of the thumb, spine and big toe. Many individuals have osteoarthritis in more than one joint simultaneously.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-bold text-[#111111] mb-1">Typical Symptoms</h4>
                  <p className="text-sm text-slate-600">
                    Pain that develops gradually, worse during or after use. Brief morning stiffness (usually less than 30 minutes), and a crunching or grating sensation (crepitus).
                  </p>
                </div>
              </div>
              <p>
                Most people with osteoarthritis manage their symptoms well through structured non-surgical care, activity modification and strengthening exercises. You can read our detailed <Link to="/arthritis-treatment/" className="text-[#BE8C1D] underline font-medium">Arthritis Management guide</Link> for complete details.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Inflammatory Arthritis: A Different Problem
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Inflammatory arthritis occurs when the immune system mistakenly attacks the synovium (the thin lining of the joint capsule), causing chronic inflammation and swelling.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#111111] mb-2">Key Distinctions of Inflammatory Arthritis:</h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600">
                  <li><strong>Rheumatoid Arthritis Example:</strong> Frequently affects both sides symmetrically, notably the wrists, small finger joints and balls of the feet.</li>
                  <li><strong>Warm, Puffy Swelling:</strong> Joints feel hot, boggy and tender to the touch rather than bony and hard.</li>
                  <li><strong>Extended Morning Stiffness:</strong> Joint stiffness often lasts for longer than 30 to 60 minutes in the morning.</li>
                  <li><strong>Systemic Symptoms:</strong> Patients may experience general tiredness, fatigue, low energy or feeling unwell.</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Inflammatory arthritis requires early assessment and ongoing medical management by a rheumatologist. An orthopaedic surgeon assesses joint damage, mechanical alignment and surgical options when indicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05 & S06 — OTHER CAUSES & SYMPTOM RECOGNITION */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05 & S06</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Understanding Joint Pain & Common Symptoms
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Joint pain does not always mean arthritis. A proper clinical evaluation helps identify whether discomfort stems from cartilage wear, soft tissue strain, or another underlying issue:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-semibold text-[#111111] mb-1">Non-Arthritic Pain Sources</h4>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                    <li>Ligament sprains or meniscal tears</li>
                    <li>Tendonitis and bursitis around joints</li>
                    <li>Sudden overuse or heavy unaccustomed loads</li>
                    <li>Gout, pseudogout or metabolic crystals</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-semibold text-[#111111] mb-1">Common Symptom Patterns</h4>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                    <li>Pain with weight-bearing or stair climbing</li>
                    <li>Reduced range of motion (bending or straightening)</li>
                    <li>Limping, shortened strides or instability</li>
                    <li>Difficulty with daily self-care tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07 & S08 — KNEE & HIP ARTHRITIS OVERVIEW */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S07</span>
                <h3 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Knee Arthritis
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  The knee bears significant body weight with every step. When cartilage wears down, pain frequently concentrates along the inner, outer, or anterior joint lines. Stiffness after sitting, visible puffiness, and pain descending stairs are classical signs.
                </p>
              </div>
              <Link
                to="/knee-replacement-surgery/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BE8C1D] hover:underline pt-2 border-t border-[#E8E5DE]"
              >
                <span>Learn about Knee Replacement Surgery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
                <h3 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Hip Arthritis
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  The hip is a ball-and-socket joint. When cartilage deteriorates, pain typically presents in the groin and front of the upper thigh rather than the outer hip. Putting on shoes, clipping toenails, or getting out of a low car seat become increasingly difficult.
                </p>
              </div>
              <Link
                to="/hip-replacement-surgery/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BE8C1D] hover:underline pt-2 border-t border-[#E8E5DE]"
              >
                <span>Learn about Hip Replacement Surgery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S09, S10, S11 — OSTEOPOROSIS & FRAGILITY FRACTURES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09 & S10</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Osteoporosis: The Silent Loss of Bone Density
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Osteoporosis causes bones to lose density and structural honeycomb strength, making them fragile and vulnerable to fractures. Because progressive bone loss causes no pain in itself, many individuals remain unaware of weak bones until a minor trip or fall causes a break.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#111111] mb-2">Key Osteoporosis Risk Factors:</h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <p>• Post-menopausal hormonal changes in women</p>
                  <p>• Advancing age and low body weight (BMI &lt; 19)</p>
                  <p>• Long-term oral corticosteroid / steroid use</p>
                  <p>• Family history of osteoporosis or hip fracture</p>
                  <p>• Low dietary calcium and vitamin D levels</p>
                  <p>• Sedentary lifestyle, smoking, and heavy alcohol</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is a Fragility Fracture?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A <strong>fragility fracture</strong> occurs from low-energy mechanical force that would not normally break healthy bone—such as a fall from standing height or lower, bending over, or even a sudden cough.
              </p>
              <p>
                The most frequent fragility fractures involve the wrist, spine (vertebral compression fractures), and hip. A single fragility fracture significantly elevates the risk of subsequent fractures. Read our dedicated <Link to="/fracture-treatment/" className="text-[#BE8C1D] underline font-medium">Fracture Care guide</Link> for orthopaedic management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S12, S13, S14 — DXA SCAN & BONE HEALTH ASSESSMENT */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12 & S13</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Bone Density Testing (DXA Scan) & Clinical Assessment
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A dual-energy X-ray absorptiometry (DXA) scan is the gold standard for measuring bone mineral density (BMD), typically assessing the lumbar spine and hip. It is a quick, painless, low-radiation test that yields a T-score comparing bone density to a healthy young adult reference.
              </p>
              <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-2">Components of a Bone Health Evaluation:</h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600">
                  <li><strong>Clinical Fracture History:</strong> Review of past low-energy fractures, height loss, or family history</li>
                  <li><strong>FRAX Risk Calculation:</strong> 10-year probability estimation of major osteoporotic and hip fractures</li>
                  <li><strong>Laboratory Blood Panels:</strong> Serum calcium, phosphate, vitamin D, renal function, and secondary causes</li>
                  <li><strong>Fall Risk Analysis:</strong> Assessment of balance, muscle strength, gait stability, and home safety</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500 italic">
                Educational notice: We provide clinical evaluation, risk assessment, and orthopaedic fracture counselling. If a DXA scan or specialized imaging is recommended, our team coordinates with accredited diagnostic imaging centres in Lahore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S15 — EMERGENCY WARNING BOX */}
      <section className="py-8 bg-red-50/70 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-red-900 leading-relaxed">
              <h3 className="text-base font-bold text-red-950 uppercase tracking-wide">
                Urgent Warning Signs: When Joint or Bone Symptoms Require Emergency Care
              </h3>
              <p>
                Seek immediate medical attention at a hospital emergency room if you experience any of the following:
              </p>
              <ul className="list-disc list-inside space-y-1 text-red-800">
                <li><strong>Suspected Septic Arthritis:</strong> A joint that becomes rapidly hot, red, severely swollen and acutely painful, accompanied by fever, chills, or sweating. Bacterial joint infection requires immediate surgical drainage and IV antibiotics.</li>
                <li><strong>Suspected Hip Fracture:</strong> Inability to bear weight after a fall, severe groin pain, with the leg appearing shortened or rotated outwards.</li>
                <li><strong>Spinal Red Flags:</strong> Severe back pain with sudden numbness around the groin/genitals, sudden loss of bladder or bowel control, or progressive leg weakness (cauda equina syndrome).</li>
              </ul>
              <p className="text-xs font-semibold text-red-900 mt-2">
                Emergency situations cannot wait for an outpatient clinic visit. Go straight to the nearest emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S16, S17, S18, S19, S20 — EVIDENCE-BASED NON-SURGICAL CARE & SURGERY TIMING */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16 – S19</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Non-Surgical Management & Bone Protection
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                While medical care cannot reverse mechanical joint wear, structured conservative protocols provide meaningful pain relief, slow functional decline, and protect skeletal integrity:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-semibold text-[#111111] mb-1">Therapeutic Exercise</h4>
                  <p className="text-xs text-slate-600">
                    Low-impact aerobic activity (swimming, stationary cycling, walking) alongside quadriceps and gluteal muscle strengthening stabilizes arthritic joints. Weight-bearing and resistance exercises stimulate bone remodelling.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-semibold text-[#111111] mb-1">Nutrition & Bone Health</h4>
                  <p className="text-xs text-slate-600">
                    A balanced diet rich in calcium (dairy, leafy greens, fortified foods), adequate vitamin D from sensible sunlight exposure or supplements, and sufficient dietary protein maintain bone matrix strength.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-semibold text-[#111111] mb-1">Weight Management</h4>
                  <p className="text-xs text-slate-600">
                    Every kilogram of weight lost reduces 4 kilograms of mechanical load through the knee joint with each stride, significantly reducing osteoarthritis pain and easing mobility.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
                  <h4 className="font-semibold text-[#111111] mb-1">Home Fall Prevention</h4>
                  <p className="text-xs text-slate-600">
                    Removing loose rugs, installing bathroom grab rails, ensuring bright lighting, wearing supportive footwear with slip-resistant soles, and addressing vision changes reduce fall hazards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Joint Replacement Surgery Considered?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Joint replacement is not the first step in arthritis care. It is an elective, planned procedure reserved for patients when:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                <li>Severe joint pain persists despite dedicated exercise, physiotherapy, weight loss, and safe medicines</li>
                <li>Rest pain or night pain consistently interrupts restful sleep</li>
                <li>Walking distance is severely limited and daily tasks (shopping, dressing, stairs) become exhausting</li>
                <li>Imaging confirms advanced bone-on-bone joint destruction corresponding to clinical symptoms</li>
              </ul>
              <p>
                Explore our comprehensive <Link to="/joint-replacement-surgery/" className="text-[#BE8C1D] underline font-medium">Joint Replacement Surgery guide</Link> for details on knee and hip arthroplasty pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — THE CONSULTATION PROCESS */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What to Expect in an Orthopaedic Consultation
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] block mb-1">STEP 1</span>
              <h4 className="font-bold text-[#111111] mb-1">Detailed Symptom History</h4>
              <p className="text-xs text-slate-600">
                We review where it hurts, how long symptoms have lasted, morning stiffness patterns, past injuries, family health, and how pain impacts your daily life.
              </p>
            </div>
            <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] block mb-1">STEP 2</span>
              <h4 className="font-bold text-[#111111] mb-1">Hands-On Examination</h4>
              <p className="text-xs text-slate-600">
                The surgeon assesses joint alignment, range of motion, swelling, muscle strength, ligament stability, and walking mechanics.
              </p>
            </div>
            <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] block mb-1">STEP 3</span>
              <h4 className="font-bold text-[#111111] mb-1">Imaging & Test Review</h4>
              <p className="text-xs text-slate-600">
                Any prior X-rays, MRIs, DXA scans, or blood tests are examined carefully. Repeat or additional imaging is advised only if it genuinely alters management.
              </p>
            </div>
            <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] block mb-1">STEP 4</span>
              <h4 className="font-bold text-[#111111] mb-1">Honest Management Plan</h4>
              <p className="text-xs text-slate-600">
                You receive clear, unhurried counselling on conservative treatment, exercise, lifestyle modifications, and surgical options when appropriate.
              </p>
            </div>
          </div>
          <div className="text-center pt-2">
            <Link
              to="/orthopaedic-consultation/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BE8C1D] hover:bg-[#a67a18] text-white font-semibold text-sm transition-all"
            >
              <span>Learn About Orthopaedic Consultations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* S22 — THREE DETAILED SERVICE EXPLORATION CARDS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Our Joint and Bone Health Services
            </h2>
            <p className="text-sm text-slate-600">
              Select the area that matches your clinical needs to learn about evidence-based treatment pathways:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Arthritis Management */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E5DE] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 uppercase tracking-wide">
                  Joint Degeneration
                </span>
                <h3 className="text-lg font-bold text-[#111111] mt-3 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Arthritis Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Learn how osteoarthritis and related joint symptoms are assessed and managed, from structured exercise and physiotherapy to safe medication and joint replacement timing.
                </p>
              </div>
              <Link
                to="/arthritis-treatment/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BE8C1D] hover:underline pt-3 border-t border-[#E8E5DE]"
              >
                <span>Explore Arthritis Management</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Osteoporosis Management */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E5DE] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 uppercase tracking-wide">
                  Bone Density & Fracture Risk
                </span>
                <h3 className="text-lg font-bold text-[#111111] mt-3 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Osteoporosis Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Understand silent bone loss, T-scores, FRAX 10-year fracture probability, calcium and vitamin D nutrition, fall prevention, and medical bone-strengthening strategies.
                </p>
              </div>
              <Link
                to="/osteoporosis-management/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BE8C1D] hover:underline pt-3 border-t border-[#E8E5DE]"
              >
                <span>Explore Osteoporosis Care</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Orthopaedic Consultation */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E5DE] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                  Clinical Examination
                </span>
                <h3 className="text-lg font-bold text-[#111111] mt-3 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Orthopaedic Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Arrange a thorough evaluation for joint pain, stiffness, walking concerns, or prior scan review with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute, Lahore.
                </p>
              </div>
              <Link
                to="/orthopaedic-consultation/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BE8C1D] hover:underline pt-3 border-t border-[#E8E5DE]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S23 — SURGEON PROFILE & RELATED SPECIALTIES */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S23 — CLINICAL EXPERTISE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              About Dr. Mazhar Rafique
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. His verified clinical qualifications include:
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
                With more than 10 years of clinical experience in orthopaedics, complex trauma reconstruction, and arthroplasty, Dr. Rafique provides individualized patient care at BNI - Bashir NeuroSpine Institute in Shadman 1, Lahore. Learn more on our <Link to="/about/" className="text-[#BE8C1D] underline font-medium">About Dr. Mazhar Rafique page</Link>.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm uppercase tracking-wider mb-3">
                Related Orthopaedic Clinical Categories
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
                <Link to="/joint-replacement-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Joint Replacement Surgery
                </Link>
                <Link to="/fracture-trauma-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Fracture & Trauma Surgery
                </Link>
                <Link to="/sports-injury-treatment/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Sports Injury & Ligament
                </Link>
                <Link to="/upper-limb-surgery/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Shoulder & Upper Limb
                </Link>
                <Link to="/foot-ankle-paediatric-orthopaedics/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Foot, Ankle & Paediatric
                </Link>
                <Link to="/spine-back-pain/" className="p-2 rounded bg-white hover:bg-amber-50 border border-[#E8E5DE] transition-colors">
                  • Spine & Back Pain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — 25 DETAILED FAQS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION B5</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Arthritis & Bone Health
            </h2>
            <p className="text-sm text-slate-600">
              Clear, practical clinical answers on joint pain, osteoarthritis, osteoporosis risks, and treatment options in Lahore:
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

      {/* S24 — CLOSING CLINIC DETAILS & APPOINTMENT CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F2] rounded-2xl p-6 sm:p-10 border border-[#E8E5DE] text-center">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S24 — APPOINTMENTS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Arrange an Orthopaedic Consultation in Lahore
            </h2>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you or a family member are experiencing ongoing joint pain, stiffness, suspected arthritis, or concerns regarding bone density and fracture risk, please arrange an orthopaedic evaluation.
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

export default ArthritisBoneHealthPage;
