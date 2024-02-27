import Image from 'next/image';
import React from 'react';

interface RelatedCardProps {
    imageSrc: string;
    discount: string;
    productName: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
}


const RelatedCard: React.FC<RelatedCardProps> = ({ imageSrc, discount, productName, description, originalPrice, discountedPrice }) => {
    return (
        <div className='w-full bg-white p-5 rounded-lg'>
            <Image className='w-36 mx-auto' width={200} height={100} src={imageSrc} alt={productName} />
            <div className="pt-10">
                <div className="flex gap-2">
                    <span className='bg-gray-200 text-[#074786] text-xs rounded-lg px-3 py-2'>{discount}</span>
                </div>
                <h3 className="text-center text-xl font-bold py-3 text-[#626E79]">{productName}</h3>
                <p className="text-[#626E79]">{description}</p>
                <div className="py-2 flex gap-3 items-end">
                    <h2 className="text-[#5C6874] font-semibold text-xl">${discountedPrice}</h2>
                    <h2 className="text-[#9FA9B3] text-sm">${originalPrice}</h2>
                    <h2 className="text-[#EF4C5D] text-sm">({discount})</h2>
                </div>
                <button className='w-full btn bg-[#1B88F4] text-white rounded-xl'>View Deal</button>
            </div>
        </div>
    );
};

export default RelatedCard;