import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Component/Home.jsx'
import Trending from './Component/Trending.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Trending />
  </StrictMode>,
)
