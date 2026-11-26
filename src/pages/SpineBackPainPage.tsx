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
  AlertCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const SpineBackPainPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What causes back pain?',
      a: 'Most back pain comes from strained muscles, ligaments or joints. Sometimes discs, arthritis or irritated nerves play a part. Often no single exact cause is found, and this is common.'
    },
    {
      q: 'What causes lower back pain?',
      a: 'The lower back carries body weight and moves a lot. Strains, stiff joints, disc problems and nerve irritation are common reasons. Lifting, long sitting and sudden activity can trigger it.'
    },
    {
      q: 'What causes neck pain?',
      a: 'Muscle strain, joint changes with age, disc problems and nerve irritation. Awkward sleeping and long screen use can add to it.'
    },
    {
      q: 'What is sciatica?',
      a: 'Pain, tingling or numbness that travels from the lower back or buttock down the leg, caused by an irritated or pressed nerve.'
    },
    {
      q: 'What is a slipped disc?',
      a: 'A disc is a soft cushion between spine bones. If its soft centre pushes out, it is called a disc herniation. It may press on a nerve and cause pain.'
    },
    {
      q: 'Can a slipped disc improve without surgery?',
      a: 'Often yes. Many people improve over weeks or months with activity and non-surgical care. Surgery is needed only in selected cases.'
    },
    {
      q: 'What is spinal stenosis?',
      a: 'Narrowing of the space around the spinal nerves. It can cause leg pain or heaviness when walking, and numbness.'
    },
    {
      q: 'Does arthritis cause back pain?',
      a: 'It can. Wear in the spinal joints can cause stiffness and pain. But many people with arthritis changes on scans have no pain.'
    },
    {
      q: 'When should I see a doctor for back pain?',
      a: 'If pain lasts more than a few weeks, keeps returning, affects daily life, spreads to an arm or leg, or comes with numbness or weakness.'
    },
    {
      q: 'When is back pain an emergency?',
      a: 'With new bladder or bowel problems, saddle numbness, severe or worsening leg weakness, a serious injury, or fever with severe pain. Go to emergency care at once.'
    },
    {
      q: 'Do I need an MRI for back pain?',
      a: 'Usually not at first. MRI is used for selected nerve or spine problems or when symptoms are serious or not improving. Results must match your symptoms.'
    },
    {
      q: 'Can physiotherapy help?',
      a: 'Yes, for many people. It can improve strength, movement and confidence. The plan should fit your condition.'
    },
    {
      q: 'Should I stay active with back pain?',
      a: 'Usually yes, gently. Long bed rest is not advised for most people. Increase activity step by step and stop to seek advice if symptoms worsen or nerve signs appear.'
    },
    {
      q: 'Do all back pain patients need surgery?',
      a: 'No. Most uncomplicated back pain does not need surgery.'
    },
    {
      q: 'When might spine surgery be considered?',
      a: 'For selected cases such as ongoing nerve compression, worsening nerve problems or certain unstable conditions, after careful assessment.'
    },
    {
      q: 'Can surgery guarantee pain relief?',
      a: 'No. Surgery can help some conditions, but no doctor can guarantee complete relief.'
    },
    {
      q: 'What are the risks of spine surgery?',
      a: 'Risks can include infection, bleeding, nerve injury, ongoing pain and the need for more treatment. A surgeon should explain the risks for your situation.'
    },
    {
      q: 'How long does back pain recovery take?',
      a: 'It varies. Many flare-ups settle within weeks. Some take longer. Nerve-related pain may take longer still. Your doctor can give a more personal outlook.'
    },
    {
      q: 'Can back pain return?',
      a: 'Yes, it can. Staying active and building strength may help lower the chance, though it cannot be prevented completely.'
    },
    {
      q: 'What is the difference between orthopaedic and spine specialist care?',
      a: 'Orthopaedic surgeons treat bones, joints and muscles, including many back and neck problems. Some doctors focus mainly on the spine. Please ask the clinic what services are available for your problem.'
    },
    {
      q: 'How can I book an appointment in Lahore?',
      a: `Call ${businessConfig.phone} or message on WhatsApp at ${businessConfig.phone}. Consultations take place at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: 'Can I contact the clinic through WhatsApp?',
      a: 'Yes, for appointment enquiries. WhatsApp is not for emergencies.'
    },
    {
      q: 'What should I do if I develop bladder problems with back pain?',
      a: 'Go to a hospital emergency department immediately. This can be a sign of serious nerve pressure (cauda equina syndrome). Do not wait for an appointment or a message reply.'
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
              BACK, NECK & SPINE HEALTH
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Spine and Back Pain Treatment in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Back and neck pain can make it hard to move, sleep and do daily work. Many causes improve with the right non-surgical care. Some symptoms need a closer check by a doctor. Surgery is only considered for selected spinal problems.
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

      {/* S01 & S02 — UNDERSTANDING & SPINE ANATOMY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Understanding Back, Neck and Spine Problems
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Back pain is very common. Almost everyone experiences it at some time. Neck pain is common too. These problems can change how you move, sit, sleep and work.
              </p>
              <p>
                There are many different causes. Most are not serious, and many get better over time. Some need a doctor to look more closely. This category hub explains common spinal conditions, which signs need prompt attention, and which treatments are usually tried first. You can also explore our <Link to="/patient-education/" className="text-[#BE8C1D] underline font-medium">patient education guides</Link>.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Does Your Spine Support Your Body?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Your spine is a strong column in the middle of your back. It holds your body upright and protects the delicate spinal cord, which carries nerve messages between your brain and your body.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">Vertebrae & Discs</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Bony building blocks stacked together, separated by soft, springy discs that absorb impact shocks and allow flexibility.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">Facet Joints & Ligaments</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Small synovial joints at the back of each vertebra that guide smooth bending and twisting while tough ligaments maintain stability.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">Spinal Nerves</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Nerve roots branch out through small bony exits (foramina) to supply sensation and muscle strength to arms, torso, and legs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">Core Musculature</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Deep paraspinal, abdominal, and hip muscles work together as a dynamic muscular corset supporting the spinal column.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03, S04, S05 — CAUSES, LOWER BACK PAIN & NECK PAIN */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03 & S04</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Causes Lower Back Pain?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Most back pain comes from muscles, ligaments and small spinal joints. Doctors often call this <em>mechanical back pain</em> or non-specific low back pain. It carries much of your body’s weight and bends continuously throughout the day:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 my-2">
                <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong>Muscle or ligament strain:</strong> Following sudden heavy lifting, twisting, or prolonged awkward postures.
                </li>
                <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong>Disc irritation:</strong> A bulging disc or disc herniation irritating sensitive outer disc nerves.
                </li>
                <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong>Facet joint stiffness:</strong> Age-related arthritis or inflammation of the small stabilizing joints.
                </li>
                <li className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong>Sciatic nerve irritation:</strong> Nerve compression producing shooting pain or tingling down the leg.
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 pt-1">
                For detailed non-surgical management, explore our dedicated <Link to="/back-pain-treatment/" className="text-[#BE8C1D] underline font-semibold">back pain treatment page</Link>.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Causes Neck Pain?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Your neck (cervical spine) supports the weight of your head while permitting extensive motion. Common causes of neck ache include muscular strain from long screen or phone use ("text neck"), awkward sleeping positions, and age-related wear in the cervical discs and facet joints.
              </p>
              <p>
                Most neck pain settles with gentle movement and ergonomic adjustments. However, if neck pain radiates down your arm, causes hand tingling or numbness, or causes clumsy fingers and unsteadiness, prompt orthopaedic evaluation is warranted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06, S07, S08, S09, S10 — SCIATICA, SLIPPED DISC, STENOSIS & AGING */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S06 TO S10</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Common Spinal Conditions Explained
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">What Is Sciatica?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  The sciatic nerve is the longest nerve in the human body, running from the lower back through the buttock down to the foot. When compressed or irritated, it produces sharp, burning pain, pins and needles, or numbness travelling below the knee. Many people recover within weeks with guided physical therapy.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">What Is a Slipped Disc?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  A disc does not actually slip. Instead, the gel-like nucleus pulposus pushes through a tear in the tough outer annulus fibrosus (disc herniation). If it touches a nerve root, it triggers radiating leg pain. Many disc herniations shrink and resolve naturally over time without surgery.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">What Is Spinal Stenosis?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Spinal stenosis means the central spinal canal or nerve exits have narrowed due to bone spurs and thickened ligaments. Typical symptoms include leg heaviness, cramping, or numbness during walking that eases when sitting or leaning forward over a shopping cart.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Age-Related Spinal Changes & Arthritis</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  As we grow older, spinal discs naturally lose water content and thin out, and facet joints show wear. Many people with degenerative changes on an MRI have zero back pain. A scan report alone does not mean your back is fragile. Learn more about <Link to="/arthritis-treatment/" className="text-[#BE8C1D] underline font-medium">arthritis management</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S11 & S12 — WHEN TO SEE A DOCTOR & EMERGENCY RED FLAGS */}
      <section className="py-12 border-b border-[#E8E5DE] bg-rose-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> SECTION S12: CRITICAL EMERGENCY WARNING SIGNS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Back Pain an Emergency? (Cauda Equina Syndrome)
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Most back pain is harmless. However, acute compression of the lower spinal nerves (cauda equina) is a medical emergency requiring immediate hospital evaluation. Go to the nearest emergency department straight away or call <strong>Rescue 1122</strong> if you notice:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 mb-6">
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>New difficulty passing urine or inability to empty your bladder</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Loss of bowel control, leaking, or loss of sensation when wiping</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Numbness or loss of feeling around the groin, genitals, or bottom ("saddle area")</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe, rapidly worsening weakness in one or both legs (foot drop, stumbling)</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Back pain following a major traumatic fall or road traffic collision</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe back pain accompanied by high fever or unexplained weight loss</span>
              </div>
            </div>

            <p className="text-xs text-rose-950 font-semibold leading-relaxed">
              Do not wait for a routine appointment or WhatsApp response when emergency signs are present. Fast decompression surgery protects against permanent nerve paralysis and incontinence.
            </p>
          </div>

          {/* S11 Routine Signs */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Should You See a Doctor for Back or Neck Pain?
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p>For non-emergency concerns, book an in-person assessment if:</p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                <li>Pain persists beyond 4 to 6 weeks despite simple rest and activity changes</li>
                <li>Pain constantly wakes you from sleep or disrupts your ability to work</li>
                <li>Pain repeatedly radiates into your buttocks, legs, or arms</li>
                <li>You experience pins and needles or localized numbness</li>
                <li>You are unsure of the cause and want clear medical guidance</li>
              </ul>
              <p className="pt-2">
                Schedule a consultation through our <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation service</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S13, S14, S15, S16 — ASSESSMENT, SCANS & NON-SURGICAL CARE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13 TO S16</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Clinical Assessment, Imaging & Non-Surgical Care
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">How a Clinical Examination Works</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Your doctor listens to your symptom history, evaluates spinal mobility, tests muscle power in the legs or arms, checks light-touch sensation, tests tendon reflexes, and observes your gait.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Do You Need an MRI Scan?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Usually, no. Guidelines (including NICE NG59) recommend against routine MRI scans for uncomplicated mechanical back pain because scan abnormalities are common in pain-free adults. An MRI is reserved for progressive nerve symptoms, suspected infection or tumour, or when planning surgical intervention.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Active Rehabilitation First</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Prolonged bed rest leads to muscle deconditioning and worsens stiffness. Gentle walking, guided core strengthening, posture advice, and gradual activity pacing represent the gold standard for back recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S17, S18, S19 — SPECIALIST REFERRAL & SURGICAL INDICATIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17 TO S19</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is Spine Surgery Considered?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Surgery is never the first option for routine back pain. It is discussed for selected individuals when persistent nerve compression causes disabling leg or arm symptoms that do not resolve with conservative therapy, when muscle weakness worsens progressively, or for spinal instability.
              </p>
              <p>
                Read our in-depth educational guide to <Link to="/spine-surgery/" className="text-[#BE8C1D] underline font-semibold">spine surgery options, risks and recovery</Link> or review our guide to <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] underline font-medium">preparing for surgery and recovery</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S20 — EXPLORE TWO RELATED SERVICES (CHILD CARDS) */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Spine and Back Pain Services
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select the service page that best fits your clinical questions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs hover:border-[#BE8C1D] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">Surgical Guide</span>
                <h3 className="text-xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Spine Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Learn how doctors assess selected spinal conditions for surgery, what discectomy, decompression and fusion involve, and why conservative care is tried first.
                </p>
              </div>
              <Link
                to="/spine-surgery/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BE8C1D] hover:underline mt-auto"
              >
                <span>Explore Spine Surgery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs hover:border-[#BE8C1D] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">Conservative Care</span>
                <h3 className="text-xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Back Pain Treatment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Find out how back pain and sciatica are assessed, how physiotherapy and exercise rehabilitation work, and when further imaging tests may be needed.
                </p>
              </div>
              <Link
                to="/back-pain-treatment/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BE8C1D] hover:underline mt-auto"
              >
                <span>Explore Back Pain Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — DOCTOR PROFILE & 5 RELATED SERVICES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Orthopaedic Consultation for Back & Neck Pain in Lahore
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FAF8F2] border border-[#BE8C1D]/30 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-12 h-12" />
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-700">
                <p>
                  <strong>Dr. Mazhar Rafique</strong> is a Consultant Orthopaedic Surgeon in Lahore with over 10 years of clinical experience in orthopaedic, trauma and sports injury care at BNI - Bashir NeuroSpine Institute, Shadman. His clinical interests include back pain, neck pain, joint disorders, and musculoskeletal trauma.
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
              <Link to="/orthopaedic-consultation/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Orthopaedic Consultation
                </h4>
                <p className="text-xs text-slate-600">Clinical assessment for bone, joint and spine problems.</p>
              </Link>
              <Link to="/arthritis-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Arthritis Management
                </h4>
                <p className="text-xs text-slate-600">Care for stiff, painful joints and spinal osteoarthritis.</p>
              </Link>
              <Link to="/fracture-trauma-surgery/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Fracture & Trauma Surgery
                </h4>
                <p className="text-xs text-slate-600">Treatment for broken bones, spinal fractures and trauma.</p>
              </Link>
              <Link to="/patient-education/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Patient Education
                </h4>
                <p className="text-xs text-slate-600">Plain-language guides to help you understand your health.</p>
              </Link>
              <Link to="/about/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  About Dr. Mazhar Rafique
                </h4>
                <p className="text-xs text-slate-600">Background, training credentials and surgical philosophy.</p>
              </Link>
              <Link to="/contact/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Contact & Location
                </h4>
                <p className="text-xs text-slate-600">Direct directions to the clinic in Shadman, Lahore.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S22 — FINAL CTA */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Arrange a Back or Neck Pain Consultation in Lahore
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            If you have ongoing back or neck discomfort, sciatica, or joint pain, book a clinical orthopaedic evaluation with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute, Lahore.
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
            Emergency note: New bladder or bowel problems, numbness in the saddle area, or severe worsening weakness require immediate emergency medical care at a hospital emergency department.
          </p>
        </div>
      </section>

      {/* B5 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">B5 — FAQS & TRUST</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Spine & Back Pain
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Helpful answers on mechanical back pain, sciatica, MRI tests, and when to seek medical help.
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
