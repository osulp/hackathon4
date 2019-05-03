import React from "react"

class UserListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li style={{ listStyle: "none", width: "100%", float: "left" }}>
        <div style={{ width: "120px", float: "left" }}>
          <img src={this.props.user.img} style={{ width: "100px" }} />
        </div>
        <div style={{ width: "50%", float: "left" }}>
          <span>{this.props.user.email}</span>
        </div>
      </li>
    )
  }
}

export default UserListItem
