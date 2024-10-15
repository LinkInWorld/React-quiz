import React, {FC} from 'react';

interface IProgresBar{
    progressPercentage: number
}

const ProgresBar: FC <IProgresBar> = ({progressPercentage}) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-4 mb-5">
            <div className="bg-blue-500 h-4 rounded-full" style={{width: `${progressPercentage}%`}}></div>
        </div>
    );
};

export default ProgresBar;