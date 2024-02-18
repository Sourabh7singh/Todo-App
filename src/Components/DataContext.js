import { createContext, useState } from "react";

export const DataContext = createContext();

const DataState = (props)=>{
    const [Items,setItems] = useState([]);
    const AddTask = (e)=>{
        e.preventDefault();
        let name = document.getElementById("task").value;
        let desc = document.getElementById("desc").value;
        if(!name && !desc) return alert("Please fill all the fields");
        if(Items.length===0){
            return setItems(Items.concat({id:1,name,desc}));
        }
        setItems(Items.concat({id:Items[Items.length-1].id+1,name,desc}));

    }
    const DeleteTask=(e,id)=>{
        e.preventDefault();
        setItems(Items.filter((item)=> item.id !== id));
    }
    return (
        <DataContext.Provider value={{Items,setItems,AddTask,DeleteTask}}>
            {props.children}
        </DataContext.Provider>
    )

}

export default DataState