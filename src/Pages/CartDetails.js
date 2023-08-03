import React from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const CartDetails = () => {

  return (
    <div className='container mt-2'>
      <h2 className='text-center'>Checkout</h2>

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
        <div className='itemdetails' style={{ display: 'flex', alignItems: 'center' }}>
          <div className='itemimage' style={{ flex: 1 }}>
            <img
              src='https://media.istockphoto.com/id/172857632/photo/classic-taco-isolated-on-white-background-with-soft-shadow.jpg?s=612x612&w=0&k=20&c=zHrXyzfGMoBI_aPEI6uLe4Trv39j2uIkiW0qqj0vgs4='
              style={{ height: '10rem', borderRadius: '2px' }} />
          </div>
          <div className='details'>
            <Table>
              <tr>
                <th>
                  <p><strong>Restaurant: </strong> Mexican House</p>
                  <p><strong>Price: </strong> 350 Mex$</p>
                  <p><strong>Total: </strong> 350 Mex$</p>
                </th>
              </tr>
              <tr>
                <td>
                  <p><strong>Rating: </strong> <span style={{ background: "green", color: "#fff", padding: "2px 4px", borderRadius: "5px" }}>3.5 ★</span></p>
                </td>
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

      </section>
    </div>
  );
};
