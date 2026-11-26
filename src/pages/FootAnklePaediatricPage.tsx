import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  ChevronDown, 
  AlertTriangle, 
  Stethoscope, 
  Award, 
  Check, 
  HeartPulse, 
  Baby, 
  Activity, 
  AlertCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const FootAnklePaediatricPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What does a foot and ankle orthopaedic doctor treat?',
      a: 'An orthopaedic doctor assesses problems of the bones, joints, ligaments and tendons of the foot and ankle. These include sprains, fractures, tendon problems, bunions, flat feet, arthritis and other deformities.'
    },
    {
      q: 'What causes foot and ankle pain?',
      a: 'Common causes are injury, overuse, arthritis, tendon problems, foot shape and tight shoes. Nerve and circulation problems can also cause pain. A check helps find the cause.'
    },
    {
      q: 'Do all ankle sprains need surgery?',
      a: 'No. Nearly all simple sprains heal without surgery with protection and rehabilitation. Surgery is considered only for a small number of people, for example when the ankle stays unstable after proper treatment.'
    },
    {
      q: 'What causes repeated ankle sprains?',
      a: 'An earlier sprain that did not fully recover is a common reason. Loose ligaments, weak muscles, poor balance and some foot shapes can also play a part.'
    },
    {
      q: 'Can ankle instability improve without surgery?',
      a: 'Often, yes. Exercises to build strength and balance, a supportive brace and avoiding high-risk activities help many people. Surgery is usually kept for people whose symptoms continue despite this.'
    },
    {
      q: 'How are foot and ankle fractures treated?',
      a: 'Treatment depends on the bone and the injury. Many fractures heal in a cast, splint or boot. Some need surgery, for example when the bones have moved or the ankle is unstable.'
    },
    {
      q: 'What is a bunion?',
      a: 'A bunion is a bony-looking bump near the base of the big toe. The big toe and nearby bones move out of their usual position. Some bunions cause no pain.'
    },
    {
      q: 'Do all bunions need surgery?',
      a: 'No. A bunion that does not cause problems needs no treatment. Surgery is usually considered only when a bunion is very painful or limits daily life and simple measures have not helped.'
    },
    {
      q: 'Can footwear changes help bunion pain?',
      a: 'They can ease pain. Wide, soft shoes with room for the toes reduce rubbing. Footwear changes do not straighten a bunion.'
    },
    {
      q: 'What is paediatric orthopaedics?',
      a: 'It is the care of children’s bones, joints and muscles. It looks at growth, walking patterns, injuries and conditions present from birth.'
    },
    {
      q: 'What is clubfoot?',
      a: 'Clubfoot is a condition present at birth in which the foot turns inwards and points downwards. It is not painful for a baby and needs early assessment and treatment.'
    },
    {
      q: 'Can clubfoot be treated without major surgery?',
      a: 'In many children, yes. The usual treatment is gentle stretching, casting and later bracing (the Ponseti method). Some children also need a small procedure on the heel cord. Surgery is kept for feet that do not correct fully or that return.'
    },
    {
      q: 'Are flat feet normal in children?',
      a: 'Often, yes. Flexible flat feet, where the arch shows when the child is on tiptoes, are a common variation. If they are painless, they usually need no treatment. Pain, stiffness or one-sided flat feet should be checked.'
    },
    {
      q: 'When should parents worry about a child’s walking pattern?',
      a: 'Many walking patterns, such as intoeing, improve with growth. Ask for a check if there is pain, a limp that lasts, a difference between the two sides, or if the pattern is getting worse.'
    },
    {
      q: 'Are bow legs and knock knees normal in children?',
      a: 'Usually, yes. Bow legs are common in babies and toddlers. Knock knees are common around ages 3 to 6. Both often correct with growth. A check helps if the legs look different from each other, are getting worse, or cause pain.'
    },
    {
      q: 'What are growth plates?',
      a: 'Growth plates are soft areas of growing tissue near the ends of a child’s long bones. This is where bones grow longer. They can be hurt in a fall or twist, so a child’s bone injury may need extra care and follow-up.'
    },
    {
      q: 'How are children’s orthopaedic conditions diagnosed?',
      a: 'The doctor asks about the child’s health and growth, examines the legs and feet, and watches the child walk. X-rays or other tests are used only when needed.'
    },
    {
      q: 'Do children always need X-rays?',
      a: 'No. Many common concerns, such as flexible flat feet or intoeing, can be assessed by examination. X-rays are used when a bone injury, a joint problem or a deformity needs to be seen.'
    },
    {
      q: 'When might surgery be considered?',
      a: 'Surgery may be discussed for some unstable fractures, ankle instability that continues despite rehabilitation, painful deformities, some serious tendon injuries and some conditions in children. Many people never need it.'
    },
    {
      q: 'How long does recovery take?',
      a: 'It varies by condition, treatment, age and health. Some problems settle in weeks, while others take months. Your doctor will explain what to expect and cannot promise a fixed time.'
    },
    {
      q: 'How can I book an appointment with Dr. Mazhar Rafique?',
      a: `You can call ${businessConfig.phone} or send a WhatsApp message to book a consultation at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: 'Can I contact the clinic through WhatsApp?',
      a: `Yes. You can ask about an appointment on WhatsApp at ${businessConfig.phone}.`
    },
    {
      q: 'When should a child with a limp receive urgent medical care?',
      a: 'Get urgent care if the child has a fever, will not put any weight on the leg, has a hot, red or swollen joint, has severe pain, has had an injury, or the leg looks out of shape. Do not wait for a routine appointment.'
    }
  ];

  return (
    <div className="bg-white text-[#111111] font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Baby className="w-3.5 h-3.5 text-[#BE8C1D]" />
              FOOT, ANKLE & CHILDREN’S ORTHOPAEDIC CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Foot, Ankle & Paediatric Orthopaedics in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Foot and ankle problems can affect how you walk, balance and get through your day. Children can also have bone, joint or walking concerns, and many of these are a normal part of growing up. Some conditions improve with non-surgical care. The right treatment depends on the condition, the age and the needs of each person.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#BE8C1D] hover:bg-[#a67a18] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Appointment ({businessConfig.phone})</span>
              </a>
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Consultations and evaluations at BNI - Bashir NeuroSpine Institute, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* S01 & S02 — UNDERSTANDING CARE & ANATOMY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Understanding Foot, Ankle and Children’s Orthopaedic Care
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                This clinical category brings together two closely connected areas of orthopaedics: adult foot and ankle conditions (such as sprains, instability, fractures and deformities) and paediatric orthopaedics, which focuses on the unique biology of children’s growing bones, joints and development.
              </p>
              <p>
                Whether you are an adult experiencing persistent ankle pain or a parent wondering if your child's walking pattern is typical, orthopaedic evaluation provides clarity. Explore our full clinical scope on the <Link to="/services/" className="text-[#BE8C1D] underline font-medium">services overview</Link>.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Do Your Feet and Ankles Help You Move?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Each foot and ankle is an intricate engineering marvel composed of 26 bones, 33 joints, and over 100 muscles, tendons and ligaments working in harmonious synchrony:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1">Ankle Mortise & Subtalar Joint</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The talus fits into the tibia and fibula socket for up-and-down hinge motion (dorsiflexion/plantarflexion), while the subtalar joint underneath allows side-to-side tilting over uneven ground.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1">Arches & Plantar Fascia</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The longitudinal and transverse arches act like shock-absorbing leaf springs that cushion impact upon heel strike and stiffen for efficient propulsion.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1">Ligaments & Joint Capsules</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The lateral ligament complex (ATFL, CFL, PTFL) prevents inward rolling, while the strong medial deltoid ligament protects against outward collapse.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1">Achilles & Tibial Tendons</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The robust Achilles tendon transfers calf power for walking and running, while the posterior tibial tendon maintains the structural height of the medial arch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S03, S04, S05 — COMMON ADULT FOOT & ANKLE CONDITIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03, S04 & S05</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Common Conditions Affecting the Foot & Ankle
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Adult foot and ankle pain frequently arises from a blend of acute sports trauma, degenerative arthritis, structural foot shapes, or chronic overuse:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Foot Conditions</h3>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                    <li><Link to="/bunions-treatment/" className="text-[#BE8C1D] underline font-medium">Bunions (Hallux Valgus)</Link> causing big toe joint pain and crowding</li>
                    <li>Plantar fasciitis and severe chronic heel pain</li>
                    <li>Hammer toes, claw toes, and metatarsalgia</li>
                    <li>Midfoot osteoarthritis and adult acquired flatfoot deformity</li>
                    <li>Stress fractures of the metatarsals</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Ankle Conditions</h3>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Lateral ankle sprains and chronic ankle instability</li>
                    <li>Bimalleolar and trimalleolar ankle fractures</li>
                    <li>Achilles tendonitis, tendinosis and complete ruptures</li>
                    <li>Peroneal tendon subluxation and tears</li>
                    <li>End-stage ankle osteoarthritis requiring fusion or reconstruction</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 pt-2">
                Learn more about specific procedures on our dedicated <Link to="/foot-ankle-surgery/" className="text-[#BE8C1D] underline font-semibold">Foot and Ankle Surgery page</Link> or book an in-person <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S06, S07, S08, S09, S10 — SPRAINS, FRACTURES, TENDONS, BUNIONS, FLAT FEET */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S06 TO S10</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Key Foot & Ankle Problems Explained
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Ankle Sprains & Chronic Instability</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Most simple ankle sprains heal cleanly with protection and physical therapy. However, when torn ligaments heal in a lengthened, lax position, the ankle can develop chronic instability ("giving way"). See our <Link to="/sports-injury-treatment/" className="text-[#BE8C1D] underline font-medium">sports injury care</Link> for details on athletic recovery.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Foot and Ankle Fractures</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fractures can range from hairline cracks in toe bones to displaced fractures of the malleoli or heel bone (calcaneus). While non-displaced breaks heal in a cast or boot, unstable joint fractures may require surgical alignment. Read more on <Link to="/fracture-treatment/" className="text-[#BE8C1D] underline font-medium">fracture treatment</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Achilles & Peroneal Tendon Disorders</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  The Achilles tendon can develop painful chronic degeneration or rupture suddenly during sporting bursts. Treatment choices range from functional casting and boot protocols to surgical repair.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Bunions (Hallux Valgus)</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  A bunion is a structural deformity where the first metatarsal shifts outward while the big toe turns inward. Wide footwear and toe spacers relieve pressure; corrective osteotomy is considered when pain limits daily walking. Visit <Link to="/bunions-treatment/" className="text-[#BE8C1D] underline font-medium">Bunions Treatment</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#111111] mb-1">Flat Feet: When Are They a Problem?</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  In young children, flexible flat feet (where an arch appears when standing on tiptoes) are normal and painless. In contrast, rigid flat feet (where the arch never forms and the foot is stiff) or adult acquired flatfoot caused by tendon dysfunction require clinical assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S11, S12 — PAEDIATRIC ORTHOPAEDICS & CLUBFOOT */}
      <section className="py-12 border-b border-[#E8E5DE] bg-emerald-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11 & S12</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Paediatric Orthopaedics & Clubfoot Management
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                <strong>Children are not simply small adults.</strong> Their growing skeleton has open growth plates (physis), thick periosteum, and remarkable biological remodeling potential. Paediatric orthopaedics specializes in guiding normal developmental alignment and treating congenital conditions gently.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] my-4">
                <h3 className="font-bold text-base text-[#111111] mb-2 flex items-center gap-2">
                  <Baby className="w-5 h-5 text-[#BE8C1D]" />
                  What Is Clubfoot (Talipes Equinovarus)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Clubfoot is a congenital condition present at birth where one or both feet turn inward and downward. It is not painful to the newborn baby, but early evaluation within the first weeks of life is critical to achieve normal foot flexibility before the child begins standing.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong>The Ponseti Method:</strong> The gold standard international non-surgical treatment:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Serial Gentle Casting:</strong> Weekly gentle stretching and plaster casts that progressively correct alignment over 4–6 weeks.</li>
                    <li><strong>Achilles Tenotomy:</strong> A minor outpatient needle release of the tight heel cord under local anaesthetic in most infants.</li>
                    <li><strong>Bracing Protocol:</strong> Wearing a foot abduction brace (boots and bar) full-time for 3 months, then during nights and naps until age 4–5 to prevent relapse.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S13 — CHILDHOOD WALKING PATTERNS COMPARISON TABLE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S13</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Should Parents Worry About How a Child Walks?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Toddlers and young children frequently exhibit walking variations as part of normal neuromuscular growth. Use this comparison table to differentiate normal developmental milestones from signs that warrant orthopaedic examination:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E5DE] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold text-slate-800 w-1/2">Walking Pattern: Often Normal</th>
                    <th className="p-3.5 font-bold text-slate-800 w-1/2">Signs Worth an Assessment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE]">
                  <tr>
                    <td className="p-3.5 text-slate-700">Both feet and legs look symmetrical; child plays and runs happily without complaint.</td>
                    <td className="p-3.5 text-slate-700 font-medium text-amber-900">One side is noticeably different from the other (asymmetry).</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-700">Intoeing ("pigeon toes") or out-toeing that steadily improves month by month as the child grows.</td>
                    <td className="p-3.5 text-slate-700 font-medium text-amber-900">Walking pattern is worsening, causing frequent tripping or not improving past expected age.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-700">No pain, no swelling, and no limp present during walking or running.</td>
                    <td className="p-3.5 text-slate-700 font-medium text-amber-900">Child complains of leg/foot pain, tires unusually quickly, or develops a noticeable limp.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-700">Intermittent tiptoe walking in toddlers exploring new movement sensations.</td>
                    <td className="p-3.5 text-slate-700 font-medium text-amber-900">Persistent tiptoe walking where the child is physically unable to place heels flat on the floor.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-700">Motor skills and balance steadily improve over time.</td>
                    <td className="p-3.5 text-slate-700 font-medium text-amber-900">Regression in walking milestones or child suddenly stops wanting to walk or stand.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              If you have concerns about your child's walking, an orthopaedic check can offer reassurance. Book an appointment for an <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* S14, S15 — BOW LEGS, KNOCK KNEES & GROWTH PLATES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S14</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Bow Legs & Knock Knees
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                <p>
                  <strong>Bow legs (Genu Varum):</strong> Very common in infants and toddlers up to age 2. Most naturally straighten as walking develops.
                </p>
                <p>
                  <strong>Knock knees (Genu Valgum):</strong> Commonly develops around age 3 to 5, resolving into normal adult alignment by age 7 to 8.
                </p>
                <p className="text-slate-500 text-xs">
                  *Check recommended if bowing is severe, only on one side, or accompanied by short stature (to rule out rickets or Blount disease).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S15</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Growth Plate Injuries
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                <p>
                  Growth plates (physes) are specialized cartilage zones near bone ends where longitudinal bone elongation occurs.
                </p>
                <p>
                  Because cartilage is weaker than adjacent bone or ligaments, fractures often involve the growth plate (Salter-Harris fractures). Prompt assessment ensures bones continue growing straight and equal in length.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S16 — WHEN TO SEE A DOCTOR & RED FLAGS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              When Should You See an Orthopaedic Doctor?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mb-6">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-2 font-semibold">For Adults:</strong>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                  <li>Inability to bear weight on the foot or ankle after a fall or twist</li>
                  <li>Persistent swelling, bruising or ankle giving way repeatedly</li>
                  <li>Severe bunion pain that prevents wearing normal shoes</li>
                  <li>Pain or tingling that wakes you up at night</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <strong className="block text-[#111111] mb-2 font-semibold">For Children:</strong>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                  <li>Unexplained limp or refusal to put weight on a leg</li>
                  <li>Noticeable asymmetry between left and right legs</li>
                  <li>Persistent stiffness or swelling in any joint</li>
                  <li>Infant born with an inward turned foot (clubfoot check)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
              <h3 className="font-bold text-xs sm:text-sm text-rose-900 mb-1 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-700" /> Urgent Paediatric Warning Signs
              </h3>
              <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
                If a child has a limp accompanied by a <strong>fever</strong>, refuses to bear weight, has a hot, swollen joint, or looks unwell, seek urgent emergency hospital medical care immediately to rule out septic arthritis or bone infection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S17, S18, S19 — DIAGNOSIS, NON-SURGICAL & SURGICAL CARE */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17, S18 & S19</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Diagnosis and Balanced Treatment Pathways
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Evaluation begins with an attentive conversation, clinical examination and gait observation. Imaging is chosen judiciously — many developmental concerns do not require radiation. When needed, digital weight-bearing X-rays, ultrasound or MRI provide clear views of joint alignment and soft tissues.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">Non-Surgical Care First</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The majority of conditions improve with rest, activity modification, supportive footwear, custom orthotic insoles, targeted physical therapy, or protective boots.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <strong className="block text-[#111111] mb-1 font-semibold">When Surgery Is Considered</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Surgery is reserved for displaced fractures, severe persistent ligament instability, painful bony bunions, or clubfoot cases resistant to serial casting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S20 — 3 CHILD TREATMENT CARDS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Foot, Ankle & Paediatric Treatments
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Choose the dedicated page that best matches your specific orthopaedic concern:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E5DE] shadow-xs hover:border-[#BE8C1D] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">Adult Care</span>
                <h3 className="text-lg font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Foot and Ankle Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Learn how selected foot and ankle conditions, injuries, tendon ruptures and deformities are assessed and treated, and when surgery may be discussed.
                </p>
              </div>
              <Link
                to="/foot-ankle-surgery/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BE8C1D] hover:underline mt-auto"
              >
                <span>Explore Foot & Ankle Surgery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E5DE] shadow-xs hover:border-[#BE8C1D] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">Deformity Correction</span>
                <h3 className="text-lg font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Bunions Treatment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Find out what bunion symptoms look like, how footwear changes ease pain, and when surgical osteotomy correction may be considered.
                </p>
              </div>
              <Link
                to="/bunions-treatment/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BE8C1D] hover:underline mt-auto"
              >
                <span>Explore Bunions Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E5DE] shadow-xs hover:border-[#BE8C1D] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block mb-1">Children's Orthopaedics</span>
                <h3 className="text-lg font-bold text-[#111111] mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Paediatric Orthopaedic Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Read about children’s bone and joint concerns, including clubfoot Ponseti method, walking abnormalities, and growth-related conditions.
                </p>
              </div>
              <Link
                to="/paediatric-orthopaedic-surgery/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BE8C1D] hover:underline mt-auto"
              >
                <span>Explore Paediatric Care</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — DOCTOR PROFILE & 5 RELATED LINKS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE] shadow-xs">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Consultant Orthopaedic Surgeon in Lahore
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FAF8F2] border border-[#BE8C1D]/30 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-12 h-12" />
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-700">
                <p>
                  <strong>Dr. Mazhar Rafique</strong> is an experienced Consultant Orthopaedic Surgeon in Lahore, practicing at BNI - Bashir NeuroSpine Institute, Shadman. He provides compassionate, balanced care for adult limb problems and developmental paediatric concerns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>M.B.B.S. & F.C.P.S. (Orthopaedic Surgery)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>Certified ATLS® (Advanced Trauma Life Support)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>Fellowship in Arthroplasty & Joint Reconstruction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                    <span>BNI - Bashir NeuroSpine Institute, Shadman, Lahore</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-[#111111] mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Related Clinical Services:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/joint-replacement-surgery/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Joint Replacement Surgery
                </h4>
                <p className="text-xs text-slate-600">Primary and partial hip and knee reconstruction.</p>
              </Link>
              <Link to="/sports-injury-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Sports Injury Treatment
                </h4>
                <p className="text-xs text-slate-600">Ligament reconstruction and athletic rehabilitation.</p>
              </Link>
              <Link to="/fracture-treatment/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Fracture Care
                </h4>
                <p className="text-xs text-slate-600">Splints, casting, reduction and bone healing follow-up.</p>
              </Link>
              <Link to="/orthopaedic-trauma-surgery/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Orthopaedic Trauma
                </h4>
                <p className="text-xs text-slate-600">High-energy complex fractures and staged reconstruction.</p>
              </Link>
              <Link to="/orthopaedic-consultation/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  Orthopaedic Consultation
                </h4>
                <p className="text-xs text-slate-600">In-person clinical evaluation in Shadman, Lahore.</p>
              </Link>
              <Link to="/about/" className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] transition-all group">
                <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#BE8C1D] transition-colors mb-1">
                  About Dr. Mazhar Rafique
                </h4>
                <p className="text-xs text-slate-600">Full qualifications, surgical philosophy and experience.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S22 — ARRANGE AN ORTHOPAEDIC CONSULTATION */}
      <section className="py-12 border-b border-[#E8E5DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Arrange an Orthopaedic Consultation in Lahore
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Adults with foot or ankle concerns and parents seeking an evaluation for a child’s bone, joint or walking concern can arrange a consultation at BNI - Bashir NeuroSpine Institute, Lahore.
          </p>

          <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] text-xs sm:text-sm text-slate-700 max-w-xl mx-auto mb-8 text-left">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <div>
                <strong>Clinic Address:</strong> {businessConfig.fullAddress}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={businessConfig.callUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#BE8C1D] hover:bg-[#a67a18] text-white font-semibold text-sm transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call for Appointment ({businessConfig.phone})</span>
            </a>
            <a
              href={businessConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp Appointment</span>
            </a>
          </div>
          <p className="text-xs text-rose-700 font-semibold mt-4">
            Safety Note: Severe trauma, sudden loss of limb circulation, or a child with fever and a painful limp requires emergency medical attention rather than a routine visit.
          </p>
        </div>
      </section>

      {/* B5 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">B5 — FAQS & TRUST</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Foot, Ankle & Paediatric Orthopaedics
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Helpful answers for adult foot concerns and children’s developmental bone questions.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E8E5DE] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-[#111111] hover:text-[#BE8C1D] transition-colors"
                  >
                    <span className="pr-4">{idx + 1}. {faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#BE8C1D]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK APPOINTMENT MODAL */}
      <QuickAppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </div>
  );
};
