import React from 'react';
import './Threads.css';
import { BsChatDots } from "react-icons/bs";

const Threads = () => {
    return (
        <div className='threads'>
            <input type='text' placeholder='Jump to...'></input>
            <div className='align'>
                <BsChatDots />
                <p>Threads</p>
            </div>
        </div>
    )
}

export default Threads;