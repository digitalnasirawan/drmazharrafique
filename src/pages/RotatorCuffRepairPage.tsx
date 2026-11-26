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
  Check, 
  Layers, 
  FileText,
  Clock,
  Compass,
  Zap,
  Flame
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const RotatorCuffRepairPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is the rotator cuff?",
      a: "It is a group of four shoulder muscles and their tendons. They wrap around the top of the upper arm bone. They help you lift and turn your arm and keep the shoulder joint steady."
    },
    {
      q: "What causes a rotator cuff tear?",
      a: "A tear can come from a sudden injury, such as a fall, or from wear over time. Repeated overhead use and age over 40 raise the risk. Many tears are not sport-related."
    },
    {
      q: "What is the difference between partial and full-thickness tears?",
      a: "A partial tear damages part of the tendon thickness. A full-thickness tear goes all the way through the tendon. Both can be treated in different ways."
    },
    {
      q: "What are the symptoms of a rotator cuff tear?",
      a: "Common signs are shoulder pain, night pain, weakness, trouble lifting the arm and pain with overhead activity. Some tears cause little pain. Other shoulder problems can feel similar, so an examination is needed."
    },
    {
      q: "Can a rotator cuff tear heal without surgery?",
      a: "Symptoms often improve with non-surgical care, such as physiotherapy. However, a torn tendon does not always heal back to the bone without surgery, and some tears can grow. Your doctor will review your progress."
    },
    {
      q: "Does every rotator cuff tear need surgery?",
      a: "No. Many tears are managed without surgery first. Surgery is considered for selected tears, depending on symptoms, weakness, tear features and your needs."
    },
    {
      q: "How is a rotator cuff tear diagnosed?",
      a: "The doctor asks about your symptoms and injury, examines the shoulder and tests movement and strength. Imaging is used when it will help the plan."
    },
    {
      q: "Do I need an MRI?",
      a: "Not always. X-rays, ultrasound or MRI may be used depending on your symptoms and examination. MRI is often helpful when surgery is being considered. Your doctor will advise which test suits you."
    },
    {
      q: "What is rotator cuff repair?",
      a: "It is surgery to fix a torn rotator cuff tendon, usually by attaching it back to the bone. It is only suitable when the tendon tissue can be repaired."
    },
    {
      q: "How is rotator cuff repair performed?",
      a: "After anaesthesia, the surgeon reaches the shoulder, examines the tear and repairs the tendon when suitable, often using stitches and small anchors. The wounds are then closed and recovery planning begins."
    },
    {
      q: "What is arthroscopic rotator cuff repair?",
      a: "It is keyhole repair. The surgeon uses a small camera and thin instruments through small cuts. It is not suitable for every tear."
    },
    {
      q: "What are the possible benefits of surgery?",
      a: "Possible benefits include less pain, better movement and, in selected cases, better strength. Results vary and are not guaranteed."
    },
    {
      q: "What are the risks of rotator cuff repair?",
      a: "Risks include infection, bleeding, blood clots, stiffness, ongoing pain, failed healing, re-tear, nerve or blood vessel injury, anaesthesia problems and the chance of further surgery."
    },
    {
      q: "How long does recovery take?",
      a: "It varies. It depends on tear size, tendon quality, repair method, rehabilitation and your health. Many people need several months, and some need longer. Your surgeon will guide you."
    },
    {
      q: "Will I need to wear a sling?",
      a: "Often yes, for a period set by your surgeon. The sling protects the repair while it heals. Follow your surgeon's instructions on when to wear it and when to stop."
    },
    {
      q: "Is physiotherapy necessary?",
      a: "It is an important part of both non-surgical care and recovery after surgery. It protects the repair, restores movement and rebuilds strength in stages."
    },
    {
      q: "Can the tendon tear again?",
      a: "Yes. A re-tear is possible, especially with larger tears or weaker tendon tissue. Some re-tears cause few symptoms. Others need more care. Tell your surgeon if pain or weakness returns."
    },
    {
      q: "When can I return to work or sports?",
      a: "It depends on your job, the sport and your recovery. Your surgeon will tell you when it is safe. Returning too soon can put the repair at risk."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call ${businessConfig.phone} or send a WhatsApp message to ${businessConfig.phone}. The clinic is at ${businessConfig.clinicName}, ${businessConfig.fullAddress}.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. WhatsApp is available for appointments on ${businessConfig.phone}. Please do not use WhatsApp for emergencies. For urgent problems, go to the nearest emergency department.`
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#111111]">
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-2.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
          <Link to="/" className="hover:text-[#BE8C1D]">Home</Link>
          <span className="mx-2 text-slate-400">/</span>
          <Link to="/upper-limb-surgery/" className="hover:text-[#BE8C1D]">Shoulder, Hand &amp; Upper Limb Surgery</Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-[#111111] font-semibold">Rotator Cuff Repair</span>
        </div>
      </nav>

      {/* B3 — HERO SECTION */}
      <section className="relative bg-white py-12 sm:py-16 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              SHOULDER TENDON INJURY &amp; REPAIR
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Rotator Cuff Repair in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              A torn rotator cuff tendon can cause shoulder pain and weakness. Some tears improve with non-surgical treatment, such as physiotherapy. Selected tears may need surgical repair. If your shoulder hurts or feels weak, you can arrange an orthopaedic assessment with Dr. Mazhar Rafique in Lahore.
            </p>

            <div className="flex flex-wrap justify-center gap-3.5">
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm shadow-sm hover:bg-[#a67a18] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS THE ROTATOR CUFF? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is the Rotator Cuff?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              The rotator cuff is a group of four muscles in your shoulder (supraspinatus, infraspinatus, teres minor, subscapularis). Each muscle ends in a strong fibrous band called a tendon that connects muscle to bone.
            </p>
            <p>
              These four tendons merge and envelop the top of your upper arm bone (humerus) like a supportive cuff around the ball of the joint.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">1. Produces arm movement</p>
                <p className="text-xs text-slate-600 mt-1">Allows you to lift your arm overhead, reach sideways, and rotate inward and outward.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">2. Dynamic joint centering</p>
                <p className="text-xs text-slate-600 mt-1">Compacts the humeral head into the shallow glenoid socket so the arm doesn&apos;t slip or impinge.</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              When a tendon is damaged, the mechanical balance of the shoulder is disrupted, producing characteristic catching pain and weakness.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — WHAT HAPPENS WHEN A ROTATOR CUFF TENDON TEARS? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens When a Rotator Cuff Tendon Tears?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              A rotator cuff tear occurs when the tendon fibres are frayed, partially cut, or fully detached from the greater tuberosity bone footprint. Most tears begin in the <strong>supraspinatus tendon</strong>, though larger tears can extend into the infraspinatus or subscapularis.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-1">Why do symptoms differ?</h3>
              <p className="text-xs text-slate-600">
                Two people with identical tears on an MRI can feel completely different. One may suffer severe night pain and zero arm elevation; another may feel only slight weakness when reaching overhead. Age, physical demands, tear duration, and compensatory deltoid strength all influence what you feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03 — TYPES OF ROTATOR CUFF TEARS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Types of Rotator Cuff Tears
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Feature</th>
                  <th className="p-3.5">Partial-thickness tear</th>
                  <th className="p-3.5">Full-thickness tear</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr>
                  <td className="p-3 font-bold text-[#111111]">What it means</td>
                  <td className="p-3">The tendon is damaged but still partly attached to the bone footprint.</td>
                  <td className="p-3">There is a complete gap going all the way through the tendon tissue.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Common symptoms</td>
                  <td className="p-3">Ache when lifting arm, night pain, catching. Arm elevation is usually preserved.</td>
                  <td className="p-3">Marked arm weakness, inability to hold arm horizontally, severe night pain.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">General treatment thoughts</td>
                  <td className="p-3">Often managed initially with physiotherapy and activity modifications.</td>
                  <td className="p-3">Considered for surgical repair based on age, tear retraction, and functional demands.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S04 — WHAT CAUSES ROTATOR CUFF TEARS? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Rotator Cuff Tears?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">1. Acute traumatic tear</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Falling onto an outstretched hand or lifting a heavy load with a sudden jerk. These tears are common in younger athletes and active adults and often benefit from prompt surgical discussion.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">2. Degenerative wear over time</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tendon collagen naturally loses vascularity and elasticity over decades. Slow, progressive tears can occur after the age of 40 even without any remembered trauma.
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white text-xs text-slate-700">
            <strong>Contributing risk factors:</strong> Repeated overhead tasks (cricket bowling, painting, construction), smoking, poor blood supply to the critical hypovascular tendon zone, and diabetic microvascular changes.
          </div>
        </div>
      </section>

      {/* S05 — COMMON SIGNS OF A ROTATOR CUFF TEAR */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of a Rotator Cuff Tear
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Dull ache located at front and side of the shoulder</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Throbbing night pain, especially when lying on that side</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Weakness when elevating, reaching, or holding objects</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Painful arc between 60° and 120° of arm elevation</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Difficulty combing hair or tucking in garments behind back</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Cracking or clicking sensations when lowering the arm</span>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Frozen shoulder, cervical nerve radiculopathy, and arthritis produce overlapping pain. A clinical examination confirms the true diagnosis.
          </p>
        </div>
      </section>

      {/* S06 — WHEN SHOULD YOU GET SHOULDER PAIN CHECKED? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Get Shoulder Pain Checked?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white">
              <h3 className="font-bold text-sm text-[#111111] mb-3">Arrange an orthopaedic assessment if:</h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Shoulder pain persists beyond 2 to 3 weeks.</li>
                <li>• You notice increasing weakness when lifting the arm.</li>
                <li>• Sleep is routinely disrupted by throbbing shoulder ache.</li>
                <li>• You had an injury or fall and arm function hasn&apos;t returned.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 border-red-300 bg-red-50/50">
              <h3 className="font-bold text-sm text-red-950 mb-3 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Seek emergency medical care if:
              </h3>
              <ul className="space-y-1.5 text-xs text-red-900">
                <li>• Shoulder looks deformed or out of joint after a fall.</li>
                <li>• Hand or fingers feel cold, numb, or pale.</li>
                <li>• Complete inability to move the arm after high-energy impact.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — HOW DOES A DOCTOR CHECK FOR A ROTATOR CUFF TEAR? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check for a Rotator Cuff Tear?
          </h2>
          <div className="space-y-2.5 mb-6">
            {[
              { title: "Clinical history", desc: "Understanding the injury moment, overhead demands, and duration of night pain." },
              { title: "Physical inspection & palpation", desc: "Checking for supraspinatus muscle wasting and greater tuberosity tenderness." },
              { title: "Active vs passive motion", desc: "Assessing whether you can lift the arm yourself or if the joint is frozen." },
              { title: "Isolated cuff strength tests", desc: "Empty-can test for supraspinatus, external rotation for infraspinatus, lift-off test for subscapularis." },
              { title: "Cervical spine screening", desc: "Confirming that symptoms are not caused by pinched neck nerves." }
            ].map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2] flex items-start gap-3">
                <span className="font-bold text-xs text-[#BE8C1D] mt-0.5">{idx + 1}.</span>
                <div>
                  <h3 className="font-bold text-xs text-[#111111]">{step.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S08 — DO YOU NEED AN MRI OR ULTRASOUND? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Do You Need an MRI or Ultrasound?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
            <div className="p-4 rounded-xl border border-[#E8E5DE] bg-white">
              <h3 className="font-bold text-xs text-[#111111] mb-1">X-ray</h3>
              <p className="text-xs text-slate-600">Shows bone spurs, acromial morphology, and arthritis. Does not visualize the tendon directly.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E8E5DE] bg-white">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Ultrasound</h3>
              <p className="text-xs text-slate-600">Dynamic examination showing tear size and tendon gliding during active arm movement.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E8E5DE] bg-white">
              <h3 className="font-bold text-xs text-[#111111] mb-1">MRI scan</h3>
              <p className="text-xs text-slate-600">The gold standard: reveals exact tear retraction, muscle fatty atrophy, and tendon quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 — CAN A ROTATOR CUFF TEAR IMPROVE WITHOUT SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can a Rotator Cuff Tear Improve Without Surgery?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Yes, many people achieve excellent pain relief without surgery. AAOS notes that non-operative care relieves pain and improves shoulder function for the majority of patients:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Activity changes</p>
                <p className="text-xs text-slate-600 mt-1">Limiting heavy overhead loading while maintaining comfortable active movement.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Physiotherapy</p>
                <p className="text-xs text-slate-600 mt-1">Strengthening surrounding deltoid and periscapular muscles to compensate for the torn cuff.</p>
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <strong>An important point:</strong> Symptoms can improve even if the torn tendon does not structurally rejoin the bone. Regular follow-up ensures tears do not significantly expand over time.
            </div>
          </div>
        </div>
      </section>

      {/* S10 — WHEN MIGHT A ROTATOR CUFF TEAR NEED SURGERY? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might a Rotator Cuff Tear Need Surgery?
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Surgery may be discussed in situations such as:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
            <li>• Acute traumatic complete tears in active individuals where early reattachment is optimal.</li>
            <li>• Persistent shoulder and night pain lasting longer than 6 to 12 months despite therapy.</li>
            <li>• Significant, disabling weakness limiting work or sport.</li>
            <li>• Large tears (&gt;3cm) with good residual tendon and muscle quality.</li>
          </ul>
          <Link to="/orthopaedic-consultation/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Discuss your MRI findings during an orthopaedic consultation &rarr;
          </Link>
        </div>
      </section>

      {/* S11 — WHAT IS ROTATOR CUFF REPAIR SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Rotator Cuff Repair Surgery?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Rotator cuff repair re-attaches the torn tendon back to its anatomical footprint on the humerus bone. The surgeon uses specialized <strong>suture anchors</strong>—tiny bioabsorbable or titanium screws preloaded with high-strength surgical sutures that pass through the tendon to hold it firmly against bone until biological healing occurs.
            </p>
          </div>
        </div>
      </section>

      {/* S12 — WHAT HAPPENS DURING ROTATOR CUFF REPAIR? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During Rotator Cuff Repair?
          </h2>
          <div className="space-y-2.5 mb-6">
            {[
              { title: "Anaesthesia", desc: "General anaesthesia combined with an ultrasound-guided regional nerve block for excellent post-op pain control." },
              { title: "Arthroscopic joint inspection", desc: "A thin camera enters the joint through small cuts to assess the biceps tendon, labrum, and cartilage." },
              { title: "Bone bed preparation", desc: "Smoothing the bone footprint on the humerus to stimulate rich blood supply and marrow healing cells." },
              { title: "Anchor fixation & tendon suturing", desc: "Inserting suture anchors into bone and passing strong sutures through the tendon margin." },
              { title: "Anatomical tendon compression", desc: "Tying tensioned suture knots to anchor the tendon securely back against bone." },
              { title: "Wound closure & sling fitting", desc: "Closing tiny incisions with sutures or steri-strips and placing the arm into an abduction sling." }
            ].map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white flex items-start gap-3">
                <span className="font-bold text-xs text-[#BE8C1D] mt-0.5">{idx + 1}.</span>
                <div>
                  <h3 className="font-bold text-xs text-[#111111]">{step.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S13 — KEYHOLE VS OPEN ROTATOR CUFF REPAIR */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Three Common Ways to Repair the Tendon
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Method</th>
                  <th className="p-3.5">Cuts</th>
                  <th className="p-3.5">General benefits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Arthroscopic (keyhole)</td>
                  <td className="p-3">Several small 5mm punctures</td>
                  <td className="p-3">Minimal soft-tissue trauma, excellent view of entire joint, less early pain.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Mini-open</td>
                  <td className="p-3">Small cuts plus one 3–5cm incision</td>
                  <td className="p-3">Combines arthroscopic joint prep with direct tactile open tendon suturing.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Open repair</td>
                  <td className="p-3">One larger incision over shoulder</td>
                  <td className="p-3">Used for complex massive retracted tears or when tendon transfers are needed.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            AAOS reports that keyhole, mini-open and open repairs produce similar long-term pain relief and functional scores. Read more about <Link to="/shoulder-arthroscopy/" className="text-[#BE8C1D] font-bold hover:underline">shoulder arthroscopy</Link>.
          </p>
        </div>
      </section>

      {/* S14 — HOW CAN YOU PREPARE FOR ROTATOR CUFF REPAIR? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Prepare for Rotator Cuff Repair?
          </h2>
          <div className="space-y-2 text-xs text-slate-700 mb-6">
            <p>• <strong>Medication review:</strong> Disclose all prescription drugs, anti-inflammatories, and supplements.</p>
            <p>• <strong>Home arrangements:</strong> Prepare easy-to-reach food, pump soap dispensers, and buttoned clothing.</p>
            <p>• <strong>Transport:</strong> Arrange for a responsible adult to escort you home following day surgery.</p>
          </div>
          <Link to="/surgery-preparation-recovery/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Read complete surgery preparation instructions &rarr;
          </Link>
        </div>
      </section>

      {/* S15 — WHAT ARE THE POSSIBLE BENEFITS OF ROTATOR CUFF REPAIR? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Limits of Rotator Cuff Repair
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-sm text-emerald-950 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Possible benefits
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Substantial relief of constant aching and night pain.</li>
                <li>• Restored arm elevation, reaching, and carrying strength.</li>
                <li>• Prevention of tear expansion and rotator cuff arthropathy.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-sm text-amber-950 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Limits to know about
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Tendon healing requires biological time (months).</li>
                <li>• Results depend heavily on tear size and tissue health.</li>
                <li>• Requires dedicated commitment to staged physiotherapy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S16 — WHAT ARE THE RISKS OF ROTATOR CUFF REPAIR? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Are the Risks of Rotator Cuff Repair?
          </h2>
          <div className="space-y-2 text-xs text-slate-700 mb-4">
            <p>• <strong>Shoulder stiffness:</strong> Capsular tightness requiring gentle stretching therapy.</p>
            <p>• <strong>Tendon re-tear:</strong> Failure of the biological bone-tendon junction to heal.</p>
            <p>• <strong>Infection:</strong> Low risk in keyhole surgery, managed with antibiotics.</p>
            <p>• <strong>Nerve irritation:</strong> Temporary numbness from traction or regional blocks.</p>
          </div>
        </div>
      </section>

      {/* S17 — RECOVERY AFTER ROTATOR CUFF REPAIR */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Rotator Cuff Repair
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6">
            <p>
              Tendon-to-bone healing takes a minimum of 6 to 12 weeks. Patients wear an abduction sling to take tension off the suture anchor repair:
            </p>
            <div className="p-4 rounded-xl border border-red-300 bg-red-50/50 text-xs text-red-950">
              <strong>Call your surgical team quickly if:</strong> You develop fever, worsening redness, fluid leakage from portal cuts, sudden severe pain, or calf swelling.
            </div>
          </div>
          <Link to="/surgery-preparation-recovery/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Read complete after-surgery care instructions &rarr;
          </Link>
        </div>
      </section>

      {/* S18 — WHY IS PHYSIOTHERAPY IMPORTANT AFTER REPAIR? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Is Physiotherapy Important After Repair?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white">
              <p className="font-bold text-xs text-[#111111]">Phase 1: Protect &amp; passive move</p>
              <p className="text-xs text-slate-600 mt-1">Weeks 0–6: Sling wear with gentle pendulum and passive arm elevation.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white">
              <p className="font-bold text-xs text-[#111111]">Phase 2: Active-assisted motion</p>
              <p className="text-xs text-slate-600 mt-1">Weeks 6–12: Discontinuing the sling and initiating active movement.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white">
              <p className="font-bold text-xs text-[#111111]">Phase 3: Resisted strengthening</p>
              <p className="text-xs text-slate-600 mt-1">Months 3–6: Resistance bands and progressive functional tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S19 — WHEN CAN YOU RETURN TO WORK, DRIVING AND SPORTS? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Can You Return to Work, Driving and Sports?
          </h2>
          <div className="space-y-2 text-xs text-slate-700 mb-6">
            <p>• <strong>Desk work:</strong> Resumed within 2 to 4 weeks with typing adaptations.</p>
            <p>• <strong>Driving:</strong> Permitted only once the sling is removed and you have full emergency control (typically 6–8 weeks).</p>
            <p>• <strong>Heavy lifting &amp; overhead sports:</strong> Progressed after clinical review around 6 months.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#BE8C1D]">
            <Link to="/sports-injury-treatment-lahore/" className="hover:underline">Sports Injury Treatment &rarr;</Link>
            <Link to="/sports-medicine-consultation/" className="hover:underline">Sports Medicine Consultation &rarr;</Link>
          </div>
        </div>
      </section>

      {/* S20 — CAN A ROTATOR CUFF TENDON RE-TEAR? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can a Rotator Cuff Tendon Re-Tear?
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-4">
            <p>
              Yes, re-tearing can happen, particularly with massive tears (&gt;5cm), compromised tendon biology, or early accidental weight-bearing.
            </p>
            <p className="text-xs text-slate-600">
              Not every re-tear causes pain or requires another surgery. Adhering to your sling and physiotherapy guidelines gives the repair its best biological environment.
            </p>
          </div>
        </div>
      </section>

      {/* S21 — CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
            <h2 className="text-2xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience in orthopaedic, trauma and sports injury care. His clinical interests include rotator cuff repair, shoulder arthroscopy, Bankart repair, and joint preservation.
            </p>
            <div className="space-y-1 text-xs text-slate-800 mb-5">
              <p>• <strong>M.B.B.S.</strong></p>
              <p>• <strong>F.C.P.S. (Orthopedic Surgery)</strong></p>
              <p>• <strong>Certified ATLS®</strong> (Advanced Trauma Life Support)</p>
              <p>• <strong>Fellowship in Arthroplasty and Joint Reconstruction</strong></p>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              He sees patients at {businessConfig.clinicName}, {businessConfig.fullAddress}.
            </p>
            <Link
              to="/about/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#BE8C1D] hover:underline"
            >
              <span>Learn More About Dr. Mazhar Rafique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* S22 — EXPLORE RELATED SHOULDER TREATMENTS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Shoulder Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Shoulder, Hand & Upper Limb Surgery", path: "/upper-limb-surgery/", desc: "Comprehensive overview of shoulder, hand, and upper limb services." },
              { title: "Shoulder Surgery", path: "/shoulder-surgery/", desc: "Detailed breakdown of surgical and non-surgical shoulder options." },
              { title: "Shoulder Arthroscopy", path: "/shoulder-arthroscopy/", desc: "Minimally invasive keyhole surgery techniques for the shoulder joint." },
              { title: "Sports Injury Treatment", path: "/sports-injury-treatment-lahore/", desc: "Care for sports injuries and return to athletic training." },
              { title: "Sports Medicine Consultation", path: "/sports-medicine-consultation/", desc: "Personalized assessment of sports mechanics and recovery." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Comprehensive joint evaluation and diagnostic workup." }
            ].map((linkItem, idx) => (
              <Link
                key={idx}
                to={linkItem.path}
                className="p-4 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block"
              >
                <h3 className="font-bold text-sm text-[#111111] mb-1">{linkItem.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{linkItem.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S23 — GET YOUR ROTATOR CUFF INJURY CHECKED IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <h2 className="text-2xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Rotator Cuff Injury Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you have shoulder pain, weakness or a suspected rotator cuff tear, you can arrange an orthopaedic assessment. Dr. Mazhar Rafique will listen to your story, examine your shoulder and explain your options in simple words. Surgery is only one of them.
            </p>
            <div className="text-xs text-slate-600 mb-6">
              <p className="font-bold text-slate-800">Dr. Mazhar Rafique — {businessConfig.clinicName}</p>
              <p>{businessConfig.fullAddress}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — FAQS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              PATIENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions
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

export default RotatorCuffRepairPage;