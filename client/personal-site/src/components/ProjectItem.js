import React from 'react';
// import { useNavigate } from 'react-router-dom'

import GithubIcon from "@material-ui/icons/GitHub";

import '../styles/project_item.css';

function ProjectItem({ name, start_date, end_date, desc, gh_link, status, id }) {
  // const navigate = useNavigate();
  return (
    <div className="card-item">

      <div className="card-button">
        <button>
          <a href={ gh_link } target="_blank" rel="noopener noreferrer">
            <GithubIcon style={{ color: "white" }} />
          </a>
        </button>
      </div>

        <div className="card-title">{ name }</div>

        <div className="card-desc">
          <div className="card-desc-status">
            <span>status: </span>

            <span data-status={status} className="status">
              { status }
            </span>
          </div>

          <div className="card-desc-text">
          { desc }
          </div>
          
          <div className="card-desc-bottom">
            technologies: {desc}
          </div>
        </div>

    </div>
  )
}

export default ProjectItem