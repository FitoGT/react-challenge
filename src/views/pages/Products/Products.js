import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Create from "./Create";
import List from './List'

class Products extends Component {
 
  render() {
    return (
      <Container fluid={true}>
        <Create  />
        <List />
      </Container>

    )
  }
}
export default Products