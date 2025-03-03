import {createBrowserRouter,Routes , Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './App.css'
import RootLayout from './Layout/RootLayout.jsx'
import HomeSection from './Components/HomeSection'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Speakers from './Components/Speakers.jsx'
import Register from './Components/Register.jsx'
import Paper from './Components/Paper.jsx'
import AuthorGuidelines from './Components/AuthorGuidelines.jsx'
import Idt from './Components/Idt.jsx'


function App() {
    
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}> 
         <Route  index element={<HomeSection/>}/>
         <Route path='/about' element={<About/>}/>
          <Route path ='/committee' element={<Gallery/>}/>  
         <Route path='/speakers' element={<Speakers/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/call-for-papers' element={<Paper/>}/>
         <Route path='/author-guidelines' element={<AuthorGuidelines/>}/>
         <Route path='/imp-dates' element={<Idt/>}/>
      
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
