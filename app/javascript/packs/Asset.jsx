import React from 'react';

class Asset extends React.Component {
  render() {
    return (
      <div class="asset">
        <div class="header">
          <h2>{this.parent.name}</h2>
        </div>
        <div class="body">
          <p>Related items:</p>
          <div class="children">
            {
              this.children.forEach(child => {
                <Child name={child.name} type={child.type} />
              })
            }
          </div>
        </div>
      </div>
    );
  }


}

export default Asset;