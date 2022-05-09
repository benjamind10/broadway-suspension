import React from "react";
import "./review-cards.styles.css";

const ReviewCards = () => {
  const reviews = [
    {
      title: "Best coilovers ever made.",
      body: "These are by far the best coilovers I’ve ever seen and ran on my cars. Worth every single penny and will definitely be running broadways on every car I can.",
      author: "Anonymous Verified Purchaser",
    },
    {
      title: "Worth Every Penny.",
      body: "Saying these are high quality is an understatement. Blown away at how nice they are and how nice they ride. Shipped them on Friday and I had them Sunday. Best company I’ve ever dealt with. 10/10 recommend.",
      author: "Tyler H. Verified Purchaser",
    },
    {
      title: "These guys are legitimately the best.",
      body: "Call them up with any questions, you’ll never be placed on hold... Order some coilovers, and you’ll have one of the best pieces of suspension on the market from the best team available.",
      author: "Javan H. Verified Purchaser",
    },
  ];

  return (
    <div className='container p-4'>
      <h2 className='review-title text-center py-4'>
        <span>Where research and precision engineering meet; </span>
        <br />
        <span className='font-weight-bold font-italic'>style is expected.</span>
      </h2>
        <div className='row justify-content-around review-card-container p-4'>
          {reviews.map((review) => (
            <div className='card review-card border-0'>
              <div className='card-body'>
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
                <h5 className='card-title'>{review.title}</h5>
                <p className='card-text'>{review.body}</p>
              </div>
              <h6 className='card-subtitle text-muted m-2'>
                - {review.author}
              </h6>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ReviewCards;
