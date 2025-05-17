import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
     return (
     <div className= "App">
        <Header/>
        <div className ="container">
          <input type = "text" placeholder="Add a new task"/>
          <button className="add-button">Add</button>
        </div>
        <div className="task-list">
          <div className="task">
            <input type="checkbox"/>
            <span className="task-text">task 1</span>
            < button className="delete-button">Delete</button>
          </div>
        </div>
        
  </div>
  
  )}
 


export default App
