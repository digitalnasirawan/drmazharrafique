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
  ChevronRight,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Award,
  HelpCircle,
  Clock,
  ClipboardList,
  Check,
  Eye,
  Layers,
  FileText,
  UserCheck
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const HipArthroscopyPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is hip arthroscopy?",
      a: "Hip arthroscopy is a keyhole procedure that lets a surgeon look inside the hip joint with a thin camera called an arthroscope. The surgeon works through a few small cuts. It is used to find the cause of hip pain and, in selected patients, to treat certain hip problems."
    },
    {
      q: "Is hip arthroscopy the same as keyhole surgery?",
      a: "Hip arthroscopy is a type of keyhole surgery. Keyhole surgery is an everyday name for surgery done through small cuts. Hip arthroscopy is the keyhole method used for the hip joint."
    },
    {
      q: "What is hip impingement?",
      a: "Hip impingement, also called femoroacetabular impingement or FAI, happens when the bones of the hip do not move smoothly together. The bones touch too early during some movements. This can cause pain, often in the groin. Many people have these bone shapes without pain, so a doctor needs to check your symptoms, your hip movement and your scans together."
    },
    {
      q: "What is a hip labral tear?",
      a: "The labrum is a soft ring of tissue around the edge of the hip socket. A labral tear is a tear in that ring. Some tears cause pain, clicking or catching in the hip. Others cause no symptoms at all."
    },
    {
      q: "Can a labral tear improve without surgery?",
      a: "The symptoms of a labral tear may settle with physiotherapy, hip strengthening and changes to activities. Torn labrum tissue does not usually grow back fully, but many people feel better without an operation. Surgery is usually discussed only if pain continues and limits daily life."
    },
    {
      q: "When might hip arthroscopy be considered?",
      a: "It may be considered when a clear problem inside the hip, such as impingement or a labral tear, is causing pain that limits daily life, and non-surgical care has not helped enough. Your general health and the condition of your hip joint also matter. A consultation does not mean surgery will be advised."
    },
    {
      q: "Is hip arthroscopy suitable for hip arthritis?",
      a: "Hip arthroscopy is usually not suitable for advanced hip arthritis, because the joint surface is already badly worn. Other treatments, which may include hip replacement, may be better in that case. Your doctor will explain what suits your hip."
    },
    {
      q: "What is the difference between hip arthroscopy and hip replacement?",
      a: "Hip arthroscopy keeps your own joint. The surgeon looks inside and treats selected problems through small cuts. Hip replacement removes the damaged parts of the joint and puts in artificial parts. It is usually considered for badly worn joints. They are different operations for different problems."
    },
    {
      q: "Is hip arthroscopy a major operation?",
      a: "It uses small cuts, and many healthy patients go home the same day. Even so, it is still surgery. It needs anaesthesia, it carries risks, and it needs a period of rehabilitation. Your surgeon will explain what this means for you."
    },
    {
      q: "What are the possible risks?",
      a: "Serious problems are uncommon, but they can happen. Risks include infection, bleeding, blood clots, nerve injury, short-term numbness from leg traction, stiffness, ongoing pain, anaesthesia risks, and the need for further treatment. Your surgeon will explain the risks that apply to you."
    },
    {
      q: "How long does recovery take?",
      a: "Recovery is different for each person. It depends on the problem treated, the work done in the hip and how you heal. Some people use crutches only until the limp settles, while others need them for one to two months. Your surgeon and physiotherapist will guide your return to activities, and no fixed time suits everyone."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Most people need physiotherapy after hip arthroscopy to regain strength and movement. Physiotherapy is also often the first treatment tried before surgery is considered."
    },
    {
      q: "Can hip pain improve without surgery?",
      a: "Yes. Many hip problems improve with exercise-based physiotherapy, activity changes and other non-surgical care. A doctor can check your hip and explain which treatment may suit you."
    },
    {
      q: "How can I book an orthopaedic consultation?",
      a: `You can call the clinic on ${businessConfig.phone} or send a WhatsApp message on ${businessConfig.phone}. Appointments are arranged by phone call or WhatsApp. Please ask the clinic about available appointment times when you contact them.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can message the clinic directly on WhatsApp at ${businessConfig.phone} or call directly at ${businessConfig.phone} for scheduling.`
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

      {/* B3 — HERO SECTION */}
      <section className="relative bg-white border-b border-[#E8E5DE] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
                <Activity className="w-3.5 h-3.5" />
                HIP ARTHROSCOPY INFORMATION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Hip Arthroscopy in Lahore
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Hip arthroscopy is a way to look inside the hip joint through very small cuts. The surgeon uses a thin tube with a tiny camera, called an arthroscope, to see the joint on a screen. It may be considered for selected hip problems, such as hip impingement or a torn labrum, when other treatment has not helped enough. If you have ongoing hip pain, you can call or message the clinic in Lahore to arrange an orthopaedic consultation.
              </p>

              {/* DUAL CTAS */}
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-base shadow-sm hover:bg-[#a67a18] transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Book Appointment</span>
                </a>
                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-base transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E5DE]/80 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>FCPS Orthopaedic Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Minimally Invasive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DE] shadow-md bg-white p-3">
                <img 
                  src="/images/doctor/dr-mazhar-physical-exam.jpg" 
                  alt="Illustration of a hip joint with a thin arthroscope camera entering through a small cut, showing how hip arthroscopy works."
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E5DE] shadow-sm">
                  <p className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider mb-1">Targeted Keyhole Evaluation</p>
                  <p className="text-sm text-slate-700">Detailed examination and treatment for hip impingement & labral conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS HIP ARTHROSCOPY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">01</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE OVERVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Hip Arthroscopy?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed">
            <p>
              Hip arthroscopy is a way to look inside the hip joint and, when needed, treat a problem there. Many people call it hip keyhole surgery.
            </p>
            <p>
              Your hip is deep inside your body. A doctor cannot see it from the outside. Hip arthroscopy helps the surgeon see the joint clearly. It may also help to treat some hip problems at the same time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#BE8C1D]" />
                  What Is an Arthroscope?
                </h3>
                <p className="text-sm text-slate-700">
                  An arthroscope is a thin tube with a tiny camera and a light at the end. The camera sends pictures of the inside of the hip to a video screen. The surgeon watches the screen to see the joint in detail.
                </p>
              </div>

              <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#BE8C1D]" />
                  What Does Keyhole Surgery Mean?
                </h3>
                <p className="text-sm text-slate-700">
                  In keyhole surgery, the surgeon makes a few very small cuts instead of one big cut. One small cut lets the camera in. Other small cuts let thin tools in. Because the cuts are small, this is often called keyhole surgery.
                </p>
              </div>
            </div>

            <p>
              Hip arthroscopy may be used to find the cause of hip pain. It may also be used to treat some problems, such as extra bone that rubs inside the joint, a torn labrum, or small loose pieces of bone or cartilage.
            </p>
            <p>
              Hip arthroscopy is not needed for every hip problem. Many hip problems improve with exercise, physiotherapy and other care that does not need an operation. A doctor must first find out what is causing your pain.
            </p>
            <p>
              Arthroscopy is also used for other joints. You can read about <Link to="/arthroscopic-surgery/" className="text-[#BE8C1D] hover:underline font-medium">arthroscopic surgery</Link> in general.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — HOW DOES YOUR HIP JOINT WORK? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">02</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">JOINT ANATOMY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does Your Hip Joint Work?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">The Ball and the Socket</h3>
              <p className="text-slate-700 leading-relaxed">
                The hip is a ball-and-socket joint. It joins your leg to your body. The ball is the top of your thigh bone. Doctors call it the femoral head. The socket is a cup-shaped part of your pelvis. Doctors call it the acetabulum.
              </p>
              <p className="text-slate-700 leading-relaxed mt-2">
                The ball sits inside the socket. This lets your leg move forwards, backwards and sideways. It also lets your leg turn in and out.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Cartilage and the Labrum</h3>
              <p className="text-slate-700 leading-relaxed">
                Smooth, slippery cartilage covers the ball and the socket. It helps the bones glide over each other with little rubbing.
              </p>
              <p className="text-slate-700 leading-relaxed mt-2">
                A soft ring of strong tissue runs around the edge of the socket. It is called the labrum. It makes the socket a little deeper and helps hold the ball in place. It also helps keep the joint sealed.
              </p>
              <p className="text-slate-700 leading-relaxed mt-2">
                Tough bands called ligaments, and a covering called the joint capsule, hold the hip together. Inside, the joint makes a small amount of fluid that keeps it moving smoothly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Why Smooth Movement Matters</h3>
              <p className="text-slate-700 leading-relaxed">
                In a healthy hip, the ball fits well into the socket and moves freely. If the shape of the bones is different, or if the cartilage or labrum is damaged, movement may become painful or stiff. That is when a doctor may need to check the hip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03 — WHICH HIP PROBLEMS MAY NEED ARTHROSCOPY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">03</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">INDICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Which Hip Problems May Need Arthroscopy?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed mb-6">
            <p>
              Hip arthroscopy is used for selected hip conditions. It does not suit every type of hip problem.
            </p>
          </div>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="text-xl font-bold text-[#111111] mb-4">Problems That May Be Checked or Treated</h3>
            <div className="space-y-3">
              {[
                { title: "Hip impingement (femoroacetabular impingement, or FAI)", desc: "Extra bone on the ball or socket rubs during movement." },
                { title: "Labral tears", desc: "A tear in the soft ring of tissue around the socket." },
                { title: "Cartilage damage", desc: "Small areas of worn or torn cartilage." },
                { title: "Loose bodies", desc: "Small loose pieces of bone or cartilage floating in the joint." },
                { title: "Synovitis", desc: "Swelling of the lining of the joint." },
                { title: "Unexplained hip pain", desc: "Pain that stays despite tests and other care, when a doctor thinks looking inside will help." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111]">{item.title}. </span>
                    <span className="text-slate-700">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200 text-slate-800">
            <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Not for Advanced Hip Arthritis
            </h3>
            <p className="text-sm">
              Hip arthroscopy is usually not helpful for advanced hip arthritis. When the joint cartilage is already badly worn, keyhole surgery does not rebuild it. Other treatments, including hip replacement, may be discussed instead. Your doctor will explain what suits your hip.
            </p>
          </div>
        </div>
      </section>

      {/* S04 — WHAT IS HIP IMPINGEMENT? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">04</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">UNDERSTANDING FAI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Hip Impingement?
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed mb-6">
            <p>
              Hip impingement is also called femoroacetabular impingement, or FAI. It happens when the bones of the hip do not fit together smoothly.
            </p>
            <p>
              Because of extra bone, the ball and socket bump or rub against each other during certain movements. Over time, this rubbing can damage the cartilage or tear the labrum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Cam and Pincer Shapes</h3>
              <p className="text-sm text-slate-700 mb-3">Doctors describe two main shapes:</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BE8C1D] mt-1.5 shrink-0" />
                  <span><strong>Cam shape:</strong> The ball is not completely round. It has a bump on one side that rubs against the socket.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BE8C1D] mt-1.5 shrink-0" />
                  <span><strong>Pincer shape:</strong> The socket covers too much of the ball, so the rim catches on the thigh bone.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Many people have both shapes together. This is called mixed or combined impingement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Why Assessment Matters</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Having a cam or pincer shape does not automatically mean you need surgery. Many people have these shapes and feel no pain.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mt-3">
                A doctor must look at your symptoms, your physical examination and your scans together before suggesting any treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05 — WHAT IS A HIP LABRAL TEAR? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">05</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">LABRAL TEARS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Hip Labral Tear?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">What the Labrum Does</h3>
              <p className="text-slate-700 leading-relaxed">
                The labrum is a ring of strong, soft tissue around the edge of the hip socket. It deepens the socket and helps hold the ball in place. A labral tear is a tear in this ring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">How a Labrum Gets Damaged</h3>
              <p className="text-slate-700 leading-relaxed">
                A labrum can tear after a sudden injury, such as a twist or a fall. It can also wear down slowly from repeated movements. Hip impingement and a shallow hip socket can make a tear more likely.
              </p>
              <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE] mt-4">
                <p className="text-sm font-semibold text-[#111111] mb-3">When a labral tear causes symptoms, people may notice:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D]" />
                    <span>Pain in the groin or front of the hip</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D]" />
                    <span>Clicking, catching or locking in the hip</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D]" />
                    <span>Stiffness or less movement in the hip</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D]" />
                    <span>Pain getting in and out of a car</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Does Every Labral Tear Need Surgery?</h3>
              <p className="text-slate-700 leading-relaxed">
                No. Many people have a labral tear on a scan and feel no pain. A tear that does not cause problems usually does not need treatment.
              </p>
              <p className="text-slate-700 leading-relaxed mt-2">
                When a tear does cause pain, doctors often start with physiotherapy, hip strengthening and changes to daily activities. Torn labrum tissue does not usually grow back fully, but symptoms may settle with this care. If pain continues and limits daily life, a doctor may talk about surgery. The surgeon may then trim or repair the torn part.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — COMMON SIGNS OF HIP JOINT PROBLEMS */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">06</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SYMPTOMS & WARNINGS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of Hip Joint Problems
          </h2>

          <h3 className="text-xl font-bold text-[#111111] mb-4">Signs You May Notice</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Groin pain", desc: "Pain deep in the groin or at the front of the hip is common." },
              { title: "Stiffness", desc: "The hip may feel tight, especially after sitting for a while." },
              { title: "Clicking or catching", desc: "You may feel or hear a click, or feel the hip catch." },
              { title: "Pain with movement", desc: "Pain may come when you bend, twist or turn." },
              { title: "Trouble with daily tasks", desc: "Putting on shoes, getting in/out of cars, or prolonged sitting feels hard." },
              { title: "Less movement", desc: "You may not be able to bend or turn the hip as far as before." }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] mb-1">{s.title}</h4>
                <p className="text-sm text-slate-700">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600 mb-6">
            These signs can have many causes. They may come from the hip joint, the muscles, the back or another area. Only a doctor can tell what is causing them. Please do not diagnose yourself from a list. See a doctor if hip pain lasts for more than a few weeks, keeps coming back, or limits your work, sport or sleep.
          </p>

          {/* URGENT CARE BOX */}
          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] shadow-sm">
            <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              When to Get Urgent Medical Help
            </h3>
            <p className="text-sm text-slate-700 mb-3">
              Go to an emergency department or get urgent medical care if:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                <span>You have a serious injury or fall and have strong hip pain.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                <span>You cannot put weight on your leg.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                <span>Your leg looks twisted, shorter or out of shape.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                <span>Your hip is hot, red, swollen and painful, and you also have a fever or feel very unwell.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* S07 — WHAT CAUSES HIP PAIN? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">07</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">DIAGNOSTIC FACTORS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Hip Pain?
          </h2>

          <h3 className="text-xl font-bold text-[#111111] mb-4">Common Causes</h3>
          <div className="space-y-3 mb-6">
            {[
              { name: "Hip impingement", desc: "The bones of the hip touch too early when the hip moves." },
              { name: "Labral injuries", desc: "The soft ring around the socket is torn or worn." },
              { name: "Sports injuries", desc: "Twisting, turning and sudden changes of direction can strain the hip." },
              { name: "Repeated movements", desc: "Doing the same hip movement again and again can irritate the joint over time." },
              { name: "Hip dysplasia", desc: "The socket is shallower than usual, so the joint carries more stress." },
              { name: "Arthritis", desc: "The cartilage wears away and the joint becomes stiff and painful." },
              { name: "Other problems", desc: "Muscle or tendon strain, bursitis, and pain that comes from the lower back can also be felt in the hip or groin." }
            ].map((c, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
                <Activity className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">{c.name}: </span>
                  <span className="text-slate-700">{c.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-lg font-bold text-[#111111] mb-2">Not Every Cause Needs Arthroscopy</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Hip arthroscopy helps with only some of these problems. Muscle strain often improves with rest and exercise. Arthritis may need a different plan. A clear diagnosis comes first.
            </p>
          </div>
        </div>
      </section>

      {/* S08 — HOW DOES A DOCTOR CHECK YOUR HIP? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">08</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CLINICAL EVALUATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check Your Hip?
          </h2>

          <h3 className="text-xl font-bold text-[#111111] mb-4">A Typical Hip Check</h3>
          <p className="text-slate-700 mb-6">
            Most hip checks follow a few simple steps. The details can differ from one patient to another.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { num: "01", title: "Talk about your symptoms", desc: "The doctor asks where it hurts, when it started, and what makes it better or worse." },
              { num: "02", title: "Review your health history", desc: "This includes past injuries, other health problems, medicines and your daily activities." },
              { num: "03", title: "Examine your hip", desc: "The doctor looks at how you walk and gently moves your hip to see how far it goes and which movements cause pain." },
              { num: "04", title: "Consider imaging", desc: "Tests are chosen only when they are useful." },
              { num: "05", title: "Discuss options", desc: "The doctor explains what was found and what treatment choices may suit you." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[#E8E5DE]">
                <span className="text-xl font-bold text-[#BE8C1D]">{step.num}</span>
                <div>
                  <h4 className="font-bold text-[#111111] mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Scans and X-rays</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              An X-ray shows the shape of the hip bones. It can show signs of impingement, a shallow socket or arthritis. An MRI scan shows soft tissue, such as the labrum and cartilage. Sometimes other scans are used.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Not every patient needs every test. Scans also need careful reading, because some people have changes on a scan and no pain.
            </p>
          </div>
        </div>
      </section>

      {/* S09 — CAN HIP PROBLEMS IMPROVE WITHOUT SURGERY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">09</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSERVATIVE CARE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Hip Problems Improve Without Surgery?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Yes, many hip problems improve without surgery. For many people, non-surgical care is the first step, and it may be all they need.
          </p>

          <h3 className="text-xl font-bold text-[#111111] mb-4">Non-Surgical Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                Physiotherapy
              </h4>
              <p className="text-sm text-slate-700">A physiotherapist teaches exercises that strengthen the muscles around the hip and improve movement.</p>
            </div>
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                Suitable Exercises
              </h4>
              <p className="text-sm text-slate-700">Regular, guided exercise is a main treatment for hip impingement and many labral problems. It needs time and patience.</p>
            </div>
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                Activity Changes
              </h4>
              <p className="text-sm text-slate-700">You may need to avoid movements that bring on pain, such as deep bending, prolonged sitting, or hard twisting. Small changes to how you sit and train can help.</p>
            </div>
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                Pain Relief & Injections
              </h4>
              <p className="text-sm text-slate-700">A doctor may suggest pain relief or an injection into the hip. Injections can help for a short time and are not a cure.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">How Long Should You Try Them?</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Exercise treatment often needs around three months to show its full effect. Your doctor will check your progress. If your pain stays and still limits daily life, other choices may be discussed.
            </p>
          </div>
        </div>
      </section>

      {/* S10 — WHEN MIGHT HIP ARTHROSCOPY BE NEEDED? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">10</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CANDIDACY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might Hip Arthroscopy Be Needed?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Hip arthroscopy may be considered when a clear problem inside the hip is causing pain, and other treatment has not helped enough. It is a decision you make together with your doctor.
          </p>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="text-xl font-bold text-[#111111] mb-4">Points Doctors Think About</h3>
            <div className="space-y-3">
              {[
                { title: "A clear diagnosis", desc: "Your symptoms, examination and scans should point to the same problem." },
                { title: "The type of problem", desc: "Selected cases of hip impingement and selected labral injuries are examples." },
                { title: "Your daily life", desc: "Pain that limits walking, work, sport or sleep carries more weight." },
                { title: "Response to other care", desc: "Doctors usually look at how you did with physiotherapy and activity changes first." },
                { title: "Your general health and hip shape", desc: "Your overall health and the shape of your hip help decide if you are suitable." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111]">{item.title}: </span>
                    <span className="text-slate-700">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">When Arthroscopy May Not Suit</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Hip arthroscopy is usually less suitable if you have advanced hip arthritis. In that case, the cartilage is already badly worn, and keyhole surgery is unlikely to give lasting help. A different plan may be better.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              A consultation does not mean you will be advised to have surgery. Many patients are advised to continue non-surgical care.
            </p>
          </div>
        </div>
      </section>

      {/* S11 — WHAT HAPPENS DURING HIP ARTHROSCOPY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">11</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE STEPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During Hip Arthroscopy?
          </h2>
          <p className="text-slate-700 mb-6">
            The steps below give a general picture. Every patient is different, and the details depend on the problem found in the hip. Your surgeon will explain your own plan before surgery.
          </p>

          <h3 className="text-xl font-bold text-[#111111] mb-4">Step by Step</h3>
          <div className="space-y-3 mb-8">
            {[
              { num: "01", title: "Check before surgery", desc: "The team reviews your health, your medicines and your scans. You meet the anaesthesia team." },
              { num: "02", title: "Anaesthesia", desc: "Hip arthroscopy is most often done under general anaesthesia (asleep), or a spinal injection numbing you from the waist down." },
              { num: "03", title: "Positioning & Traction", desc: "You lie on a special table. Your leg is gently pulled (traction) to open space in the joint for visibility." },
              { num: "04", title: "Small cuts", desc: "The surgeon makes a few small cuts around the hip. The first one is about the size of a buttonhole." },
              { num: "05", title: "Camera in", desc: "The arthroscope goes in through the first cut. Fluid flows through the joint to keep the view clear." },
              { num: "06", title: "Look inside", desc: "The surgeon checks the joint in high definition on the screen before deciding what to do." },
              { num: "07", title: "Treat the problem, if needed", desc: "Thin precision instruments go in through the other small cuts to repair or trim tissue." },
              { num: "08", title: "Close the wounds", desc: "The cuts are closed with small stitches or skin tapes and covered with a sterile dressing." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
                <span className="text-base font-bold text-[#BE8C1D]">{step.num}</span>
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Treatment Inside the Joint</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              What the surgeon does depends on what is found. It may include smoothing damaged cartilage, repairing or trimming a torn labrum, trimming extra bone that causes impingement, or removing loose pieces or inflamed tissue. In some patients, the surgeon only looks and does not treat anything.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              The operation can take a shorter or longer time, depending on the work needed. Many healthy patients go home the same day, but this is decided for each person.
            </p>
          </div>
        </div>
      </section>

      {/* S12 — HIP ARTHROSCOPY VS HIP REPLACEMENT */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">12</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Hip Arthroscopy vs Hip Replacement
          </h2>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Two Different Operations</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              Hip arthroscopy and hip replacement are not the same, and one cannot take the place of the other.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Hip arthroscopy</strong> keeps your own joint. The surgeon looks inside and treats certain problems, such as extra bone or a torn labrum. It is used for selected problems when the joint surface is still in fairly good condition.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Hip replacement</strong> removes the damaged ball and socket surfaces and puts in artificial parts. It is usually considered when the joint is badly worn, often from advanced arthritis, and pain limits daily life.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If your hip has advanced arthritis, arthroscopy is unlikely to be the right choice. A different treatment approach, which may include hip replacement, may be discussed. You can read more on our <Link to="/hip-replacement-surgery/" className="text-[#BE8C1D] hover:underline font-semibold">hip replacement surgery</Link> page.
            </p>
          </div>

          {/* 7-Row Comparison Table */}
          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-[#111111]">
                    <th className="p-4 font-bold">Point</th>
                    <th className="p-4 font-bold text-[#BE8C1D]">Hip Arthroscopy</th>
                    <th className="p-4 font-bold">Hip Replacement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Main aim</td>
                    <td className="p-4">To look inside the hip and treat selected problems</td>
                    <td className="p-4">To replace a badly damaged joint</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">What happens to the joint</td>
                    <td className="p-4">Your own joint is kept</td>
                    <td className="p-4">The ball and socket surfaces are replaced with artificial parts</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Conditions often considered</td>
                    <td className="p-4">Selected hip impingement, certain labral tears, some cartilage problems, loose bodies</td>
                    <td className="p-4">Advanced hip arthritis and other severe joint damage</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Size of cuts</td>
                    <td className="p-4">A few small cuts</td>
                    <td className="p-4">A larger cut</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Suitable when</td>
                    <td className="p-4">Joint surface is still in fairly good condition</td>
                    <td className="p-4">Joint is badly worn and pain limits daily life</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Advanced arthritis</td>
                    <td className="p-4">Usually not suitable</td>
                    <td className="p-4">Often the type of problem it is used for</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Rehabilitation</td>
                    <td className="p-4">Needed; plan depends on the problem treated</td>
                    <td className="p-4">Needed; plan depends on the surgery and the patient</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-[#FAF8F2] border-t border-[#E8E5DE] text-xs text-slate-500">
              This table is a general guide only. Your doctor will explain what suits you.
            </div>
          </div>
        </div>
      </section>

      {/* S13 — BENEFITS AND RISKS OF HIP ARTHROSCOPY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">13</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SAFETY & BALANCED OUTCOMES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Risks of Hip Arthroscopy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Benefits</h3>
              <p className="text-xs text-slate-600 mb-4">For selected patients, hip arthroscopy may offer:</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>A direct look at the inside of the hip.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Treatment of certain joint problems through small cuts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Less pain and better movement, when the operation suits the problem.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                One large UK trial in selected patients with hip impingement and no arthritis found that arthroscopy led to greater improvement than a physiotherapy-led programme. This does not mean surgery is right for everyone. Results depend on the problem, the person and rehabilitation.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Risks</h3>
              <p className="text-xs text-slate-600 mb-4">Serious problems are uncommon, but every operation carries some risk:</p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• <strong>Infection:</strong> A wound or joint infection.</li>
                <li>• <strong>Bleeding:</strong> Bleeding or bruising around the hip.</li>
                <li>• <strong>Blood clots:</strong> Clots in the leg veins.</li>
                <li>• <strong>Nerve injury:</strong> Injury to a nearby nerve.</li>
                <li>• <strong>Temporary numbness:</strong> From leg traction during surgery (usually short-lived).</li>
                <li>• <strong>Stiffness:</strong> The hip may feel stiff for some time.</li>
                <li>• <strong>Ongoing pain:</strong> Some people still have pain after surgery.</li>
                <li>• <strong>Anaesthesia risks:</strong> Any anaesthesia has small risks.</li>
                <li>• <strong>Further treatment:</strong> Some people need more treatment later.</li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">
                Your surgeon will talk about the risks that apply to you before you decide.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-xl font-bold text-[#111111] mb-2">Limits to Keep in Mind</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Hip arthroscopy cannot reverse damage that is already severe. It cannot promise a pain-free hip. No one can promise that surgery will stop arthritis from developing in the future. Some people also need to change their activities to protect the joint.
            </p>
          </div>
        </div>
      </section>

      {/* S14 — RECOVERY AFTER HIP ARTHROSCOPY */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">14</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">REHABILITATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Hip Arthroscopy
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Recovery is different for each person. It depends on the problem treated, the work done inside the hip, and how you heal. Your surgeon and physiotherapist will give you a plan for your own case.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">The First Days</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#BE8C1D]">•</span>
                  <span><strong>Early recovery:</strong> After surgery you rest in the recovery room. Many healthy patients then go home the same day. You will need someone to take you home and stay with you for at least the first night.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#BE8C1D]">•</span>
                  <span><strong>Pain and swelling:</strong> Some pain and swelling are normal. The team will tell you how to control them. Use medicines only as your doctor advises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#BE8C1D]">•</span>
                  <span><strong>Wound care:</strong> Keep the dressing clean and dry, and follow the instructions you are given.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#BE8C1D]">•</span>
                  <span><strong>Blood clot prevention:</strong> Your doctor may advise moving your legs, walking when allowed, or a short course of medicine.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4 border-t border-[#E8E5DE] pt-3">
                Contact your clinical team if the wound becomes red, hot or leaks fluid, if you have a fever, or if pain gets worse. Seek urgent help if you have chest pain, trouble breathing, or a painful, swollen calf.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Walking Aids and Physiotherapy</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                You may need crutches or a walker for some time. Some people need them only until the limp settles. After bigger procedures, they may be needed for one to two months. Your surgeon will tell you how much weight to put on your leg.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Physiotherapy is an important part of recovery for most people. A physiotherapist teaches exercises that bring back strength and movement, and tells you what to do and what to avoid. Please do the exercises as advised, and attend follow-up appointments so your progress can be checked.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Going Back to Normal Life</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Most people return to daily activities in steps. Work, driving, sport and exercise are added back slowly, as your surgeon and physiotherapist allow. Some people change from high-impact exercise, such as running, to lower-impact activities, such as swimming or cycling, to protect the joint.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                No fixed time suits everyone. Going back too fast can slow healing, so please follow your plan. You can also read our guide on <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] hover:underline font-semibold">surgery preparation and recovery</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S15 — HOW CAN YOU PREPARE FOR HIP ARTHROSCOPY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">15</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PREPARATION CHECKLIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Prepare for Hip Arthroscopy?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            If you and your doctor decide on hip arthroscopy, good preparation helps the day go smoothly. The advice below is general. Always follow the instructions from your own clinical team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-4">Before the Day</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Talk about medicines:</strong> Tell the team about all medicines and supplements you take.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Share health history:</strong> Mention allergies and medical conditions for anaesthesia planning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Follow fasting rules:</strong> Follow instructions on when to stop eating and drinking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Plan trip home:</strong> Arrange a driver as you will not be able to drive.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span><strong>Plan help at home:</strong> Ask a family member or friend to stay with you initially.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-4">Questions to Ask</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>What is the exact cause of my hip pain?</span>
                </li>
                <li className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Are there other non-surgical treatments I could try first?</span>
                </li>
                <li className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>What are the specific risks and limits for my case?</span>
                </li>
                <li className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>What will rehabilitation involve, and for how long?</span>
                </li>
                <li className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>When can I expect to return to work, driving and sports?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S16 — CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">16</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ORTHOPAEDIC SPECIALIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Consultant Orthopaedic Surgeon in Lahore
          </h2>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E5DE] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <img 
                  src="/images/doctor/dr-mazhar-headshot-portrait.jpg" 
                  alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore"
                  className="w-full rounded-xl object-cover shadow-sm border border-[#E8E5DE]"
                />
              </div>
              <div className="md:col-span-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Dr. Mazhar Rafique
                </h3>
                <p className="text-sm font-semibold text-[#BE8C1D] mb-4">
                  MBBS, FCPS (Orthopaedic Surgery) — Consultant Orthopaedic Surgeon
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon at BNI - Bashir NeuroSpine Institute in Lahore. He holds the qualifications MBBS and FCPS (Orthopaedic Surgery) and has more than 10 years of experience in orthopaedics.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  His work covers bone and joint problems, including hip pain and other hip joint conditions. At a consultation, he can listen to your symptoms, review your history and any scans, examine your hip, and explain the treatment options that may suit you. These can include non-surgical care.
                </p>
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Learn More About Dr. Mazhar Rafique</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S17 — WHAT TO EXPECT DURING YOUR HIP CONSULTATION */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">17</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSULTATION JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What to Expect During Your Hip Consultation
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A hip consultation is a calm conversation and a careful check. Here is what usually happens. The details can change from patient to patient.
          </p>

          <div className="space-y-4 mb-6">
            {[
              { num: "1", title: "You describe your symptoms", desc: "Say where the pain is, when it began, and what makes it better or worse." },
              { num: "2", title: "The doctor reviews your history", desc: "Bring a list of your medicines and any past reports, X-rays or scans." },
              { num: "3", title: "Your hip is examined", desc: "The doctor checks how you walk and how your hip moves." },
              { num: "4", title: "Tests are considered if needed", desc: "Not everyone needs scans at the first visit." },
              { num: "5", title: "Options are discussed", desc: "This includes non-surgical care and, where suitable, surgical options with their benefits and risks." },
              { num: "6", title: "You agree the next steps", desc: "This may be a rehabilitation plan, further tests, or a review visit. You can ask questions at every step." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-[#E8E5DE] bg-white">
                <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <div>
                  <h4 className="font-bold text-[#111111] text-base mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            You are never pressed to choose surgery. The aim is a clear plan that makes sense to you.
          </p>
          <p className="text-sm text-slate-600">
            For more guides, visit our <Link to="/patient-education/" className="text-[#BE8C1D] hover:underline font-semibold">patient education</Link> page.
          </p>
        </div>
      </section>

      {/* S18 — EXPLORE RELATED HIP & JOINT TREATMENTS */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">18</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RELATED SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Hip & Joint Treatments
          </h2>
          <p className="text-slate-700 mb-8">
            Your hip problem may link to other treatments. These pages may help you learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Arthroscopic Surgery",
                desc: "An overview of keyhole surgery for joints.",
                link: "/arthroscopic-surgery/"
              },
              {
                title: "Hip Replacement Surgery",
                desc: "Information for patients whose hip joint is badly worn.",
                link: "/hip-replacement-surgery/"
              },
              {
                title: "Total Joint Replacement",
                desc: "How joint replacement works for the hip, knee and other joints.",
                link: "/total-joint-replacement/"
              },
              {
                title: "Knee Arthroscopy",
                desc: "Keyhole surgery for knee problems.",
                link: "/knee-arthroscopy/"
              },
              {
                title: "Sports Injury Treatment",
                desc: "Care for injuries that come from sport and exercise.",
                link: "/sports-injury-treatment-lahore/"
              },
              {
                title: "Orthopaedic Consultation",
                desc: "What happens when you see an orthopaedic doctor.",
                link: "/orthopaedic-consultation/"
              }
            ].map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="group p-6 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">{card.desc}</p>
                </div>
                <span className="text-xs font-semibold text-[#BE8C1D] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S19 — HIP PAIN CONSULTATION IN LAHORE */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">19</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CLINIC DETAILS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Hip Pain Consultation in Lahore
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you have hip pain, stiffness or trouble moving your hip, you can contact the clinic to talk about an appointment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#FAF8F2] p-6 sm:p-8 rounded-2xl border border-[#E8E5DE]">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#BE8C1D]" />
                Clinic Address
              </h3>
              <p className="font-semibold text-slate-800">Dr. Mazhar Rafique</p>
              <p className="text-slate-700 text-sm mt-1">{businessConfig.clinicName}</p>
              <p className="text-slate-600 text-sm mt-1">{businessConfig.fullAddress}</p>
              <p className="text-xs text-slate-500 mt-4">
                You can also visit our <Link to="/contact/" className="text-[#BE8C1D] hover:underline font-semibold">contact page</Link> for location assistance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111] mb-1">
                Call or Message to Arrange an Appointment
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                When you contact the clinic, mention your hip symptoms and request an orthopaedic evaluation.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm shadow-sm hover:bg-[#a67a18] transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Book Appointment (WhatsApp)</span>
                </a>
                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — FAQS SECTION */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              PATIENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Hip Arthroscopy: Your Questions Answered
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#111111] hover:text-[#BE8C1D] transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-[#E8E5DE]/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* S20 — GET YOUR HIP PAIN CHECKED (FINAL CTA) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your Hip Pain Checked
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Hip pain that does not go away should not be ignored. If you have ongoing hip pain, stiffness or trouble moving your hip, a proper check can help you understand the cause. Many hip problems improve with non-surgical care, and some people need other treatment. An orthopaedic consultation helps you learn which path may suit you. You can call or send a WhatsApp message to the clinic in Lahore to ask about an appointment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={businessConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-base shadow-sm hover:bg-[#a67a18] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Book Appointment</span>
            </a>
            <a
              href={businessConfig.callUrl}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-base transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HipArthroscopyPage;
