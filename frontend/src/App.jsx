import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import NotFoundPage from './NotFoundPage.jsx'
import LoginPage from './LoginPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>index</div>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
