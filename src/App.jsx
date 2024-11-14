import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: "flex",justifyContent:'space-between'}}>
        <div style={{backgroundColor: "red"}}>kya haal hai</div>
        <div style={{backgroundColor: "blue"}}>sup bro</div>
        <div style={{backgroundColor: "yellow"}}>hi bro</div>
      </div>   

    <div className='flex justify-between '>
      <div className='bg-blue-700'>hiiiiiiiiiii</div>
      <div className='bg-amber-600'>byeeeeee</div>
      <div className='bg-purple-600'>kutte k bache</div>

    </div>
    </>
  )
}

export default App
