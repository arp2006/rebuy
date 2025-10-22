import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";

function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const uid = localStorage.getItem('userId');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  
  const getInfo = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/info', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error('Failed to fetch post');
      const postData = await response.json();
      setPost(postData)
      setForm(({ ...form, email: postData.email }));
    }
    catch {
      console.error(error);
    }
  }

  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'Wrong Passowrd');
      }
      else {
        const response = await fetch('http://localhost:3000/api/deletelisting', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        if (response.ok) {
          setSuccess('Post deleted, redirecting to your account');
          setTimeout(() => {
            navigate('/account');
          }, 1500);
        }
      }
    }
    catch {
      console.error(error)
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <a className="text-[#4c809a] text-sm font-medium leading-normal" href="/">
          Home
        </a>
        <span className="text-[#4c809a] text-sm font-medium leading-normal">/</span>
        <span className="text-[#0d171b] text-sm font-medium leading-normal">
          {post.title}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">

          <Carousel images={post.images} />

          <div className="mt-8">
            <h1 className="text-[#0d171b] tracking-light text-[32px] font-bold leading-tight">
              {post.title}
            </h1>
            <div className="mt-2 flex items-center gap-4">
              {/* <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Used - Good Condition
              </span> */}
              <div className="flex items-center gap-2 text-slate-500">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span className="text-sm font-medium">
                  {post.location}
                </span>
              </div>
            </div>
            <div className="mt-6 prose prose-slate w-full text-[#374151] min-w-[1200px]">
              {post.description}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button className="flex items-center gap-2 text-slate-600 hover:text-[#0d171b] text-sm font-medium">
                <span className="material-symbols-outlined text-lg">flag</span> Report Item
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar or related content on right */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h2 className="text-[#0d171b] tracking-light text-[36px] font-bold leading-tight"> ₹{[post.price]}</h2>
            <div className="mt-4 flex flex-col gap-3">
              <button className="w-full flex items-center justify-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer rounded-lg h-12 px-4 bg-[#13a4ec] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0b8acb] transition-colors">
                <span className="material-symbols-outlined">chat_bubble</span>
                <span className="truncate">Chat with Seller</span>
              </button>
              {/* <button className="w-full flex items-center justify-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer rounded-lg h-12 px-4 bg-slate-200 text-slate-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 transition-colors">
                <span className="material-symbols-outlined">favorite_border</span>
                <span className="truncate">Add to Favorites</span>
              </button> */}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="text-[#0d171b] text-lg font-bold">Seller Information</h3>

            <div className="mt-4 flex items-center justify-between">
              <p className="font-bold text-[#0d171b]">{post.name}</p>
              {post.seller_id == uid && (
                <button onClick={() => setShowDeleteModal(true)} className="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700" >
                  Delete Post
                </button>)}
            </div>

            <a
              className="mt-4 inline-block text-[#13a4ec] hover:underline text-sm font-medium"
              href="#"
            >
              View Seller's Other Items
            </a>
          </div>

        </div>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
            <h3 className="text-lg font-bold text-[#0d171b]">Enter Account Password</h3>
            <p className="text-sm text-slate-600 mt-2">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            <p className="text-sm text-slate-600 mt-2 font-extrabold">
              User: {post.name}
            </p>

            <input
              className="form-input flex w-full min-w-0 h-[40px] my-[15px] flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 focus:border-[#cfdfe7] h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <div className="mt-6 flex justify-end gap-3">
              {!success && (
                <>
                  <button
                    onClick={() => { setShowDeleteModal(false); setError('') }}
                    className="px-4 py-2 rounded-md border border-slate-300 text-sm hover:bg-slate-100"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm"
                    type="submit"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
            {error && <p className="text-red-600 mt-[7px] text-center">{error}</p>}
            {success && <p className="text-grey-600 mt-[7px] text-center">{success}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;