import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import { useSearchParams } from "react-router-dom";

function Home() {
  const id = localStorage.getItem('userId');
  const [posts, setPosts] = useState([]);
  const [searchParams ] = useSearchParams();
  const query = searchParams.get('query');
  const location = searchParams.get('location')
  const min = searchParams.get('priceL');
  const max = searchParams.get('priceU');
  const categoriesStr = searchParams.get('categories');
  const categories = categoriesStr ? categoriesStr.split(',') : [];

  
  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: id, searchQuery: query, location: location, minP: min, maxP: max, categories: categories }),
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
  }, [query, location, min, max, categoriesStr]);

  return (
    <div className="w-3/4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.2fr))] gap-4 p-4">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map(post => (
            <Item
              key={post.id}
              id={post.id}
              imgLink={(post.images && post.images.length > 0) && post.images[0]}
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

export default Home;