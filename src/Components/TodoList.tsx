import React from 'react'
import TodoItem from './TodoItem'

interface ITodoList {
  id: number
  text: string
  isComplete: boolean
}
interface ITodoListProps {
  todoList: ITodoList[]
  doneTodo: (id: number) => void
  deleteTodo: (id: number) => void
  updateTodo: (id: number) => void
}
  const TodoList = (props: ITodoListProps) => {
  return (
    <>
        <section>
          <ul className="todo__list">
            {props.todoList.map( (todoItem) => 
                <TodoItem 
                    key={todoItem.id} 
                    todoItem={todoItem} 
                    doneTodo={props.doneTodo} 
                    deleteTodo={props.deleteTodo}
                    updateTodo={props.updateTodo}
                /> 
            )}
          </ul>
        </section>
    </>
  )
}

export default TodoList