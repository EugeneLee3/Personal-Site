import React from 'react'

import Typewriter from '../components/Typewriter'
import TextAnimated from '../components/TextAnimated'

import LinkinInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

import '../styles/landing_page.css'

function LandingPage() {
    const titles = [
        "Computer Engineering Student @ uWaterloo",
        "Korean Canadian",
        "Video Games & Anime Enjoyer"
      ];


  return (
    <div className="landing-container">

        <div className="inline-title">
          <span>
            <span className="word-inline">
              <span className="animated-text"><TextAnimated letter="E"/></span>
              <span className="animated-text"><TextAnimated letter="U"/></span>
              <span className="animated-text"><TextAnimated letter="G"/></span>
              <span className="animated-text"><TextAnimated letter="E"/></span>
              <span className="animated-text"><TextAnimated letter="N"/></span>
              <span className="animated-text"><TextAnimated letter="E"/></span>
              <span className="animated-text"><TextAnimated letter=" "/></span>
            </span>
            <span className="word-inline">
              <span className="animated-text"><TextAnimated letter="L"/></span>
              <span className="animated-text"><TextAnimated letter="E"/></span>
              <span className="animated-text"><TextAnimated letter="E"/></span> 
            </span> 
          </span>
        </div>

        <div className="desc-text">
          <Typewriter titles={titles}/>
        </div>

        <div className="info-row">

          <div className="small-title">
            For More Information
          </div>

          <button>
            <a href={"https://www.linkedin.com/in/eugene-lee-14793124b/"} target="_blank" rel="noopener noreferrer">
              <LinkinInIcon style={{ color: "white" }} />
            </a>
          </button>

          <button>
            <a href={"mailto:mail.eugenelee@gmail.com"} target="_blank" rel="noopener noreferrer">
              <EmailIcon style={{ color: "white" }} />
            </a>
          </button>

          <button>
            <a href={"https://github.com/EugeneLee3"} target="_blank" rel="noopener noreferrer">
              <GithubIcon style={{ color: "white" }} />
            </a>
          </button>

        </div>
      
      </div>

  )
}

export default LandingPage