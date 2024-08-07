import { useState } from 'react'

import Sidebar from './sidebar'
import Main from './mainlayout'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex '>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
