import { toast } from "react-toastify";

const addToStoredList =()=>{
const storedListStr = localStorage.getItem('read-list');
if(storedListStr){

const storedList = JSON.parse(storedListStr)

return storedList;
}
else{
return [];
}

}

const getStoredList =(id)=>{

    const storedList = addToStoredList();
    if(storedList.includes(id)){
        console.log(id,'already exists in the read list')
    }else
    {
     storedList.push(id)
     const storedListStr = JSON.stringify(storedList);
     localStorage.setItem('read-list',storedListStr);
    toast('the book is added to your read list')
    }

}

export {getStoredList,addToStoredList}


