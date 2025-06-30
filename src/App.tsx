import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'

import PublicRoute from './guards/publicRoute'

import Auth from './view/auth/auth'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={

            <PublicRoute>
              <Auth />
            </PublicRoute>
            
          }/>
        </Routes>
      </BrowserRouter>      
  )
}

export default App
