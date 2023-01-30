import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTask, DelletTask, UpdatTask } from "./store/action";

import { useState } from "react";

function App() {
  const Task = useSelector(state => state.Task );
  const Dispatsh = useDispatch();
  const [titel , settitel] = useState('')
  const [description , setdescription] = useState('')
  const [id , setid] = useState('')
  const handlechange  = ()=>{
    Dispatsh(AddTask({id : titel.length + +Math.floor(Math.random() * 200) , titel : titel , description : description , date :new Date().toDateString(), done : false})
    )
    setdescription('');
    settitel(''); 
  }
  const updateTask =(e)=>{
    e. preventDefault();
    Dispatsh(UpdatTask({id : id , titel : e.target.titel.value , description : e.target.description.value}));
    setid(null);
  } 

  return (
    <div>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm" >Titel</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>settitel(e.target.value)} value={titel} />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required onChange={(e)=>setdescription(e.target.value)} value={description}/>
          </div>
          
          <button onClick={handlechange} type="button" class="btn btn-outline-secondary">ADD Task</button>
      <table class="table caption-top">
        <caption>List of Task</caption>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">titel</th>
            <th scope="col">description</th>
            <th scope="col">date</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            Task.map(Element => <tr>
              <th scope="row">{Element.id}</th>
              <td>{Element.titel}</td>
              <td>{Element.description}</td>
              <td>{Element.date}</td>
              <td><input type="checkbox" onChange={()=>Dispatsh(DelletTask(Element.id))}></input></td>
              <td><button type="button" class="btn btn-info" onClick={()=>{setid(Element.id)}}>Update</button></td>
             </tr> )
          }
        </tbody>
        
      </table>
          {id?<form onSubmit={updateTask}>
                <input name="titel"  ></input>
                <input name="description" ></input>
                <input value="Update Task"  type="submit" ></input>
              </form>:null
      }
      
    </div>
  );
}

export default App;
