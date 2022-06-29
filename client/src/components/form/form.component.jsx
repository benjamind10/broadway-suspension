import React from 'react';

import './form.styles.css';

const Form = () => {
  return (
    <div className='form-style-6'>
      <h1>Send Me A Message</h1>
      <form>
        <input required type='text' name='from_name' placeholder='Your Name' />
        <input
          required
          type='email'
          name='user_email'
          placeholder='Email Address'
        />
        <textarea
          required
          name='message'
          placeholder='Type your Message'
        ></textarea>
        <input type='submit' value='Send' />
      </form>
    </div>
  );
};
export default Form;
