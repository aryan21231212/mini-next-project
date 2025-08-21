import React from 'react';

const getPredAge = async(name:string)=>{
    const res  = await fetch (`https://api.agify.io?name=${name}`);
    if (!res.ok) {
        throw new Error('Failed to fetch age');
    }
    return res.json();
}

const getPredGender = async (name:string)=>{
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    if (!res.ok) {
        throw new Error('Failed to fetch age');
    }
    return res.json();
}

const getPredCountry = async (name:string)=>{
    const res = await fetch(`https://api.nationalize.io?name=${name}`);
    if (!res.ok) {
        throw new Error('Failed to fetch age');
    }
    return res.json();
}

interface PageProps {
    params: {
        name: string;
    };
}

const InfoPage: React.FC<PageProps> = async ({ params }) => {
    const ageData = await getPredAge(params.name);
    const genderData = await getPredGender(params.name);
    const countryData = await getPredCountry(params.name);

    return (
        <div>
            <h1>Welcome, {params.name}!</h1>
            <p>This is the info page for {params.name}.</p>
        </div>
    );
};

export default InfoPage;