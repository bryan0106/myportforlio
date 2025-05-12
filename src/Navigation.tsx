import React, { useState ,useEffect } from 'react';
import './topvab.css'
import './botnav.css'


function Navigation() {

 const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('about'); // State to track the active section
    const [activeWork, setactiveWork] = useState('work1'); // State to track the active section
    const toggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
     const handleNavClick = (section: string) => {
        setActiveSection(section);
        setShowMobileMenu(false); // Close mobile menu when an item is clicked
    };
    console.log(activeSection)
  return (
                <><nav className={showMobileMenu ? 'topnav responsive' : 'topnav'}>

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
        <a className={activeSection === 'contact' ? 'active' : ''}  href="#" onClick={() => handleNavClick('contact')}>
          <img src="/cont.png" alt="Contact" />
        </a>
      </div></>
    
  );
} export default Navigation;