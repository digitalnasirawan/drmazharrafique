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

export const ShoulderSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is shoulder surgery?",
      a: "Shoulder surgery is an operation to repair, rebuild or replace parts of the shoulder. It is used for problems such as torn tendons, a shoulder that keeps slipping, some broken bones and severe arthritis. It is not needed for every shoulder problem."
    },
    {
      q: "What conditions may need shoulder surgery?",
      a: "Surgery may be considered for repeated dislocations, some rotator cuff tears, some labral tears, some fractures and advanced arthritis. It is usually considered when other care has not helped enough, or when an injury is severe."
    },
    {
      q: "Does every shoulder injury require surgery?",
      a: "No. Many shoulder problems improve with rest, exercises, physiotherapy and other non-surgical care. Your doctor will explain whether surgery is likely to help in your case."
    },
    {
      q: "What causes shoulder pain?",
      a: "Common causes include tendon problems, arthritis, injury, frozen shoulder and labral tears. Pain can also come from the neck. A doctor needs to examine you to find the cause."
    },
    {
      q: "What is shoulder instability?",
      a: "Shoulder instability means the ball of the shoulder does not stay securely in the socket. The shoulder may feel loose, slip partly out of place or dislocate fully."
    },
    {
      q: "What happens after a shoulder dislocation?",
      a: "You need urgent care at a hospital emergency department. A doctor usually takes an X-ray and puts the shoulder back in place with pain relief. You may then need a sling, physiotherapy and a follow-up review. Some people need further assessment, especially if the shoulder dislocates again."
    },
    {
      q: "What is a Bankart injury?",
      a: "A Bankart injury is a tear in part of the labrum, the rim of cartilage around the socket. It often happens when the shoulder dislocates towards the front. It can make the shoulder more likely to slip again."
    },
    {
      q: "What is a rotator cuff tear?",
      a: "It is a tear in one of the tendons that help lift and turn the arm. It can be partial or complete. It can cause pain, night pain and weakness."
    },
    {
      q: "Can a rotator cuff tear improve without surgery?",
      a: "Pain and function often improve with non-surgical care. AAOS reports that about 80 to 85 out of 100 patients improve this way. Some tears do not heal on their own and can get bigger, so your doctor may monitor you and discuss surgery if symptoms continue."
    },
    {
      q: "What is shoulder arthroscopy?",
      a: "It is keyhole surgery. The surgeon uses a small camera and thin instruments through small cuts to look at and treat problems inside the shoulder joint."
    },
    {
      q: "What is the difference between keyhole and open shoulder surgery?",
      a: "Keyhole surgery uses small cuts and a camera. Open surgery uses one larger cut and gives the surgeon a direct view. The best choice depends on the problem. Not every operation can be done by keyhole."
    },
    {
      q: "Is shoulder surgery painful?",
      a: "Some pain is expected after surgery. Your team will plan pain control with you. This may include medicines and, in some cases, a nerve block that numbs the shoulder and arm. Ask your surgeon what to expect for your operation."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, bleeding, blood clots, stiffness, ongoing pain, nerve or blood vessel injury, repair failure, the shoulder slipping again, anaesthesia problems and sometimes further surgery. Your surgeon will explain the risks for your operation."
    },
    {
      q: "How long does shoulder surgery recovery take?",
      a: "It depends on the operation and the person. Recovery often takes weeks to months, and some repairs take longer. Your surgeon will give you a plan. Nobody can promise an exact timeline."
    },
    {
      q: "Will I need a sling?",
      a: "Many people wear a sling for some time after surgery to protect the repair. Whether you need one, and for how long, depends on your operation. Your surgeon will tell you."
    },
    {
      q: "Is physiotherapy necessary?",
      a: "For most shoulder operations, yes. Physiotherapy helps protect healing tissue, regain movement and rebuild strength. Your plan is made for your operation and your progress."
    },
    {
      q: "When can I return to work or sports?",
      a: "It depends on your operation, your healing and what your job or sport needs. Desk work and heavy lifting are very different. Your surgeon will check your shoulder and say when it is safe to return."
    },
    {
      q: "Do I need an MRI for every shoulder problem?",
      a: "No. Some problems can be assessed with history, examination and an X-ray. An MRI or ultrasound may be advised when soft tissues need to be checked or surgery is being considered."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone}. The clinic is at ${businessConfig.clinicName}, ${businessConfig.fullAddress}. Appointments are arranged by phone and WhatsApp.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can message the clinic on WhatsApp at ${businessConfig.phone} to ask about an appointment. Please do not use WhatsApp for emergencies. If you think your shoulder is dislocated, go to the nearest hospital emergency department.`
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
          <span className="text-[#111111] font-semibold">Shoulder Surgery</span>
        </div>
      </nav>

      {/* B3 — HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#FAF8F2] to-[#FFFFFF] py-12 sm:py-16 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              SHOULDER PAIN, INJURY &amp; SURGICAL CARE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Shoulder Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Shoulder problems can affect how you move, how strong your arm feels and how you manage daily tasks. Many shoulder conditions improve without surgery. Some injuries or long-lasting problems may need a surgeon’s assessment. You can arrange an orthopaedic consultation with Dr. Mazhar Rafique in Lahore to understand your options.
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

      {/* S01. HOW DOES YOUR SHOULDER WORK? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does Your Shoulder Work?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Your shoulder is one of the most movable parts of your body. You use it to lift, reach, throw, push and pull. To understand shoulder problems, it helps to know how the shoulder is built.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Three meeting bones</p>
                <p className="text-xs text-slate-600 mt-1">The humerus (upper arm), scapula (shoulder blade), and clavicle (collarbone) join to form the shoulder girdle.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Ball &amp; shallow socket</p>
                <p className="text-xs text-slate-600 mt-1">The humeral head sits in the shallow glenoid socket, trading intrinsic bony stability for extensive range of motion.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Rotator cuff muscles</p>
                <p className="text-xs text-slate-600 mt-1">Four muscles and tendons wrap like a cuff around the ball, keeping it centred while lifting the arm.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">The labrum cartilage rim</p>
                <p className="text-xs text-slate-600 mt-1">A firm ring of fibrous cartilage around the socket rim that deepens the socket and stabilizes the joint.</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Explore our category overview on <Link to="/upper-limb-surgery/" className="text-[#BE8C1D] font-bold hover:underline">Shoulder, Hand &amp; Upper Limb Surgery</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S02. COMMON CONDITIONS THAT AFFECT THE SHOULDER */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Conditions That Affect the Shoulder
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <a href="#rotator-cuff" className="p-3.5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Rotator cuff injuries</h3>
              <p className="text-xs text-slate-600">Tendon fraying or tearing causing weakness and night pain.</p>
            </a>
            <a href="#instability" className="p-3.5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Shoulder instability</h3>
              <p className="text-xs text-slate-600">The ball feels loose, slips, or repeatedly pops out of joint.</p>
            </a>
            <a href="#dislocation" className="p-3.5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Shoulder dislocation</h3>
              <p className="text-xs text-slate-600">Acute trauma forcing the humeral head out of the socket.</p>
            </a>
            <a href="#labral-tear" className="p-3.5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Labral tears (Bankart)</h3>
              <p className="text-xs text-slate-600">Damage to the cartilage rim causing catching or looseness.</p>
            </a>
            <a href="#arthritis" className="p-3.5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Shoulder arthritis</h3>
              <p className="text-xs text-slate-600">Wear of smooth cartilage leading to stiffness and grinding.</p>
            </a>
            <a href="#frozen-shoulder" className="p-3.5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Frozen shoulder</h3>
              <p className="text-xs text-slate-600">Severe inflammatory stiffness restricting active &amp; passive motion.</p>
            </a>
          </div>
          <p className="text-xs text-slate-600 italic">
            Having one of these problems does not mean you need surgery. Many people get better with rest, exercises and other care.
          </p>
        </div>
      </section>

      {/* S03. COMMON SIGNS OF A SHOULDER PROBLEM */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of a Shoulder Problem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Pain when lifting the arm or resting at night</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Weakness when elevating or reaching for objects</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Stiffness reaching behind your back or combing hair</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Clicking, catching, or grinding sensations</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">A loose feeling that the shoulder is slipping</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span className="text-xs text-slate-800">Swelling or visible asymmetry after an injury</span>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Shoulder pain can sometimes radiate from cervical neck nerves. An <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-bold hover:underline">orthopaedic consultation</Link> confirms the true source.
          </p>
        </div>
      </section>

      {/* S04. WHAT IS SHOULDER INSTABILITY? */}
      <section id="instability" className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Shoulder Instability?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Shoulder instability means the ball of the shoulder does not stay firmly seated in the socket. If it slips partly out, it is called a <strong>subluxation</strong>. If it comes completely out, it is a <strong>dislocation</strong>.
            </p>
            <p>
              Causes include traumatic sports collisions, naturally loose joint capsule ligaments (hyperlaxity), or repetitive overhead stretching (such as cricket bowling or swimming).
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-1">Non-surgical vs surgical choices</h3>
              <p className="text-xs text-slate-600">
                Initial care focuses on rotator cuff and scapular stabilizer muscle strengthening. If recurrent dislocations persist, surgical stabilisation (such as Bankart repair) can restore joint tightness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05. WHAT HAPPENS WHEN A SHOULDER DISLOCATES? */}
      <section id="dislocation" className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens When a Shoulder Dislocates?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              An acute dislocation usually follows high-energy trauma, an awkward fall, or a severe tackle. The arm locks in an abnormal posture, creating intense pain and a &ldquo;squared-off&rdquo; shoulder contour.
            </p>
            <div className="p-4 rounded-xl border-2 border-[#BE8C1D] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#BE8C1D]" />
                Do not try to put the shoulder back yourself
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Forcing an unreduced shoulder can fracture the glenoid bone rim or tear nearby axillary nerves and blood vessels. Seek emergency care where gentle reduction can be performed under muscle relaxation and analgesia.
              </p>
            </div>
            <p className="text-xs text-slate-600">
              For related bone trauma care, read about our <Link to="/fracture-trauma-surgery/" className="text-[#BE8C1D] font-bold hover:underline">fracture and trauma surgery</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S06. WHAT IS A SHOULDER LABRAL TEAR? */}
      <section id="labral-tear" className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Shoulder Labral Tear?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              The labrum is a rubbery ring of cartilage encircling the shallow socket. It acts like a rubber gasket, deepening the socket to keep the ball stable.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">What is a Bankart lesion?</h3>
              <p className="text-xs text-slate-600">
                A Bankart lesion is a tear of the anterior-inferior labrum that happens when the humeral head dislocates forward. Once detached, the shoulder is prone to slipping again during athletic movements.
              </p>
            </div>
            <p className="text-xs text-slate-600">
              In a Bankart repair, the surgeon reattaches the torn labrum back to the glenoid bone rim using tiny biocompatible suture anchors, usually through keyhole arthroscopy.
            </p>
          </div>
        </div>
      </section>

      {/* S07. WHAT IS A ROTATOR CUFF TEAR? */}
      <section id="rotator-cuff" className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Rotator Cuff Tear?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              The rotator cuff tendons anchor muscles to the top of the humerus. Tears range from partial-thickness fraying to full-thickness gaps where the tendon pulls off the bone.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-1">80% to 85% non-surgical improvement</h3>
              <p className="text-xs text-slate-600">
                AAOS reports that non-surgical care (physiotherapy, NSAIDs, selective injections) relieves pain and restores function in about 80 to 85 out of 100 people. Surgery is indicated if pain and weakness persist despite therapy, or in acute traumatic complete tears.
              </p>
            </div>
            <Link to="/rotator-cuff-repair/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE8C1D] hover:underline">
              <span>Read our complete rotator cuff repair guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* S08. CAN ARTHRITIS CAUSE SHOULDER PAIN? */}
      <section id="arthritis" className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Arthritis Cause Shoulder Pain?
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <p>
              Yes. When the protective articular cartilage wears down, rough bone rubs on bone, resulting in deep aching, stiffness, and crepitus (grinding).
            </p>
            <p className="text-xs text-slate-600">
              Treatment begins with low-impact exercises, pain relief, and activity modification. For end-stage bone-on-bone arthritis with severe functional disability, shoulder joint replacement (anatomic or reverse) may be considered.
            </p>
          </div>
        </div>
      </section>

      {/* S09. WHAT IS FROZEN SHOULDER? */}
      <section id="frozen-shoulder" className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Frozen Shoulder?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Adhesive capsulitis (frozen shoulder) is a condition where the flexible joint capsule becomes thick, inflamed, and tight, profoundly restricting shoulder elevation and rotation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">1. Freezing stage</p>
                <p className="text-xs text-slate-600 mt-0.5">Pain gradually worsens and shoulder begins losing range of motion.</p>
              </div>
              <div className="p-3 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">2. Frozen stage</p>
                <p className="text-xs text-slate-600 mt-0.5">Pain may ease slightly, but joint stiffness is marked and disabling.</p>
              </div>
              <div className="p-3 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">3. Thawing stage</p>
                <p className="text-xs text-slate-600 mt-0.5">Movement slowly improves over months with gentle stretching exercises.</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Surgery is rarely the first step; most patients improve over time with guided physiotherapy and simple stretches.
            </p>
          </div>
        </div>
      </section>

      {/* S10. WHEN SHOULD YOU GET SHOULDER PAIN CHECKED? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Get Shoulder Pain Checked?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white">
              <h3 className="font-bold text-sm text-[#111111] mb-3">Book an orthopaedic assessment if:</h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Pain does not settle after a few weeks of rest.</li>
                <li>• You notice progressive arm weakness or trouble lifting.</li>
                <li>• The shoulder has slipped or dislocated in the past.</li>
                <li>• Everyday tasks (dressing, combing hair, sleeping) are disrupted.</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-[#E8E5DE]">
                <Link to="/orthopaedic-consultation/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
                  Arrange an orthopaedic consultation &rarr;
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 border-red-300 bg-red-50/50">
              <h3 className="font-bold text-sm text-red-950 mb-3 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Seek emergency hospital care if:
              </h3>
              <ul className="space-y-1.5 text-xs text-red-900">
                <li>• Shoulder looks visibly out of shape or deformed.</li>
                <li>• Inability to move the arm following a hard fall or collision.</li>
                <li>• Hand or fingers are cold, pale, or numb.</li>
                <li>• Hot, red, swollen shoulder with fever (suspected infection).</li>
                <li>• Chest pain, shortness of breath, or sweating (potential cardiac emergency).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S11. HOW DOES A DOCTOR CHECK A SHOULDER PROBLEM? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check a Shoulder Problem?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Test</th>
                  <th className="p-3.5">What it can show</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr><td className="p-3 font-bold text-[#111111]">X-ray</td><td className="p-3">Bones, fractures, joint spacing, and signs of arthritis or bone spurs.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Ultrasound</td><td className="p-3">Superficial soft tissues and dynamic rotator cuff tendon tears.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">MRI scan</td><td className="p-3">High-resolution visualization of rotator cuff, labrum, and cartilage.</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">CT scan</td><td className="p-3">Bone loss details after repeated dislocations or complex fractures.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Not everyone needs an MRI. Imaging is chosen only when it directly guides your treatment strategy.
          </p>
        </div>
      </section>

      {/* S12. CAN SHOULDER PROBLEMS IMPROVE WITHOUT SURGERY? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Shoulder Problems Improve Without Surgery?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Activity modification</p>
              <p className="text-xs text-slate-600 mt-1">Avoiding overhead reaching while maintaining gentle circular pendulum movements.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Physiotherapy</p>
              <p className="text-xs text-slate-600 mt-1">Supervised exercises restoring scapular posture and rotator cuff endurance.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Selected injections</p>
              <p className="text-xs text-slate-600 mt-1">Subacromial steroid injections to calm severe inflammation so rehab can proceed.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Clinical follow-up</p>
              <p className="text-xs text-slate-600 mt-1">Reviewing response over 2 to 3 months before considering operative intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S13. WHEN MIGHT YOU NEED SHOULDER SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might You Need Shoulder Surgery?
          </h2>
          <ul className="space-y-2 text-xs text-slate-700 mb-6">
            <li>• Severe acute trauma: displaced proximal humerus or clavicle fractures.</li>
            <li>• Recurrent instability where the shoulder repeatedly pops out during normal activities.</li>
            <li>• Full-thickness acute rotator cuff tears causing marked weakness in active patients.</li>
            <li>• Persistent mechanical symptoms (locking, catching) from torn labral tissue.</li>
            <li>• Refractory pain that continues to disable daily life despite structured physical therapy.</li>
          </ul>
        </div>
      </section>

      {/* S14. TYPES OF SHOULDER SURGERY */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Types of Shoulder Surgery
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Operation</th>
                  <th className="p-3.5">General purpose</th>
                  <th className="p-3.5">Clinical practice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Shoulder arthroscopy</td>
                  <td className="p-3">Keyhole assessment and repair via miniature camera and small cuts.</td>
                  <td className="p-3 font-semibold text-[#BE8C1D]">Primary clinical interest</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Rotator cuff repair</td>
                  <td className="p-3">Reattaching torn tendon back to the humerus bone with suture anchors.</td>
                  <td className="p-3 font-semibold text-[#BE8C1D]">Primary clinical interest</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Stabilisation &amp; Bankart repair</td>
                  <td className="p-3">Repairing torn labrum and capsule to stop recurrent dislocations.</td>
                  <td className="p-3 font-semibold text-[#BE8C1D]">Primary clinical interest</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Shoulder fracture procedures</td>
                  <td className="p-3">Plate and screw fixation for broken collarbone or upper arm bone.</td>
                  <td className="p-3 text-slate-600">Trauma care service</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#111111]">Shoulder replacement</td>
                  <td className="p-3">Replacing severely arthritic joint surfaces in selected candidates.</td>
                  <td className="p-3 text-slate-600">General education</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#BE8C1D]">
            <Link to="/shoulder-arthroscopy/" className="hover:underline">Shoulder Arthroscopy Details &rarr;</Link>
            <Link to="/rotator-cuff-repair/" className="hover:underline">Rotator Cuff Repair Details &rarr;</Link>
            <Link to="/fracture-trauma-surgery/" className="hover:underline">Fracture Trauma Surgery &rarr;</Link>
          </div>
        </div>
      </section>

      {/* S15. KEYHOLE VS OPEN SHOULDER SURGERY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Keyhole vs Open Shoulder Surgery
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Feature</th>
                  <th className="p-3.5">Keyhole (Arthroscopic)</th>
                  <th className="p-3.5">Open surgery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr><td className="p-3 font-bold text-[#111111]">Incisions</td><td className="p-3">A few small cuts (5–8mm)</td><td className="p-3">One larger incision over shoulder</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Visualization</td><td className="p-3">Magnified on high-definition screen</td><td className="p-3">Direct direct line of sight</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Common uses</td><td className="p-3">Many rotator cuff tears, Bankart repairs, subacromial decompressions</td><td className="p-3">Complex bone-loss stabilisations, joint replacements, complex fractures</td></tr>
                <tr><td className="p-3 font-bold text-[#111111]">Soft tissue strain</td><td className="p-3">No muscle detachment required</td><td className="p-3">Overlying deltoid or subscapularis muscle may need split/repair</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S16. HOW CAN YOU PREPARE FOR SHOULDER SURGERY? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Prepare for Shoulder Surgery?
          </h2>
          <div className="space-y-2 text-xs text-slate-700 mb-6">
            <p>• <strong>Pre-operative medical check:</strong> Basic blood tests, ECG, and blood pressure review.</p>
            <p>• <strong>Medication list:</strong> Share all prescription drugs and blood thinners with your surgical team.</p>
            <p>• <strong>Home arrangements:</strong> Prepare loose, button-front shirts that are easy to put on with one arm in a sling.</p>
            <p>• <strong>Transport:</strong> Arrange for a family member or driver to accompany you home after surgery.</p>
          </div>
          <Link to="/surgery-preparation-recovery/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Read comprehensive preparation and recovery advice &rarr;
          </Link>
        </div>
      </section>

      {/* S17. BENEFITS AND RISKS OF SHOULDER SURGERY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Risks of Shoulder Surgery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white">
              <h3 className="font-bold text-sm text-emerald-950 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Possible benefits
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Restored joint stability with reduced risk of recurrent dislocation.</li>
                <li>• Meaningful reduction in persistent shoulder and night pain.</li>
                <li>• Improved arm elevation, reach, and functional independence.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-white">
              <h3 className="font-bold text-sm text-amber-950 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Possible risks
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• Infection, bleeding, or blood clot formation.</li>
                <li>• Post-operative stiffness requiring prolonged physical therapy.</li>
                <li>• Recurrent instability or failure of repaired tendon to heal to bone.</li>
                <li>• Nerve irritation (rare axillary or suprascapular neuropraxia).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S18. RECOVERY AFTER SHOULDER SURGERY */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Shoulder Surgery
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6">
            <p>
              Recovery is progressive and requires patience. Most patients wear a protective sling for 3 to 6 weeks to protect healing anchors.
            </p>
            <div className="p-4 rounded-xl border border-red-300 bg-red-50/50 text-xs text-red-950">
              <strong>Contact your surgeon immediately if:</strong> You develop fever, escalating wound redness, worsening calf pain, sudden shortness of breath, or a cold numb hand.
            </div>
          </div>
        </div>
      </section>

      {/* S19. WHY IS PHYSIOTHERAPY IMPORTANT AFTER SHOULDER SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Is Physiotherapy Important After Shoulder Surgery?
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6">
            <p>
              Surgery fixes the anatomical disruption; physiotherapy restores movement and strength. In early stages, gentle passive motion prevents capsular freeze. In later stages, progressive rotator cuff strengthening prepares you for full return to daily life.
            </p>
          </div>
          <Link to="/patient-education/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Read patient rehabilitation advice &rarr;
          </Link>
        </div>
      </section>

      {/* S20. WHEN CAN YOU RETURN TO DAILY ACTIVITIES? */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Can You Return to Daily Activities?
          </h2>
          <div className="space-y-2 text-xs text-slate-700 mb-6">
            <p>• <strong>Sedentary work:</strong> Often resumed within 2 to 4 weeks depending on sling use.</p>
            <p>• <strong>Driving:</strong> Permitted only once the sling is removed and you can safely perform emergency steering maneuvers.</p>
            <p>• <strong>Lifting &amp; overhead tasks:</strong> Staged progressively after tendon healing is verified at 3 to 6 months.</p>
            <p>• <strong>Sports:</strong> Non-contact drills return first; contact sports require surgeon clearance.</p>
          </div>
          <Link to="/sports-injury-treatment-lahore/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            See our sports injury rehabilitation guide &rarr;
          </Link>
        </div>
      </section>

      {/* S21. CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
            <h2 className="text-2xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience in orthopaedic, trauma and sports injury care. His clinical interests include shoulder arthroscopy, Bankart repair, rotator cuff repair, and orthopaedic trauma management.
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

      {/* S22. EXPLORE RELATED SHOULDER AND UPPER LIMB TREATMENTS */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Shoulder and Upper Limb Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Shoulder, Hand & Upper Limb Surgery", path: "/upper-limb-surgery/", desc: "See the full range of shoulder, elbow, wrist and hand care." },
              { title: "Rotator Cuff Repair", path: "/rotator-cuff-repair/", desc: "Detailed guide on tendon tears, repair techniques and recovery." },
              { title: "Shoulder Arthroscopy", path: "/shoulder-arthroscopy/", desc: "Learn how minimally invasive keyhole shoulder surgery is performed." },
              { title: "Sports Injury Treatment", path: "/sports-injury-treatment-lahore/", desc: "Care for sports trauma, dislocations, and return to athletic play." },
              { title: "Fracture & Trauma Surgery", path: "/fracture-trauma-surgery/", desc: "Surgical management for broken collarbones and shoulder fractures." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "What to expect at your first consultation and clinical evaluation." }
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

      {/* S23. GET YOUR SHOULDER PROBLEM CHECKED IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <h2 className="text-2xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Shoulder Problem Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Shoulder pain, weakness, stiffness or a shoulder that slips can affect your work, sleep and daily life. You can arrange an orthopaedic assessment to find out what is causing your problem and what your options are.
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

      {/* B5. FAQS */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
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

export default ShoulderSurgeryPage;