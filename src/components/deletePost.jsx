import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeletePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        console.log('Fetched posts:', response.data); // Log the entire response data
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Expected an array, but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    console.log(`Attempting to delete post with ID: ${postId}`); // Log the ID
    if (!postId) {
      console.error('Post ID is undefined');
      return; // Exit if postId is undefined
    }

    try {
      const response = await axios.delete(`http://localhost:8080/delete-post/${postId}`);
      console.log('Deleted post:', response.data);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h2>Delete Post</h2>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Description</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            // Ensure post._id exists and is unique
            console.log('Current post:', post); // Log each post
            return (
              <tr key={post._id}>
                <td>{post.profile}</td>
                <td>{post.desc}</td>
                <td>{post.exp}</td>
                <td>
                  <button onClick={() => handleDelete(post._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeletePost;
