import { Component } from "react";

class AuthComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true, // true = Login, false = Signup
    };
  }

  toggleAuth = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>{this.state.isLogin ? "Login Page" : "Signup Page"}</h2>

        {/* Form UI */}
        {
          this.state.isLogin ? (
            <>
              <input type="text" placeholder="Email" /><br />
              <input type="password" placeholder="Password" /><br />
              <button>Login</button>
            </>
          ) : (
            <>
              <input type="text" placeholder="Name" /><br />
              <input type="text" placeholder="Email" /><br />
              <input type="password" placeholder="Password" /><br />
              <button>Signup</button>
            </>
          )
        }

        <br /><br />
        <button onClick={this.toggleAuth}>
          {this.state.isLogin ? "Switch to Signup" : "Switch to Login"}
        </button>
      </div>
    );
  }
}

export default AuthComponent;
