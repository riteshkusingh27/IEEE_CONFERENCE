import { useState } from 'react'
import './App.css'
import Header from './Components/header.jsx'
import EventCarousel from './Components/EventCarousel.jsx'
import HomeSection from './Components/HomeSection.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <EventCarousel/>
      <HomeSection/>
      <Footer/>
      
    </div>
  )
}

export default App
