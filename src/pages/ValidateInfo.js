export default function validateInfo(values) {
  const errors = {};
  const regularExpression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  // "^(.*?[A-Z]){2,}"
  if (!values.firstName) {
    errors.firstName = 'FirstName required';
  } else if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(values.firstName)) {
    errors.firstName = 'only Alphabets are allowed';
  }

  if (!values.lastName) {
    errors.lastName = 'LastName required';
  } else if (!/^[a-zA-Z ][a-zA-Z0-9]*$/.test(values.lastName)) {
    errors.lastName = 'only Alphabets are allowed';
  }

  if (!values.address) {
    errors.address = 'address required';
  } else if (!/^[a-zA-Z]{10,}$/.test(values.address)) {
    errors.address = 'min 10 characters are required';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'phoneNumber required';
  } else if (!/^[0-9()-]+$/.test(values.phoneNumber)) {
    errors.phoneNumber = '  only 10 digit numeric phone number';
  }

  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (!regularExpression.test(values.password)) {
    errors.password =
      'Password needs to be Min eight characters, at least one letter, one number and one special character';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }

  return errors;
}
