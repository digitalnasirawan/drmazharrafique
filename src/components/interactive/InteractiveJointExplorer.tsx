import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface JointData {
  id: string;
  name: string;
  tagline: string;
  symptoms: string[];
  treatments: { title: string; path: string }[];
  recoveryNote: string;
}

export const InteractiveJointExplorer: React.FC = () => {
  const [activeJointId, setActiveJointId] = useState<string>('knee');

  const joints: JointData[] = [
    {
      id: 'knee',
      name: 'Knee Joint',
      tagline: 'Total & Partial Knee Replacement, ACL Reconstruction & Meniscus Repair',
      symptoms: [
        'Persistent grinding, stiffness, or bone-on-bone ache',
        'Inability to walk long distances or climb stairs without pain',
        'Sudden sports twisting injury with audible pop and swelling',
        'Knee catching, locking, or giving way during weight bearing'
      ],
      treatments: [
        { title: 'Knee Replacement Surgery', path: '/knee-replacement-surgery/' },
        { title: 'ACL Reconstruction', path: '/acl-reconstruction/' },
        { title: 'Partial Knee Replacement', path: '/partial-knee-replacement/' },
        { title: 'Meniscus Repair & Arthroscopy', path: '/meniscus-repair/' }
      ],
      recoveryNote: 'Arthroplasty patients begin standing within 24 hours under guided physiotherapy.'
    },
    {
      id: 'hip',
      name: 'Hip Joint',
      tagline: 'Total Hip Arthroplasty & Avascular Necrosis (AVN) Treatment',
      symptoms: [
        'Deep groin pain radiating down the front of the thigh',
        'Stiffness putting on socks, tying shoes, or getting into cars',
        'Limping or shortened walking endurance due to severe joint wear',
        'History of steroid use or trauma followed by worsening hip pain'
      ],
      treatments: [
        { title: 'Hip Replacement Surgery', path: '/hip-replacement-surgery/' },
        { title: 'Total Joint Replacement', path: '/total-joint-replacement/' },
        { title: 'Revision Joint Replacement', path: '/revision-joint-replacement/' },
        { title: 'Orthopaedic Consultation', path: '/orthopaedic-consultation/' }
      ],
      recoveryNote: 'Modern ceramic/polyethylene bearings restore anatomical hip rotation and pain-free sitting.'
    },
    {
      id: 'shoulder',
      name: 'Shoulder & Upper Limb',
      tagline: 'Rotator Cuff Repair, Shoulder Arthroscopy & Frozen Shoulder Relief',
      symptoms: [
        'Severe night pain waking you from sleep when lying on the shoulder',
        'Weakness lifting your arm above head or reaching behind your back',
        'Clicking, catch sensations, or recurrent shoulder dislocations',
        'Numbness, tingling in fingers, or burning carpal tunnel sensation'
      ],
      treatments: [
        { title: 'Rotator Cuff Repair', path: '/rotator-cuff-repair/' },
        { title: 'Shoulder Arthroscopy', path: '/shoulder-arthroscopy/' },
        { title: 'Carpal Tunnel Release', path: '/carpal-tunnel-release/' },
        { title: 'Shoulder Surgery Overview', path: '/shoulder-surgery/' }
      ],
      recoveryNote: 'Keyhole arthroscopic tendon anchoring minimizes scarring and preserves deltoid muscle.'
    },
    {
      id: 'spine',
      name: 'Spine & Lower Back',
      tagline: 'Comprehensive Orthopaedic Evaluation for Disc & Postural Back Pain at BNI',
      symptoms: [
        'Aching lower back pain aggravated by prolonged sitting or bending',
        'Radiating shooting nerve pain, tingling, or sciatica down the leg',
        'Morning lumbar stiffness and difficulty straightening upright',
        'Post-trauma spinal discomfort requiring clinical triage'
      ],
      treatments: [
        { title: 'Back Pain Treatment', path: '/back-pain-treatment/' },
        { title: 'Spine & Back Pain Hub', path: '/spine-back-pain/' },
        { title: 'Orthopaedic Consultation', path: '/orthopaedic-consultation/' }
      ],
      recoveryNote: 'Over 85% of acute lumbar pain episodes resolve with structured posture and targeted rehab.'
    },
    {
      id: 'trauma',
      name: 'Trauma & Fractures',
      tagline: 'Certified ATLS® Trauma Stabilization & Anatomical Internal Fixation',
      symptoms: [
        'Acute bone deformity, inability to bear weight following fall or road collision',
        'Severe localized swelling, bruising, and exquisite bone tenderness',
        'Open or compound wounds over fracture sites requiring urgent debridement',
        'Comminuted peri-articular fractures near knee, ankle, or wrist joints'
      ],
      treatments: [
        { title: 'Fracture Care & Casting', path: '/fracture-treatment/' },
        { title: 'Bone Fracture Repair (ORIF)', path: '/bone-fracture-repair/' },
        { title: 'Orthopaedic Trauma Surgery', path: '/orthopaedic-trauma-surgery/' }
      ],
      recoveryNote: 'Rigid titanium internal fixation allows early adjacent joint mobilization.'
    }
  ];

  const currentJoint = joints.find(j => j.id === activeJointId) || joints[0];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E5DE] shadow-sm overflow-hidden">
      
      {/* Explorer Top Tabs */}
      <div className="p-4 sm:p-6 bg-white border-b border-[#E8E5DE]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#BE8C1D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Interactive Clinical Joint Explorer
            </span>
          </div>
          <span className="text-xs text-[#475569]">Select your affected area:</span>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap gap-2">
          {joints.map(joint => (
            <button
              key={joint.id}
              type="button"
              onClick={() => setActiveJointId(joint.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeJointId === joint.id
                  ? 'bg-[#BE8C1D] text-[#111111] shadow-md shadow-[#BE8C1D]/20 scale-102'
                  : 'bg-white text-[#475569] border border-[#E8E5DE] hover:border-[#BE8C1D]/60 hover:text-[#111111]'
              }`}
            >
              {joint.name}
            </button>
          ))}
        </div>
      </div>

      {/* Explorer Content Details */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Symptoms Checklist */}
        <div className="lg:col-span-7 space-y-5 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#BE8C1D] block mb-1">
              Clinical Assessment
            </span>
            <h3 
              className="text-xl sm:text-2xl font-bold text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              {currentJoint.name} &bull; Typical Symptoms
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              {currentJoint.tagline}
            </p>
          </div>

          <div className="space-y-2.5">
            {currentJoint.symptoms.map((symptom, idx) => (
              <div 
                key={idx} 
                className="p-3 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] flex items-start gap-3 text-xs sm:text-sm text-[#111111]"
              >
                <span className="w-5 h-5 rounded-full bg-white border border-[#BE8C1D] text-[#BE8C1D] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{symptom}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center justify-between flex-wrap gap-2">
            <span><strong>Clinical Milestone:</strong> {currentJoint.recoveryNote}</span>
          </div>
        </div>

        {/* Right Column: Surgical Pathways & WhatsApp Action */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-5 bg-[#FAF8F2] rounded-2xl border border-[#E8E5DE] space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block">
              Recommended Procedures:
            </span>

            <div className="space-y-2">
              {currentJoint.treatments.map((t, idx) => (
                <Link
                  key={idx}
                  to={t.path}
                  className="p-3 bg-white rounded-xl border border-[#E8E5DE] hover:border-[#BE8C1D] hover:shadow-2xs text-xs font-semibold text-[#111111] transition-all flex items-center justify-between group block"
                >
                  <span className="group-hover:text-[#936A12]">{t.title}</span>
                  <ChevronRight className="w-4 h-4 text-[#BE8C1D] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            {/* Direct WhatsApp Consultation for this joint */}
            <div className="pt-2 border-t border-[#E8E5DE] space-y-2">
              <a
                href={businessConfig.getWhatsAppUrl(`Hello Dr. Mazhar Rafique Clinic, I am seeking a consultation regarding my ${currentJoint.name} condition.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-[#111111] bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                <span>Book Appointment for {currentJoint.name}</span>
              </a>

              <a
                href={businessConfig.callUrl}
                className="w-full py-2.5 px-3 rounded-xl font-semibold text-xs border border-[#E8E5DE] bg-white text-[#111111] hover:bg-gray-50 flex items-center justify-center gap-2 text-center"
              >
                <span>Or Call Reception ({businessConfig.phone})</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
