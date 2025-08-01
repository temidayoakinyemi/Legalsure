import React from "react";
import "./Testimonial.css";
import stars from "../../assets/stars.svg";
import dp from "../../assets/dp.svg";
import dp1 from "../../assets/dp1.svg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <h1 className="testimonialh1">
          Best place <br /> for any property <br /> related issue
        </h1>
        <div className="alltestimonial">
          <h1 className="testimonialquote">"</h1>

          <div className="alltestimonial1">
            <p className="testimonialp">
              Will is one of the most knowledgeable and <br /> competent people
              I have ever met in the IT field. <br /> The more difficult the IT
              challenge, the more Will <br />
              enjoys the work. He always delivers the highest <br /> quality
              results and client satisfaction is his major <br /> goal.
            </p>
            <img src={stars} alt="" className="stars" />
            <div className="testimonialdph3h4">
              <img src={dp} alt="" />
              <div className="testimonialh3h4">
                <h3 className="testimonialh3">Justin L. Garcia</h3>
                <h4 className="testimonialh4">Co-founder</h4>
              </div>
            </div>
          </div>

          <div className="alltestimonial1">
            <p className="testimonialp">
              Great results. Enjoyable to work with, and <br /> most
              importantly, enabled us to have the <br /> presence on the web we
              needed to <br />
              conduct business in today's market.
            </p>
            <img src={stars} alt="" className="stars" />
            <div className="testimonialdph3h4">
              <img src={dp1} alt="" />
              <div className="testimonialh3h4">
                <h3 className="testimonialh3">Ronald A. Webb</h3>
                <h4 className="testimonialh4">Co-founder</h4>
              </div>
            </div>
          </div>
        </div>

        <h1 className="testimonialquote1">"</h1>
      </div>
    </div>
  );
};

export default Testimonial;
