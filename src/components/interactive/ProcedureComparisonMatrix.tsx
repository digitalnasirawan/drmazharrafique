import React, { useState } from 'react';
import { 
  GitCompare, 
  CheckCircle2, 
  Clock, 
  Activity, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface ComparisonCard {
  procedureName: string;
  badge: string;
  idealCandidate: string;
  hospitalStay: string;
  walkingMobility: string;
  incisionStyle: string;
  expectedLongevity: string;
  keyBenefit: string;
}

interface ComparisonSet {
  id: string;
  title: string;
  description: string;
  cards: ComparisonCard[];
}

export const ProcedureComparisonMatrix: React.FC = () => {
  const [activeSetId, setActiveSetId] = useState<string>('knee');

  const comparisons: ComparisonSet[] = [
    {
      id: 'knee',
      title: 'Knee Arthroplasty Options: Total vs. Partial vs. Arthroscopy',
      description: 'Understand the objective differences between full joint reconstruction, single-compartment preservation, and minimally invasive keyhole procedures.',
      cards: [
        {
          procedureName: 'Total Knee Replacement (TKR)',
          badge: 'Gold Standard for Generalized Wear',
          idealCandidate: 'Severe tri-compartmental osteoarthritis, significant deformity (bowleg/knock-knee), daily bone-on-bone pain.',
          hospitalStay: '2 to 3 Days at BNI Lahore',
          walkingMobility: 'Supported walking within 24 hours; independent walking by 4-6 weeks.',
          incisionStyle: 'Standard anterior midline incision (12-15 cm) with subvastus/quad-sparing approach.',
          expectedLongevity: '20+ Years with modern ceramic/cross-linked polyethylene bearings.',
          keyBenefit: 'Predictable, long-term relief from severe generalized arthritis pain.'
        },
        {
          procedureName: 'Partial Knee Replacement (PKR)',
          badge: 'Joint Preservation Technique',
          idealCandidate: 'Isolated medial or lateral joint wear with healthy intact ACL and unaffected opposite compartment.',
          hospitalStay: '1 to 2 Days',
          walkingMobility: 'Rapid weight bearing; often walking unassisted by 2-3 weeks.',
          incisionStyle: 'Minimally invasive smaller incision (7-9 cm) preserving all cruciate ligaments.',
          expectedLongevity: '15 to 20 Years; preserves native joint kinematics and feel.',
          keyBenefit: 'Faster recovery, more natural knee flexion, and preservation of healthy bone.'
        },
        {
          procedureName: 'Knee Arthroscopy & Meniscus Repair',
          badge: 'Minimally Invasive Keyhole',
          idealCandidate: 'Mechanical meniscus tears, joint loose bodies, or persistent catching in active younger adults.',
          hospitalStay: 'Day Care / Outpatient Procedure',
          walkingMobility: 'Walking immediately or within 24-48 hours depending on tear repair protocol.',
          incisionStyle: 'Two tiny puncture portals (4-5 mm each) guided by high-definition camera.',
          expectedLongevity: 'Biological preservation of native shock-absorbing fibrocartilage.',
          keyBenefit: 'Minimal soft tissue trauma, negligible scarring, and rapid sports return.'
        }
      ]
    },
    {
      id: 'hip',
      title: 'Hip Arthroplasty vs. Joint Preservation in AVN',
      description: 'Comparing total hip reconstruction against early-stage preservation for avascular necrosis (AVN) and hip osteoarthritis.',
      cards: [
        {
          procedureName: 'Total Hip Arthroplasty (THA)',
          badge: 'Definitive Hip Restoration',
          idealCandidate: 'Advanced hip osteoarthritis, collapsed femoral head in Stage 3-4 AVN, severe groin pain.',
          hospitalStay: '2 to 3 Days',
          walkingMobility: 'Walking assisted on Day 1; driving by 4-6 weeks.',
          incisionStyle: 'Modern muscle-sparing posterior or direct anterior approach.',
          expectedLongevity: '25+ Years with premium delta ceramic and porous trabecular titanium cups.',
          keyBenefit: 'Complete elimination of deep groin pain and restoration of full sitting/walking range.'
        },
        {
          procedureName: 'Core Decompression & Hip Preservation',
          badge: 'Early Stage AVN Intervention',
          idealCandidate: 'Stage 1 or 2 pre-collapse Avascular Necrosis with preserved spherical femoral head shape.',
          hospitalStay: '1 Day',
          walkingMobility: 'Protected weight bearing with crutches for 4-6 weeks to allow bone healing.',
          incisionStyle: 'Percutaneous minimally invasive fluoroscopy-guided drilling.',
          expectedLongevity: 'Aims to avert or delay the eventual requirement for prosthetic replacement.',
          keyBenefit: 'Relieves intraosseous pressure and stimulates new microvascular bone remodeling.'
        }
      ]
    },
    {
      id: 'sports',
      title: 'ACL Reconstruction: Surgical Repair vs. Conservative Rehab',
      description: 'Evidence-based comparison for active individuals, athletes, and recreational sports enthusiasts with cruciate ligament tears.',
      cards: [
        {
          procedureName: 'Arthroscopic ACL Reconstruction',
          badge: 'Recommended for Cutting & Pivoting Sports',
          idealCandidate: 'Complete ACL rupture in active individuals, athletes, or knees with recurrent instability/giving way.',
          hospitalStay: 'Day Care or Overnight Stay',
          walkingMobility: 'Crutch-assisted for 2-3 weeks; straight-line jogging by month 4; sports by month 9-12.',
          incisionStyle: 'All-inside arthroscopic technique using quadruple hamstring or patellar autograft.',
          expectedLongevity: 'Anatomical knee biomechanics restored; safeguards secondary meniscus tears.',
          keyBenefit: 'Restores rotational joint stability and prevents future premature osteoarthritis.'
        },
        {
          procedureName: 'Structured Non-Surgical ACL Rehab',
          badge: 'Selected Low-Demand Patients',
          idealCandidate: 'Partial tears without instability, sedentary patients, or individuals not engaging in pivoting sports.',
          hospitalStay: 'Outpatient Physiotherapy Program',
          walkingMobility: 'Immediate progressive walking with knee stabilization brace.',
          incisionStyle: 'No surgical incision; 3-6 months of progressive physical therapy.',
          expectedLongevity: 'Requires ongoing commitment to quadriceps and hamstring neuromuscular training.',
          keyBenefit: 'Avoids operative risks while strengthening dynamic muscular joint stabilizers.'
        }
      ]
    }
  ];

  const currentSet = comparisons.find(c => c.id === activeSetId) || comparisons[0];

  return (
    <div className="bg-white rounded-3xl border border-[#E8E5DE] shadow-xl overflow-hidden">
      
      {/* Top Header & Switcher */}
      <div className="p-6 sm:p-8 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold uppercase tracking-wider text-[#BE8C1D] mb-2">
              <GitCompare className="w-3.5 h-3.5" />
              <span>CLINICAL PROCEDURE COMPARISON</span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl font-bold text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Interactive Surgical Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
              Compare operative approaches, recovery expectations, hospital stay, and long-term outcomes to make an informed decision with Dr. Mazhar Rafique.
            </p>
          </div>

          {/* Procedure Switcher Tabs */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {comparisons.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSetId(item.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  activeSetId === item.id
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white text-[#111111] border border-[#E8E5DE] hover:border-[#BE8C1D]'
                }`}
              >
                {item.id === 'knee' && 'Knee Options'}
                {item.id === 'hip' && 'Hip & AVN Options'}
                {item.id === 'sports' && 'ACL & Sports Options'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <h4 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            {currentSet.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#475569] mt-0.5">{currentSet.description}</p>
        </div>

        <div className={`grid grid-cols-1 ${currentSet.cards.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
          {currentSet.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E8E5DE] bg-white p-6 flex flex-col justify-between hover:border-[#BE8C1D] hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                
                {/* Header Badge & Name */}
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F2] border border-[#E8E5DE] text-[#BE8C1D] mb-2">
                    {card.badge}
                  </span>
                  <h5 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    {card.procedureName}
                  </h5>
                </div>

                {/* Candidate */}
                <div className="p-3 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] text-xs space-y-1">
                  <strong className="text-[#111111] block uppercase tracking-wider text-[10px]">Ideal Candidate:</strong>
                  <p className="text-[#475569] leading-relaxed">{card.idealCandidate}</p>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">Hospital Stay: </strong>
                      <span className="text-[#475569]">{card.hospitalStay}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">Walking Mobility: </strong>
                      <span className="text-[#475569]">{card.walkingMobility}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">Longevity / Durability: </strong>
                      <span className="text-[#475569]">{card.expectedLongevity}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">Primary Benefit: </strong>
                      <span className="text-[#475569]">{card.keyBenefit}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons: WhatsApp Primary + Call 2nd */}
              <div className="pt-6 mt-6 border-t border-[#E8E5DE] space-y-2">
                <a
                  href={businessConfig.getWhatsAppUrl(`Hello Dr. Mazhar Rafique Clinic, I am reviewing the ${card.procedureName} options and would like to schedule a consultation at BNI Lahore.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-[#111111] bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2 text-xs shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={businessConfig.callUrl}
                  className="w-full py-2 px-3 rounded-xl font-semibold text-[#111111] bg-[#FAF8F2] hover:bg-white border border-[#E8E5DE] transition-colors flex items-center justify-center gap-1.5 text-xs text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Call Clinic: {businessConfig.phone}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#475569]">
          <span>
            <strong>Clinical Note:</strong> Procedure choice is determined after hands-on clinical examination, medical history review, and weight-bearing imaging evaluation by Dr. Mazhar Rafique at BNI Lahore.
          </span>
          <span className="font-semibold text-[#111111] shrink-0">18 Jail Rd, Shadman 1, Lahore</span>
        </div>

      </div>

    </div>
  );
};
