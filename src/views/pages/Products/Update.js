import React, { useState } from 'react';
import { Button, Row, FormGroup, Label, Input, Col, Alert } from 'reactstrap';
import { updateProduct } from './../../../actions';
import { useDispatch, useSelector } from 'react-redux';
function Update(props) {
  let products = useSelector(state => state.products);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState(products[props.productKey].name);
  const [price, setPrice] = useState(products[props.productKey].price);
  const [image, setImage] = useState(products[props.productKey].image);
  let update = () => {
    if (name.length > 0 && price.length > 0 && image.length > 0) {
      dispatch(updateProduct({ id: props.productKey, name, price, image }));
      props.showUpdateForm({ id: props.productKey, show: false });
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <Row>
      <Col sm="12" className="mb-5">
        <h3>Update your Product, ID {props.productKey}</h3>
      </Col>
      <Col lg="6" sm="12">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
        </FormGroup>
      </Col>
      <Col lg="6" sm="12">
        <FormGroup>
          <Label for="examplePassword">Price</Label>
          <Input type="number" name="price" id="price" value={price} onChange={e => setPrice(e.target.value)} />
        </FormGroup>
      </Col>
      <Col lg="6" sm="12">
        <FormGroup>
          <Label for="image">Image Url</Label>
          <Input type="text" name="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
        </FormGroup>
      </Col>
      {error ? (
        <Col sm="12">
          <Alert color="danger">Please complete all the fields!</Alert>
        </Col>
      ) : null}
      <Col sm="12">
        <FormGroup>
          <Button color="primary" onClick={() => update()}>
            Save
          </Button>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default Update;
