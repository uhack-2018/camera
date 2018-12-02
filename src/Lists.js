import React, { Component } from "react";
import * as ReactDOM from "react-dom";

class Lists extends Component {
  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    console.log("render list");
    let arr = [1, 2, 3, 4, 5, 6];
    let listItems = arr.map((item, index) => {
      return (
        <div
          key={index}
          onClick={this.goSlide.bind(this)}
          style={{ padding: 10 }}
        >
          This is a paragraph - {item}
        </div>
      );
    });
    return <div className="transition-item list-page">{listItems}</div>;
  }

  goSlide() {
    this.props.history.push({
      pathname: "/item"
    });
  }
}

export default Lists;
