import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetails from './ItemDetails';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/Action';

export const Items = () => {
    const [item, setItem] = useState(ItemDetails);

    const dispatch = useDispatch(); 

    const send = (e) => {
        dispatch(addToCart(e));
    };

    return (
        <div className='container mt-3'>
            <h2 className='text-center'> Order Away!</h2>
            <div className='row d-flex justify-content-center align-items-center' style={{ display: 'flex', gap: '20px' }}>
                {item.map((element, id) => {
                    return (
                        <Card key={id} style={{ width: '20rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <Card.Img variant="top" src={element.imgdata} style={{ height: '14rem' }} />
                            <Card.Body>
                                <Card.Title><strong>{element.itemName}</strong></Card.Title>
                                <Card.Text>
                                   <strong>Price: </strong>{element.price} Mex$
                                </Card.Text>
                                <Button variant='primary' onClick={() => send(element)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
