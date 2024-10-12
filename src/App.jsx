import React from 'react';
import HomePage from '../Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import JobsPage from '../Pages/JobsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import JobPage from '../Pages/JobPage';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>} >
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage/>} />
    <Route path='*' element={<NotFoundPage/>} />
    <Route path='/jobs/:id' element={<JobPage/>} />



  </Route>
  )
);



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;