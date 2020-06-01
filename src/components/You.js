import React from 'react';
import './You.css';

import UserIcon from './UserIcon';
import { FaRegSmile } from "react-icons/fa";
import { FaRegBellSlash } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiUserLocationLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Switch from "react-switch";


const You = (props) => {

    return (
        <div className='youDiv'>
            <div className='userSetStatusDiv'>
                <div className='user'>
                    <span className='iconYouSpan'>
                        <FaUser className='iconYou' />
                    </span>
                    <div>
                        <p>{props.user.name}</p>
                        <p>{props.user.status}</p>
                    </div>
                </div>
                <div className='setStatus'>
                    <FaRegSmile />
                    <p>Set status</p>
                </div>
            </div>
            <div className='userDisturbSetAwayDiv'>
                <div className='userDisturb'>
                    <div>
                        <FaRegBellSlash className='iconBell' />
                        <p>Do not disturb</p>
                    </div>
                    <p>On</p>
                </div>
                <div className='userSetAway marginTopDiv'>
                    <div>
                        <RiUserLocationLine className='iconSetAway' />
                        <p>Set yourself away</p>
                    </div>
                    <Switch onChange={props.toggleStatusHandler} checked={props.user.isAway}/>
                </div>
            </div>
            <div className='userSettingsDiv'>
                <div>
                    <FaRegBookmark className='iconBookmark' />
                    <p>Saved items</p>
                </div>
                <div className='marginTopDiv'>
                    <FaRegUser className='iconUserSetting' />
                    <p>View profile</p>
                </div>
                <div className='marginTopDiv'>
                    <AiOutlineNotification className='iconNotification' />
                    <p>Notifications</p>
                </div>
                <div className='marginTopDiv'>
                    <FiSettings className='iconPreferences' />
                    <p>Preferences</p>
                </div>
            </div>
        </div>
    )
}

export default You;