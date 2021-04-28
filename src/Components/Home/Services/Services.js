import React, { useContext, useEffect, useState } from 'react';
import { Badge, Container } from 'react-bootstrap';
import { ServicesContext } from '../../../App';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [ services, setServices] = useContext(ServicesContext)
    return (
        <div className="services">
        <Container style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <h1 style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}><Badge variant="secondary">Our top services</Badge></h1>
            <div style={{maxWidth: '95%', margin: '0 auto'}} className="row">
                {
                    services.map(service => <Service key={service._key} service={service}></Service>)
                }
            </div>
        </Container>
        </div>
    );
};

export default Services;