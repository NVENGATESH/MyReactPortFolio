import './Project.css';
import React, { useState, useEffect } from 'react';
import Footers from '../Components/Footer';
import ProjectCard from '../Components/ProjectCard';
import { FaBroadcastTower } from 'react-icons/fa';

import img1 from '../assets/lap.png';
import Artroias from '../assets/Artroias.png';
import imagineart from '../assets/imagineart.png';
import Akkatsuki from '../assets/Akkatsuki.png';
import portfolio from '../assets/portfolio.png';
import code99 from '../assets/code99.png';
import Todo from '../assets/Todo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ List of all AOS animations
const aosAnimations = [
  'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right',
  'fade-up-right', 'fade-up-left', 'fade-down-right', 'fade-down-left',
  'flip-up', 'flip-down', 'flip-left', 'flip-right',
  'slide-up', 'slide-down', 'slide-left', 'slide-right',
  'zoom-in', 'zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-right',
  'zoom-out', 'zoom-out-up', 'zoom-out-down', 'zoom-out-left', 'zoom-out-right'
];

const getRandomAOS = () => {
  return aosAnimations[Math.floor(Math.random() * aosAnimations.length)];
};

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allProjects = [
    {
      title: 'Akatsuki Portal',
      description: 'A fan-made Akatsuki anime website with character bios, powers, and a dark UI theme.',
      image: Akkatsuki,
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-1',
      aos: getRandomAOS()
    },
    {
      title: 'MyPortfolio',
      description: 'Responsive React portfolio showcasing projects, skills, and contact form with email integration.',
      image: portfolio,
      tech: ['React', 'Tailwind CSS', 'EmailJS'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-2',
      aos: getRandomAOS()
    },
    {
      title: 'Imagine Art Gallery',
      description: 'An elegant, responsive art gallery showcasing fantasy art using Bootstrap framework.',
      image: imagineart,
      tech: ['HTML', 'CSS', 'Bootstrap'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-3',
      aos: getRandomAOS()
    },
    {
      title: 'Code 99',
      description: 'HTML/CSS/JS based landing page for a coding club. Smooth scroll, modals, and code editor theme.',
      image: code99,
      tech: ['HTML', 'CSS', 'JavaScript'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-3',
      aos: getRandomAOS()
    },
    {
      title: 'Artorias',
      description: 'A clean and modern single-page website built with HTML, CSS, and Bootstrap — perfect for showcasing a product or service.',
      image: Artroias,
      tech: ['HTML', 'CSS', 'Bootstrap'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-4',
      aos: getRandomAOS()
    },
    {
      title: 'Todo App',
      description: 'A full-stack Todo app with a Java Spring Boot backend. It includes login with JWT, REST APIs, and task saving.',
      image: Todo,
      tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-4',
      aos: getRandomAOS()
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((proj) => proj.tech.includes(activeFilter));

  const filters = ['All', 'HTML', 'React', 'Java'];

  return (
    <>
      <div className="filter-buttons">
        <h1 className="myproject">My Projects</h1>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-wrapper">
        <div className="project-grid">
          {filteredProjects.map((proj, index) => (
            <div key={index} data-aos={proj.aos}>
              <ProjectCard {...proj} />
            </div>
          ))}
        </div>
      </div>

      <Footers />
    </>
  );
}
