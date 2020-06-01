import React from 'react';
import './Mention.css';

import { FaHashtag } from 'react-icons/fa';

const Mention = (props) => {
    let icon;
    if (props.reaction.userIcon) {
        icon = props.reaction.userIcon;
    } else {
        icon = (
            <div className='reactionIconDiv'>
                <span className='reactionIcon'>
                    {props.reaction.reactionIcon}
                </span>
            </div>
        )
    }

    return (
        <div className="Mention">
            <div className='reactionDiv'>
                <div>
                    <span className='reactionUserSpan'>
                        {props.reaction.user} 
                    </span>
                    <span>
                        {props.reaction.message}
                    </span>
                    <span>
                        <FaHashtag className='FaHashTag' />
                        {props.reaction.channel}
                    </span>
                </div>
                <p>{props.reaction.date}</p>
            </div>
            <div className='detailsDiv'>
                {icon}
                <div className='reactionMessageDiv'>
                    <p className='reactionMessageUser'>{props.message.userName}</p>
                    <p className='reactionMessageText'>{props.message.text}</p>
                    <p className='reactionMessageIcon'>{props.reaction.reactionIcon}<span>{props.reaction.number}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Mention;