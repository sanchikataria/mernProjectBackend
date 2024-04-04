import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateDetails from './pages/CreateDetails';
import ShowDetail from './pages/ShowDetail';
import EditDetail from './pages/EditDetail';
import DeleteDetail from './pages/DeleteDetail';
const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Home />} />
      <Route path='/details/create' element={<CreateDetails />} />
      <Route path='/details/details/:id' element={<ShowDetail />} />
      <Route path='/details/edit/:id' element={<EditDetail />} />
      <Route path='/details/delete/:id' element={<DeleteDetail />} />
   
    </Routes>
  )
}

export default App