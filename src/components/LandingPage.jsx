import React from "react";
import Header from './Header.jsx';
import Subject from './Subject.jsx';
import './styles.css';
const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />

            <div>
                <Subject />
            </div>
        </div>
    )
}
export default LandingPage;