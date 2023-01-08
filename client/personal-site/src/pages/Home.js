import React from 'react'

import '../styles/home.css'

import LinkinInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

function Home() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <a href={"https://www.linkedin.com/in/eugene-lee-14793124b/"} target="_blank" rel="noopener noreferrer">
              <LinkinInIcon />
            </a>
          </div>
          <div class="col">
            <a href={"mailto:mail.eugenelee@gmail.com"} target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </div>
          <div class="col">
            <a href={"https://github.com/EugeneLee3"} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home