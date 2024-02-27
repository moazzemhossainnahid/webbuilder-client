import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
<footer className="footer p-10 bg-[#212731] text-neutral-content">
  <nav>
    <h6 className="text-white">Categories</h6> 
    <a className="link link-hover text-[#B6BDC4] text-sm">Web Builder</a>
    <a className="link link-hover text-[#B6BDC4] text-sm">Hosting</a>
    <a className="link link-hover text-[#B6BDC4] text-sm">Data Center</a>
    <a className="link link-hover text-[#B6BDC4] text-sm">Robotic-Automation</a>
  </nav> 
  <nav>
    <h6 className="text-white">Contact</h6> 
    <a className="link link-hover text-[#B6BDC4] text-sm">Contact</a>
    <a className="link link-hover text-[#B6BDC4] text-sm">Privacy Policy</a>
    <a className="link link-hover text-[#B6BDC4] text-sm">Terms Of Service</a>
    <a className="link link-hover text-[#B6BDC4] text-sm">Categories</a>
    <a className="link link-hover text-[#B6BDC4] text-sm">About</a>
  </nav> 
  <nav className='md:pt-16'>
    <h6 className="text-white flex justify-center items-center gap-2">United States <FaAngleDown/></h6> 
  </nav>
</footer>
    );
};

export default Footer;