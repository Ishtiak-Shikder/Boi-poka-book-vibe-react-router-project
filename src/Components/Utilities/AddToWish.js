import { toast } from "react-toastify";

const addToWishList =()=>{
    const wishListStr = localStorage.getItem('wish-list');
    if(wishListStr){
      const wishList = JSON.parse(wishListStr);
      return wishList;
    }else{
     return [];
    }
}


const getWishList =(id)=>{
   const wishList = addToWishList();
   if(wishList.includes(id)){
    console.log(id,'already exists')
   }
   else{
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem('wish-list',wishListStr);
    toast('this book is added to your wishlist')
   }
}

export{getWishList,addToWishList}