import React, { useState } from 'react';
import { Modal, Form, Button, Input } from 'rsuite';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

import 'rsuite/dist/rsuite.min.css';
import './loginmodal.styles.css';

const LoginModal = props => {
  const [open, setOpen] = React.useState(false);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose} size='xs'>
        <Modal.Header>
          <br />
          <span className='text-center border-bottom'>
            <h6>Login</h6>
          </span>
        </Modal.Header>
        <Modal.Body>
        <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='flex-row space-between my-2'>
          <label htmlFor='email'>Email address:</label>
          <input
            placeholder='youremail@test.com'
            name='email'
            type='email'
            id='email'
            // onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='pwd'>Password:</label>
          <input
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            // onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className='error-text'>
              The provided credentials are incorrect
            </p>
          </div>
        ) : null}
        <div className='flex-row flex-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer className='text-center'>
          <div className='text-center pt-3'>
            <h5>Don't have an account?</h5>
            <Link to='/signup' onClick={handleClose}>
              <p className='text-decoration-none pt-2'>Click here to signup!</p>
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleOpen}>Login</Button>
    </div>
  );
};

export default LoginModal;
