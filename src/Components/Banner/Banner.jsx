import React from 'react';
// import BannerImg from "../../assets/books.jpg"
import BannerImg from "../../assets/pngwing 1.png"

const Banner = () => {
    return (
     <div className=" bg-white px-28 rounded py-20 my-10 ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img
      src={BannerImg}
      className="w-100 rounded shadow-2xl h-[470px]"
    />
    <div>
      <h1 className="text-5xl font-bold text-black leading-[4rem]">Books to freshen up your bookshelf</h1>
      <button className="btn btn-success text-white my-8">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;