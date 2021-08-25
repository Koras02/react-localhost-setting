import React from 'react'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* NODE_ENV로 개발서버 */}
        {process.env.REACT_APP_MY_API_KEY}
      </header>
    </div>
  );
}

export default App;
