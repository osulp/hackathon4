import React from "react"
import Navbar from "./Navbar.jsx"
import Body from "./Body.jsx"
import UserList from "./UserList.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("Hello world!")
  }

  render() {
    return (
      <div id="main">
        <Navbar />
        <Body />
        <UserList
          users={[
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
          ]}
        />
      </div>
    )
  }
}

export default App
