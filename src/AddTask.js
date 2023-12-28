
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTaskToList } from './AddSlice';

function AddTask(){

    const dispatch=useDispatch()

    

    const[name,setname]=useState('')
    const[description,setdescription]=useState('')

   function handlesubmit(event){
    event.preventDefault()

    if(!name && !description) return

    dispatch(addTaskToList({name,description}))
    setname("")
    setdescription("")
   }
    return(
        <div className='my-4'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Enter Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Task Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description"  value={description} onChange={(e)=>setdescription(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handlesubmit}>
                Submit
            </Button>
            </Form>

        </div>
    )
}

export default AddTask;