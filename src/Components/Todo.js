import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";

export const Todo = (props) => {
    const todo = props.todo;
    const dispatch = useDispatch();
    const handletoggle = () => {
        dispatch(toggleTodo(props.id))
    }
    return (

        <tr onClick={handletoggle} className=" " >
            <th scope="row">{props.id}</th>
            <td>{todo.content}</td>
            <td>{todo.completed ? "Completed✅" : "Incompleted⚠️"}</td>
        </tr>

    )
} 