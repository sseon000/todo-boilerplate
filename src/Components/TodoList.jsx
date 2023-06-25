import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList, doneTodo, deleteTodo, updateTodo}) => {
  return (
    <>
        <section>
          <ul className="todo__list">
            {todoList.map( (todoItem) => 
                <TodoItem 
                    key={todoItem.id} 
                    todoItem={todoItem} 
                    doneTodo={doneTodo} 
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                /> 
            )}
          </ul>
        </section>
    </>
  )
}

export default TodoList