import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const ChannelsHome = (props) => {
    return (
        <div>
            <div>
                <FaHashtag />
                <p>{props.channel}</p>
            </div>
        </div>
    )
}

export default ChannelsHome;