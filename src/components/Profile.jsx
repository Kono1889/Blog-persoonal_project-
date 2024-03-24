import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    return (
        <div className='profile'>
            <FontAwesomeIcon className='profile-icon' icon={faUser} /> 
            <span>{/*Name*/}Lorem Ipsum</span>
            
        </div>
    )
}

export default Profile;