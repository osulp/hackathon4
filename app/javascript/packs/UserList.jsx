import React from "react"
import UserListItem from "./UserListItem.jsx"

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="user_list">
        <ul>
          {this.props.users.map(function(item, i) {
            return <UserListItem key={i} user={item} />
          })}
        </ul>
      </div>
    )
  }
}

export default UserList
