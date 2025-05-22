import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const router = useRoutes(routes)


  return (
    <div>
      {router}
    </div>
  )
}

export default App