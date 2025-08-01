import './Project.css';
import React, { useState } from 'react';
import Footers from '../Components/Footer'
import ProjectCard from '../Components/ProjectCard';
import { FaBroadcastTower } from "react-icons/fa";


import img1 from '../assets/lap.png';
import img2 from '../assets/lap.png';
import img3 from '../assets/lap.png';
import img4 from '../assets/lap.png';
import img5 from '../assets/lap.png';

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allProjects = [
    {
      title: 'Mukome',
      description: 'All-in-one journal, sleep tracker & todo app.',
      image: img1,
      tech: ['HTML', 'CSS', 'JavaScript'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-1'
    },
    {
      title: 'Taskify',
      description: 'Minimal task manager with localStorage.',
      image: img2,
      tech: ['React', 'CSS'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-2'
    },
    {
      title: 'SleepSync',
      description: 'Track your sleep cycles and patterns.',
      image: img3,
      tech: ['HTML', 'SASS', 'Chart.js'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-3'
    },
    {
      title: 'Java Desk App',
      description: 'A Java-based desktop note-taking app.',
      image: img4,
      tech: ['Java', 'Swing'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-4'
    },
    {
      title: 'React Dashboard',
      description: 'Responsive dashboard built with React.',
      image: img5,
      tech: ['React', 'Tailwind'],
      codeLink: '#',
      demoLink: '#',
      extraClass: 'card-5'
    },
  ];

  const filteredProjects = activeFilter === 'All'
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
      <Footers/>
    </>
  );
}
