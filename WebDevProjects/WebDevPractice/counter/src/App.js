import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    keyIterator: 4,
    counters: [],
  };

  //Functions

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  sumValues = (counters) => counters.reduce((a, b) => a + b.value, 0);

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    console.log("reset");
    this.setState({ counters });
  };

  handleAdd = () => {
    let keyIterator = this.state.keyIterator + 1;
    const counters = [...this.state.counters];
    counters.push({ id: keyIterator, value: 0, name: "Default" });
    this.setState({ counters });
    this.setState({ keyIterator });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    if (counters[i].value > 0) counters[i].value--;
    this.setState({ counters });
  };

  //!Functions

  render() {
    return (
      <React.Fragment>
        <NavBar
          counters={this.state.counters}
          sum={this.sumValues(this.state.counters)}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
