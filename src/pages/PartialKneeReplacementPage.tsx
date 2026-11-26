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

export const PartialKneeReplacementPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is partial knee replacement?",
      a: "It is an operation that replaces only the damaged part of the knee with metal and plastic parts. The healthy parts are left in place. It is also called unicompartmental knee replacement."
    },
    {
      q: "Who may be suitable for partial knee replacement?",
      a: "Doctors may consider people whose arthritis is mainly in one part of the knee, whose knee is stable and moves well, and whose pain has not improved enough with non-surgical care. Only an assessment by a doctor can say whether it may suit you."
    },
    {
      q: "What is the difference between partial and total knee replacement?",
      a: "A partial replacement changes only the damaged section of the knee. A total replacement changes the surfaces of the whole joint. Each has advantages and limits. See our knee replacement surgery page for more."
    },
    {
      q: "Can arthritis affect only one part of the knee?",
      a: "Yes. Arthritis can wear out one section, such as the inner part, while the other sections stay healthy for a long time. It can also spread later."
    },
    {
      q: "Is partial knee replacement a major operation?",
      a: "It is real surgery with anaesthetic, risks and a recovery period. It is often a smaller operation than a total knee replacement, but it is still a serious decision."
    },
    {
      q: "When might partial knee replacement not be suitable?",
      a: "It may not suit people with arthritis in several parts of the knee, some ligament problems, a very stiff or badly bent knee, or arthritis that affects the whole joint. Your surgeon looks at each case on its own."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include infection, blood clots, bleeding, stiffness, ongoing pain, problems with the implant, and arthritis in other parts of the knee. More surgery may be needed later. Risks differ from person to person, so ask your surgeon about yours."
    },
    {
      q: "How long does recovery take?",
      a: "It varies. Many people start walking with support soon after the operation and then build up their activity over weeks. Getting back to all normal activities can take longer. The NHS says recovery after a partial replacement should be shorter than after a total replacement, but this is not the same for everyone."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Most people do. Exercises help the knee regain strength and movement. Your physiotherapist will tell you which exercises to do and for how long."
    },
    {
      q: "Can arthritis develop in other parts of the knee?",
      a: "Yes. The operation treats only the part that was replaced. Arthritis in other parts can continue and may cause problems later."
    },
    {
      q: "Can a partial knee replacement later need revision?",
      a: "Yes, it can. A repeat operation, or a change to a total knee replacement, may be needed in some people. Read about revision joint replacement."
    },
    {
      q: "Can knee pain improve without surgery?",
      a: "Often it can improve with exercise, physiotherapy, weight management when suitable, pain relief that a doctor advises and walking aids. Surgery is usually discussed only if these have not helped enough."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} or send a WhatsApp message to ${businessConfig.whatsappDisplay}. Appointments are arranged by phone call or WhatsApp at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. Use the Book Appointment button or message ${businessConfig.whatsappDisplay}. For immediate phone inquiries, call ${businessConfig.phone}.`
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
          <span className="text-[#111111] font-semibold">Partial Knee Replacement</span>
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
                <span>PARTIAL KNEE REPLACEMENT</span>
              </div>
              
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Partial Knee Replacement in Lahore
              </h1>
              
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Partial knee replacement is an operation that replaces only the damaged part of the knee. The healthy parts stay in place. Not everyone with knee arthritis is suitable for it, so a careful check is important. You can call or send a WhatsApp message to arrange an orthopaedic assessment in Lahore.
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
                  src="/images/doctor/dr-mazhar-rafique-surgery-knee.jpg" 
                  alt="Dr. Mazhar Rafique examining knee joint preservation options in Lahore"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E5DE]">
                  <p className="text-xs font-bold text-[#111111]">Targeted Single-Compartment Arthroplasty</p>
                  <p className="text-xs text-[#666666]">Bashir NeuroSpine Institute (BNI), Jail Road, Shadman 1, Lahore</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S01: What Is Partial Knee Replacement? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 01</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Is Partial Knee Replacement?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#BE8C1D]" />
                  How Does Arthritis Damage the Knee?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Your knee is a hinge joint. It bends and straightens when you walk, sit, climb stairs and stand up. Smooth, slippery cartilage covers the ends of the bones inside the joint. This cartilage helps the bones glide over each other without pain.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Arthritis can wear the cartilage away. The most common type is called osteoarthritis. When the cartilage becomes thin, the bones can rub together. The knee may then hurt, feel stiff and swell.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] shadow-xs space-y-3">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-[#BE8C1D]" />
                  What Does Partial Knee Replacement Mean?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Partial knee replacement is an operation that replaces only the damaged part of the knee. The surgeon removes the worn surfaces in that area and fits smooth metal and plastic parts. The healthy parts of the knee are left in place. These can include healthy cartilage, healthy bone and the strong ligaments in the middle of the knee.
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Doctors may think about this operation when arthritis affects only one section of the knee and other treatments have not helped enough. It is not the right choice for every knee.
                </p>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Why Is It Called Unicompartmental?</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Doctors also call this operation <strong>unicompartmental knee replacement</strong>. "Uni" means one. A compartment is one section of the knee. So the name simply means replacing one section of the knee. You may also hear the words <em>partial knee arthroplasty</em>. Arthroplasty is the medical word for a joint replacement operation. You can read about the wider operation on our{' '}
                <Link to="/knee-replacement-surgery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  knee replacement surgery
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S02: Which Parts of the Knee Can Be Affected? */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 02</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Which Parts of the Knee Can Be Affected?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Doctors divide the knee into three main areas. Each area is called a compartment.
              </p>
            </div>

            {/* Three Compartments Table */}
            <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE]">
                    <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider w-1/4">
                      Part of the Knee
                    </th>
                    <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider w-1/3">
                      Medical Name
                    </th>
                    <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider">
                      What to Know
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-xs sm:text-sm">
                  <tr className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#111111]">Inner part</td>
                    <td className="p-3.5 text-[#333333] font-medium">Medial compartment</td>
                    <td className="p-3.5 text-[#475569] leading-relaxed">
                      This is the side nearest your other knee. Arthritis affects this area most often.
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#111111]">Outer part</td>
                    <td className="p-3.5 text-[#333333] font-medium">Lateral compartment</td>
                    <td className="p-3.5 text-[#475569] leading-relaxed">
                      This is the side away from your other knee. Arthritis here is less common.
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#111111]">Area behind kneecap</td>
                    <td className="p-3.5 text-[#333333] font-medium">Patellofemoral compartment</td>
                    <td className="p-3.5 text-[#475569] leading-relaxed">
                      Here the kneecap glides over the thigh bone. Arthritis in this area alone is less common.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Why Can Arthritis Affect Only One Part?</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The knee does not carry weight evenly. The shape of the leg, an old injury and the way you use the joint can put more load on one side. Over time, that side may wear out faster. Sometimes the other sections stay healthy for many years.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Are All Partial Knee Replacements the Same?</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  No. Doctors may consider partial replacement when the damage is limited to a suitable part of the knee. An operation for the inner part is not the same as one for the outer part or the kneecap part. Your surgeon explains which type, if any, may suit your knee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03: Common Signs of Knee Arthritis */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 03</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Common Signs of Knee Arthritis
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">Signs You May Notice</h3>
              <p className="text-sm text-[#475569]">
                Knee arthritis can look different from person to person. Common signs include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Knee pain, often worse when you move or at the end of the day",
                  "Stiffness, especially after resting or in the morning",
                  "Swelling around the knee",
                  "Difficulty walking, or walking less far than before",
                  "Pain when using stairs",
                  "Less movement, for example a knee that does not bend or straighten fully",
                  "Pain that gets in the way of daily life, such as sitting on the floor or low seats"
                ].map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-medium">{symptom}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Symptoms Do Not Decide the Treatment</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Many knee problems cause these signs. Having them does not mean you need an operation. It does not mean you are suitable for partial knee replacement either. Only a doctor can say after a proper check. This page cannot diagnose you. Many people start with non-surgical care. Read more on our{' '}
                  <Link to="/arthritis-treatment/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    arthritis management
                  </Link>{' '}
                  page.
                </p>
              </div>

              {/* Urgent Warning Box */}
              <div className="p-5 rounded-xl bg-[#FFF8EE] border border-[#F5D8A0] space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#9A6700]">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  <span>When to Get Urgent Medical Help</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6B4701] leading-relaxed">
                  Go to the nearest emergency department if you have:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#6B4701] space-y-1.5">
                  <li>A hot, red, very swollen knee together with a fever</li>
                  <li>Sudden severe knee pain after a fall or injury, or you cannot put any weight on the leg</li>
                  <li>A swollen, painful calf, or sudden breathlessness or chest pain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04: Who May Be Suitable for Partial Knee Replacement? */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 04</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Who May Be Suitable for Partial Knee Replacement?
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">People Doctors May Consider</h3>
              <p className="text-sm text-[#475569]">
                Doctors choose patients for this operation with care. A person who may be considered often has:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Arthritis mainly in one compartment of the knee",
                  "Ongoing knee pain that affects daily life",
                  "A stable knee, with ligaments that are working well",
                  "A knee that still moves well without severe stiffness",
                  "Symptoms that have not improved enough with non-surgical care"
                ].map((crit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                    <Check className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-medium">{crit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed italic">
                This list is not a test you can mark yourself. A doctor listens to your story, examines your knee and looks at X-rays. Sometimes other tests are needed. Only then can the doctor say whether the operation may suit you.
              </p>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Age and Weight Are Not the Only Rules</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Age or body weight alone does not decide who is suitable. Doctors also look at which parts of the knee are damaged, how the knee moves, how stable it is and your general health. Two people of the same age can have very different answers. A{' '}
                  <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    proper orthopaedic consultation
                  </Link>{' '}
                  is the way to find out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S05: When Is Partial Knee Replacement Not the Right Option? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 05</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                When Is Partial Knee Replacement Not the Right Option?
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">Reasons It May Not Be Suitable</h3>
              <p className="text-sm text-[#475569]">
                Partial knee replacement may not be the right choice when:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Multicompartment Arthritis", d: "Arthritis affects more than one part of the knee in a significant way." },
                  { t: "Ligament Instability", d: "The knee is unstable or has certain cruciate ligament problems." },
                  { t: "Severe Deformity or Stiffness", d: "The knee is very stiff, or bent inwards or outwards by a large amount." },
                  { t: "Inflammatory Arthritis", d: "The arthritis is a type that affects the whole joint, such as rheumatoid arthritis, or other joint factors make it a poor fit." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-1">
                    <h4 className="text-sm font-bold text-[#111111]">{item.t}</h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Plans Can Change</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Sometimes a surgeon finds more damage than the scans showed. In that case, a different operation may be safer or work better. If your surgeon thinks a partial replacement is not right for your knee, they may talk to you about a total knee replacement instead. You can read about that operation on our{' '}
                  <Link to="/total-joint-replacement/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    total joint replacement
                  </Link>{' '}
                  page. It is a good idea to ask about this possibility before any surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S06: Partial vs Total Knee Replacement */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 06</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Partial vs Total Knee Replacement
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Both operations replace worn knee surfaces with metal and plastic parts. The difference is how much of the knee is replaced.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F2] border-b border-[#E8E5DE]">
                    <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider w-1/4">
                      Topic
                    </th>
                    <th className="p-3.5 text-xs font-bold text-[#BE8C1D] uppercase tracking-wider w-3/8">
                      Partial Knee Replacement
                    </th>
                    <th className="p-3.5 text-xs font-bold text-[#111111] uppercase tracking-wider w-3/8">
                      Total Knee Replacement
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-xs sm:text-sm">
                  {[
                    { topic: "Joint surfaces replaced", partial: "Only the damaged section of the knee.", total: "The surfaces of the whole knee joint." },
                    { topic: "Healthy parts kept", partial: "Healthy cartilage, bone and ligaments in the other sections.", total: "Fewer of the original joint surfaces are kept." },
                    { topic: "Who may be suitable", partial: "Arthritis limited to one section, a stable knee and good movement.", total: "Arthritis in several sections, or a knee not suitable for partial replacement." },
                    { topic: "Surgical approach", partial: "Often a smaller cut and less bone removed.", total: "A larger operation that resurfaces the whole joint." },
                    { topic: "Recovery", partial: "May be shorter for some people, but it varies.", total: "Rehabilitation may take longer, but it varies." },
                    { topic: "Future surgery", partial: "Higher chance of needing more surgery over time; arthritis can grow in other sections.", total: "The implant can last many years. A repeat operation is still possible." },
                    { topic: "Important limits", partial: "Fewer people are suitable. Choosing the right patient matters a great deal.", total: "It is still a major operation and does not give a perfectly natural knee." }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F2] transition-colors">
                      <td className="p-3.5 font-bold text-[#111111] align-top">{row.topic}</td>
                      <td className="p-3.5 text-[#333333] leading-relaxed align-top">{row.partial}</td>
                      <td className="p-3.5 text-[#475569] leading-relaxed align-top">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Neither Operation Is Better for Everyone</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A partial replacement is not always better or safer. A total replacement is not always the best choice either. The right operation depends on your knee, your health and your goals. Read the general overview on our{' '}
                <Link to="/knee-replacement-surgery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  knee replacement surgery
                </Link>{' '}
                page, or the guide to{' '}
                <Link to="/total-joint-replacement/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  total joint replacement
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S07: Can Knee Arthritis Improve Without Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 07</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Can Knee Arthritis Improve Without Surgery?
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111111]">Options Many People Try First</h3>
              <p className="text-sm text-[#475569]">
                Many people with knee arthritis feel better with non-surgical care. Arthritis does not always get worse. Options include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Suitable exercise", desc: "Gentle, low-impact activity such as walking, cycling or swimming can help. So can exercises that make the muscles around the knee stronger." },
                  { title: "Physiotherapy", desc: "A physiotherapist can teach safe exercises and help you move with more confidence." },
                  { title: "Weight management", desc: "If extra weight is adding strain, losing some can ease the load on the knee. This is advice for some people, not all." },
                  { title: "Pain-relief medicines", desc: "A doctor may suggest tablets, gels or creams when they are safe for you. Do not start or change medicines on your own." },
                  { title: "Walking aids", desc: "A stick or other support can take some weight off a painful knee." },
                  { title: "Other treatments", desc: "Special footwear or insoles, and in some cases injections into the knee, may help." }
                ].map((opt, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2] space-y-1.5">
                    <h4 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#BE8C1D]" />
                      {opt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">When Surgery May Be Discussed</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Guidelines such as those from NICE advise that these core treatments come before joint surgery is considered. If they have not helped enough and knee pain keeps affecting your daily life, your doctor may talk about surgery with you. Surgery is a choice, and the decision is yours. Learn more on our{' '}
                  <Link to="/arthritis-treatment/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                    arthritis management
                  </Link>{' '}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S08: How Does a Doctor Check Your Knee? */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 08</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                How Does a Doctor Check Your Knee?
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111]">What Usually Happens at a Knee Check</h3>
              <p className="text-sm text-[#475569]">
                Every doctor works in their own way, but a knee check often follows these steps:
              </p>

              {[
                { step: "1", title: "Symptoms Discussion", desc: "The doctor asks about your symptoms, such as where it hurts and what makes it worse." },
                { step: "2", title: "Medical History Review", desc: "The doctor reviews your medical history, including past injuries, other illnesses, medicines and treatments you have tried." },
                { step: "3", title: "Range of Motion Check", desc: "The doctor looks at how your knee moves and bends." },
                { step: "4", title: "Stability Assessment", desc: "The doctor checks how stable your knee is and how the ligaments hold." },
                { step: "5", title: "Imaging Review", desc: "The doctor reviews X-rays. Some people need other tests too, but not everyone does." },
                { step: "6", title: "Treatment Discussion", desc: "The doctor talks with you about treatment choices, with and without surgery." }
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

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-3">
              <h3 className="text-base font-bold text-[#111111]">What to Bring to Your Visit</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#333333]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>Any old X-rays, scan reports and medical papers about your knee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>A list of the medicines you take</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <span>A short note of your questions for the doctor</span>
                </li>
              </ul>
              <p className="text-xs text-[#666666] pt-1">
                Read more about what to expect on our{' '}
                <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  orthopaedic consultation
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09: What Happens During Partial Knee Replacement Surgery? */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 09</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                What Happens During Partial Knee Replacement Surgery?
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Details change from patient to patient and from surgeon to surgeon. This is a simple overview, not a set of instructions. Your own surgeon explains the plan for your knee.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: "Preparation", desc: "You have health checks and are told when to stop eating and drinking. The team also tells you which medicines to take or stop." },
                { title: "Anaesthesia", desc: "An anaesthetist gives you medicine so you feel no pain. Choices can include a spinal injection or a general anaesthetic. Nerve blocks may also be used." },
                { title: "Reaching the knee", desc: "The surgeon makes a cut over the knee and moves the tissues aside to see the joint." },
                { title: "Finding the damaged compartment", desc: "The surgeon checks the damaged section and the rest of the knee. If the knee is worse than expected, the plan may change." },
                { title: "Preparing the surfaces", desc: "The surgeon removes the worn cartilage and a small amount of bone from the damaged section only." },
                { title: "Fitting the new parts", desc: "Metal parts are fixed to the thigh bone and the shin bone. A smooth plastic piece sits between them." },
                { title: "Checking movement and stability", desc: "The surgeon bends and straightens the knee to check it moves well and feels stable." },
                { title: "Closing the wound", desc: "The wound is closed with stitches or clips and covered with a dressing." }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">
                  <span className="w-6 h-6 rounded-full bg-[#BE8C1D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#111111]">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">How Long Does It Take?</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                The operation often takes about one to one and a half hours, but this varies. Some hospitals send people home on the same day. Others keep patients for a few days. Your team will tell you what to expect. Find out how to get ready on our{' '}
                <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  surgery preparation and recovery
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S10: Benefits and Risks of Partial Knee Replacement */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 10</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Benefits and Risks of Partial Knee Replacement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Benefits */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#BE8C1D]" />
                  Possible Benefits
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  Some carefully chosen patients may notice:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Less knee pain",
                    "Better movement and bending",
                    "Better ability to do daily tasks",
                    "More of the healthy parts of the knee kept in place"
                  ].map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#333333]">
                      <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#666666] pt-2 italic">
                  Orthopaedic organisations report that most well-chosen patients do well. That does not mean every patient will. No doctor can promise a result.
                </p>
              </div>

              {/* Risks */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E5DE] space-y-4">
                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
                  Possible Risks
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  All operations carry risks. Possible problems include:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#333333]">
                  <li><strong>Infection:</strong> germs can enter the wound or the joint</li>
                  <li><strong>Blood clots:</strong> a clot can form in a leg vein</li>
                  <li><strong>Bleeding:</strong> bruising around the knee can happen</li>
                  <li><strong>Stiffness:</strong> some knees stay stiff and need extra exercise</li>
                  <li><strong>Ongoing pain:</strong> a few people still have pain after surgery</li>
                  <li><strong>Implant problems:</strong> parts can loosen or wear over time</li>
                  <li><strong>Nerve or blood vessel injury:</strong> rare numbness near scar</li>
                  <li><strong>Arthritis in other parts:</strong> other compartments can wear later</li>
                  <li><strong>More surgery:</strong> repeat operation or total replacement may be needed</li>
                </ul>
              </div>

            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8E5DE] space-y-2">
              <h3 className="text-base font-bold text-[#111111]">Limits to Keep in Mind</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A partial knee replacement does not make a knee young again. It treats one damaged section. If a repeat operation is needed, you can read about it on our{' '}
                <Link to="/revision-joint-replacement/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                  revision joint replacement
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S11: Recovery After Partial Knee Replacement */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 11</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Recovery After Partial Knee Replacement
              </h2>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Recovery is different for every person. The NHS says recovery after a partial knee replacement should be shorter than after a total knee replacement. That may not be true for every patient. Your age, health, fitness and the exact operation all matter.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#BE8C1D]" />
                  Early Recovery
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Nurses and physiotherapists help you start moving soon after the operation. You may need crutches or a frame at first. Some people go home sooner after a partial replacement.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                  Walking Safely
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Walk a little, often, and use your walking aid until your team says you can stop. Increase distance slowly. Avoid twisting the knee and avoid rushing.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#BE8C1D]" />
                  Pain and Swelling
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Some pain, swelling and bruising are normal. Swelling can increase after you go home. Take medicines exactly as advised. Raise your leg and use ice if advised.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE8C1D]" />
                  Physiotherapy and Exercises
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Exercises help your knee get strong and bend well. Many hospitals ask patients to keep doing them for several weeks, often between six and twelve.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Looking After the Wound</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Keep dressings clean and dry. Stitches or clips are usually removed after about two weeks. Ask for help if the wound looks red or leaks fluid.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2">
                <h3 className="text-base font-bold text-[#111111]">Getting Back to Daily Life</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Most people return to normal activities step by step. When you can drive or return to work depends on your job and your progress. Ask your surgeon before restarting.
                </p>
              </div>

            </div>

            {/* When to Get Help Quickly */}
            <div className="p-5 rounded-xl bg-[#FFF8EE] border border-[#F5D8A0] space-y-2">
              <h3 className="text-sm font-bold text-[#9A6700] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#BE8C1D]" />
                When to Get Help Quickly
              </h3>
              <ul className="text-xs sm:text-sm text-[#6B4701] space-y-1 list-disc pl-5">
                <li>Sudden breathlessness, chest pain or coughing up blood: go to the nearest emergency department at once.</li>
                <li>A calf or thigh that is painful and swollen: get medical advice promptly.</li>
                <li>Fever, or a wound that is red, hot, leaking or increasingly painful: contact your surgeon or hospital team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S12: Questions to Ask About Partial Knee Replacement */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 12</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Questions to Ask About Partial Knee Replacement
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                It helps to write your questions down before you see a doctor. You may want to ask:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Is my arthritis limited to one part of the knee?",
                "Am I suitable for a partial knee replacement?",
                "What other treatment options do I have?",
                "Would a total knee replacement be more appropriate for me?",
                "What are the possible risks for me?",
                "What will my recovery involve?",
                "Could I need another operation in the future?",
                "What happens if I decide to wait or not to have surgery?",
                "How will my pain be managed after the operation?",
                "Who will look after me after I leave hospital?"
              ].map((q, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
                  <span className="w-5 h-5 rounded-full bg-[#FAF8F2] border border-[#BE8C1D] text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ?
                  </span>
                  <span className="text-xs sm:text-sm text-[#333333] font-medium">{q}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#666666]">
              Bring these questions to your{' '}
              <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] font-semibold underline hover:text-[#A37513]">
                orthopaedic consultation
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S13: Consultant Orthopaedic Surgeon in Lahore */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              
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
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D]">
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
                  Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience. An orthopaedic surgeon is a doctor who treats problems of the bones, joints, muscles and ligaments.
                </p>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Dr. Rafique sees patients with joint problems, including knee pain and arthritis. His clinic is at BNI - Bashir NeuroSpine Institute in Shadman, Lahore. At a consultation he listens to your story, examines your knee and explains the treatment choices that may suit you. These can include non-surgical care as well as surgery, when it is appropriate.
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

      {/* S14: Explore Related Knee & Joint Care */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 14</div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Explore Related Knee &amp; Joint Care
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Joint replacement surgery", desc: "An overview of operations that replace worn joints, and when they are considered.", url: "/joint-replacement-surgery/" },
                { title: "Knee replacement surgery", desc: "The general guide to knee replacement, from reasons to recovery.", url: "/knee-replacement-surgery/" },
                { title: "Total joint replacement", desc: "How operations that replace the whole joint compare with partial ones.", url: "/total-joint-replacement/" },
                { title: "Revision joint replacement", desc: "What a repeat operation on an artificial joint involves.", url: "/revision-joint-replacement/" },
                { title: "Knee arthroscopy", desc: "Keyhole surgery for certain knee problems and when it is used.", url: "/knee-arthroscopy/" },
                { title: "Arthritis management", desc: "Ways to ease arthritis pain, including care that does not need surgery.", url: "/arthritis-treatment/" },
                { title: "Orthopaedic consultation", desc: "What to expect when you see an orthopaedic doctor about your knee.", url: "/orthopaedic-consultation/" }
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

      {/* S15: Orthopaedic Consultation in Lahore */}
      <section className="py-12 lg:py-16 border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider mb-2">Section 15</div>
                  <h2 
                    className="text-2xl sm:text-3xl font-bold text-[#111111]"
                    style={{ fontFamily: "'Maven Pro', sans-serif" }}
                  >
                    Orthopaedic Consultation in Lahore
                  </h2>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  If you have ongoing knee pain, you can contact the clinic to arrange an orthopaedic consultation. The doctor checks your knee and talks with you about treatment options that may suit you. Please contact the clinic to ask about appointment times.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] space-y-2 text-xs sm:text-sm">
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
      <section className="py-12 lg:py-16 bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Partial Knee Replacement FAQs
              </h2>
              <p className="text-sm text-[#475569]">
                Clear answers to common questions about unicompartmental knee replacement.
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

      {/* S16: Discuss Your Knee Pain and Treatment Options */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-white border border-[#E8E5DE] shadow-sm">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Discuss Your Knee Pain and Treatment Options
            </h2>
            
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto">
              Knee pain that does not go away deserves a proper check. A doctor can find out what is causing it and explain the choices that fit your knee. Some people need only exercises and simple care. Others may talk about surgery. A visit does not mean you must have an operation, and we cannot say beforehand whether partial knee replacement will suit you. Call or send a WhatsApp message to arrange a consultation in Lahore.
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
