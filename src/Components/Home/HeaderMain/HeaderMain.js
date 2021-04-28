import React from 'react';
import { Button, Card, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    
                </Col>
                <Col xs={6} md={6}>
                <Jumbotron style={{background: "transparent", marginTop: "150px"}}>
                    <h1 style={{color: "rgb(83, 152, 241)", fontSize: "50px"}}>Bring your home <br/> To lovely color</h1>
                    
                    <p>
                    <Button variant="outline-primary">Book now <FontAwesomeIcon icon={faDolly} /></Button>
                    </p>
                </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderMain;