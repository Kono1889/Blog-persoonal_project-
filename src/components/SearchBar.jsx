import React from 'react';
import './styles.css';

const SearchBar = () => {
    return (
        <div>
            <div>
                <form>
                    <input className="searchBar" type='text' placeholder='Search destination...'/>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;