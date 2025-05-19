import { useRef, useState } from 'react';
import './project.css'



interface ProjectSetionProps{activeSection:string;}
function ProjectSetion({activeSection}:ProjectSetionProps){
if(activeSection !== "project"){return null;}

const proj = [
{id:1 , cat:'VBA macro',pname:"Order Scanner",srx1:"./s9.png",srx:"./pr1.png",txt:"Scanned order from list of other data. and give summary result of scanned data",projid:"pr1", uses: "company use"},
{id:2 , cat:'VBA macro',pname:"LOTTO GENERATOR",srx1:"./s9.png",srx:"./pr1.png",txt:"Scanned order from list of other data. and give summary result of scanned data",projid:"pr2", uses: "personal use"},

{id:3 , cat:'web',pname:"json creator",srx1:"./s3.png",srx:"./s3.png",txt:"sample3",projid:"pr3", uses: "personal use"}

];
const scrollableDivRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 150;
  const scrollDuration = 300; // Duration of the animation in milliseconds

 const scrollLeft = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.style.scrollBehavior = 'smooth'; // Enable smooth scrolling
      scrollableDivRef.current.scrollLeft -= scrollAmount;
      // Optionally, revert to auto after the animation (for other interactions)
      setTimeout(() => {
        if (scrollableDivRef.current) {
          scrollableDivRef.current.style.scrollBehavior = 'auto';
        }
      }, scrollDuration);
    }
  };

  const scrollRight = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.style.scrollBehavior = 'smooth'; // Enable smooth scrolling
      scrollableDivRef.current.scrollLeft += scrollAmount;
      // Optionally, revert to auto after the animation
      setTimeout(() => {
        if (scrollableDivRef.current) {
          scrollableDivRef.current.style.scrollBehavior = 'auto';
        }
      }, scrollDuration);
    }
  };
const [proid, setproid] = useState(1);
 const getid = (section: number ) => {
 setproid(section);
  };



  const [activeSkill, setactiveSkill] = useState('0');
 const handleskill = (section: string) => {
      setactiveSkill(section);
  };

return(
<div className="projcontainner">
<div className="fline">
    <div className="progline">
{proj.map((item, _index) => (
    <><div className={item.id === proid?"circleac":"circle"} onClick={() => getid(item.id)}>  <img src={item.srx1} alt="" /></div></>
    ))}
    

  

</div>
</div>
<div className="sline">
{proj.filter(skill => skill.id === proid) // Example: Filter by category
                  .map((skill) => (
                      <><h1>{skill.pname}</h1><h3>{skill.cat}</h3><h3>{skill.uses}</h3>
                      <p>{skill.txt}</p>
                      </>

                  ))}
<p>Screenshots:</p>
<div className="skillreq">
 {proj.map((item, _index) => (
    <><div className="skreq"><img src={item.srx} alt="" /></div></>
    ))}

</div>

<button>DOWNLOAD</button>
<h1 className='bottomspace'> </h1>
</div>

<div className="tline">

<div className='napr'>
     
<a onClick={() => handleskill('0')}>All</a>
  <a onClick={() => handleskill('web')}>Website</a>
  <a onClick={() => handleskill('exe')}>Software</a>
  <a onClick={() => handleskill('app')}>App</a>




        </div>
    <div className="projcontent" ref={scrollableDivRef}>


  {activeSkill === "0" ? ( 

            proj.map((item, _index) => (
    <><div className="projbox" onClick={() => getid(item.id)}>  <img src={item.srx} alt="" /></div></>
    ))
                        
                ): 
                  proj.filter(skill => skill.cat === activeSkill) // Example: Filter by category
                  .map((skill) => (
                     <><div className="projbox" onClick={() => getid(skill.id)}>  <img className='projimg' src={skill.srx} alt="" /></div></>
                   ))}

    </div>

    
    <div className="nextprev"> 
        <button onClick={scrollLeft}>&#x1F448;</button>
      <button onClick={scrollRight}>&#128073;</button>
            
            </div>
</div>
</div>



);
};export default ProjectSetion;
