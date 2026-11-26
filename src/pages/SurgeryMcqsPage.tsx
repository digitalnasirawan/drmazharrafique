import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronRight, CheckCircle2, Award, AlertCircle } from 'lucide-react';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const SurgeryMcqsPage: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const mcqs = [
    {
      id: 1,
      topic: "Arthroplasty & Biomechanics",
      q: "In Total Knee Arthroplasty, what is the consequence of failing to restore the joint line and leaving the tibial component excessively elevated?",
      options: [
        "Patella baja and mid-flexion joint instability",
        "Increased extension gap laxity and hyper-extension",
        "Decreased patellofemoral contact pressures",
        "Excessive internal tibial torsion"
      ],
      correct: 0,
      rationale: "Elevating the joint line causes pseudo-patella baja, decreases extensor mechanism excursion, and creates mid-flexion instability because the collateral ligaments are tensioned abnormally."
    },
    {
      id: 2,
      topic: "Orthopaedic Trauma & BOAST Guidelines",
      q: "A patient with a displaced femoral neck fracture presents 18 hours after injury. Which biological factor most critically influences the risk of subsequent avascular necrosis (AVN)?",
      options: [
        "Disruption of the lateral epiphyseal arterial branches originating from the medial femoral circumflex artery",
        "Damage to the obturator artery artery of ligamentum teres alone",
        "Systemic periosteal reaction along the femoral shaft",
        "Bone mineral density T-score of the greater trochanter"
      ],
      correct: 0,
      rationale: "The lateral epiphyseal vessels from the deep branch of the medial femoral circumflex artery provide over 80% of blood supply to the femoral head and are vulnerable to shear disruption in displaced intracapsular fractures."
    },
    {
      id: 3,
      topic: "Sports Medicine & Arthroscopy",
      q: "During ACL reconstruction with hamstring autograft (Semitendinosus-Gracilis), what is the optimal femoral tunnel placement to resist rotational pivot-shift instability?",
      options: [
        "Anatomical native footprint on the lateral intercondylar wall (low 10:00 or 1:30 o'clock position)",
        "High vertical 12:00 o'clock position at the roof of the notch",
        "Directly through the posterior cruciate ligament attachment",
        "At the anterior edge of the intercondylar roof"
      ],
      correct: 0,
      rationale: "Anatomical femoral tunnel placement on the lateral wall (10:00 for right knee or 1:30 for left knee) restores rotational torque resistance (pivot-shift control) compared to old non-anatomical vertical 12 o'clock tunnels which only controlled anteroposterior translation."
    },
    {
      id: 4,
      topic: "Paediatric Orthopaedics",
      q: "In Developmental Dysplasia of the Hip (DDH), which clinical sign indicates hip instability in a newborn under 3 months of age?",
      options: [
        "Barlow test (dislocation on adduction and posterior pressure) and Ortolani test (reduction on abduction)",
        "Galeazzi sign indicating bilateral symmetric femoral shortening",
        "Positive Trendelenburg test during standing posture",
        "Inability to perform active knee extension"
      ],
      correct: 0,
      rationale: "The Barlow and Ortolani tests are dynamic provocative maneuvers for neonates under 3 months. Once secondary soft tissue contractures develop after 3 months, limited abduction and Galeazzi sign become more prominent."
    }
  ];

  const handleSelect = (qIdx: number, optIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    mcqs.forEach((mcq, idx) => {
      if (selectedAnswers[idx] === mcq.correct) score += 1;
    });
    return score;
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-2">
              <Link to="/" className="hover:text-[#111111]">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
              <Link to="/medical-education/" className="hover:text-[#111111]">Medical Education</Link>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>BOARD REVIEW &amp; MCQS</span>
            </div>

            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Orthopaedic Surgery MCQs &amp; Self-Assessment
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              High-yield multiple-choice questions with clinical rationales designed for FCPS Orthopaedic Surgery candidates, MRCS examinees, and surgical residents.
            </p>
          </div>
        </div>
      </section>

      {/* MCQs Quiz Section */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {mcqs.map((mcq, qIdx) => {
              const selected = selectedAnswers[qIdx];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === mcq.correct;

              return (
                <div 
                  key={mcq.id}
                  className="p-6 border border-[#E8E5DE] rounded-xl bg-white space-y-4"
                >
                  <div className="flex items-center justify-between text-xs text-[#475569]">
                    <span className="font-bold text-[#BE8C1D] uppercase tracking-wider">Question {qIdx + 1} of {mcqs.length}</span>
                    <span className="bg-[#FAF8F2] px-2 py-0.5 rounded border border-[#E8E5DE] font-medium">{mcq.topic}</span>
                  </div>

                  <p className="text-base font-semibold text-[#111111] leading-relaxed">
                    {mcq.q}
                  </p>

                  <div className="space-y-2">
                    {mcq.options.map((opt, optIdx) => {
                      let btnStyle = "border-[#E8E5DE] bg-white text-[#111111] hover:border-[#BE8C1D]";
                      if (isAnswered) {
                        if (optIdx === mcq.correct) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                        } else if (selected === optIdx) {
                          btnStyle = "border-amber-500 bg-amber-50 text-amber-950";
                        } else {
                          btnStyle = "border-gray-200 bg-gray-50 opacity-60 text-gray-500";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelect(qIdx, optIdx)}
                          disabled={isAnswered}
                          className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Rationale Reveal */}
                  {isAnswered && (
                    <div className={`p-4 rounded-lg text-xs leading-relaxed border ${isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
                      <strong className="block mb-1 font-bold">
                        {isCorrect ? "✓ Correct Assessment" : "✕ Clinical Rationale:"}
                      </strong>
                      {mcq.rationale}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Score Summary Box */}
            <div className="p-6 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BE8C1D]">QUIZ PROGRESS</span>
              <div className="text-2xl font-bold text-[#111111]">
                Completed: {Object.keys(selectedAnswers).length} / {mcqs.length} Questions
              </div>
              <p className="text-xs text-[#475569]">
                Current Score: {calculateScore()} / {mcqs.length} Correct
              </p>
              {Object.keys(selectedAnswers).length === mcqs.length && (
                <button
                  type="button"
                  onClick={() => setSelectedAnswers({})}
                  className="btn-primary text-xs py-2 mt-2"
                >
                  Reset &amp; Retake Quiz
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Global Consultation CTA */}
      <ConsultationCTA 
        eyebrow="PATIENT CARE &amp; CLINICAL VISITS"
        heading="Book an In-Person Clinical Assessment in Lahore"
        description="Consult Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore. Book directly on WhatsApp or call the clinic reception."
      />

    </div>
  );
};
