import React,{useState} from 'react'

function List({todoList,setTodoList,filteredList}) {
    const [allCompleted, setAllCompleted] = useState(false);

  const handleToggleAll = () => {
    const newTodos = todoList.map((todo) => {
      return { ...todo, completed: !allCompleted };
    });
    setTodoList(newTodos);
    setAllCompleted(!allCompleted);
  };
  if (todoList.length === 0) return null;

  return (
    <section className='main'>
    <input className="toggle-all" type="checkbox"
    checked={allCompleted}
    onChange={handleToggleAll}
     />
    <label htmlFor="toggle-all" onClick={handleToggleAll}> Mark all as complete </label>
        <ul className="todo-list">
            {filteredList.map((todo)=>{
                return(
                <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
                <div className='view'>
                <input 
                className="toggle" checked={todo.completed} type="checkbox" onChange={()=>{
                    setTodoList(todoList.map((item)=>{
                        if(item.id===todo.id){
                            return {...item,completed:!item.completed};
                        }
                        return item;
                    }));
                }} />
                <label>{todo.todoText}</label>
				<button onClick={()=>
                setTodoList(todoList.filter((target)=>target.id!=todo.id
                ))} className="destroy"></button>
                </div>
            </li>    
                );
            })}
        </ul>
    </section>
  )
}

export default List