import React, { useState } from 'react'

const TodoInput = ({addTodo, todoList}) => {
  //logic
  const [ inputValue, setInputValue ] = useState('');
  

  const onSubmitTodo = (e) => {
    e.preventDefault();
    let trimValue = inputValue.trim()
    
    // 빈값체크
     if(!trimValue) {
      alert('할 일을 입력해주세요');
      return
     }
    // 중복체크
    const dupTodo = todoList.some(element => element.text === trimValue);
    console.log('some',dupTodo);
    // todoList.find(element => element.text === trimValue)
    if(dupTodo) {
      alert('이미 등록된 할 일 입니다.');
      setInputValue('');
      return
    }

    const todoItem = {
        id: Date.now(),
        text: trimValue,
        isComplete: false
    }
    addTodo(todoItem)
    setInputValue('');
  }

  const onChangeTodo = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }
  // html
  return (
    <section>
        <div className="form">
            <form action="/create" method="post" onSubmit={onSubmitTodo}>
                <div className="form-wrap">
                <input
                    type="text"
                    className="form__element"
                    name="title"
                    placeholder="Write a new todo"
                    onChange={onChangeTodo}
                    value={inputValue}
                />
                <button className="form__button" type="submit">
                    Add
                </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default TodoInput
