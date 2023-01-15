import React from 'react'

import TextAnimated from '../components/TextAnimated'
import Typewriter from '../components/Typewriter';

import LinkinInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

import '../styles/contact.css';

import Resume from '../assets/resume.pdf';
import ContactCard from '../components/ContactCard';

function ContactMe() {
  const subtitle_content = [
    "Feel free to contact me!"
  ]

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
          my-resume.
        </a>
      </div>


      <div className="contact-body">

        <div className="card-body">
          <ContactCard />
        </div>

        <div className="card-body">
          <ContactCard />
        </div>

        <div className="card-body">
          <ContactCard />
        </div>

      </div>

    </div>
  )
}

export default ContactMe