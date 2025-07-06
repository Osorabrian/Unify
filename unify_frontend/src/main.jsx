import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Detail from './components/events/detail.jsx'
import Navbar from './components/navigation/navbar'
import Login from './components/Authentication/login'
import CreateAccout from './components/Authentication/createAccount'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<CreateAccout />} />
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
