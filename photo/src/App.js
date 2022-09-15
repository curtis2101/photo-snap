import './App.css';
import Home from './pages/home.js'
import Stories from './pages/stories.js'
import Features from './pages/features.js'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/stories" element={<Stories/>}/>
      <Route path="/features" element={<Features/>}/>
    </Routes>
  );
}

export default App;
