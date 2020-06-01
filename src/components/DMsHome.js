import React from 'react';
import './ChannelsAndDMsHome.css';

import { FaCircle } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const DMsHome = (props) => {
    const dmsHome = props.users.map(input => {
        return (
            <div key={input.id} className='dm'>
                <FaCircle className='iconCircle' />
                <p>{input.userOn}</p>
            </div>
        )
    });

    return (
        <div className='DmsDiv'>
            <div>
                <h4>Direct messages</h4>
                <FaPlus className='iconPlus' />
            </div>
			<div className='dm'>
                <FaHeart className='iconHeart' />
                <p>Slackbot</p>
            </div>
            {dmsHome}
        </div>
    )
}

export default DMsHome;