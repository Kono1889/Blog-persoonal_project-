import React from "react";
import './styles.css';
import Profile from "./Profile";

const Subject = () => {
    return (
        <div className="subject">
            <div className="subject-left">
                <p className="destination">Destination</p>
                <p className="content">Exploring the Wonders of Hiking</p>
                <p className="sub-content">An iconic landmarks, this post unveils the secrets
                    <br />that make this destination a traveler's parardise.</p>
            </div>
            <div className="subject-right">
                <Profile/>
                <div>{/*Date*/}24 Jan 2024 . 10 mins read<span>{/*Time read*/}</span></div>

            </div>
        </div>
    )
}

export default Subject;