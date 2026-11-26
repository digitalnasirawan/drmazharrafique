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
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const BackPainTreatmentPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What causes lower back pain?',
      a: 'Many things can. Common ones are muscle or ligament strain, disc problems, joint wear and nerve irritation. Often no single clear cause is found, and several factors can work together.'
    },
    {
      q: 'Can muscle strain cause back pain?',
      a: 'Yes. Lifting, sudden movement or overuse can strain back muscles. It often improves over days to weeks. See a doctor if it is severe, worsening or not improving.'
    },
    {
      q: 'What is mechanical back pain?',
      a: 'It is back pain linked to movement or loading, often from muscles and joints. It usually has no single clear cause and is rarely serious.'
    },
    {
      q: 'What is sciatica?',
      a: 'It is pain that travels from the lower back or buttock down the leg, caused by irritation of a nerve root. It may come with tingling, numbness or weakness.'
    },
    {
      q: 'What is a slipped disc?',
      a: 'It is when part of a spinal disc pushes out and may press on a nerve. The disc does not truly slip out of place. Doctors call it a disc herniation.'
    },
    {
      q: 'Can a slipped disc improve without surgery?',
      a: 'Often yes. Many people improve over weeks to months with non-surgical care. Some need a specialist review if symptoms are severe or getting worse.'
    },
    {
      q: 'What is spinal stenosis?',
      a: 'It is narrowing of the space around the spinal nerves. It can cause leg pain, numbness or heaviness, especially when walking.'
    },
    {
      q: 'Can arthritis cause back pain?',
      a: 'Yes. Age-related changes in the spinal joints can cause stiffness and pain. These changes on a scan do not always explain pain.'
    },
    {
      q: 'What is chronic back pain?',
      a: 'It is back pain that lasts a long time, often around three months or more. It can involve many factors and does not always mean serious damage.'
    },
    {
      q: 'When should I see a doctor?',
      a: 'See a doctor if pain does not improve after a few weeks, is getting worse, disturbs sleep or work, keeps returning, or comes with leg symptoms or trouble walking.'
    },
    {
      q: 'When is back pain an emergency?',
      a: 'Go to a hospital emergency department straight away for new bladder or bowel problems, numbness around the groin or bottom, severe or worsening leg weakness, major injury, or severe pain with fever. Do not wait for a routine appointment or a WhatsApp reply.'
    },
    {
      q: 'Do I need an MRI?',
      a: 'Not always. Most uncomplicated back pain does not need one. A doctor may advise an MRI if nerve compression or a serious cause is suspected, or if surgery or a procedure is being planned.'
    },
    {
      q: 'Can back pain improve without surgery?',
      a: 'Yes. Most uncomplicated back pain improves with time, staying active and, when needed, physiotherapy and exercise.'
    },
    {
      q: 'Should I rest or stay active?',
      a: 'Staying gently active is usually better than long bed rest. Increase activity slowly. Stop and get advice if pain becomes severe or you notice weakness or numbness.'
    },
    {
      q: 'Can physiotherapy help?',
      a: 'It often helps. Physiotherapy can improve movement, strength and confidence, and teach you how to manage flare-ups.'
    },
    {
      q: 'What exercises are suitable for back pain?',
      a: 'It depends on you. Walking is suitable for many people. Other exercises should be chosen by a professional based on your symptoms, so no single routine is right for everyone.'
    },
    {
      q: 'Are medicines always needed?',
      a: 'No. Some people use them for a short time, with advice from a doctor or pharmacist. Dose and choice depend on you, so this page does not give doses.'
    },
    {
      q: 'Can back pain return?',
      a: 'Yes, it can. Staying active, building strength and using safe lifting habits may help, but no one can promise it will not come back.'
    },
    {
      q: 'How long does recovery take?',
      a: 'It varies. Many episodes improve in a few weeks to a few months. Some last longer. Your doctor can review your progress.'
    },
    {
      q: 'When might surgery be considered?',
      a: 'Only in selected cases, such as nerve compression causing disabling symptoms that have not improved with non-surgical care, worsening weakness, or emergencies.'
    },
    {
      q: 'Can back pain be prevented?',
      a: 'Not always. Regular movement, fitness, safe lifting, good sleep and a healthy lifestyle may lower the risk or reduce flare-ups.'
    },
    {
      q: 'Can stress and sleep affect back pain?',
      a: 'Yes. Stress and poor sleep can make pain feel worse, and pain can disturb sleep. Good sleep habits and stress management can help you cope.'
    },
    {
      q: 'How can I book an appointment in Lahore?',
      a: `Call ${businessConfig.phone} or message on WhatsApp at ${businessConfig.phone} to inquire about an appointment with Dr. Mazhar Rafique at ${businessConfig.clinicName}, Shadman, Lahore.`
    },
    {
      q: 'Can I contact the clinic through WhatsApp?',
      a: 'Yes, for appointment enquiries. Please do not use WhatsApp in an emergency. For emergency signs, go to a hospital emergency department immediately.'
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
              LOWER BACK PAIN & SCIATICA CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Back Pain Treatment in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Back pain is common. It can make it hard to move, work and sleep. Many people improve with the right non-surgical care. If your pain lasts, keeps returning or comes with other symptoms, a medical check can help. Treatment depends on the cause and on your own needs.
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
              Consultations at BNI - Bashir NeuroSpine Institute, Shadman, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* S01 & S02 — WHAT IS BACK PAIN & ANATOMY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Back Pain?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Back pain means discomfort anywhere along your spine, most frequently concentrated in the lumbar region (lower back). It can present as a dull ache, sharp catching pain, or a stiff, gripping sensation.
              </p>
              <p>
                Back pain can interfere with routine daily activities—bending to put on shoes, sitting at a desk, lifting groceries, or sleeping peacefully. Most episodes resolve within a few weeks to months with appropriate conservative care. Read our <Link to="/spine-back-pain/" className="text-[#BE8C1D] underline font-medium">spine and back pain care hub</Link> for an overview.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Does Your Lower Back Work?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                The lower back (lumbar spine) consists of five large vertebrae (L1–L5) separated by springy intervertebral discs. Small facet joints behind guide movement, while robust muscles and ligaments stabilize the structure under body weight. Nerves exiting through the lumbar spine travel into the pelvis, legs and feet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03 TO S10 — CAUSES, STRAIN, SCIATICA, CHRONIC PAIN */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03 TO S10</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Common Causes of Back Pain & Sciatica
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Muscle and Ligament Strain</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Lifting heavy objects incorrectly, sudden twisting, awkward movements or long hours sitting in one position strain back muscles and soft tissues. Muscles spasm defensively, creating localized tightness and sharp pain on bending.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Mechanical Back Pain</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Pain linked directly to spinal loading and movement, involving muscles and facet joints without dangerous underlying pathology. It fluctuates day to day and often improves with gentle activity and postural changes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Disc Herniation ("Slipped Disc")</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  When a lumbar disc bulges or herniates and contacts an adjacent nerve root, it triggers radiating pain. Fortunately, the natural biological history of most disc herniations is gradual shrinkage and spontaneous resolution over weeks to months.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Sciatica (Nerve Root Irritation)</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Irritation of the sciatic nerve produces shooting, electric pain, pins and needles, or numbness travelling into the buttock, thigh, calf or foot. Leg pain is often more intense than the back discomfort itself.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Spinal Arthritis & Aging Changes</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Wear in facet joints causes morning stiffness that eases with light movement. Scan findings of degeneration are normal with aging and do not always correlate with pain severity. Read our <Link to="/arthritis-treatment/" className="text-[#BE8C1D] underline font-medium">arthritis treatment guide</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Acute vs Chronic Back Pain</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Acute back pain begins suddenly and settles within 6 weeks. Chronic back pain persists beyond 3 months; it involves physical deconditioning, nerve sensitivity, stress, and sleep disruption. Treatment shifts to building strength, mobility, and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S11, S12, S13 — RED FLAGS & EMERGENCY WARNING BOX */}
      <section className="py-12 border-b border-[#E8E5DE] bg-rose-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> SECTION S13: EMERGENCY WARNING SIGNS (CAUDA EQUINA SYNDROME)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Back Pain an Emergency?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Go immediately to a hospital emergency department or call <strong>Rescue 1122</strong> if back pain is accompanied by any of these red-flag warning signs:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 mb-6">
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>New loss of bladder or bowel control, leaking, or inability to pass urine</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Numbness or loss of feeling around the groin, genitals, or bottom ("saddle area")</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe, rapidly worsening weakness in a leg (e.g. foot drop or stumbling)</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Bilateral leg symptoms: pain, weakness, or numbness in both legs simultaneously</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Back pain following a major traumatic fall, car collision, or high-energy impact</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe back pain accompanied by fever, chills, or unexplained weight loss</span>
              </div>
            </div>

            <p className="text-xs text-rose-950 font-semibold leading-relaxed">
              These signs can indicate acute Cauda Equina Syndrome or spinal cord compromise. Immediate surgical evaluation is required to prevent permanent neurological deficits.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Should You Get Back Pain Checked Routinely?
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p>Book a non-emergency orthopaedic consultation if:</p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                <li>Pain has not improved after 4 to 6 weeks of home self-care</li>
                <li>Pain progressively worsens rather than settles</li>
                <li>Pain regularly disturbs your sleep or prevents you from working</li>
                <li>You experience repeated flare-ups that limit physical activities</li>
                <li>You have radiating pins and needles into the calf or foot</li>
              </ul>
              <p className="pt-2">
                Arrange a visit via our <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation service</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S14, S15, S16, S17, S18, S19 — NON-SURGICAL CARE & PHYSIOTHERAPY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14 TO S19</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Evidence-Based Non-Surgical Back Pain Management
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Clinical Evaluation & Rational Imaging</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  A careful medical history and physical examination (mobility, nerve reflexes, motor power) form the foundation. National guidelines (NICE NG59) recommend reserving MRI scans for cases where surgical intervention is being considered or serious pathology is suspected.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Stay Active vs Bed Rest</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Prolonged bed rest weakens spinal muscles and delays recovery. Short, gentle daily walks and maintaining normal light movements within comfortable limits promote blood circulation and tissue healing.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Targeted Physiotherapy & Core Stabilization</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  A physiotherapist guides exercises to strengthen the deep abdominal core, gluteal muscles, and paraspinal stabilizers, restoring spinal flexibility, reducing recurrence risk, and rebuilding movement confidence.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Education and Self-Management</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Understanding that pain does not equal structural damage reduces fear-avoidance. Learn more in our <Link to="/patient-education/" className="text-[#BE8C1D] underline font-medium">patient education section</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S20 TO S23 — SURGICAL REFERRAL & REDUCING RECURRENCE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21 TO S23</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Surgery Evaluated & How to Prevent Recurrence
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Surgery is evaluated only in selected scenarios: ongoing, disabling leg sciatica refractory to conservative care, progressive motor weakness, or acute spinal emergencies. Read our overview of <Link to="/spine-surgery/" className="text-[#BE8C1D] underline font-medium">spine surgery</Link> and <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] underline font-medium">surgical recovery</Link>.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-2 font-semibold">6 Healthy Habits to Reduce Recurrent Back Pain:</strong>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                  <li><strong>Regular walking:</strong> 20–30 minutes daily maintains disc nutrition and spinal mobility.</li>
                  <li><strong>Core strengthening:</strong> Consistent low-impact core exercise protects lumbar joints.</li>
                  <li><strong>Safe lifting technique:</strong> Bend your knees, keep loads close, and avoid twisting.</li>
                  <li><strong>Pacing activity:</strong> Avoid swinging between complete rest and sudden extreme exertion.</li>
                  <li><strong>Quality sleep and stress reduction:</strong> Chronic poor sleep and tension heighten pain sensitivity.</li>
                  <li><strong>Healthy body weight:</strong> Reduces unnecessary mechanical loading on the lower lumbar discs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S24 — DOCTOR PROFILE & 6 RELATED SERVICES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S24</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Orthopaedic Consultation for Back Pain in Lahore
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FAF8F2] border border-[#BE8C1D]/30 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-12 h-12" />
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-700">
                <p>
                  <strong>Dr. Mazhar Rafique</strong> is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of clinical experience in orthopaedic trauma, joint reconstruction, sports medicine, and spinal evaluations at BNI - Bashir NeuroSpine Institute, Shadman.
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
              Related Clinical Services:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/spine-back-pain/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Spine & Back Pain
                </h4>
                <p className="text-xs text-slate-600">Complete overview of spine and neck conditions.</p>
              </Link>
              <Link to="/spine-surgery/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Spine Surgery
                </h4>
                <p className="text-xs text-slate-600">Discectomy, decompression, and surgical indications.</p>
              </Link>
              <Link to="/orthopaedic-consultation/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Orthopaedic Consultation
                </h4>
                <p className="text-xs text-slate-600">Comprehensive examination and second opinions.</p>
              </Link>
              <Link to="/arthritis-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Arthritis Management
                </h4>
                <p className="text-xs text-slate-600">Care for joint wear, cartilage and spinal stiffness.</p>
              </Link>
              <Link to="/patient-education/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Patient Education
                </h4>
                <p className="text-xs text-slate-600">Browse guides on bone and joint health recovery.</p>
              </Link>
              <Link to="/about/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  About Dr. Mazhar Rafique
                </h4>
                <p className="text-xs text-slate-600">Clinical background, credentials and hospital affiliation.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S25 — FINAL CTA */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S25</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Arrange a Back Pain Consultation in Lahore
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            If you have persistent back pain, sciatica, or joint discomfort, arrange a clinical orthopaedic evaluation with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute, Lahore.
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
            Emergency note: New bladder or bowel problems, numbness in the saddle area, or severe worsening weakness require immediate emergency medical assessment at a hospital emergency department.
          </p>
        </div>
      </section>

      {/* B5 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">B5 — FAQS & TRUST</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Back Pain Treatment
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Clear medical explanations regarding lower back pain, sciatica, physiotherapy, and recovery.
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
