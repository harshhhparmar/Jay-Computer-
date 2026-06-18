/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BrochuresSection } from './components/BrochuresSection';
import { RequiredDocsSection } from './components/RequiredDocsSection';
import { EnquiryForm } from './components/EnquiryForm';
import { AboutContact } from './components/AboutContact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <BrochuresSection />
        <RequiredDocsSection />
        <EnquiryForm />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
