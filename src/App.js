// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Counter from './Counter.js'
import Home from './Home.js'
import Error from './Error.js'
import Navbar from './Navbar.js'
import Blogdetails from './Blogdetails.js'


function App() {
  let value = 10 ; 
  return (
    <div className='container text-center' >
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/'  element={ <Home /> }  />
      <Route path='/blogs/:id'  element={ <Blogdetails /> }  />
      <Route path='/counter'  element={ <Counter value={value} /> }  />
      <Route path='*'  element={ <Error  /> }  />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
