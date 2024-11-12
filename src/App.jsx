import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <div className='bg-black' style={{height:'100vh'}}>
      <div className='d-flex' style={{height:'90%'}}>
        <Sidebar/>
      </div>
    </div>
    </>
  )
}

export default App
