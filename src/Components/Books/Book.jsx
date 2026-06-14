import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName,author,image,review,tags,category,rating,totalPages} = book;
    return (
       <Link to={`books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-2xl p-6">
  <figure className='bg-gray-300 py-8 rounded-2xl'>
    <img
      src={image}
      className='h-[166px]'
      alt={bookName} />
  </figure>
  <div className="card-body py-10">
    <div className='flex gap-3'>
        {
            tags.map((tag,index)=><button key={index} className="btn btn-sm bg-white text-green-600 ">{tag}</button>)
        }
    </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By : {author}</p>
    <div className='border-t-2 border-dashed text-gray-500 py-3'></div>
    <div className="card-actions justify-between">
      <div className="badge ">{category}</div>
      <div className="badge ">pages : {totalPages}</div>
      <div className="badge ">{rating} ✔</div>
    </div>
  </div>
</div>
       
       </Link>
    );
};

export default Book;