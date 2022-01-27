import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import validate from './ValidateInfo';

const Form2 = () => {
  const history = useHistory();
  let error = 0;
  const [errors, setErrors] = useState({});
  const [values, setvalues] = useState({
    firstName: '',
    lastName: '',
    address: '',
  });

  localStorage.setItem('firstName', values.firstName);
  localStorage.setItem('lastName', values.lastName);
  localStorage.setItem('address', values.address);

  const handlerChange = event => {
    setvalues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    setErrors(validate(values));
    if (values.firstName === '' || values.lastName === '' || values.address === '') {
      error++;
    } else {
      console.log('no errors');
    }

    if (error === 0) {
      history.push('/form3');
    }
  };

  return (
    <div className="container m-auto">
      <h1>Form2</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter FirstName"
            name="firstName"
            value={values.firstName}
            onChange={handlerChange}
          />
        </Form.Group>
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={values.lastName}
            onChange={handlerChange}
          />
        </Form.Group>
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <div>
            <textarea value={values.address} name="address" onChange={handlerChange} />
          </div>
        </Form.Group>
        {errors.address && <p className="error-message">{errors.address}</p>}
        <Link to="/form1" className="">
          <Button variant="secondary" type="submit" className="m-3">
            Back
          </Button>
        </Link>

        <Button variant="success" type="submit" className="m-3" onClick={handleLogin}>
          Save Next
        </Button>
      </Form>
    </div>
  );
};

export default Form2;
