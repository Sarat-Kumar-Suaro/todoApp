
import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Function to add a new todo item to the list
  const addTodo = (event) => {
    event.preventDefault(); // Prevent form submission refresh
    if (todoItem.trim()) {
      setTodoList([...todoList, { todoAction: todoItem, status: "active" }]);
      setTodoItem(""); // Clear input field after adding
    }
  };

  // Function to toggle item between active and removed
  const toggleStatus = (index) => {
    setTodoList(
      todoList.map((item, i) =>
        i === index ? { ...item, status: item.status === "active" ? "removed" : "active" } : item
      )
      
    );
    console.log(todoList);
  };

  // Function to delete an item from the list
  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  // Helper to determine CSS class based on item status
  const getStatusClass = (item) => (item.status === "active" ? "removed" : "active");

  return (
    <div>
    <nav class="navbar navbar-dark bg-dark">     
    <a class="navbar-brand" href="#">ToDo</a>   
</nav>
    <div class="container-fluid">
    <div className="well">
      <form onSubmit={addTodo}>      
      <input
              type="text"              
              placeholder="Todos...."
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
              name="todoItem"/>  
            <input type="submit" className="btn btn-primary" name="ADD"/>
      </form>
      </div>
          <div>
          <div class="card">
                      <div class="card-header">
                        Featured
                      </div>
                {todoList.map((t, i) => (                    
                      <div class="card-body">                        
                        <p  className={getStatusClass(i)}>{t.todoAction} 
                        <input
                          type="checkbox"
                          checked={t.status ==="removed"}
                          onChange={()=>toggleStatus(i)}
                          />
                         </p>                        
                      </div>
                    
                    ))}
                    </div>


           
          </div>
        </div>
        </div>
    
  );
};




export default App;
