import Carousel from 'react-bootstrap/Carousel';

import React from 'react';

const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.emotivebrand.com/wp-content/uploads/2016/09/tumblr_o05v3eZmyT1ugn1wu_og_1280.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.feedough.com/wp-content/uploads/2016/08/what-is-brand-1024x536.png"
          alt="Second slide"
        />

        
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;