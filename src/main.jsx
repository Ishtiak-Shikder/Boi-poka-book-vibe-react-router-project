import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter ,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Root from './Components/Roots/Root';
import DashBoard from './Components/Dashboard/DashBoard';
import BookDetail from './Components/Books/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import WishListBooks from './Components/ListedBooks/WishListBooks';
import { ToastContainer, toast } from 'react-toastify';


let router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element:<Home></Home>,

      },

      {
        path:"books/:bookId",
        element:<BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json'),
      },
      {
        path:"listedBooks",
        element:<ListedBooks></ListedBooks>,
        // element:<WishListBooks></WishListBooks>,
        loader: ()=> fetch('/booksData.json')
      },

      {
        path: "dashboard",
        element: <DashBoard></DashBoard>
      }
    ]

  },
  
  
],

 {
    basename: "/Boi-poka-book-vibe-react-router-project"
  }

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  <ToastContainer></ToastContainer>
  </StrictMode>
)
