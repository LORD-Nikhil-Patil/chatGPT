import Sidebar from './sidebar'
import Main from './mainlayout'

import './App.css'
import { useEffect, useState } from 'react'
import useWindowDimensions from './utils'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { width } = useWindowDimensions();

  useEffect(()=>{
    if(width <= 701){
      setSidebarOpen(false)
    }else{
      setSidebarOpen(true)
    }
  },[width])

  return (
    <div className='flex '>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <Main setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} screenWidth={width}/>
    </div>
  )
}

export default App
