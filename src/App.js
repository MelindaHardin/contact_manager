import React, { Component } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div class="container">
          <Contact
            name="John Doe"
            email="Jman@email.com"
            phone="222-222-2222"
          />
          <Contact
            name="Jane Doe"
            email="Jlady@email.com"
            phone="333-333-3333"
          />
        </div>
      </div>
    );
  }
}
export default App;
