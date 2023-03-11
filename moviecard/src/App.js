import Header from './component/Header';
import './App.css';
import Home from './component/Home';
import MoviesList from './component/MoviesList';
import MovieDetail from './component/MovieDetail'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home/>}>    
    <Route path='/movie/:type' element = {<MoviesList />} /> // path='/movie/:type' -> path='/movie/type/:id', it makes more sense
    <Route path='/movie/:id' element = {<MovieDetail />} />
    </Routes>
    </Router>
  );
}

export default App;
