import React from 'react';

interface PageProps {
    params: {
        name: string;
    };
}

const InfoPage: React.FC<PageProps> = ({ params }) => {


    return (
        <div>
            <h1>Welcome, {params.name}!</h1>
            <p>This is the info page for {params.name}.</p>
        </div>
    );
};

export default InfoPage;