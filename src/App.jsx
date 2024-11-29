// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchJob from './components/Search';
import HiredEmp from './components/hiredEmp';
import Organization from './components/organization' 
import DeletePost from './components/deletePost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchJob />} />
      <Route path="/hiredemp" element={<HiredEmp />} />
      <Route path='/ordination' element={<Organization/>}/>
      <Route path='/delete-post' element={<DeletePost/>}/>
    </Routes>
  );
}

export default App;
