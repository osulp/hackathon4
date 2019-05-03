import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("child");
  }
  render() {
    return (
      <div className="child">
        <h3>{this.props.name}</h3>
        <span className="type">Skill</span>
      </div>
    )
  }
}

export default Child;