import React, { useState } from 'react'; 
import './About.css';
import ScoreBar from "../Components/ScoreBar";
import { FaGithub,FaHtml5,FaCss3,FaJsSquare,FaReact,FaJava      } from "react-icons/fa";
import Footers from '../Components/Footer'
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";


export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
     <>
    <section className="AboutSection">
      <div className="aboutSectionContainer">
        <div className="AboutConttentContaner">
          <div className="AboutContent">
            <h1>Get to <span>know</span> me!</h1>
            <div className='abcontent'>
              <p>Hi, my name is <span>Vengatesh N</span> and I'm from Chennai, India. I'm a <span>Frontend and Full Stack Web Developer</span> with a <span>B.E in Computer Science and Engineering</span>.</p>
              <p>I enjoy crafting clean, responsive web applications with a strong focus on performance, design, and user experience...</p>
              <p>I've contributed to projects that help small businesses and communities establish a professional online presence...</p>
              <p>Beyond coding, I enjoy competitive programming, designing anime-themed websites, and exploring new tools...</p>
            </div>
            <div className='AboutContntebtn'>
              <button>Contact Me</button>
              <button>Download Resume</button>
            </div>
          </div>

          <div className="ExperienceContainer">
            <div className='experience experice1'>
              <h2>0 <sup>+</sup></h2>
              <p>Year Experience</p>
            </div>
            <div className='experience experice1'>
              <h2>10 <sup>+</sup></h2>
              <p>Project Completed</p>
            </div>
            <div className='experience experice1'>
              <h2>3 <sup>+</sup></h2>
              <p>Certificates</p>
            </div>
          </div>
        </div>

        <div className='Skillscontainer'>
          <h1>My <span>Skillset</span></h1>
          <div className='skills'>


            <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><FaHtml5 /></span>
              <div className='skilnamesansscre'>
                <p>Html</p>
                <h2>80%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>




            <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><FaCss3  /></span>
              <div className='skilnamesansscre'>
                <p>Css </p>
                <h2>80%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>




            <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><IoLogoJavascript  /></span>
              <div className='skilnamesansscre'>
                <p>Js</p>
                <h2>75%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>




            <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><FaReact  /></span>
              <div className='skilnamesansscre'>
                <p>React Js</p>
                <h2>80%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>




            <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><FaJava  /></span>
              <div className='skilnamesansscre'>
                <p>Java</p>
                <h2>85%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>




            <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><BiLogoSpringBoot /></span>
              <div className='skilnamesansscre'>
                <p>SpringBoot</p>
                <h2>80%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>




            <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><BiLogoPostgresql /></span>
              <div className='skilnamesansscre'>
                <p>Postgresql</p>
                <h2>80%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>

             <div
              className='skill skill1'
              onMouseEnter={() => setHovered(true)}     // ✅ set hovered on hover in
              onMouseLeave={() => setHovered(false)}   // ✅ reset on hover out
            >
              <span><FaGithub /></span>
              <div className='skilnamesansscre'>
                <p>Github</p>
                <h2>80%</h2>
                <ScoreBar score={80} width={100} height={5} triggerFill={hovered} />
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
    <Footers/>
   </>
  );
}
