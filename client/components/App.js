import React from 'react';
import Header from './Header';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <h4>This is the App component</h4>
      {props.children}
    </div>
  );
}

export default App;