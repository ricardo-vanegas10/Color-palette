import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';
import DisplayColors from './components/DisplayColors';

function App() {
  const [list, setlist] = useState(new Values("red").all(10));

  console.log(list)

  return (
    <>
     <div className="App">
      <FormColor setlist={setlist}/>
      <DisplayColors list={list}/>
     </div>
    </>
  )
}

export default App
