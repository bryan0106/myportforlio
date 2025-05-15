import React, { useEffect, useState } from "react";
import './About.css'; // Make sure this CSS file exists
import { getAllskills } from "./api/skillsapi"; // Corrected import name
import type { skills } from "./types/skills"; // Corrected import name

 // Corrected import name

const AboutSection: React.FC<{ activeSection: string }> = ({ activeSection }) => {

 const [activeSkill, setactiveSkill] = useState('0');
 const handleskill = (section: string) => {
      setactiveSkill(section);
  };



    const [skillss, setSkillss] = useState<skills[]>([]); // Corrected state variable name to match type
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkills = async () => { // Changed fetchProducts to fetchSkills for clarity
            try {
                const data = await getAllskills();
                setSkillss(data);
                setLoading(false);
            } catch (err: any) { // Use 'err' instead of 'error' (more common) and specify type
                setError('Failed to fetch skills.');
                setLoading(false);
            }
        };

        if (activeSection === 'about') { // Only fetch if the 'about' section is active
            fetchSkills();
        }
    }, [activeSection]); // Add activeSection to the dependency array

    if (loading && activeSection === 'about') {
        return <div>Loading skills...</div>; // Improved loading message
    }

    if (error && activeSection === 'about') {
        return <div>Error: {error}</div>;
    }

    if (activeSection !== 'about') {
        return null;
    }

    return (

        
        <div id="about" className="section-container">
            <div className="first">
                <div className="conta1">
                    <img src="/unnamed.png" alt="Bryan Dalawampu" /> {/* Added alt attribute */}
                </div>
                <div className="conta4">
                    <div className="conta2">
                        <h3>Bryan Dalawampu</h3>
                        <h4>Programmer</h4>
                        Software
                        <div className="prog">
                            <div className="barIn"></div>
                        </div>
                        Website
                        <div className="prog">
                            <div className="barPh"></div>
                        </div>
                        Application
                        <div className="prog">
                            <div className="barSoc"></div>
                        </div>
                        Database
                        <div className="prog">
                            <div className="barSp"></div>
                        </div>
                    </div>
                </div>
                <div className="conta3">
                  
                    <p>Programming Skills</p>
                <div className="tab">
  <button className="tablinks" onClick={() => handleskill('0')}>All</button>
  <button className="tablinks" onClick={() => handleskill('web')}>Website</button>
  <button className="tablinks" onClick={() => handleskill('exe')}>Software</button>
  <button className="tablinks" onClick={() => handleskill('app')}>Mobile App</button>
  <button className="tablinks" onClick={() => handleskill('data')}>Database</button>
</div>
                {activeSkill === "0" ? ( 
                  skillss.map((skill) => ( // Changed product to skill
                               <><img key={skill.id} className="skill" src={skill.source} alt={skill.name} /></>
                        ))
                ): 
                  skillss.filter(skill => skill.cat === activeSkill) // Example: Filter by category
                  .map((skill) => (
                    <><img key={skill.id} className="skill" src={skill.source} alt={skill.name} /></>
                   ))}
                      
                </div>
            </div>



            
            <div className="second">
                <div className="cont">

                 
                    <p>
                        &nbsp;&nbsp;&nbsp; I'm Bryan, a programmer with a genuine enthusiasm for building software that solves
                        real-world problems. My strength lies in my analytical approach and ability to break down complex
                        tasks into logical steps for program development. I'm constantly thinking about how technology can
                        streamline manual processes, and I enjoy the challenge of bringing those ideas to life through code.
                        My coding style is rooted in a deep understanding of core principles, allowing me to build robust and
                        purposeful applications based on my own logical framework. While I am an introverted individual who
                        excels in focused environments, I am committed to delivering high-quality, effective software
                        solutions.
                    </p>
                    <h1></h1>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
