// Define your selector function
export const selector = (todos, filter) => {
    switch(filter){
        case 'ALL' : {
            return todos;
        }
        case 'COMPLETED':{
            return todos.filter((todo)=> todo.detail.completed);
        }
        case 'INCOMPLETED': {
            return todos.filter((todo)=> !todo.detail.completed)
        }
        default:
            return todos;
    }
  };
  
  // Use the selector in your component
  
  