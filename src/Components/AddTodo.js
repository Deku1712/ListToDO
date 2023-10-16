import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

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
            <input placeholder="New To do" value={input} onChange={(e) => handleInput(e)}  />
            <button onClick={handleAdd}>Add To Do</button>

            {check && <p>Not empty</p>}
        </div>
    )
}