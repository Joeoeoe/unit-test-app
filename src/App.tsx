import React from 'react';
import styles from './index.module.css';


function App() {
  return (
    <div>
      <button 
      style={{ marginTop: 80 }} 
      className={styles['click-btn']}
      onClick={(e) => {
        const position = e.currentTarget.getBoundingClientRect();
        console.log(JSON.stringify(position));
      }}>
        click me
      </button>
    </div>
  );
}

export default App;