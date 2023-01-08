import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../styles/project_item.css';

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div className="item">

        <Card style={{ width: '18rem'  }}>
          <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{ name }</Card.Title>
                <Card.Text>
                  quick description of stuff
                </Card.Text>
              <Button variant="primary" onClick={() => {navigate("/projects/" + id)}}>See More</Button>
          </Card.Body>
        </Card>

    </div>
  )
}

export default ProjectItem