import React from 'react';
import Header from './components/Headers';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;