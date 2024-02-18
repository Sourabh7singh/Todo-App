import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const TodoForm = () => {
    const {AddTask} = useContext(DataContext);
    return (
        <div className='container'>
            <form>
                <div className="mb-3 m-3 ">
                    <textarea className="form-control" id="task" aria-describedby="emailHelp" placeholder="Enter the task.........."/>
                </div>
                <div className="mb-3 m-3 ">
                    <textarea className="form-control" id="desc" aria-describedby="emailHelp" placeholder="Enter the Description..."/>
                </div>
                <button type="submit" className="btn btn-primary m-auto d-block mb-4" onClick={(e)=>AddTask(e)}>Add task</button>
            </form>
        </div>
    )
}

export default TodoForm