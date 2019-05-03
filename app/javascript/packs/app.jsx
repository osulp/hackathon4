import React from 'react';
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello world!");
    this.loadPeople = this.loadPeople.bind(this);
  }

  loadPeople(id) {
    alert(`Loading ${id}`);
    return {};
  }

  render() {
    return (
      <div id="main" className="row">
        <div className="col-left">
          <Navbar />
          <Search loadPeople={this.loadPeople} />
        </div>
        <div className="col-right">
          <div className="placeholder"></div>
        </div>
      </div>
    )
  }
}

export default App;