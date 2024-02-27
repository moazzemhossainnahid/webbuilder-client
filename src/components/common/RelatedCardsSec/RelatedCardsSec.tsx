import React from 'react';
import RelatedCard from '../UI/Cards/RelatedCard/RelatedCard';

const RelatedCardsSec: React.FC = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto'>
            <h2 className="text-2xl md:text-3xl">Related deals you might like for</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                <RelatedCard
                    imageSrc="/img_1.png"
                    discount="20% Off"
                    productName="Webbuilder 1"
                    description="Computer Modern classic with wix support"
                    originalPrice={49.96}
                    discountedPrice={39.96}
                />
                <RelatedCard
                    imageSrc="/img_1.png"
                    discount="20% Off"
                    productName="Webbuilder 1"
                    description="Computer Modern classic with wix support"
                    originalPrice={49.96}
                    discountedPrice={39.96}
                />
                <RelatedCard
                    imageSrc="/img_1.png"
                    discount="20% Off"
                    productName="Webbuilder 1"
                    description="Computer Modern classic with wix support"
                    originalPrice={49.96}
                    discountedPrice={39.96}
                />
            </div>
        </div>
    );
};

export default RelatedCardsSec;