import React from "react";
import './education.css'
function EducSection({activeSection}){
    if(activeSection !== 'education'){return null;}

    return(
        <><div id="education" className="section-container">

            <div className="ed">
                <div className="sch1"> <div className="cir"><img src="/edu3.png" /></div><div className="scon">
                  <div className="scbac3">  <h1>Tertiary 2014-2015	</h1>
                    <h2>Mindoro State University</h2> <h3>Bachelor of Science in InformationTechnology</h3>
                    <p>	MinSCATCalapan City Campus Masipit, Calapan City, Oriental Mindoro</p>
                </div> </div></div>
            </div>
            <div className="ed">
                <div className="sch1"><div className="cir"><img src="/edu2.png" /></div><div className="scon">
                   <div className="scbac2"> <h1>Secondary 2010-2011	</h1>
                    <h2>Porfirio G. Comia Memorial National High School</h2>
                    <p>Barcenaga, Naujan Oriental Mindoro</p>
                    </div> </div></div>
            </div>
            <div className="ed">
                <div className="sch"><div className="cir"><img src="/edu1.jpg" /></div><div className="scon">
                  <div className="scbac">  <h1>Elementary 2006-2007		</h1>
                    <h2>P. Garis Memorial Elementary School</h2>
                    <p>Sta. Maria, Naujan Oriental Mindoro</p>
                   </div> </div></div>
            </div>
        </div>






        <div id="certifications" className="sectiona">
            <h2>Certificates</h2>
                <div className="cra">
                    <h4>Diploma-Bachelor of Science in InformationTechnology</h4>
                    <img src="/dip1.jpg" /> </div>

                <div className="cra">
                    <h4>Certificate of Completion-Computer Hardware Servicing(NCII)</h4>
                    <img className="cvv" src="/dip2.jpg" />
                </div>

            </div></>

    );}export default EducSection;