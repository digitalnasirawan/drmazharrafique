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
  Wrench, 
  AlertCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const SpineSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What is spine surgery?',
      a: 'Spine surgery is an operation on the bones, discs or nerves of the spine. It is usually done to take pressure off a nerve, to steady bones that move too much, or to treat certain injuries or other specific problems. It is only suitable for some people.'
    },
    {
      q: 'What conditions may need spine surgery?',
      a: 'Some people with a slipped disc that presses on a nerve, spinal stenosis, some unstable spine conditions, certain fractures, or other specific spine problems may be offered surgery. Most people with these problems are first treated without an operation, and many improve.'
    },
    {
      q: 'Do all slipped discs need surgery?',
      a: 'No. Many slipped discs get better slowly with gentle activity, medicine and physiotherapy. A doctor may talk about surgery if symptoms do not improve, or if weakness or numbness is getting worse.'
    },
    {
      q: 'Can sciatica improve without surgery?',
      a: 'Yes, many people with sciatica improve with time and non-surgical care. Surgery may be discussed if leg pain is severe or disabling and does not settle, or if weakness is increasing. Results differ for each person.'
    },
    {
      q: 'What is spinal stenosis?',
      a: 'Spinal stenosis means there is less space in the spine for the nerves. It often comes with age or arthritis. It may cause leg pain, numbness or heaviness, especially when walking or standing. Many people are treated without surgery first.'
    },
    {
      q: 'When is spinal decompression considered?',
      a: 'Decompression, which means making more room for nerves, may be considered when nerve pressure matches your symptoms and scan, and when symptoms are disabling or getting worse despite suitable care. Your surgeon should explain your own benefits and risks.'
    },
    {
      q: 'What is discectomy?',
      a: 'Discectomy is an operation to remove the part of a slipped disc that presses on a nerve. It aims to ease nerve symptoms, often leg pain. It does not suit every person and it is not a cure for every kind of back pain.'
    },
    {
      q: 'What is microdiscectomy?',
      a: 'Microdiscectomy is a form of discectomy done through a small opening using magnification. It is used for selected disc problems. Whether it is suitable depends on your diagnosis and your surgeon’s judgement.'
    },
    {
      q: 'What is spinal fusion?',
      a: 'Spinal fusion joins two or more spinal bones so they heal together. It is used for selected problems, such as some unstable conditions or fractures. It is not a routine treatment for common back pain.'
    },
    {
      q: 'Does spinal fusion reduce movement?',
      a: 'Yes. Bones that are fused no longer move separately, so some movement at that level is lost. The spine often adapts, but other levels may carry extra load over time. Your surgeon can explain what this may mean for you.'
    },
    {
      q: 'What is minimally invasive spine surgery?',
      a: 'It means using smaller cuts and special tools to reach the problem in selected operations. It may cause less muscle disturbance for some people. It is not always safer or better than open surgery.'
    },
    {
      q: 'Is minimally invasive surgery suitable for everyone?',
      a: 'No. Whether it is suitable depends on your condition, your scans, your health and your surgeon’s training. In some cases an open operation is the better choice.'
    },
    {
      q: 'What tests are needed before surgery?',
      a: 'Doctors may use an MRI, X-rays, a CT scan or, in selected cases, nerve tests. The tests chosen depend on your symptoms. Not everyone needs every test.'
    },
    {
      q: 'Do I need an MRI?',
      a: 'Not always. Many people with back pain do not need a scan at the start. An MRI is often used when nerve pressure is suspected, when symptoms continue, or when surgery is being considered. A doctor decides after an examination.'
    },
    {
      q: 'Can physiotherapy help before surgery?',
      a: 'Yes, for many people. Physiotherapy and exercise are often tried before surgery and may help symptoms or help you move better. Your doctor can advise whether it suits your problem.'
    },
    {
      q: 'When is spine surgery necessary?',
      a: 'Surgery is considered for selected conditions: for example, nerve pressure with disabling symptoms that do not improve, worsening weakness, some unstable conditions or injuries. It is needed urgently in emergencies such as cauda equina syndrome.'
    },
    {
      q: 'What are the risks of spine surgery?',
      a: 'Possible risks include infection, bleeding, nerve injury, a spinal fluid leak, blood clots, ongoing pain, return of symptoms, problems with implants if used, and the need for more surgery. Your surgeon should explain risks that apply to you.'
    },
    {
      q: 'Can spine surgery guarantee pain relief?',
      a: 'No. Surgery may help some symptoms, especially nerve pain, but it cannot promise that all pain will go or that you will fully recover. Some pain may remain, and symptoms can return.'
    },
    {
      q: 'How long does recovery take?',
      a: 'It is different for each person and each operation. Your surgeon will tell you what to expect and what to avoid. Please follow your own team’s advice rather than a general time table.'
    },
    {
      q: 'When can I walk after surgery?',
      a: 'Many people are helped to move gently soon after some operations, but timing depends on the operation and your condition. Your surgical team will tell you when and how to walk safely.'
    },
    {
      q: 'Will I need physiotherapy?',
      a: 'Often, yes. Many people benefit from physiotherapy to regain strength, movement and confidence. Your surgeon will advise when it should start and what type is right for you.'
    },
    {
      q: 'Can symptoms return after surgery?',
      a: 'Yes. A disc can herniate again, other levels may wear, and some symptoms can continue or come back. Follow-up and healthy habits may help, but no one can promise symptoms will never return.'
    },
    {
      q: 'When is back pain an emergency?',
      a: 'Get emergency help for new bladder or bowel control problems, trouble passing urine with nerve symptoms, saddle numbness, severe or fast-worsening weakness, weakness in both legs, major injury, serious new walking or balance problems, or fever with severe spine pain. Do not wait for a routine appointment.'
    },
    {
      q: 'How can I arrange an orthopaedic consultation in Lahore?',
      a: `You can call ${businessConfig.phone} or send a WhatsApp message to book an appointment with Dr. Mazhar Rafique at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: 'Can I contact the clinic through WhatsApp?',
      a: 'Yes, you can use WhatsApp for appointment enquiries. Replies may not be instant, so do not use WhatsApp for emergencies. In an emergency, go to the nearest emergency department.'
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Wrench className="w-3.5 h-3.5 text-[#BE8C1D]" />
              SPINAL CONDITIONS & SURGICAL ASSESSMENT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Spine Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Some spine problems can press on nerves and make it hard to move, walk or do daily work. Many of these problems get better without surgery. Surgery may be considered for selected conditions after a careful assessment. The right treatment depends on your symptoms, an examination, scan results and your own needs.
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
              Consultations and surgical assessments at BNI - Bashir NeuroSpine Institute, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* S01 & S02 — WHAT IS SPINE SURGERY & ANATOMY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Is Spine Surgery?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Spine surgery means an operation on the bones, discs and nerves of the back and neck. Surgery is performed for two principal reasons: to relieve mechanical compression on nerves, and to stabilize spinal segments that move abnormally.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1 font-semibold">Most Back Pain Does Not Need Surgery</strong>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most back pain that has no sinister cause resolves with non-surgical management, including gentle activity, physiotherapy, and posture modifications. Surgery is only appropriate for carefully selected clinical indications.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Does the Spine Work?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Nerves need room. When a disc bulges or bone spurs narrow the spinal canal, nerve roots can become pinched. In the lower back, the spinal cord terminates around L1-L2, continuing downward as the <em>cauda equina</em> ("horse's tail")—a delicate bundle of nerves that controls leg motor power and pelvic organ function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03, S04, S05, S06, S07, S08, S09 — CONDITIONS REQUIRING ASSESSMENT */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03 TO S09</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Spine Conditions That May Warrant Surgical Assessment
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Herniated (Slipped) Disc Pressing on Nerves</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  When inner disc material herniates and compresses a nerve root, radiating pain, numbness, or muscle weakness can occur. Many improve naturally; surgical discectomy is discussed when severe symptoms persist despite weeks of treatment.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Sciatica (Lumbar Radiculopathy)</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Sharp, electric pain travelling down the buttock into the leg. Surgery may be considered if leg pain remains severe or if progressive motor weakness (such as foot drop) develops.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Lumbar Spinal Stenosis</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Age-related narrowing of the canal producing neurogenic claudication—leg aching and heaviness after walking short distances that improves when sitting. Decompression surgery widens the bony canal when quality of life is severely limited.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Cervical Spine Radiculopathy & Myelopathy</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Pinched nerves in the neck cause arm pain and hand numbness. Pressure on the cervical spinal cord itself (myelopathy) is serious, causing balance issues, clumsy hands, and walking unsteadiness that requires prompt surgical evaluation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Spinal Instability & Spondylolisthesis</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  When one vertebral bone slips forward over another, it can cause pain that worsens with movement and nerve irritation. Fusion surgery joins the bones when conservative bracing and core strengthening fail.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Spinal Fractures</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Trauma from accidents or falls can fracture spinal vertebrae. Unstable fractures require specialized surgical fixation. Read more on our <Link to="/fracture-trauma-surgery/" className="text-[#BE8C1D] underline font-medium">fracture and trauma surgery page</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S10 & S11 — RED FLAGS & CAUDA EQUINA WARNING BOX */}
      <section className="py-12 border-b border-[#E8E5DE] bg-rose-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> SECTION S11: EMERGENCY RED FLAGS — CAUDA EQUINA SYNDROME
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Is a Spine Problem an Emergency?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              <strong>GO TO AN EMERGENCY DEPARTMENT IMMEDIATELY.</strong> Do not wait for a routine appointment or a WhatsApp reply if you develop any of the following symptoms:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 mb-6">
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>New loss of bladder or bowel control, leaking, or inability to pass urine</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Numbness around your genitals, buttocks, or inner thighs (saddle numbness)</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe, rapidly worsening weakness or numbness in one or both legs</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Severe back pain accompanied by high fever or systemic illness</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Sudden onset of severe balance loss and clumsy hands after a neck injury</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Spine injury after a high-speed vehicle crash or fall from height</span>
              </div>
            </div>

            <p className="text-xs text-rose-950 font-semibold leading-relaxed">
              In Punjab, call <strong>Rescue 1122</strong> or go directly to the nearest hospital trauma centre. Quick decompression surgery within hours gives the best chance to protect permanent nerve function.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S10</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Should You See a Doctor for Routine Spine Assessment?
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p>Book a specialist consultation if:</p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                <li>Back or neck pain lasts for more than 4 to 6 weeks or keeps recurring</li>
                <li>Pain radiates into your arm or leg and interferes with daily tasks</li>
                <li>You feel persistent pins and needles or localized numbness</li>
                <li>Symptoms stop you from working, sleeping, or standing comfortably</li>
              </ul>
              <p className="pt-2">
                Arrange a consultation through our <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation service</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S12, S13, S14, S15 — ASSESSMENT, TESTS & CONSERVATIVE CARE FIRST */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S12 TO S15</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Assessment, Imaging Tests & Non-Surgical Care First
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Clinical Neurological Examination</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  A specialist evaluation tests motor power, sensory dermatomes, deep tendon reflexes, and straight leg raise tests to identify exact nerve root levels.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Imaging: MRI, CT & X-rays</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  MRI scans show nerves, discs, and the spinal cord in high resolution. However, scan findings must correlate with clinical symptoms, as many asymptomatic adults have disc bulges on MRI.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Conservative Management Always Precedes Surgery</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Unless red-flag neurological emergencies exist, a structured trial of non-surgical care is standard. Read our full guide on <Link to="/back-pain-treatment/" className="text-[#BE8C1D] underline font-medium">conservative back pain treatment</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S16 TO S19 — TYPES OF SPINE SURGERY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16 TO S19: SURGICAL PROCEDURES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Types of Spine Surgery Exist?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Educational overview of standard spinal procedures:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1 font-semibold">Spinal Decompression (Laminectomy)</strong>
                <p className="text-slate-600">
                  Removing bone spurs and thickened ligamentum flavum to relieve pressure on squeezed nerves in spinal stenosis.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1 font-semibold">Discectomy & Microdiscectomy</strong>
                <p className="text-slate-600">
                  Excising the extruded fragment of a herniated disc using precision surgical loops or microscope magnification to relieve leg pain.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1 font-semibold">Spinal Fusion (Arthrodesis)</strong>
                <p className="text-slate-600">
                  Joining two or more vertebrae permanently with bone graft and titanium pedicle screws and rods to stop painful abnormal motion.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-1 font-semibold">Minimally Invasive Spine Surgery (MISS)</strong>
                <p className="text-slate-600">
                  Utilizing specialized tubular retractors to reach the spine with less muscle disruption, applicable to selected procedures.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">
              Note: This information is provided for educational clarity. Any surgical recommendation is personalized during an orthopaedic consultation.
            </p>
          </div>
        </div>
      </section>

      {/* S20, S21, S22, S23 — RISKS TABLE, PREPARATION & RECOVERY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21: RISKS AND COMPLICATIONS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Are the Possible Risks of Spine Surgery?
            </h2>
            <p className="text-sm text-slate-700 mb-6 leading-relaxed">
              Every operation carries risks. Ethical spine practice requires full transparency regarding potential surgical complications:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E5DE] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold text-slate-800 w-1/3">Complication Risk</th>
                    <th className="p-3.5 font-bold text-slate-800 w-2/3">Clinical Explanation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE]">
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Surgical Site Infection</td>
                    <td className="p-3.5 text-slate-700">Superficial skin wound or deep spinal infection managed with antibiotics or debridement.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Nerve Injury or Numbness</td>
                    <td className="p-3.5 text-slate-700">Traction or irritation of sensitive nerve roots causing temporary or rare lasting weakness.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Dural Tear / CSF Leak</td>
                    <td className="p-3.5 text-slate-700">Small tear in the protective membrane surrounding spinal fluid, requiring intraoperative repair.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Blood Clots (DVT / PE)</td>
                    <td className="p-3.5 text-slate-700">Immobility raising clot risks in leg veins, mitigated by compression pumps and blood thinners.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Persistent Pain or Recurrence</td>
                    <td className="p-3.5 text-slate-700">Incomplete relief of back pain, or a recurrent disc herniation at the operated level over time.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-[#111111]">Implant Loosening / Nonunion</td>
                    <td className="p-3.5 text-slate-700">In fusion cases, failure of bone graft to knit (pseudoarthrosis) or screw loosening.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-2 text-xs sm:text-sm text-slate-600">
              <p>
                Learn how to prepare by reviewing our guide on <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] underline font-medium">preparing for surgery and recovery</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S24 — DOCTOR PROFILE & 6 RELATED SERVICES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S24</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Orthopaedic Assessment for Spine & Back Problems in Lahore
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FAF8F2] border border-[#BE8C1D]/30 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-12 h-12" />
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-700">
                <p>
                  <strong>Dr. Mazhar Rafique</strong> is a Consultant Orthopaedic Surgeon in Lahore with over a decade of clinical experience in orthopaedic, trauma and sports injury care at BNI - Bashir NeuroSpine Institute, Shadman. His clinical interests include back pain, neck pain, joint disorders, and musculoskeletal trauma.
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
              Related Spine & Orthopaedic Services:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/spine-back-pain/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Spine & Back Pain
                </h4>
                <p className="text-xs text-slate-600">Overview of back, neck, and nerve symptoms.</p>
              </Link>
              <Link to="/back-pain-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Back Pain Treatment
                </h4>
                <p className="text-xs text-slate-600">Non-surgical care, core exercise, and rehabilitation.</p>
              </Link>
              <Link to="/orthopaedic-consultation/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Orthopaedic Consultation
                </h4>
                <p className="text-xs text-slate-600">In-person examination and second surgical opinions.</p>
              </Link>
              <Link to="/fracture-trauma-surgery/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Fracture & Trauma Surgery
                </h4>
                <p className="text-xs text-slate-600">Surgical stabilization for bone and spinal fractures.</p>
              </Link>
              <Link to="/patient-education/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Patient Education
                </h4>
                <p className="text-xs text-slate-600">Educational guides to understand your diagnosis.</p>
              </Link>
              <Link to="/about/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  About Dr. Mazhar Rafique
                </h4>
                <p className="text-xs text-slate-600">Qualifications, credentials, and practice history.</p>
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
            Arrange an Orthopaedic Spine Assessment in Lahore
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            If you have persistent back or neck symptoms, sciatica, or a diagnosed spinal condition and need a thorough orthopaedic assessment or second opinion, contact our clinic at BNI - Bashir NeuroSpine Institute, Lahore.
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
            Emergency note: New bladder or bowel problems, saddle numbness, or sudden worsening weakness require immediate emergency medical care at a hospital emergency department.
          </p>
        </div>
      </section>

      {/* B5 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">B5 — FAQS & TRUST</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Spine Surgery
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Objective, plain-language answers about spinal operations, discectomy, risks, and recovery.
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
