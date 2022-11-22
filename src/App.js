import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Home from './components/pages/home'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<h1>Movie details page</h1>}></Route>
          <Route path='movies/:type' element={<h1>Movies list page</h1>}></Route>
          <Route path='/*' element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
