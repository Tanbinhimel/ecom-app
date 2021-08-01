import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/common/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="display-1">Display 1</h1>
        <h1 className="display-2">Display 2</h1>
        <h1 className="display-3">Display 3</h1>
        <h1 className="display-4">Display 4</h1>
      </div>
    );
  }
}

export default App;
