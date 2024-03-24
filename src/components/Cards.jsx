import React from 'react';
import treeImage from './images/tree.jpg';
import Profile from './Profile';
import './styles.css'

const Cards = () => {
    return (
        <div className ='cards'>
            <div>
                <p className="tag">Destination</p>
                <img className='card-picture' src={treeImage} alt='tree-img' />

            </div>
            <div className='card-date'>
                <div>{/*Date*/}24 Jan 2024 . 10 mins read<span>{/*Time read*/}</span></div>
            </div>
            <div className='card-title'>Unveiling the Secrets Beyond the Tourist Trails</div>
            <div className='card-text'>Dive into the local culture, discover hidden spots, and experince the authentic charm that often..</div>
            <div className='card-profile'><Profile /> </div>
        </div>
    )
}

export default Cards;