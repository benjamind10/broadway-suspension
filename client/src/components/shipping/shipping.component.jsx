import { Elements } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";

import PaymentForm from "../payment-form/payment-form.component";

import "./shipping.styles.css";

const Shipping = ({ calculateTotal }) => {
  const [state, dispatch] = useStoreContext();
  const [shipping, setShipping] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setShipping({
      ...shipping,
      [name]: value,
    });
  };

  return (
    <div>
      <div className='container'>
        <h1 className='mb-3'>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <hr />
        <form className='form-group container'>
          <div className='row align-items-center justify-content-around'>
            <div className='col-6'>
              <label className='mb-3 col-12'>
                <span className='field__label' for='firstname'>
                  First name
                </span>
                <input
                  className='form-control'
                  type='text'
                  name='firstname'
                  placeholder='John'
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='col-6'>
              <label className='mb-3 col-12'>
                <span className='field__label' for='lastname'>
                  Last name
                </span>
                <input
                  className='form-control'
                  type='text'
                  name='lastname'
                  placeholder='Doe'
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col-9'>
              <label className='col-12 mb-3'>
                <span className='field__label' for='address'>
                  Address
                </span>
                <input
                  className='form-control'
                  type='text'
                  name='address'
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='col-3'>
              <label className='col-12'>
                <span className='field__label' for='country'>
                  Country
                </span>
                <select className='form-control' id='country'>
                  <option value=''></option>
                  <option value='unitedstates'>United States</option>
                </select>
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label className='field col-12'>
                <span className='field__label' for='city'>
                  City
                </span>
                <input
                  className='form-control'
                  type='text'
                  name='city'
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='col-4'>
              <label className='field col-12'>
                <span className='field__label' for='state'>
                  State
                </span>
                <input
                  className='form-control w-75'
                  type='text'
                  id='state'
                  name='state'
                  placeholder='NY'
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='col-4'>
              <label className='field col-12'>
                <span className='field__label' for='zipcode'>
                  Zip code
                </span>
                <input
                  className='form-control'
                  type='text'
                  name='zipcode'
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </form>
        <PaymentForm
          cartItems={state.cart}
          cartTotal={calculateTotal()}
          shipping={shipping}
        />
        <hr />
      </div>
    </div>
  );
};

export default Shipping;
