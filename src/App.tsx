/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BrochuresSection } from './components/BrochuresSection';
import { EnquiryForm } from './components/EnquiryForm';
import { AboutContact } from './components/AboutContact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ScrollToTop } from './components/ScrollToTop';
import { AyushmanCardPage } from './pages/AyushmanCardPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { LICServicesPage } from './pages/LICServicesPage';
import { EKutirPage } from './pages/EKutirPage';

const Home = () => (
  <main>
    <Hero />
    <ServicesSection />
    <BrochuresSection />
    <EnquiryForm />
    <AboutContact />
  </main>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-indigo-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/ayushman-abha-card" element={<AyushmanCardPage />} />
            <Route path="/services/certificates" element={<CertificatesPage />} />
            <Route path="/services/lic-premium" element={<LICServicesPage />} />
            <Route path="/services/e-kutir" element={<EKutirPage />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
}
