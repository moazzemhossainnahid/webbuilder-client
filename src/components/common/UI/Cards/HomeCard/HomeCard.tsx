import React from 'react';
import Image from 'next/image';
import { FaAngleDown, FaStar } from 'react-icons/fa';
import { IoIosInformationCircleOutline, IoMdTrophy } from 'react-icons/io';

interface HomeCardProps {
    bestChoice: boolean;
    badgeNumber: number;
    imgSrc: string;
    title: string;
    descriptionStrong: string;
    descriptionNormal: string;
    mainHighlights: string;
    rating: number;
    ratingText: string;
    buttonText: string;
    showMoreText: string;
    bestWishesText: string;
    bestWishesIcon: JSX.Element;
}

const HomeCard: React.FC<HomeCardProps> = ({
    bestChoice,
    badgeNumber,
    imgSrc,
    title,
    descriptionStrong,
    descriptionNormal,
    mainHighlights,
    rating,
    ratingText,
    buttonText,
    showMoreText,
    bestWishesText,
    bestWishesIcon
}) => {

        // Calculate the number of filled stars
        const filledStars = Math.round(rating / 2);

        // Calculate the number of empty stars
        const emptyStars = 5 - filledStars;
    return (
        <div className="w-full py-3">
            <div className='w-full mx-auto px-5 bg-white rounded-xl'>
                <div className="w-full flex flex-col md:flex-row gap-3 justify-between items-center relative text-[#2C384A]">
                    {bestChoice && (
                        <div className="absolute -top-3 left-0">
                            <h3 className="rounded-r-xl font-semibold flex items-center justify-center gap-2 px-3 py-1 text-white bg-[#FF7724]">
                                {bestWishesIcon} {bestWishesText}
                            </h3>
                        </div>
                    )}
                    {badgeNumber > 0 && (
                        <div className="absolute top-10 left-2">
                            <h3 className="w-7 h-7 border flex justify-center items-center rounded-full font-semibold">{badgeNumber}</h3>
                        </div>
                    )}
                    <div className="md:pl-7">
                        <Image className='mx-auto' width={300} height={100} src={imgSrc} alt={title} />
                        <h3 className="pt-3 text-center">{title}</h3>
                    </div>
                    <div className="text-left px-3">
                    <h3 className=""> <strong>{descriptionStrong}</strong>- {descriptionNormal} </h3>
                        <h3 className="font-bold">Main highlights</h3>
                        <p className="pl-3 text-sm">{mainHighlights}</p>
                        <h6 className="text-[#1B88F4] flex justify-start items-center gap-1">
                            {showMoreText} <FaAngleDown className='pt-1' />
                        </h6>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#F3F9FF] md:w-44 mx-auto text-center rounded-b-2xl p-5 relative">
                            <IoIosInformationCircleOutline className='absolute top-3 right-7' />
                            <h1 className="text-[#074786] text-5xl">{rating}</h1>
                            <h3 className="text-2xl text-[#074786] pt-3">{ratingText}</h3>
                            <div className="w-full flex gap-1 items-center justify-center pt-1">
                                {[...Array(filledStars)].map((_, index) => (
                                    <FaStar key={index} className="text-[#FFB80F]" />
                                ))}
                                {[...Array(emptyStars)].map((_, index) => (
                                    <FaStar key={index + filledStars} className="text-gray-300" />
                                ))}
                            </div>
                        </div>
                        <button className='w-full md:w-60 btn bg-[#1B88F4] text-white rounded-xl md:px-10'>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
