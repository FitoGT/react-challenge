import React, { useState } from 'react';
import { Button, Row, FormGroup, Label, Input, Col, Alert } from 'reactstrap';
import { addProduct } from './../../../actions';
import { useDispatch } from 'react-redux';
function Create(props) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  let create = () => {
    if (name.length > 0 && price.length > 0 && image.length > 0) {
      dispatch(addProduct({ name, price, image }));
      props.showCreateForm(false);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <Row>
      <Col sm="12" className="mb-5">
        <h3>Create your Product</h3>
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
          <Button color="primary" onClick={() => create()}>
            Save
          </Button>{' '}
          <Button color="primary" onClick={() => props.showCreateForm(false)}>
            List
          </Button>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default Create;
