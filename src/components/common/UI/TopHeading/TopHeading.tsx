import React from 'react';
import { FaAngleDown, FaRegCheckCircle } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const TopHeading: React.FC = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto py-5'>
            <h2 className="text-2xl md:text-4xl text-[#2C384A] pb-3">Best Website builders in the US</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-b py-4">
                <div className="flex flex-col md:flex-row gap-3 justify-start items-center text-[#4B5665]">
                    <div className="flex items-center gap-2">
                        <FaRegCheckCircle />
                        <p className="">Last Updated - February 22, 2020 </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoIosInformationCircleOutline />
                        <p className="">Advertising Disclosure</p>
                    </div>
                </div>
                <div className=" text-[#4B5665]">
                    <h6 className="flex justify-center items-center gap-2">Top Relevant <FaAngleDown /></h6>
                </div>
            </div>
            <div className="flex flex-grow items-center gap-3 md:gap-10 pt-5 list-none text-[#4B5665]">
                <li className="">Tools</li>
                <li className="">AWS Builder</li>
                <li className="">Start Build</li>
                <li className="">Build Supplies</li>
                <li className="">Tooling</li>
                <li className="">BlueHosting</li>
            </div>
        </div>
    );
};

export default TopHeading;