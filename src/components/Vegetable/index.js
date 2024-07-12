import React, { useState } from 'react';
import VegetableSummary from './VegetableSummary';
import '../../App.css'

const VegeIndex = () => {
    const vegetableList = ["Okra", "Onion", "Spinach", "Eggplant", "Potato"];

    const [currentVegeIndex, setCurrentVegeIndex] = useState(0);
    const [acceptedVege, setAcceptVege] = useState([]);
    const [rejectedVege, setRejectVege] = useState([]);

    const updateVege = () => {
        setCurrentVegeIndex(currentVegeIndex >= 4 ? 0 : currentVegeIndex + 1)
    }

    const handleAccept = () => {
        setAcceptVege([...acceptedVege, vegetableList[currentVegeIndex]])
        updateVege();
    };

    const handleReject = () => {
        setRejectVege([...rejectedVege, vegetableList[currentVegeIndex]])
        updateVege();
    };


    return (
        <div className='wrapper'>
            <div className='vegetable'>
                <h1>{vegetableList[currentVegeIndex]}</h1>
            </div>
            <div className='vegetable-actions'>
                <button onClick={handleAccept}> Accept</button>
                <button onClick={handleReject}> Reject </button>
            </div>
            <VegetableSummary accepted={acceptedVege} rejected={rejectedVege} />
        </div>
    )
}
export default VegeIndex;