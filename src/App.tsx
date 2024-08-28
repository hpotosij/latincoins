import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Contact,
  Navigation,
  Footer,
  Sagrilaft,
  AntiLavado,
  Privacidad,
  Terminos,

} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleModeChange = () => {
    setMode((prevMode) => prevMode === 'dark' ? 'light' : 'dark');
  };

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeSection !== null) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} onLinkClick={handleLinkClick} />
      <FadeIn transitionDuration={700}>
        {activeSection === null ? (
          <>
            <Main />
            <Expertise />
            <Timeline />
            <Contact />
          </>
        ) : (
          <>
            {activeSection === "terminos-p2p" && <Terminos />}
            {activeSection === "sagrilaft" && <Sagrilaft />}
            {activeSection === "política-antilavado" && <AntiLavado />}
            {activeSection === "política-privacidad" && <Privacidad />}
          </>
        )}
      </FadeIn>
      <Footer onLinkClick={handleLinkClick} />
    </div>
  );
}

export default App;
