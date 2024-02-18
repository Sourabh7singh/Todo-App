import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const Card = (props) => {
    const {DeleteTask} = useContext(DataContext);
    const id = props.element.id;
    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{props.element.name}</h5>
                <p className="card-text">{props.element.desc}</p>
                <button type="submit" onClick={(e)=>DeleteTask(e,id)} className="btn btn-primary">Completed/Delete</button>
            </div>
        </div>
    )
}

export default Card