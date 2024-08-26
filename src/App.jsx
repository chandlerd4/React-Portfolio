import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'


function App() {


  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
