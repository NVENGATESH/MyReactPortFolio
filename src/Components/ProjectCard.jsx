// import './ProjectCard.css';
// import lap from '../assets/lap.png';
// import { FaGithub } from "react-icons/fa";

// export default function ProjectCard() {
//   return (
//     <>
//       <div className='projectCardConatiner'>
//         <div className='projectimageconatiner'>
//           <img src={lap} alt="Screenshot of Akkatsuki project" />
//         </div>
//         <h1>Akkatsuki</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis mi!veritatis</p>
        
//         <div className='projectteckstacks'>
//           <span>html</span>
//         </div>
        
//         <div className='projectBtn'>
//           <button className='btn btn_primary'><FaGithub />Source Code</button>
//           <button className='btn'><FaGithub />Live Demo</button>
//         </div>
//       </div>
//     </>
//   );
// }



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
