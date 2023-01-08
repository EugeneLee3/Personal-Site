import React from 'react'
import BlogPost from './BlogPost'
import Login from './Login'

import '../styles/project_display.css'

function Blog() {
  return (
    <div className="test">
      <div>Blog</div>
      <Login />
      <BlogPost />
    </div>
  )
}

export default Blog