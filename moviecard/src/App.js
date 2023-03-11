import Header from './component/Header';
import './App.css';
import Home from './component/Home';
import MoviesList from './component/MoviesList';
import MovieDetail from './component/MovieDetail'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
    <Router>

    <Header />
    <Routes>

    <Route path='/'>

    <Route index element ={<Home />}/>
   

    </Route>
    
    
    <Route path='/movie/:type' element = {<MoviesList />} />
    <Route path='/movie/:id' element = {<MovieDetail />} />

    </Routes>
    </Router>

    </div>
  );
}

export default App;
