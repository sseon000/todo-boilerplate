// import './style/pages.scss';
// import './style/todo.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './style/pages.scss';
import './style/todo.scss';
import TodoEdit from './Components/TodoEdit';

/**
 * 리액트 디자인 패턴
 * 컨테이너(스마트컴포넌트) & 프레젠터
 */

function App() {
  return (
    <div className="content-wrapper">
      <div className="todo">
      <Routes path='/' element={<Home />} >
        <Route index element={<Home />} />
        <Route path="/Components/*" element={<TodoEdit />} />
      </Routes >
      </div>
    </div>
  );
}

export default App;
