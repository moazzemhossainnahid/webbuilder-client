import React from 'react';

const NewsLetter: React.FC = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto flex flex-col md:flex-row justify-around items-center gap-3 bg-white py-7'>
            <h2 className="text-[#5C6874] text-3xl">Sign up and get exclusive <br /> special deals</h2>
            <div className="join">
                <input className="input join-item" placeholder="" />
                <button className="btn join-item bg-[#1B88F4] text-white rounded-lg">Sign Up</button>
            </div>
        </div>
    );
};

export default NewsLetter;