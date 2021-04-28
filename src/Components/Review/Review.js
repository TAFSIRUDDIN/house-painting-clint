import React from 'react';
import { Card, CarouselItem } from 'react-bootstrap';

const Review = ({allReview}) => {
    console.log(allReview);
    return (
        
        <Card style={{margin: '20px', backgroundColor: 'transparent', borderRadius: '8px'}} className="col-md-4 col-sm-6 d-flex align-items-center">
            <Card.Img style={{ width: '70px', borderRadius: '50%', marginTop: '10px'}}variant="top" src={allReview.photoURL} />
            <Card.Body>
                <Card.Title>{allReview.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{allReview.data.email}</Card.Subtitle>
                <Card.Text>{allReview.data.description}
                </Card.Text>
            </Card.Body>
        </Card>
        
    );
};

export default Review;