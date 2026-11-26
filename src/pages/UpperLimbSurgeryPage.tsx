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
  Hand
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const UpperLimbSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is upper limb surgery?",
      a: "Upper limb surgery is an operation on the shoulder, arm, elbow, wrist or hand. It may treat injuries, torn tendons, nerve pressure or joint problems. Many upper limb problems get better without surgery, so an operation is only one possible option."
    },
    {
      q: "Which body parts are included in the upper limb?",
      a: "The upper limb includes the shoulder, upper arm, elbow, forearm, wrist and hand. The bones, muscles, tendons, ligaments and nerves in these areas are all part of it."
    },
    {
      q: "What causes shoulder pain?",
      a: "Common causes include rotator cuff problems, tendon irritation, frozen shoulder, arthritis, injuries and instability. Sometimes pain that feels like it is in the shoulder comes from the neck. An examination helps find the cause."
    },
    {
      q: "What is a rotator cuff tear?",
      a: "It is a tear in one of the tendons that help you lift and turn your arm. It can come from an injury or from wear over time. It can cause pain, especially at night, and weakness."
    },
    {
      q: "Does every rotator cuff tear need surgery?",
      a: "No. Many tears are managed with rest, physiotherapy and other non-surgical care. Surgery may be discussed if pain or weakness continues, or if the tear is large or came from a recent injury. Your doctor will consider your age, activity level, health and the type of tear."
    },
    {
      q: "What is shoulder instability?",
      a: "It means the shoulder feels loose, or the ball slips partly or fully out of its socket. It often follows an injury, such as a dislocation. Some people have repeated episodes."
    },
    {
      q: "What is carpal tunnel syndrome?",
      a: "It happens when the median nerve is squeezed in the wrist. It can cause numbness, tingling and pain in the thumb and nearby fingers, often worse at night. A weak grip can also occur."
    },
    {
      q: "Can carpal tunnel syndrome improve without surgery?",
      a: "Often it can, especially in milder cases. A wrist splint, activity changes and treating related health problems may help. Some people need an injection, and symptoms can return. Surgery may be discussed if symptoms are severe, long-lasting or cause weakness."
    },
    {
      q: "What causes hand and wrist pain?",
      a: "Causes include sprains, fractures, tendon problems, arthritis and nerve compression. Overuse and past injuries can also play a part. The right treatment depends on the cause."
    },
    {
      q: "What are common elbow conditions?",
      a: "Tennis elbow and golfer's elbow are common overuse problems. Others include stiffness, tendon injuries, fractures and nerve problems. Most overuse elbow pain improves without surgery."
    },
    {
      q: "Do all upper limb problems need an MRI?",
      a: "No. Many problems can be understood from your history and an examination. An X-ray, ultrasound or MRI scan is used only when it will help decide treatment. Your doctor will explain if a test is needed."
    },
    {
      q: "Can upper limb conditions improve without surgery?",
      a: "Yes, many can. Rest, activity changes, physiotherapy, splints and other non-surgical care help many people. Your doctor will explain what suits your condition."
    },
    {
      q: "When might upper limb surgery be considered?",
      a: "It may be considered after a serious injury, or when symptoms last despite good non-surgical care. Significant weakness, a joint that keeps slipping or nerve pressure with worrying signs are other reasons. Your own needs matter too."
    },
    {
      q: "How long does recovery take?",
      a: "It depends on the condition, the treatment and the person. A fixed time cannot be promised. Your doctor will explain what to expect for your situation and when you can return to daily tasks and sport."
    },
    {
      q: "Is physiotherapy important?",
      a: "Yes. Rehabilitation helps restore movement and strength, and it plays a part both with and without surgery. Your doctor or therapist will guide the exercises that suit you."
    },
    {
      q: "When should I seek urgent care?",
      a: "Go to a hospital emergency department for an obvious deformity, a suspected broken bone or dislocation, a cold or pale hand, loss of feeling, severe weakness after injury, an open fracture, or severe pain with worsening swelling. Do not wait for an appointment."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} to arrange an appointment. The clinic is at ${businessConfig.clinicName}, ${businessConfig.fullAddress}.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can message ${businessConfig.phone} on WhatsApp to arrange an appointment. Please do not use WhatsApp for emergencies. If you have an urgent trauma, go to the nearest emergency department.`
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
          <span className="text-[#111111] font-semibold">Shoulder, Hand &amp; Upper Limb Surgery</span>
        </div>
      </nav>

      {/* B3 — HERO SECTION */}
      <section className="relative bg-white py-12 sm:py-16 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Hand className="w-3.5 h-3.5" />
              SHOULDER, HAND &amp; UPPER LIMB CARE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Shoulder, Hand &amp; Upper Limb Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Your upper limb includes your shoulder, arm, elbow, wrist and hand. Pain, injury or nerve problems in these areas can make everyday tasks hard. Treatment may include exercises, medicines, splints or, for some people, surgery, depending on the diagnosis. You can arrange an orthopaedic assessment with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute in Lahore.
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

      {/* S01 — INTRODUCTION TO UPPER LIMB CARE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Upper Limb Orthopaedic Care in Lahore
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <div>
              <h3 className="font-bold text-base text-[#111111] mb-1">What is the upper limb?</h3>
              <p>
                Your upper limb includes your shoulder, upper arm, elbow, forearm, wrist and hand. These parts work together. They help you lift, reach, hold, write, type, cook, drive and look after your family.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base text-[#111111] mb-1">Why does the upper limb hurt?</h3>
              <p>
                Upper limb pain has many causes. A fall can break a bone. A twist can tear a tendon. (A tendon is a strong cord that joins a muscle to a bone.) Doing the same movement again and again can irritate soft tissues. A nerve can get squeezed. Joints can also wear down with age.
              </p>
              <p className="mt-1">
                Some problems start suddenly after an injury. Others build slowly over weeks or months. Either way, they can make simple jobs hard. You may find it difficult to dress, comb your hair, hold a cup or sleep on your side.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base text-[#111111] mb-1">Why does the cause matter?</h3>
              <p>
                Treatment depends on the diagnosis. Many upper limb problems improve with rest, exercises, splints or other non-surgical care. A few need surgery. An orthopaedic assessment helps find the real cause first, so your plan fits you.
              </p>
            </div>
            <p className="text-xs text-slate-600">
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon at BNI - Bashir NeuroSpine Institute in Lahore. You can read about the <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-bold hover:underline">orthopaedic consultation</Link> before you visit.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — COMMON UPPER LIMB CONDITIONS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Shoulder, Arm, Wrist and Hand Problems
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            Upper limb problems come in many forms. Here are the most common ones:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Shoulder injuries</h3>
              <p className="text-xs text-slate-600">Falls, sports and heavy lifting can hurt the shoulder joint, its tendons and nearby bones.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Rotator cuff problems</h3>
              <p className="text-xs text-slate-600">The rotator cuff tendons help you lift and turn your arm. They can be irritated or torn.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Shoulder instability</h3>
              <p className="text-xs text-slate-600">The shoulder feels loose, or it slips partly or fully out of its shallow socket.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Elbow pain</h3>
              <p className="text-xs text-slate-600">Overuse can irritate the tendons on the outside (tennis elbow) or inside (golfer&apos;s elbow).</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Wrist injuries</h3>
              <p className="text-xs text-slate-600">A fall on the hand can sprain ligaments or break a wrist bone such as the radius or scaphoid.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Hand pain &amp; stiffness</h3>
              <p className="text-xs text-slate-600">Tendon problems, trigger finger, and joint arthritis can restrict fine motor finger control.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Nerve compression</h3>
              <p className="text-xs text-slate-600">Squeezed nerves (carpal tunnel at the wrist, cubital tunnel at the elbow) cause numbness and tingling.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] mb-1">Fractures</h3>
              <p className="text-xs text-slate-600">A broken collarbone, arm, or wrist bone anywhere in the upper limb needs accurate diagnosis.</p>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Jump to our <a href="#treatments" className="text-[#BE8C1D] font-bold hover:underline">upper limb treatment services</a> below for specific procedures.
          </p>
        </div>
      </section>

      {/* S03 — SHOULDER PROBLEMS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Shoulder Conditions
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            The shoulder is a ball-and-socket joint that moves in many directions. This makes it very flexible, but also easier to injure:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111]">Rotator cuff tears</h3>
              <p className="text-xs text-slate-600 mt-0.5">A tendon can tear after a fall or wear over years, causing weakness when elevating the arm.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111]">Shoulder instability &amp; dislocation</h3>
              <p className="text-xs text-slate-600 mt-0.5">The humeral ball slips out of the glenoid socket, stretching or tearing the labrum.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111]">Frozen shoulder (Adhesive capsulitis)</h3>
              <p className="text-xs text-slate-600 mt-0.5">The joint capsule tightens and inflames, causing severe stiffness and progressive loss of movement.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-xs text-[#111111]">Shoulder arthritis</h3>
              <p className="text-xs text-slate-600 mt-0.5">Cartilage wears down, creating painful grinding sensations during arm rotation.</p>
            </div>
          </div>
          <Link to="/shoulder-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Read our dedicated shoulder surgery guide &rarr;
          </Link>
        </div>
      </section>

      {/* S04 — ROTATOR CUFF INJURIES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Understanding Rotator Cuff Injuries
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              The rotator cuff consists of four muscles whose tendons anchor around the top of the arm bone like a sleeve. They keep the ball centered in the socket while elevating and rotating your arm.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">Common symptoms:</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Pain in the shoulder, especially at night or when lying on that side.</li>
                <li>• Catching pain when lifting or lowering the arm past shoulder level.</li>
                <li>• Noticeable weakness when reaching or lifting objects.</li>
                <li>• Clicking or grating sensations during shoulder rotation.</li>
              </ul>
            </div>
            <p className="text-xs text-slate-600">
              Rotator cuff repair is one of Dr. Mazhar Rafique&apos;s clinical interests. Read more on our dedicated <Link to="/rotator-cuff-repair/" className="text-[#BE8C1D] font-bold hover:underline">rotator cuff repair</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* S05 — SHOULDER INSTABILITY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Shoulder Dislocation and Instability
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              The ball sits in a shallow socket. If supporting ligaments or the fibrous cartilage rim (the labrum) are torn, the shoulder can feel loose or repeatedly pop out of place. A tear of the front labrum after a dislocation is called a <strong>Bankart lesion</strong>.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <strong>Emergency note:</strong> A dislocated shoulder must be put back in place by a trained medical professional. Never attempt to force a dislocated joint back into place yourself.
            </div>
            <p className="text-xs text-slate-600">
              Shoulder arthroscopy and Bankart repair are among Dr. Mazhar Rafique&apos;s clinical interests. See our guides on <Link to="/shoulder-surgery/" className="text-[#BE8C1D] font-bold hover:underline">shoulder surgery</Link> and <Link to="/shoulder-arthroscopy/" className="text-[#BE8C1D] font-bold hover:underline">shoulder arthroscopy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S06 — HAND AND WRIST PROBLEMS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Hand and Wrist Conditions
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6">
            <p>
              Your hand and wrist have numerous delicate bones, gliding tendons, ligaments, and nerves:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Wrist sprains &amp; fractures</p>
                <p className="text-xs text-slate-600 mt-1">Frequently occurring after a fall onto an outstretched hand (FOOSH).</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Tendonitis &amp; trigger finger</p>
                <p className="text-xs text-slate-600 mt-1">Tendons swell, causing painful catching or locking when bending a finger.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Nerve compression</p>
                <p className="text-xs text-slate-600 mt-1">Nerve entrapment leading to tingling, burning, and progressive weakness.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Finger &amp; thumb arthritis</p>
                <p className="text-xs text-slate-600 mt-1">Wear at the base of the thumb making pinching or turning keys painful.</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Learn more on our <Link to="/hand-wrist-surgery/" className="text-[#BE8C1D] font-bold hover:underline">hand and wrist surgery</Link> page.
          </p>
        </div>
      </section>

      {/* S07 — CARPAL TUNNEL SYNDROME */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Carpal Tunnel Syndrome?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              The carpal tunnel is a narrow tunnel in your wrist. The <strong>median nerve</strong> passes through it alongside finger flexor tendons. When pressure inside the tunnel increases, the nerve is compressed.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-xs text-[#111111] uppercase tracking-wider mb-2">Key symptoms:</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Numbness and &ldquo;pins and needles&rdquo; in the thumb, index, middle, and half of ring finger.</li>
                <li>• Symptoms that worsen at night or upon waking, often relieved by shaking the hand.</li>
                <li>• A weak pinch grip, clumsiness, or dropping cups and objects.</li>
              </ul>
            </div>
            <p className="text-xs text-slate-600">
              Mild cases often improve with nocturnal wrist splints. Persistent compression may warrant release surgery. See our <Link to="/carpal-tunnel-release/" className="text-[#BE8C1D] font-bold hover:underline">carpal tunnel release</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* S08 — ELBOW CONDITIONS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Elbow Problems
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6">
            <p>
              The elbow joint allows bending, straightening, and forearm rotation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Tennis elbow (Lateral epicondylitis)</p>
                <p className="text-xs text-slate-600 mt-1">Outer elbow pain from repetitive wrist extension and gripping activities.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Golfer&apos;s elbow (Medial epicondylitis)</p>
                <p className="text-xs text-slate-600 mt-1">Inner elbow tenderness affecting wrist flexor muscle tendon origins.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Ulnar nerve compression (Cubital tunnel)</p>
                <p className="text-xs text-slate-600 mt-1">Tingling and numbness in the small and ring fingers when elbow is bent.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                <p className="font-bold text-xs text-[#111111]">Biceps &amp; triceps tendon ruptures</p>
                <p className="text-xs text-slate-600 mt-1">Sudden load leading to tendon tearing and arm weakness.</p>
              </div>
            </div>
          </div>
          <Link to="/elbow-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Read more on our elbow surgery page &rarr;
          </Link>
        </div>
      </section>

      {/* S09 — SYMPTOMS THAT NEED ASSESSMENT */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Signs of an Upper Limb Problem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              "Pain that lasts or keeps recurring",
              "Swelling around the joint or soft tissues",
              "Morning stiffness or stiffness after rest",
              "Weakness when lifting, gripping, or reaching",
              "Numbness in the fingers or palm",
              "Tingling or 'pins and needles' sensations",
              "Inability to raise the arm above head height",
              "A joint that feels loose, slips, or catches",
              "Trouble buttoning shirts, writing, or turning keys"
            ].map((symptom, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                <span className="text-xs text-slate-800">{symptom}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 italic">
            Shoulder pain can sometimes originate from cervical neck nerve roots. An orthopaedic check determines the accurate anatomical source.
          </p>
        </div>
      </section>

      {/* S10 — WHEN SHOULD YOU SEEK URGENT CARE? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl border-2 border-red-300 bg-red-50/50">
            <h2 className="text-xl sm:text-2xl font-bold text-red-950 mb-3 flex items-center gap-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              <AlertTriangle className="w-5 h-5 text-red-600" />
              When Is an Upper Limb Injury an Emergency?
            </h2>
            <p className="text-sm text-red-900 mb-4">
              Go to the nearest hospital emergency department straight away if you have any of these signs:
            </p>
            <ul className="space-y-1.5 text-xs text-red-900 mb-5">
              <li>• An obvious deformity: arm, wrist or shoulder looks visibly bent or out of shape.</li>
              <li>• A severe injury such as a high-velocity fall, road accident, or crush trauma.</li>
              <li>• A suspected broken bone or dislocated shoulder/elbow.</li>
              <li>• A hand or fingers that feel cold, pale, white or blue (circulation compromise).</li>
              <li>• Complete loss of feeling or sudden severe paralysis in the hand.</li>
              <li>• An open fracture where bone has broken through the skin.</li>
              <li>• Unbearable pain accompanied by rapidly expanding swelling.</li>
            </ul>
            <p className="text-xs text-red-800">
              Do not wait for a clinic appointment. Keep the limb supported and seek immediate emergency department care.
            </p>
          </div>
        </div>
      </section>

      {/* S11 — HOW ARE UPPER LIMB PROBLEMS DIAGNOSED? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check Shoulder, Hand or Elbow Pain?
          </h2>
          <div className="space-y-2.5 mb-6">
            {[
              { title: "Your symptoms", desc: "Where the pain is, onset, radiation, night pain, and aggravating movements." },
              { title: "Injury history", desc: "Workplace ergonomic strains, sports impacts, falls, and past joint dislocations." },
              { title: "Physical examination", desc: "Palpation of joints, tendons, trigger points, and looking for localized swelling." },
              { title: "Movement and strength testing", desc: "Measuring active range of motion and resisted muscle strength against gravity." },
              { title: "Nerve function", desc: "Dermatomal sensation checks, reflexes, and Tinel/Phalen nerve compression tests." },
              { title: "Selective diagnostic imaging", desc: "X-rays for bones, ultrasound or MRI scans for tendons and labrum when indicated." }
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

      {/* S12 — NON-SURGICAL TREATMENT */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Upper Limb Problems Improve Without Surgery?
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Yes, many can. Conservative treatment is usually the first approach:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Activity modification</p>
              <p className="text-xs text-slate-600 mt-1">Avoiding overhead lifting or repetitive wrist flexion while tissues calm down.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Physiotherapy &amp; exercises</p>
              <p className="text-xs text-slate-600 mt-1">Supervised rehabilitation to rebuild rotator cuff, scapular, or forearm strength.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Splints and braces</p>
              <p className="text-xs text-slate-600 mt-1">Night wrist splints for carpal tunnel, or epicondylitis straps for tennis elbow.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Clinical review</p>
              <p className="text-xs text-slate-600 mt-1">Periodic evaluations to track functional progress before considering procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S13 — WHEN MIGHT SURGERY BE CONSIDERED? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might Upper Limb Surgery Be Needed?
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Most upper limb conditions do not require an operation. Surgery may be considered when:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
            <li>• Significant structural trauma: displaced fractures, acute complete tendon tears.</li>
            <li>• Persistent symptoms that fail to resolve after 3 to 6 months of supervised non-surgical care.</li>
            <li>• Marked muscle weakness or progressive muscle wasting (such as thumb thenar atrophy).</li>
            <li>• Recurrent joint dislocations or instability that restricts normal daily use.</li>
            <li>• Severe nerve entrapment with continuous numbness or loss of sensation.</li>
          </ul>
          <p className="text-xs text-slate-600">
            Learn more about surgical pathways on our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-bold hover:underline">surgery preparation and recovery</Link> page.
          </p>
        </div>
      </section>

      {/* S14 — UPPER LIMB TREATMENT SERVICES */}
      <section id="treatments" className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Shoulder, Hand &amp; Upper Limb Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#111111] mb-2">Shoulder Surgery</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Overview of surgical solutions for impingement, chronic instability, frozen shoulder, and advanced arthritis when non-surgical care is insufficient.
                </p>
              </div>
              <Link to="/shoulder-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                <span>Explore Shoulder Surgery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#111111] mb-2">Rotator Cuff Repair</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Reattachment of torn rotator cuff tendons back to bone via keyhole arthroscopy to relieve night pain and restore arm elevation.
                </p>
              </div>
              <Link to="/rotator-cuff-repair/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                <span>Learn About Rotator Cuff Repair</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#111111] mb-2">Carpal Tunnel Release</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Surgical decompression of the median nerve at the wrist to resolve chronic numbness, burning pins and needles, and grip weakness.
                </p>
              </div>
              <Link to="/carpal-tunnel-release/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                <span>Learn About Carpal Tunnel Release</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#111111] mb-2">Hand &amp; Wrist Surgery</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Surgical and non-surgical care for trigger finger, ganglion cysts, wrist ligament tears, scaphoid fractures, and arthritis.
                </p>
              </div>
              <Link to="/hand-wrist-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                <span>Explore Hand &amp; Wrist Surgery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#111111] mb-2">Elbow Surgery</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Evaluation and treatment for recalcitrant tennis elbow, cubital tunnel ulnar nerve entrapment, joint stiffness, and fractures.
                </p>
              </div>
              <Link to="/elbow-surgery/" className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1">
                <span>Explore Elbow Surgery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S15 — SHOULDER ARTHROSCOPY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Shoulder Arthroscopy?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Shoulder arthroscopy is minimally invasive keyhole surgery. The surgeon makes tiny 5mm incisions and introduces a pencil-thin camera (arthroscope) to visualize the joint on a high-definition monitor. Miniature instruments allow repair of tendons and cartilage without large muscle divisions.
            </p>
            <p>
              Shoulder arthroscopy is a primary clinical interest of Dr. Mazhar Rafique. Read the full procedural guide on our <Link to="/shoulder-arthroscopy/" className="text-[#BE8C1D] font-bold hover:underline">shoulder arthroscopy</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* S16 — RECOVERY AFTER UPPER LIMB TREATMENT */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Shoulder, Hand or Elbow Treatment
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            Recovery varies based on the condition treated and whether surgery was performed:
          </p>
          <div className="space-y-2.5 text-xs text-slate-700 mb-6">
            <p>• <strong>Wound care:</strong> Keep surgical dressings clean and dry until sutures are removed.</p>
            <p>• <strong>Pain &amp; swelling:</strong> Managed with prescribed medication, elevation, and cold therapy.</p>
            <p>• <strong>Immobilisation limits:</strong> Slings or splints protect healing repairs for a defined period.</p>
            <p>• <strong>Follow-up visits:</strong> Regular assessments to confirm joint stability and healing.</p>
          </div>
        </div>
      </section>

      {/* S17 — REHABILITATION AND MOVEMENT */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Is Rehabilitation Important?
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6">
            <p>
              Rehabilitation prevents joint stiffness, restores muscular coordination, and safely reloads repairing tendons without overstretching healing tissues.
            </p>
          </div>
          <Link to="/patient-education/" className="text-xs font-bold text-[#BE8C1D] hover:underline">
            Explore our patient education resources &rarr;
          </Link>
        </div>
      </section>

      {/* S18 — EVERYDAY ACTIVITIES AND UPPER LIMB HEALTH */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Upper Limb Problems Affect Daily Life
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Dressing</p>
              <p className="text-xs text-slate-600 mt-0.5">Reaching behind to fasten garments or slip on sleeves.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Lifting &amp; carrying</p>
              <p className="text-xs text-slate-600 mt-0.5">Holding shopping bags, children, or household items.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Writing &amp; typing</p>
              <p className="text-xs text-slate-600 mt-0.5">Fine motor hand numbness causing quick fatigue.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Driving</p>
              <p className="text-xs text-slate-600 mt-0.5">Turning the steering wheel or changing gears comfortably.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Sleeping</p>
              <p className="text-xs text-slate-600 mt-0.5">Inability to lie on the affected side due to throbbing night ache.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">Sports</p>
              <p className="text-xs text-slate-600 mt-0.5">Loss of throwing velocity, racket control, or push strength.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S19 — ABOUT DR. MAZHAR RAFIQUE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
            <h2 className="text-2xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience in orthopaedic, trauma and sports injury care. His clinical interests encompass shoulder arthroscopy, Bankart repair, rotator cuff repair, fracture and trauma surgery, and comprehensive upper limb care.
            </p>
            <div className="space-y-1 text-xs text-slate-800 mb-5">
              <p>• <strong>M.B.B.S.</strong></p>
              <p>• <strong>F.C.P.S. (Orthopedic Surgery)</strong></p>
              <p>• <strong>Certified ATLS®</strong> (Advanced Trauma Life Support)</p>
              <p>• <strong>Fellowship Arthroplasty and Joint Reconstruction</strong></p>
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

      {/* S20 — RELATED ORTHOPAEDIC SERVICES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Orthopaedic Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Shoulder Arthroscopy", path: "/shoulder-arthroscopy/", desc: "Keyhole surgery to look inside the shoulder and treat selected problems." },
              { title: "Sports Injury & Ligament Surgery", path: "/sports-injury-treatment/", desc: "Care for injuries from sport, including ligament problems." },
              { title: "Fracture & Trauma Surgery", path: "/fracture-trauma-surgery/", desc: "Surgical care for serious broken bones and high-energy injuries." },
              { title: "Fracture Treatment", path: "/fracture-treatment/", desc: "How broken bones are assessed and treated, with or without surgery." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "What to expect when seeing an orthopaedic surgeon for pain or injury." }
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

      {/* S21 — CLINIC LOCATION AND FINAL APPOINTMENT CTA */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <h2 className="text-2xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Shoulder, Hand or Elbow Problem Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you have shoulder pain, an upper limb injury, hand symptoms or an elbow problem, you can arrange an orthopaedic assessment. A check-up helps find the cause and explains your options. It does not mean you will need surgery.
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

export default UpperLimbSurgeryPage;