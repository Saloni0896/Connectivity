import Carousel from 'react-bootstrap/Carousel';

function Template() {
  return (
          <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider"
                    src="./b2.png"
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3 className='sliderheading'>Techno Loader</h3>
                    <p className='sliderpara'>WE TRANSFORM YOUR VISION INTO REALITY OUR SOLUTION IS YOUR HEADWAY TO SUCCESS</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
          </div>

  );
}

export default Template;