import React from 'react';

import img_1 from "../../assets/img/illustration-1.png";
import img_2 from "../../assets/img/illustration-2.png";
import img_3 from "../../assets/img/illustration-3.png";

function HowItWorks() {
  return (
    <section className="page-section bg-light">
      <div className="container">
        <Title title="How it works" subtitle="This is your MVP and the path to product-market fit." />
        <Stepper />
      </div>
    </section>
  )
}

function Title(props) {
  return (
    <React.StrictMode>
      <div className="text-center">
        <div className="subtitle">
          {props.subtitle}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2>{props.title}</h2>
        </div>
      </div>
    </React.StrictMode>
  )
}

function Stepper() {
  return (
    <div className="row stepper text-center">
      <div className="col-md-4 item mb-3" data-number="1">
        <div className="img-place mb-4">
          <img src={img_1} alt="" />
        </div>
        <h5>Join the Community</h5>
        <p>Explore, network and Interact with others.</p>
      </div>
      <div className="col-md-4 item mb-3" data-number="2">
        <div className="img-place mb-4">
          <img src={img_2} alt="" />
        </div>
        <h5>Post your Startup Pitch</h5>
        <p>Craft your pitch and test the waters.</p>
      </div>
      <div className="col-md-4 item mb-3" data-number="3">
        <div className="img-place mb-4">
          <img src={img_3} alt="" />
        </div>
        <h5>Exchange Startup Pitch</h5>
        <p>Follow founders and Iterate on your pitch.</p>
      </div>
    </div>
  )
}

export default HowItWorks;