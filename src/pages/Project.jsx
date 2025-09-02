import React, { useState } from 'react';
import './Project.css';
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
import ecostore from '../assets/ecostore.png';

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  // const allProjects = [
  //   {
  //     title: 'Akatsuki Portal',
  //     description: 'A fan-made Akatsuki anime website with character bios, powers, and a dark UI theme.',
  //     image: Akkatsuki,
  //     tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  //     codeLink: '#',
  //     demoLink: '#',
  //     extraClass: 'card-1'
  //   },
  //   {
  //     title: 'MyPortfolio',
  //     description: 'Responsive React portfolio showcasing projects, skills, and contact form with email integration.',
  //     image: portfolio,
  //     tech: ['React', 'Tailwind CSS', 'EmailJS'],
  //     codeLink: '#',
  //     demoLink: '#',
  //     extraClass: 'card-2'
  //   },
  //   {
  //     title: 'Imagine Art Gallery',
  //     description: 'An elegant, responsive art gallery showcasing fantasy art using Bootstrap framework.',
  //     image: imagineart,
  //     tech: ['HTML', 'CSS', 'Bootstrap'],
  //     codeLink: '#',
  //     demoLink: '#',
  //     extraClass: 'card-3'
  //   },
  //   {
  //     title: 'Code 99',
  //     description: 'HTMLCSSJS based landing page for a coding club. Smooth scroll, modals, and code editor theme.',
  //     image: code99,
  //     tech: ['HTML', 'CSS', 'JavaScript'],
  //     codeLink: '#',
  //     demoLink: '#',
  //     extraClass: 'card-3'
  //   },
  //   {
  //     title: 'Artorias',
  //     description: 'A clean and modern single-page website built with HTML, CSS, and Bootstrap — perfect for showcasing a product or service.',
  //     image: Artroias,
  //     tech: ['HTML', 'CSS', 'Bootstrap'],
  //     codeLink: '#',
  //     demoLink: '#',
  //     extraClass: 'card-4'
  //   },
  //   {
  //     title: 'Todo App',
  //     description: 'A full-stack Todo app with a Java Spring Boot backend. It includes login with JWT, REST APIs, and task saving.',
  //     image: Todo,
  //     tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'],
  //     codeLink: '#',
  //     demoLink: '#',
  //     extraClass: 'card-4'
  //   }
  // ];
  const allProjects = [
  {
    title: 'EcoStore',
    description: 'A full-stack e-commerce website with product catalog, shopping cart, authentication, and secure checkout. Built with React frontend and Spring Boot backend.',
    image: ecostore, // make sure you import or define ecoStore image
    tech: ['React', 'Tailwind CSS', 'Spring Boot', 'Java', 'MySQL'],
    codeLink: 'https://github.com/NVENGATESH',
    demoLink: 'https://eco-store-git-main-nvengateshs-projects.vercel.app/',
    extraClass: 'card-0'
  },
  {
    title: 'Akatsuki Portal',
    description: 'A fan-made Akatsuki anime website with character bios, powers, and a dark UI theme.',
    image: Akkatsuki,
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    codeLink: 'https://github.com/NVENGATESH',
    demoLink: 'https://nvengatesh.github.io/AkatsukiLandingPage/',
    extraClass: 'card-1'
  },
  {
    title: 'MyPortfolio',
    description: 'Responsive React portfolio showcasing projects, skills, and contact form with email integration.',
    image: portfolio,
    tech: ['React', 'Tailwind CSS', 'EmailJS'],
    codeLink: 'https://github.com/NVENGATESH',
    demoLink: 'https://portfolio-nishanth-two.vercel.app/',
    extraClass: 'card-2'
  },
  {
    title: 'Imagine Art Gallery',
    description: 'An elegant, responsive art gallery showcasing fantasy art using Bootstrap framework.',
    image: imagineart,
    tech: ['HTML', 'CSS', 'Bootstrap'],
    codeLink: 'https://github.com/NVENGATESH',
    demoLink: 'https://nvengatesh.github.io/ImagineArtCloneProject/',
    extraClass: 'card-3'
  },
  {
    title: 'Code 99',
    description: 'HTML/CSS/JS based landing page for a coding club. Smooth scroll, modals, and code editor theme.',
    image: code99,
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/NVENGATESH',
    demoLink: 'https://nvengatesh.github.io/code99WebSite/',
    extraClass: 'card-4'
  },
  {
    title: 'Artorias',
    description: 'A clean and modern single-page website built with HTML, CSS, and Bootstrap — perfect for showcasing a product or service.',
    image: Artroias,
    tech: ['HTML', 'CSS', 'Bootstrap'],
    codeLink: 'https://github.com/NVENGATESH',
    demoLink: '#',
    extraClass: 'card-5'
  },
  {
    title: 'Todo App',
    description: 'A full-stack Todo app with a Java Spring Boot backend. It includes login with JWT, REST APIs, and task saving.',
    image: Todo,
    tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript','React'],
    codeLink: 'https://github.com/NVENGATESH',
    demoLink: 'https://todo-react-app-two-pearl.vercel.app',
    extraClass: 'card-6'
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
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </div>

      <Footers />
    </>
  );
}
