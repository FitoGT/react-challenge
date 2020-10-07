import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { login, loggedUser } from './../actions/';

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [admin, setAdmin] = useState(false);

  let log = () => {
    if (password.length > 0 && user.length > 0) {
      dispatch(login(true));
      dispatch(loggedUser({ user,admin }));
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="text"
            name="email"
            id="exampleEmail"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="Email or Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onClick={()=>setAdmin(!admin)} /> Admin User
          </Label>
        </FormGroup>
        {error ? <p className="text-danger">Some values are invalid, please try again</p> : null}
        <Button color="primary" onClick={() => log()}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
export default Login;
