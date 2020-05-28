import React from 'react';

import { FaCircle } from 'react-icons/fa';

const DMsHome = (props) => {
    return (
        <div>
            <div>
                <FaCircle />
                <p>{props.userOnline}</p>
            </div>
            
        </div>
    )
}

export default DMsHome;