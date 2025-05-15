import { useRef, useState } from 'react';
import './project.css'

function ProjectSetion ({activeSection}){
if(activeSection !== "project"){return null;}

const proj = [
{id:1 , cat:'web',pname:"json creator",srx:"./s1.png",txt:"sample1",projid:"pr1", uses: "personal use"},
{id:2 , cat:'web',pname:"json creator",srx:"./s2.png",txt:"sample2",projid:"pr2", uses: "personal use"},
{id:3 , cat:'web',pname:"json creator",srx:"./s3.png",txt:"sample3",projid:"pr3", uses: "personal use"},
{id:4 , cat:'web',pname:"json creator",srx:"./s4.png",txt:"sample4",projid:"pr4", uses: "personal use"},
{id:5 , cat:'web',pname:"json creator",srx:"./s1.png",txt:"sample1",projid:"pr1", uses: "personal use"},
{id:6 , cat:'web',pname:"json creator",srx:"./s2.png",txt:"sample2",projid:"pr2", uses: "personal use"},
{id:7 , cat:'web',pname:"json creator",srx:"./s3.png",txt:"sample3",projid:"pr3", uses: "personal use"},
{id:8 , cat:'web',pname:"json creator",srx:"./s4.png",txt:"sample4",projid:"pr4", uses: "personal use"}

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


return(
<div className="projcontainner">
<div className="fline">
    <div className="progline">

{proj.map((item, _index) => (
    <><div className={item.id === proid?"circleac":"circle"} onClick={() => getid(item.id)}>  <img src={item.srx} alt="" /></div></>
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

<div className="skillreq">
 {proj.map((item, _index) => (
    <><div className="skreq"><img src={item.srx} alt="" /><p>{item.txt}</p></div></>
    ))}

</div>

<button>DOWNLOAD</button>

</div>

<div className="tline">

<div className='napr'>
        <a>ALL</a>
        <a>WebApp</a>
         <a>Software</a>
    <a>APP</a>
        </div>
    <div className="projcontent" ref={scrollableDivRef}>
{proj.map((item, _index) => (
    <><div className="projbox" onClick={() => getid(item.id)}>  <img src={item.srx} alt="" /></div></>
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
