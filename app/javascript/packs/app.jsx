import React from "react"
import Navbar from "./Navbar.jsx"
import Search from "./Search.jsx"
import UserList from "./UserList.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("Hello world!")
    this.loadPeople = this.loadPeople.bind(this)
    this.state = {
      users: []
    }
  }

  loadPeople(id) {
    //alert(`Loading ${id}`);
    fetch(`/api/skill/${id}/users`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ users: json.users });
      });
    /*
    this.setState({
      users: [
        {
          id: 1,
          username: "abc@user.com",
          email: "abc@user.com",
          img: "https://thispersondoesnotexist.com/image"
        },
        {
          id: 2,
          username: "abc@user.com",
          email: "abc@user.com",
          img: "https://thispersondoesnotexist.com/image"
        }
      ]
    })
    */
  }

  render() {
    return (
      <div id="main" className="row">
        <div className="col-left">
          <Navbar />
          <Search loadPeople={this.loadPeople} />
        </div>
        <div className="col-right">
          <div className="placeholder" />
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App
