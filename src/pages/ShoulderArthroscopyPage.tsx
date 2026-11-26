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

export const ShoulderArthroscopyPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is shoulder arthroscopy?",
      a: "It is a procedure where a surgeon uses a small camera and thin tools through small cuts to look inside the shoulder and treat some problems."
    },
    {
      q: "Is shoulder arthroscopy the same as keyhole surgery?",
      a: "Yes. \"Keyhole surgery\" is a simple name for arthroscopic surgery, because it uses very small cuts."
    },
    {
      q: "Which shoulder problems may need arthroscopy?",
      a: "Some rotator cuff tears, labral tears, Bankart lesions, repeated shoulder instability and some biceps tendon problems. Many people with these problems are first treated without surgery."
    },
    {
      q: "Can a rotator cuff tear improve without surgery?",
      a: "Some can. Many people feel better with physiotherapy and exercises. Others may need surgery, especially after a fresh injury or when symptoms continue. A doctor must check the tear."
    },
    {
      q: "What is shoulder instability?",
      a: "It means the ball of the shoulder does not stay firmly in its socket. The shoulder may slip partly or fully out of place."
    },
    {
      q: "What is a Bankart lesion?",
      a: "It is a tear of the labrum at the front and lower part of the shoulder socket. It often happens after a forward shoulder dislocation."
    },
    {
      q: "Does every shoulder dislocation need surgery?",
      a: "No. Many people recover with a period of protection and physiotherapy. Surgery may be considered if the shoulder keeps slipping or there is clear damage."
    },
    {
      q: "Is shoulder arthroscopy a major operation?",
      a: "It uses small cuts, but it is still an operation with anaesthesia and risks. Some procedures are small, and repairs are bigger. Your surgeon can explain what applies to you."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, bleeding, blood clots, nerve or blood vessel injury, stiffness, ongoing pain, a repair that fails, and anaesthesia risks. Your surgeon will discuss these with you."
    },
    {
      q: "How long does recovery take?",
      a: "It varies. A simple arthroscopy is usually quicker to recover from than a rotator cuff or labral repair. Your surgeon will give guidance for your own case."
    },
    {
      q: "Will I need to wear a sling?",
      a: "You may, especially after a repair. Your surgeon will tell you if and for how long."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Most people need physiotherapy to regain movement and strength. Your surgeon or physiotherapist will plan this."
    },
    {
      q: "Can shoulder pain improve without surgery?",
      a: "Yes, often. Exercises, physiotherapy, activity changes and suitable pain relief may help. A check by a doctor can show what is likely to work."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call ${businessConfig.phone} or send a message on WhatsApp ${businessConfig.phone} to arrange a consultation at the clinic.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can use the WhatsApp number ${businessConfig.phone} to ask about an appointment. Please do not use WhatsApp for emergencies.`
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
                SHOULDER ARTHROSCOPY CARE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Shoulder Arthroscopy in Lahore
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Shoulder arthroscopy uses a small camera and thin tools to look inside the shoulder through small cuts. It may be considered for selected injuries, such as some rotator cuff tears, labral tears and repeated shoulder dislocations. Many shoulder problems improve without surgery, so a careful check comes first. Call or message the clinic in Lahore to arrange an orthopaedic consultation with Dr. Mazhar Rafique.
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
                  <span>Keyhole Shoulder Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Rotator Cuff & Labrum</span>
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
                  src="/images/doctor/dr-mazhar-consultation.jpg" 
                  alt="Illustration of a shoulder joint with a small arthroscope camera inserted through a small cut, showing how the inside of the shoulder is viewed on a screen."
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E5DE] shadow-sm">
                  <p className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider mb-1">Diagnostic & Surgical Precision</p>
                  <p className="text-sm text-slate-700">Detailed examination for tears, instability & chronic shoulder stiffness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — WHAT IS SHOULDER ARTHROSCOPY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">01</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE BASICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Shoulder Arthroscopy?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed">
            <p>
              Shoulder arthroscopy is a way to look inside your shoulder joint. The doctor makes a few very small cuts around the shoulder. Then the doctor puts a thin tube with a tiny camera through one cut. This tube is called an arthroscope.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#BE8C1D]" />
                  What is an Arthroscope?
                </h3>
                <p className="text-sm text-slate-700">
                  The camera sends a picture to a screen. The doctor can see the bones, tendons and soft tissue inside the joint. Thin tools can go through the other small cuts. The doctor can use them to treat some problems during the same operation.
                </p>
              </div>

              <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#BE8C1D]" />
                  Why Are Small Cuts Used?
                </h3>
                <p className="text-sm text-slate-700">
                  Small cuts mean the doctor does not need to open the shoulder as widely. This is why people often call it "keyhole surgery". Keyhole surgery is not magic, and it is not right for every problem.
                </p>
              </div>
            </div>

            <p>
              Sometimes the doctor finds that a problem needs a bigger cut. Many shoulder problems also improve with exercises and other care, without any operation.
            </p>
            <p>
              You can read our wider <Link to="/arthroscopic-surgery/" className="text-[#BE8C1D] hover:underline font-semibold">arthroscopic surgery overview</Link> to learn how keyhole techniques apply across joints.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — UNDERSTANDING THE SHOULDER JOINT */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">02</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SHOULDER ANATOMY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does Your Shoulder Joint Work?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The shoulder is the most flexible joint in your body. It lets your arm reach up, out, across and behind you. To do this, it needs several parts to work together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">The Bones</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Three bones meet at the shoulder. The upper arm bone is called the humerus. The shoulder blade is called the scapula. The collarbone is called the clavicle.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">A Ball and a Socket</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                The top of the upper arm bone is shaped like a ball. It sits in a shallow cup on the shoulder blade (socket). Because it is shallow, the ball moves in many directions, requiring extra soft tissue support.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">The Rotator Cuff</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A group of four muscles and their tendons wrapping around the ball. It helps lift and turn your arm and keeps the ball centred firmly inside the socket.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Ligaments and the Labrum</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Ligaments hold the joint steady. The labrum is a rim of firm cartilage around the edge of the socket that deepens it and gives the ball a snug fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S03 — SHOULDER PROBLEMS THAT MAY BE TREATED WITH ARTHROSCOPY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">03</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">INDICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Which Shoulder Problems May Need Arthroscopy?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Arthroscopy is not a treatment for every shoulder problem. The right treatment depends on what is wrong, how bad it is, and how it affects your daily life. After a proper check, the doctor may think about arthroscopy for some of these problems:
          </p>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] mb-6 space-y-3">
            {[
              "Some rotator cuff tears, when the tendon is torn and symptoms continue.",
              "Shoulder instability, when the shoulder keeps slipping or coming out of place.",
              "Some labral tears, including a Bankart lesion (a tear at the front lower edge of the socket rim).",
              "Some problems with the biceps tendon at the shoulder.",
              "Some cases of loose tissue, scar tissue or joint damage that cause pain or catching."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            Many people with these problems first try physiotherapy, exercises and rest from painful activities. Surgery is only one possible option. Read more on our <Link to="/shoulder-surgery/" className="text-[#BE8C1D] hover:underline font-semibold">shoulder surgery overview</Link>.
          </p>
        </div>
      </section>

      {/* S04 — WHAT IS A ROTATOR CUFF INJURY? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">04</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ROTATOR CUFF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Rotator Cuff Injury?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">What Does the Rotator Cuff Do?</h3>
              <p className="text-slate-700 leading-relaxed">
                The rotator cuff holds the ball in the socket and helps you lift, turn and reach with your arm. When a tendon is irritated or torn, these movements can become painful and weak.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">How Does It Get Injured?</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Tears can happen suddenly, like during a fall or a heavy lift. They can also develop slowly over time from wear and tear or repeated overhead movements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 bg-[#FAF8F2] p-4 rounded-lg">
                <div>• Pain in the shoulder or upper arm</div>
                <div>• Pain that is worse at night</div>
                <div>• Weakness when lifting or reaching</div>
                <div>• Clicking, catching or stiffness</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Can a Rotator Cuff Tear Heal Without Surgery?</h3>
              <p className="text-slate-700 leading-relaxed">
                Many partial tears and wear-and-tear tears improve with exercises, physiotherapy and activity changes. A torn tendon does not always heal back to the bone by itself, but strengthening other muscles can reduce pain and improve function. Surgery may be discussed if pain continues or after a fresh, sudden tear in an active person. You can read more about <Link to="/rotator-cuff-repair/" className="text-[#BE8C1D] hover:underline font-semibold">rotator cuff repair</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05 — WHAT IS SHOULDER INSTABILITY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">05</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">INSTABILITY & DISLOCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Shoulder Instability?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Shoulder instability means the ball of the shoulder does not stay firmly in the socket. It may slip partly out (called subluxation) or come fully out (called dislocation). Some people feel that the shoulder is about to slip, even if it does not come out.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Why Does the Shoulder Slip?</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A hard fall or a sports injury is a common cause. The labrum or ligaments may tear when the shoulder comes out. Some people have looser joints from birth, so the shoulder slips more easily. After one dislocation, the shoulder may slip again, especially in younger people.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Why Does Repeated Instability Need Checking?</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Each slip can hurt the soft tissue or bone around the joint. A doctor can find out what is damaged and advise on the safest next steps.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">When Is Surgery Considered?</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Not every dislocation needs surgery. Many people start with a short rest, then physiotherapy to strengthen the muscles. Surgical stabilisation may be considered when the shoulder keeps slipping, when there is clear damage that may not settle by itself, or when instability stops someone from normal work or sport. Arthroscopy is one way to do this, but some cases need open surgery instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — WHAT IS A SHOULDER LABRAL TEAR? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">06</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">LABRAL TEAR & BANKART</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Shoulder Labral Tear?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">What Is the Labrum?</h3>
              <p className="text-slate-700 leading-relaxed">
                The labrum is a ring of firm tissue around the shoulder socket. It deepens the socket and helps the ball stay in place. Some ligaments and the biceps tendon also attach to it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">How Can It Be Injured?</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                A fall, a dislocation, a sudden pull on the arm or repeated overhead movements can tear the labrum. Some tears also come from wear over time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 bg-[#FAF8F2] p-4 rounded-lg">
                <div>• Deep shoulder pain</div>
                <div>• Catching, clicking or locking</div>
                <div>• A feeling that the shoulder is loose</div>
                <div>• Less strength or movement</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">What Is a Bankart Lesion?</h3>
              <p className="text-slate-700 leading-relaxed mb-2">
                A Bankart lesion is a labral tear at the front and lower part of the socket. It often happens when the shoulder dislocates forward. It is one of the common injuries linked with repeated dislocation.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Not every labral tear needs arthroscopic repair. Some people improve with physiotherapy. The doctor will look at your symptoms, your age, your activities and your scans before suggesting a plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — SIGNS AND SYMPTOMS OF SHOULDER PROBLEMS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">07</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SYMPTOM CHECKLIST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of Shoulder Joint Problems
          </h2>

          <h3 className="text-xl font-bold text-[#111111] mb-4">Common Symptoms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              "Shoulder pain",
              "Weakness lifting",
              "Stiffness",
              "Difficulty lifting",
              "Clicking/catching",
              "Slipping feeling",
              "Pain after injury",
              "Sleep disruption"
            ].map((sym, idx) => (
              <div key={idx} className="bg-[#FAF8F2] p-3 rounded-lg border border-[#E8E5DE] text-center text-sm font-medium text-slate-800">
                {sym}
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600 mb-6">
            These signs can have many causes. Having one of them does not mean you need surgery. Only a doctor can tell what is wrong after checking you.
          </p>

          {/* URGENT HELP BOX */}
          <div className="bg-[#FAF8F2] p-6 rounded-xl border-l-4 border-l-[#BE8C1D] border-y border-r border-[#E8E5DE]">
            <h3 className="text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              When to Get Urgent Help
            </h3>
            <p className="text-sm text-slate-700 mb-3">Go to a hospital emergency department quickly if you have:</p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>• A severe injury or very painful shoulder after a fall or accident</li>
              <li>• A shoulder that looks out of shape, or you think it has come out of place</li>
              <li>• Sudden weakness, or you cannot move your arm</li>
              <li>• Numbness, tingling, or a pale or cold hand</li>
              <li>• Fever, chest pain or breathlessness together with shoulder pain</li>
            </ul>
          </div>
        </div>
      </section>

      {/* S08 — CAUSES OF SHOULDER PAIN AND INJURY */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">08</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">UNDERLYING CAUSES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Shoulder Pain?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Shoulder pain has many causes. Some are sudden and some build up slowly.
          </p>

          <div className="space-y-3 mb-6">
            {[
              { title: "Sports injuries", desc: "Throwing, swimming, cricket, gym lifting and contact sports can strain the shoulder." },
              { title: "Falls", desc: "Landing on an outstretched hand or on the shoulder can tear tendons or the labrum, or cause a dislocation." },
              { title: "Repeated overhead movements", desc: "Some jobs and hobbies ask the shoulder to work above head height again and again." },
              { title: "Tendon injuries", desc: "Tendons can become irritated, partly torn or fully torn." },
              { title: "Shoulder instability", desc: "A loose or injured shoulder can cause pain and a feeling of slipping." },
              { title: "Age-related changes", desc: "Tendons can wear thinner as we get older, and the joint can develop arthritis." },
              { title: "Other conditions", desc: "Frozen shoulder, neck problems and some medical conditions can also cause shoulder pain." }
            ].map((cause, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <Activity className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">{cause.title}: </span>
                  <span className="text-slate-700 text-sm">{cause.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            Not every cause is treated with arthroscopy. Read our guide to <Link to="/sports-injury-treatment/" className="text-[#BE8C1D] hover:underline font-semibold">sports injury care</Link>.
          </p>
        </div>
      </section>

      {/* S09 — HOW ARE SHOULDER PROBLEMS DIAGNOSED? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">09</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">DIAGNOSTIC PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check Your Shoulder?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A doctor usually starts by listening. A typical check may include:
          </p>

          <div className="space-y-3 mb-6">
            {[
              "Talking about your symptoms and when they started.",
              "Asking about past injuries, your health and your daily activities.",
              "Looking at how your shoulder moves.",
              "Testing strength and how stable the joint feels.",
              "Asking for an X-ray, which shows bones and the joint space.",
              "Sometimes asking for an ultrasound or an MRI scan, which can show tendons and soft tissue.",
              "Talking with you about the treatment options."
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
                <span className="w-7 h-7 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base text-slate-800">{step}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            Not everyone needs every test. Learn more about booking an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] hover:underline font-semibold">orthopaedic consultation</Link>.
          </p>
        </div>
      </section>

      {/* S10 — NON-SURGICAL TREATMENT OPTIONS */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">10</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">NON-SURGICAL CARE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Shoulder Problems Improve Without Surgery?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Yes, many shoulder problems can improve without surgery. Doctors often try these steps first when they are suitable:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Physiotherapy</h3>
              <p className="text-sm text-slate-700">A physiotherapist teaches exercises to move the shoulder and strengthen the muscles around it.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Suitable Exercises</h3>
              <p className="text-sm text-slate-700">Gentle, regular exercises can help the rotator cuff and shoulder blade muscles support the joint.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Changing Activities</h3>
              <p className="text-sm text-slate-700">Resting from painful movements, and slowly returning to them, can help the shoulder settle.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Pain Relief & Other Care</h3>
              <p className="text-sm text-slate-700">Suitable pain relief or injections as advised by your physician. Do not alter medicines without doctor advice.</p>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Surgery is usually considered when these steps do not help enough, or when the injury is one that is unlikely to settle on its own. Explore our <Link to="/patient-education/" className="text-[#BE8C1D] hover:underline font-semibold">patient education resources</Link>.
          </p>
        </div>
      </section>

      {/* S11 — WHEN MIGHT SHOULDER ARTHROSCOPY BE CONSIDERED? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">11</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CANDIDACY DECISION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might Shoulder Arthroscopy Be Needed?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Doctors usually think about arthroscopy only after they know the exact problem. They look at several things:
          </p>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] space-y-3 mb-6">
            {[
              "A clear diagnosis from your check and, when needed, scans.",
              "The type of problem, such as a selected rotator cuff tear, a certain instability problem or a labral injury.",
              "How much the problem affects daily life, work and sport.",
              "How well the shoulder has responded to suitable non-surgical care.",
              "Your age, health and goals, and whether you can take part in the rehabilitation needed afterwards."
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700">{pt}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            After this, the doctor may suggest surgery, may suggest waiting and continuing physiotherapy, or may suggest a different treatment. A visit to the doctor does not mean you will be advised to have an operation.
          </p>
        </div>
      </section>

      {/* S12 — HOW IS SHOULDER ARTHROSCOPY PERFORMED? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">12</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PROCEDURE STEPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During Shoulder Arthroscopy?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Every operation is planned for the person and the problem, so details differ. In general, the steps are:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { num: "01", title: "Check before surgery", desc: "The team reviews your health, medicines and scans." },
              { num: "02", title: "Anaesthesia", desc: "General anaesthesia (asleep), a nerve block numbing the shoulder and arm, or both." },
              { num: "03", title: "Positioning", desc: "You are placed in a safe position so the surgeon can reach your shoulder." },
              { num: "04", title: "Small cuts", desc: "The surgeon makes a few small cuts around the shoulder." },
              { num: "05", title: "Camera", desc: "The arthroscope goes in through one cut with clean fluid for a clear view." },
              { num: "06", title: "Looking inside", desc: "The surgeon thoroughly examines the joint on the video screen." },
              { num: "07", title: "Treatment, when needed", desc: "Thin tools go through the other cuts to repair or tidy damaged tissue." },
              { num: "08", title: "Closing", desc: "The cuts are closed and covered. A sling may be used afterwards." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <span className="text-sm font-bold text-[#BE8C1D]">{step.num}</span>
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Sometimes the surgeon finds that the problem needs open surgery. This is discussed with you before the operation as a possibility. Learn more about <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] hover:underline font-semibold">surgery preparation and recovery</Link>.
          </p>
        </div>
      </section>

      {/* S13 — PROCEDURES THAT MAY BE PERFORMED ARTHROSCOPICALLY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">13</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SURGICAL PROCEDURES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Can Be Treated During Shoulder Arthroscopy?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Rotator Cuff Repair</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                If a tendon has torn away from the bone, the surgeon may stitch it back to the bone using small anchors. Read more on our <Link to="/rotator-cuff-repair/" className="text-[#BE8C1D] hover:underline font-semibold">rotator cuff repair</Link> page.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Labral Repair</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                If the labrum has torn away from the socket, the surgeon may fix it back in place with stitches and small anchors. This helps the joint feel steadier.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Shoulder Stabilisation</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                For repeated dislocation, surgery may repair damaged tissue at the front of the socket (Bankart lesion) to make the shoulder steady again.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-lg font-bold text-[#111111] mb-2">Other Selected Procedures</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Biceps tendon procedures, removal of loose bodies, and release of scar tissue. Read our <Link to="/shoulder-surgery/" className="text-[#BE8C1D] hover:underline font-semibold">shoulder surgery</Link> section.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Which procedure is right depends on your diagnosis and your surgeon's advice after assessment.
          </p>
        </div>
      </section>

      {/* S14 — ARTHROSCOPIC VS OPEN SHOULDER SURGERY */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">14</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SURGICAL APPROACHES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Arthroscopic vs Open Shoulder Surgery
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            In arthroscopic surgery, the surgeon works through small cuts using a camera. In open surgery, the surgeon makes a larger cut to see and reach the joint directly. Each has a place. Arthroscopy is not always better or safer. The best choice depends on your problem.
          </p>

          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-[#111111]">
                    <th className="p-4 font-bold">Feature</th>
                    <th className="p-4 font-bold text-[#BE8C1D]">Arthroscopic Surgery</th>
                    <th className="p-4 font-bold">Open Surgery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Access</td>
                    <td className="p-4">Several small cuts and a camera</td>
                    <td className="p-4">One larger cut and direct view</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Cut size</td>
                    <td className="p-4">Small micro-incisions</td>
                    <td className="p-4">Larger incision</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Often used for</td>
                    <td className="p-4">Many rotator cuff tears, labral tears and some instability</td>
                    <td className="p-4">Large or complex tears, major bone loss, repeat instability, fractures, joint replacement</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Recovery</td>
                    <td className="p-4">Skin heals quickly, but repaired tendon still needs time</td>
                    <td className="p-4">More soft-tissue healing around the cut; repaired tissue also needs time</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Rehabilitation</td>
                    <td className="p-4">Needed, and depends on the repair</td>
                    <td className="p-4">Needed, and depends on the repair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Some problems need open surgery, and sometimes the surgeon changes from arthroscopy to open surgery during the operation. Your surgeon will explain which is more suitable for you.
          </p>
        </div>
      </section>

      {/* S15 — BENEFITS AND RISKS OF SHOULDER ARTHROSCOPY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">15</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">BALANCED PERSPECTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Benefits and Risks of Shoulder Arthroscopy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Benefits</h3>
              <p className="text-xs text-slate-600 mb-3">For selected patients, shoulder arthroscopy may:</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Let the surgeon see inside the shoulder directly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Allow some injuries to be treated through small cuts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>Reduce pain or improve movement and strength when surgery suits the problem.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                No operation can promise results. Outcomes vary from person to person.
              </p>
            </div>

            <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
              <h3 className="text-xl font-bold text-[#111111] mb-3">Possible Risks</h3>
              <p className="text-xs text-slate-600 mb-3">Complications are not common, but can happen:</p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Infection or bleeding</li>
                <li>• Blood clots or injury to nerves/blood vessels</li>
                <li>• Stiffness in the shoulder or ongoing pain</li>
                <li>• A repair that does not heal, tendon that re-tears, or repeat slipping</li>
                <li>• Risks linked to anaesthesia</li>
                <li>• Need for further surgery or conversion to open surgery</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-lg font-bold text-[#111111] mb-2">Limits</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Arthroscopy cannot fix every shoulder problem. Healing takes time, and rehabilitation matters as much as the operation. Your surgeon will explain the risks that apply to you before you decide.
            </p>
          </div>
        </div>
      </section>

      {/* S16 — RECOVERY AFTER SHOULDER ARTHROSCOPY */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">16</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RECOVERY TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After Shoulder Arthroscopy
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Recovery depends on what was done inside the shoulder. A simple procedure, such as cleaning or examining the joint, usually needs a much shorter recovery than a rotator cuff or labral repair. A repair needs time to heal, so movement is protected at first.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">First Days</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Most people expect some pain and swelling. Your team will explain how to manage pain, how to keep the dressings clean and dry, and what signs to report. Contact your doctor if you notice increasing redness, fever, discharge from the wound, severe pain, or numbness.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Sling Support</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Some people wear a sling for a time, especially after a repair. Your surgeon will say how long and when you can take it off.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Physiotherapy and Exercises</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Physiotherapy helps you get movement and strength back safely. Follow the exercise plan you are given. Doing too much too soon can harm a repair. Doing too little can leave the shoulder stiff.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Follow-up and Returning to Activities</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                You will have follow-up visits to check healing. Most people return to daily tasks, work and sport in stages. The timing differs for each person, and your surgeon will guide you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S17 — PREPARING FOR SHOULDER ARTHROSCOPY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">17</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">PREPARATION TIPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Prepare for Shoulder Arthroscopy?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            If you and your doctor decide on surgery, these general tips may help:
          </p>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE]">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Tell the clinical team about all your medicines, vitamins and herbal products. Do not stop prescribed medicine unless advised.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Share your medical conditions and any allergies.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Follow instructions given before surgery, including fasting rules.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Arrange for someone to drive you home after the operation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Plan help for daily tasks like dressing and cooking, as one arm will be protected in a sling.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span>Ask about rehabilitation, follow-up visits and write your questions down before the visit.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* S18 — ABOUT DR. MAZHAR RAFIQUE */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">18</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ORTHOPAEDIC SURGEON</span>
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
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience. His clinical interests include shoulder arthroscopy, Bankart repair and rotator cuff repair. He sees patients at BNI - Bashir NeuroSpine Institute in Shadman, Lahore. At the consultation, he explains the diagnosis and the choices in clear words, including treatment that does not need surgery.
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

      {/* S19 — CONSULTATION JOURNEY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">19</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">APPOINTMENT JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What to Expect During Your Shoulder Consultation
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Every visit is different, but a shoulder consultation often follows these steps:
          </p>

          <div className="space-y-3 mb-6">
            {[
              "You describe your shoulder symptoms and how they affect your life.",
              "The doctor asks about your medical history and past injuries.",
              "The doctor checks how your shoulder moves and how strong and steady it is.",
              "If needed, you may be advised to have an X-ray, ultrasound or MRI scan.",
              "The doctor discusses non-surgical options and, if suitable, surgical options.",
              "You agree on the next steps together. This might be exercises, more tests, a review, or a plan for surgery."
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
                <span className="w-7 h-7 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base text-slate-800">{step}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            You can ask any question. You are never rushed into surgery. Explore an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] hover:underline font-semibold">orthopaedic consultation</Link>.
          </p>
        </div>
      </section>

      {/* S20 — RELATED ORTHOPAEDIC SERVICES */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">20</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RELATED SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Shoulder & Joint Treatments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Arthroscopic Surgery",
                desc: "Learn how keyhole surgery works across different joints.",
                link: "/arthroscopic-surgery/"
              },
              {
                title: "Shoulder Surgery",
                desc: "Read about the wider range of shoulder operations, both keyhole and open.",
                link: "/shoulder-surgery/"
              },
              {
                title: "Rotator Cuff Repair",
                desc: "See how torn shoulder tendons are repaired and what recovery involves.",
                link: "/rotator-cuff-repair/"
              },
              {
                title: "Sports Injury and Ligament Surgery",
                desc: "Find information about ligament and sports-related surgery.",
                link: "/sports-injury-treatment/"
              },
              {
                title: "Sports Injury Treatment in Lahore",
                desc: "Read about care for sports injuries for athletes and active people.",
                link: "/sports-injury-treatment-lahore/"
              },
              {
                title: "Orthopaedic Consultation",
                desc: "Find out how to arrange a bone and joint check.",
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

      {/* S21 — CLINIC LOCATION & APPOINTMENTS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">21</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CLINICAL LOCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Shoulder Arthroscopy Consultation in Lahore
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you have shoulder pain, weakness, a slipping shoulder or an injury, you can contact the clinic to arrange a consultation with Dr. Mazhar Rafique. Call or send a WhatsApp message and tell the team a little about your shoulder problem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#FAF8F2] p-6 sm:p-8 rounded-2xl border border-[#E8E5DE]">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#BE8C1D]" />
                Clinic Location
              </h3>
              <p className="font-semibold text-slate-800">Dr. Mazhar Rafique</p>
              <p className="text-slate-700 text-sm mt-1">{businessConfig.clinicName}</p>
              <p className="text-slate-600 text-sm mt-1">{businessConfig.fullAddress}</p>
              <p className="text-xs text-slate-500 mt-4">
                For location guidance, visit our <Link to="/contact/" className="text-[#BE8C1D] hover:underline font-semibold">contact page</Link>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111] mb-1">
                Arrange Your Consultation
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reach out by WhatsApp or phone call to reserve an appointment slot.
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
              Frequently Asked Questions
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

      {/* S22 — FINAL APPOINTMENT CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your Shoulder Pain or Injury Checked
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Ongoing shoulder pain, weakness, stiffness or a shoulder that feels loose should not be ignored. A proper check can find the cause and help you choose the next step. Many people improve with exercises and other care, and some may need surgery. Either way, you will get clear information so you can decide with confidence.
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
export default ShoulderArthroscopyPage;
