// import logo from './logo.svg';
// import './App.css';
import Counter from './Counter.js'
function App() {
  let value = 10 ; 
  return (
    <div className='container text-center' >
    <h1>Change Counter</h1>
    <Counter value={value} />
    </div>
  );
}

export default App;
