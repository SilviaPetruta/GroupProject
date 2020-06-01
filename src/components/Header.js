import React from "react"
import { IoIosSearch } from "react-icons/io";
import './Header.css'

const Header = (props) => {
    return(
        <header>
            <img src={props.imageWizard} alt = "channel icon" />
            <h1>{props.title}</h1>
            <IoIosSearch />
        </header>
    )
}

export default Header