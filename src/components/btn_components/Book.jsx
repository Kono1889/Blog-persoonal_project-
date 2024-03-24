import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

const Book = () =>{
    return(
        <div>
            <a className="book-btn" href="#">Booking Now<span className="book-btn-icon"><FontAwesomeIcon icon={faArrowRight} /></span></a>
        </div>
    )
}
export default Book;