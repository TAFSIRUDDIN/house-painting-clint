import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { ServicesContext, UserContext } from '../../App';
import Payment from '../payment/Payment';
import Navber from '../Shared/Navber/Navber';

const Booking = () => {
    const [user, setUser] = useContext(UserContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { id } = useParams();
    const [ bookedData, setBookedData ] = useState(null);
    
    const [ services, setServices] = useContext(ServicesContext);
    console.log(id);

    let selectedService = services.find(service => service._id ==  id);

    let selectedServiceId = selectedService._id
    // console.log(selectedService.name);
    
    const onSubmit = data => {
        // console.log(data);
        setBookedData(data);

    }
    const processBooking = paymentId => {
        const status = { name: "pending"}
        const newServices = {...user, data:bookedData, paymentId, booked: selectedServiceId, status};
        fetch('https://pacific-journey-56563.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newServices)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        console.log(newServices)
    }
    return (
        <>
        <Navber></Navber>
        <Container style={{backgroundColor: 'tomato'}}>
            <form style={{display: bookedData ? 'none': 'block'}} className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                {errors.name && <span className="text-danger">This field is required</span>}

            </div>
            <div className="form-group">
                <input type="text" {...register("service", { required: true })} name="service" className="form-control" value={selectedService.name}/>
                {errors.service && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group row">
                <div className="col-4">

                    <select className="form-control" name="gender" {...register("gender", { required: true })} >
                        <option disabled={true} value="Not set">Select Gender</option>
                        <option value="Premium">Premium</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Business">Business</option>
                    </select>
                    {errors.gender && <span className="text-danger">This field is required</span>}

                    </div>
                </div>

            <div className="form-group text-right">
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
            </form>
            <div style={{display: bookedData ? 'block': 'none', padding: '30px'}}>
                <Payment handlePayment={processBooking}></Payment>
            </div>
            
        </Container>
        </>
    );
};

export default Booking;