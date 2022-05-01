import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/card/Card'
import Hero from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
      <Card />
    </div>
  )
}

export default App
