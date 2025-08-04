
import React from "react";
import { useEffect } from 'react';
// import { Calendar1 } from "../Components/Calendar1";
import { FaGithub,FaFileDownload,FaInstagram  } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import './Home.css'
import { CiCalendarDate } from "react-icons/ci";
import TypeEffect from '../Components/TypeEffect';
import { CiUser } from "react-icons/ci";
import Footers from '../Components/Footer'
import { IoCodeSlashOutline,IoLogoLinkedin  } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdHomeRepairService,MdOutlineTipsAndUpdates  } from "react-icons/md";
import courimagrmy from '../assets/courimagrmy.jpg'

    import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home(){



useEffect(() => {
  AOS.init({ duration: 1000,once: true,}); // You can customize options here
}, []);

    return(

        <>
      <section className="Home_section">
    <div className="cardcontainerhome">
    <div className="herodiv" data-aos="fade-up">
    <div className="heroimg_container"><img src={courimagrmy} alt="" /></div>
    <div className="socialmeadiabtnhomecontainer"><span><a href="https://github.com/NVENGATESH" target="_blank"><FaGithub /></a>
</span><span> <a href="https://www.linkedin.com/in/vengatesh-n1012/" target="_blank"><IoLogoLinkedin /></a>
</span><span> <a href="#" target="_blank"><FaInstagram  /></a>

</span></div>
 <div className="bookmeatingBtn">
  <button className="bookme"><CiCalendarDate /> Book Me</button>
</div>

    </div>
</div>
<div className="contentconaterhome" >
    <div className="contentconaterhomecontent" data-aos="fade-left">
    <h1 className="hero_name">Hi, I'm <span>Nishanth NavaNeethakannan</span></h1>
    <div className="typeriterdiv">
<TypeEffect/>
    </div>
    <p>Frontend Developer & Designer passionate about building beautiful, user-focused web experiences.</p>
    <div className="hero_btns">
        <button className="homebtn1"><CiUser/><Link to="/about">About me</Link></button>
        
        <button  className="homebtn1"><FaFileDownload />Resume</button>
        <button  className="homebtn1"><IoCodeSlashOutline /><a href="https://portfolio-nishanth-two.vercel.app/" target="_blank" rel="noreferrer">
  Portfolio
</a></button>

        <button className="homebtns2"><BsEnvelopeFill /> <Link to="/contact"> Contact</Link></button>
        <button className="homebtns2"><MdHomeRepairService />Service</button>
        <button className="homebtns2"><MdOutlineTipsAndUpdates />Update</button></div>
</div>
</div>

      </section>
        <Footers/>
        </>
    )
}