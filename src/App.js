import React from 'react';
import routes from './routes';
import './App.css';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      {routes}
    </div>
  );
}

export default App;
