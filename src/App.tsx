import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalHeader } from './components/GlobalHeader';
import { GlobalFooter } from './components/GlobalFooter';
import { MobileStickyCallBar } from './components/cta/MobileStickyCallBar';
import { FloatingWhatsAppWidget } from './components/cta/FloatingWhatsAppWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { routesRegistry, type PageTemplate } from './data/routesRegistry';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceCategoryPage } from './pages/ServiceCategoryPage';
import { TreatmentPage } from './pages/TreatmentPage';
import { PatientEducationHubPage } from './pages/PatientEducationHubPage';
import { FaqPage } from './pages/FaqPage';
import { GalleryPage } from './pages/GalleryPage';
import { VideosPage } from './pages/VideosPage';
import { MedicalEducationHubPage } from './pages/MedicalEducationHubPage';
import { SurgeryVideosPage } from './pages/SurgeryVideosPage';
import { OspePrepPage } from './pages/OspePrepPage';
import { SurgeryMcqsPage } from './pages/SurgeryMcqsPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Dedicated Full-Content Pages (Batch Implementations)
import { JointReplacementPage } from './pages/JointReplacementPage';
import { KneeReplacementPage } from './pages/KneeReplacementPage';
import { HipReplacementPage } from './pages/HipReplacementPage';
import { PartialKneeReplacementPage } from './pages/PartialKneeReplacementPage';
import { RevisionJointReplacementPage } from './pages/RevisionJointReplacementPage';
import { ArthroscopicSurgeryPage } from './pages/ArthroscopicSurgeryPage';
import { HipArthroscopyPage } from './pages/HipArthroscopyPage';
import { ShoulderArthroscopyPage } from './pages/ShoulderArthroscopyPage';
import { MeniscusRepairPage } from './pages/MeniscusRepairPage';
import { CartilageRestorationPage } from './pages/CartilageRestorationPage';
import { SportsInjurySurgeryPage } from './pages/SportsInjurySurgeryPage';
import { AclReconstructionPage } from './pages/AclReconstructionPage';

const getComponentForRoute = (item: (typeof routesRegistry)[number]): React.ReactElement => {
  if (item.pageId === 'P05' || item.canonicalPath === '/joint-replacement-surgery/') {
    return <JointReplacementPage />;
  }
  if (item.pageId === 'P06' || item.canonicalPath === '/knee-replacement-surgery/') {
    return <KneeReplacementPage />;
  }
  if (item.pageId === 'P07' || item.canonicalPath === '/hip-replacement-surgery/') {
    return <HipReplacementPage />;
  }
  if (item.pageId === 'P09' || item.canonicalPath === '/partial-knee-replacement/') {
    return <PartialKneeReplacementPage />;
  }
  if (item.pageId === 'P10' || item.canonicalPath === '/revision-joint-replacement/') {
    return <RevisionJointReplacementPage />;
  }
  if (item.pageId === 'P11' || item.canonicalPath === '/arthroscopic-surgery/') {
    return <ArthroscopicSurgeryPage />;
  }
  if (item.pageId === 'P13' || item.canonicalPath === '/hip-arthroscopy/') {
    return <HipArthroscopyPage />;
  }
  if (item.pageId === 'P14' || item.canonicalPath === '/shoulder-arthroscopy/') {
    return <ShoulderArthroscopyPage />;
  }
  if (item.pageId === 'P15' || item.canonicalPath === '/meniscus-repair/') {
    return <MeniscusRepairPage />;
  }
  if (item.pageId === 'P16' || item.canonicalPath === '/cartilage-restoration/') {
    return <CartilageRestorationPage />;
  }
  if (item.pageId === 'P17' || item.canonicalPath === '/sports-injury-treatment/') {
    return <SportsInjurySurgeryPage />;
  }
  if (item.pageId === 'P18' || item.canonicalPath === '/acl-reconstruction/') {
    return <AclReconstructionPage />;
  }
  return getComponentForTemplate(item.template);
};

const getComponentForTemplate = (template: PageTemplate): React.ReactElement => {
  switch (template) {
    case 'Homepage':
      return <HomePage />;
    case 'About':
      return <AboutPage />;
    case 'Contact':
      return <ContactPage />;
    case 'ServicesHub':
      return <ServicesHubPage />;
    case 'ServiceCategory':
      return <ServiceCategoryPage />;
    case 'Treatment':
      return <TreatmentPage />;
    case 'PatientEducationHub':
      return <PatientEducationHubPage />;
    case 'FAQ':
      return <FaqPage />;
    case 'Gallery':
      return <GalleryPage />;
    case 'VideoLibrary':
      return <VideosPage />;
    case 'MedicalEducationHub':
      return <MedicalEducationHubPage />;
    case 'SurgeryVideoLibrary':
      return <SurgeryVideosPage />;
    case 'OSPELibrary':
      return <OspePrepPage />;
    case 'MCQLibrary':
      return <SurgeryMcqsPage />;
    case 'Legal':
      return <LegalPage />;
    default:
      return <NotFoundPage />;
  }
};

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#111111] pb-16 sm:pb-0">
        
        {/* D03 Global Sticky Header */}
        <GlobalHeader />

        {/* Dynamic Route Content */}
        <main className="flex-1 w-full" id="main-content">
          <Routes>
            {/* Generate routes for all 57 pages from centralized registry */}
            {routesRegistry.flatMap((item) => {
              const element = getComponentForRoute(item);
              const pathWithSlash = item.canonicalPath;
              const pathWithoutSlash = item.canonicalPath === '/' 
                ? '/' 
                : item.canonicalPath.endsWith('/') 
                  ? item.canonicalPath.slice(0, -1) 
                  : item.canonicalPath;

              if (pathWithSlash === '/') {
                return [<Route key={item.pageId} path="/" element={element} />];
              }

              return [
                <Route key={`${item.pageId}-slash`} path={pathWithSlash} element={element} />,
                <Route key={`${item.pageId}-noslash`} path={pathWithoutSlash} element={element} />
              ];
            })}

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* D04 Global Footer */}
        <GlobalFooter />

        {/* D04 Mobile Sticky Call Bar (displayed on mobile devices) */}
        <MobileStickyCallBar />

        {/* Global Floating WhatsApp Quick-Chat Widget */}
        <FloatingWhatsAppWidget />

      </div>
    </BrowserRouter>
  );
}

export default App;
