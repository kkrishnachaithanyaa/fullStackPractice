import './App.css'; // imports your CSS
import Home from './components/home/Home.js'; // imports your Home component
import Login from './components/pages/Login.js'; // make sure you have these files
import Register from './components/pages/Register.js';
import Dashboard from './components/pages/Dashboard.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
