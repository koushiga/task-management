import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskInList } from './AddSlice';


function Updatetask(props) {
  const{selectedTask}=useSelector((state)=>state.task)

   const[name,setname]=useState('')
   const[description,setdescription]=useState('')
   const[id,setid]=useState(0)

const dispatch=useDispatch()

function handlesubmit(){
    props.onHide()
    dispatch(updateTaskInList({name,description,id}))
}
useEffect(()=>{
  // if(Object.keys(selectedTask).length !==0){
   setname(selectedTask.name)
  setdescription(selectedTask.description)
  setid(selectedTask.id)
  // }
},[selectedTask])


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Enter Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Task Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description"  value={description} onChange={(e)=>setdescription(e.target.value)}/>
            </Form.Group>
            
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="primary" type="submit" onClick={handlesubmit}>
                New Update
            </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default Updatetask;