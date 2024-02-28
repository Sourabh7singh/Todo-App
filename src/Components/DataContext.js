import { createContext, useState } from "react";

export const DataContext = createContext();
//Add all the tasks to the local storage of the user
const DataState = (props)=>{
    const [Items,setItems] = useState(JSON.parse(localStorage.getItem("task"))||[]);
    const AddTask = (e)=>{
        e.preventDefault();
        let name = document.getElementById("task").value;
        let desc = document.getElementById("desc").value;
        let newDate = new Date();
        let date = newDate.getDate() +"-"+newDate.getMonth()+"-"+ newDate.getFullYear()+","+newDate.getHours()+":"+newDate.getMinutes();
        if(!name && !desc) return alert("Please fill all the fields");
        if(Items.length===0) {
            let newItems = Items.concat({id:1,name,desc,date});
            setItems(newItems);
            localStorage.setItem("task",JSON.stringify(newItems));
        }
        else{
            let newItems = Items.concat({id:Items[Items.length-1].id+1,name,desc,date});
            setItems(newItems);
            localStorage.setItem("task",JSON.stringify(newItems));
        }    
        document.getElementById("task").value="";
        document.getElementById("desc").value="";
    }
    const DeleteTask=(id)=>{
        const newItems = Items.filter((item)=> item.id !== id);
        setItems(newItems);
        return localStorage.setItem("task",JSON.stringify(newItems));
    }
    const HandleMode=()=>{
        const html = document.querySelector('html');
        const nav = document.getElementById('Navbar');
        const dark = document.getElementById('dark');
        const light = document.getElementById('light');
        if(html.getAttribute("data-bs-theme")==='light'||html.getAttribute("data-bs-theme")===null){
            nav.setAttribute('data-bs-theme',"dark");
            html.setAttribute('data-bs-theme',"dark");
            dark.style.display='none';
            light.style.display='block';
            light.style.color='white';
        }
        else{
            nav.setAttribute('data-bs-theme',"light");
            html.setAttribute('data-bs-theme',"light");
            dark.style.display='block';
            light.style.display='none';

        }
    }
    return (
        <DataContext.Provider value={{Items,setItems,AddTask,DeleteTask,HandleMode}}>
            {props.children}
        </DataContext.Provider>
    )

}

export default DataState
