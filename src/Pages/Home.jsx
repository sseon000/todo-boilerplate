import React, { useEffect } from 'react'
import { useState } from 'react'
import TodoInput from '../Components/TodoInput'
import TodoList from '../Components/TodoList'

const Home = () => {

  const [todoList, setTodoList] = useState([]);

  /*
  const addTodo = (item) => {
      setTodoList([...todoList,item])
  }
  */

  const doneTodo = async (id) => {

    setTodoList(
      todoList.map((el) => {
        return el.id === id ? { ...el, isComplete: !el.isComplete } : el
      })
    )

    const updateTodo = todoList.filter((el) => {
      return el.id === id ? el : {...el}
    })
    
    const data = await fetch(`/todos/${id}`)

  }

  const deleteTodo = async (id) => {
    setTodoList(
      todoList.filter((el) => {
        return el.id !== id
      })
    )

    const data = await fetch(`/todos/${id}`, {
      method: 'DELETE',
    });
    
  }

  const updateTodo = (id) => {
    console.log(id);
  }

  useEffect(() => {
    
    const getTodo = async () => {
      const data = await fetch('/todos');
      const result = await data.json();
      result && setTodoList(result);
    }

    getTodo();
  }, [])


  const postTodo = async (item) => {
    const data = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(item),
    });
    console.log('postdata : ', data);
    const result = await data.json();

    setTodoList([...todoList, result]);
  }

  return (
    <>
      <header>
        <h1 className="todo__title" style={{ color: 'yellowgreen' }}>세상을 바꾸는건 꿈을꾸고 도전하는 사람들의 몫이다!</h1>
        <h2 className="todo__title">What’s the Plan for Today?</h2>
      </header>
      <TodoInput
        // addTodo={addTodo}
        postTodo={postTodo}
        todoList={todoList}
      />
      {todoList &&
        <TodoList
          todoList={todoList}
          doneTodo={doneTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      }
    </>
  )
}

export default Home
