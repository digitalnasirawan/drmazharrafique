import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqCategories = [
    {
      category: "Appointments & Clinic Visits",
      items: [
        {
          q: "How do I schedule an appointment with Dr. Mazhar Rafique?",
          a: `Appointments are conveniently scheduled via WhatsApp (${businessConfig.whatsappDisplay}) or by calling our clinic desk directly at ${businessConfig.phone}. Our team will assist in booking a designated consultation time at BNI - Bashir NeuroSpine Institute, 18 Jail Road, Shadman 1, Lahore.`
        },
        {
          q: "Do I need a referral from another doctor?",
          a: "While referrals from general practitioners or physicians are welcomed, you can also schedule a direct consultation without a prior referral for any joint pain, sports injury, or fracture evaluation."
        },
        {
          q: "What should I bring to my consultation?",
          a: "Please bring all prior X-ray films, CT scans, or MRI discs, along with any existing blood tests, list of daily medications, and previous medical or surgical summaries."
        }
      ]
    },
    {
      category: "Surgical Procedures & Recovery",
      items: [
        {
          q: "How long is the hospital stay for knee or hip replacement surgery?",
          a: "Most joint replacement patients remain in the hospital for 2 to 4 days, depending on overall health, pain control, and ability to ambulate safely with assistive devices before discharge."
        },
        {
          q: "Is surgery always required for meniscus or ligament tears?",
          a: "No. Small, stable meniscus tears or partial ligament sprains often respond well to structured physical therapy, activity modification, and biological support. Surgery is indicated if mechanical locking, severe instability, or persistent pain occurs."
        },
        {
          q: "When can I resume driving and normal daily work after surgery?",
          a: "Resumption depends on the joint treated and individual recovery speed. Desk workers often resume light duties within 2 to 3 weeks, while driving is typically permitted once full emergency braking control and unassisted weight-bearing are restored."
        }
      ]
    },
    {
      category: "Second Opinions & Complex Trauma",
      items: [
        {
          q: "Can I consult Dr. Mazhar Rafique for a second opinion on a planned surgery?",
          a: "Yes. Second opinions are an integral part of ethical medical practice. Dr. Mazhar Rafique will conduct an independent physical exam, objectively review your diagnostic scans, and advise on surgical vs non-surgical alternatives."
        },
        {
          q: "What emergency fracture services are available?",
          a: "BNI Lahore provides comprehensive trauma triage and surgical capabilities for acute fractures, joint dislocations, and polytrauma stabilized under ATLS® protocols."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-2">
              <Link to="/" className="hover:text-[#111111]">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
              <Link to="/patient-education/" className="hover:text-[#111111]">Patient Education</Link>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENT QUESTIONS</span>
            </div>

            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Frequently Asked Questions (FAQs)
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Find answers to common questions regarding orthopaedic appointments, surgery recovery, clinic location, and joint health care in Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Categories */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-10">
            
            {faqCategories.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-4">
                <h2 
                  className="text-xl font-bold text-[#111111] pb-2 border-b border-[#E8E5DE]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  {group.category}
                </h2>

                <div className="space-y-3">
                  {group.items.map((item, itemIdx) => {
                    const globalIdx = groupIdx * 10 + itemIdx;
                    const isOpen = openIndex === globalIdx;

                    return (
                      <div 
                        key={itemIdx}
                        className="border border-[#E8E5DE] rounded-xl overflow-hidden bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(globalIdx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#111111] hover:text-[#936A12] transition-colors focus-visible:outline-2 focus-visible:outline-[#BE8C1D]"
                          aria-expanded={isOpen}
                        >
                          <span style={{ fontFamily: "'Maven Pro', sans-serif" }}>{item.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[#BE8C1D] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm text-[#475569] leading-relaxed border-t border-[#FAF8F2] pt-3">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Global CTA */}
      <ConsultationCTA 
        heading="Still Have Questions Regarding Your Condition?"
        description={`Call the clinic directly at ${businessConfig.phone} to discuss your appointment or consultation inquiries.`}
      />

    </div>
  );
};
