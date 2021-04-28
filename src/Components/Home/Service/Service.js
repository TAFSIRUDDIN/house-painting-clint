import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import test from '../../../image/trends.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly } from '@fortawesome/free-solid-svg-icons';
import './Service.css';

const Service = ({service}) => {
    console.log(service);
    return (
        <div className="card col-md-6" style={{maxWidth: '540px', backgroundColor: 'rgb(241, 228, 225)'}}>
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center ">
                    <img style={{width: '200px', height: '283px'}} className="img-thumbnail" src={`data:image/png;base64,${service.image.img}`} alt="..."/>
                </div>
                <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <Link to={`/booking/${service._id}`}><Button variant="outline-primary">Book Now <FontAwesomeIcon icon={faDolly} /></Button></Link>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Service;