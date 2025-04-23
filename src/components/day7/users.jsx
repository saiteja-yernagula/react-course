import { Component } from "react";
import axios from "axios";

class Userdata extends Component {
  state = { userscollection: [] };

  fetchdata = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/users");
      this.setState({ userscollection: data.users });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  render() {
    return (
      <>
        <h1>User Collection</h1>
        <button onClick={this.fetchdata}>Click to Fetch User Data</button>

        {this.state.userscollection.map(user => (
          <div key={user.id}>
            <h3>Fullname: {`${user.firstName} ${user.lastName}`}</h3>
            <p>Age: {user.age}</p>
            <h3>-------------------------</h3>
          </div>
        ))}
      </>
    );
  }
}

export default Userdata;
