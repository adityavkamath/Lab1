import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className='flex items-center gap-10 w-full justify-center flex-col'>
      <input className='px-8 py-6 rounded-lg w-[800px]' type="text" placeholder='Enter the text' value={text} onChange={(e) => {
        setText(e.target.value)
      }}></input>
      <div className='flex gap-5 text-4xl '>
        My Typed Text :
        <div className='text-blue-400'>
          {text}
        </div>
      </div>
      <div className='flex gap-5 text-4xl '>
        Number of Characters:
        <div className='text-blue-400'>
          {text.length}
        </div>
      </div>
    </div>
  )
}

export default App
