import { useRef, useState } from 'react';
import './project.css'



interface ProjectSetionProps{activeSection:string;}
function ProjectSetion({activeSection}:ProjectSetionProps){
if(activeSection !== "project"){return null;}

const proj = [
{id:1 , cat:'VBA macro',pname:"Order Scanner",srx1:"./s9.png",srx:"./Order.png",txt:"Scanning a large volume of orders manually is time-consuming. To address this, we've developed an auto-scanner designed to efficiently locate orders within various payment platforms.\n\nThis tool offers several key benefits:\n\n* Reduced Time: It significantly cuts down the time required for order scanning, freeing up your team for other tasks.\n* Improved Reporting: The auto-scanner generates accurate and comprehensive reports of all scanned orders.\n* Enhanced Accuracy: By automating the process, it eliminates the human errors often associated with manual scanning.\n* Pending Order Updates: The system can also update the status of pending orders that haven't been completed yet.\n\nThis solution will streamline your workflow, provide better insights through detailed reports, and ensure greater accuracy than manual methods.",projid:"pr1", uses: "Company Use"},
{id:2 , cat:'VBA macro',pname:"LOTTO GENERATOR",srx1:"./s9.png",srx:"./lotto.png",txt:"I have developed a lottery number generator based on my unique deduction methods. My approach categorizes numbers by 'color' (each color representing a group of 10 numbers), analyzes winning number patterns through line connections on a fixed form, and calculates the probability of color code combinations.The generator also considers the ratio of odd and even numbers, identifies consecutive numbers, tracks frequently winning numbers, and highlights 'missing' numbers that tend to win often. Finally, it incorporates a self-analysis feature, allowing for manual adjustments to the generated numbers. While aiming for maximum accuracy, the system can consistently predict at least three winning numbers for each generation event.Note: The initial 'color code' classification in the previous description was inaccurate and has been clarified.",projid:"pr2", uses: "personal use"},
{id:3 , cat:'VBA macro',pname:"EPS CBT",srx1:"./s9.png",srx:"./eps3.png",txt:"I've developed an EPS computer-based text exam for Korean TOPIK prep, designed for instructors to practice students; it features random reading/listening multiple-choice questions with navigation and a timer; the backend allows teachers to upload questions via manual text, two-picture (question/choices), whole-picture, or WAV files for listening, plus configure exam level, time limit, passing score, and manage questions.",projid:"pr2", uses: "personal use"},
{id:4 , cat:'VBA macro',pname:"JSON EDITOR",srx1:"./s9.png",srx:"./jsonn.png",txt:"For my portfolio website, I initially planned to use a database but decided to use JSON files as a 'fake API' or 'mock data' source; to streamline this, I developed an Excel VBA macro program that easily generates JSON from my records, saving them to a sheet, and then, with a button click, reads all the data and converts it into JSON text, which has been very useful for time management.",projid:"pr2", uses: "personal use"},
{id:5 , cat:'VBA macro',pname:"Shopee Scanner",srx1:"./s9.png",srx:"./shop1.png",txt:"I developed a program for my company to automate manual, time-consuming, and inaccurate warehouse order writing for rider pickups; this barcode scanner system ensures accurate order lists and counting, integrates Shopee data via third-party software, displays scanned orders, and has been expanded to connect with CSR, Auditing, and Finance departments, resulting in an almost complete, interconnected system.",projid:"pr2", uses: "personal use"},
{id:6 , cat:'web',pname:"CSS exercises",srx1:"./css.png",srx:"./css1.png",txt:"I've undertaken various CSS, HTML, and JavaScript exercises to strengthen my web development fundamentals, including replicating existing web pages with my own code, and creating exercises that help me learn new techniques and styles for future development.",projid:"pr3", uses: "personal use"}
];

const scrnshot =[
{pid:1 ,src:"./Order.png"},{pid:1 ,src:"./ord2.png"},{pid:1 ,src:"./ord3.png"},{pid:1 ,src:"./ord1.png"},
{pid:2 ,src:"./lotto.png"},
{pid:3 ,src:"./eps.png"},{pid:3 ,src:"./eps2.png"},{pid:3 ,src:"./eps3.png"},
{pid:4 ,src:"./jsonn.png"},{pid:4 ,src:"./json1.png"},
{pid:5 ,src:"./shope.png"},{pid:5 ,src:"./shop1.png"},{pid:5 ,src:"./shop2.png"},
{pid:6 ,src:"./css1.png"},{pid:6 ,src:"./css2.png"}

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

  {scrnshot.filter(skill => skill.pid === proid) // Example: Filter by category
                  .map((skill) => (
                       <><div className="skreq"><img src={skill.src} alt="" /></div></>
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
