import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Trending from '../pages/Trending';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Erorr404 from '../pages/Erorr404';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Erorr404/>
  }
  ,
  {
    path:"/trending",
    element:<Trending/>
  },
  {
    path:"/movies",
    element:<Movies/>
  },
  {
    path:"/series",
    element:<Series/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
])


const App = () => {
   
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
};
export default App;
