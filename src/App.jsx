import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Fields from './components/Fields';

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    if (input.trim() === "") return;
    setData([...data, { input, completed: false }]);
    setInput("");
  };

  const removeItem = (index) => {
    const arr = [...data];
    arr.splice(index, 1);
    setData(arr);
  };

  const toggleComplete = (index) => {
    const newData = [...data];
    newData[index].completed = !newData[index].completed;
    setData(newData);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={addItem} className="add-button">Add</button>
      </div>
      <ul className="task-list">
        {data.map((element, index) => (
          <li key={index} className={`task fade-in ${element.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={element.completed}
              onChange={() => toggleComplete(index)}
            />
            <span>{element.input}</span>
            <button className="delete-button" onClick={() => removeItem(index)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
