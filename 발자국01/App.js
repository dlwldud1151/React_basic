import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '오늘의 날씨 맑음'

  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div class = "black-nav">
        <div style = {{color:'skyblue', fontSize : '30px'}}>일기 blog</div>
      </div>
      <h4> {posts} </h4>
      <h4> {함수()} </h4>
    </div>
  );
}

export default App;
