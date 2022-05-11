import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const Info = () => {
  return (
    <Container>
      <div className='pt-4 accordion' id='accordionExample'>
        <div className='card'>
          <div className='card-header' id='headingOne'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link'
                type='button'
                data-toggle='collapse'
                data-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                About Us
              </button>
            </h2>
          </div>

          <div
            id='collapseOne'
            className='collapse show'
            aria-labelledby='headingOne'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3
              wolf moon tempor, sunt aliqua put a bird on it squid
              single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes
              anderson cred nesciunt sapiente ea proident. Ad vegan
              excepteur butcher vice lomo. Leggings occaecat craft
              beer farm-to-table, raw denim aesthetic synth nesciunt
              you probably haven't heard of them accusamus labore
              sustainable VHS.
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header' id='headingTwo'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Engineering Process
              </button>
            </h2>
          </div>
          <div
            id='collapseTwo'
            className='collapse'
            aria-labelledby='headingTwo'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3
              wolf moon tempor, sunt aliqua put a bird on it squid
              single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes
              anderson cred nesciunt sapiente ea proident. Ad vegan
              excepteur butcher vice lomo. Leggings occaecat craft
              beer farm-to-table, raw denim aesthetic synth nesciunt
              you probably haven't heard of them accusamus labore
              sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
