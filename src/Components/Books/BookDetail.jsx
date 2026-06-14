import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getStoredList } from '../Utilities/AddToDb';
import { getWishList } from '../Utilities/AddToWish';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    // console.log(data)
    const newData = data.find(newData=> newData.bookId === id);
    // console.log(newData)
    const {bookId:currentBookId,image,bookName,author,category,review,tags,yearOfPublishing,publisher,totalPages,rating} = newData;

    const handleMarkAsRead = (id)=>{
    getStoredList(id)
    }

    const handleWishList =(id)=>{
      getWishList(id)
    }
    return (
        <div>
            {/* <h2>Books : {bookId}</h2> */}
            <div className=" bg-base-200  py-16 px-8">
  <div className="flex justify-evenly gap-10">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6">
       By : {author}
      </p>
      <button className="btn btn-soft">{category}</button>

      <p className='py-5'><span className='font-bold text-white'>Review :</span> {review}</p>

      <div className='flex gap-3'>
        <p><span className='font-bold text-white'>Tags : </span></p>
        {
            tags.map((tag,index)=><button key={index} className="btn btn-sm bg-white text-green-600 ">{tag}</button>)
        }
    </div>
    <div className="divider"></div>
    <div className=''>
     <p>Number Of Pages : <span className='font-bold text-white'>{totalPages}</span></p>
    <p className='py-4'>Publisher : <span className='font-bold text-white'>{publisher}</span></p>
    <p>Year Of Publishing : <span className='font-bold text-white'>{yearOfPublishing}</span></p>
    <p className='py-4'>Rating : <span className='font-bold text-white'>{rating}</span></p>
    </div>
    
    
      <div>
      <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-4">Mark As Read</button>
      <button onClick={()=>handleWishList(bookId)} className="btn btn-accent text-white">WishList</button>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetail;