import {createBrowserRouter,Routes , Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './App.css'
import Header from './Components/header.jsx'
import Footer from './Components/Footer.jsx'
import RootLayout from './Layout/RootLayout.jsx'
import HomeSection from './Components/HomeSection'
import About from './Components/About'


function App() {
    
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}> 
         <Route  index element={<HomeSection/>}/>
         <Route path='/about' element={<About/>}/>
      
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
