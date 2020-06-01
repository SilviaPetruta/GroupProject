import React from 'react'
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { GoMention } from "react-icons/go";
import { MdTagFaces } from "react-icons/md";

const Navbar = (props) => {
    return (
        <footer onClick={props.clickedBtn}>
            <button className={`home ${props.activeBtn === 'home' ? 'active' : ''}`}>
                <FaHome />
                <p>Home</p>
            </button>
            <button className={`dms ${props.activeBtn === 'dms' ? 'active' : ''}`}>
                <RiWechatLine />
                <p>DMs</p>
            </button>
            <button className={`mentions ${props.activeBtn === 'mentions' ? 'active' : ''}`}>
                <GoMention />
                <p>Mentions</p>
            </button>
            <button className={`you ${props.activeBtn === 'you' ? 'active' : ''}`}>
                <MdTagFaces />
                <p>You</p>
            </button>
        </footer>
    )
}

export default Navbar