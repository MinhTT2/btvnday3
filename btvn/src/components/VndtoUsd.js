import React, { useState } from 'react';


function VndtoUsd() {
    const [vnd, setVnd] = useState(0);
    const [usd, setUsd] = useState(0);

    const changeUsd = (e) => {
        setVnd(e.target.value);

        const convertUsd = e.target.value / 24000;
        setUsd(convertUsd);
    };

    return (
        <div>
            Please enter VND
            <input type="number" placeholder="enter VND" onChange={changeUsd} />

            <br />
            <input type="number" value={usd.toFixed(2)} readOnly />

            {/* Truyền props vnd và usd vào Content */}
            
        </div>
    );
}

export default VndtoUsd;
