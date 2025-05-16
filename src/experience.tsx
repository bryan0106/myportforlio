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

  const [workn, setworkn] = useState('third')
 const worknn = (section: string) => {
      setworkn(section);
  };
   const [worknam, setworknam] = useState('OFW (South Korea)')
 const worknnam = (section: string) => {
      setworknam(section);
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
  
      <div className="workmc">
        <div className={modalx}>
           <div className='closebtn' onClick={() => showmodal('workleftx')}> x</div>
          {activeWork === 'work1' && (
           
              <><div className="wlcon">
            <h3>  {worknam}</h3>
            <p className="skt">Skills acquired:</p>
            <ul>
              {workdb.filter(workexp => workexp.cat === workn && workexp.sub === "SKA") // Example: Filter by category
                .map((workexp) => (
                  <li key={workexp.id}>{workexp.content}</li>
                ))}
            </ul>
          </div><div className="wlcon">
              <p className="skt">Responsibilities:</p>
              <ul>
                {workdb.filter(workexp => workexp.cat === workn && workexp.sub === "RSP") // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                  ))}
              </ul>
            </div><div className="wlcon">
              <p className="skt">IT Related Experience:</p>
              <ul>
                {workdb.filter(workexp => workexp.cat === workn && workexp.sub === "ITR") // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                  ))}
              </ul><h1> </h1>
            </div></>
          )}
          {activeWork === 'work2' && (
              <><div className="wlcon">
            <h3> {worknam}</h3>
            <p className="skt">Skills acquired:</p>
            <ul>
              {workdb.filter(workexp => workexp.cat === workn && workexp.sub === "SKA") // Example: Filter by category
                .map((workexp) => (
                  <li key={workexp.id}>{workexp.content}</li>
                ))}
            </ul>
          </div><div className="wlcon">
              <p className="skt">Responsibilities:</p>
              <ul>
                {workdb.filter(workexp => workexp.cat === workn && workexp.sub === "RSP") // Example: Filter by category
                  .map((workexp) => (
                    <li key={workexp.id}>{workexp.content}</li>
                  ))}
              </ul>
            </div></>
          )}
 <h1></h1>
          <h1></h1>
        </div>
        <div className="workright">
          <div className="workcon">
            <div className="workcr"></div>
            <div className="workt"  onClick={() => {
                                                      worknnam('OFW (South Korea)');
                                                    worknn('third');
                                                     handleWork('work1');
                                                    showmodal('workleft');}}>
              <p className="whead">Third work (2019 -2024)</p>
              <h2> OFW (South Korea)</h2>
              <h3>FACTORY WORKER</h3>
              <p>Suncheon Si Jeollanam Do South Korea. </p>
            
            </div>
          </div>
          <div className="workcon">
            <div className="workcr"></div>
                 <div className="workt"  onClick={() => {
                   worknnam('KILY.PH online shopping Corporation');
                                                     worknn('Second');
                                                     handleWork('work1');
                                                    showmodal('workleft');}}>
<p className="whead">Second Work (2017 -2019)</p>

 <h2> KILY.PH online shopping Corporation</h2>
              <h3>IT STAF(solo)</h3>
              <p>  7th Flr Azure Business Center 1197 EDSA Katipunan Quezon City. </p>

            </div>
          </div>
          <div className="workcon">
            <div className="workcr"></div>
                <div className="workt"  onClick={() => {
                  worknnam('TAMBUNTING GROUP OF COMPANIES');
                                                    worknn('First');
                                                     handleWork('work1');
                                                    showmodal('workleft');}}>
               <p className="whead">First Work (2015 -2017)</p>
             <h2> TAMBUNTING GROUP OF COMPANIES</h2>
              <h3>IT STAFF</h3>
              <p> 8thflr. 1840 Jacinta bldg. II, Sta. Rita St. Brgy. Guadalupe Nuevo, Makati City. </p>
            </div>
          </div>
          <div className="workcon1">
            <div className="workcr"></div>
                 <div className="workt"  onClick={() => {
                     worknnam('TESDA Calapan');
                                                    worknn('OJT');
                                                     handleWork('work2');
                                                    showmodal('workleft');}}>
                                                      
          <p className="whead">On the Job Training (2014 - 2015)</p>
          <h2> TESDA Calapan</h2>
              <h3>OFFICE CLERK</h3>
              <p>  Bldg. III Gov. Infantado St., SMV, Calapan City Oriental Mindoro. </p>
              
            </div>
          </div><h1 className='expsp'></h1>
        </div>
      </div>
  );
}

export default ExperienceSection;
