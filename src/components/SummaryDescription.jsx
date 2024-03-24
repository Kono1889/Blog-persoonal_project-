import React from "react";
import Book from "./btn_components/Book";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const SummaryDescription = () => {
    return (
        <div className="summary-description">
            <div className="first-column">
                <div className="book-sec">
                    <FontAwesomeIcon className="book-sec-icon" icon={faGlobe} />
                    <p className="book-sec-title">Explore more to get your comfort zone</p>
                    <p className="book-sec-topic">Book your perfect stay with us.</p>
                    <p className="book-sec-btn"><Book /></p>
                </div>
                <div className="article-info">
                    <p className="article-text">Article Available</p>
                    <p className="article-num">78</p>
                </div>
            </div>
            <div className="second-column">
                <p className="second-column-text">Beyond Acommodation, creating memories of a lifetime</p>
            </div>

        </div>
    )
}
export default SummaryDescription