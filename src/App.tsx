import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button style={{ marginTop: 80 }} onClick={(e) => {
        const position = e.currentTarget.getBoundingClientRect();
        console.log(position);
      }}>
        click me
      </button>
    </div>
  );
}

export default App;
