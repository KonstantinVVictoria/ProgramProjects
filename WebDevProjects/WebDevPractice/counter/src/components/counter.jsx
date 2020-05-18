import React, { Component } from "react";
class Counter extends Component {
  //CSS styles
  cssColor = {
    primary: "#aeaeae",
    background: {
      default: "#dfdfdf",
      alert: "#eaebd5",
    },
  };

  badgeStyles = {
    fontSize: "25px",
    fontWeight: "100",
    color: "white",
    minWidth: "40px",
    maxWidth: "40px",
    paddingLeft: "0px",
    paddingRight: "0px",
  };
  deleteButtonStyle = {
    verticalAlign: "middle",
    minWidth: "35px",
    borderWidth: "0px",
    maxWidth: "25px",
    position: "relative",
    backgroundColor: "#ff7676",
    left: "160px",
    top: "40px",
  };
  buttonStyles = {
    verticalAlign: "middle",
    minWidth: "35px",
    backgroundColor: this.cssColor.primary,
    borderWidth: "0px",
  };

  divStyles = {
    width: "170px",
    display: "flex",
    flexDirection: "row",
  };

  labelStyle = {
    width: "160px",
    marginLeft: "0px",
    backgroundColor: this.cssColor.primary,
  };

  containerStyle = () => ({
    display: "flex",
    flexDirection: "column",
    width: this.divStyles.width,
    marginTop: "10px",
    marginLeft: "10px",
    paddingLeft: "5px",
    paddingTop: "10px",
    backgroundColor:
      this.props.counter.value > 0
        ? this.cssColor.background.default
        : this.cssColor.background.alert,
  });

  //!CSS styles

  //Render
  render() {
    return (
      //Container
      <div style={{ marginLeft: "10px" }}>
        {/*Delete Button*/}
        <button
          className="badge-pill btn btn-outline-danger"
          style={this.deleteButtonStyle}
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          X
        </button>
        <div className="badge badge-info" style={this.containerStyle()}>
          {/*Pill-body label*/}
          <h4
            className="font-weight-light badge-pill badge-secondary p-2"
            style={this.labelStyle}
          >
            {this.props.counter.name}
          </h4>

          {/*Flex-body component container*/}
          <div style={this.divStyles}>
            {/*Value badge*/}
            <span style={this.badgeStyles} className={this.getBadgeClassName()}>
              {this.formatCount()}
            </span>

            {/*Decrement button*/}
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              style={this.buttonStyles}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0}
            >
              -
            </button>

            {/*Increment button*/}
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              style={this.buttonStyles}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
  //!Render

  //Functions

  getBadgeClassName() {
    let classes = "text-center badge m-2 badge-pill badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value;
  }
  //!Functions
}

export default Counter;
