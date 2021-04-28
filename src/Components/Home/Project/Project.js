import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Project.css';

import project1 from '../../../image/project1.jpg';
import project2 from '../../../image/project2.jpg';
import project3 from '../../../image/project3.jpg';

const Project = ({project}) => {
    return (
                 
        <div className={`project-details row align-items-end d-flex ${project.justifyContent} `}>
            <div className="project-details-content col-md-5">
                <h1 style={{color: "rgb(83, 152, 241)"}}>{project.name} Project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis.</p>
                <Button variant="primary">BOOK </Button>

            </div>
            <br/>
            <br/>
            <div className="project-photo col-md-5">
                <img className="img-fluid" src={ require(`../../../image/${project.image}.jpg`).default } alt=""/>  
            </div> 
        </div>              
    );
};

export default Project;