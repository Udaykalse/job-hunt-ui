import React from 'react'
import { Link } from 'react-router-dom'


function organization() {
  return (
    <div className="flex space-x-4">
    <Link to="/hiredemp">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Hire Employee
      </button>
    </Link>
    <Link to="/delete-post">
      <button className="bg-red-500 text-white py-2 px-4 rounded">
        Delete Post
      </button>
    </Link>
    <Link to="/update-post">
      <button className="bg-yellow-500 text-white py-2 px-4 rounded">
        Update Post
      </button>
    </Link>
  </div>
  )
}

export default organization