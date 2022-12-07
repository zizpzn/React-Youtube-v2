import React, { useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  return (
    <header className="w-full flex p-5 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-red-600" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-1/3 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="검색"
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
