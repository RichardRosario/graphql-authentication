import React from 'react';
import Header from './Header';

const App = (props) => {
  return (
    <div>
      <Header />
      <h4>This is the App component</h4>
      {props.children}
    </div>
  );
}

export default App;