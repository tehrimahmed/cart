import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

export const CartDetails = () => {
  const cartItem = useSelector((state) => state.cartItem);

  return (
    <div className='container mt-2'>
      <h2 className='text-center'>Product Details</h2>

      <section
        className='container mt-3'
        style={{
          maxWidth: '800px',
          margin: 'auto',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        {cartItem && (
          <div className='itemdetails' style={{ display: 'flex', alignItems: 'center' }}>
            <div className='itemimage' style={{ flex: 1 }}>
              <img src={cartItem.image} style={{ height: '10rem', borderRadius: '2px' }} />
            </div>
            <div className='details'>
              <Table>
                <tbody>
                  <tr key={cartItem.id}>
                    <td>
                      <p>
                        <strong>Title: </strong>
                        {cartItem.title}
                      </p>
                      <p>
                        <strong>Price: </strong>
                        {cartItem.price} $
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}


      </section>
    </div>
  );
};

export default CartDetails;
