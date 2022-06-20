import Singletask from "./Singletask";

const Tasks = ({ todoit, onDelete, onToggle }) => {
  return (
    <div>
      {todoit.length > 0 ? (
        <div className="container my-3">
          <h5 className="text-center p-2 my-3 border rounded-pill">Tasks</h5>
          <div className="tasks-outer">
            {todoit.map((task) => (
              <Singletask
                key={task.id}
                todosingle={task}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="container my-3">
          <h6 className="text-secondary text-center">Add Tasks to show</h6>
        </div>
      )}
    </div>
  );
};

export default Tasks;

// // useState Practice
// import React from 'react'
// import { useState } from 'react'

// const Tasks = () => {

//     const [Persons, setPersons] = useState([
//         {
//             id: 1,
//             firstName: 'Usama',
//             lastName: 'Jawad',
//             address: {
//                 country: 'Pakistan',
//                 city: 'Faisalabad',
//                 state: 'Punjab'
//             },
//             hobbies: ['Traveling', 'Programming', 'Driving']
//         },
//         {
//             id: 2,
//             firstName: 'Hamza',
//             lastName: 'Shakeel',
//             address: {
//                 country: 'Pakistan',
//                 city: 'Lahore',
//                 state: 'Punjab'
//             },
//             hobbies: ['Eating', 'Programming', 'Traveling']
//         }
//     ])

//   return (
//     <div>
//       <div className="container">
//       {Persons.map((person)=>
//        person.id === 1?
//         <div key={person.id}>
//             <h6 className='shadow my-3 border-0 list-group-item'>{person.firstName} {person.lastName}</h6>
//             <h6 className='shadow my-3 border-0 list-group-item'>{person.address.city}</h6>
//         </div>
//         : null
//       )}
//       </div>
//     </div>
//   )
// }

// export default Tasks
