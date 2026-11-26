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
  HelpCircle as QuestionIcon
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const RevisionJointReplacementPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is revision joint replacement?",
      a: "It is an operation to repair or replace some or all parts of an artificial joint that was fitted during an earlier operation. It is most often talked about for knees and hips."
    },
    {
      q: "Why might an artificial joint need revision?",
      a: "Common reasons are loosening, wear, infection, an unstable joint, repeated dislocation (mainly in the hip) and a broken bone around the implant. A doctor needs to find the exact cause first."
    },
    {
      q: "Does pain after joint replacement mean the implant has failed?",
      a: "No. Some pain is normal while the joint heals. Pain can also come from tendons, the back, another joint or other causes. Only a doctor can tell. If your pain is new, getting worse or not going away, ask for an assessment."
    },
    {
      q: "What are the signs of a loose joint implant?",
      a: "Signs can include pain when you put weight on the joint, a feeling that the joint moves or gives way, and trouble walking. These signs can also have other causes. A doctor usually checks with an examination and X-rays."
    },
    {
      q: "Can an artificial joint become infected?",
      a: "Yes. It can happen soon after surgery or years later. Signs can include pain, swelling, redness, warmth, fever and fluid from the wound. An infected artificial joint is serious. If you have a fever with a painful or swollen replaced joint, or fluid from the wound, get medical help the same day."
    },
    {
      q: "How are joint replacement problems diagnosed?",
      a: "A doctor usually talks to you, reviews your history, examines the joint and looks at X-rays. If infection is a worry, blood tests and a joint fluid test may be used. Not every person needs every test."
    },
    {
      q: "Is another operation always necessary?",
      a: "No. Some problems can be watched or managed with exercises, bracing or treatment of another source of pain. Other problems, such as infection or a broken bone around the implant, often need surgery or specialist care."
    },
    {
      q: "What is revision knee replacement?",
      a: "It is an operation to remove some or all parts of the first knee replacement and fit new ones. Sometimes only one part is changed. See our page on knee replacement surgery for the first operation."
    },
    {
      q: "What is revision hip replacement?",
      a: "It is an operation to remove some or all parts of the first hip replacement, such as the ball, socket or stem, and fit new ones. See our page on hip replacement surgery for the first operation."
    },
    {
      q: "Is revision surgery more complex than the first operation?",
      a: "Often it is. The surgeon works around an old implant and scar tissue, and the bone may be weaker. Complexity differs from person to person."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, blood clots, bleeding, injury to nerves or blood vessels, a broken bone, instability or dislocation, stiffness, ongoing pain, implant problems and possible further surgery. Your risks depend on your case, and your surgeon should explain them."
    },
    {
      q: "How long does recovery take?",
      a: "It depends on the type of operation, the reason for it and the person. Recovery is often longer than after a first joint replacement. Your surgeon and physiotherapist can explain what to expect for you."
    },
    {
      q: "Can a revised joint need another operation?",
      a: "It can. A revised joint may not last as long as a first replacement, and some people need more than one revision. Regular check-ups help doctors watch the joint."
    },
    {
      q: "How can I book an orthopaedic consultation?",
      a: `Call ${businessConfig.phone} or message ${businessConfig.whatsappDisplay} on WhatsApp. Appointments are made by phone call or WhatsApp.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes, you can use WhatsApp to ask about an appointment on ${businessConfig.whatsappDisplay}. Do not use WhatsApp for an urgent problem. If you have fever with a swollen joint, wound drainage, suspected dislocation, chest pain or sudden breathlessness, seek urgent medical care.`
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-3 text-xs text-[#666666]">
        <div className="site-container flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-[#BE8C1D] transition-colors">Home</Link>
          <span className="text-[#BE8C1D]">&#8250;</span>
          <Link to="/services/" className="hover:text-[#BE8C1D] transition-colors">Services</Link>
          <span className="text-[#BE8C1D]">&#8250;</span>
          <Link to="/joint-replacement-surgery/" className="hover:text-[#BE8C1D] transition-colors">Joint Replacement Surgery</Link>
          <span className="text-[#BE8C1D]">&#8250;</span>
          <span className="text-[#111111] font-semibold">Revision Joint Replacement</span>
        </div>
      </nav>

      {/* B3 — Hero Section */}
      <section className="bg-white border-b border-[#E8E5DE] py-12 lg:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-xs">
                <Activity className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <span>REVISION JOINT REPLACEMENT</span>
              </div>
              
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Revision Joint Replacement in Lahore
              </h1>
              
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Revision joint replacement is an operation to repair or replace some or all parts of an artificial knee or hip that was fitted during an earlier operation. Not every painful joint replacement needs another operation. First, a doctor needs to find the cause of your pain or other symptoms. You can call or message the clinic in Lahore to arrange an orthopaedic consultation and talk about your symptoms and the next steps.
              </p>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Fellowship Trained</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE]">
                  <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE] col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>BNI Shadman Lahore</span>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#A37513] transition-all shadow-sm group"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={businessConfig.callUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-[#111111] text-[#111111] font-semibold text-sm hover:bg-[#FAF8F2] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#111111]" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Clinical Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DE] shadow-md bg-white">
                <img 
                  src="/images/doctor/dr-mazhar-physical-exam.jpg" 
                  alt="Dr. Mazhar Rafique assessing artificial joint stability in Lahore"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E5DE]">
                  <p className="text-xs font-bold text-[#111111]">Specialist Arthroplasty Revision Assessment</p>
                  <p className="text-xs text-[#666666]">Bashir NeuroSpine Institute (BNI), Jail Road, Shadman 1, Lahore</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S01 — What Is Revision Joint Replacement? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 01</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Is Revision Joint Replacement?
              </h2>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-3">
              <p className="text-sm text-[#475569] leading-relaxed">
                An artificial joint is a man-made joint. It takes the place of a joint that has been badly damaged, often by arthritis or an injury. Artificial knees and hips are made of strong metal, tough plastic and sometimes ceramic.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                The first operation to fit an artificial joint is called a primary joint replacement. You can read about that operation on our page on{' '}
                <Link to="/joint-replacement-surgery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  joint replacement surgery
                </Link>.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                <strong>Revision joint replacement</strong> is a later operation. It repairs or replaces some or all parts of the artificial joint that was fitted before. Sometimes a surgeon changes only one part, such as a worn plastic liner. Sometimes the surgeon changes every part.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                Most people do not need a revision. Many artificial joints work well for many years. But an artificial joint is made by people, and over time it can wear, loosen or be damaged. It can also become infected.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                A revision is not just a repeat of the first operation. The surgeon has to deal with the old implant, scar tissue and, sometimes, weaker bone. The plan has to fit the reason the joint is having trouble. That is why finding the cause comes first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — Why Might an Artificial Joint Develop Problems? */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 02</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Why Might an Artificial Joint Develop Problems?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Most knee and hip replacements do their job for a long time. When problems do come, there are a few main reasons. Doctors look for these reasons before they decide what to do.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { t: "Implant loosening", d: "A part of the artificial joint stops holding firmly to the bone." },
                { t: "Implant wear", d: "The smooth surfaces of the joint slowly wear down with use." },
                { t: "Infection", d: "Germs settle in or around the artificial joint." },
                { t: "Joint instability", d: "The joint feels loose, wobbly or likely to give way." },
                { t: "Repeated dislocation", d: "Mainly a hip problem: the ball of the hip slips out of the socket more than once." },
                { t: "Fracture around an implant", d: "The bone next to the artificial joint breaks, often after a fall." },
                { t: "Other implant problems", d: "A part may break, scar tissue may block motion, or alignment needs adjustment." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#E8E5DE] space-y-1">
                  <h4 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                    {item.t}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed italic">
              Having one of these problems does not always mean you need another operation. Some can be managed in other ways. The right choice depends on what is wrong, how bad it is and your general health.
            </p>
          </div>
        </div>
      </section>

      {/* S03 — Signs of a Problem After Joint Replacement */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 03</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Signs of a Problem After Joint Replacement
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">Symptoms to Mention to a Doctor</h3>
              <p className="text-sm text-[#475569]">
                Some aches are normal while a new joint heals. But you should tell a doctor if you notice any of these after a knee or hip replacement:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "New pain, or pain that is getting worse",
                  "Swelling around the joint",
                  "Stiffness that is getting worse",
                  "Difficulty walking",
                  "A feeling that the joint is unstable or may give way",
                  "Less movement than before",
                  "Redness or warmth over the joint",
                  "Fluid or pus coming from the wound or scar"
                ].map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-medium">{symptom}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <p className="text-sm text-[#475569] leading-relaxed">
                  These signs can have many causes. They do not always mean the implant has failed. Only a doctor who examines you and checks the right tests can find out what is going on.
                </p>
              </div>

              {/* Urgent Warning Box */}
              <div className="p-5 rounded-xl bg-[#FFF8EE] border border-[#F5D8A0] space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#9A6700]">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  <span>When to Get Urgent Help</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6B4701] leading-relaxed">
                  Get medical help the same day, at a hospital or emergency department, if you have:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#6B4701] space-y-1">
                  <li>A fever together with a painful or swollen replaced joint</li>
                  <li>Fluid or pus draining from your wound</li>
                  <li>Sudden pain and you cannot put any weight on your leg</li>
                  <li>A joint that you think has come out of place (dislocated)</li>
                </ul>
                <p className="text-xs sm:text-sm text-[#9A6700] pt-1">
                  Get emergency help straight away if you have chest pain or sudden breathlessness (call Rescue 1122 in Lahore). Blood clots can happen after joint surgery and need immediate evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04 — Common Problems That Can Affect Artificial Joints */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 04</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Common Problems That Can Affect Artificial Joints
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Implant Loosening",
                  desc: "For a joint replacement to work well, its parts must stay firmly joined to the bone. Loosening means a part has lost that firm hold. The part may then move a little each time you use the joint. This can cause pain, especially when you put weight on it. Loosening can happen slowly over many years. It can also be caused by infection or by an injury."
                },
                {
                  title: "Implant Wear",
                  desc: "The two surfaces of an artificial joint slide against each other every time you move. Over many years, these surfaces can wear down, a little like the sole of a shoe. Tiny pieces from the worn surface can build up around the joint. They can irritate the bone and may make it weaker. Wear is often slow and may cause no signs at first."
                },
                {
                  title: "Infection",
                  desc: "A prosthetic joint infection means germs have settled in or around the artificial joint. It can happen soon after surgery or many years later. The signs can include pain, swelling, redness, warmth, fever and fluid from the wound. Germs can stick to the surface of an implant, which makes them hard to clear. Infection of an artificial joint is serious and needs prompt specialist care."
                },
                {
                  title: "Joint Instability",
                  desc: "A stable joint stays in place when you walk, bend and turn. An unstable joint feels loose or wobbly, or feels as if it may give way. This can happen when the soft tissues around the joint are weak or stretched, or when the parts are not lined up well. In a hip, instability can lead to dislocation."
                },
                {
                  title: "Fracture Around an Implant",
                  desc: "A periprosthetic fracture is a broken bone next to an artificial joint. These breaks often follow a fall. They can be painful and can make the joint unsafe to use. Many of these fractures need surgery, and a doctor needs to decide what is best for the joint and the bone together."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                  <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S05 — How Does a Doctor Check a Painful Artificial Joint? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 05</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                How Does a Doctor Check a Painful Artificial Joint?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Every patient is different, so every assessment is different. A typical check of a painful artificial joint may include these steps. You may not need all of them.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", title: "Talking about your symptoms", desc: "The doctor asks when the problem began, where it hurts and what makes it better or worse." },
                { step: "2", title: "Reviewing your history", desc: "The doctor looks at details of your first operation, any earlier problems and your general health." },
                { step: "3", title: "Examining the joint", desc: "The doctor checks for swelling, warmth, scars, movement, strength and how you walk." },
                { step: "4", title: "Looking at X-rays", desc: "X-rays can show whether a part has moved, loosened or worn, or whether a bone has broken." },
                { step: "5", title: "Blood tests, if infection is a worry", desc: "Tests such as CRP and ESR can show signs of inflammation. They cannot prove or rule out infection on their own." },
                { step: "6", title: "Joint fluid testing or other tests", desc: "A doctor may take a small sample of fluid from the joint with a needle and send it to a laboratory." },
                { step: "7", title: "Talking about the findings", desc: "The doctor explains what was found and goes through the possible next steps with you." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white border border-[#E8E5DE] items-start">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F2] border border-[#BE8C1D] text-[#BE8C1D] font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111111]">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
              <p className="text-sm text-[#475569] leading-relaxed">
                Pain in a replaced joint does not always come from the implant. It can come from nearby tendons, from the back, or from another joint. This is why a careful assessment matters. To find out about an assessment at the clinic, read about our{' '}
                <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  orthopaedic consultation
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06 — Can Problems After Joint Replacement Be Treated Without Revision Surgery? */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 06</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Can Problems After Joint Replacement Be Treated Without Revision Surgery?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                No. Another operation is not always needed. What helps depends on what is causing the problem. A doctor has to find the cause first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#BE8C1D]" />
                  Non-Surgical Care Examples
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  <li><strong>Mild symptoms:</strong> If the problem is small and the implant looks sound, watchful waiting may be recommended.</li>
                  <li><strong>Stiffness or weak muscles:</strong> Guided exercise with a physiotherapist may help the joint move better.</li>
                  <li><strong>Pain from outside implant:</strong> Treating referred back, tendon or adjacent joint issues may resolve symptoms.</li>
                  <li><strong>Mild looseness of a knee:</strong> Bracing and targeted strengthening exercises may be advised depending on cause.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  Problems Needing Surgery or Specialist Care
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  <li>An infected artificial joint (cannot be safely treated at home)</li>
                  <li>A fracture around an implant</li>
                  <li>A badly loose or broken part</li>
                  <li>A hip that keeps coming out of its socket (recurrent dislocation)</li>
                </ul>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] text-xs sm:text-sm text-[#666666] italic">
              Never start, stop or change any medicine without asking your doctor. A professional assessment is the safest way to decide what you need.
            </div>
          </div>
        </div>
      </section>

      {/* S07 & S08 — Revision Knee & Hip Replacement */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Sections 07 &amp; 08</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Revision Knee &amp; Hip Replacement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Revision Knee */}
              <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111]">What Is Revision Knee Replacement?</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A knee replacement usually has three main parts: thigh bone, shin bone, and under the kneecap. Over time, the parts may wear or loosen, the knee may become infected or unstable, or bone around it may break.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Revision knee replacement is an operation to take out some or all parts and fit new ones. The operation is often longer and more complex than the first one. Read about the first operation on our{' '}
                  <Link to="/knee-replacement-surgery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    knee replacement surgery
                  </Link>{' '}
                  page.
                </p>
              </div>

              {/* Revision Hip */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111]">What Is Revision Hip Replacement?</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A hip replacement has a ball, a socket and a stem. The socket or stem may loosen, smooth surfaces may wear, the hip may become infected or dislocate repeatedly, or the bone next to the implant may fracture.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Revision hip replacement removes some or all parts and fits new ones. If bone cement was used earlier, it may need to be removed and bone rebuilt. Read about the first operation on our{' '}
                  <Link to="/hip-replacement-surgery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    hip replacement surgery
                  </Link>{' '}
                  page.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* S09 & S10 — Surgery Details & Differences */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Sections 09 &amp; 10</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Why Revision Surgery Is Different
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#111111]">Why Is Revision Different From the First Operation?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { t: "Scar tissue", d: "The first operation leaves scar tissue, making reaching the joint harder." },
                  { t: "Bone loss", d: "Loosening, wear or infection can damage the bone around the implant." },
                  { t: "Changes around implant", d: "Bone and soft tissue may have changed over the years." },
                  { t: "Infection steps", d: "Infection adds extra cleaning steps and may need staged operations." },
                  { t: "Special parts", d: "Longer stems or supportive metal augments may be required." },
                  { t: "Different recovery", d: "Recovery often takes longer and needs more guided rehabilitation." }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                    <h4 className="text-xs font-bold text-[#111111]">{item.t}</h4>
                    <p className="text-xs text-[#475569] mt-0.5">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S09 9 steps */}
            <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
              <h3 className="text-base font-bold text-[#111111]">Typical Revision Surgical Steps</h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li><strong>Check before surgery:</strong> Health, blood, X-rays and imaging review.</li>
                <li><strong>Planning:</strong> Customized plan depending on bone quality and implant type.</li>
                <li><strong>Anaesthesia:</strong> General or regional anaesthesia to ensure no pain.</li>
                <li><strong>Reaching the joint:</strong> Opening tissue carefully, often through the old scar.</li>
                <li><strong>Checking old parts:</strong> Detailed inspection of each prosthetic component and surrounding bone.</li>
                <li><strong>Removing or replacing parts:</strong> Extracting loose or damaged parts while preserving healthy bone.</li>
                <li><strong>Dealing with bone loss/infection:</strong> Placing bone grafts, metal supports, or antimicrobial spacers.</li>
                <li><strong>Checking stability:</strong> Range of motion and joint tension verification.</li>
                <li><strong>Closing the wound:</strong> Closure with careful dressing and drain management.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* S11 — Benefits and Risks */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 11</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Benefits and Risks of Revision Joint Replacement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#BE8C1D]" />
                  Possible Benefits
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  For some patients, revision surgery can deal with a specific problem in an artificial joint. Depending on the cause, it may help to ease pain, make the joint steadier and help the person to move and walk better. When infection is the cause, treatment is needed to clear it.
                </p>
                <p className="text-xs text-[#666666] italic">
                  No surgeon can promise that all pain will go or that your joint will move like a healthy one. Results differ from person to person.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  Possible Risks
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  Revision surgery can carry different or higher risks than a first replacement:
                </p>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-[#333333]">
                  <li>• Infection</li>
                  <li>• Blood clots</li>
                  <li>• Bleeding</li>
                  <li>• Nerve/vessel injury</li>
                  <li>• Bone fracture</li>
                  <li>• Dislocation / instability</li>
                  <li>• Stiffness</li>
                  <li>• Persistent pain</li>
                  <li>• Implant wear</li>
                  <li>• Further surgery</li>
                </ul>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Limits to Keep in Mind</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A revised joint may not last as long as a first joint replacement. Some people may need more than one revision. Ask your doctor what is realistic for your specific case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S12 — Recovery After Revision Joint Replacement */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 12</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Recovery After Revision Joint Replacement
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Recovery depends on the type of revision, the reason for it and the person. In general, recovery may include:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Hospital recovery", d: "You stay in hospital for observation while the team monitors wound healing and early movement." },
                { t: "Pain and swelling care", d: "Structured pain management plan. Do not change prescribed medications without advice." },
                { t: "Wound care", d: "Keeping the incision clean and dry, reporting any drainage or redness immediately." },
                { t: "Help with walking", d: "Using a frame or crutches until your surgeon specifies safe weight-bearing status." },
                { t: "Physiotherapy", d: "Gradual guided exercises to rebuild muscle strength and safe joint motion." },
                { t: "Follow-up visits", d: "Periodic clinic visits and X-rays to ensure bone integration and implant stability." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#E8E5DE] space-y-1">
                  <h4 className="text-sm font-bold text-[#111111]">{item.t}</h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#475569]">
              For more on getting ready and healing, see{' '}
              <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                surgery preparation and recovery
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S13 — Questions to Ask Before Revision Joint Replacement */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 13</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Questions to Ask Before Revision Joint Replacement
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "What is causing my symptoms?",
                "Is my implant loose or infected?",
                "Do I need another operation?",
                "Are there other treatment options?",
                "What are the possible risks for me?",
                "How complex might the operation be?",
                "What will recovery involve?",
                "Will I need further tests?",
                "Should I see a revision joint replacement specialist?"
              ].map((q, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                  <span className="w-5 h-5 rounded-full bg-white border border-[#BE8C1D] text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ?
                  </span>
                  <span className="text-xs sm:text-sm text-[#333333] font-medium">{q}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed italic">
              Revision surgery can be complex, and it is reasonable to ask any surgeon about their experience with your kind of problem. Take your old operation records and X-rays to your visit if you have them.
            </p>
          </div>
        </div>
      </section>

      {/* S14 — Consultant Orthopaedic Surgeon in Lahore */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-2xl bg-white border border-[#E8E5DE]">
              
              <div className="md:col-span-4 flex justify-center">
                <div className="relative rounded-xl overflow-hidden border border-[#E8E5DE] shadow-sm max-w-[240px]">
                  <img 
                    src="/images/doctor/dr-mazhar-headshot-portrait.jpg" 
                    alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon in Lahore"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D]">
                  <Award className="w-3.5 h-3.5" />
                  <span>CONSULTANT ORTHOPAEDIC SURGEON</span>
                </div>

                <h2 
                  className="text-2xl sm:text-3xl font-bold text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience. He sees patients at BNI - Bashir NeuroSpine Institute in Shadman, Lahore.
                </p>

                <p className="text-sm text-[#475569] leading-relaxed">
                  If you have concerns after a joint replacement, you can contact the clinic to ask about an orthopaedic assessment and the next steps.
                </p>

                <div className="pt-2">
                  <Link 
                    to="/about/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#111111] text-xs font-bold text-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-xs"
                  >
                    <span>Learn More About Dr. Mazhar Rafique</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* S15 — Explore Related Joint Replacement Topics */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 15</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Explore Related Joint Replacement Topics
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Joint Replacement Surgery", desc: "An overview of why joints are replaced and how the first operation works.", url: "/joint-replacement-surgery/" },
                { title: "Knee Replacement Surgery", desc: "Learn about the first operation for a damaged knee.", url: "/knee-replacement-surgery/" },
                { title: "Hip Replacement Surgery", desc: "Learn about the first operation for a damaged hip.", url: "/hip-replacement-surgery/" },
                { title: "Total Joint Replacement", desc: "See what it means when a whole joint surface is replaced.", url: "/total-joint-replacement/" },
                { title: "Partial Knee Replacement", desc: "Read about replacing only the damaged part of the knee.", url: "/partial-knee-replacement/" },
                { title: "Orthopaedic Consultation", desc: "Find out what happens when you see an orthopaedic doctor.", url: "/orthopaedic-consultation/" },
                { title: "Patient Education", desc: "Browse more simple guides on bone, joint and surgery topics.", url: "/patient-education/" }
              ].map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.url}
                  className="p-5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] hover:shadow-xs transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">{link.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#BE8C1D] pt-2">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S16 — Orthopaedic Consultation in Lahore */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 16</div>
                  <h2 
                    className="text-2xl sm:text-3xl font-bold text-[#111111]"
                    style={{ fontFamily: "'Maven Pro', sans-serif" }}
                  >
                    Orthopaedic Consultation in Lahore
                  </h2>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  If you have concerns after a previous knee or hip replacement, you can contact the clinic to ask about an orthopaedic assessment. The doctor can discuss your symptoms and talk about what may be done next.
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#E8E5DE] space-y-2 text-xs sm:text-sm">
                  <h3 className="font-bold text-[#111111]">Clinic Details</h3>
                  <p className="text-[#333333]"><strong>Doctor:</strong> Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon</p>
                  <p className="text-[#333333]"><strong>Clinic:</strong> BNI - Bashir NeuroSpine Institute</p>
                  <p className="text-[#333333]"><strong>Address:</strong> 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={businessConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-xs sm:text-sm hover:bg-[#A37513] transition-all shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Book Appointment</span>
                  </a>

                  <a
                    href={businessConfig.callUrl}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#111111] text-[#111111] font-semibold text-xs sm:text-sm hover:bg-[#FAF8F2] transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#111111]" />
                    <span>Call: {businessConfig.phone}</span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#E8E5DE] shadow-xs">
                  <img 
                    src="/images/doctor/bni-clinic-exterior.jpg" 
                    alt="BNI - Bashir NeuroSpine Institute, Jail Road Lahore"
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-3 bg-white text-center border-t border-[#E8E5DE]">
                    <span className="text-xs font-semibold text-[#666666]">BNI - Bashir NeuroSpine Institute, Jail Road Lahore</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* B5 — Frequently Asked Questions */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Revision Joint Replacement FAQs
              </h2>
              <p className="text-sm text-[#475569]">
                Clear answers to common questions about problems after knee or hip replacement.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-[#E8E5DE] rounded-xl bg-white overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F2] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-[#111111]">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-[#BE8C1D] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F0EEE6]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* S17 — Get Your Joint Replacement Concerns Checked */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-white border border-[#E8E5DE] shadow-sm">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Get Your Joint Replacement Concerns Checked
            </h2>
            
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto">
              Living with a painful or unsteady artificial joint can be worrying. You do not have to wait and wonder. A careful check can find out what is causing the problem. Many problems can be explained and managed, and another operation is not always needed. If you have new or ongoing problems after a joint replacement, you can call or message the clinic to arrange an orthopaedic consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#A37513] transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Book Appointment</span>
              </a>

              <a
                href={businessConfig.callUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white border border-[#111111] text-[#111111] font-semibold text-sm hover:bg-[#FAF8F2] transition-all"
              >
                <Phone className="w-4 h-4 text-[#111111]" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

    </div>
  );
};
