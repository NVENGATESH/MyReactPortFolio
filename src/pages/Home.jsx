
import React from "react";
import { useEffect } from 'react';
// import { Calendar1 } from "../Components/Calendar1";
import { FaGithub,FaFileDownload,FaInstagram  } from "react-icons/fa";
import './Home.css'
import { CiCalendarDate } from "react-icons/ci";
import TypeEffect from '../Components/TypeEffect';
import { CiUser } from "react-icons/ci";
import Footers from '../Components/Footer'
import { IoCodeSlashOutline,IoLogoLinkedin  } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdHomeRepairService,MdOutlineTipsAndUpdates  } from "react-icons/md";
import nishanthimage from '../assets/nishanth.jpg'

    import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home(){



useEffect(() => {
  AOS.init({ duration: 1000 }); // You can customize options here
}, []);

    return(

        <>
      <section className="Home_section">
    <div className="cardcontainerhome">
    <div className="herodiv" data-aos="fade-up">
    <div className="heroimg_container"><img src={nishanthimage} alt="" /></div>
    <div className="socialmeadiabtnhomecontainer"><span><FaGithub />
</span><span><IoLogoLinkedin />
</span><span><FaInstagram  />
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
        <button className="homebtn1"><CiUser />About me</button>
        <button  className="homebtn1"><FaFileDownload />Resume</button>
        <button  className="homebtn1"><IoCodeSlashOutline />Portfolio</button>
        <button className="homebtns2"><BsEnvelopeFill /> Conatct</button>
        <button className="homebtns2"><MdHomeRepairService />Service</button>
        <button className="homebtns2"><MdOutlineTipsAndUpdates />Update</button></div>
</div>
</div>

      </section>
        <Footers/>
        </>
    )
}