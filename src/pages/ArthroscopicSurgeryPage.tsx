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
  Layers
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const ArthroscopicSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is arthroscopic surgery?",
      a: "Arthroscopic surgery is a procedure in which a surgeon uses a small camera, called an arthroscope, to look inside a joint through a small cut. The surgeon can sometimes treat certain problems during the same procedure."
    },
    {
      q: "Is arthroscopy the same as keyhole surgery?",
      a: "Arthroscopy is a type of keyhole surgery. It is keyhole surgery done on joints. Keyhole surgery is the wider name for operations done through small cuts."
    },
    {
      q: "Which joints can be examined with arthroscopy?",
      a: "Almost any joint can be examined. The knee, shoulder, hip, elbow, ankle and wrist are the joints most often examined."
    },
    {
      q: "When might knee arthroscopy be needed?",
      a: "It may be considered for selected problems such as some meniscus tears, some ligament injuries and loose pieces inside the knee. It is not needed for all knee pain. It is not usually recommended for wear-and-tear arthritis. Doctors decide after an examination and, often, after trying other treatment."
    },
    {
      q: "Can shoulder injuries be treated with arthroscopy?",
      a: "Some can. Examples are certain rotator cuff tears, a torn labrum and a shoulder that keeps dislocating. Other shoulder problems are treated without surgery or with open surgery. This depends on the diagnosis."
    },
    {
      q: "Is arthroscopy suitable for arthritis?",
      a: "Arthroscopy is not usually recommended as a routine treatment for knee arthritis. Studies show it often does not give lasting benefit. In a few selected cases, for example when a loose piece or a torn meniscus is causing locking, a doctor may discuss it."
    },
    {
      q: "Is arthroscopic surgery painful?",
      a: "You will have anaesthesia, so you should not feel pain during the procedure. Soreness and swelling are common afterwards. Your doctor will explain how to manage them."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, bleeding, blood clots, nerve or blood vessel injury, stiffness, ongoing pain, anaesthesia-related problems and the need for more treatment. Risks vary by procedure. Your surgeon will explain them before you decide."
    },
    {
      q: "How long does recovery take?",
      a: "It depends on the joint, the procedure and your health. Recovery after a simple look inside a joint can be much shorter than after a ligament or tendon repair. Your surgeon will give you a plan for your case."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Many people do, especially after a repair. Physiotherapy helps you regain movement and strength. Your surgeon will tell you if you need it."
    },
    {
      q: "Can joint problems improve without surgery?",
      a: "Yes. Many do. Physiotherapy, exercises, changes to activity and suitable pain relief can help. Surgery is not always the first choice."
    },
    {
      q: "Is arthroscopy better than open surgery?",
      a: "Not always. Arthroscopy uses small cuts and recovery is often quicker, but some problems need open surgery. The best method depends on your diagnosis."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `Call ${businessConfig.phone} or send a message on WhatsApp to ${businessConfig.whatsappDisplay}. The clinic is at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. Use the Book Appointment button or message ${businessConfig.whatsappDisplay} to ask about an orthopaedic appointment. For an emergency, go to the nearest hospital.`
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
          <span className="text-[#111111] font-semibold">Arthroscopic Surgery</span>
        </div>
      </nav>

      {/* B3: Hero Section */}
      <section className="bg-white border-b border-[#E8E5DE] py-12 lg:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-xs">
                <Activity className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <span>ARTHROSCOPIC JOINT CARE</span>
              </div>
              
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Arthroscopic Surgery in Lahore
              </h1>
              
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Arthroscopy is a procedure in which a surgeon uses a small camera to look inside a joint through a small cut. The camera sends clear pictures to a screen, so the surgeon can see what is wrong. Not every joint problem needs surgery, so treatment depends on your diagnosis. Call or message the clinic to arrange a consultation with Dr. Mazhar Rafique in Lahore.
              </p>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#333333] bg-white p-2.5 rounded-lg border border-[#E8E5DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Keyhole Minimally Invasive</span>
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
                  src="/images/doctor/dr-mazhar-rafique-surgery-knee.jpg" 
                  alt="Dr. Mazhar Rafique performing minimally invasive arthroscopic surgery in Lahore"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E5DE]">
                  <p className="text-xs font-bold text-[#111111]">Minimally Invasive Arthroscopic Surgery</p>
                  <p className="text-xs text-[#666666]">Bashir NeuroSpine Institute (BNI), Jail Road, Shadman 1, Lahore</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S01: What Is Arthroscopic Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 01</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Is Arthroscopic Surgery?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#BE8C1D]" />
                  What does arthroscopy mean?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Arthroscopy means "looking inside a joint". A joint is the place where two bones meet. Your knee and your shoulder are joints.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#BE8C1D]" />
                  What is an arthroscope?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  An arthroscope is a thin tube with a tiny camera and a light at the end. The surgeon puts it into the joint through a small cut. The camera sends high-definition pictures to a screen.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Why are the cuts small?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The arthroscope and the tools are narrow. So the cuts can be small. The surgeon does not need to open the whole joint, protecting surrounding muscles and tissues.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  What is keyhole surgery?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Keyhole surgery is a common name for arthroscopy. The cuts are small, like a keyhole. Doctors also call it minimally invasive surgery.
                </p>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Is arthroscopy always better than open surgery?</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                No. Some joint problems still need open surgery. Your surgeon will explain which method suits your specific condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02: When Might Arthroscopic Surgery Be Needed? */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 02</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                When Might Arthroscopic Surgery Be Needed?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Arthroscopy is not for everyone with joint pain. Doctors think about it when an injury needs direct treatment, or when other steps have not explained or settled the problem.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#111111]">Examples where arthroscopy may be considered:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Certain ligament injuries, such as some tears of the ACL",
                  "Selected meniscus tears, especially when a torn piece makes the knee lock or catch",
                  "Some shoulder injuries, such as a shoulder that keeps slipping out of place, or certain rotator cuff tears",
                  "Loose pieces of bone or cartilage inside a joint",
                  "Joint problems where X-rays and scans do not show the cause and direct visualization is required"
                ].map((ex, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-medium">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">How doctors decide</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The need for arthroscopy depends on your symptoms, examination findings, X-rays/scans, and how you responded to conservative care like physiotherapy. Two people with similar pain may need different treatments.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">What about arthritis?</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Arthroscopy is not usually recommended as a routine treatment for wear-and-tear arthritis of the knee. Studies show it often does not give lasting benefit for arthritis alone. Read more in our{' '}
                  <Link to="/patient-education/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    patient education section
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Joint Problems That May Be Treated With Arthroscopy */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 03</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Joint Problems That May Be Treated With Arthroscopy
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Meniscus tears", desc: "The meniscus is a rubbery cushion in the knee. Some tears can be repaired or trimmed with arthroscopy. Many small tears settle without surgery." },
                { title: "ACL injuries", desc: "The ACL is a main ligament inside the knee. When it tears, the knee may give way. Some ACL tears are treated with arthroscopic surgery." },
                { title: "Shoulder instability", desc: "This means the shoulder slips out of place too easily. Some cases are treated by repairing the torn tissue around the socket." },
                { title: "Rotator cuff tears", desc: "The rotator cuff tendons hold the shoulder steady. Selected tears can be repaired with arthroscopy, while others use different methods." },
                { title: "Cartilage injuries", desc: "Cartilage is the smooth cover on the ends of bones. Selected injuries to small areas may be treated during arthroscopy." },
                { title: "Other joint problems", desc: "Loose pieces in a joint, swollen joint lining (synovitis), and some hip impingement problems can also be assessed." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-1.5">
                  <h3 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#BE8C1D]" />
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S04: Explore Arthroscopic Surgery Treatments */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 04</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Explore Arthroscopic Surgery Treatments
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Arthroscopy covers many different procedures. Choose a topic below to learn more.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Knee Arthroscopy",
                  desc: "Keyhole surgery that lets the surgeon look inside the knee. It may be used to treat some injuries, such as selected meniscus tears and ligament problems.",
                  cta: "Read About Knee Arthroscopy",
                  url: "/knee-arthroscopy/"
                },
                {
                  title: "Hip Arthroscopy",
                  desc: "An overview of keyhole surgery for certain hip problems, such as some labral tears and hip impingement. It does not suit every hip problem.",
                  cta: "Learn About Hip Arthroscopy",
                  url: "/hip-arthroscopy/"
                },
                {
                  title: "Shoulder Arthroscopy",
                  desc: "Keyhole surgery to look inside the shoulder and treat some problems, including certain rotator cuff tears and shoulder instability.",
                  cta: "Explore Shoulder Arthroscopy",
                  url: "/shoulder-arthroscopy/"
                },
                {
                  title: "Meniscus Repair",
                  desc: "The meniscus is a rubbery cushion in the knee. Some tears can be stitched back together. Other tears are managed in different ways.",
                  cta: "Understand Meniscus Repair",
                  url: "/meniscus-repair/"
                },
                {
                  title: "Cartilage Restoration",
                  desc: "Cartilage covers the ends of bones. Some procedures aim to repair small areas of damaged cartilage. Not all cartilage damage can be restored.",
                  cta: "Learn About Cartilage Restoration",
                  url: "/cartilage-restoration/"
                }
              ].map((card, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#BE8C1D] transition-all group">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    to={card.url}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] pt-2"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S05 - S08: Specific Procedures Overviews */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* S05 Knee Arthroscopy Overview */}
            <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-3">
              <h2 
                className="text-xl sm:text-2xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Knee Arthroscopy
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Knee arthroscopy may be considered when an injury or a mechanical problem inside the knee needs a direct look or direct treatment. Doctors may use it for selected meniscus tears, some ligament injuries such as ACL tears, and loose pieces of bone or cartilage. Not all knee pain needs arthroscopy: wear-and-tear arthritis and muscle strain are usually managed with physiotherapy first.
              </p>
              <div className="pt-1">
                <Link to="/knee-arthroscopy/" className="text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] inline-flex items-center gap-1">
                  <span>Read the full guide to knee arthroscopy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* S06 Shoulder Arthroscopy Overview */}
            <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3 shadow-xs">
              <h2 
                className="text-xl sm:text-2xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Shoulder Arthroscopy
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                The surgeon puts a small camera into the shoulder joint through a small cut. Examples of problems it may treat include some rotator cuff tears, a torn labrum, recurrent dislocation, and tendon pinching (impingement). Rest and physiotherapy help many people before surgery is ever needed.
              </p>
              <div className="pt-1">
                <Link to="/shoulder-arthroscopy/" className="text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] inline-flex items-center gap-1">
                  <span>Read the full guide to shoulder arthroscopy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* S07 Hip Arthroscopy Overview */}
            <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-3">
              <h2 
                className="text-xl sm:text-2xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Hip Arthroscopy
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Hip arthroscopy is keyhole surgery of the hip joint. Doctors may consider it for problems such as femoroacetabular impingement (FAI), some labral tears, and loose bodies. Advanced hip arthritis is usually not treated this way.
              </p>
              <div className="pt-1">
                <Link to="/hip-arthroscopy/" className="text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] inline-flex items-center gap-1">
                  <span>Read the full guide to hip arthroscopy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* S08 Meniscus and Cartilage Procedures */}
            <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3 shadow-xs">
              <h2 
                className="text-xl sm:text-2xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Meniscus and Cartilage Procedures
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                The meniscus and cartilage are different parts of a joint. If the meniscus tears, the surgeon may be able to stitch it back together (meniscus repair). When a small area of cartilage is damaged, restoration procedures may be considered. Many meniscus and cartilage injuries improve with rest, exercise and physiotherapy without surgery.
              </p>
              <div className="flex gap-4 pt-1">
                <Link to="/meniscus-repair/" className="text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] inline-flex items-center gap-1">
                  <span>Meniscus Repair</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/cartilage-restoration/" className="text-xs font-bold text-[#BE8C1D] hover:text-[#A37513] inline-flex items-center gap-1">
                  <span>Cartilage Restoration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S09 & S10: Procedure Steps & Open Surgery Comparison */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Sections 09 &amp; 10</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                How Arthroscopy Works &amp; Open Surgery Comparison
              </h2>
            </div>

            {/* S09 Steps */}
            <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
              <h3 className="text-lg font-bold text-[#111111]">Typical Arthroscopic Surgical Steps</h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li><strong>Check before surgery:</strong> Health checks, fasting instructions, and medicine guidance.</li>
                <li><strong>Anaesthesia:</strong> General anaesthesia or nerve block to ensure no discomfort.</li>
                <li><strong>Small cuts:</strong> Miniature portal incisions made near the joint margin.</li>
                <li><strong>Camera goes in:</strong> The arthroscope enters with clean fluid to provide crystal-clear imaging.</li>
                <li><strong>Looking inside:</strong> Detailed systematic examination of bone, cartilage, and ligaments on screen.</li>
                <li><strong>Treatment when suitable:</strong> Operating through additional small cuts with precision instruments.</li>
                <li><strong>Closing cuts:</strong> Neat closure with small stitches or sterile tape and protective dressing.</li>
              </ol>
            </div>

            {/* S10 Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE]">
                    <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider w-1/4">Topic</th>
                    <th className="p-3.5 text-xs font-bold text-[#BE8C1D] uppercase tracking-wider w-3/8">Arthroscopic (Keyhole)</th>
                    <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider w-3/8">Open Surgery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-xs sm:text-sm">
                  <tr className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#111111]">Size of the cuts</td>
                    <td className="p-3.5 text-[#333333]">Small cuts (typically 0.5–1 cm)</td>
                    <td className="p-3.5 text-[#475569]">One larger cut</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#111111]">How surgeon sees</td>
                    <td className="p-3.5 text-[#333333]">Through high-resolution camera on screen</td>
                    <td className="p-3.5 text-[#475569]">By looking directly at the joint</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#111111]">Problems treated</td>
                    <td className="p-3.5 text-[#333333]">Many internal cartilage and ligament tears</td>
                    <td className="p-3.5 text-[#475569]">Larger repairs, deformities, joint replacements</td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#111111]">Recovery</td>
                    <td className="p-3.5 text-[#333333]">Often quicker for the same type of procedure</td>
                    <td className="p-3.5 text-[#475569]">Often takes longer due to incision healing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S11 — Can Joint Problems Improve Without Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 11</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Can Joint Problems Improve Without Surgery?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Many joint problems get better without surgery. Surgery is not always the first choice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Physiotherapy", desc: "A physiotherapist teaches exercises that make muscles stronger and help the joint move smoothly." },
                { title: "Suitable exercises", desc: "Gentle home exercises can protect the joint and improve range of motion." },
                { title: "Activity changes", desc: "Resting from painful movements and gradually resuming activity allows injuries to settle." },
                { title: "Weight management", desc: "Reducing load on knees and hips decreases joint stress significantly." },
                { title: "Pain relief when appropriate", desc: "Your doctor can advise what pain medication is safe and appropriate for you." },
                { title: "Other suitable treatments", desc: "Braces, orthotics, or targeted injections can be explored." }
              ].map((opt, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-1">
                  <h4 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#BE8C1D]" />
                    {opt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#666666] italic">
              Please do not start or change any medicine without advice from a doctor. If pain continues, an{' '}
              <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                orthopaedic consultation
              </Link>{' '}
              can help you understand your choices.
            </p>
          </div>
        </div>
      </section>

      {/* S12 — Benefits and Risks */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 12</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Benefits and Risks of Arthroscopic Surgery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#BE8C1D]" />
                  Possible Benefits
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  <li>• Direct visualization of internal joint structures</li>
                  <li>• Targeted surgical treatment through small portal cuts</li>
                  <li>• Less tissue trauma and quicker rehabilitation in many cases</li>
                </ul>
                <p className="text-xs text-[#666666] italic pt-1">
                  Results depend on the diagnosis, the repair performed, and adherence to rehabilitation.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  Possible Risks
                </h3>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-[#333333]">
                  <li>• Infection</li>
                  <li>• Bleeding in joint</li>
                  <li>• Blood clots</li>
                  <li>• Nerve/vessel injury</li>
                  <li>• Joint stiffness</li>
                  <li>• Persistent pain</li>
                  <li>• Anaesthetic risks</li>
                  <li>• Need for further care</li>
                </ul>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Limits of Arthroscopy</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Arthroscopy cannot cure every joint problem. It is not a routine treatment for uncomplicated knee osteoarthritis. Some repairs may not heal completely, and symptoms can persist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S13 — Recovery After Arthroscopic Surgery */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 13</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Recovery After Arthroscopic Surgery
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Recovery is different for each person. A simple look inside is very different from a ligament reconstruction or tendon repair.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Early recovery", d: "Many patients go home the same day after recovering from anaesthesia." },
                { t: "Pain and swelling", d: "Resting, elevating the joint and using ice helps reduce initial swelling." },
                { t: "Wound care", d: "Keep the small incisions clean and dry until instructed." },
                { t: "Safe movement", d: "Use slings, braces or crutches as directed by your surgeon." },
                { t: "Physiotherapy", d: "Structured exercises rebuild joint mobility and muscular stability." },
                { t: "Returning to activities", d: "Return to driving, work and sport gradually based on clinical progress." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-1">
                  <h4 className="text-sm font-bold text-[#111111]">{item.t}</h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            {/* When to seek urgent help */}
            <div className="p-5 rounded-xl bg-[#FFF8EE] border border-[#F5D8A0] space-y-2">
              <h3 className="text-sm font-bold text-[#9A6700] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#BE8C1D]" />
                When to Seek Urgent Help
              </h3>
              <p className="text-xs sm:text-sm text-[#6B4701]">
                Contact your surgeon or go to an emergency department if you experience fever, rapidly worsening redness/swelling, severe unmanageable pain, calf pain/swelling, or sudden shortness of breath.
              </p>
            </div>
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
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore. He holds MBBS and FCPS (Orthopaedic Surgery) qualifications and has more than 10 years of experience. His clinical interests include knee arthroscopy, shoulder arthroscopy, ACL reconstruction, meniscus repair, Bankart repair and rotator cuff repair.
                </p>

                <p className="text-sm text-[#475569] leading-relaxed">
                  He sees patients at BNI - Bashir NeuroSpine Institute in Shadman, Lahore.
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

      {/* S15 & S16: Consultation Steps & Related Care */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* S15 */}
            <div className="space-y-4">
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What to Expect During an Orthopaedic Consultation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "1. Discuss your symptoms",
                  "2. Share your medical history",
                  "3. Examine the joint",
                  "4. Consider tests if needed",
                  "5. Discuss your options",
                  "6. Plan the next steps"
                ].map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] text-xs sm:text-sm font-semibold text-[#111111]">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* S16 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111]">Explore Related Orthopaedic Care</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: "Sports injury & ligament surgery", desc: "Care for injuries from sport, including torn ligaments.", url: "/sports-injury-treatment/" },
                  { title: "ACL reconstruction", desc: "How a torn knee ligament may be rebuilt to stabilize the knee.", url: "/acl-reconstruction/" },
                  { title: "Shoulder surgery", desc: "Overview of operations for shoulder pain and instability.", url: "/shoulder-surgery/" },
                  { title: "Rotator cuff repair", desc: "Reattaching torn shoulder tendons to the bone.", url: "/rotator-cuff-repair/" },
                  { title: "Orthopaedic consultation", desc: "What happens at a first clinic assessment.", url: "/orthopaedic-consultation/" }
                ].map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.url}
                    className="p-4 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#BE8C1D] transition-colors">{item.title}</h4>
                      <p className="text-xs text-[#666666] mt-1">{item.desc}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#BE8C1D] pt-2">Learn more →</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S17: Clinic Location & Appointments */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 17</div>
                  <h2 
                    className="text-2xl sm:text-3xl font-bold text-[#111111]"
                    style={{ fontFamily: "'Maven Pro', sans-serif" }}
                  >
                    Arthroscopic Surgery Consultation in Lahore
                  </h2>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  If you live in Lahore or nearby and have a joint problem, you can arrange a consultation with Dr. Mazhar Rafique. He will assess your problem and explain whether arthroscopy or another treatment may suit you.
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

      {/* B5: Frequently Asked Questions */}
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
                Arthroscopic Surgery FAQs
              </h2>
              <p className="text-sm text-[#475569]">
                Clear answers to common questions about keyhole joint surgery.
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

      {/* S18: Get Your Joint Pain or Injury Checked */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-white border border-[#E8E5DE] shadow-sm">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Get Your Joint Pain or Injury Checked
            </h2>
            
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto">
              Do not ignore joint pain that does not go away. See a doctor if you have ongoing pain, stiffness, swelling or a joint that locks or gives way, or if you have hurt a joint in an injury. A proper check shows the cause and the safest next step. Many people do not need surgery. If surgery is suggested, the doctor will explain why.
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
