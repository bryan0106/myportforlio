import { useEffect, useState } from 'react';
import './skills.css';
import type { skills } from './types/skills';
import skilldb from './data/skills.json'


interface SkillSectionProps {
  activeSection: string;
}

 

function SkillSection({ activeSection }: SkillSectionProps) {
  if (activeSection !== "skill") {
    return null;
  }
const [activeSkill, setactiveSkill] = useState('0');
 const handleskill = (section: string) => {
      setactiveSkill(section);
  };

const [skillid, setskillid] = useState('0');
 const getid = (section: string ) => {
 setskillid(section);
  };





  
const [, setskills] = useState<skills[]>([]);
useEffect(()=>{
const fetchskill = async ()=>{
try{
    const response = await fetch('./skills.json');
    const data: skills[] = await response.json();
    setskills(data);
 } catch (error) {
            console.error("Failed to fetch work experience:", error); }
finally{}

};fetchskill();


});

const levelbar = [
{cat:'Beginner', lvl: 2},
{cat:'Beginner', lvl: 2},
{cat:'Intermediate', lvl: 4},
{cat:'Intermediate', lvl: 4},
{cat:'Expert', lvl: 6},
{cat:'Expert', lvl: 6}
];
 

  return (

    
       
       
      


    <div className="skillcontainer">
      <div className="Skleft">


<button className="tablinks" onClick={() => handleskill('0')}>All</button>
  <button className="tablinks" onClick={() => handleskill('web')}>Website</button>
  <button className="tablinks" onClick={() => handleskill('exe')}>Software</button>
  <button className="tablinks" onClick={() => handleskill('app')}>Mobile App</button>
  <button className="tablinks" onClick={() => handleskill('data')}>Database</button>
</div>
              
      <div className="skright">
        <div className="skicon">


        
        {activeSkill === "0" ? ( 

            
                  skilldb.map((skill) => ( // Changed product to skill
                               <div className="sksk"><img key={skill.id} className="skill" src={skill.source} alt={skill.name} onClick={() => getid(skill.id)} />
                               <p>{skill.name} </p></div>
                        ))
                ): 
                  skilldb.filter(skill => skill.cat === activeSkill) // Example: Filter by category
                  .map((skill) => (
                   <div className="sksk"><img key={skill.id} className="skill" src={skill.source} alt={skill.name}  onClick={() => getid(skill.id)} />
                     <p>{skill.name} </p></div>
                   ))}
        </div>
        <div className="skdesc">
          <h3>DESCRIPITION</h3>
        { skilldb.filter(skill => skill.id === skillid) // Example: Filter by category
                  .map((skill) => (
                    <><div className="desl"><img key={skill.id} className="skillde" src={skill.source} alt={skill.name} /></div>
                    
                  <div className="desr">  <h3>{skill.name}</h3>
                       <p>{skill.exp} : {skill.proj}</p>

       <div className="sbar">
         {levelbar.map((_item, index) => (
  <div
    className={
      skill.level === 'Beginner' && index < 2?
         "skillbar"
        : skill.level === 'Intermediate' && index < 4?
         "skillbar"
        :skill.level === 'Expert' && index < 6?
         "skillbar"
        :  "skillbarac"
    }
  ></div>
))}
       </div>
          <p>{skill.level}</p>
         
                    
                    </div>
                     <div className="destx">{skill.context}</div>
                    </>
                    
                   ))}
                   
    
        
       
     






        </div>
      </div>
    </div>
  );
}

export default SkillSection;

