import React from 'react';


const VegetableSummary = (props) => {
    const {accepted, rejected} = props;
    console.log(accepted);
    console.log(rejected);
    return (
        <>
        <h2>Accepted</h2>
        {accepted && accepted.map(item => item)}
        <h2>Rejected</h2>
        {rejected && rejected.map(item => item)}
        </>
    );
};

export default VegetableSummary;