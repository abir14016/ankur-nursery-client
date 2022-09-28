import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div>
            <h2 className='text-5xl text-primary font-bold text-center mb-4'>Happy Customer</h2>
            <h4 className='text-center text-xl mb-4 text-indigo-500'>what our customer say</h4>
            <Slider {...settings}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Slider>
        </div>
    );
};

export default Reviews;