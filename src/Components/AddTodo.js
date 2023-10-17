import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import {
    MDBBtn,
    MDBCol,
    MDBInput,
    MDBRow,
    
  } from "mdb-react-ui-kit";

export default function AddTodo() {

    const [input, setInput] = useState('');
    const [check, setCheck] =useState(false)
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
        setCheck(false);
    }

    const handleAdd = () => {
        if(input !== '') {
            dispatch(addTodo(input));
            setInput('');
            
        }
        else{
            setCheck(true);
        }

    }

    return (
        <div>
            {/* <div>
            <input placeholder="New To do" value={input} onChange={(e) => handleInput(e)}  />
           
            </div>
            <button onClick={handleAdd}>Add To Do</button> */}



            <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput placeholder="New To do" value={input} onChange={(e) => handleInput(e)}
                      label="Enter a task here"
                      id="form1"
                      type="text"
                    />
                     {check && <span>Not empty</span>}
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn  onClick={handleAdd}>Save</MDBBtn>
                  </MDBCol>
                  
                </MDBRow>

        </div>

        
    )
}