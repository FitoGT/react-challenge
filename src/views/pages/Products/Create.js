import React, { useState } from 'react';
import { Button, Row, FormGroup, Label, Input, Col } from 'reactstrap';
import { addProduct } from './../../../actions'
import { useDispatch } from 'react-redux'
export default function Create(props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  return (

    <Row>
      <Col lg="6"  sm="12">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
        </FormGroup>
      </Col>
      <Col lg="6"  sm="12">
        <FormGroup>
          <Label for="examplePassword">Price</Label>
          <Input type="number" name="price" id="price"  value={price} onChange={e => setPrice(e.target.value)}/>
        </FormGroup>
      </Col>
      <Col lg="6"  sm="12">
        <FormGroup>
          <Label for="image">Image Url</Label>
          <Input type="text" name="text" id="image" value={image} onChange={e => setImage(e.target.value)}/>
        </FormGroup>
      </Col>
      <Col sm="12">
        <FormGroup>
            <Button color="primary" onClick={()=>dispatch(addProduct({name,price,image}))}>Save</Button>
        </FormGroup>
      </Col>
    </Row>
  )
}