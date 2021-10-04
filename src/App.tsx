import React from 'react';

function App() {
  return (
    <div>
      <button style={{ marginTop: 80 }} onClick={(e) => {
        const position = e.currentTarget.getBoundingClientRect();
        console.log(JSON.stringify(position));
      }}>
        click me
      </button>
    </div>
  );
}

export default App;
