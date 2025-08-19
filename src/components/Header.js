import { useState } from 'react';
//import { FaBars, FaTimes } from 'react-icons/fa';
import LOGO from '../assets/images/LOGO.ico';

const Header = () => {
  const [isOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
       
        <a href="/" className="logo">
          <img src={LOGO} alt="" /> <span>Akhilesh Kumar Sahu</span>
        </a>
        
  <nav className={`navbar navbar-expand-lg navbar-dark bg-var(--secondary-color) ${isOpen ? 'active' : ''}`}>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
             < a className="nav-link active"   href="/">Home</ a>
         </li>
         <li className="nav-item">
            <a className="nav-link " href="#skills">Skills</a>
        </li>
         
         <li className="nav-item">
            <a className="nav-link " href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#contact">Contact</a> 
        </li>
       
        
      </ul>
      
      
    </div>
  </div>
</nav>
        {/*<div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
          
        </div>*/}
      </div>
    </header>
  );
};

export default Header;