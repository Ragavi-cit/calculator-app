import React,{useState} from 'react'
// import ContactForm from "./ContactForm";
import './App.css';
import { evaluate } from "mathjs";


function App() {
  const[value,setValue]=useState("");
  const calculate = () => {
  try {
    const result=evaluate(value);
    setValue(result.toString());
  } catch {
    setValue("Error");
  }
};

  return (
    // <div className="App">
      // <ContactForm />
    // </div>
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div>
            <input type="text"  value={value}  className='display' placeholder='0'/>
          </div>
          <div>
            <input type="button" value="AC" onClick={e=>setValue('')}/>
            <input type="button" value="DEL" onClick={e=>setValue(value.slice(0,-1))}/>
            <input type="button" value="." onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="/" onClick={e=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="8" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="9" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="*" onClick={e=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="5" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="6" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="+" onClick={e=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="2" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="3" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="-" onClick={e=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="0" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e=>setValue(calculate)}/>
          </div>
        </form>

      </div>
      </div>
    
  );
}

export default App;
