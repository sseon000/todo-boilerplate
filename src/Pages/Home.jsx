import React, { useEffect } from 'react'
import { useState } from 'react'
import TodoInput from '../Components/TodoInput'
import TodoList from '../Components/TodoList'

const Home = () => {

    const [ todoList, setTodoList ] = useState([]);

    /*
    const addTodo = (item) => {
        setTodoList([...todoList,item])
    }
    */

    const doneTodo = (id) => {
      setTodoList(
        todoList.map( (el) => {
          return el.id === id ? {...el, isComplete: !el.isComplete} : el
        })
      )
    }

    const deleteTodo = (id) => {
      setTodoList(
        todoList.filter( (el) => {
          return el.id !== id
        })
      )
    }

    const updateTodo = (id) => {
      console.log(id);
    }

    useEffect(()=>{
      getTodo();
    }, [])

    const getTodo = async () => {
      const data = await fetch('/todos');
      const result = await data.json();
      setTodoList(result);
      console.log('getTodo', todoList);
    }

    const postTodo = async (item) => {
      console.log('postTodo', item);
      setTodoList([...todoList,item])
      const req = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(item),
      }
      const data = await fetch('/todos', req);
      const result = await data.json();
      console.log('post', result)
      getTodo();
    }
    
  return (
    <>
        <header>
          <h1 className="todo__title" style={{color: 'yellowgreen'}}>세상을 바꾸는건 꿈을꾸고 도전하는 사람들의 몫이다!</h1>  
          <h2 className="todo__title">What’s the Plan for Today?</h2>
        </header>
        <TodoInput 
          // addTodo={addTodo}
          postTodo={postTodo}
          todoList={todoList}
          />
        <TodoList 
          todoList={todoList} 
          doneTodo={doneTodo} 
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          />
    </>
  )
}

export default Home
