import React from 'react'
import { GoCheck } from 'react-icons/go';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const TodoItem = ({todoItem, doneTodo, deleteTodo, updateTodo}: {todoItem: {
    id: number
    text: string
    isComplete: boolean
}, doneTodo: (id: number) => void, deleteTodo: (id: number) => void, updateTodo: (id: number) => void}): any=> {
    const { id, text, isComplete } = todoItem

    const onCheckedTodo = () => {
        doneTodo(id);
    }

    const onClickDelTodo = () => {
        deleteTodo(id);
    }

    const onClickEditTodo = () => {
        updateTodo(id);
    }

  return (
    <>
        <li className="todo__item">
            <div className={`todo__content ${isComplete ? 'complete' : ''}`}>
                <div className="todo__item-check">
                    <label>
                    <input type="checkbox" onChange={onCheckedTodo} />
                    <i className="todo__item-check-icon" />
                    <GoCheck className="todo__item-check-icon complete" />
                    <span className="todo__content-text">{text}</span>
                    </label>
                </div>
                <div className="todo__item-buttonarea">
                    <Link to={`/Components/${id}`} className="todo__item-button">
                    <TiEdit className="todo__item-button-icon update" onClick={onClickEditTodo}/>
                    </Link>
                    <button type="button" className="todo__item-button" onClick={onClickDelTodo}>
                    <RiCloseCircleLine className="todo__item-button-icon delete" />
                    </button>
                </div>
            </div>
        </li>
    </>
  )
}

export default TodoItem
