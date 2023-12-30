import React, { useEffect } from 'react'
import { useState } from 'react'
import { getTask, createTask, updateTask } from '../services/TaskService'
import { useNavigate, useParams } from 'react-router-dom'

const TaskComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [finished, setFinished] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()


    function saveOrUpdateTask(e){
        e.preventDefault()

        const task = {title, description, finished}
        console.log(task);

        if(id){

            updateTask(id, task).then((response) => {
                navigate('/tasks')
            }).catch(error => {
                console.error(error);
            })

        }else{
            createTask(task).then((response) => {
                console.log(response.data)
                navigate('/tasks')
            }).catch(error => {
                console.error(error);
            })
        }
    }

    function pageTitle(){
        if(id) {
            return <h2 className='text-center'>Update Task</h2>
        }else {
            return <h2 className='text-center'>Add Task</h2>
        }
    }

    useEffect( () => {

        if(id){
            getTask(id).then((response) => {
                console.log(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setFinished(response.data.finished)
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                { pageTitle() }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Task Title:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Task Title'
                                name='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Task Description:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Task Description'
                                name='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Is task finished:</label>
                            <select
                                className='form-control'
                                value={finished}
                                onChange={(e) => setFinished(e.target.value)}
                            >
                                <option value="false">No</option>
                                <option value="true">Yes</option>

                            </select>
                        </div>

                        <button className='btn btn-success' onClick={ (e) => saveOrUpdateTask(e)}>Submit</button>
                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default TaskComponent