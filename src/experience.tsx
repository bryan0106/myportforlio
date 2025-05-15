import { useEffect, useState } from 'react';
import type { workexp } from './types/work';
import workdb from './data/workexp.json'
import './Experience.css'


function ExperienceSection({ activeSection, activeWork, handleWork }) {
  if (activeSection !== 'experience') {
    return null; // Or render something else if needed
  }
const [modalx, setmodalx] = useState('workleftx')
 const showmodal = (section: string) => {
      setmodalx(section);
  };

const [workexp, setworkexp] = useState<workexp[]>([]);

useEffect(() => {
    const fetchWorkExp = async () => { // Changed function name to fetchWorkExp
        try {
            // Use a relative path to your JSON file in the public directory
            const response = await fetch('/workexp.json'); // Changed to workexp.json
            const data: workexp[] = await response.json();
            setworkexp(data);
        } catch (error) {
            console.error("Failed to fetch work experience:", error); // Changed error message
            // In a real app, you might set an error state, but as requested,
            // I'm keeping it very simple.
        }
    };
    fetchWorkExp(); // Changed function call to fetchWorkExp
}, []); // Added empty dependency array


















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
               { workdb.filter(workexp => workexp.cat === "third" &&  workexp.sub === "SKA" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities:</p>
                <ul>
                  { workdb.filter(workexp => workexp.cat === "third" &&  workexp.sub === "RSP" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">IT Related Experience:</p>
                <ul>
                  { workdb.filter(workexp => workexp.cat === "third" &&  workexp.sub === "ITR" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
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
                   { workdb.filter(workexp => workexp.cat === "Second" &&  workexp.sub === "SKA" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities: (SOLO IT Staff)</p>
                <ul>
                   { workdb.filter(workexp => workexp.cat === "Second" &&  workexp.sub === "RSP" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">IT Related Experience:</p>
                <ul>
                   { workdb.filter(workexp => workexp.cat === "Second" &&  workexp.sub === "ITR" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
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
                  { workdb.filter(workexp => workexp.cat === "First" &&  workexp.sub === "SKA" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities:</p>
                <ul>
                 { workdb.filter(workexp => workexp.cat === "First" &&  workexp.sub === "RSP" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">IT Related Experience:</p>
                { workdb.filter(workexp => workexp.cat === "First" &&  workexp.sub === "ITR" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
              </div>
            </div>
          )}
          {activeWork === 'work4' && (
            <div id="project" className="section-container">
              <div className="wlcon">
               <h3>  TESDA Calapan (OJT)</h3>
                <p className="skt">Skills acquired:</p>
                <ul>
                 { workdb.filter(workexp => workexp.cat === "OJT" &&  workexp.sub === "SKA" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
                </ul>
              </div>
              <div className="wlcon">
                <p className="skt">Responsibilities:</p>
                <ul>
                  { workdb.filter(workexp => workexp.cat === "OJT" &&  workexp.sub === "RSP" ) // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                   ))}
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
