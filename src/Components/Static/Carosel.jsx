import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CarouselSlider() {
    return (
        <Carousel>
            <div>
                <img alt="sample1" src="../../../public/img/yarn1.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="sample2" src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="sample3" src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default CarouselSlider
