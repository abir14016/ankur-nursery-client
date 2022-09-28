import React, { useState } from 'react';
import { useEffect } from 'react';
import Member from '../Member/Member';
import Owner from '../Owner/Owner';

const Owners = () => {
    const [owners, setOners] = useState([]);
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/owner`)
            .then(res => res.json())
            .then(data => setOners(data))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/member`)
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div>
            <h2 className='text-primary text-4xl font-bold text-center mb-5'>Owners</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    owners.map(owner => <Owner
                        key={owner._id}
                        owner={owner}
                    ></Owner>)
                }
            </div>
            <div className="divider mb-20"></div>
            <h2 className='text-primary text-4xl font-bold text-center mb-5'>Other Members</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4'>
                {
                    members.map(member => <Member
                        key={member._id}
                        member={member}
                    ></Member>)
                }
            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/pvTcYhp/sitab.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">প্রতিষ্ঠার ইতিহাস</h1>
                        <p className="py-6">মোঃ সিতাব উদ্দিন আল-আজাদ ২০০১ সালে ঝিনাইদহ জেলার শৈলজুপা উপজেলার গাড়াগঞ্জ বাসস্ট্যান্ডের পার্শ্ববর্তী ২ বিঘা জমির উপর অংকুর নার্সারী প্রতিষ্ঠা করেন। এখানে দীর্ঘদিন যাবত উন্নতমানের চারা তৈরি ও সরবারহ করা হয়ে আসছে। ধীরে ধীরে তিনি দেশী জাতের পাশাপাশি বিদেশী ফুল ফলের চারা সরবারহ শুরু করেন। অল্প কিছুদিনের মধ্যে তার নার্সারী মানুষের মনে স্থান করে নেয়। উন্নত্মানের চারা উতপাদন এবং সরবারহ করার কারনে দেশের বনায়নে ভূমিকা রাখার জন্য তিন্তি একাধিকবার জাতীয় পুরষ্কার পেয়েছেন। ২০১৯ সালে তিনি মারা যান। বর্তমানে তার ছেলে সাদ আহমেদ এবং মেয়ে সোনিয়া আফরিন তাদের বাবার স্বপ্নের প্রতিষ্ঠান আরো এগিয়ে নিয়ে যাচ্ছেন। </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owners;