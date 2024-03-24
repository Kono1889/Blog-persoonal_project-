import React from "react";

const BlogNavigation = () => {
    return (
        <div>
            <ul className="blog-nav-items">
                <li className="items-items all-item">All</li>
                <li className="items-items">Destination</li>
                <li className="items-items">Culinary</li>
                <li className="items-items">Lifestyle</li>
                <li className="items-items">Tips & Hacks</li>
                <li className="sort-section">
                    <span className='sort-by'>Sort by:</span>
                    <select className="sort-items">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Name</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}
export default BlogNavigation;