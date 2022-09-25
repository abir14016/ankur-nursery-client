import React from 'react';
import banner1 from '../../../images/banner/banner-1.png';
import banner2 from '../../../images/banner/banner-2.png';
import banner3 from '../../../images/banner/banner-3.png';
import banner4 from '../../../images/banner/banner-4.png';
import banner5 from '../../../images/banner/banner-5.png';
import banner6 from '../../../images/banner/banner-6.png';
import banner7 from '../../../images/banner/banner-7.jpg';
import banner from '../../../images/banner/banner.jpg';

const Banner = () => {
    return (
        <div class="hero my-12" style={{
            background: `url(${banner})`,
            width: '1000',
            height: '800',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat'
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">অংকুর নার্সারী</h1>
                    <p>মাননীয় প্রধানমন্ত্রী প্রদত্ত একাধিকবার জাতীয় পুরষ্কার প্রাপ্ত মাদার তেরেসা সহ একাধিকবার স্বর্ণপদক প্রাপ্ত</p>
                    <p class="mb-5">প্রতিষ্ঠাতাঃ সিতাব উদ্দিন আল-আজাদ</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;