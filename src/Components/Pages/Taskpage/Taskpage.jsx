import { useEffect, useState } from 'react'
import axios from 'axios'
import "./style.css";

const Taskpage =()=>{
    const [data, setData]=useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");

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
    if (newTaskTitle.trim() === "") return; // Prevent adding empty tasks

    const newTask = {
      id: data.length + 1, // Generate a new ID (in reality, this should come from the API if you were adding it to the backend)
      title: newTaskTitle,
      completed: false, // New task will be marked as not completed by default
    };

    setData([newTask, ...data]); // Add the new task to the beginning of the list
    setNewTaskTitle(""); // Clear the input field after adding
  };

    return(
        <>
        <div className="addTaskSection">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)} // Update state as the user types
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

        {data.map((item)=>(
                <div key={item.id} className='listContainer'>
                        <li className='iddiv'>{item.id}</li>
                        <li className='titlediv'>{item.title}</li>
                        <li className='boolendiv'>{item.completed ? "true" : "false"}</li>
                        <button onClick={()=>{deleteTask(item.id)}}>Delete</button>
                </div>
        ))}
        <button>Add Task</button>
        </>
    )
}

export default Taskpage;