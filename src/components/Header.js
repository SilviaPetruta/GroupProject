import React from "react"
import { IoIosSearch } from "react-icons/io";
import './Header.css'

const Header = (props) => {
    return(
        <header>
            <img src={props.imageWizard} alt = "channel icon" />
            <h1>The Wizard's SQUAD</h1>
            <IoIosSearch />
        </header>
    )
}

export default Header