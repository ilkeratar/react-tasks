import React,{useState,useEffect} from 'react'

function Footer({btnList,setBtnList,todoList,setTodoList}) {
  let count=0;

  const handleCheck=(btn,index)=>{
    const newList=[...btnList];
    newList.map((target,i)=>{
      if(i===index){
        newList[i].selected=true;
      }else{
        newList[i].selected=false;
      }});
    setBtnList(newList);
  }
  const todoCount=todoList.map((target)=>{
    if(!target.completed)
      count++;
  })

  if (todoList.length === 0) return null;

  const destroyAll=(()=>{
    setTodoList([])
  })
   


  return (
    <footer className='footer'>
            <span className='todo-count'>{count} items left</span>
            <ul className='filters'>
              {btnList.map((btn,i)=>(
                <li  key={i}><a href="#" 
                className={btn.selected?"selected":""}
                onClick={()=>handleCheck(btn,i)}>{btn.name}</a></li>
              ))}
            </ul>
            <span className='clear-completed'
            onClick={destroyAll}>
                Clear completed
            </span>
        </footer>
  )
}

export default Footer