import React from "react"

class UserListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li style={{ listStyle: "none", width: "100%", float: "left" }}>
        <div style={{ width: "120px", float: "left" }}>
          <img
            src="https://thispersondoesnotexist.com/image"
            style={{ width: "100px" }}
          />
        </div>
        <div style={{ width: "50%", float: "left" }}>
          <b>Username: </b>
          <span>{this.props.user.username}</span>
          <br />
          <b>Email: </b>
          <span>{this.props.user.email}</span>
          <br />
          <b>Skillz:</b>
          <br />
          <ul>
            {this.props.user.skills.map(function(item, i) {
              return (
                <li key={i} style={{ width: "100%" }}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </li>
    )
  }
}

export default UserListItem
