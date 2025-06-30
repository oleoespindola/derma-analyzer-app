import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'

import PublicRoute from './guards/publicRoute'
import PrivateRoute from './guards/privateRoute'

import Auth from './view/auth/auth'
import Common from './view/app/common'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          } />

          <Route path='/app' element={
            <PrivateRoute>
              <Common />
            </PrivateRoute>
          } />

        </Routes>
      </BrowserRouter>      
  )
}

export default App
