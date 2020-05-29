import React from 'react';
import './ChannelsAndDMsHome.css';
import { FaHashtag } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const ChannelsHome = (props) => {
    const channels = props.channels.map(input => {
        return (
            <div key={input.id} className='channel'>
                <FaHashtag className='iconHashTag' />
                <p>{input.channel}</p>
            </div>  
        )
    });

    return (
        <div className='channelsDiv'>
            <div >
                <h4>Channels</h4>
                <FaPlus className='iconPlus' />
            </div>
            {channels}
        </div>
    )
}

export default ChannelsHome;