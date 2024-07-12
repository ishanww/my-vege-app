import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VegeIndex from './components/Vegetable';

import Blog from './components/Blog/Blog';
import BlogList from './components/Blog/BlogList';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Navigation />    
    <Routes>
      <Route path='/' element={<VegeIndex />} />
      <Route path='/blogs' element={<BlogList />} />
      <Route path='/blogs/:blogId' element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;