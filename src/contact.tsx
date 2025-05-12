import React from "react";
import './contact.css'


function ContactSection({activeSection}){
   if(activeSection !== 'contact'){return null;}
   return(
<div id="contact" className="section-container">
                    <div className="flip-card">
                   <div className="flip-card-inner">
                   <div className="flip-card-front">
                     <img  src="/ff1.png"/>
                   </div>
                     <div className="flip-card-back">
                     <img  src="/ff2.png"/>
    </div>
    </div>

<div className="contactD">
  <div className="conAd"><h2>Address:</h2><p>Sta. Maria, Naujan Oriental Mindoro</p></div>
  <div className="conSo"><h2>Social Media account:</h2>
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
                                href="https://www.instagram.com/yourusername"
                                className="icon-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/inst.png" alt="Instagram" className="social-icon" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@yourusername"
                                className="icon-link tiktok-bg"
                                aria-label="TikTok"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/tiktok.png" alt="TikTok" className="social-icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yourprofileurl"
                                className="icon-link"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/link.png" alt="LinkedIn" className="social-icon" />
                            </a>
                        </div>
  </div>
  <div className="conEm"><h2>Email Address:</h2>
    <p>dalawampubryan06@gmailo.com</p>
    <p>dalawampubryan@yahoo.com</p>
  
  </div>
</div>








 
</div>
                    








                    </div>




   );

} export default ContactSection;