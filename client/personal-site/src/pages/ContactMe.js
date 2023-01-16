import React, { useRef } from 'react'

import TextAnimated from '../components/TextAnimated'
import Typewriter from '../components/Typewriter';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import LinkinInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

// import Fox from '../assets/fox.gif';
// import Goose from '../assets/waterloogoose.gif';
// import Error from '../assets/error.gif';
import Background from '../assets/background1.png';

import '../styles/contact.css';

import Resume from '../assets/resume.pdf';

function ContactMe() {
  const subtitle_content = [
    "Feel Free To Contact me!"
  ];

  const ref = useRef();

  return (
    <div>
      
      <div className="inline-title">
        <span className="word-inline">
          <span className="animated-text"><TextAnimated letter="C"/></span>
          <span className="animated-text"><TextAnimated letter="O"/></span>
          <span className="animated-text"><TextAnimated letter="N"/></span>
          <span className="animated-text"><TextAnimated letter="T"/></span>
          <span className="animated-text"><TextAnimated letter="A"/></span>
          <span className="animated-text"><TextAnimated letter="C"/></span>
          <span className="animated-text"><TextAnimated letter="T"/></span>
        </span>
      </div>

      <div className="subtitle">
        <Typewriter titles= { subtitle_content }/>
      </div>


      <div className="contact-button-row">
        <button>
          <a href={"https://www.linkedin.com/in/eugene-lee-14793124b/"} target="_blank" rel="noopener noreferrer">
            <LinkinInIcon style={{ color: "white", fontSize: 20 }} />
          </a>
        </button>

        <button>
            <a href={"mailto:mail.eugenelee@gmail.com"} target="_blank" rel="noopener noreferrer">
              <EmailIcon style={{ color: "white", fontSize: 20 }} />
            </a>
          </button>

          <button>
            <a href={"https://github.com/EugeneLee3"} target="_blank" rel="noopener noreferrer">
              <GithubIcon style={{ color: "white", fontSize: 20 }} />
            </a>
          </button>
      </div>

      <div className="download-button">
        <a href={ Resume } target="_blank" rel="noopener noreferrer">
          my-resume
        </a>
      </div>

      <div className="contact-body" >

        <Parallax pages={2.09} ref={ ref } >

          <ParallaxLayer 
            offset={0}
            speed={0}
            factor={2.09}
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* <ParallaxLayer 
            sticky={{ start: 0.3, end: 0.4 }}
            offset={0}
            speed={0.1}
          >
            <div className="sticky-object" style={{ top: '0', left:'15vw'}}>
              <img src={Fox} height={125} width={125}/>
            </div>
          </ParallaxLayer>

          <ParallaxLayer 
            sticky={{ start: 1, end: 1.1 }}
            offset={0}
            speed={0.2}
          >
            <div className="sticky-object" style={{ top: '0', right:'20vw'}}>
              <img src={Goose} height={125} width={125}/>
            </div>
          </ParallaxLayer>

          <ParallaxLayer 
            sticky={{ start: 1.3, end: 1.4 }}
            offset={0}
            speed={0.6}
          >
            <div className="sticky-object" style={{ bottom: '30vh', left:'15vw'}}>
              <img src={Error} height={125} width={125}/>
            </div>
          </ParallaxLayer> */}


          <ParallaxLayer 
            offset={0}
            speed={0.35}
            setPosition={0}
          >
            <div className="contact-object" style={{right: '3vh', top: '3vh'}}>
              <div className="content-title">about me</div>
              <div className="content-text">
                <ul>
                  <li>Currently a 1B Computer Engineering student at the University of Waterloo</li>
                  <li>Korean-Canadian 🇰🇷 🇨🇦</li>
                  <li>Aspires to launch a tech start up</li>
                  <li>Enjoys lisitening to music, although singing is a different story...</li>
                </ul>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0.75}
            speed={0.5}
          >
             <div className="contact-object" style={{left: '3vh', top: '0'}}>
              <div className="content-title">experience</div>
              <div className="content-text">
                <ul>
                  <li>Seeking Coops For Summer 2023</li>
                  <li>David Freedman Information Technology Award Winner @ Ursula Franklin Academy</li>
                  <li>2020-2022 Programming Club Leader for High School</li>
                  <li>Relevant Courses: </li>
                  <ul>
                    <li>[ECE 150] Fundamentals of Programming</li>
                    <li>[ECE 124] Digital Circuits</li>
                    <li>[MATH 115] Linear Algebra</li>
                    <li>[MATH 117] Calculus I</li>
                    <li>[MATH 119] Calculus II</li>
                  </ul>
                </ul>
              </div>
            </div>
          </ParallaxLayer >

          <ParallaxLayer 
            offset={1.1}
            speed={0.15}
          >
            <div className="contact-object" style={{right: '3vh', bottom: '3vh'}}>
              <div className="content-title">interests</div>
              <div className="content-text">
                <ul>
                  <li>Technology</li>
                  <li>Video Games</li>
                  <li>Anime/K-Drama</li>
                  <li>Machine Learning and AI</li>
                  <li>Soccer & Basketball</li>
                </ul>
              </div>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>

    </div>
  )
}

export default ContactMe