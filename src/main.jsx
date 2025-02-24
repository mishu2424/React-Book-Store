import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listedBooks',
        loader:()=>fetch('/booksData.json'),
        element:<ListedBooks></ListedBooks>,
      },
      {
        path:'/book/:bookId',
        loader:()=>fetch('/booksData.json'),
        element:<BookDetails></BookDetails>,
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
