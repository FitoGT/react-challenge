import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { login, loggedUser } from './../actions/'

function Login() {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  let log = () => {
    dispatch(login(true))
    dispatch(loggedUser({user}))
  }
  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" value={user} onChange={e => setUser(e.target.value)} placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button onClick={()=>log()}>Login</Button>
      </Form>
    </Container>
  );
}
export default Login;
