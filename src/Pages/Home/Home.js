import React from 'react';
import Banner from './Bnner/Banner';
import CardGroup from './CardGroup/CardGroup';
import CountDown from './CountDown/CountDown';
import Phone from './Phone/Phone';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardGroup></CardGroup>
            <div class="hero min-h-screen bg-base-200 mt-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">We Provide Bests</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
            <CountDown></CountDown>
            {/* <Phone></Phone> */}
        </div>
    );
};

export default Home;