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
  Flame,
  CalendarCheck,
  UserCheck
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const SportsMedicineConsultationPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is a sports medicine consultation?",
      a: "It is a visit to a doctor about pain or injury linked to sport or exercise. The doctor asks about your symptoms and activity, examines the area and explains treatment, recovery and return-to-sport options. It does not mean you will need surgery."
    },
    {
      q: "Who should book a sports injury consultation?",
      a: "Anyone with sports-related pain, a sudden injury, a repeated injury or trouble returning to activity may find it helpful. This includes athletes, students, gym users and people who play for fun. Minor strains often settle by themselves, so you may not need a consultation for every ache."
    },
    {
      q: "Can recreational athletes benefit from a consultation?",
      a: "Yes. You do not need to be a professional. If pain lasts, keeps coming back or stops you from enjoying your sport, an assessment can help you understand the cause and plan the next step."
    },
    {
      q: "What problems can be assessed?",
      a: "Common problems include knee pain, shoulder pain, ankle injuries, muscle strains, ligament injuries, tendon problems, repeated swelling, joint instability and overuse pain. The doctor will tell you if your problem needs other care."
    },
    {
      q: "What happens during a sports injury consultation?",
      a: "You talk about your symptoms, past injuries, sport and goals. The doctor examines the affected area. Tests may be suggested if needed. Then you discuss treatment options and plan the next steps, such as rehabilitation or a review visit."
    },
    {
      q: "Do I need an MRI before my appointment?",
      a: "No. You do not need to book an MRI first. The doctor decides which tests, if any, are useful after listening to you and examining you. If you already have scans or reports, please bring them."
    },
    {
      q: "Can sports injuries improve without surgery?",
      a: "Yes, many can. Mild and moderate injuries often improve with activity changes, support and rehabilitation. The right plan depends on your injury, your sport and your goals, so the doctor will advise you."
    },
    {
      q: "When might a sports injury need surgery?",
      a: "Surgery may be discussed for significant instability, certain complete tears, displaced injuries, other injuries together, or problems that continue after proper non-surgical care. Not every severe injury needs surgery. You and the doctor decide together."
    },
    {
      q: "Can a consultation help with recurring injuries?",
      a: "Yes. Repeat injuries can have causes such as incomplete recovery, weak muscles, movement problems, joint looseness or training load. An individual assessment helps find what applies to you and how to plan care."
    },
    {
      q: "Can a consultation help plan rehabilitation?",
      a: "Yes. The doctor can explain the type of rehabilitation that may suit your injury and how to progress step by step. Rehabilitation often involves a physiotherapist. Your plan should match your injury and not follow a fixed timetable."
    },
    {
      q: "How is return-to-sport readiness assessed?",
      a: "The doctor looks at symptoms, strength, joint stability, movement quality, functional tests, confidence and the demands of your sport. Being free of pain is not enough on its own. The decision is best made together with you and your support team."
    },
    {
      q: "When can I return to sports after an injury?",
      a: "It depends on the injury, your progress and your sport. No one can give a safe date without assessing you. Returning too early can raise the risk of another injury, so follow your doctor's advice."
    },
    {
      q: "Can sports injuries be prevented?",
      a: "Not all of them, but you can lower the risk. Warm up well, build strength and balance, increase training slowly, use suitable equipment, rest enough and practise good technique."
    },
    {
      q: "What should I bring to my consultation?",
      a: "Bring old X-rays, MRI scans and reports, a list of your medicines, and details of past injuries or treatment. Wear clothes that let the doctor see and move the injured area. Sports shoes may help if your leg or foot is the problem."
    },
    {
      q: "When should I seek urgent care?",
      a: "Go to the nearest hospital emergency department for an obvious deformity, a suspected broken bone or dislocation, inability to bear weight, numbness, a cold or pale limb, severe pain with worsening swelling, or a serious head or neck injury. Do not wait for a routine consultation."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call ${businessConfig.phone} or send a WhatsApp message to ${businessConfig.phone}. Dr. Rafique is a Consultant Orthopaedic Surgeon at ${businessConfig.clinicName}, ${businessConfig.fullAddress}.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can send a WhatsApp message to ${businessConfig.phone} to ask about an appointment. For an urgent injury, do not wait for a reply. Go to an emergency department.`
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
          <Link to="/sports-injury-treatment/" className="hover:text-[#BE8C1D]">Sports Injury &amp; Ligament Surgery</Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-[#111111] font-semibold">Sports Medicine Consultation</span>
        </div>
      </nav>

      {/* B3 — HERO SECTION */}
      <section className="relative bg-white py-12 sm:py-16 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <CalendarCheck className="w-3.5 h-3.5" />
              SPORTS INJURY CONSULTATION &amp; ASSESSMENT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Sports Medicine Consultation in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Sports injuries can affect your joints, muscles, tendons and ligaments. A sports injury consultation helps find out what may be causing your pain or movement problem. Treatment may include rehabilitation or further medical care, and only some injuries need surgery. You can arrange an orthopaedic consultation with Dr. Mazhar Rafique in Lahore.
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

      {/* S01: WHAT IS A SPORTS MEDICINE CONSULTATION? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Sports Medicine Consultation?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              A sports medicine consultation is a dedicated clinical visit to evaluate pain, weakness, or joint dysfunction linked to athletic activity or exercise. Sports medicine addresses the unique anatomical demands placed on active individuals.
            </p>
            <p>
              At a consultation in Lahore, Dr. Mazhar Rafique, a Consultant Orthopaedic Surgeon, evaluates your symptoms, joint mobility, kinetic alignment, and injury history alongside your sport-specific goals.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-xs uppercase tracking-wider mb-2">How can a consultation help?</h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Identifies precisely which joint, muscle, tendon or ligament is injured.</li>
                <li>• Distinguishes between acute trauma and progressive overuse strains.</li>
                <li>• Establishes whether imaging (X-rays, ultrasound, MRI) is truly necessary.</li>
                <li>• Develops a tailored rehabilitation plan to restore strength and movement.</li>
                <li>• Evaluates safe criteria for returning to training and competition.</li>
              </ul>
            </div>
            <p className="text-xs text-slate-600">
              Many sports injuries get better without surgery. A consultation does not mean you will have an operation. The aim is to find the right next step for you. If your pain is not linked to sport, a <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-bold hover:underline">general orthopaedic consultation</Link> may suit you better.
            </p>
          </div>
        </div>
      </section>

      {/* S02: WHO SHOULD CONSIDER A SPORTS INJURY CONSULTATION? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Who Should Consider a Sports Injury Consultation?
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            You do not need to be a professional player to get a sports injury. A consultation may help many kinds of active people:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              { title: "Recreational athletes", desc: "Playing cricket, football, tennis, badminton, or squash for fitness and recreation." },
              { title: "Competitive athletes", desc: "Training intensively and needing clear timelines and performance-guided care." },
              { title: "Student athletes", desc: "Young players whose growing skeletons, bones, and growth plates require specialized care." },
              { title: "Gym & fitness enthusiasts", desc: "Experiencing shoulder, elbow, knee, or back pain during weightlifting or HIIT." },
              { title: "Activity-related pain", desc: "Pain that surfaces predictably whenever you run, jump, squat, or throw." },
              { title: "People with recurring injuries", desc: "The same hamstring strain, ankle roll, or knee swelling that keeps returning." },
              { title: "Return-to-sport clearance", desc: "Patients wanting objective functional testing before resuming competitive sport." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
                <h3 className="font-bold text-xs text-[#111111] mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S03: COMMON SPORTS INJURY PROBLEMS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Sports Injury Problems
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            These problems are frequently assessed in an orthopaedic sports clinic:
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Problem</th>
                  <th className="p-3.5">What it may feel like</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr><td className="p-3 font-bold text-[#111111]">Knee pain</td><td className="p-3">Pain when running, jumping, twisting, squatting, or taking stairs.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Shoulder pain</td><td className="p-3">Pain when throwing, lifting overhead, reaching behind, or lying on the side.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Ankle injuries</td><td className="p-3">Persistent soreness and swelling after an inward rolling inversion sprain.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Muscle strains</td><td className="p-3">Sudden tightness, sharp pull, or cramping in the hamstrings, groin, or calf.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Ligament injuries</td><td className="p-3">Pain, rapid swelling, and a joint that feels loose, wobbly, or unstable.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Tendon problems</td><td className="p-3">Stiffness and aching near a tendon that worsens at the start of exercise.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Recurrent swelling</td><td className="p-3">A joint that fills with fluid repeatedly after sporting participation.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Joint instability</td><td className="p-3">A knee or shoulder that slips, catches, or unexpectedly gives way.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Overuse pain</td><td className="p-3">A gradual ache building over weeks of intensive repetitive loading.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S04: ASSESSMENT AFTER A SUDDEN SPORTS INJURY */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Assessment After a Sudden Sports Injury
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              An acute injury happens suddenly—often during a tackle, fall, awkward landing, or sudden pivot. You may experience instant pain, swelling, and loss of normal function.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">Why early assessment helps:</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Rules out acute fractures, tendon ruptures, and major joint dislocations.</li>
                <li>• Prevents further tissue damage from attempting to play on an unstable joint.</li>
                <li>• Initiates appropriate early protection (splinting, bracing, offloading).</li>
              </ul>
            </div>
            <p className="text-xs text-slate-600">
              Some acute injuries are emergencies. Check the <a href="#urgent-care" className="text-[#BE8C1D] font-bold hover:underline">urgent warning signs</a> below if you have severe trauma.
            </p>
          </div>
        </div>
      </section>

      {/* S05: ASSESSMENT OF PAIN CAUSED BY REPEATED ACTIVITY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Assessment of Pain Caused by Repeated Activity
          </h2>
          <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
            <p>
              An overuse injury happens when a joint or tendon is subjected to repetitive load without adequate time to remodel. Factors evaluated during consultation include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Training load spikes</p>
                <p className="text-xs text-slate-600 mt-1">Sudden increases in running distance, bowling overs, or lifting volume.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Movement biomechanics</p>
                <p className="text-xs text-slate-600 mt-1">Gait irregularities, hip weakness, or improper throwing/bowling action.</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Treatment focuses on load management, corrective strengthening, and gradual re-loading rather than abrupt complete immobilization.
            </p>
          </div>
        </div>
      </section>

      {/* S06: ASSESSMENT OF KNEE SPORTS INJURIES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Assessment of Knee Sports Injuries
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            A knee consultation methodically examines the primary stabilizing structures:
          </p>
          <div className="space-y-2.5 text-xs text-slate-700 mb-6">
            <p>• <strong>ACL injuries:</strong> Checking for anterior tibial translation and pivot-shift laxity.</p>
            <p>• <strong>Meniscus tears:</strong> Assessing joint-line tenderness, McMurray test, and catching sensations.</p>
            <p>• <strong>Collateral ligaments:</strong> Varus and valgus stress testing for MCL and LCL laxity.</p>
            <p>• <strong>Patellofemoral tracking:</strong> Examining kneecap alignment and quadriceps strength.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#BE8C1D]">
            <Link to="/acl-reconstruction/" className="hover:underline">ACL Reconstruction &rarr;</Link>
            <Link to="/meniscus-repair/" className="hover:underline">Meniscus Repair &rarr;</Link>
            <Link to="/knee-arthroscopy/" className="hover:underline">Knee Arthroscopy &rarr;</Link>
          </div>
        </div>
      </section>

      {/* S07: ASSESSMENT OF SHOULDER SPORTS INJURIES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Assessment of Shoulder Sports Injuries
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            The shoulder&apos;s wide mobility demands careful evaluation of soft-tissue restraints:
          </p>
          <div className="space-y-2 text-xs text-slate-700 mb-6">
            <p>• <strong>Shoulder instability &amp; apprehension:</strong> Checking whether the humeral head slips forward or backward.</p>
            <p>• <strong>Rotator cuff integrity:</strong> Resisted muscle testing for supraspinatus, infraspinatus, and subscapularis tears.</p>
            <p>• <strong>Labral (Bankart) tears:</strong> Checking joint capsule tightness and clicking during overhead motion.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#BE8C1D]">
            <Link to="/shoulder-arthroscopy/" className="hover:underline">Shoulder Arthroscopy &rarr;</Link>
            <Link to="/rotator-cuff-repair/" className="hover:underline">Rotator Cuff Repair &rarr;</Link>
          </div>
        </div>
      </section>

      {/* S08: CHECKING LIGAMENT AND TENDON INJURIES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Checking Ligament and Tendon Injuries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Ligaments (Joint stability)</h3>
              <p className="text-xs text-slate-600">
                Ligaments join bone to bone. Stress tests check if the ligament end-feel is firm, soft, or absent. For high-grade tears, see <Link to="/ligament-reconstruction/" className="text-[#BE8C1D] font-bold hover:underline">ligament reconstruction</Link>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Tendons (Power transfer)</h3>
              <p className="text-xs text-slate-600">
                Tendons transmit muscle forces. Checks focus on resisted contraction pain, tendon thickening, and structural continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09: WHAT TO EXPECT DURING YOUR SPORTS INJURY CONSULTATION */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What to Expect During Your Sports Injury Consultation
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { num: "01", title: "You describe your symptoms", desc: "Where it hurts, how the injury occurred, and specific sport-related limitations." },
              { num: "02", title: "Review of injury history", desc: "Past sprains, surgeries, medical conditions, and current training routine." },
              { num: "03", title: "Sport and goals discussion", desc: "What sport you participate in, current competitive level, and recovery objectives." },
              { num: "04", title: "Physical examination", desc: "Palpation, joint range-of-motion, limb symmetry, and specialized stress testing." },
              { num: "05", title: "Tests considered when needed", desc: "Reviewing or ordering selective imaging (X-ray, ultrasound, or MRI) if indicated." },
              { num: "06", title: "Treatment options explained", desc: "Clear breakdown of non-surgical physical therapy vs procedural options." },
              { num: "07", title: "Next steps agreed", desc: "Rehabilitation plan, follow-up timeline, and guidance on activity modifications." }
            ].map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2] flex items-start gap-3">
                <span className="font-extrabold text-sm text-[#BE8C1D] mt-0.5">{step.num}</span>
                <div>
                  <h3 className="font-bold text-xs text-[#111111]">{step.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600">
            Please bring any previous scans, reports, and a list of current medicines. Wear sports attire that allows the doctor to view the joint easily.
          </p>
        </div>
      </section>

      {/* S10: HOW DOES A DOCTOR EXAMINE A SPORTS INJURY? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Examine a Sports Injury?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">What the doctor checks</th>
                  <th className="p-3.5">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr><td className="p-3 font-bold text-[#111111]">Joint movement</td><td className="p-3">Shows if the joint is stiff, restricted, or moves excessively.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Tenderness</td><td className="p-3">Pinpoints the exact anatomical tendon, ligament, or joint line involved.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Swelling &amp; effusion</td><td className="p-3">Shows whether fluid is inside the joint capsule or in surrounding soft tissue.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Muscle strength</td><td className="p-3">Detects muscular inhibition, atrophy, or nerve weakness.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Joint stability</td><td className="p-3">Evaluates whether supporting ligaments prevent abnormal sliding or opening.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Functional testing</td><td className="p-3">Shows how well you can bear weight, squat, hop, or move dynamically.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Contralateral comparison</td><td className="p-3">Compares injured side against your natural uninjured anatomy.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S11: WILL YOU NEED AN X-RAY, MRI OR ULTRASOUND? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Will You Need an X-Ray, MRI or Ultrasound?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
            <div className="p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">X-ray</h3>
              <p className="text-xs text-slate-600">Best for bone fractures, dislocations, avulsion chips, and joint space assessment.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">MRI</h3>
              <p className="text-xs text-slate-600">The gold standard for ligaments, meniscus, labral tears, and deep cartilage defects.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Ultrasound</h3>
              <p className="text-xs text-slate-600">Dynamic evaluation of superficial tendons, muscle tears, and bursal fluid collections.</p>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            You do not need to book an MRI prior to your appointment. The doctor will determine if imaging adds value based on the examination.
          </p>
        </div>
      </section>

      {/* S12: UNDERSTANDING YOUR SPORTS INJURY DIAGNOSIS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Understanding Your Sports Injury Diagnosis
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              A diagnosis clarifies what is hurt, the severity of tissue damage, and what treatment options match your athletic aspirations:
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">Helpful questions to ask your doctor:</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Exactly which structure is damaged, and is the tear partial or complete?</li>
                <li>• What activities are safe right now, and what movements should I avoid?</li>
                <li>• What are the milestones required before I can return to running or training?</li>
                <li>• What are the risks if I choose conservative care instead of surgery?</li>
              </ul>
            </div>
            <p className="text-xs text-slate-600">
              For more guidance, explore our <Link to="/patient-education/" className="text-[#BE8C1D] font-bold hover:underline">patient education</Link> pages.
            </p>
          </div>
        </div>
      </section>

      {/* S13: NON-SURGICAL TREATMENT OPTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Non-Surgical Treatment Options
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Most sports injuries respond favorably to non-operative measures:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Activity changes</p>
              <p className="text-xs text-slate-600 mt-0.5">Cross-training to maintain aerobic fitness without loading injured tissues.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Physiotherapy</p>
              <p className="text-xs text-slate-600 mt-0.5">Targeted strengthening and neuromuscular control exercises.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Supportive bracing</p>
              <p className="text-xs text-slate-600 mt-0.5">Hinged knee or ankle braces offering mechanical protection during healing.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Clinical follow-ups</p>
              <p className="text-xs text-slate-600 mt-0.5">Scheduled reviews to evaluate ligament tightness and muscle recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S14: WHEN MIGHT A SPORTS INJURY NEED SURGERY? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might a Sports Injury Need Surgery?
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Surgical assessment may be indicated in cases such as:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
            <li>• Significant joint instability where the knee or shoulder keeps buckling.</li>
            <li>• Complete tears in active athletes needing high rotational joint stability.</li>
            <li>• Displaced bone fractures or soft tissue avulsions pulled off the bone.</li>
            <li>• Multi-ligament disruptions or combined ligament and meniscus tears.</li>
            <li>• Persistent mechanical symptoms or pain after dedicated physical therapy.</li>
          </ul>
          <p className="text-xs text-slate-600">
            Read about <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-bold hover:underline">surgery preparation and recovery</Link> or learn about <Link to="/acl-reconstruction/" className="text-[#BE8C1D] font-bold hover:underline">ACL reconstruction</Link>.
          </p>
        </div>
      </section>

      {/* S15: PLANNING YOUR RECOVERY AND REHABILITATION */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Planning Your Recovery and Rehabilitation
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Rehabilitation is a progressive step-by-step program restoring function:
          </p>
          <div className="space-y-2 text-xs text-slate-700 mb-4">
            <p>1. <strong>Restoring movement:</strong> Eliminating contractures and restoring natural joint glide.</p>
            <p>2. <strong>Building strength:</strong> Progressive isometric, concentric, and eccentric muscle conditioning.</p>
            <p>3. <strong>Proprioception &amp; balance:</strong> Retraining joint position awareness on wobble boards.</p>
            <p>4. <strong>Sport-specific agility:</strong> Controlled cutting, jumping, and deceleration drills.</p>
          </div>
        </div>
      </section>

      {/* S16: HOW IS READINESS TO RETURN TO SPORTS ASSESSED? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Is Readiness to Return to Sports Assessed?
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Return to play is a shared, criterion-based decision:
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">What is checked</th>
                  <th className="p-3.5">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr><td className="p-3 font-bold text-[#111111]">Symptoms</td><td className="p-3">Absence of effusion, giving way, or sharp pain after exertion.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Limb symmetry strength</td><td className="p-3">Injured limb demonstrates &gt;90% strength of unaffected limb.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Functional hopping tests</td><td className="p-3">Single-leg hop and triple crossover hop symmetry.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Mental confidence</td><td className="p-3">Low kinesiophobia (fear of re-injury) during contact drills.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Medical clearance</td><td className="p-3">Surgeon and physiotherapist confirm structural and functional safety.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-amber-950 font-semibold">
            Being free of pain during daily walking does not mean you are ready for competitive sport.
          </p>
        </div>
      </section>

      {/* S17: WHY DO SOME SPORTS INJURIES KEEP COMING BACK? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Do Some Sports Injuries Keep Coming Back?
          </h2>
          <div className="space-y-2 text-xs text-slate-700 mb-4">
            <p>• <strong>Incomplete recovery:</strong> Resuming play before muscular strength and tissue healing were fully restored.</p>
            <p>• <strong>Persistent joint laxity:</strong> An unrepaired ligament causing subtle repeated subluxations.</p>
            <p>• <strong>Altered landing mechanics:</strong> Stiff-legged or valgus landing styles that overload joints.</p>
            <p>• <strong>Training spikes:</strong> Increasing training frequency without sufficient recovery intervals.</p>
          </div>
          <p className="text-xs text-slate-600">
            A thorough consultation identifies the underlying root cause of recurrence so you can break the injury cycle.
          </p>
        </div>
      </section>

      {/* S18: HOW CAN YOU LOWER YOUR RISK OF SPORTS INJURIES? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Lower Your Risk of Sports Injuries?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white">
              <p className="font-bold text-xs text-[#111111]">Structured warm-ups</p>
              <p className="text-xs text-slate-600 mt-0.5">Dynamic warm-ups incorporating balance and jumping drills reduce lower limb injury rates.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white">
              <p className="font-bold text-xs text-[#111111]">Progressive volume</p>
              <p className="text-xs text-slate-600 mt-0.5">Increase weekly training workload gradually to give tendons and bone time to adapt.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white">
              <p className="font-bold text-xs text-[#111111]">Sport-specific footwear</p>
              <p className="text-xs text-slate-600 mt-0.5">Wear shoes suited to the playing surface (grass studs, court shoes, or cushioned trainers).</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-white">
              <p className="font-bold text-xs text-[#111111]">Rest &amp; multi-sport variety</p>
              <p className="text-xs text-slate-600 mt-0.5">Young players should avoid year-round specialization in a single sport without breaks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S19: WHEN IS A SPORTS INJURY AN EMERGENCY? */}
      <section id="urgent-care" className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl border-2 border-red-300 bg-red-50/50">
            <h2 className="text-xl sm:text-2xl font-bold text-red-950 mb-3 flex items-center gap-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              <AlertTriangle className="w-5 h-5 text-red-600" />
              When Is a Sports Injury an Emergency?
            </h2>
            <p className="text-sm text-red-900 mb-4">
              Go to the nearest hospital emergency department straight away if you have any of these signs:
            </p>
            <ul className="space-y-1 text-xs text-red-900 mb-5">
              <li>• An obvious deformity: limb points at an odd angle or bone pierces skin.</li>
              <li>• A high-energy accident, road crash, or severe direct crushing blow.</li>
              <li>• Suspected fracture or dislocation, or you heard an audible crack.</li>
              <li>• Complete inability to put any weight on the leg or move the arm.</li>
              <li>• Numbness, tingling, or total loss of sensation below the injury.</li>
              <li>• A cold, pale, or blue-tinted foot or hand indicating compromised blood flow.</li>
              <li>• Severe, unbearable pain accompanied by rapid massive swelling.</li>
              <li>• Serious head or neck trauma (loss of consciousness, confusion, vomiting).</li>
            </ul>
            <p className="text-xs text-red-800">
              In Punjab, call Rescue 1122 if emergency ambulance transport is needed. Do not wait for a routine clinic appointment.
            </p>
          </div>
        </div>
      </section>

      {/* S20: CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE]">
            <h2 className="text-2xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience in orthopaedic, trauma and sports injury care. His practice includes sports injuries, ACL and meniscus problems, and knee and shoulder conditions.
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

      {/* S21: EXPLORE RELATED SPORTS INJURY SERVICES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Sports Injury Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { title: "Sports Injury & Ligament Surgery", path: "/sports-injury-treatment/", desc: "Comprehensive overview of sports injury and ligament services." },
              { title: "Sports Injury Treatment", path: "/sports-injury-treatment-lahore/", desc: "Treatment choices for specific sports injuries after assessment." },
              { title: "ACL Reconstruction", path: "/acl-reconstruction/", desc: "Anatomical reconstruction for torn ACL to restore joint stability." },
              { title: "Ligament Reconstruction", path: "/ligament-reconstruction/", desc: "Surgical reconstruction for complex knee and collateral ligament tears." },
              { title: "Meniscus Repair", path: "/meniscus-repair/", desc: "Preserving and repairing torn cushioning cartilage in the knee." },
              { title: "Knee Arthroscopy", path: "/knee-arthroscopy/", desc: "Minimally invasive keyhole surgery to evaluate and treat joint pathology." },
              { title: "Shoulder Arthroscopy", path: "/shoulder-arthroscopy/", desc: "Keyhole surgery treating shoulder instability and impingement." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "General evaluation for chronic bone, joint, and spinal discomfort." }
            ].map((linkItem, idx) => (
              <Link
                key={idx}
                to={linkItem.path}
                className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block"
              >
                <h3 className="font-bold text-xs text-[#111111] mb-1">{linkItem.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{linkItem.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S22: ARRANGE AN ORTHOPAEDIC SPORTS INJURY CONSULTATION IN LAHORE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <h2 className="text-2xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Arrange an Orthopaedic Sports Injury Consultation in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Do you have sports-related pain, a repeated injury, a joint that feels unstable or trouble returning to activity? You can arrange an orthopaedic assessment with Dr. Mazhar Rafique.
            </p>
            <div className="text-xs text-slate-600 mb-6">
              <p className="font-bold text-slate-800">Dr. Mazhar Rafique — Consultant Orthopaedic Surgeon</p>
              <p>{businessConfig.clinicName}, {businessConfig.fullAddress}</p>
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
      <section className="py-12 border-b border-[#E8E5DE]">
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
                <div key={idx} className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden">
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

export default SportsMedicineConsultationPage;