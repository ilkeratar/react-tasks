import React,{useState,useEffect} from 'react'
import Form from '../Form'
import './styles.css';
import List from '../List';
import Footer from '../Footer';

function ToDoList() {
  const buttonList=[
    {
    name:"All",
    selected:true
    },
    {
    name:"Active",
    selected:false
    },
    {
    name:"Completed",
    selected:false
    },
    ]
  const [btnList,setBtnList]=useState(buttonList);
  const [newTodoText,setTodoText]=useState("");
  const [todoList,setTodoList]=useState([]);
  const [filteredList,setFilteredList]=useState([]);

  useEffect(() => {
      getLocalTodos();
    }, []);

  useEffect(()=>{
    btnList.map((target,id)=>{
      if(target.selected===true){
        switch (id) {
          case 1:
            setFilteredList(todoList.filter((item)=>item.completed===false))
            break;
          case 2:
            setFilteredList(todoList.filter((item)=>item.completed===true))
            break;
          default:
            setFilteredList(todoList)
            break;
        }
      }
    })
    saveLocalTodos();
  },[todoList,btnList])

  
  

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodoList(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <section className='todoapp'>
      <Form newTodoText={newTodoText} 
      setTodoText={setTodoText} 
      todoList={todoList}
      setTodoList={setTodoList}/>
      <List 
      todoList={todoList}
      setTodoList={setTodoList}
      filteredList={filteredList}
      />
      <Footer 
      todoList={todoList}
      btnList={btnList}
      setBtnList={setBtnList}
      setTodoList={setTodoList}
      />
    </section>
  )
}

export default ToDoList