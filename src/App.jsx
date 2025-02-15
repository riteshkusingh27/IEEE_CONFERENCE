import { useState } from 'react'
import './App.css'
import Header from './Components/header.jsx'
import Background from './Components/Background.jsx'
import HomeSection from './Components/HomeSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <HomeSection/>
      
    </div>
  )
}

export default App
