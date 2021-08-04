import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="container container-fluid">
          <div className="form-group">
            <h1 className="display-4">Log in</h1>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
