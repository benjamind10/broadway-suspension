import React from 'react';

import './information.styles.css';

const Info = () => {
  return (
    <div className='container w-75'>
      <h1 className='p-2 ml-5'>About Us</h1>

      <div className='row justify-content-center mt-3 shadow'>
        <div className='col-12 about-picture-coilover shadow'></div>
        <div className='col-12 about-text mt-1 p-2 shadow'>
          <h2 className='font-italic'>Coilovers:</h2>
          <p className='text-light p-2'>
            When we jumped into the performance suspension industry, we wanted
            to create a product that stood out way beyond what was available.
            Whenever we decide to add a new chassis to the lineup we make sure
            we put our hands on the intended vehicle. From OEM suspension tear
            down, to test fitting mockups, creating base valving profiles, then
            finally road testing, we make sure its not just great; it's the
            best.
          </p>
        </div>
      </div>
      <div className='row justify-content-center mt-3 shadow'>
        <div className='col-12 about-picture-engineering shadow'></div>
        <div className='col-12 about-text mt-1 p-2 shadow'>
          <h2 className='font-italic'>Engineering:</h2>
          <p className='text-light p-2'>
            In order to have the best performance suspension on the market, you
            need to have the best parts to build it with. You know what they
            say? <br />
            <span className='font-italic'>
              If you want it done right you gotta do it yourself.
            </span>
            <br />
            And that's just what we did. With an arsenal of state of the art CNC
            machines, machinists to run them, and an engineering team just
            itching to make the next breakthrough product, Broadway Engineering
            is here to exceed your expectations. We only use the best quality
            materials to bring you the highest quality parts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
