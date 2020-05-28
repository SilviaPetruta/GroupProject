import React from "react"
import { FaSearch } from 'react-icons/fa';

const Header = (props) => {
    return(
        <header>
            <img src={props.imageWizard} alt = {"channel icon"} />
            <h1>The Wizard's SQUAD</h1>
            <FaSearch />
        </header>
    )
}

export default Header