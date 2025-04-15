import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import AddUser from './components/AddUser';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/users" style={{ marginRight: '10px' }}>Users</Link>
        <Link to="/add-user">Add User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  ); 
}

export default App;