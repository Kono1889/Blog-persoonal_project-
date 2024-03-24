import React from "react";
import './styles.css'
import BlogNavigation from './BlogNavigation';
import Cards from "./Cards";
const Blog = () => {
    return (
        <div className="blog">
            <h1>Blog</h1>
            <p className="blog-subcontent">Here we share travel tips, destination guides, and stories that inspire your next adventure.</p>
            <div>
                <BlogNavigation />
                <div className="blog-flexbox">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>


            </div>

        </div>
    )
}

export default Blog;