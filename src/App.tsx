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
              const element = getComponentForTemplate(item.template);
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
