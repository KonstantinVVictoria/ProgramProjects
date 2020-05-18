import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  containerStyle = {
    display: "flex",
    flexDirection: "column",
  };

  resetButtonStyle = {
    maxWidth: "100px",
    fontSize: "24px",
    margin: "20px",
  };

  render() {
    return (
      <div style={this.containerStyle}>
        {this.props.counters.map((counter) => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          ></Counter>
        ))}
        <div style={{ display: "flex" }}>
          <button
            onClick={this.props.onAdd}
            style={this.resetButtonStyle}
            className="font-weight-light btn btn-outline-success"
          >
            +
          </button>
          <button
            onClick={this.props.onReset}
            style={this.resetButtonStyle}
            className="font-weight-light btn btn-success"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counters;
