import React, { useContext } from 'react'
import { DataContext } from './DataContext'
import Card from './Card';

const Todoitems = () => {
    const data = useContext(DataContext);
  return (
    <div className='container'>
      {
        data?.Items.map((element,index)=>{
            return <div key={index}>
                <Card element={element}/>
            </div>
        })
      }
    </div>
  )
}

export default Todoitems
