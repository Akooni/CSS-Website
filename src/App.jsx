import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome ({name}) {
  return <h2>Welcome, {name}!</h2>
}


function App() {
  const [count, setCount] = useState(0)

  return (
      <main style= {{ fontFamily: "system-ui", padding: 24}}>
        <h1>Hello, React on windows!!</h1>
        <Welcome name="Sufyan"/>
        <p>Clicks and kicks and pips: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>click me </button>
      </main>
  );
}

export default App;
