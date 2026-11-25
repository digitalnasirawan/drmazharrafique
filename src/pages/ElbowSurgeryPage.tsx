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
  Clock, 
  FileText,
  Layers,
  Zap,
  Check,
  Flame,
  Info
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuickAppointmentModal } from '../components/cta/QuickAppointmentModal';

export const ElbowSurgeryPage: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is elbow surgery?",
      a: "Elbow surgery is a group of operations that treat problems of the bones, joints, tendons, ligaments or nerves around the elbow. There are many kinds. The right one, if any, depends on your specific diagnosis and functional needs."
    },
    {
      q: "What conditions may need elbow surgery?",
      a: "Some fractures that have moved out of place, an elbow joint that keeps slipping or giving way, certain ligament tears, severe ulnar nerve compression, significant arthritis, and lasting tendon pain that has not improved with prolonged non-surgical care may need surgery. Most elbow problems do not require surgery."
    },
    {
      q: "What causes elbow pain?",
      a: "Common causes include tendon overuse (tennis elbow on the outside and golfer's elbow on the inside), injuries such as fractures and dislocations, ligament sprains, ulnar nerve entrapment, and arthritis. An orthopaedic doctor needs to examine your elbow to determine the exact cause."
    },
    {
      q: "What is tennis elbow?",
      a: "Tennis elbow causes pain on the outer side of the elbow when the extensor tendons attached to the lateral epicondyle are irritated or overloaded by repetitive gripping or wrist extension. Doctors call it lateral epicondylitis."
    },
    {
      q: "What is golfer's elbow?",
      a: "Golfer's elbow causes pain on the inner side of the elbow where wrist flexor tendons attach to the medial epicondyle. Doctors call it medial epicondylitis."
    },
    {
      q: "Does tennis elbow usually need surgery?",
      a: "No. The vast majority of people with tennis elbow recover without surgery. Clinical studies show that 80% to 90% of patients improve within 6 to 12 months with rest, physiotherapy, counterforce braces, and activity modifications. Surgery is reserved for severe pain lasting over 6–12 months that fails good conservative treatment."
    },
    {
      q: "What happens when the elbow dislocates?",
      a: "The forearm bones move completely out of their normal articulation with the upper arm bone. The elbow is intensely painful and visibly deformed. It is an emergency. A doctor takes an X-ray, reduces the joint under sedation or anaesthesia, and stabilizes it in a splint. Do not try to push it back into place yourself."
    },
    {
      q: "Do all elbow fractures need surgery?",
      a: "No. Some fractures (such as non-displaced radial head fractures) stay in good alignment and heal well in a sling or protective splint. Fractures that are displaced, fragmented, or unstable (such as olecranon fractures) typically require surgical fixation with plates and screws."
    },
    {
      q: "What is elbow instability?",
      a: "Instability is an abnormal loose feeling where the elbow feels like it is about to slip, catch, or pop out of socket during daily movements. It often follows a past dislocation or severe ligament rupture."
    },
    {
      q: "What is cubital tunnel syndrome?",
      a: "It occurs when the ulnar nerve is compressed or stretched as it passes behind the inner bump of the elbow (the medial epicondyle). It causes numbness and tingling in the little finger and half of the ring finger, and sometimes progressive hand weakness."
    },
    {
      q: "Can elbow nerve compression cause hand numbness?",
      a: "Yes. Squeezing of the ulnar nerve at the elbow causes numbness in the little and ring fingers. Carpal tunnel syndrome at the wrist affects the thumb, index, and middle fingers. An orthopaedic exam accurately pinpoints which nerve is trapped."
    },
    {
      q: "How are elbow conditions diagnosed?",
      a: "A doctor asks about your symptom history, examines elbow carrying angle and swelling, palpates tendon origins, checks ligament stability, tests ulnar nerve sensitivity, and orders targeted tests such as X-rays or MRI when needed."
    },
    {
      q: "Do I need an MRI?",
      a: "Not always. Most acute injuries and bone problems are diagnosed with standard X-rays. An MRI is helpful when ligament tears, tendon ruptures, or occult joint issues need clarification before planning surgery."
    },
    {
      q: "Can elbow problems improve without surgery?",
      a: "Yes, many do. Rest from aggravating tasks, targeted physiotherapy, counterforce braces, short courses of anti-inflammatory medications, and supervised injections help the majority of patients heal without surgery."
    },
    {
      q: "When might surgery be considered?",
      a: "Surgery may be discussed for displaced fractures, persistent joint instability, complete ligament tears, severe ulnar nerve compression causing hand weakness, or chronic tendon pain unresponsive to 6–12 months of conservative treatment."
    },
    {
      q: "What are the possible risks?",
      a: "Risks include wound infection, bleeding, post-operative elbow stiffness, nerve or blood vessel injury, delayed bone union, persistent instability, and the potential need for further procedures. Your surgeon will explain risks specific to your case."
    },
    {
      q: "How long does recovery take?",
      a: "Recovery depends on the underlying injury and whether surgery was performed. Soft-tissue healing and bone consolidation usually take 6 to 12 weeks, while full strength and athletic motion can take several months of progressive therapy."
    },
    {
      q: "Will I need physiotherapy?",
      a: "Yes. The elbow joint is particularly susceptible to stiffness after trauma or surgery. Supervised physiotherapy is essential to regain bending, straightening, and forearm rotation safely."
    },
    {
      q: "When can I return to work or sports?",
      a: "Desk work may be possible within 1 to 2 weeks. Heavy manual labour, throwing sports, and forceful lifting require clearance from your surgeon, often taking 3 to 6 months depending on the procedure."
    },
    {
      q: "How can I book an appointment with Dr. Mazhar Rafique?",
      a: `You can call ${businessConfig.phone} or send a WhatsApp message to arrange an orthopaedic evaluation with Dr. Mazhar Rafique at ${businessConfig.clinicName}, Lahore.`
    },
    {
      q: "Can I contact the clinic through WhatsApp?",
      a: `Yes. You can send a WhatsApp message to ${businessConfig.phone} to inquire about appointments. For an acute traumatic injury or suspected dislocation, please visit an emergency department immediately.`
    }
  ];

  return (
    <div className="bg-[#FAF8F2] text-slate-800 font-['Raleway',sans-serif]">
      {/* B3 — HERO SECTION */}
      <section className="bg-white border-b border-[#E8E5DE] pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-4">
              <Activity className="w-3.5 h-3.5" />
              ELBOW PAIN, INJURY & SURGICAL CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 tracking-tight" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Elbow Surgery in Lahore
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Elbow problems can make it hard to bend, straighten, lift and do daily tasks. Injuries may involve bones, joints, tendons, ligaments or nerves. Many conditions improve without surgery. Some injuries or lasting problems need a surgeon&apos;s assessment, and you can call or send a WhatsApp message to arrange one in Lahore.
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
          </div>
        </div>
      </section>

      {/* S01 — HOW DOES YOUR ELBOW WORK? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              How Does Your Elbow Work?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                The elbow is both a hinge joint and a pivot joint. Three bones connect here: the upper arm bone (humerus) and the two forearm bones (radius on the thumb side and ulna on the little-finger side).
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Two Coordinated Motions</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Hinge Motion:</strong> Bending (flexion) and straightening (extension).<br />
                    <strong>Pivot Motion:</strong> Turning your palm upward (supination) and downward (pronation).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                  <h3 className="font-bold text-sm text-[#111111] mb-1">Ligaments & The Ulnar Nerve</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Strong collateral ligaments on the inner and outer sides prevent sideways buckling. The <strong>ulnar nerve</strong> runs right behind the inner elbow bump (the medial epicondyle)—often called the &quot;funny bone.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S02 — COMMON PROBLEMS OVERVIEW */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S02</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            Common Problems That Affect the Elbow
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            Because different elbow conditions can present with similar pain and movement limitation, understanding the underlying cause is the first step toward recovery:
          </p>
          <div className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Condition</th>
                    <th className="p-3 sm:p-4 font-bold">What It Involves</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Tennis Elbow</td>
                    <td className="p-3 sm:p-4">Overload irritation of extensor tendons on the outer elbow bump (lateral epicondylitis).</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Golfer&apos;s Elbow</td>
                    <td className="p-3 sm:p-4">Irritation of wrist flexor tendons on the inner elbow bump (medial epicondylitis).</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Elbow Fractures</td>
                    <td className="p-3 sm:p-4">Breaks of the olecranon, radial head, or distal humerus from falls or impacts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Elbow Dislocation</td>
                    <td className="p-3 sm:p-4">Bones forced out of socket; emergency joint reduction and ligament evaluation needed.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Ligament Injuries</td>
                    <td className="p-3 sm:p-4">Sprains or tears of the medial collateral (UCL) or lateral ulnar collateral (LUCL) ligaments.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Elbow Instability</td>
                    <td className="p-3 sm:p-4">Persistent sensation of the joint slipping, clicking, or giving way under load.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Cubital Tunnel Syndrome</td>
                    <td className="p-3 sm:p-4">Ulnar nerve compression causing numbness in little and ring fingers and weak pinch.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Elbow Arthritis & Stiffness</td>
                    <td className="p-3 sm:p-4">Cartilage degeneration and bone spurs causing loss of bending and extension.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            For general limb conditions, see our <Link to="/upper-limb-surgery/" className="text-[#BE8C1D] underline font-medium">shoulder, hand & upper limb surgery overview</Link>.
          </p>
        </div>
      </section>

      {/* S03 & S04 — TENNIS ELBOW & GOLFER'S ELBOW */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S03</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is Tennis Elbow? (Lateral Epicondylitis)
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Tennis elbow causes sharp or aching pain on the outside of the elbow. It occurs when the tendon of the <em>extensor carpi radialis brevis</em> (ECRB) develops micro-tears from repetitive wrist extension and forceful gripping.
              </p>
              <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] text-xs text-slate-600 leading-relaxed mb-3">
                <strong>Non-Surgical Resolution:</strong> Over 80% to 90% of tennis elbow cases resolve completely within 6 to 12 months with physiotherapy, counterforce forearm braces, activity adjustments, and eccentric loading exercises. Surgery is only discussed when severe pain persists for 6–12 months despite comprehensive therapy.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S04</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is Golfer&apos;s Elbow? (Medial Epicondylitis)
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Golfer&apos;s elbow affects the tendons on the inside bump of the elbow. It stems from repetitive wrist flexion, heavy lifting, throwing, or forceful forearm twisting.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Like tennis elbow, non-surgical management is the primary approach. Gentle stretching, wrist flexor strengthening, targeted ice massage, and modifying equipment or manual techniques restore function in the majority of patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S05 & S06 — FRACTURES & DISLOCATION WARNING */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S05</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Happens When an Elbow Bone Breaks?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Elbow fractures commonly affect the <strong>radial head</strong> (at the outer elbow), the <strong>olecranon</strong> (the bony point of the elbow), or the <strong>distal humerus</strong>. Most happen during a fall onto an outstretched hand or direct high-energy trauma.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Undisplaced fractures heal well in a sling with early controlled movement to prevent stiffness. Displaced or fragmented fractures require anatomical open reduction and internal fixation (ORIF) with low-profile titanium plates and screws. Learn more on our <Link to="/bone-fracture-repair/" className="text-[#BE8C1D] underline font-medium">bone fracture repair page</Link>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">SECTION S06 — URGENT TRAUMA</span>
                  <h3 className="font-bold text-base text-rose-900 mt-1 mb-2">What Is an Elbow Dislocation?</h3>
                  <p className="text-xs sm:text-sm text-rose-800 leading-relaxed mb-3">
                    An elbow dislocation occurs when severe trauma forces the forearm bones out of alignment with the humerus. The joint looks visibly deformed and causes extreme pain.
                  </p>
                  <div className="p-3 rounded-lg bg-rose-100/70 border border-rose-300 font-bold text-xs text-rose-900 mb-2">
                    CRITICAL WARNING: Do not attempt to push, pull, or force the elbow back into place yourself! Improper manipulation can crush or sever major arteries and nerves running right across the joint.
                  </div>
                  <p className="text-xs text-rose-800 leading-relaxed">
                    Seek immediate emergency hospital care. A doctor performs X-rays to rule out associated fractures, performs closed joint reduction under appropriate analgesia or sedation, and checks pulses and nerve function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S07 & S08 — LIGAMENT INJURIES & INSTABILITY */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S07</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Is an Elbow Ligament Injury?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Ligaments are tough fibrous bands that connect bones together and stabilize the elbow hinge:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Medial Collateral Ligament (UCL):</strong> Resists stress on the inner elbow. Often injured in throwing athletes or after dislocations.</li>
                <li><strong>Lateral Collateral Ligament (LUCL):</strong> Keeps the radial head securely seated. Tearing causes the elbow to slide backward out of socket.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S08</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                What Causes Elbow Instability?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                When ligaments fail to heal after a dislocation or severe sprain, the joint can become chronically unstable (such as <em>posterolateral rotatory instability</em>).
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Patients describe a recurrent feeling that the elbow is &quot;slipping&quot; when pushing up from an armrest. Surgical ligament reconstruction may be indicated to restore joint stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S09 — CUBITAL TUNNEL VS CARPAL TUNNEL COMPARISON */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S09</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            What Is Cubital Tunnel Syndrome?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            Cubital tunnel syndrome occurs when the <strong>ulnar nerve</strong> is pinched or irritated as it travels through a narrow fibrous tunnel behind the inner elbow. Frequent elbow bending (such as holding a phone or sleeping with arms curled tightly) increases tension on the nerve.
          </p>
          <div className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold">Feature</th>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Cubital Tunnel Syndrome</th>
                    <th className="p-3 sm:p-4 font-bold text-slate-800">Carpal Tunnel Syndrome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Nerve Involved</td>
                    <td className="p-3 sm:p-4">Ulnar nerve</td>
                    <td className="p-3 sm:p-4">Median nerve</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Site of Entrapment</td>
                    <td className="p-3 sm:p-4">Behind the inner elbow (cubital tunnel)</td>
                    <td className="p-3 sm:p-4">At the base of the palm / wrist</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Fingers Affected</td>
                    <td className="p-3 sm:p-4">Little finger and outer half of ring finger</td>
                    <td className="p-3 sm:p-4">Thumb, index, middle, and inner ring finger</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Aggravating Posture</td>
                    <td className="p-3 sm:p-4">Elbow kept bent (sleeping curled, holding phone)</td>
                    <td className="p-3 sm:p-4">Wrist bent forward or backward at night</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Motor Weakness</td>
                    <td className="p-3 sm:p-4">Weak finger pinch, difficulty spreading fingers</td>
                    <td className="p-3 sm:p-4">Weak thumb abduction, dropping glasses/keys</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Learn more about wrist nerve compression on our <Link to="/carpal-tunnel-release/" className="text-[#BE8C1D] underline font-medium">carpal tunnel release page</Link>.
          </p>
        </div>
      </section>

      {/* S10, S11 & S12 — ARTHRITIS, SYMPTOMS & EMERGENCY BOX */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S10</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Can Arthritis Cause Elbow Pain and Stiffness?
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                While less common than in knees or hips, arthritis can affect the elbow—often after severe past injuries (post-traumatic arthritis) or from rheumatoid disease. Cartilage wears thin, bone spurs form, and the joint capsule thickens.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Initial care consists of gentle range-of-motion therapy, warm compresses, and non-steroidal anti-inflammatories. When stiffness severely impairs bringing the hand to the mouth, surgical capsular release or joint debridement may be considered.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S11</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Common Signs of an Elbow Problem
              </h2>
              <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">Outer elbow pain when lifting objects.</div>
                <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">Inner elbow ache spreading into the forearm.</div>
                <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">Swelling or fluid pocket on the elbow tip.</div>
                <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">Inability to fully straighten or bend the arm.</div>
                <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">Clicking, catching, or popping sensations.</div>
                <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE]">Numbness in the little and ring fingers.</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">SECTION S12 — EMERGENCY ALERT</span>
                  <h3 className="font-bold text-base text-rose-900 mt-1 mb-2">When Is an Elbow Injury an Emergency?</h3>
                  <p className="text-xs sm:text-sm text-rose-800 leading-relaxed mb-2">
                    Seek immediate emergency hospital medical evaluation if you experience:
                  </p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-rose-800 space-y-1 mb-2">
                    <li>Visible joint deformity or bone protruding through broken skin.</li>
                    <li>Hand or fingers turning cold, pale, bluish, or losing sensation.</li>
                    <li>Loss of pulse at the wrist (compromised radial artery blood flow).</li>
                    <li>Severe numbness and paralysis of the fingers after elbow trauma.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S13 & S14 — CLINICAL CHECK & 5-ROW IMAGING TABLE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTIONS S13 & S14</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            How Are Elbow Conditions Diagnosed?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            A structured clinical examination evaluates joint alignment, tenderness, active range of motion, and nerve function. Diagnostic tests are ordered selectively based on examination findings:
          </p>
          <div className="bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white border-b border-[#E8E5DE] text-slate-800">
                  <tr>
                    <th className="p-3 sm:p-4 font-bold text-[#BE8C1D]">Test</th>
                    <th className="p-3 sm:p-4 font-bold">What It Shows</th>
                    <th className="p-3 sm:p-4 font-bold">When It Is Indicated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DE] text-slate-700">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">X-Rays (Radiographs)</td>
                    <td className="p-3 sm:p-4">Bones, fracture lines, joint alignment, and arthritis bone spurs.</td>
                    <td className="p-3 sm:p-4">First-line test after trauma, suspected fracture, or long-standing stiffness.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">MRI Scan</td>
                    <td className="p-3 sm:p-4">Ligament tears (UCL/LUCL), biceps/triceps tendon ruptures, cartilage defects.</td>
                    <td className="p-3 sm:p-4">When soft-tissue rupture is suspected or when surgical repair is planned.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Ultrasound</td>
                    <td className="p-3 sm:p-4">Tendon structure, tears, bursitis, and dynamic ulnar nerve snapping.</td>
                    <td className="p-3 sm:p-4">Helpful for in-clinic tendon evaluation and guided therapeutic injections.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">CT Scan</td>
                    <td className="p-3 sm:p-4">3D cross-sectional architecture of complex joint fractures.</td>
                    <td className="p-3 sm:p-4">Critical for surgical planning of complex intra-articular elbow fractures.</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-[#111111]">Nerve Conduction (NCS)</td>
                    <td className="p-3 sm:p-4">Electrical conduction speed and latency across the cubital tunnel.</td>
                    <td className="p-3 sm:p-4">Indicated for persistent little-finger numbness or motor hand weakness.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-600">
            For details on scheduling an evaluation, visit our <Link to="/orthopaedic-consultation/" className="text-[#BE8C1D] underline font-medium">orthopaedic consultation overview</Link>.
          </p>
        </div>
      </section>

      {/* S15, S16 & S17 — TREATMENT PATHWAYS & SURGICAL TYPES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S15</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Non-Surgical Treatment
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Activity Modifications:</strong> Avoiding aggravating repetitive arm motions and gripping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Targeted Physiotherapy:</strong> Eccentric muscle strengthening and joint range-of-motion work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bracing & Splints:</strong> Counterforce forearm straps for tennis elbow; nocturnal extension splints for cubital tunnel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Supervised Injections:</strong> Localised anti-inflammatory injections for acute severe bursitis or tendinopathy.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S16</span>
              <h2 className="text-xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                When Might Surgery Be Considered?
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span>Displaced, unstable, or intra-articular elbow fractures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span>Recurrent joint instability or complete collateral ligament tears.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span>Severe ulnar nerve entrapment causing progressive muscle wasting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE8C1D] mt-2 shrink-0"></span>
                  <span>Chronic tendon pain failing 6–12 months of structured non-surgical care.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S17</span>
            <h2 className="text-2xl font-bold text-[#111111] mt-1 mb-4" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Overview of Surgical Procedure Types
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] mb-1">1. Fracture Fixation (ORIF)</h3>
                <p className="text-slate-600">Realignment and rigid plating of olecranon, radial head, or distal humerus breaks.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] mb-1">2. Ligament Repair / Reconstruction</h3>
                <p className="text-slate-600">Restoring joint stability using suture anchors or tendon grafts (UCL / LUCL surgery).</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] mb-1">3. Ulnar Nerve Decompression</h3>
                <p className="text-slate-600">Releasing compressive tissue or transposing the nerve forward out of the cubital groove.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] mb-1">4. Elbow Arthroscopy</h3>
                <p className="text-slate-600">Minimally invasive keyhole inspection to remove loose bone bodies and smooth cartilage.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] mb-1">5. Tendon Debridement / Release</h3>
                <p className="text-slate-600">Excision of diseased degenerative tissue in chronic refractory tennis or golfer&apos;s elbow.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
                <h3 className="font-bold text-[#111111] mb-1">6. Capsular Release / Arthroplasty</h3>
                <p className="text-slate-600">Releasing fibrotic contractures or joint replacement for end-stage arthritis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S18, S19 & S20 — PREPARATION, RISKS & RECOVERY */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S18</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Preparing for Surgery</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                General pre-operative medical review, blood thinner protocol, sling arrangement, and organizing help for two-handed tasks during initial recovery.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S19</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Benefits & Risks</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aims to restore joint stability and relieve pain. Potential risks include post-operative stiffness, infection, nerve irritation, and prolonged bone healing.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE]">
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S20</span>
              <h3 className="font-bold text-base text-[#111111] mt-1 mb-2">Recovery Process</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dressings kept dry, initial limb elevation to reduce swelling, early protected finger motion, and transitioning from splint to active movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S21 — WHY IS REHABILITATION CRUCIAL? */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S21</span>
            <h2 className="text-2xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Why Is Rehabilitation Crucial After Elbow Surgery?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                The elbow joint has a notorious biological tendency to develop severe contracture and stiffness if kept immobilised for too long. For this reason, modern orthopaedic elbow surgery emphasizes rigid surgical stability that permits <strong>early controlled movement</strong>.
              </p>
              <p>
                A structured physical therapy program gradually restores full extension (straightening) and flexion (bending), followed by progressive forearm rotation and muscle strengthening. Patient dedication to daily home exercises is essential for the best possible outcome.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Explore more recovery guidance on our <Link to="/patient-education/" className="text-[#BE8C1D] underline font-medium">patient education portal</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S22 — ABOUT DR. MAZHAR RAFIQUE */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F2] rounded-2xl p-6 sm:p-8 border border-[#E8E5DE]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#BE8C1D]/10 flex items-center justify-center shrink-0 text-[#BE8C1D]">
                <Stethoscope className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S22</span>
                <h2 className="text-2xl font-bold text-[#111111] mt-1 mb-2" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Consultant Orthopaedic Surgeon in Lahore
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  <strong>Dr. Mazhar Rafique</strong> is a Consultant Orthopaedic Surgeon in Lahore holding verified qualifications: <strong>M.B.B.S.</strong>, <strong>F.C.P.S. (Orthopedic Surgery)</strong>, Certified <strong>ATLS®</strong>, with an advanced <strong>Fellowship in Arthroplasty and Joint Reconstruction</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  With over 10 years of clinical experience in managing limb trauma, sports injuries, and joint disorders, he evaluates patients at {businessConfig.clinicName} on Jail Road, Shadman, Lahore.
                </p>
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#BE8C1D] hover:text-[#936A12]"
                >
                  <span>Learn More About Dr. Mazhar Rafique</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12 border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">RELATED SERVICES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Explore Related Upper Limb & Trauma Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Upper Limb Surgery", path: "/upper-limb-surgery/", desc: "Comprehensive category overview for shoulder, elbow, wrist and hand." },
              { title: "Hand & Wrist Surgery", path: "/hand-wrist-surgery/", desc: "Care for wrist fractures, tendon lacerations and ligament instability." },
              { title: "Carpal Tunnel Release", path: "/carpal-tunnel-release/", desc: "Targeted decompression of the median nerve at the wrist." },
              { title: "Shoulder Surgery", path: "/shoulder-surgery/", desc: "Specialist assessment for rotator cuff tears and impingement." },
              { title: "Bone Fracture Repair", path: "/bone-fracture-repair/", desc: "Anatomical reduction and plating for acute limb fractures." },
              { title: "Orthopaedic Consultation", path: "/orthopaedic-consultation/", desc: "Thorough clinical examination, imaging review, and treatment planning." }
            ].map((srv, idx) => (
              <Link
                key={idx}
                to={srv.path}
                className="p-4 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] transition-colors block"
              >
                <h3 className="font-bold text-sm text-[#111111] mb-1">{srv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S23 — CLINIC LOCATION & FINAL CTA */}
      <section className="py-12 bg-white border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F2] border border-[#E8E5DE] text-center">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">SECTION S23</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1 mb-3" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Get Your Elbow Problem Checked in Lahore
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              If persistent elbow pain, weakness, instability or numbness is interfering with your work or daily activities, arrange an orthopaedic assessment. Dr. Mazhar Rafique will examine your elbow and explain your treatment options in simple words.
            </p>
            <div className="text-xs text-slate-600 mb-6">
              <p className="font-bold text-slate-800">Dr. Mazhar Rafique — {businessConfig.clinicName}</p>
              <p>{businessConfig.fullAddress}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={businessConfig.callUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BE8C1D] text-white font-semibold text-sm hover:bg-[#a67a18] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {businessConfig.phone}</span>
              </a>
              <a
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#BE8C1D] text-[#BE8C1D] hover:bg-[#BE8C1D] hover:text-white font-semibold text-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* B5 — FAQS ACCORDION */}
      <section className="py-12 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#BE8C1D]/10 text-[#BE8C1D] mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              PATIENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Frequently Asked Questions About Elbow Surgery
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

export default ElbowSurgeryPage;
