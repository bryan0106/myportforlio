import React, { useState ,useEffect } from 'react';
import JokeAPi from './publicapicat';

import About  from './About';
import EducSection from './Education'
import ContactSection from './contact';
import ExperienceSection from './experience';
import SkillSection from './skills';
import ProjectSetion from './project';

import './App.css';
import './topvab.css'
import './botnav.css'

interface FrontLoadPageProps {
    children: React.ReactNode;
    loadingText?: string;
}

const FrontLoadPage: React.FC<FrontLoadPageProps> = ({ children, loadingText = 'Loading...' }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    let intervalId: number | null = null;
    const totalLoadingTime = 10000;
    const progressIncrement = 10;
    const numberOfIntervals = Math.ceil(100 / progressIncrement);
    const actualIntervalDelay = totalLoadingTime / numberOfIntervals;

    useEffect(() => {
        intervalId = window.setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + progressIncrement;
                if (newProgress >= 100) {
                    clearInterval(intervalId || undefined);
                    return 100;
                }
                return newProgress;
            });
        }, actualIntervalDelay);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, totalLoadingTime);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
            clearTimeout(timeout);
        };
    }, [totalLoadingTime, actualIntervalDelay, progressIncrement]);

    return (
        <>
            {loading ? (
                <div className="front-load-page-overlay">
                    <div className="profile-container">
                        <img
                            src="/unnamed.png"
                            alt="Bryan Dalawam"
                            className="profile-picture"
                        />
                        <h1 className="profile-name">Bryan Dalawampu</h1>
                        <p className="profile-career">Programmer</p>
                        <p>   </p>
                        <div className="loading-text">{loadingText}</div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-background">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <div className="progress-text">
                                {progress < 100 ? `Loading: ${progress}%` : 'Loaded!'}
                                <JokeAPi />
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-details">
                            <p>Contact: +63994165901</p>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.facebook.com/bdalawampu"
                                className="icon-link"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/fb.png" alt="Facebook" className="social-icon" />
                            </a>
                            <a
                                href="https://www.instagram.com/brn16950"
                                className="icon-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/inst.png" alt="Instagram" className="social-icon" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@bry"
                                className="icon-link tiktok-bg"
                                aria-label="TikTok"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/tiktok.png" alt="TikTok" className="social-icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bryan"
                                className="icon-link"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/link.png" alt="LinkedIn" className="social-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="contact-info2">
                        <div className="contact-details">
                            <p>Email:dalawampubryan06@gmail.com</p>
                        </div>
                        <div className="social-links">
                             <a
                                href=""
                                className="icon-link"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            
                        </div>
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    );
};


function MainSection() {

  
const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('about'); // State to track the active section
   const [] = useState('work1'); // State to track the active section
    
   
    const toggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
     const handleNavClick = (section: string) => {
        setActiveSection(section);
        setShowMobileMenu(false); // Close mobile menu when an item is clicked
    };


  return (
    <>
    <div className="main-content-container">
    <nav className={showMobileMenu ? 'topnav responsive' : 'topnav'}>

      <a href="#" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</a>
      <a href="#" className={activeSection === 'education' ? 'active' : ''} onClick={() => handleNavClick('education')}>Education</a>
      <a href="#" className={activeSection === 'skill' ? 'active' : ''} onClick={() => handleNavClick('skill')}>Skill</a>
      <a href="#" className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleNavClick('experience')}>Experience</a>
      <a href="#" className={activeSection === 'project' ? 'active' : ''} onClick={() => handleNavClick('project')}>Project</a>
      <a href="#" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a>
      <a href="#hamburger" className="icon" onClick={toggleMenu}>
        &#9776;
      </a>
    </nav><div className="icon-bar">
        <a className={activeSection === 'about' ? 'active' : ''} href="#" onClick={() => handleNavClick('about')}>
          <img src="/acc.png" alt="Facebook" />
        </a>
        <a className={activeSection === 'education' ? 'active' : ''} href="#" onClick={() => handleNavClick('education')}>
          <img src="/cv.png" alt="CV" />
        </a>
        <a className={activeSection === 'experience' ? 'active' : ''} href="#" onClick={() => handleNavClick('experience')}>
          <img src="/exp.png" alt="Experience" />
        </a>
        <a className={activeSection === 'skill' ? 'active' : ''} href="#" onClick={() => handleNavClick('skill')}>
          <img src="/cert.png" alt="Certifications" />
        </a>
        <a className={activeSection === 'contact' ? 'active' : ''} href="#" onClick={() => handleNavClick('contact')}>
          <img src="/cont.png" alt="Contact" />
        </a>
      </div>

       <About activeSection={activeSection}/>
 <EducSection activeSection={activeSection}/>
 
                 <ExperienceSection
                   activeSection={activeSection}/>
<SkillSection activeSection={activeSection}/>
<ContactSection activeSection={activeSection}/>
 <ProjectSetion activeSection={activeSection}/>
      </div>
    </>
  );
}




function App() {
  return (
    <><FrontLoadPage loadingText="">
       
        <MainSection />
     </FrontLoadPage>
    </>
  );
}

export default App;