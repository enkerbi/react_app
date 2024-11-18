import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Welcome from './Welcome'

function App() {
  const [count, setCount] = useState(0)
  const students = [
		{name: "DAFT PUNK", score: "Something about us"},
		{name: "QUEEN", score: "Cool Cat"},
		{name: "BLUR", score: "Girls & Boys"},
	]
  return (
    <>
    <div>
        <Hello></Hello>
      
      </div>
     <div>
      {students.map((student, index) => (
        <Welcome key={index} name={student.name} score={student.score}/>
      ))}
    </div>
      
     
    </>
  )
}

export default App
