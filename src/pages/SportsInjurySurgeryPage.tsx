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
  Sparkles, 
  Eye, 
  UserCheck, 
  Check, 
  Layers, 
  FileText 
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const SportsInjurySurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What are common sports injuries?",
      a: "Common sports injuries include ligament sprains and tears, meniscus tears, muscle strains, tendon injuries, shoulder dislocations, broken bones and overuse injuries. The knee, shoulder and ankle are often affected."
    },
    {
      q: "What is a ligament injury?",
      a: "A ligament is a strong band that joins one bone to another and helps keep a joint steady. A ligament injury happens when it is stretched or torn. Doctors often call it a sprain."
    },
    {
      q: "What causes ACL injuries?",
      a: "ACL injuries often happen with sudden stops, fast turns, jumps or awkward landings. They can also happen after a hit to the knee, a fall or a crash. Many happen without contact with another player."
    },
    {
      q: "Does every ACL tear need surgery?",
      a: "No. Some people manage well with physiotherapy, especially if the knee feels steady and they do not play sports that twist the knee. Others may need reconstruction if the knee keeps giving way or other parts of the knee are hurt. A doctor decides with you after an assessment."
    },
    {
      q: "Can ligament injuries heal without surgery?",
      a: "Many can. Mild and partial ligament injuries often improve with protection, rest and a planned rehabilitation programme. Some injuries, such as many PCL tears, are often partial and can heal on their own. A doctor will check how stable the joint is."
    },
    {
      q: "When might ligament reconstruction be needed?",
      a: "Reconstruction may be considered when a joint stays unstable after non-surgical care, when several ligaments are hurt, or when other injuries need treatment at the same time. It depends on the injury, your activity needs and your health."
    },
    {
      q: "How are sports injuries diagnosed?",
      a: "A doctor asks about your symptoms and how the injury happened. The doctor then examines the area and checks movement and stability. Tests such as X-ray, ultrasound or MRI are used only when they will help."
    },
    {
      q: "Do I need an MRI for a sports injury?",
      a: "Not always. An MRI shows soft tissues such as ligaments and the meniscus. It is useful for some injuries. For others, a careful history and examination are enough. The doctor will explain whether a scan is needed."
    },
    {
      q: "Can shoulder sports injuries be treated without surgery?",
      a: "Often, yes. Many shoulder dislocations and instability problems are first treated with physiotherapy to strengthen and control the shoulder. Surgery may be discussed if the shoulder keeps slipping or if other damage is found."
    },
    {
      q: "How long does sports injury recovery take?",
      a: "It depends on the injury and the person. A mild sprain may settle in a few weeks. A severe injury can take months. Surgery and rehabilitation take longer. A doctor or physiotherapist can explain what to expect for your injury."
    },
    {
      q: "Is physiotherapy important?",
      a: "Yes. Physiotherapy helps restore movement, strength, balance and control. It is part of recovery for many injuries, with or without surgery."
    },
    {
      q: "When can I return to sports?",
      a: "There is no single date for everyone. Doctors look at swelling, movement, strength, stability, movement control and confidence. Pain relief alone is not enough. Your doctor will guide you for your own injury."
    },
    {
      q: "How can I reduce the risk of another injury?",
      a: "Warm up before sport. Build strength and balance. Use good technique and suitable shoes and equipment. Rest when you are tired. Do not rush back after an injury. Training programmes that improve strength and control may help lower the risk of ACL injuries in athletes. Ask a doctor or physiotherapist what suits you."
    },
    {
      q: "When should I seek urgent care?",
      a: "Go to the nearest hospital emergency department if a joint looks out of shape, if you have severe pain after trauma, if you cannot put weight on the leg, if you suspect a broken bone or dislocation, if the limb is numb or cold, if a hot swollen joint comes with fever, or if there is a serious head or neck injury."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call ${businessConfig.phone} to arrange an appointment. You can also message on WhatsApp at ${businessConfig.phone}. The clinic is at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. Use WhatsApp at ${businessConfig.phone} to inquire about appointments. Please do not use WhatsApp for emergencies.`
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
                SPORTS INJURY & LIGAMENT CARE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Sports Injury & Ligament Surgery in Lahore
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Sports injuries can hurt joints, muscles, tendons and ligaments. Many injuries improve with rest, exercises and physiotherapy. Some serious injuries may need surgery. An orthopaedic check-up in Lahore helps you and your doctor choose the right plan.
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
                  <span>Sports Orthopaedics</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Ligament Repair & Scope</span>
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
                  alt="Orthopaedic surgeon examining a patient's knee during a sports injury assessment in a clinic"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E8E5DE] shadow-sm">
                  <p className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider mb-1">Athletic & Joint Injury Care</p>
                  <p className="text-sm text-slate-700">Expert diagnosis, ligament reconstruction, and guided return to sport.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S01 — SPORTS INJURY CARE IN LAHORE */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">01</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">OVERVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Sports Injury Care in Lahore
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed">
            <p>
              A sports injury is damage to the body that happens during sport or exercise. It can also happen in a fall or a twist while you play. Sports injury treatment in Lahore starts with finding out exactly what is hurt.
            </p>
            <p>
              Many body parts can be hurt. The knee, shoulder, ankle, hip, back and wrist are common. An injury can affect bones, joints, muscles, tendons or ligaments. Tendons join muscles to bones. Ligaments join bones to each other.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111] mb-2">Why Injuries Are Not All the Same</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Some injuries are mild and settle with rest and simple care. Others are more serious: a hard twist can tear an ACL or meniscus, while a hard fall can dislocate a shoulder or fracture bone.
                </p>
              </div>

              <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
                <h3 className="text-lg font-bold text-[#111111] mb-2">Why Early Assessment Can Help</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Pain alone does not reveal how serious an injury is. Early assessment prevents secondary joint damage and helps you avoid treatments you do not need.
                </p>
              </div>
            </div>

            <p>
              Two people can both say "my knee hurts" and need very different care. One may need rest and physiotherapy, while another may need surgery. The right plan depends on injury severity, joint stability, daily activities and general health.
            </p>
            <p>
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. This page gives a simple overview of sports injuries and ligament surgery, guiding you to detailed care pathways.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — COMMON SPORTS INJURIES */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">02</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">INJURY SPECTRUM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Sports Injuries
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Here are some common sports injuries, explained in simple words:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Ligament sprains & tears", desc: "A ligament is stretched or torn. The joint may feel sore, swollen or loose." },
              { title: "Meniscus injuries", desc: "A tear in the knee's soft C-shaped cushion from twisting. The knee may click or lock." },
              { title: "Muscle strains", desc: "An overstretched or torn muscle (pulled muscle) in the thigh, calf or back." },
              { title: "Tendon injuries", desc: "Tendons hurt by sudden force or repetitive overuse, causing pain and weakness." },
              { title: "Shoulder instability", desc: "The shoulder feels loose or slips out of place after an initial dislocation." },
              { title: "Joint dislocations", desc: "Bones forced out of their socket. Very painful and requires urgent care." },
              { title: "Fractures", desc: "A cracked or broken bone from a fall or hard collision." },
              { title: "Overuse injuries", desc: "Pain that builds up gradually from repeating the same athletic motion." }
            ].map((inj, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] text-sm mb-1">{inj.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed">{inj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S03 — UNDERSTANDING LIGAMENT INJURIES */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">03</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">LIGAMENT BASICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Understanding Ligament Injuries
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A ligament is a strong band of tissue. It joins one bone to another bone. Ligaments work like tough ropes, holding the joint steady when you move.
          </p>

          {/* Sprain Grades Table */}
          <div className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE] text-[#111111]">
                    <th className="p-4 font-bold">Level</th>
                    <th className="p-4 font-bold text-[#BE8C1D]">What Happens</th>
                    <th className="p-4 font-bold">How the Joint May Feel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Grade 1 (mild)</td>
                    <td className="p-4">The ligament is stretched a little.</td>
                    <td className="p-4">Sore and a little swollen. The joint is still steady.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Grade 2 (partial tear)</td>
                    <td className="p-4">The ligament is stretched until loose; some fibres torn.</td>
                    <td className="p-4">More pain and swelling. The joint may feel a little loose.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#111111]">Grade 3 (complete tear)</td>
                    <td className="p-4">The ligament is torn all the way through.</td>
                    <td className="p-4">The joint may feel unsteady or may give way.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#FAF8F2] p-5 rounded-xl border border-[#E8E5DE]">
            <h3 className="text-lg font-bold text-[#111111] mb-2">Why Joint Stability Matters</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              A steady joint moves smoothly and does not slip. A joint with a damaged ligament may feel loose and give way when turning or landing, potentially damaging cartilage and menisci. Not every ligament injury needs surgery; many improve with non-surgical care.
            </p>
          </div>
        </div>
      </section>

      {/* S04 — SIGNS OF A SPORTS INJURY */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">04</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SYMPTOMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Signs of a Sports Injury
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Pain, especially when moving or putting weight on the joint",
              "Swelling around the joint",
              "Bruising or localized tenderness",
              "A feeling that the joint is loose or giving way",
              "Less movement than normal, or a stiff joint",
              "Trouble walking or standing on the leg",
              "Weakness in the arm or leg",
              "Pain after a fall or twist that does not settle"
            ].map((sym, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#E8E5DE]">
                <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800">{sym}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Symptoms do not always correlate with injury severity. A check-up is useful if symptoms do not settle. Explore our <Link to="/patient-education/" className="text-[#BE8C1D] hover:underline font-semibold">patient education articles</Link>.
          </p>
        </div>
      </section>

      {/* S05 — WHEN SHOULD YOU SEEK URGENT CARE? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">05</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">EMERGENCY SIGNS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Should You Seek Urgent Care?
          </h2>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border-l-4 border-l-[#BE8C1D] border-y border-r border-[#E8E5DE]">
            <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Go to an Emergency Department Immediately If:
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li>• A joint or limb looks bent, twisted or visibly out of shape.</li>
              <li>• Severe pain after a fall, vehicle crash or hard sports collision.</li>
              <li>• Inability to put weight on the leg or use the arm.</li>
              <li>• A suspected broken bone or dislocated joint (e.g. popping or cracking at impact).</li>
              <li>• Numbness, tingling, or a limb that feels cold or looks pale or blue.</li>
              <li>• A hot, red, swollen joint with a fever (possible infection).</li>
              <li>• Any serious head or neck injury.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-4 border-t border-[#E8E5DE] pt-3">
              Do not wait for a routine clinic appointment in emergency situations. Emergency care comes first.
            </p>
          </div>
        </div>
      </section>

      {/* S06 — SPORTS INJURY & LIGAMENT TREATMENT SERVICES (4 CHILD CARDS) */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">06</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SPECIALIZED SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Sports Injury & Ligament Treatment Services
          </h2>
          <p className="text-slate-700 mb-8">
            Choose the service that matches your condition. Each page explains one specialized aspect of care:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">Knee Instability</span>
                <h3 className="text-xl font-bold text-[#111111] mt-1 mb-3">ACL Reconstruction</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Some knee injuries leave the knee loose and unsteady. ACL reconstruction may be considered for selected patients with this kind of instability. Find out how the operation works and who it may suit.
                </p>
              </div>
              <Link 
                to="/acl-reconstruction/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <span>Learn About ACL Reconstruction</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">Complex Ligaments</span>
                <h3 className="text-xl font-bold text-[#111111] mt-1 mb-3">Ligament Reconstruction</h3>
                <p className="text-sm text-slate-600 mb-6">
                  A few severe ligament injuries leave a joint unstable even after other care. In these cases, surgery to rebuild the ligament may help restore stability. Read when this may be considered.
                </p>
              </div>
              <Link 
                to="/ligament-reconstruction/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <span>Explore Ligament Reconstruction</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">Athletic Care</span>
                <h3 className="text-xl font-bold text-[#111111] mt-1 mb-3">Sports Injury Treatment</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Not every sports injury needs an operation. This page looks at how a sports injury is assessed and how treatment is planned for each person.
                </p>
              </div>
              <Link 
                to="/sports-injury-treatment-lahore/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <span>Explore Sports Injury Treatment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">Specialist Evaluation</span>
                <h3 className="text-xl font-bold text-[#111111] mt-1 mb-3">Sports Medicine Consultation</h3>
                <p className="text-sm text-slate-600 mb-6">
                  A consultation for people with sports injuries. The doctor checks the injury, talks about your sport and goals, plans treatment and gives guidance on returning to activity step by step.
                </p>
              </div>
              <Link 
                to="/sports-medicine-consultation/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <span>Learn About Sports Medicine Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S07 — ACL INJURIES AND KNEE INSTABILITY */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">07</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ACL SPOTLIGHT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            ACL Injuries and Knee Instability
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              <strong>What the ACL Does:</strong> Sits deep inside the knee, joining the thigh bone to the shin bone. It stops the shin bone from sliding too far forward and stabilizes the knee during twists and turns.
            </p>
            <p>
              <strong>How ACL Injuries Happen:</strong> Common in sports with sudden stops, pivoting, and awkward landings (football, basketball, cricket, kabaddi). Many happen without contact.
            </p>
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-2">Common ACL Symptoms:</h4>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                <li>• A popping sound or feeling inside the knee at impact</li>
                <li>• Rapid swelling within 24 hours</li>
                <li>• Knee unsteadiness or giving way during weight bearing</li>
                <li>• Trouble turning or walking comfortably</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Read our dedicated guide on <Link to="/acl-reconstruction/" className="text-[#BE8C1D] hover:underline font-semibold">ACL reconstruction</Link>.
          </p>
        </div>
      </section>

      {/* S08 — TREATMENT FOR OTHER LIGAMENT INJURIES */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">08</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">COLLATERAL & PCL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Treatment for Other Ligament Injuries
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">Knee Side Ligaments & PCL</h3>
              <p className="text-sm">
                The medial collateral ligament (MCL) on the inner side and lateral collateral ligament (LCL) on the outer side resist sideways force. The posterior cruciate ligament (PCL) resists backward force. Many MCL and PCL tears are partial and heal without surgery.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] mb-2">When Reconstruction May Be Considered</h3>
              <p className="text-sm">
                Rebuilding a ligament with a graft is considered when a joint remains chronically unstable, when several ligaments are torn simultaneously, or alongside other repair procedures.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Read more about multi-ligament procedures in <Link to="/ligament-reconstruction/" className="text-[#BE8C1D] hover:underline font-semibold">ligament reconstruction</Link>.
          </p>
        </div>
      </section>

      {/* S09 — COMMON KNEE SPORTS INJURIES */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">09</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">KNEE INJURIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Knee Sports Injuries
          </h2>

          <div className="space-y-3 mb-6">
            {[
              { title: "ACL injury", desc: "A torn cruciate ligament making the knee feel unsteady.", link: "/acl-reconstruction/", label: "ACL reconstruction" },
              { title: "Meniscus tear", desc: "Tear in the knee cushion causing catching or locking.", link: "/meniscus-repair/", label: "meniscus repair" },
              { title: "Cartilage injury", desc: "Damage to the smooth bone cover causing pain and joint catching.", link: "/cartilage-restoration/", label: "cartilage restoration" },
              { title: "Ligament sprain", desc: "Stretched or partially torn collateral ligaments responding well to rehabilitation.", link: null, label: null },
              { title: "Knee instability", desc: "Giving-way sensation following complex trauma.", link: null, label: null }
            ].map((k, idx) => (
              <div key={idx} className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] text-sm mb-1">{k.title}</h4>
                <p className="text-xs text-slate-700">
                  {k.desc} {k.link && <Link to={k.link} className="text-[#BE8C1D] hover:underline font-medium">See {k.label}.</Link>}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            For diagnostic keyhole visualization, see <Link to="/knee-arthroscopy/" className="text-[#BE8C1D] hover:underline font-semibold">knee arthroscopy</Link>.
          </p>
        </div>
      </section>

      {/* S10 — COMMON SHOULDER SPORTS INJURIES */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">10</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SHOULDER INJURIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Shoulder Sports Injuries
          </h2>

          <div className="space-y-3 mb-6">
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Shoulder dislocation & instability</h4>
              <p className="text-xs text-slate-700">The ball pops out of the socket. Many settle with physiotherapy, while recurrent instability may need Bankart repair.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Rotator cuff injury</h4>
              <p className="text-xs text-slate-700">Tendon tears causing pain when lifting the arm. Read about <Link to="/rotator-cuff-repair/" className="text-[#BE8C1D] hover:underline font-semibold">rotator cuff repair</Link>.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Labral & Bankart lesions</h4>
              <p className="text-xs text-slate-700">Torn socket rim following dislocation or repetitive overhead throwing.</p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Learn more about keyhole shoulder repair in <Link to="/shoulder-arthroscopy/" className="text-[#BE8C1D] hover:underline font-semibold">shoulder arthroscopy</Link>.
          </p>
        </div>
      </section>

      {/* S11 — HOW DOES A DOCTOR CHECK A SPORTS INJURY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">11</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">ASSESSMENT WORKUP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check a Sports Injury?
          </h2>

          <div className="space-y-3 mb-6">
            {[
              "Ask about your symptoms and pain pattern.",
              "Ask exactly how the injury happened (mechanism of injury).",
              "Gently examine the injured joint or limb.",
              "Check movement range, muscle strength, and ligament stability.",
              "Decide if imaging (X-ray, ultrasound, or MRI) would help.",
              "Talk through tailored non-surgical or surgical choices."
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#FAF8F2] p-3.5 rounded-xl border border-[#E8E5DE] text-sm text-slate-800">
                <span className="w-6 h-6 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Tests are not always needed for every injury; physical stability exams provide crucial guidance.
          </p>
        </div>
      </section>

      {/* S12 — CAN SPORTS INJURIES IMPROVE WITHOUT SURGERY? */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">12</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CONSERVATIVE CARE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Sports Injuries Improve Without Surgery?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
            Yes, many sports injuries improve without surgery. The right care depends on the specific injury.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Protection & Activity Changes</h4>
              <p className="text-xs text-slate-700">Resting the joint and avoiding painful high-impact movements.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Physiotherapy</h4>
              <p className="text-xs text-slate-700">Rebuilding safe joint movement and muscle conditioning.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Gradual Exercises</h4>
              <p className="text-xs text-slate-700">Adding progressive strength and stability exercises step by step.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
              <h4 className="font-bold text-[#111111] text-sm mb-1">Bracing & Support</h4>
              <p className="text-xs text-slate-700">A protective brace, sling, or crutches where clinically indicated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S13 — WHEN MIGHT A LIGAMENT INJURY NEED SURGERY? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">03</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SURGERY CANDIDACY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Might a Ligament Injury Need Surgery?
          </h2>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] space-y-3 mb-6">
            {[
              "Severe instability: the joint keeps giving way during normal activity.",
              "Certain complete tears: tears that leave the joint too loose to function safely.",
              "Concurrent injuries: damage to the meniscus or multiple ligaments simultaneously.",
              "Limits in daily life or work: inability to perform essential occupational tasks.",
              "Pivoting sports demands: athletes needing high rotational stability.",
              "Little progress with non-surgical care: persistent instability despite rehabilitation."
            ].map((crit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{crit}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Every decision is individual. A complete tear does not automatically mandate surgery; discussion of benefits and risks comes first.
          </p>
        </div>
      </section>

      {/* S14 — RECOVERY AFTER A SPORTS INJURY */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">14</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RECOVERY PHASES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Recovery After a Sports Injury
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Healing takes time, varying from weeks for mild sprains to months for severe ligament reconstruction.
          </p>

          <div className="space-y-3 mb-6">
            {[
              { title: "Restore movement", desc: "Gentle motion to keep the joint mobile and reduce stiffness." },
              { title: "Build strength", desc: "Strengthening muscles around the joint in staged increments." },
              { title: "Train balance and stability", desc: "Proprioceptive exercises to retrain joint control." },
              { title: "Return to activities slowly", desc: "Daily tasks first, followed by running and sport-specific drills." },
              { title: "Follow medical advice", desc: "Regular follow-ups to verify joint security before intense play." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8E5DE]">
                <h4 className="font-bold text-[#111111] text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-slate-700">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            If surgery is planned, review our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] hover:underline font-semibold">surgery preparation and recovery guide</Link>.
          </p>
        </div>
      </section>

      {/* S15 — WHEN CAN YOU RETURN TO SPORTS? */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">15</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">READINESS CRITERIA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Can You Return to Sports?
          </h2>

          <div className="bg-[#FAF8F2] p-6 rounded-xl border border-[#E8E5DE] mb-6">
            <h3 className="text-lg font-bold text-[#111111] mb-2">Why Pain Relief Alone Is Not Enough</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              A joint can stop hurting before tissue has fully matured. Returning too soon elevates re-injury risk.
            </p>
            <h4 className="font-bold text-[#111111] text-sm mb-2">What doctors and physiotherapists look for:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              <div>• Little or no swelling and no giving way</div>
              <div>• Full or near-full joint motion</div>
              <div>• Equal muscle strength compared to other side</div>
              <div>• A clinically steady joint</div>
              <div>• Good movement control when landing/jumping</div>
              <div>• Passing functional tests (e.g. hop tests)</div>
              <div>• Psychological confidence and readiness</div>
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
                  M.B.B.S., F.C.P.S. (Orthopedic Surgery), Certified ATLS®, Fellowship Arthroplasty and Joint Reconstruction
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Dr. Mazhar Rafique has more than 10 years of experience in orthopaedic, trauma and sports injury care. Clinical focus includes ACL reconstruction, meniscus repair, knee and shoulder arthroscopy, Bankart repair and rotator cuff repair. Appointments are held at BNI - Bashir NeuroSpine Institute in Shadman, Lahore.
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

      {/* S17 — EXPLORE RELATED ORTHOPAEDIC TREATMENTS */}
      <section className="py-14 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">17</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RELATED SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Orthopaedic Treatments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Arthroscopic Surgery",
                desc: "Keyhole surgery that uses a small camera to see inside a joint.",
                link: "/arthroscopic-surgery/"
              },
              {
                title: "Knee Arthroscopy",
                desc: "Looking at and treating problems inside the knee through small cuts.",
                link: "/knee-arthroscopy/"
              },
              {
                title: "Meniscus Repair",
                desc: "Stitching a torn knee cushion when it is suitable.",
                link: "/meniscus-repair/"
              },
              {
                title: "Shoulder Arthroscopy",
                desc: "Keyhole care for shoulder problems such as instability.",
                link: "/shoulder-arthroscopy/"
              },
              {
                title: "Fracture & Trauma Surgery",
                desc: "Care for broken bones and acute traumatic injuries.",
                link: "/fracture-trauma-surgery/"
              },
              {
                title: "Orthopaedic Consultation",
                desc: "A thorough check-up for bone, joint, muscle and ligament problems.",
                link: "/orthopaedic-consultation/"
              }
            ].map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="group p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">{card.desc}</p>
                </div>
                <span className="text-xs font-semibold text-[#BE8C1D] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S18 — GET YOUR SPORTS INJURY CHECKED IN LAHORE */}
      <section className="py-14 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#BE8C1D]/10 text-[#BE8C1D] flex items-center justify-center font-bold text-sm">18</span>
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">CLINICAL LOCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your Sports Injury Checked in Lahore
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you have a sports injury, a ligament problem or a joint that feels unsteady, you can arrange an orthopaedic assessment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E5DE]">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#BE8C1D]" />
                Clinic Location
              </h3>
              <p className="font-semibold text-slate-800">Dr. Mazhar Rafique</p>
              <p className="text-slate-700 text-sm mt-1">{businessConfig.clinicName}</p>
              <p className="text-slate-600 text-sm mt-1">{businessConfig.fullAddress}</p>
              <p className="text-xs text-slate-500 mt-4">
                Visit our <Link to="/contact/" className="text-[#BE8C1D] hover:underline font-semibold">contact page</Link> for detailed directions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111] mb-1">
                Arrange a Consultation
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reach out by WhatsApp or phone call to reserve an evaluation.
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
      <section className="py-14 border-b border-[#E8E5DE]">
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
                <div key={idx} className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden transition-colors">
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

      {/* FINAL APPOINTMENT CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Get Your Sports Injury Checked
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Do not let a joint injury keep you on the sidelines. Whether you need structured rehabilitation or surgical stabilization, an evaluation provides clarity. Call or message the clinic in Lahore to arrange your appointment.
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
export default SportsInjurySurgeryPage;
