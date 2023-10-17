
import './App.css';
import AddTodo from './Components/AddTodo';
import { Filter } from './Components/Filter';
import TodoList from './Components/Todolist';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  
  MDBRow,
  
} from "mdb-react-ui-kit";

function App() {
  return (
    <div className="App">
       <section className="vh-100" style={{ backgroundColor: "#eee" }}>


       <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <AddTodo/>
                <TodoList/>
                <Filter/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <AddTodo/>
      <TodoList/>
      <Filter/> */}

      </section>
    </div>
  );
}

export default App;
