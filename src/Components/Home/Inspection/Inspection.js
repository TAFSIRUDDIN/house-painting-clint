import React from 'react';
import { Badge, Card, CardColumns, Container } from 'react-bootstrap';
import inspection1 from '../../../image/inspection1.jpg';
import inspection2 from '../../../image/inspection2.jpg';
import inspection3 from '../../../image/inspection3.jpg';

const Inspection = () => {
    return (
        <Container style={{ marginBottom: '150px'}}>
            <Container><h1 style={{textAlign: 'center', marginTop: '150px', marginBottom: '50px'}}><Badge variant="secondary">Inspection</Badge></h1></Container>
            <CardColumns style={{maxWidth: '80%', margin: '0 auto'}}>
                <Card style={{backgroundColor: 'rgb(241, 228, 225)'}}>
                    <Card.Img variant="top" src={inspection1} />
                    <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'rgb(241, 228, 225)'}} className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card style={{backgroundColor: 'rgb(241, 228, 225)'}}>
                    <Card.Img variant="top" src={inspection2} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card style={{backgroundColor: 'rgb(241, 228, 225)'}} className="text-center">
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'rgb(241, 228, 225)'}}>
                    <Card.Img variant="top" src={inspection3} />
                    <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'rgb(241, 228, 225)'}}>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    );
};

export default Inspection;