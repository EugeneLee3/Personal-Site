import React, { useRef } from 'react'

import TextAnimated from '../components/TextAnimated'
import Typewriter from '../components/Typewriter';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import LinkinInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

// import Background from '../assets/background.jpg';

import '../styles/contact.css';

import Resume from '../assets/resume.pdf';
import ContactCard from '../components/ContactCard';

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

        <Parallax pages={3} ref={ ref } >

          <ParallaxLayer 
            offset={0}
            speed={0}
            factor={3}
            style={{
              // backgroundImage: `url(${Background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <ParallaxLayer 
            sticky={{ start: 0.8, end: 2.7 }}
            offset={0}
            speed={0.1}
            factor={3}
          >
            <div className="sticky-object">
              HIHI
            </div>
          </ParallaxLayer>


          <ParallaxLayer 
            offset={0.1}
            speed={0.35}
            setPosition={0}
          >
            <ContactCard />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1}
            speed={0.25}
          >
            <ContactCard />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={2}
            speed={0.9}
          >
              <ContactCard />
          </ParallaxLayer>

        </Parallax>
      </div>

    </div>
  )
}

export default ContactMe