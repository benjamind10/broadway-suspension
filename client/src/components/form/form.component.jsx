import React from 'react';

import './form.styles.css';

const Form = () => {
  return (
    <div class='form-style-6'>
      <h1>Send Us A Message</h1>
      <form>
        <input
          required
          type='text'
          name='field1'
          placeholder='Your Name'
        />
        <input
          required
          type='email'
          name='field2'
          placeholder='Email Address'
        />
        <textarea
          required
          name='field3'
          placeholder='Type your Message'
        ></textarea>
        <input className='form-input' type='submit' value='Send' />
      </form>
    </div>
  );
};
export default Form;
