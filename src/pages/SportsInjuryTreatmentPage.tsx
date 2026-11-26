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
  Dumbbell
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const SportsInjuryTreatmentPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is a sports injury?",
      a: "A sports injury is damage to the body that happens when you play sport, train or exercise. It can affect muscles, bones, joints, tendons and ligaments. It can happen suddenly or build up slowly from overuse."
    },
    {
      q: "What are the most common sports injuries?",
      a: "Common ones include sprains, muscle strains, tendon problems, ligament tears, meniscus tears in the knee, dislocations and fractures. The knee, shoulder and ankle are often affected. Which injuries are most common can depend on the sport."
    },
    {
      q: "What causes sports injuries?",
      a: "Common causes are falls, twisting, sudden changes of direction, direct contact and repeated strain. Training errors, too little recovery, poor technique, unsuitable equipment and a past injury can raise the risk. Not every injury can be prevented."
    },
    {
      q: "What are the signs of a serious sports injury?",
      a: "Warning signs include a limb that looks out of shape, a crack heard at the time of injury, being unable to put weight on the leg or use the arm, numbness, a pale or cold hand or foot, severe pain with fast-growing swelling, and a serious head or neck injury. These need emergency care."
    },
    {
      q: "When should I see a doctor?",
      a: "See a doctor straight away for the warning signs above. Also arrange a check if pain or swelling is getting worse, the joint feels unstable or locks, you cannot move normally, or the injury is not improving after a few days of sensible self-care. You should also see a doctor if the same injury keeps coming back."
    },
    {
      q: "Do all sports injuries need an MRI?",
      a: "No. Many injuries can be assessed with a history and examination, and sometimes an X-ray. An MRI or ultrasound is used when the doctor needs to see soft tissues such as ligaments, the meniscus or tendons, or when the diagnosis is unclear. Your doctor will explain whether a scan is useful in your case."
    },
    {
      q: "Can sports injuries heal without surgery?",
      a: "Many can. Rest, protection, physiotherapy, suitable strengthening and follow-up checks are often tried first. Whether surgery is needed depends on the injury, how severe it is, your symptoms and your goals."
    },
    {
      q: "What is the difference between a sprain and a strain?",
      a: "A sprain is an injury to a ligament, the band that joins one bone to another. A strain is an injury to a muscle or tendon. They can feel similar, with pain, swelling and bruising, so a doctor may need to check which one you have."
    },
    {
      q: "When might sports injury surgery be needed?",
      a: "Surgery may be considered for severe instability, some complete tears, displaced fractures or other injuries, ongoing pain or weakness that limits function, or when suitable non-surgical care has not worked. It is a shared decision and depends on your goals. Surgery is not needed for most sports injuries."
    },
    {
      q: "How long does sports injury recovery take?",
      a: "It depends on the injury, how severe it is, the treatment and the person. Mild sprains and strains often start to feel better within a couple of weeks, but severe injuries can take months. Recovery after surgery can take longer. Your doctor can give you a more personal idea after an assessment, but no one can promise an exact time."
    },
    {
      q: "Is physiotherapy important?",
      a: "Yes, for many injuries. Physiotherapy helps restore movement, strength, balance and control, and guides a safe, gradual return to activity. It is important whether or not you have surgery."
    },
    {
      q: "When can I return to sports?",
      a: "There is no fixed date. Doctors look at healing, strength, movement quality, stability, functional tests and your confidence, and give medical clearance where appropriate. Being pain-free alone is not enough. Returning too early can raise the risk of another injury."
    },
    {
      q: "How can I reduce the risk of another injury?",
      a: "Finish your rehabilitation, build training up gradually, warm up properly, work on strength and balance, learn good technique, use suitable equipment and give your body time to rest. These steps can lower the risk, but they cannot remove it completely."
    },
    {
      q: "Can a sports injury cause long-term joint problems?",
      a: "In some cases, yes. For example, a knee that stays unstable after a ligament injury can lead to further damage of the cartilage or meniscus, and loss of meniscus tissue can raise the risk of arthritis. Early assessment and proper rehabilitation can help, but outcomes vary from person to person."
    },
    {
      q: "Can knee sports injuries affect the ACL or meniscus?",
      a: "Yes. The ACL and the meniscus are two of the most commonly injured parts of the knee in sport, often after a twist or a sudden change of direction. They can be injured together. A doctor can tell which parts are involved after an examination and, when needed, a scan."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} or message on WhatsApp at ${businessConfig.phone}. The clinic is at ${businessConfig.clinicName}, ${businessConfig.fullAddress}.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can arrange an appointment by sending a WhatsApp message to ${businessConfig.phone}. For calls, use ${businessConfig.phone}. If you have an emergency, please go to the nearest hospital emergency department instead of waiting for a reply.`
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
          <span className="text-[#111111] font-semibold">Sports Injury Treatment</span>
        </div>
      </nav>

      {/* B3 — HERO SECTION */}
      <section className="relative bg-white py-12 sm:py-16 border-b border-[#E8E5DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Activity className="w-3.5 h-3.5" />
              SPORTS INJURY ASSESSMENT &amp; RECOVERY
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Sports Injury Treatment in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Sports injuries can affect your muscles, bones, joints, tendons and ligaments. The right treatment depends on the type of injury and how serious it is. Many sports injuries improve without surgery. If you are in pain, or your injury is not settling, you can arrange an orthopaedic assessment with Dr. Mazhar Rafique in Lahore.
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

      {/* S01 — WHAT IS A SPORTS INJURY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Sports Injury?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              A sports injury is damage to your body that happens when you play sport, train or exercise. It can happen to a cricketer, a footballer, a runner, a weightlifter or a child playing in the street. You do not need to be a professional athlete to get one.
            </p>
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">Which parts of the body can be hurt?</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li><strong>Muscles:</strong> help you produce power and movement.</li>
                <li><strong>Tendons:</strong> strong cords that join muscles to bones.</li>
                <li><strong>Ligaments:</strong> tough bands that join one bone to another and keep your joints steady.</li>
                <li><strong>Bones and joints:</strong> hold your body up and allow flexible articulated movement.</li>
                <li><strong>Cartilage:</strong> the smooth, slippery cushion inside joint surfaces.</li>
              </ul>
              <p className="mt-2 text-xs text-slate-600">
                The knee, shoulder and ankle are common places to get hurt. Injuries can also affect the back, hip, elbow, wrist and foot.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-1">Sudden injuries and overuse injuries</h3>
              <p className="text-sm">
                Doctors often split sports injuries into two groups. A <strong>sudden (acute) injury</strong> happens at one moment, such as a fall, a twist or a hard knock. An <strong>overuse injury</strong> builds up slowly when the same part of the body is stressed repeatedly without enough time to recover.
              </p>
            </div>
            <p className="text-xs text-slate-600 italic">
              Two people can hurt the same joint and feel very different symptoms. That is why an in-person orthopaedic check matters.
            </p>
          </div>
        </div>
      </section>

      {/* S02 — COMMON TYPES OF SPORTS INJURIES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Types of Sports Injuries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Ligament sprain</h3>
              <p className="text-xs text-slate-600 mt-1">A sprain is when a ligament is stretched or torn. Ankle and knee sprains are very common in pivoting sports.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Muscle strain</h3>
              <p className="text-xs text-slate-600 mt-1">A strain is when a muscle or tendon is overstretched or torn, frequently called a pulled muscle.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Tendon injury</h3>
              <p className="text-xs text-slate-600 mt-1">A tendon can become sore and irritated (tendinopathy), or it can tear partly or fully under sudden heavy loads.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Meniscus tear</h3>
              <p className="text-xs text-slate-600 mt-1">The meniscus is a C-shaped cushion pad in the knee. A sudden twist while bearing weight can tear it.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Joint dislocation</h3>
              <p className="text-xs text-slate-600 mt-1">The bones of a joint are forced out of their normal socket alignment. The shoulder is a frequent site.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Fracture</h3>
              <p className="text-xs text-slate-600 mt-1">
                A broken bone ranging from a hairline crack to a displaced break. Learn about <Link to="/fracture-trauma-surgery/" className="text-[#BE8C1D] font-semibold hover:underline">fracture and trauma care</Link>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Cartilage injury</h3>
              <p className="text-xs text-slate-600 mt-1">The smooth joint gliding surface can be bruised or chipped by a heavy landing or direct blow.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Overuse problems</h3>
              <p className="text-xs text-slate-600 mt-1">Pain that builds slowly from repeated loading, such as shin splints, runner&apos;s knee, or tennis elbow.</p>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Many of these injuries get better with rest, protection and rehabilitation. Some need closer checks, scans or, in selected cases, surgery.
          </p>
        </div>
      </section>

      {/* S03 — WHAT CAUSES SPORTS INJURIES? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Causes Sports Injuries?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-base text-[#111111] mb-3">How injuries happen</h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li>• <strong>Falls:</strong> Landing awkwardly or slipping on hard or wet grass.</li>
                <li>• <strong>Twisting movements:</strong> The foot remains planted while the torso turns.</li>
                <li>• <strong>Sudden changes of direction:</strong> Rapid deceleration, cutting, or jumping.</li>
                <li>• <strong>Direct contact:</strong> Tackles, collisions, or impact from a ball or bat.</li>
                <li>• <strong>Repeated strain:</strong> The same movement repeated thousands of times.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2]">
              <h3 className="font-bold text-base text-[#111111] mb-3">What can raise the risk</h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li>• <strong>Training errors:</strong> Doing too much, too soon, or with poor technique.</li>
                <li>• <strong>Not enough recovery:</strong> Fatigue and inadequate sleep between sessions.</li>
                <li>• <strong>Skipping a warm-up:</strong> Cold muscles and stiff joints strain easily.</li>
                <li>• <strong>Past injury:</strong> An earlier sprain that never fully recovered.</li>
                <li>• <strong>Unsuitable equipment:</strong> Worn-out shoes or poor ground surfaces.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-600 italic">
            Growing children and teenagers need extra care because their bones, growth plates, muscles and tendons are still developing.
          </p>
        </div>
      </section>

      {/* S04 — COMMON SIGNS OF A SPORTS INJURY */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Signs of a Sports Injury
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            Your body gives clear warning signals when something is wrong:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {[
              "Pain at the time of injury or shortly after",
              "Swelling around the joint or muscle belly",
              "Bruising that develops over hours or days",
              "Weakness when attempting to bear weight",
              "Stiffness that restricts joint range of motion",
              "A loose, wobbly feeling as if joint may give way",
              "Inability to run, jump, or walk smoothly",
              "Catching, clicking or locking sensations",
              "A distinct 'pop' sound or sensation"
            ].map((sign, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                <span className="text-xs text-slate-800">{sign}</span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <strong>Important note:</strong> How bad the pain feels does not always match how serious the injury is. A small muscle bruise can sting sharply, while a complete ligament tear might ache dull once acute swelling settles. If symptoms persist or worsen, arrange an evaluation.
          </div>
        </div>
      </section>

      {/* S05 — WHEN IS A SPORTS INJURY AN EMERGENCY? */}
      <section id="emergency-signs" className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl border-l-4 border-l-[#BE8C1D] border border-[#E8E5DE] bg-white">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3 flex items-center gap-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              <AlertTriangle className="w-5 h-5 text-[#BE8C1D]" />
              When Is a Sports Injury an Emergency?
            </h2>
            <p className="text-sm text-slate-700 mb-4">
              Some injuries cannot wait for a routine clinic appointment. Go to the nearest hospital emergency department straight away if any of these occur:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 mb-5">
              <li>• The limb or joint looks visibly bent, crooked, or deformed.</li>
              <li>• You had a high-energy fall, road traffic collision, or crushing impact.</li>
              <li>• You suspect a broken bone or dislocated joint (or heard a loud crack).</li>
              <li>• You cannot put any weight on the leg, or cannot move the arm at all.</li>
              <li>• Numbness, tingling, or complete loss of sensation below the injury.</li>
              <li>• Hand or foot appears cold, pale, or blue-tinted (compromised circulation).</li>
              <li>• Severe, rapidly expanding swelling accompanied by unbearable pain.</li>
              <li>• Head or neck trauma with confusion, loss of consciousness, vomiting, or weakness.</li>
            </ul>
            <p className="text-xs text-slate-600">
              In Lahore, call Rescue 1122 if emergency ambulance transport is required. Once acute trauma is stabilised, follow-up orthopaedic care can be scheduled.
            </p>
          </div>
        </div>
      </section>

      {/* S06 — COMMON KNEE SPORTS INJURIES */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Knee Sports Injuries
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            The knee absorbs tremendous forces in sport and is one of the most frequently injured joints:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">ACL tear</h3>
              <p className="text-xs text-slate-600 mt-1">The anterior cruciate ligament provides rotational stability. Tears often present with a pop, immediate swelling, and giving-way episodes.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Meniscus injury</h3>
              <p className="text-xs text-slate-600 mt-1">Twisting forces can tear the shock-absorbing meniscus, causing localized joint-line tenderness, clicking, or locking.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Collateral ligament sprain</h3>
              <p className="text-xs text-slate-600 mt-1">MCL and LCL injuries result from inward or outward sideways knee impacts during tackles.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Articular cartilage damage</h3>
              <p className="text-xs text-slate-600 mt-1">Focal surface cartilage defects can cause chronic swelling and aching after activity.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#BE8C1D]">
            <Link to="/acl-reconstruction/" className="hover:underline">ACL Reconstruction &rarr;</Link>
            <Link to="/meniscus-repair/" className="hover:underline">Meniscus Repair &rarr;</Link>
            <Link to="/knee-arthroscopy/" className="hover:underline">Knee Arthroscopy &rarr;</Link>
          </div>
        </div>
      </section>

      {/* S07 — COMMON SHOULDER SPORTS INJURIES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Shoulder Sports Injuries
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            The shoulder moves in more directions than almost any other joint, making it prone to instability:
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Shoulder dislocation &amp; instability</h3>
              <p className="text-xs text-slate-600 mt-1">The ball slips out of the socket. Recurrent looseness is termed chronic shoulder instability and often benefits from labral repair.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Rotator cuff tears</h3>
              <p className="text-xs text-slate-600 mt-1">Four muscles and tendons stabilize the shoulder. Tears cause weakness, difficulty lifting the arm overhead, and night pain.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <h3 className="font-bold text-sm text-[#111111]">Labral (Bankart) tears</h3>
              <p className="text-xs text-slate-600 mt-1">Tearing of the fibrous cartilage ring around the socket during a dislocation or repeated throwing motions.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#BE8C1D]">
            <Link to="/shoulder-arthroscopy/" className="hover:underline">Shoulder Arthroscopy &rarr;</Link>
            <Link to="/rotator-cuff-repair/" className="hover:underline">Rotator Cuff Repair &rarr;</Link>
          </div>
        </div>
      </section>

      {/* S08 — WHAT IS A MUSCLE STRAIN? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is a Muscle Strain?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              A muscle strain happens when a muscle or its tendon is stretched too far or torn. Common sites include the hamstrings (back of the thigh), calf muscles, groin adductors, and lower back.
            </p>
            <p>
              <strong>Common causes:</strong> Strains frequently happen during sprinting, sudden acceleration, kicking, or lifting when muscles are tired or inadequately warmed up.
            </p>
            <p>
              <strong>Symptoms:</strong> Sudden sharp pain, a palpable pull or snap sensation, localized swelling, bruising, and muscle cramping.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DE]">
              <h3 className="font-bold text-[#111111] text-xs mb-1">When to see a doctor for muscle pain</h3>
              <p className="text-xs text-slate-600">
                Seek assessment if you cannot bear weight, notice a visible dent or gap in the muscle, experience significant weakness, or find that the muscle repeatedly tears during activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 — WHAT ARE TENDON INJURIES? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Are Tendon Injuries?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              A tendon is a tough fibrous cord that transmits muscular force to bone. Tendons work under high tension in running, jumping, and throwing.
            </p>
            <div>
              <h3 className="font-bold text-[#111111] text-base mb-1">Tendon irritation vs tears</h3>
              <p>
                <strong>Tendinopathy:</strong> Soreness and stiffening from overuse that is worse at the start of training or after prolonged rest.
              </p>
              <p className="mt-1">
                <strong>Partial &amp; Complete Tears:</strong> High loads can tear fibres. Common examples include the rotator cuff, patellar tendon, and Achilles tendon at the heel.
              </p>
            </div>
            <p className="text-xs text-slate-600">
              Many tendon conditions improve with activity modification, eccentric strengthening, and rehabilitation. Complete structural tears in active athletes may warrant surgical discussion.
            </p>
          </div>
        </div>
      </section>

      {/* S10 — WHAT HAPPENS WHEN A LIGAMENT IS INJURED? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens When a Ligament Is Injured?
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            Ligaments connect bone to bone. Injury grades describe the extent of tissue disruption:
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] bg-white mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Type of injury</th>
                  <th className="p-3.5">What it means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Sprain (mild)</td>
                  <td className="p-3.5">The ligament is stretched, but its fibres remain intact and the joint is stable.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Partial tear</td>
                  <td className="p-3.5">Some fibres are torn. The ligament is weakened and the joint may feel loose.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Complete tear</td>
                  <td className="p-3.5">The ligament is torn through. The joint can feel unstable and buckle under load.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            For complex tears requiring anatomical graft reconstruction, read our <Link to="/ligament-reconstruction/" className="text-[#BE8C1D] font-bold hover:underline">ligament reconstruction</Link> page.
          </p>
        </div>
      </section>

      {/* S11 — WHAT ARE OVERUSE SPORTS INJURIES? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Are Overuse Sports Injuries?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              An overuse injury does not come from a single dramatic event. It develops gradually when tissues are stressed repeatedly without sufficient recovery intervals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Repeated stress</p>
                <p className="text-xs text-slate-600 mt-1">Continuous repetitive loading such as cricket bowling, distance running, or swimming.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Training spikes</p>
                <p className="text-xs text-slate-600 mt-1">Sudden increases in weekly mileage, intensity, or training frequency.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Inadequate recovery</p>
                <p className="text-xs text-slate-600 mt-1">Lack of rest days, sleep deprivation, or poor nutritional recovery.</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Mild overuse problems respond well when identified early. Continuing to play through escalating pain can turn an acute irritation into a chronic structural disorder.
            </p>
          </div>
        </div>
      </section>

      {/* S12 — HOW DOES A DOCTOR CHECK A SPORTS INJURY? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Does a Doctor Check a Sports Injury?
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            A comprehensive clinical assessment follows an organized, evidence-based sequence:
          </p>
          <div className="space-y-2.5 mb-6">
            {[
              { title: "Your story", desc: "How the injury occurred, velocity, sounds heard, and whether you could continue playing." },
              { title: "Your symptoms", desc: "Location of tenderness, swelling timeline, sensations of giving way, or numbness." },
              { title: "Physical examination", desc: "Palpation of anatomical structures and comparison against the contralateral healthy limb." },
              { title: "Joint movement", desc: "Assessing active and passive ranges of motion to detect stiffness or guarding." },
              { title: "Stability tests", desc: "Gentle manual stress tests assessing ligament laxity and end-feel integrity." },
              { title: "Diagnostic imaging when indicated", desc: "Ordering X-rays, ultrasound, or MRI only when clinically necessary." },
              { title: "Personalised treatment plan", desc: "Explaining non-surgical options, rehab milestones, and surgical indications." }
            ].map((step, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white border border-[#E8E5DE] flex items-start gap-3">
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

      {/* S13 — DO SPORTS INJURIES NEED X-RAYS OR MRI? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Do Sports Injuries Need X-Rays or MRI?
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            Not every sports injury needs a scan. Imaging is selected according to clinical findings:
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E8E5DE] mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#FAF8F2] text-xs uppercase font-bold text-[#111111] border-b border-[#E8E5DE]">
                <tr>
                  <th className="p-3.5">Test</th>
                  <th className="p-3.5">What it can show</th>
                  <th className="p-3.5">When it may help</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DE] text-xs">
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">X-ray</td>
                  <td className="p-3.5">Bones and joint alignment.</td>
                  <td className="p-3.5">When fracture or dislocation is suspected. Does not visualize ligaments or cartilage.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">Ultrasound</td>
                  <td className="p-3.5">Superficial soft tissues, tendons, and muscles dynamically.</td>
                  <td className="p-3.5">Helpful for Achilles, patellar tendon, or superficial muscle tears.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#111111]">MRI</td>
                  <td className="p-3.5">Detailed multiplanar view of ligaments, meniscus, and joint cartilage.</td>
                  <td className="p-3.5">When examination suggests cruciate tear, labral pathology, or deep joint disruption.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            A scan is only one piece of information. The doctor treats your symptoms and function, not just the scan image.
          </p>
        </div>
      </section>

      {/* S14 — WHAT SHOULD YOU DO AFTER A SPORTS INJURY? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Should You Do After a Sports Injury?
          </h2>
          <div className="space-y-3 mb-6">
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">1. Stop the activity immediately</p>
              <p className="text-xs text-slate-600 mt-0.5">Do not attempt to &ldquo;run it off&rdquo; or play through sharp pain.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">2. Protect the injured area</p>
              <p className="text-xs text-slate-600 mt-0.5">Avoid putting full weight on a severely strained leg or shoulder.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">3. Control acute swelling</p>
              <p className="text-xs text-slate-600 mt-0.5">Rest, gentle elevation, and cold packs wrapped in a cloth. Avoid direct heat or vigorous massage in the first 48 hours.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">4. Move gently within comfort</p>
              <p className="text-xs text-slate-600 mt-0.5">Do not aggressively force painful motion, but prevent extreme stiffness once pain begins easing.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E8E5DE]">
              <p className="font-bold text-xs text-[#111111]">5. Get an accurate diagnosis</p>
              <p className="text-xs text-slate-600 mt-0.5">If swelling, giving way, or severe weakness persists, seek orthopaedic assessment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S15 — CAN SPORTS INJURIES BE TREATED WITHOUT SURGERY? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Can Sports Injuries Be Treated Without Surgery?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Yes, many can. The majority of acute sports injuries settle successfully with structured conservative protocols:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Activity modification</p>
                <p className="text-xs text-slate-600 mt-1">Cross-training (cycling, swimming) to maintain fitness while injured structures rest.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Structured physiotherapy</p>
                <p className="text-xs text-slate-600 mt-1">Supervised exercises restoring joint mobility, muscular balance, and stability.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Supportive bracing</p>
                <p className="text-xs text-slate-600 mt-1">Short-term splints or hinged braces protecting ligaments during early healing.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Follow-up checks</p>
                <p className="text-xs text-slate-600 mt-1">Clinical reviews tracking functional recovery and clearing progression milestones.</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Explore our <Link to="/sports-medicine-consultation/" className="text-[#BE8C1D] font-bold hover:underline">sports medicine consultation</Link> page for details on active non-operative management.
            </p>
          </div>
        </div>
      </section>

      {/* S16 — WHEN DOES A SPORTS INJURY NEED SURGERY? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Does a Sports Injury Need Surgery?
          </h2>
          <p className="text-slate-700 text-sm mb-4">
            Surgery is considered when non-surgical care cannot restore joint stability or prevent secondary structural damage:
          </p>
          <ul className="space-y-2 text-xs text-slate-700 mb-6">
            <li>• <strong>Significant joint instability:</strong> The knee or shoulder buckles repeatedly during everyday tasks or sports.</li>
            <li>• <strong>High-demand complete tears:</strong> ACL tears in young individuals engaging in pivoting games, or acute rotator cuff tears.</li>
            <li>• <strong>Displaced fractures or avulsions:</strong> Bone fragments or torn ligaments pulled away from their insertion sites.</li>
            <li>• <strong>Combined multi-structural injuries:</strong> Concomitant ACL and meniscus tears requiring repair.</li>
            <li>• <strong>Failed conservative care:</strong> Persistent pain, weakness, or mechanical catching despite 3 to 6 months of rehab.</li>
          </ul>
          <p className="text-xs text-slate-600">
            Learn more about surgical preparation on our <Link to="/surgery-preparation-recovery/" className="text-[#BE8C1D] font-bold hover:underline">surgery preparation and recovery</Link> page.
          </p>
        </div>
      </section>

      {/* S17 — WHY IS REHABILITATION IMPORTANT? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Why Is Rehabilitation Important?
          </h2>
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6">
            <p>
              Rehabilitation is the structured pathway to regaining movement, strength, and proprioceptive control after injury. It is critical whether you have surgery or recover conservatively.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Restoring full motion</p>
                <p className="text-xs text-slate-600 mt-1">Eliminating joint contractures and muscle tightness.</p>
              </div>
              <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
                <p className="font-bold text-xs text-[#111111]">Neuromuscular control</p>
                <p className="text-xs text-slate-600 mt-1">Training reflexive muscle firing to protect joints when landing.</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            For more educational guides, see our <Link to="/patient-education/" className="text-[#BE8C1D] font-bold hover:underline">patient education</Link> hub.
          </p>
        </div>
      </section>

      {/* S18 — WHEN CAN YOU RETURN TO SPORTS? */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            When Can You Return to Sports?
          </h2>
          <p className="text-slate-700 text-sm mb-6">
            Returning to sport should be based on objective criteria, not just the calendar:
          </p>
          <div className="space-y-2 text-xs text-slate-700 mb-6">
            <div className="p-3 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span><strong>No pain or effusion:</strong> The joint shows no swelling after strenuous training.</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span><strong>Symmetrical strength:</strong> Injured limb strength is &gt;90% of the unaffected side.</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span><strong>Functional agility tests:</strong> Successful single-leg hop, cutting, and deceleration drills.</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E8E5DE] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BE8C1D] shrink-0" />
              <span><strong>Psychological confidence:</strong> Minimal fear of re-injury during full-intensity drills.</span>
            </div>
          </div>
          <p className="text-xs text-amber-900 font-semibold">
            Being pain-free during walking is not enough. Re-injury risk increases significantly if athletes return before functional control is restored.
          </p>
        </div>
      </section>

      {/* S19 — HOW CAN YOU LOWER THE RISK OF SPORTS INJURIES? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Can You Lower the Risk of Sports Injuries?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Neuromuscular warm-ups</p>
              <p className="text-xs text-slate-600 mt-1">Structured programmes like FIFA 11+ with running, jumping, and balance drills.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Progressive overload</p>
              <p className="text-xs text-slate-600 mt-1">Increase intensity, speed, and duration by no more than 10% per week.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Safe mechanics</p>
              <p className="text-xs text-slate-600 mt-1">Learn soft knee-flexion landing mechanics to reduce ACL strain.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2]">
              <p className="font-bold text-xs text-[#111111]">Adequate sleep &amp; nutrition</p>
              <p className="text-xs text-slate-600 mt-1">Tissue regeneration occurs predominantly during deep restorative rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S20 — CONSULTANT ORTHOPAEDIC SURGEON IN LAHORE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE]">
            <h2 className="text-2xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Dr. Mazhar Rafique is a Consultant Orthopaedic Surgeon in Lahore with more than 10 years of experience in orthopaedic, trauma and sports injury care. His clinical interests encompass sports injuries, ACL reconstruction, meniscus repair, knee and shoulder arthroscopy, Bankart repair, and rotator cuff surgery.
            </p>
            <div className="space-y-1 text-xs text-slate-800 mb-5">
              <p>• <strong>M.B.B.S.</strong></p>
              <p>• <strong>F.C.P.S. (Orthopedic Surgery)</strong></p>
              <p>• <strong>Certified ATLS®</strong> (Advanced Trauma Life Support)</p>
              <p>• <strong>Fellowship in Arthroplasty and Joint Reconstruction</strong></p>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Consultations are conducted at {businessConfig.clinicName}, {businessConfig.fullAddress}.
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

      {/* S21 — WHAT HAPPENS DURING A SPORTS INJURY CONSULTATION? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Happens During a Sports Injury Consultation?
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { title: "Discussion of the injury", desc: "You describe the mechanism of injury, acute sensations, and current sporting limitations." },
              { title: "Symptom review", desc: "Evaluating pain patterns, joint stability, locking sensations, and previous athletic trauma." },
              { title: "Physical examination", desc: "Thorough assessment of ligament integrity, joint movement, and kinetic chain strength." },
              { title: "Diagnostic tests", desc: "X-rays, ultrasound, or MRI considered selectively when bony or deep soft tissue damage is suspected." },
              { title: "Options discussion", desc: "Clear review of conservative physical therapy versus surgical intervention." },
              { title: "Agreed action plan", desc: "Scheduled rehabilitation checkpoints, bracing, or further follow-up timeline." }
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
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#BE8C1D]">
            <Link to="/orthopaedic-consultation/" className="hover:underline">Orthopaedic Consultation Details &rarr;</Link>
            <Link to="/contact/" className="hover:underline">Clinic Location &amp; Directions &rarr;</Link>
          </div>
        </div>
      </section>

      {/* S22 — EXPLORE RELATED SPORTS INJURY TREATMENTS */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Explore Related Sports Injury Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Sports Injury & Ligament Surgery overview", path: "/sports-injury-treatment/", desc: "See the full range of sports injury and ligament services in one place." },
              { title: "ACL Reconstruction", path: "/acl-reconstruction/", desc: "Learn how a torn ACL can be rebuilt and what recovery involves." },
              { title: "Ligament Reconstruction", path: "/ligament-reconstruction/", desc: "Find out when other knee and joint ligaments may need surgery." },
              { title: "Sports Medicine Consultation", path: "/sports-medicine-consultation/", desc: "Understand what a visit about performance, injury risk or recovery can include." },
              { title: "Meniscus Repair", path: "/meniscus-repair/", desc: "Read about stitching a torn knee cushion and the recovery that follows." },
              { title: "Knee Arthroscopy", path: "/knee-arthroscopy/", desc: "Learn how keyhole surgery is used to assess and treat joint problems." },
              { title: "Shoulder Arthroscopy", path: "/shoulder-arthroscopy/", desc: "See how keyhole surgery can treat shoulder instability and impingement." },
              { title: "Fracture & Trauma Surgery", path: "/fracture-trauma-surgery/", desc: "Read about broken bones and serious injuries that need urgent surgical care." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Learn what to expect from a visit for bone, joint, muscle or ligament pain." }
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

      {/* S23 — GET YOUR SPORTS INJURY CHECKED IN LAHORE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E5DE] text-center">
            <h2 className="text-2xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Sports Injury Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you have sports-related pain, swelling, a joint that feels unstable or less movement than normal, you can arrange an orthopaedic assessment. Getting your injury checked helps you understand what is wrong and what your options are.
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

export default SportsInjuryTreatmentPage;