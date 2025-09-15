import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Hello from './pages/Hello.jsx'
import Landing from './pages/Landing.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="hello" element={<Hello />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)