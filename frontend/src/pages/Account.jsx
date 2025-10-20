import React, { useState, useContext, useEffect } from "react";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Account() {
  const id = localStorage.getItem('userId');
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [oldPosts, setOldPosts] = useState([]);


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

      const response2 = await fetch('http://localhost:3000/api/archive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: id }),
      });
      if (!response2.ok) throw new Error('Failed to fetch posts');
      const archive = await response2.json();
      setOldPosts(archive);
      console.log(oldPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (id == 8) {
      navigate("/login", { replace: true });
    }
  }, [id, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('userId', 8);
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
      <p className="text-2xl font-extrabold text-[#3498DB] uppercase tracking-wide mb-4 pl-4 pt-20">
        Active Posts
      </p>
      <div className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pl-4">
          {posts.length === 0 ? (
            <p>No posts available.</p>
          ) : (
            posts.map(post => (
              <Item
                key={post.id}
                id={post.id}
                imgLink={post.images && post.images.length > 0 && post.images[0]}
                product={post.title}
                price={`₹${post.price}`}
                location={post.location}
              />
            ))
          )}
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#3498DB] uppercase tracking-wide mb-4 pl-4 pt-4">
        Archive
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pl-4">
          {oldPosts.length === 0 ? (
            <p>No posts available.</p>
          ) : (
            oldPosts.map(post => (
              <Item
                key={post.id}
                id={post.id}
                imgLink={post.images && post.images.length > 0 && post.images[0]}
                product={post.title}
                price={`₹${post.price}`}
                location={post.location}
              />
            ))
          )}
        </div>
    </div>
  );
}

export default Account;
