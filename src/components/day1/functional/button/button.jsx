// Importing Component from React to create a class-based component
import { Component } from "react";

// Creating a class component named 'Userdata'
class Userdata extends Component {
  constructor() {
    super(); // Call the parent class (Component) constructor
    // Initializing component state
    this.state = {
      userscollection: [] // An empty array to hold user data once fetched
    };
  }

  // Arrow function to fetch user data from the API
  fetchdata = () => {
    // Making HTTP GET request using fetch
    fetch("https://dummyjson.com/users")
      .then(response => response.json()) // Parsing response to JSON
      .then(data => {
        // Updating the component state with the fetched users
        this.setState({
          userscollection: data.users
        });
      });
  };

  // The render method returns JSX to be displayed in the UI
  render() {
    return (
      <>
        {/* Heading */}
        <h1>User Collection</h1>

        {/* Button to trigger the fetchdata method */}
        <button onClick={this.fetchdata}>Click to Fetch User Data</button>

        {/* Mapping over the userscollection array to display user info */}
        {this.state.userscollection.map(eachobj => {
          return (
            <div
              key={eachobj.id} // Key helps React uniquely identify each element
              style={{
                border: "1px solid gray", // Adding border to each card
                borderRadius: "10px", // Rounded corners
                padding: "10px", // Inner spacing
                margin: "10px", // Spacing between cards
                width: "300px", // Fixed width for each card
                backgroundColor: "#f9f9f9" // Light background color
              }}
            >
              {/* Displaying full name by combining first and last names */}
              <h3>Full Name: {`${eachobj.firstName} ${eachobj.lastName}`}</h3>

              {/* Displaying age */}
              <p>Age: {eachobj.age}</p>
            </div>
          );
        })}
      </>
    );
  }
}

// Exporting the component so it can be used in other parts of the app
export default Userdata;
