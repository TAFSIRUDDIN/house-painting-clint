import React, { useContext, useState } from 'react';
import { Badge, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ServicesContext } from '../../App';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookedService = ({order}) => {
    const [ update, setUpdate] = useState();
    // const [ updateState, setUpdateState] = useState([]);
    const [ services, setServices] = useContext(ServicesContext)
    const { data,booked,status, paymentId } = order;
    let selectedProduct = services.find(product => product._id ==  booked);
    // console.log(selectedProduct);
    const { name,image } = selectedProduct;
    // const loadProduct = (id) => {
    //         // console.log(id);
    //     fetch(`https://pacific-journey-56563.herokuapp.com/bookedService/${id}`)
    //     .then((response) => response.json())
    //     .then(data =>{
    //         setUpdateState(data);
    //     })
    // }
    
//    console.log(updateState.status);

   const handleBlur = e => {
    const updateInfo = {...update}
    updateInfo[e.target.name] = e.target.value;
    setUpdate(updateInfo)
    }
    console.log(update)
    const updateProduct= (id) => {
        // const status = update.name;
        fetch(`https://pacific-journey-56563.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(update)
        })
        .then((response) => response.json())
        .then(data =>{
           console.log("updated");
        })
    

    }

    return (
        <Card style={{backgroundColor: 'rgb(241, 228, 225)'}}>
        <Card.Img variant="top" style={{ height: '200px'}} src={`data:image/png;base64,${image.img}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup className="list-group">
            <ListGroupItem>{order.name}</ListGroupItem>
            <ListGroupItem>payment Id: {order.paymentId}</ListGroupItem>
            <ListGroupItem><h3><Badge variant="secondary">{status.name}</Badge></h3></ListGroupItem>
            </ListGroup>
        </Card.Body>
        <Card.Footer>
        <form onSubmit={()=>updateProduct(order._id)}>
            <div class="form-group">
                <label for="name">Update State</label>
                <input onBlur={handleBlur} type="text" id="name" class="form-control" name="name" placeholder="Update State"/>
            </div>
            <button style={{marginBottom: "15px"}} variant="success" type="submit" class="btn btn-primary">Submit <FontAwesomeIcon icon={faCheckCircle} /></button>
        </form>
        </Card.Footer>
      </Card>
    );
};

export default BookedService;