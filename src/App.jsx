import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Fields from './components/Fields'

function App() {

  const [input , setinput]= useState("");
  const [data, setdata] = useState([]);
  const addItem = () => {
    if (input.trim() === "") {
      return;
    }
    setdata([...data, { input }]);
    setinput("");
  };
  const removeItem = (index)=>{
    const arr = data ;
    data.splice(index,1);
    setdata([...arr]);
  }
     return (
     <div className= "App">
        <Header/>
        <div className ="container">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Add a new task"
          />
          <button  onClick= {addItem}className="add-button">Add</button>
        </div>
        {data.map((element, index) => {
          return (
            <Fields
              index={index}
              input={element.input}
              key={index}
              remove ={removeItem}
            />
          );
        })}
      </div>
    );
  }


export default App
