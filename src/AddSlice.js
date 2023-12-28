import { createSlice } from '@reduxjs/toolkit'



const initialState={
    taskList:[],
    selectedTask:{}

}

const Taskslice=createSlice({

    name:"taskSlice",
    initialState,
    reducers: {
        addTaskToList:(state,action)=>{
            let id= Math.floor(Math.random()*100);
            // console.log(id);
            const task={...action.payload,id}
            state.taskList.push(task)
        },
        removeTaskList:(state,action)=>{
            state.taskList=state.taskList.filter((task)=>task.name!==action.payload)
            
        },
        updateTaskInList:(state,action)=>{
            state.taskList=state.taskList.map((event)=>(
                 event.id===action.payload.id ? action.payload:event
            ))
        },
        setSelectTask:(state,action)=>{
            state.selectedTask=action.payload
        }
    }

})

export const {addTaskToList,removeTaskList,updateTaskInList,setSelectTask}=Taskslice.actions;

export default Taskslice.reducer