import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProducerIntro from './components/ProducerIntro';
import Services from './components/Services';
import BriefingRoom from './components/BriefingRoom';
import WhatsAppButton from './components/WhatsAppButton'; // Added Import
import { SonicMoodProvider, useSonicMood } from './context/SonicMoodContext';
import type { PageView } from './types';

function AmbientShell({ children }: { children: React.ReactNode }) {
  const { selectedMood, ambientGradient } = useSonicMood();

  return (
    <div
      className="ambient-shell overflow-x-hidden"
      data-mood={selectedMood ?? 'default'}
    >
      <div className="ambient-base" aria-hidden="true" />
      <div
        className="ambient-gradient"
        style={{ background: ambientGradient }}
        aria-hidden="true"
      />
      <div className="ambient-pulse" aria-hidden="true" />
      <div className="ambient-vignette" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function AppContent() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [pageKey, setPageKey] = useState(0);

  const navigate = useCallback((page: PageView) => {
    setActivePage(page);
    setPageKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AmbientShell>
      <Navbar activePage={activePage} onNavigate={navigate} />

      <main>
        <div
          key={`${activePage}-${pageKey}`}
          className="page-enter transition-all duration-700 ease-tuned"
        >
          {activePage === 'home' && <HomePage />}
          {activePage === 'services' && <Services />}
          {activePage === 'briefing' && <BriefingRoom />}
        </div>
      </main>

      <ProducerIntro />
      <Footer onNavigate={navigate} />
      
      {/* WhatsApp Button added here */}
      <WhatsAppButton />
    </AmbientShell>
  );
}

function App() {
  return (
    <SonicMoodProvider>
      <AppContent />
    </SonicMoodProvider>
  );
}

export default App;