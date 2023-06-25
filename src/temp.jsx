import './style/pages.scss';
import './style/todo.scss';

import { GoCheck } from 'react-icons/go';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Link } from 'react-router-dom';

/**
 * 리액트 디자인 패턴
 * 컨테이너(스마트컴포넌트) & 프레젠터
 */

function App() {
  return (
    <div className="content-wrapper">
      <div className="todo">
        {/* START: header */}
        {/* <header>
          <h2 className="todo__title">What’s the Plan for Today?</h2>
        </header> */}
        {/* END: header */}
        {/* START: form */}
        {/* <section>
          <div className="form">
            <form action="/create" method="post">
              <div className="form-wrap">
                <input
                  type="text"
                  className="form__element"
                  name="title"
                  placeholder="Write a new todo"
                />
                <button className="form__button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </section> */}
        {/* END: form */}
        <section>
          <ul className="todo__list">
            <li className="todo__item">
              {/* <div className='todo__content complete'> */}
              <div className="todo__content">
                <div className="todo__item-check">
                  <label>
                    <input type="checkbox" />
                    <i className="todo__item-check-icon" />
                    <GoCheck className="todo__item-check-icon complete" />
                    <span className="todo__content-text">할일 1</span>
                  </label>
                </div>
                <div className="todo__item-buttonarea">
                  <Link to={`/`} className="todo__item-button">
                    <TiEdit className="todo__item-button-icon update" />
                  </Link>
                  <button type="button" className="todo__item-button">
                    <RiCloseCircleLine className="todo__item-button-icon delete" />
                  </button>
                </div>
              </div>
            </li>
            <li className="todo__item">
              <div className="todo__content complete">
                {/* <div className="todo__content"> */}
                <div className="todo__item-check">
                  <label>
                    <input type="checkbox" />
                    <i className="todo__item-check-icon" />
                    <GoCheck className="todo__item-check-icon complete" />
                    <span className="todo__content-text">할일 2</span>
                  </label>
                </div>
                <div className="todo__item-buttonarea">
                  <Link to={`/`} className="todo__item-button">
                    <TiEdit className="todo__item-button-icon update" />
                  </Link>
                  <button type="button" className="todo__item-button">
                    <RiCloseCircleLine className="todo__item-button-icon delete" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
