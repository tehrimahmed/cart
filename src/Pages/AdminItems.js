import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { setItems, deleteItem, updateItem, addNewItem } from '../redux/AdminSlice';

const AdminItems = () => {
    const dispatch = useDispatch();
    const adminItems = useSelector(state => state.adminItems.items);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch(setItems(data)));
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    const [showModal, setShowModal] = useState(false);

    const [newItem, setNewItem] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });

    const implementChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const handleModalClose = () => {
        setNewItem({
            title: '',
            price: '',
            description: '',
            image: '',
            category: ''
        });
        setShowModal(false);
    };

    const handleModalSubmit = () => {
        dispatch(addNewItem(newItem));
        handleModalClose();
    };

    return (
        <div className='container mt-3'>
            <div className="flex">
                <Button variant='warning' onClick={() => setShowModal(true)}>Add a New Product</Button>
                <Button variant='warning' style={{ marginLeft: '5px' }}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Logout
                    </NavLink>
                </Button>
            </div>
            <div className='row d-flex justify-content-center align-items-center' style={{ display: 'flex', gap: '20px', marginTop:'5rem' }}>
                {adminItems.map((element) => {
                    return (
                        <Card key={element.id} style={{ width: '20rem', height: '100%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <Card.Img variant="top" src={element.image} style={{ height: '15rem' }} />
                            <Card.Body>
                                <Card.Title><strong>{element.title}</strong></Card.Title>
                                <Card.Text>
                                    <strong>Price: </strong>{element.price} $
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Button variant='success' style={{ marginRight: "3px" }}>Update Details</Button>
                                        <Button variant='danger' onClick={() => handleDelete(element.id)}>Delete Product</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton />
                <Modal.Title className="text-center"><strong>Add a New Product</strong></Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" value={newItem.title} onChange={implementChange} />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" value={newItem.price} onChange={implementChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" name="description" value={newItem.description} onChange={implementChange} />
                        </Form.Group>
                        <Form.Group controlId="image">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text" name="image" value={newItem.image} onChange={implementChange} />
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name="category" value={newItem.category} onChange={implementChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleModalSubmit}>
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminItems;
