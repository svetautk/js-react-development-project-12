import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import './NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
