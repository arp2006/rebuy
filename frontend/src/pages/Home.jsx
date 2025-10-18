import React, { useState, useEffect } from "react";
import Item from "../components/Item";

function Home() {
  const id = localStorage.getItem('userId');
  const [posts, setPosts] = useState([]);
  // console.log(id);
  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/listings', {
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

  return (
    <div className="w-3/4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.2fr))] gap-4 p-4">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map(post => (
            <Item
              key={post.id}
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


//filter
{/* <div className="flex px-4 py-3">
        <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#e7eff3] p-1">
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Newest First</span>
            <input
              checked={true}
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Newest First"
            />
          </label>
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Price: Low to High</span>
            <input
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Price: Low to High"
            />
          </label>
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Price: High to Low</span>
            <input
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Price: High to Low"
            />
          </label>
        </div>
      </div> */}

//page nav
{/* <div className="flex items-center justify-center p-4">
        <a className="flex size-10 items-center justify-center" href="#">
          <span className="material-symbols-outlined text-[#0d171b]">
            chevron_left
          </span>
        </a>

        <a
          className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-[#3498DB]"
          href="#"
        >
          1
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          2
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          3
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          4
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          5
        </a>

        <a className="flex size-10 items-center justify-center" href="#">
          <span className="material-symbols-outlined text-[#0d171b]">
            chevron_right
          </span>
        </a>
      </div> */}