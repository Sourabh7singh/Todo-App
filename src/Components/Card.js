import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const Card = (props) => {
    const { DeleteTask } = useContext(DataContext);
    const id = props.element.id;
    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{props.element.name}</h5>
                <p className="card-text">{props.element.desc}</p>
                <span className="position-absolute top-0 start-50  translate-middle badge rounded-pill bg-danger">
                    {props.element.date}
                    <span className="visually-hidden">unread messages</span>
                </span>
                <button type="submit" onClick={(e) => DeleteTask(e, id)} className="btn btn-primary">Completed/Delete</button>
            </div>
        </div>
    )
}

export default Card