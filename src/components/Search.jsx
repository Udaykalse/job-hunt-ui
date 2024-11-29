import React, { useState, useEffect } from "react";

function Search() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      fetch("http://localhost:8080/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    } else {
      fetch(`http://localhost:8080/posts/${searchText}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-5">
      <div className="max-w-lg mx-auto flex items-center space-x-4 mb-5">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition"
        >
          <i className="fas fa-search">Search</i>
        </button>
      </div>

      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={`${post._id || post.id}-${post.profile}`}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="flex items-center space-x-3 mb-3">
                <i className="fas fa-user text-indigo-600"></i>
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.profile}
                </h2>
              </div>
              <p className="text-gray-600">{post.desc}</p>
              <div className="mt-3 flex items-center space-x-2">
                <i className="fas fa-briefcase text-green-600"></i>
                <p className="text-gray-700">{post.exp} years of experience</p>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <i className="fas fa-code text-yellow-600"></i>
                <p className="text-gray-700">
                  {Array.isArray(post.techs) ? post.techs.join(" ") : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No posts available</p>
      )}
    </div>
  );
}

export default Search;
