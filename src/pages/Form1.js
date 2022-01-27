import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import validate from './ValidateInfo';

const Form1 = () => {
  const history = useHistory();
  const [values, setvalues] = useState({
    email: '',
    password: '',
  });
  let error = 0;

  localStorage.setItem('email', values.email);
  localStorage.setItem('password', values.password);

  const [errors, setErrors] = useState({});

  const handlerChange = event => {
    setvalues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    setErrors(validate(values));

    if (values.email === '' || values.password === '') {
      error++;
    } else {
      console.log('no errors');
    }

    if (error === 0) {
      history.push('/form2');
    }
  };

  return (
    <div className="container m-auto">
      <h1>Form1</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handlerChange}
          />
        </Form.Group>
        {errors.email && <p className="error-message">{errors.email}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handlerChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
          />
        </Form.Group>
        {errors.email && <p className="error-message">{errors.password}</p>}

        <Button variant="success" type="submit" className="m-3" onClick={handleLogin}>
          Save Next
        </Button>
      </Form>
    </div>
  );
};

export default Form1;
