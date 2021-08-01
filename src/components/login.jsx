import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form class="form-signin">
          <img
            class="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          ></img>
          <h1 class="h3 mb-3 font-weight-normal">Please log in</h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
        </form>
      </div>
    );
  }
}

export default Login;