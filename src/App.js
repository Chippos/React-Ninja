import { useState } from "react";
import Header from "./components/Header";
import Userform from "./components/Userform";
import Tasks from "./components/Tasks";

const App = () => {
  const [todo, setTodo] = useState([
    // {
    //   id: 1,
    //   text: "Doctors Appointment",
    //   day: "Feb 5th at 2:30pm",
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: "Meeting at School",
    //   day: "Feb 6th at 1:30pm",
    //   reminder: true,
    // },
    // {
    //   id: 3,
    //   text: "Food Shopping",
    //   day: "Feb 5th at 2:30pm",
    //   reminder: false,
    // },
  ]);

  // Add Task
  const addTask = (e)=>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = {id, ...e}
    setTodo([...todo, newTodo])
  }
  
  // Delete Task
  const deleteTask = (id) => {
    setTodo(todo.filter((eachtask) => eachtask.id !== id));
    // console.log('Delete: ',id)
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTodo(
      todo.map((remind) =>
        remind.id === id ? { ...remind, reminder: !remind.reminder } : remind
      )
    );
  };

  return (
    <div className="App">
      <Header title="React-Shinobi" />
      <Userform btnText="Submit" onAdd={addTask}/>
      <Tasks todoit={todo} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
};

export default App;
