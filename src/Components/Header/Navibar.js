import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { dltFromCart } from '../../redux/actions/Action';

export const Navibar = () => {

    const retrieve = useSelector((state) => state.cartReducer.cartItems);
    const dispatch = useDispatch();

    const dlt = (id) => {
        dispatch(dltFromCart(id));
    };

    const [show, setShow] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        calcTotal();
    }, [retrieve]);

    const calcTotal = () => {
        let totalPrice = 0;
        retrieve.forEach((item) => {
            totalPrice += item.price * item.qnty;
        });
        setPrice(totalPrice);
    };

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link" style={{ fontSize: "18px" }}>Logout</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="ms-auto">
                        <NavLink to="/items" className="nav-link nav-bag-icon" style={{ fontSize: '18px' }} onClick={() => setShow(true)}>
                            <Badge pill bg="warning" style={{ position: 'absolute', top: '8px', right: '42px' }}>
                                {retrieve.length}
                            </Badge>

                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-bag-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                            </svg>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>CART</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {retrieve.length ? (
                        <div className='cartdetails' style={{ width: "24rem" }}>
                            <table>
                                <tbody>
                                    {retrieve.map((e) => (
                                        <tr key={e.id}>
                                            <td style={{ paddingRight: 10 }}>
                                                <NavLink to="/items">
                                                    <img src={e.image} alt={e.title} style={{ width: "8rem", height: "6rem", marginTop: "1.5rem" }} />
                                                </NavLink>
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <p style={{ marginBottom: '8px' }}><strong>{e.title}</strong></p>
                                                    <p style={{ marginBottom: '0' }}><strong>Price: </strong> {e.price} $</p>
                                                    <p style={{ marginBottom: '0' }}><strong>Quantity: </strong>{e.qnty}</p>
                                                </div>
                                            </td>
                                            <td style={{ paddingLeft: 60 }}>
                                                <span onClick={() => dlt(e.id)}>
                                                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} />
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p style={{ marginTop: "2rem" }}><strong>Total: </strong>{price}</p>
                        </div>
                    ) : (
                        <p>Cart is empty</p>
                    )}
                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
};

export default Navibar;