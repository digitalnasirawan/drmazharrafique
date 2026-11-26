import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ShieldCheck, Activity, MessageSquare } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';

export const RecoveryTimelineVisualizer: React.FC = () => {
  const [activeProcedure, setActiveProcedure] = useState<'knee' | 'acl' | 'scope'>('knee');
  const [activeStage, setActiveStage] = useState<number>(0);

  const timelines = {
    knee: {
      name: "Total Knee Arthroplasty (Replacement)",
      stages: [
        {
          period: "Day 1 to 3",
          title: "Immediate Hospital Mobilization",
          milestones: [
            "Walking assisted with walker/crutches within 24 hours.",
            "Gentle active knee bending up to 70-90 degrees.",
            "Pain control using multi-modal analgesia and cold therapy.",
            "Safe stair climbing training before hospital discharge."
          ],
          doctorTip: "Early gentle movement stimulates circulation and prevents deep vein thrombosis."
        },
        {
          period: "Week 2 to 4",
          title: "Home Healing & Swelling Reduction",
          milestones: [
            "Suture/staple removal and clinic wound review at BNI.",
            "Transitioning from walker to single walking stick or unassisted.",
            "Bending reaching 100-110 degrees with full straight knee extension.",
            "Resuming light indoor household tasks."
          ],
          doctorTip: "Keep leg elevated when resting to accelerate swelling resolution."
        },
        {
          period: "Month 2 to 3",
          title: "Strength & Independence Milestone",
          milestones: [
            "Unassisted normal reciprocal gait walking for 30+ minutes.",
            "Driving clearance once emergency braking reflex is safe.",
            "Stationary cycling and low-impact swimming.",
            "Resuming full desk work and social activities."
          ],
          doctorTip: "Consistent quadriceps strengthening ensures long-term implant longevity."
        },
        {
          period: "Month 6 to 12",
          title: "Full Functional Recovery",
          milestones: [
            "Complete bone-implant biological integration.",
            "Natural joint feeling during daily activities.",
            "Participation in brisk walking, golf, travel, and active living.",
            "Annual routine radiograph follow-up."
          ],
          doctorTip: "High-flexion biocompatible prostheses are engineered for 20+ years of durability."
        }
      ]
    },
    acl: {
      name: "Arthroscopic ACL Reconstruction",
      stages: [
        {
          period: "Week 1 to 2",
          title: "Graft Protection & Extension",
          milestones: [
            "Brace locked in full extension during sleep.",
            "Achieving full 0-degree passive knee extension (vital priority).",
            "Isometric quadriceps sets and ankle pump exercises.",
            "Partial weight-bearing with crutches."
          ],
          doctorTip: "Never place a pillow directly under the knee; keep heel elevated to ensure full extension."
        },
        {
          period: "Week 3 to 6",
          title: "Weaning Crutches & Flexion",
          milestones: [
            "Progressive knee flexion reaching 90-120 degrees.",
            "Weaning off crutches once straight leg raise is strong without extension lag.",
            "Closed kinetic chain exercises (mini squats, leg press under supervision).",
            "Stationary cycle pedaling with zero resistance."
          ],
          doctorTip: "Avoid active open-chain knee extensions to safeguard graft incorporation."
        },
        {
          period: "Month 3 to 6",
          title: "Dynamic Neuromuscular Training",
          milestones: [
            "Straight-line jogging permitted around month 4 if quad strength > 70%.",
            "Proprioceptive balance board training.",
            "Core stability and hip abductor strengthening.",
            "Agility ladder drills."
          ],
          doctorTip: "Neuromuscular control prevents re-injury to the reconstructed graft."
        },
        {
          period: "Month 9 to 12",
          title: "Full Return to Sports Clearance",
          milestones: [
            "Limb Symmetry Index (LSI) > 90% on functional hop testing.",
            "Cutting, pivoting, and competitive sports clearance.",
            "Sports-specific movement testing under clinical guidance.",
            "Long-term joint cartilage preservation."
          ],
          doctorTip: "Objective functional hop tests confirm biological and biomechanical readiness."
        }
      ]
    },
    scope: {
      name: "Minimally Invasive Joint Arthroscopy",
      stages: [
        {
          period: "Day 1 to 3",
          title: "Keyhole Incision Care",
          milestones: [
            "Micro-incisions covered with sterile waterproof dressing.",
            "Cold compression packs applied for 20 mins every few hours.",
            "Immediate full weight-bearing permitted for meniscectomy cases.",
            "Gentle range of motion exercises starting Day 2."
          ],
          doctorTip: "Minimally invasive keyhole portals typically heal within 7 to 10 days."
        },
        {
          period: "Week 2 to 3",
          title: "Normal Daily Activity Resumption",
          milestones: [
            "Full active joint flexion and extension restored.",
            "Return to driving and professional work duties.",
            "Low-impact gym cardio (elliptical, stationary cycle).",
            "Incision inspection and clinic sign-off."
          ],
          doctorTip: "Most desk professionals resume normal routines within two weeks."
        },
        {
          period: "Week 4 to 6",
          title: "Full Activity & Impact Clearance",
          milestones: [
            "Return to recreational sports, jogging, and gym lifting.",
            "Complete resolution of joint effusion.",
            "Targeted joint longevity and cartilage maintenance plan."
          ],
          doctorTip: "Targeted exercise regimens protect your native joint cartilage."
        }
      ]
    }
  };

  const currentTimeline = timelines[activeProcedure];
  const stage = currentTimeline.stages[Math.min(activeStage, currentTimeline.stages.length - 1)];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E5DE] shadow-sm overflow-hidden text-left">
      
      {/* Header */}
      <div className="p-6 bg-white border-b border-[#E8E5DE]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-[#BE8C1D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Interactive Surgical Recovery Roadmap
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Expected Rehabilitation Timeline
            </h3>
          </div>

          {/* Procedure Switcher */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE]">
            {[
              { id: 'knee', label: 'Knee Replacement' },
              { id: 'acl', label: 'ACL Reconstruction' },
              { id: 'scope', label: 'Arthroscopy' }
            ].map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => { setActiveProcedure(p.id as any); setActiveStage(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeProcedure === p.id 
                    ? 'bg-[#BE8C1D] text-[#111111] shadow-2xs' 
                    : 'text-[#475569] hover:text-[#111111]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stages Stepper */}
      <div className="p-4 sm:p-6 bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {currentTimeline.stages.map((stg, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeStage === idx 
                  ? 'bg-white border-[#BE8C1D] shadow-sm ring-1 ring-[#BE8C1D]' 
                  : 'bg-white/60 border-[#E8E5DE] hover:bg-white text-[#475569]'
              }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#BE8C1D] block">
                Stage 0{idx + 1}
              </span>
              <strong className="text-xs sm:text-sm font-bold text-[#111111] block mt-0.5">
                {stg.period}
              </strong>
            </button>
          ))}
        </div>
      </div>

      {/* Stage Detail Card */}
      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#BE8C1D] block mb-1">
            Rehabilitation Focus: {stage.period}
          </span>
          <h4 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
            {stage.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] space-y-3">
            <strong className="text-xs font-bold uppercase tracking-wider text-[#111111] block">
              Key Clinical Milestones:
            </strong>
            <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
              {stage.milestones.map((ms, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#E8E5DE] flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <strong className="text-xs font-bold uppercase tracking-wider text-[#BE8C1D] block">
                Doctor&apos;s Advice &amp; Safety:
              </strong>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {stage.doctorTip}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E8E5DE]">
              <a
                href={businessConfig.getWhatsAppUrl(`Hello Dr. Mazhar Rafique Clinic, I am inquiring about recovery and rehabilitation for ${currentTimeline.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Ask Dr. Mazhar on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
