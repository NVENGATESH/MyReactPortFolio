import './Contact.css'
import { FaGithub,FaInstagram } from "react-icons/fa";
import Footers from '../Components/Footer'
import { IoLogoLinkedin  } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

export default function Contect(){


    return(

        <>
        <section className='ContectSection'>
        <div className='ContectSectionConatiner'>
            <div className='ContectContainer'>
               <div className='Contectnameconatiner'><h1>Get In Touch</h1><p></p></div>
               <div className='contectbtnContainerwhole'>
                  <div className='contectbtnContainer'>
                    <span><FaGithub /></span>
                </div>
                 <div className='contectbtnContainer'>
                    <span><FaInstagram /></span>
                </div>
                 <div className='contectbtnContainer'>
                    <span><IoLogoLinkedin /></span>
                </div>
               </div>
              
                <div className='contectformcontainer'>
                    <form action="">
                        <div className='tellformcon formspace'><p>💌 Messages are sent directly to my email inbox</p></div>
                        <div className='namecon formspace'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='your name' />
                        </div>
                        <div className='emailcon formspace'>
                             <label htmlFor="">Email</label>
                            <input type="text" placeholder='your.email@example.com' />
                        </div>
                        <div className='messacon formspace'>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" placeholder='Tell me about your project...'></textarea>
                        </div>
                        <div className='formspace contectbtncon'>
                            <button className=''>send message</button>
                        </div>
                        
                    </form>
                </div>


                <div className='otherwaycontactcontainer'>
                    <div className='otherwayconnamecon'>
                        <h2>Other Ways to Connect</h2>
                        <p></p>
                    </div>
                 <div className='outer-wrapper'>
  <div className='contectcardcon'>
    <div className='directemilcon contectcard'>
      <span><FaGithub  className='contactothericon'/></span>
      <h1>Direct Email</h1>
      <p>vengatesh122003@gmail.com</p>
    </div>
    <div className='sheduleconcard contectcard'>
      <span><CiCalendarDate className='contactothericon' /></span>
      <h1>Schedule a Meeting</h1>
      <p>Book a 30-min call</p>
    </div>
  </div>
</div>

                   
                </div>
            </div>

        </div>


       </section>
       <Footers/>
        </>
    )
}