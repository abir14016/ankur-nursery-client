import React, { useState } from 'react';

const Review = ({ review }) => {
    const { userName, image, email, address } = review;
    const [seeMore, setSeeMore] = useState(true);
    const [seeLess, setSeeLess] = useState(true);
    const handleSeeMore = () => {
        setSeeMore(!seeMore);
        setSeeLess(!seeLess);
    }
    const handleSeeLess = () => {
        setSeeMore(!seeMore);
        setSeeLess(!seeLess);
    }
    return (
        <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 pt-4">
            <div class="flex flex-col items-center pb-3">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={image} alt="Bonnie" />
                <h5 class="text-sm text-gray-500 dark:text-gray-400 italic">{email}</h5>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userName}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{address}</span>
            </div>


            <figure class="mx-auto max-w-screen-md text-center">
                <div className='flex justify-start'>
                    <svg aria-hidden="true" class="ml-4 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
                </div>
                <blockquote>
                    {
                        seeMore ? <p className="text-sm italic font-medium text-gray-900 dark:text-white">{review.review.slice(0, 130)}
                            {
                                seeMore ? <button className='link link-hover link-primary' onClick={handleSeeMore}>...see more</button> : <button className='link link-hover link-primary' onClick={handleSeeLess}>...see Less</button>
                            }
                        </p> : <p className="text-sm italic font-medium text-gray-900 dark:text-white">{review.review}
                            {
                                seeMore ? <button className='link link-hover link-primary' onClick={handleSeeMore}>...see more</button> : <button className='link link-hover link-primary' onClick={handleSeeLess}>...see Less</button>
                            }
                        </p>
                    }
                </blockquote>
                <div className='flex justify-end'>
                    <svg aria-hidden="true" class="mb-1 mr-4 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
                </div>
            </figure>

        </div>

    );
};

export default Review;