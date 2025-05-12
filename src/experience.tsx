import { useState } from 'react';
import './Experience.css'











function ExperienceSection({ activeSection, activeWork, handleWork }) {
  if (activeSection !== 'experience') {
    return null; // Or render something else if needed
  }
const [modalx, setmodalx] = useState('workleftx')
 const showmodal = (section: string) => {
      setmodalx(section);
  };


  return (
    <div id="experience" className="section-container">
      <div className="workmc">
        <div className={modalx}>
           <span onClick={() => setmodalx('workleftx')}>X</span>
          {activeWork === 'work1' && (
            <div id="project" className="section-container">

              <div className="wlcon">
              <h3>  OFW South Korea (Factory Worker)</h3>
                <p className="skt">Skills acquired:</p>
                <ul>
                  <li>Self-improvement</li>
                  <li>Precision and Attention to Detail</li>
                  <li>Technical Aptitude (Hands-on)</li>
                  <li>Teamwork and Collaboration</li>
                  <li>Discipline and Work Ethic</li>
                  <li>Resilience and Perseverance</li>
                  <li>Communication (Cross-Cultural)</li>
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities:</p>
                <ul>
                  <li>Operate machinery for double glazing mirror production.</li>
                  <li>Inspect finished mirrors for quality and defects.</li>
                  <li>Adhere to safety protocols and guidelines during mirror manufacturing.</li>
                  <li>Maintain a clean and safe working environment in the mirror production area.</li>
                  <li>Package mirrors according to specifications for shipment.</li>
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">IT Related Experience:</p>
                <ul>
                  <li>Creating Web application(During day off)</li>
                  <li>Create macro vba excel program (LOTTO Generator)</li>
                  <li>Practise AI chatbo prompt openAI(chatgpt,gemini,qwen)</li>
                </ul>
              </div>
            </div>
          )}
          {activeWork === 'work2' && (
            <div id="project" className="section-container">
              <div className="wlcon">
                <h3> Kily.ph (SOLO IT staff)</h3>
                <p className="skt">Skills acquired:</p>
                <ul>
                  <li>Windows Server Administration</li>
                  <li>Active Directory Management</li>
                  <li>Adaptability</li>
                  <li>Learning Agility | Work Under Pressure</li>
                  <li>Multimedia Skills: Photo Editing</li>
                  <li>Marketing Skills</li>
                  <li>VBA Macro Programming</li>
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities: (SOLO IT Staff)</p>
                <ul>
                  <li>Install, configure, and maintain computer hardware, operating systems (including Windows Server), and applications.</li>
                  <li>Administer Windows Server, including Active Directory, to manage user accounts, groups, permissions, and access controls.</li>
                  <li>Manage file and print services using Windows Server.</li>
                  <li>Monitor and maintain computer software, hardware, and networks to ensure optimal performance and stability.</li>
                  <li>Diagnose hardware, software, and network faults, and resolve technical and application problems remotely or on-site.</li>
                  <li>Perform on-site maintenance at branch locations, including troubleshooting and replacing hardware components.</li>
                  <li>Test and evaluate new technologies for potential company-wide implementation.</li>
                  <li>Perform other IT-related duties as assigned.</li>
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">IT Related Experience:</p>
                <ul>
                  <li>Photo Editing (Photoshop &Illustrator) | Video Editing</li>
                  <li>Website Testing (with chinese IT)</li>
                  <li>Create APK App</li>
                  <li>Create fully Funtional macro excel VBA application</li>
                </ul>
              </div>
            </div>
          )}
          {activeWork === 'work3' && (
            <div id="project" className="section-container">
              <div className="wlcon">
               <h3>  Tambuting Pawnshop Head Office (IT Staff)</h3>
                <p className="skt">Skills acquired:</p>
                <ul>
                  <li>Hardware setup | OS configuration</li>
                  <li>Software install | System monitoring</li>
                  <li>Network maintenance | Fault diagnosis</li>
                  <li>Problem solving</li>
                  <li>On-site repair | Remote support</li>
                  <li>Tech evaluation</li>
                  <li>IT support</li>
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities:</p>
                <ul>
                  <li>Installing and configuring computer hardware operating system and applications.</li>
                  <li>Monitoring and maintaining computer software , hardware as well as networks;</li>
                  <li>Diagnosing hardware, software and network faults and solve technical and application problems, either over the phone or in person.</li>
                  <li>Perform remote desktop and application support requested by branches.</li>
                  <li>Testing and evaluating new technology acquired on the company.</li>
                  <li>Any other duties relating to IT as requested.</li>
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">IT Related Experience:</p>
                <ul>
                  <li>Publish VB6 software in Windows Server</li>
                  <li>Windows Server Management</li>
                  <li>Creating self-extracting archive (SFX) for branch software version update</li>
                  <li>Create simple C# porgram for audit department.</li>
                  <li>create excel macro VBA program</li>
                </ul>
              </div>
            </div>
          )}
          {activeWork === 'work4' && (
            <div id="project" className="section-container">
              <div className="wlcon">
               <h3>  TESDA Calapan (OJT)</h3>
                <p className="skt">Skills acquired:</p>
                <ul>
                  <li>Data entry | Database use</li>
                  <li>Record keeping</li>
                  <li>Customer assist</li>
                  <li>Basic finance</li>
                  <li>Detail-oriented</li>
                  <li>Workflow awareness</li>
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities:</p>
                <ul>
                  <li>Assist customers in the process of claiming their National Certificate II (NCII).</li>
                  <li>Collect fees associated with NCII certification and Conduct daily sales audits to ensure accuracy</li>
                  <li>Organize and maintain the stock of NCII certificate records.</li>
                  <li>Manage all physical files and documents to prepare reports for the head office.</li>
                  <li>Maintain and manage database access for filing and retrieving information.</li>
                </ul>
              </div>
            </div>
          )}

          <h1></h1>
        </div>
        <div className="workright">
          <div className="workcon">
            <div className="workcr"></div>
            <div className="workt"  onClick={() => {
  handleWork('work1');
  setmodalx('workleft');
}}>
              <p className="whead">Third work (2019 -2024)</p>
              Overseas Filipino Worker (South Korea)
            </div>
            



          </div>
          <div className="workcon">
            <div className="workcr"></div>
                 <div className="workt"  onClick={() => {
  handleWork('work2');
  setmodalx('workleft');
}}>   <p className="whead">Second Work (2017 -2019)</p>
              <p>
                KILY.PH online shopping Corporation (IT STAFF) 7th Flr Azure
                Business Center 1197 EDSA Katipunan Quezon City.
              </p>
            </div>
          </div>
          <div className="workcon">
            <div className="workcr"></div>
                <div className="workt"  onClick={() => {
  handleWork('work3');
  setmodalx('workleft');
}}>   <p className="whead">First Work (2015 -2017)</p>
              <p>
                TAMBUNTING GROUP OF COMPANIES 8thflr. 1840 Jacinta bldg. II, Sta.
                Rita St. Brgy. Guadalupe Nuevo, Makati City
              </p>
            </div>
          </div>
          <div className="workcon1">
            <div className="workcr"></div>
                 <div className="workt"  onClick={() => {
  handleWork('work4');
  setmodalx('workleft');
}}>  <p className="whead">On the Job Training (2014 - 2015)</p>
              <p>
                TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY (TESDA)
                Bldg. III Gov. Infantado St., SMV, Calapan City Oriental Mindoro
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
