
export const AddTask = (Task)=>{
    return {type : "Task/AddTask" , payload : Task}
}

export const DelletTask = (Task)=>{
    return {type : "Task/DelletTask" , payload : Task}
}

export const UpdatTask = (Task) =>{
    return {type : "Task/UpdatTask" , payload : Task}
}

export const FilterTsk = (date) =>{
    return {type : FilterTsk , payload : date }
}

