export default function Testimonials() {
    return (
      <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <div className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer1.png" alt="reviewer"/>
                <div className="name-rating">
                    <p className="reviewer-name">Derek Clown</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Little Lemon offers a refreshing culinary journey that delights the senses. From the moment you step inside,
                         you're greeted by a vibrant atmosphere that exudes warmth and charm. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer2.png" alt="reviewer"/>
                <div className="name-rating">
                    <p className="reviewer-name">Sarah Jhones</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>The menu at Little Lemon is a celebration of fresh, seasonal ingredients expertly 
                        crafted into dishes that are both inventive and comforting.  </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer3.png" alt="reviewer"/>
                <div className="name-rating">
                    <p className="reviewer-name">Darcy Wills</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Beyond the delicious food, the service at Little Lemon is top-notch.
                         The staff are friendly, attentive, and knowledgeable, adding to the overall
                          dining experience.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
