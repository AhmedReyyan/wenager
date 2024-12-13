 import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import Entry from './components/Entry.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Dashboard from './components/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<App/>}>
             
      </Route>
      <Route path='/entry' element={<Entry/>}>
           <Route index element={<Login/>} />
           <Route path='signup' element={<Signup/>} />
      </Route>
      <Route path='/user' element={<Dashboard/>}/>
       <Route path='*'  element={<ErrorPage/>}/>
    </Routes>
   
    
    </BrowserRouter>
 
)
