import { configureStore, createSlice } from "@reduxjs/toolkit";

const Task = createSlice({
    name : 'Task',
    initialState : 
         [{id : 1, titel : "PHP" ,description : "create todo list in php",done : false ,date : new Date().toDateString()}],
    reducers : {
        AddTask : (state , action)=>{
            state = state.push(action.payload)
        },
        DelletTask : (state , action) =>{
            state = state.filter(tasks => tasks.id != action.payload)
            return state
        },
        UpdatTask : (state , action) => {
            const  mission = state.find(tasks => tasks.id == action.payload.id);
            mission.titel = action.payload.titel;
            mission.description = action.payload.description;
            console.log(mission)
            return state
        }

    }
});

export const  Store =  configureStore({
    reducer :{
        Task : Task.reducer
    }
});
//export const {AddTask , AddTask ,UpdatTask} = Task.action
