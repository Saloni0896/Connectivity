import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Testimonials() {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 testimonialimg"
                src="./user2.jpg"
                alt="First "
                />
                <Carousel.Caption>
                <h3 className='sliderheading'>Techno Loader</h3>
                <p className='sliderpara'>WE TRANSFORM YOUR VISION INTO REALITY OUR SOLUTION IS YOUR HEADWAY TO SUCCESS</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  </div>
  )
}

export default Testimonials