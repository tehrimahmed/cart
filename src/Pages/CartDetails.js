import React from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export const CartDetails = () => {

  const cartItem = useSelector(state => state.cartItem?.cartItem);

  return (
    <div className='container mt-2'>
      <h2 className='text-center'>Product Details</h2>

      <section
        className='container mt-3'
        style={{
          maxWidth: '800px',
          margin: 'auto',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          padding: '1rem',
          borderRadius: '4px',
        }}
      >
      {cartItem && (
        <div className='itemdetails' style={{ display: 'flex', alignItems: 'center' }}>
          <div className='itemimage' style={{ flex: 1 }}>
            <img src={cartItem.image} style={{ height: '10rem', borderRadius: '2px' }} /> 
          </div>
          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Title: </strong>{cartItem.title}</p>
                  <p><strong>Price: </strong>{cartItem.price} $</p> 
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Remove from Cart: </strong>
                    <span>
                      <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: 15, cursor: 'pointer' }} />
                    </span>
                  </p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      )}
      </section>
    </div>
  );
};

export default CartDetails;
