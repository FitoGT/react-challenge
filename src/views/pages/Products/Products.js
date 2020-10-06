import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Create from "./Create";
import List from './List'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreate: true,
    }
  }
  showCreateForm = (value) =>{
    this.setState({showCreate:value})
  } 
  render() {
    return (
      <Container fluid={true}>
        {this.state.showCreate ? <Create showCreateForm={this.showCreateForm}  /> : <List showCreateForm={this.showCreateForm} /> }
        
      </Container>

    )
  }
}
export default Products