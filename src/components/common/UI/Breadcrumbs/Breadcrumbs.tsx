import React from 'react';

const Breadcrumbs: React.FC = () => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><a>Home</a></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;