import React, { Component } from "react";
import Person from "./component/Person";
import "./App.css";
class App extends Component {
  state = {
    Person: {
      fullName: "ismahen belgacem" , 
      bio: "web develloper",
      imgSrc: "",
      profession: "this is my profile",
    },
    showState: false,
  };
  toggleshowState = () => {
    this.setState({ showState: !this.state.showState });
  };

  render() {
    return (
      <div>
        <h1
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          My profile
        </h1>

        <button
          style={{
            display: "block",
            margin: "auto",
            color: "black",
          }}
          className="visibility-btn"
          onClick={this.toggleshowState}
        >
          {this.state.showState ? "Hide Person" : "Show Person"}
        </button>
        {this.state.showState && (
          <Person
            fullName={this.state.Person.fullName}
            bio={this.state.Person.bio}
            profession={this.state.Person.profession}
          />
        )}
      </div>
    );
  }
}
export default App;