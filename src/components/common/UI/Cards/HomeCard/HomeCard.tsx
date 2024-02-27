import Image from 'next/image';
import React from 'react';
import { FaAngleDown, FaStar } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoTrophyOutline } from 'react-icons/io5';

const HomeCard: React.FC = () => {
    return (
        <div className="w-full py-3">
            <div className='w-full mx-auto px-5 bg-white rounded-xl'>
                <div className="w-full flex flex-col md:flex-row gap-3 justify-between items-center relative text-[#2C384A]">
                    <div className="absolute -top-3 left-0">
                        <h3 className="rounded-r-xl font-semibold flex items-center justify-center gap-2 px-3 py-1 text-white bg-[#FF7724]"><IoTrophyOutline /> Best Choice</h3>
                    </div>
                    <div className="absolute top-10 left-2">
                        <h3 className="w-7 h-7 rounded-full font-semibold">1</h3>
                    </div>
                    <div className="md:pl-7">
                        <Image className='mx-auto' width={300} height={100} src="/img_1.png" alt="img1.png" />
                        <h3 className="pt-3 text-center">Builder</h3>
                    </div>
                    <div className="text-left px-3">
                        <h3 className=""> <strong>WixPro 72-Inch Responsive Website Builder</strong>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) </h3>
                        <h3 className="font-bold">Main highlights</h3>
                        <p className="pl-3 text-sm">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                        <h6 className="text-[#1B88F4] flex justify-start items-center gap-1">Show more <FaAngleDown className='pt-1' /></h6>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#F3F9FF] md:w-44 mx-auto text-center rounded-b-2xl p-5 relative">
                            <IoIosInformationCircleOutline className='absolute top-3 right-7' />
                            <h1 className="text-[#074786] text-5xl">9.8</h1>
                            <h3 className="text-2xl text-[#074786] pt-3">Exceptional</h3>
                            <div className="w-full flex gap-1 items-center justify-center pt-1">
                                <FaStar className='text-[#FFB80F]' />
                                <FaStar className='text-[#FFB80F]' />
                                <FaStar className='text-[#FFB80F]' />
                                <FaStar className='text-[#FFB80F]' />
                                <FaStar className='text-[#FFB80F]' />
                            </div>
                        </div>
                        <button className='w-full md:w-60 btn bg-[#1B88F4] text-white rounded-xl md:px-10'>View</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeCard;