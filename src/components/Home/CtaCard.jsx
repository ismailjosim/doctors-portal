import React from 'react';

const CtaCard = ({ data }) => {
    const { heading, bodyText, bg, img } = data;
    return (
        <div>
            <h3>{heading}</h3>
        </div>
    );
};

export default CtaCard;
