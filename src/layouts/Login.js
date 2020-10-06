import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { login } from './../actions/'
function Login() {
  const dispatch = useDispatch()
  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button onClick={()=>dispatch(login(true))}>Login</Button>
      </Form>
    </Container>
  );
}
export default Login;
