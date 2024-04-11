import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Master from './Components/Master/Master';
import Home from './Pages/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import Movie from './Components/MovieDetail/Movie';
function App() {
  return (
    <div className="App">
    <Router>
    
      <Routes>
        
       
        <Route path="/" element={<Master />}>
          <Route path='/' element={<Home />} />
          <Route path="/movie/:id" element={<Movie/>} />
          <Route path="/movies/:type" element={<MovieList/>} />
          <Route path="*" element={<h1>Error page</h1>} />
        </Route>
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
