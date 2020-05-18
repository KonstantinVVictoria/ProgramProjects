import React, { Component } from "react";
class NavBar extends Component {
  getBadgeClassName() {
    let classes = "text-center badge m-2 badge-pill badge-";
    classes += this.props.sum === 0 ? "warning" : "primary";
    return classes;
  }

  //CSS Styles
  navBarStyle = {
    backgroundColor: "#dfdfdf",
    marginTop: "10px",
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
  pillContainer = {
    paddingTop: "0px",
    paddingBottom: "0px",
    backgroundColor: "#aeaeae",
    color: "white",
    fontSize: "24px",
  };
  //!CSS Styles
  render() {
    return (
      <nav
        className="badge-pill navbar font-weight-light"
        style={this.navBarStyle}
      >
        <div
          className="badge-pill navbar navbar-light"
          style={this.pillContainer}
        >
          Total:
          <span style={this.badgeStyles} className={this.getBadgeClassName()}>
            {this.props.sum}
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
