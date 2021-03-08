import { useState } from 'react'
import Header from  "./components/Header"
import Tasks from  "./components/Tasks"
import AddTask from  "./components/AddTask"
import Wallet from "./components/Wallet"

function App() {
  const [showAddTask, setShowAddTask] = 
  useState(true)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at School",
            day: "Feb 6th at 2:30",
            reminder: true,
        },
        {
            id: 3,
            text: "Food Shopping",
            day: "Feb 5th at 2:30",
            reminder: false,
        },
    ]
)

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() *
  10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==
  id))
}
 
// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
    task.id === id ? { ...task, reminder: 
    !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask
      (!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} /> : "NO TASK"}
      <wally/>
    </div>
    
  );
}

export default App;
