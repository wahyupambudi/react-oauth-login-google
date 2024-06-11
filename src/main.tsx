import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './pages/Login.tsx'
import Home from './pages/Home.tsx'
import Upload from './pages/Upload.tsx'
import About from './pages/About.tsx'
import Protected from './components/Protected.tsx'
import Register from './pages/Register.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={
            <Protected>
              <App/>
            </Protected>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/upload' element={<Upload/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
