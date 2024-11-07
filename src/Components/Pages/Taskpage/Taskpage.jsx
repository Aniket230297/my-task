import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import "./style.css";

const Taskpage =()=>{
    const [data, setData]=useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const taskIdCounter = useRef(201);
    

    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/todos")
        .then((res)=>{setData(res.data),
        console.log(res.data)}
      )
    }, [])

    const deleteTask =(id)=>{
        setData(data.filter((todo)=>todo.id !== id))
    }

    // Handle adding a new task
  const addTask = () => {
    if (newTaskTitle.trim() === "") return; 

    const newTask = {
      id: taskIdCounter.current++, 
      title: newTaskTitle,
      completed: false, 
    };

    setData([newTask, ...data]); 
    setNewTaskTitle(""); 
  };

    return(
        <>
        <div className="addTaskSection">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)} 
          placeholder="Enter new task"
          className='addInput'
        />
        <button onClick={addTask} className='addInputBtn'>Add Task</button>
      </div>

        {data.map((item)=>(
                <div key={item.id} className='listContainer'>
                        <li className='iddiv'>{item.id}</li>
                        <li className='titlediv'>{item.title}</li>
                        <li className='boolendiv'>{item.completed ? "true" : "false"}</li>
                        <button onClick={()=>{deleteTask(item.id)}}>Delete</button>
                </div>
        ))}
        
        </>
    )
}

export default Taskpage;