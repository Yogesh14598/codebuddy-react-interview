import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import validate from './ValidateInfo';

const Form3 = () => {
  const [errors, setErrors] = useState({});
  // const [phoneNumber, setphoneNumber] = useState('');
  const [countrycode, setcountrycode] = useState('+91');

  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const firstName = localStorage.getItem('firstName');
  const address = localStorage.getItem('address');
  const lastName = localStorage.getItem('lastName');

  const [values, setvalues] = useState({
    phoneNumber: '',
  });
  let error = 0;
  const handlerChange = event => {
    setvalues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const formsubmit = {
    emailId: email,
    password,
    firstName,
    lastName,
    address,
    countryCode: countrycode,
    phoneNumber: values.phoneNumber,
  };
  console.log(formsubmit, 'formsubmit');
  const submitpost = () => {
    if (values.phoneNumber === '' || countrycode === '') {
      error++;
    } else {
      console.log('no errors');
    }

    if (error === 0) {
      axios
        .post('https://codebuddy.review/submit', JSON.stringify(formsubmit), {
          headers: {
            Accept: 'application/json',
          },
        })

        .then(response => {
          console.log(response);
          alert('successfully updated');
        })

        .catch(err => {
          console.log('there is an error y', err.response);
        });
    }
  };

  return (
    <div className="container m-auto">
      <h1>Form3</h1>
      <Form onSubmit={handleLogin}>
        <InputGroup className="mb-3">
          <select
            value={countrycode}
            onChange={e => {
              setcountrycode(e.target.value);
            }}
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
          </select>
          <Form.Group className="mb-3" controlId="phoneNumber" onChange={handlerChange}>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              autoFocus
            />
          </Form.Group>
        </InputGroup>
        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>
        <Link to="/form2" className="">
          <Button variant="secondary" type="submit" className="m-3">
            Back
          </Button>
        </Link>

        <Button variant="success" type="submit" className="m-3" onClick={submitpost}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Form3;
