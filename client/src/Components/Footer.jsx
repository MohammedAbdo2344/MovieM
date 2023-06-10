import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  const year =new Date().getFullYear()
  return (
    <div className="myfooter">
        <footer>
          <p>&copy;2022-{year} <a target='_blank' href="https://www.linkedin.com/in/mohammed-hassan-676173200/" className='Mylink'>Mohammed hassan</a> </p>
        </footer>
      </div>
  );
}

export default Footer;
