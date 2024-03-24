import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Language = () => {
    return (
        <div className="lang">
            <FontAwesomeIcon className="icon" icon={faGlobe} /><span>EN</span>
        </div>
    )
}
export default Language;
