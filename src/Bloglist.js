import React from 'react'
import { Link } from 'react-router-dom'
function Bloglist(props) {
   
    console.log(props.blogs)

    return (
        <div>
            

            {props.blogs.map(blog => (
              
         <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
          <img width="100" height="100" src={blog.image} />
          <h2>{ blog.title }</h2>
          <p>{ blog.category }</p>
          
          </Link>
          
        </div>
             ) )}
        </div>
    )
}

export default Bloglist

