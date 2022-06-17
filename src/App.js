import { useState } from "react";
import Header from "./components/Header";
import Userform from "./components/Userform";
import Tasks from "./components/Tasks";

const clicked = (e) => {
  e.preventDefault();
  console.log("Clicked");
};

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTodo(todo.filter((eachtask) => eachtask.id !== id));
    // console.log('Delete: ',id)
  };

  return (
    <div className="App">
      <Header title="React-Ninja" />
      <Userform btnText="Submit" onclick={clicked} />
      {todo.length > 0 ? <Tasks todoit={todo} onDelete={deleteTask} /> : null}
    </div>
  );
};

export default App;
