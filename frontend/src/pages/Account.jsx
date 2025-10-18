import React, { useState, useContext, useEffect } from "react";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Account() {
  const id = localStorage.getItem('userId');
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/account-listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: id }),
      });
      if (!response.ok) throw new Error('Failed to fetch posts');
      const postsData = await response.json();
      setPosts(postsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('userId', data.user.id);
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="relative min-h-screen w-full">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-black rounded font-medium hover:bg-red-600 transition duration-150"
        >
          Logout
        </button>

      <div className="pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
          {posts.length === 0 ? (
            <p>No posts available.</p>
          ) : (
            posts.map(post => (
              <Item
                key={post.id}
                imgLink={post.images && post.images.length > 0 && post.images[0]}
                product={post.title}
                price={`₹${post.price}`}
                location={post.location}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
