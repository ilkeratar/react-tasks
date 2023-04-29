import React from 'react'
import List from '../List';
function Form({newTodoText,setTodoText,todoList,setTodoList}) {

    const onChangedText=((e)=>{
        setTodoText(e.target.value);
    });
    
    const onSubmit=((e)=>{
        e.preventDefault();
        if(newTodoText==="") return;
        setTodoList([...todoList,{
            todoText:newTodoText,id:Math.floor(Math.random() * 1000000),completed:false
        }]);
        todoList.map((item)=>{
        });
        setTodoText("");
    })

  return (
    <header className="header">
    <form onSubmit={onSubmit}> 
        <input className="new-todo" 
        placeholder='What needs to be done?'
        autoFocus
        value={newTodoText}
        onChange={onChangedText}
        />
    </form>
    </header>
  )
}

export default Form