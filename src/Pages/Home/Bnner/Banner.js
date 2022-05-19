import React from 'react';
import banner1 from '../../../images/banner/banner-1.png';
import banner2 from '../../../images/banner/banner-2.png';
import banner3 from '../../../images/banner/banner-3.png';
import banner4 from '../../../images/banner/banner-4.png';
import banner5 from '../../../images/banner/banner-5.png';
import banner6 from '../../../images/banner/banner-6.png';
import banner7 from '../../../images/banner/banner-7.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${banner7})`,
            width: '1000',
            height: '800',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat'
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;