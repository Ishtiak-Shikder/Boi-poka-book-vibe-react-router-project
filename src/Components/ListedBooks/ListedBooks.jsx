import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import { addToStoredList } from '../Utilities/AddToDb';
import Book from '../Books/Book';
import Books from '../Books/Books';
import { addToWishList } from '../Utilities/AddToWish';


const ListedBooks = () => {
    const [sort,setSort] = useState('')
    const [readList,setReadList]= useState([])
    const [newWishList,setWishList]= useState([])
    const allBooks = useLoaderData();

    const handleSort =(sortType)=>{
         setSort(sortType);
        if(sortType === 'No of pages'){
            const sortedStoredList = [...readList].sort((a,b) => a.totalPages - b.totalPages);
              setReadList(sortedStoredList)
        }
      
    }
    const handleRatings =(sortType)=>{
        setSort(sortType)
        if(sortType === 'ratings'){
            const sortedStoredList = [...readList].sort((a,b) => a.rating - b.rating)
            setReadList(sortedStoredList)
        }
    }
    useEffect(()=>{
        const storedList = addToStoredList();
        const storedListInt = storedList.map(id=>parseInt(id));
        const readBookList = allBooks.filter(book=>storedListInt.includes(book.bookId));

        const wishList = addToWishList();
        const wishListInt = wishList.map(id=>parseInt(id));
        const addWishList = allBooks.filter(book=>wishListInt.includes(book.bookId));
      setReadList(readBookList);
      setWishList(addWishList);
        // console.log(allBooks,storedList,storedListInt)
        // console.log(allBooks,wishList,wishListInt)
        // console.log(allBooks,storedList,storedListInt)
    },[])


    // useEffect(()=>{
    //     const wishList = addToWishList();
    //     const wishListInt = wishList.map(id=>parseInt(id));
    //     const addWishList = allBooks.filter(book=>wishListInt.includes(book.bookId));
    //   setWishList(addWishList)
    //     // console.log(allBooks,storedList,storedListInt)
    //     console.log(allBooks,wishList,wishListInt)
    // },[])
    return (
        <div>
            <h2 className='my-8'>Listed Books</h2>

            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort By : ${sort}` : 'Sort By'}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-black rounded-box  w-52 p-2 shadow-sm">
    <li onClick={()=>handleSort('No of pages')}><a>No Of Pages</a></li>
    <li onClick={()=>handleRatings('ratings')}><a>Ratings</a></li>
  </ul>
</div>

            {/* name of each tab group should be unique */}
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Read List" />
  <div className="tab-content border-base-300 bg-base-100 p-10">Read Books : {readList.length}
    <div className=''>
 {
        readList.map(book=><Book key={book.bookId} book={book}></Book>)
    }
    </div>
   
    
     </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Wish List" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10">Wishlist Books : {newWishList.length}
    <div>
        {
            newWishList.map(book=><Book key={book.bookId} book={book}></Book>)
        }
    </div>
  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 3" />
  <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>

        </div>
    );
};

export default ListedBooks;