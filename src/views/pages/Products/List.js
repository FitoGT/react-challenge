import React from 'react';
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Button, Col } from 'reactstrap';
import { deleteProduct } from './../../../actions';
import { useDispatch } from 'react-redux';
function List(props) {
  let products = useSelector(state => state.products);
  const dispatch = useDispatch();
  let removeItem = key => {
    dispatch(deleteProduct(key));
  };
  let updateItem = key =>{
    props.showUpdateForm({id:key,show:true})
  }
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
                  <th scope="row">{key + 1}</th>
                  <td>{l.name}</td>
                  <td>{l.price}</td>
                  <td>{l.image}</td>
                  <td>
                    <button title="delete" onClick={() => removeItem(key)} className="btn btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                    {' '}
                    <button title="update" onClick={() => updateItem(key)} className="btn btn-success">
                      <i className="fa fa-save"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>No products found</p>
      )}
      <div className="text-right">
        <Button color="primary" onClick={() => props.showCreateForm(true)}>
          Create
        </Button>
      </div>
    </div>
  );
}
export default List;
