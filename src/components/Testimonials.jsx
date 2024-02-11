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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer2.png" alt="reviewer"/>
                <div className="name-rating">
                    <p className="reviewer-name">Sarah Jhones</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer3.png" alt="reviewer"/>
                <div className="name-rating">
                    <p className="reviewer-name">Darcy Wills</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
        </div>
      </div>
    )
  }
