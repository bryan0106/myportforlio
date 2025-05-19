import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import './contact.css'; // Make sure this CSS file exists

interface MyDataObject {
  [key: string]: any; // Allows for flexible JSON structure, consider being more specific if possible
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  if (activeSection !== 'contact') {
    return null;
  }

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSaveJSON = (event: FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    const dataToSave: MyDataObject = {
       // This name seems static, is that intentional?
      version: 1.0,
      id: 1,
      name: name,
      email: email,
      message: message,
    };

    const jsonString = JSON.stringify(dataToSave, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json'; // Default filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="contactcontainer">
      <div className="contactl">
        <h1>Let's get started.</h1>
        <h4>CALL ME...</h4>
        <h2>+6399-4163-5901</h2>
        <h4>EMAIL ME...</h4>
        <h2 className="email">DALAWAMPUBRYAN06@</h2>
        <h3 className="email2">GMAIL.COM</h3>
        <h4>FOLLOW ME...</h4>
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
        <h4>BASED IN...</h4>
        <div className="address">STA. MARIA, NAUJAN ORIENTAL MINDORO</div>
      </div>

      <div className="contactr">
        
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/ff1.png" alt="Front of card" /> {/* Add alt attributes to your images */}
            </div>
            <div className="flip-card-back">
              <img src="/ff2.png" alt="Back of card"/>  {/* Add alt attributes to your images */}
            </div>
          </div>
        </div>
        <div className="sendus">

          <h2>MESSAGE ME</h2>
          <p>I'll be glad to answer your question!</p>
          <form className='fomr' method="POST" onSubmit={handleSaveJSON}>
            <label htmlFor="">YOUR NAME*</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              placeholder="Name"
            />
             <label htmlFor="">YOUR EMAIL*</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Email"
            />
             <label htmlFor="">MESSAGE*</label>
            <textarea
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
              placeholder="Message"
            ></textarea>
            <h3></h3>
            <button type="submit">Save to Server</button>
          </form>
        </div>
        
      <h1 className='space'></h1>
      </div>
    </div>
  );
};

export default ContactSection;
