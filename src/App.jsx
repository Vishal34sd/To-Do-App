import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {

  const [input , setinput]= useState("");
  const [data, setdata] = useState([]);
  const addItem = ()=>{
    if(input.trim === ""){
      return ;
    setdata(...data, {input});
    }
    setdata(...data, {input});
    setinput(...data)
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
          <input value={input} type = "text" placeholder="Add a new task"/>
          <button  onClick= {addItem}className="add-button">Add</button>
        </div>
        <div className="task-list">
          <div className="task">
            <input type="checkbox"/>
            <h3>Javascript</h3>
            < button className="delete-button">Delete</button>
          </div>
        </div>
        
  </div>
  
  )}
 


export default App
