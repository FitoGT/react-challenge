import React from 'react';
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Button,Col } from 'reactstrap';
function List(props) {
  let products = useSelector(state => state.products);
  return (
    <div>
      <Col sm="12" className="mb-5">
        <h3>Products List</h3>
      </Col>
      {products.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((l, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>{l.name}</td>
                  <td>{l.price}</td>
                  <td>{l.image}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : <p>No products found</p>   }
      <div className="text-right">
        <Button color="primary" onClick={() => props.showCreateForm(true)}>
          Create
        </Button>
      </div>
    </div>
  );
}
export default List;
