import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from 'react-bootstrap';
import Home from './Home';

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset 
      < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
    textDecoration: 'underline',
  };

  return (
    <>
      <nav style={{ position: 'fixed', top: 0 }}>
        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
          <li className={activeSection === 'section1' ? 'active' : ''} style={{ margin: '0 10px' }}>
            <a href="#section1" style={activeSection === 
        'section1' ? activeStyle : {}}>
              Section 1
            </a>
          </li>
          <li className={activeSection === 'section2' ? 'active' : ''} style={{ margin: '0 10px' }}>
            <a href="#section2" style={activeSection === 
        'section2' ? activeStyle : {}}>
              Section 2
            </a>
          </li>
          <li className={activeSection === 'section3' ? 'active' : ''} style={{ margin: '0 10px' }}>
            <a href="#section3" style={activeSection === 
          'section3' ? activeStyle : {}}>
              Section 3
            </a>
          </li>
        </ul>
      </nav>
      <div style={{ marginTop: '40px' }}>
        <div data-section id="section1">
         <Navbar/>
        </div>
        <div data-section id="section2">
          <Home/>
        </div>
        <div data-section id="section3">
          <Home/>
        </div>
      </div>
    </>
  );
};

export default Menu;