import React, { useContext } from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';
import Review from '../../Review/Review';
import './Testimonials.css';
import { ReviewContext } from '../../../App';


const Testimonials = () => {
    const [ allReviews, setAllReviews] = useContext(ReviewContext)
    return (
        <div className="testimonial">
        <Container>
            <div style={{padding: '20px'}}>
                <div className="row">
                    {
                        allReviews.map(allReview => <Review allReview={allReview} key={allReview._id}></Review>) 
                    }
                </div>
            </div>
            {/* <Carousel style={{paddingTop: '50px', paddingBottom: '50px'}}>
                <div>
                    <div className="d-flex justify-content-around">
                        {
                           allReviews.map(allReview => <Review key={allReview._id}></Review>) 
                        }
                    </div>
                    </div>
            </Carousel> */}
        </Container>
        </div>
    );
};

export default Testimonials;