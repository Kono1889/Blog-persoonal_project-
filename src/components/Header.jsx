import React from 'react'
import SearchBar from "./SearchBar.jsx"
import Logo from './Logo.jsx'
import SignUp from './btn_components/SignUp.jsx'
import Language from './Language.jsx'
import TourItems from './TourItems.jsx'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <ul className='flexBox'>
                    <li><Logo /></li>
                    <li><TourItems/></li>
                    <li><SearchBar /></li>
                    <li><Language /></li>
                    <li> <SignUp /></li>
                </ul>
            </div>

        </div>
    )
}

export default Header