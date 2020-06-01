import React from 'react';
import './DirectMessageUser.css';
import UserIcon from './UserIcon';

const DirectMessageUser = (props) => {
    return (
        <div className='dmUser'>
            <UserIcon />
            <div className='dmDetailsDiv'>
                <div className='dmMessageDetails'>
                    <p>{props.userName}</p>
                    <p>{props.lastMessage.date}</p>
                </div>
                <div className='dmMessage'>
                    <p>{props.lastMessage.message}</p>                
                </div>
            </div>
        </div>
    )
}

export default DirectMessageUser;