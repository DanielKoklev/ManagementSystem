import React, { useEffect, useState } from 'react'
import { finishedTask, deleteTask, getAllTasks, unfinishedTask } from '../services/TaskService'
import { useNavigate } from 'react-router-dom'

const ListTaskComponent = () => {

    const [tasks, setTasks] = useState([])

    const navigator = useNavigate()


    useEffect(() => {
        listTasks();
    }, [])
    
    function listTasks(){
        getAllTasks().then((response) => {
            setTasks(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewTask(){
        navigator('/add-task')

    }

    function updateTask(id){
        console.log(id)
        navigator(`/update-task/${id}`)
    }
    
    function removeTask(id){
        deleteTask(id).then((response) => {
            listTasks();
        }).catch(error => {
            console.error(error)
        })
    }

    function markFinishedTask(id){
        finishedTask(id).then((response) => {
            listTasks()
        }).catch(error => {
            console.error(error)
        })
    }

    function markUnfinishedTask(id){
        unfinishedTask(id).then((response) => {
            listTasks();
        }).catch(error => {
            console.error(error)
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Tasks</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTask}>Add Task</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Task Description</th>
                        <th>Task Finished</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => 
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.finished ? 'YES': 'NO'}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateTask(task.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeTask(task.id)} style={ { marginLeft: "10px" }} >Delete</button>
                                    <button className='btn btn-success' onClick={() => markFinishedTask(task.id)} style={ { marginLeft: "10px" }} >Finished</button>
                                    <button className='btn btn-info' onClick={() => markUnfinishedTask(task.id)} style={ { marginLeft: "10px" }} >Unfinished</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ListTaskComponent