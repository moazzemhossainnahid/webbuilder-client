import React from 'react';
import HomeCard from '../UI/Cards/HomeCard/HomeCard';
import { IoMdTrophy } from 'react-icons/io';
import { GiCutDiamond } from 'react-icons/gi';
import HomeCard2 from '../UI/Cards/HomeCard/HomeCard2';

const MainCardSec: React.FC = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto py-5'>
            <HomeCard
                bestChoice={true}
                badgeNumber={1}
                imgSrc="/img_1.png"
                title="Builder-1"
                descriptionStrong="WixPro 72-Inch Responsive Website Builder-"
                descriptionNormal="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
                mainHighlights="Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
                rating={9.8}
                ratingText="Exceptional"
                buttonText="View"
                showMoreText="Show more"
                bestWishesText="Best Wishes"
                bestWishesIcon={<IoMdTrophy />}
            />
            <HomeCard
                bestChoice={true}
                badgeNumber={3}
                imgSrc="/img_1.png"
                title="Builder-2"
                descriptionStrong="SiteCraft 68-Inch Ultimate Web Design Studio-"
                descriptionNormal=" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"                
                mainHighlights="Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
                rating={9.5}
                ratingText="Excellent"
                buttonText="View"
                showMoreText="Show more"
                bestWishesText="Best Value"
                bestWishesIcon={<GiCutDiamond />}
            />
            <HomeCard
                bestChoice={false}
                badgeNumber={2}
                imgSrc="/img_1.png"
                title="Builder-3"
                descriptionStrong="WixPro 72-Inch Responsive Website Builder-"
                descriptionNormal="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"                
                mainHighlights=" Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
                rating={9.3}
                ratingText="Exceptional"
                buttonText="View"
                showMoreText="Show more"
                bestWishesText="Best Value"
                bestWishesIcon={<GiCutDiamond />}
            />
            <HomeCard2
                bestChoice={false}
                badgeNumber={4}
                imgSrc="/img_1.png"
                title="Builder-3"
                descriptionStrong="CDK Resposive Builder:"
                descriptionNormal="An extensive library of widgets and apps, and detailed step-by-step guides"
                mainHighlights=" Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
                rating={9.1}
                ratingText="Very Good"
                buttonText="View"
                showMoreText="Show more"
                bestWishesText="Best Value"
                bestWishesIcon={<GiCutDiamond />}
            />
        </div>
    );
};

export default MainCardSec;