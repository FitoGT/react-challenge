import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Create from "./Create";
import List from './List'
import Update from './Update'


class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreate: true,
      showUpdate: false,
      updateKey:null
    }
  }
  showCreateForm = (value) =>{
    this.setState({showCreate:value})
  } 
  showUpdateForm = (value) =>{
    this.setState({showUpdate:value.show})
    this.setState({updateKey:value.id})

  }
  render() {
    return (
      <Container fluid={true}>
        {this.state.showCreate ? 
          <Create showCreateForm={this.showCreateForm}  /> 
          : 
          !this.state.showUpdate?
            <List showCreateForm={this.showCreateForm} showUpdateForm={this.showUpdateForm} /> 
          :null
        }
        {
          this.state.showUpdate ?
            <Update productKey={this.state.updateKey} showUpdateForm={this.showUpdateForm} />
          :null
        }
      </Container>

    )
  }
}
export default Products