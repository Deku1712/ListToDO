import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";

export const Todo = (props) => {
    const todo = props.todo;
    const dispatch = useDispatch();
    const handletoggle = () => {
        dispatch(toggleTodo(props.id))
    }
    return ( 
        <div>
            {todo.completed  ?  "😤" : "😵‍💫"}
            <span onClick={handletoggle}>
                {todo.content} 
            </span>
        </div>
    )
} 