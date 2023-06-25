// import './style/pages.scss';
// import './style/todo.scss';
import Home from './Pages/Home';
import './style/pages.scss';
import './style/todo.scss';

/**
 * 리액트 디자인 패턴
 * 컨테이너(스마트컴포넌트) & 프레젠터
 */

function App() {
  return (
    <div className="content-wrapper">
      <div className="todo">
        <Home />
      </div>
    </div>
  );
}

export default App;
