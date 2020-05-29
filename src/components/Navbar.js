import React from 'react'
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { GoMention } from "react-icons/go";
import { MdTagFaces } from "react-icons/md";

const Navbar = () => {
    return(
        <footer>
            <div className="home">
                <FaHome /><p>Home</p>
            </div>
            <div className="dms">
                <RiWechatLine /><p>DMs</p>
            </div>
            <div className="mentions">
                <GoMention /><p>Mentions</p>
            </div>
            <div className="you">
                <MdTagFaces /><p>You</p>
            </div>
        </footer>
    )
}

export default Navbar