import React from "react";
import "./review-cards.styles.css";

const ReviewCards = () => {
  return (
    <div className='container review-card-containter'>
      <h2 className='review-title text-center py-4'>
        <span>Where research and precision engineering meet; </span>
        <br />
        <span className='font-weight-bold font-italic'>style is expected.</span>
      </h2>
      <div className='row justify-content-center'>
        <div className='card review-card mb-3 mx-3 border-0'>
          <div className='card-body'>
            <h5 className='card-title'></h5>
            <svg
              aria-hidden='true'
              focusable='false'
              role='presentation'
              className='icon icon-quote'
              viewBox='0 0 41 35'
            >
              <path
                d='M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z'
                fill='#000'
                fill-rule='evenodd'
              ></path>
            </svg>
            <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
