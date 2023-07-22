import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Home from './pages/home'
import Editor from './pages/editor'

export default function App() {
  return (
    <>
      <Toaster position="top-right" />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/editor/:roomId' element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
