import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }
  componentDidMount = () => {
    console.log("run componentDidMount");
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };
  componentDidUpdate = () => {
    console.log("run componentDidUpdate");
  };
  componentWillUnmount = () => {
    console.log("run componentWillUnmount");
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div>
        <ul class="cards">
          <li>
            <a href="" class="card">
              <img
                src="https://i.imgur.com/oYiTqum.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title"> {this.props.fullName}</h3>
                    <span class="card__status">{this.props.bio}</span>
                  </div>
                </div>
                <p class="card__description">{this.props.profession}</p>
                <p class="card__description">{this.state.timer}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}