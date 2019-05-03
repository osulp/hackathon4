import React from 'react';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello world!");
  }

  render() {
    return (
      <div id="main">
        <Navbar />
        <Body />
      </div>
    )
  }
}

export default App;