import React, { useContext, useState } from 'react';
import { Badge, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ServicesContext } from '../../App';


const BookedServiceUser = ({order}) => {
    const [ update, setUpdate] = useState();
    // const [ updateState, setUpdateState] = useState([]);
    const [ services, setServices] = useContext(ServicesContext);
    const { data,booked,status, paymentId } = order;
    let selectedProduct = services.find(product => product._id ==  booked);
    console.log(services, booked);
    const { name,image } = selectedProduct;
    return (
        <Card style={{backgroundColor: 'rgb(241, 228, 225)'}}>
        <Card.Img variant="top" style={{ height: '200px'}} src={`data:image/png;base64,${image.img}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup className="list-group">
            <ListGroupItem>{order.name}</ListGroupItem>
            <ListGroupItem> payment Id: {order.paymentId}</ListGroupItem>
            <ListGroupItem><h3><Badge variant="secondary">{status.name}</Badge></h3></ListGroupItem>
            </ListGroup>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    );
};

export default BookedServiceUser;