
import { createRoot } from 'react-dom/client'
import './index.css'
import RouteComp from './components/RouteComp.tsx'
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RouteComp/>
  </BrowserRouter>,
)
