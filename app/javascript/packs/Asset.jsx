import React from 'react';
import Child from './Child';

class Asset extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.children);
    this.handleShowPeople = this.handleShowPeople.bind(this);
  }

  handleShowPeople() {
    this.props.loadPeople(this.props.parent.id);
  }

  render() {
    return (
      <div className="asset">
        <div className="header">
          <h2>{this.props.parent.name}</h2>
        </div>
        <div className="body">
          <p>Related items:</p>
          <div className="children">
            {
              this.props.children.length > 0 ? this.props.children.map(child => {
                return <Child key={child.id} name={child.name} type={child.type} />
              }) : ""
            }
          </div>
          <a href="#" onClick={this.handleShowPeople}>Show people with this skill</a>
        </div>
      </div>
    );
  }


}

export default Asset;