import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/Action';
import { NavLink } from 'react-router-dom';
import { setCartItem } from '../redux/CartDetailsSlice';

export const Items = () => {
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const send = (e) => {
        dispatch(addToCart(e));
    };

    const itemClick = (item) => {
        dispatch(setCartItem(item));
    };

    const filteredItems = selectedCategory
        ? items.filter(item => item.category === selectedCategory)
        : items;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='container mt-3'>
            <h2 className='text-center' style={{ marginBottom: '2rem', marginTop: '2rem' }}><strong>Order Away!</strong></h2>
            <div className='row d-flex justify-content-center align-items-center' style={{ display: 'flex', gap: '20px' }}>
                <div className="mb-3">
                    <Button variant='warning' onClick={() => handleCategoryChange('electronics')}>Electronics</Button>{' '}
                    <Button variant='warning' onClick={() => handleCategoryChange('jewelery')}>Jewelery</Button>{' '}
                    <Button variant='warning' onClick={() => handleCategoryChange('men clothing')}>Men's Clothing</Button>{' '}
                    <Button variant='warning' onClick={() => handleCategoryChange('women clothing')}>Women's Clothing</Button>
                </div>

                {filteredItems.map((element) => {
                    return (
                        <Card key={element.id} style={{ width: '20rem', height: '100%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <NavLink to="/itemdetails" onClick={() => itemClick(element)}>
                                <Card.Img variant="top" src={element.image} style={{ height: '15rem' }} />
                            </NavLink>
                            <Card.Body>
                                <Card.Title><strong>{element.title}</strong></Card.Title>
                                <Card.Text>
                                    <strong>Price: </strong>{element.price} $
                                </Card.Text>
                                <Button variant='warning' onClick={() => send(element)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Items;
