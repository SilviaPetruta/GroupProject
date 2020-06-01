import React from 'react';
import './Threads.css';
import { BsChatDots } from "react-icons/bs";

const Threads = () => {
    return (
        <div className='threads'>
            <div className='align'>
                <BsChatDots />
                <p>Threads</p>
            </div>
        </div>
    )
}

export default Threads;