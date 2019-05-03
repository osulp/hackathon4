import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <a href="/">
          <img src="https://communications.oregonstate.edu/sites/communications.oregonstate.edu/files/osu-primarylogo-2-compressor.jpg" />
        </a>

        <h1>(Professional) Friend Finder</h1>
      </nav>
    );
  }
}

export default Navbar;