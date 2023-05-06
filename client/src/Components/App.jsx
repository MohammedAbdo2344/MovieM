import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Trending from '../pages/Trending';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
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
