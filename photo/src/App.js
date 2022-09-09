import './App.css';
import Home from './pages/home.js'
import Stories from './pages/stories.js'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/stories" element={<Stories/>}/>
    </Routes>
  );
}

export default App;
