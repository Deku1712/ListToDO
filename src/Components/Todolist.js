import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";
import { selector } from "../redux/selectors";


import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function TodoList() {
  const todosData = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filterToDo);
  const allId = todosData.allId;
  const todos = allId.map((id) => ({ id, detail: todosData.byIds[id] }));

  const todos2 = selector(todos, filter);

  

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = todos2.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages = Math.ceil(todos2.length / itemsPerPage);

  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };


  return (
    <div className="d-flex justify-content-center align-items-center ">
      {/* {currentPage != 1 && <button type="button" class="btn btn-light" onClick={prevPage}>

        <i class="fa-solid fa-backward"></i>
      </button>} */}
      <MDBTable className="mb-4 mx-3">

        <MDBTableHead>
          <p>Total : {todos2.length}</p>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Status</th>

          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {todos2 && todos2.length
            ? todos2.map((todo) => (
              <Todo key={todo.id} todo={todo.detail} id={todo.id} />

            ))
            :
            <tr>
              <td colSpan="3">Không có công việc nào hôm nay</td>
            </tr>
          }

        </MDBTableBody>
      </MDBTable>
      {/* {totalPages > currentPage && <button type="button" class="btn btn-light" onClick={nextPage}>

        <i class="fa-solid fa-forward"></i>
      </button>} */}
    </div>
  );
}
