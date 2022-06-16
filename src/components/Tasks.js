import React from 'react'

const task = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    }
]

const Tasks = () => {
  return (
    <div>
        <div className='container'>
            <div className="tasks-outer m-5">
                {task.map((task) => (
                    <h6 className='shadow p-2' key={task.id}>
                        {task.id}. {task.text}
                    </h6>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tasks
