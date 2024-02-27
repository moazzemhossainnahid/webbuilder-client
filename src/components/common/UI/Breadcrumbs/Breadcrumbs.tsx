import React from 'react';

const Breadcrumbs: React.FC = () => {
    return (
        <div className="w-full md:w-4/5 mx-auto text-sm text-[#5C6874] py-5 breadcrumbs">
            <ul>
                <li><a>Home</a></li>
                <li><a>Hosting for all</a></li>
                <li><a>Hosting</a></li>
                <li><a>Hosting6</a></li>
                <li><a>Hosting5</a></li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;