import React from 'react';

const singleProfile = ({params}) => {
    
const [year, id] = params.segments;

    return (
        <div>
        <h1>singleProfile {year} for {id}</h1>
        </div>
    );
};

export default singleProfile;