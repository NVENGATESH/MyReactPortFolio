
import './ProjectCard.css';
import { FaGithub,FaBroadcastTower } from "react-icons/fa";


export default function ProjectCard({ title, description, image, tech, codeLink, demoLink, extraClass }) {
  return (
    <div className={`projectCardConatiner ${extraClass}`}>
      <div className='projectimageconatiner'>
        <img src={image} alt={`Screenshot of ${title}`} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>

      <div className='projectteckstacks'>
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className='projectBtn'>
        <a href={codeLink} target='_blank' rel='noreferrer' className='btn btn_primary'>
          <FaGithub /> Source Code
        </a>
        <a href={demoLink} target='_blank' rel='noreferrer' className='btn'>
          <FaBroadcastTower /> Live Demo
        </a>
      </div>
    </div>
  );
}
