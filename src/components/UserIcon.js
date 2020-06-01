import React from 'react';
import './UserIcon.css';

import { FaUser } from "react-icons/fa";

const UserIcon = (props) => {
    return (
        <span className='dmUserIconDiv'>
            <FaUser className='dmUserIcon' />
        </span>
    )
}

export default UserIcon;