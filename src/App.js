import { useState } from "react";
import Header from "./components/Header";
import Userform from "./components/Userform";
import Tasks from "./components/Tasks";

const App = () => {
  const [todo, setTodo] = useState([]);

  // Add Task
  const addTask = (e) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id, ...e };
    setTodo([...todo, newTodo]);
  };

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
      <Userform btnText="Submit" onAdd={addTask} />
      <Tasks todoit={todo} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
};

export default App;
