import { createContext, useState } from "react";

export const DataContext = createContext();

const DataState = (props)=>{
    const [Items,setItems] = useState([]);
    const AddTask = (e)=>{
        e.preventDefault();
        let name = document.getElementById("task").value;
        let desc = document.getElementById("desc").value;
        let newDate = new Date();
        let date = newDate.getDate() +"-"+newDate.getMonth()+"-"+ newDate.getFullYear()+","+newDate.getHours()+":"+newDate.getMinutes();
        if(!name && !desc) return alert("Please fill all the fields");
        if(Items.length===0) setItems(Items.concat({id:1,name,desc,date}));
        else setItems(Items.concat({id:Items[Items.length-1].id+1,name,desc,date}));
        document.getElementById("task").value="";
        document.getElementById("desc").value="";

    }
    const DeleteTask=(e,id)=>{
        e.preventDefault();
        setItems(Items.filter((item)=> item.id !== id));
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