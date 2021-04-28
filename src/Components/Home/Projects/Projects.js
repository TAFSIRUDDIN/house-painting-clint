import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import Project from '../Project/Project';
import './Projects.css';
import project1 from '../../../image/project1.jpg';
import project2 from '../../../image/project2.jpg';
import project3 from '../../../image/project3.jpg';

const projectList = [
    {
        justifyContent: 'justify-content-end',
        name: "Commercial",
        image: 'project1',
        no:1
    },
    {
        justifyContent: 'justify-content-start',
        name: "Premium",
        image: 'project3',
        no:2
    },
    {
        justifyContent: 'justify-content-end',
        name: "Business",
        image: 'project2',
        no:3
    }
]

const Projects = () => {
    
    return (
        <Container>
             <h1 style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}><Badge variant="secondary">Our top projects</Badge></h1>
           
            <div className="main">
                <div className=" project-details project-content">
                    {
                        projectList.map( project =><Project project={project}></Project>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Projects;