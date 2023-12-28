import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Updatetask from './UpdateTask';
import { useDispatch, useSelector } from 'react-redux';

import { removeTaskList,setSelectTask } from './AddSlice';


function TaskList(){
    const dispatch=useDispatch((state)=>state.task)
      const{taskList} = useSelector((state)=>state.task)


     
    const [modalShow, setModalShow] = useState(false);


    const handleedit=(task)=>{
        console.log("handleEdit")
        setModalShow(true)
        dispatch(setSelectTask(task))
    }
    const handledelete=(name)=>{
        // console.log("handleDelete")
        dispatch(removeTaskList(name))
    }
    return(
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Task ID</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                 taskList&& taskList.map((task,index)=>{
                    return(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td>
                        <Button variant="primary" className='mx-3' onClick={()=>handleedit(task)}>
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button variant="primary" onClick={()=>handledelete(task.name)}>
                            <i class="bi bi-trash-fill"></i>
                        </Button>
                        </td>
                        </tr>
                        
                    )
                        
                    })
                }
               
            </tbody>
            </Table>

            <Updatetask
           show={modalShow}
           onHide={() => setModalShow(false)}
           />
         </div>
    )
}

export default TaskList