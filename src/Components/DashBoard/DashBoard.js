import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardColumns, CardDeck, Col, Container, ListGroup, Nav, Row, Tab, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ServicesContext, UserContext } from '../../App';
import BookedService from '../BookedService/BookedService';
import BookedServiceUser from '../BookedServiceUser/BookedServiceUser';
import Payment from '../payment/Payment';
import Navber from '../Shared/Navber/Navber';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashBoard = () => {
        const [admin, setAdmin] = useState({})
        const [info, setInfo] = useState({});
        const [file, setFile] = useState(null);
        const [isAdmin, setIsAdmin] = useState(false);
        const { register, formState: { errors }, handleSubmit } = useForm();
        const [user, setUser] = useContext(UserContext);
        const [orders, setOrders] = useState([]);
        const [adminOrders, setAdminOrders] = useState([]);
        const [ services, setServices] = useContext(ServicesContext);


        const handleBlur = e => {
            const newInfo = {...info}
            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo)
        }

        const handleFileChange = e => {
            const newFile = e.target.files[0];
            setFile(newFile);
            // console.log(newFile)
        }

        const handleAdminBlur = e => {
            const newAdmin = {...admin}
            newAdmin[e.target.name] = e.target.value;
            setAdmin(newAdmin)
        }

        const handleMakeAdmin = (e) => {
            e.preventDefault();
            fetch('https://pacific-journey-56563.herokuapp.com/addAdmin', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(admin)
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
            })
            .catch(error => {
              console.error(error)
            })
        }

        const handleUploadServices = (e) => {
            e.preventDefault();
            const formData = new FormData()
            formData.append('file', file)
            formData.append('name', info.name)
            formData.append('description', info.description)
            // console.log(formData)
          
            fetch('https://pacific-journey-56563.herokuapp.com/addService', {
              method: 'POST',
              body:formData
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
            })
            .catch(error => {
              console.error(error)
            })
        }

        const onSubmit = data => {
            console.log(data);
            const reviewData = {...user, data}
            console.log(reviewData);
            fetch('https://pacific-journey-56563.herokuapp.com/addReview', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(reviewData)
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
            })
            .catch(error => {
              console.error(error)
            })
        }
        // isadmin section is

        useEffect(() => {
            fetch('https://pacific-journey-56563.herokuapp.com/isAdmin', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: user.email })
            })
                .then(res => res.json())
                .then(data =>setIsAdmin(data));
        }, [])
        // console.log(isAdmin)

        
    useEffect(() =>{
        fetch('https://pacific-journey-56563.herokuapp.com/orders?email='+user.email)
        .then(response => response.json())
        .then(data =>setOrders(data));
    }, [])

    useEffect(() =>{
        fetch('https://pacific-journey-56563.herokuapp.com/adminOrders')
        .then(response => response.json())
        .then(data =>setAdminOrders(data));
    }, [])
    const handleDelet= (_id) => {
        console.log(_id)
        fetch(`https://pacific-journey-56563.herokuapp.com/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log('deletted')
        })
    }
    return (
        <Container style={{backgroundColor: 'tomato', paddingBottom: '70px'}}>
            <Navber></Navber>
            {isAdmin == true ? <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="second">BOOKING LIST</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fourth">Add Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fifth">Add Admin</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="sixth">Manage Services</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="second">
                    {/* <h1>This is adminOrders booking list</h1> */}
                    <Container fluid style={{backgroundColor: 'rgb(245, 158, 142)'}}>
                        <CardColumns>
                             {
                                 adminOrders.map(order => <BookedService key={order._id} order= {order}></BookedService>)
                             }
                        </CardColumns>

                    </Container>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                             <h5 className="text-brand">Add Services</h5>
                            <form onSubmit={handleUploadServices}>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input onBlur={handleBlur} type="text" id="name" class="form-control" name="name" placeholder="name"/>
                                </div>
                                <div class="form-group">
                                    <label for="description">description</label>
                                    <input onBlur={handleBlur} type="text" id="description" class="form-control" name="description" placeholder="Enter description"/>
                                </div>

                                <div class="form-group">
                                    <input onChange={handleFileChange} type="file"  placeholder="image"/>
                                </div>

                                <button type="submit" class="btn btn-primary">Submit <FontAwesomeIcon icon={faCheckCircle} /></button>
                            </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                             <h5 className="text-brand">Add Admin</h5>
                            <form onSubmit={handleMakeAdmin}>
                                <div class="form-group">
                                    <label for="email">Make admin</label>
                                    <input onBlur={handleAdminBlur}type="email" id="email" class="form-control" name="email" placeholder="Email"/>
                                </div>

                                <button type="submit" class="btn btn-primary">Submit <FontAwesomeIcon icon={faCheckCircle} /></button>
                            </form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                             <h5 className="text-brand">Manage Service</h5>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                                COur available Services
                            </ListGroup.Item>
                                {
                                    services.map(service => <ListGroup.Item className="d-flex justify-content-between" as="li">{service.name} <Button onClick={() =>handleDelet(service._id)} variant="danger">Delete <FontAwesomeIcon icon={faCheckCircle} /></Button></ListGroup.Item> )
                                }
                        </ListGroup>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container> :
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link><Link to="/home">BOOK</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">BOOKING LIST</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">REVIEW</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="seventh">REVIEW</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="second">
                    {/* <h1>This is booking list</h1> */}
                    <Container fluid style={{backgroundColor: 'rgb(245, 158, 142)', height: '685px' }}>
                        <CardDeck>
                             {
                                 orders.map(order => <BookedServiceUser key={order._id} order= {order}></BookedServiceUser>)
                             }
                        </CardDeck>
                        
                    </Container>

                    {/* <h1>This is booking list</h1> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group">
                            <input type="text" {...register("email", { required: true })} name="email" placeholder="Company Name" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <div className="form-group">
                            <input type="text" {...register("description", { required: true })} name="description" placeholder="Description" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">Send <FontAwesomeIcon icon={faCheckCircle} /></button>
                        </div>
                    </form>
                    </Tab.Pane>
                    
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>}
        </Container>
    );
};

export default DashBoard;