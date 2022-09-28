import React from 'react';

const Owner = ({ owner }) => {
    const { role, email, picture, name } = owner
    return (
        <div className='flex justify-center'>
            <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 pt-4">
                <div class="flex flex-col items-center pb-3">
                    <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={picture} alt="Bonnie" />
                    <h5 class="text-sm text-gray-500 dark:text-gray-400 italic">{email}</h5>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{role}</span>
                </div>
            </div>
        </div>
    );
};

export default Owner;