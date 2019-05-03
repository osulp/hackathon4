import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div class="child">
        <h3>{this.props.name}</h3>
        <span class="type">Skill</span>
      </div>
    )
  }
}

export default Child;