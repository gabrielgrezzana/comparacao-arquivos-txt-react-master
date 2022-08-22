import React, { Component } from "react";
import Header from "./Header";
import Body1 from "./Body1";
import Body2 from "./Body2";
// import compareButton from "./compareButton";

export default class App extends Component {
  state = {
    text1: "",
    text2: "",
  };

  render() {
    return (
      <>
        <compareButton></compareButton>
        <Header />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Body1 getValue={this.getValue} />
          <Body2 getValue={this.getValue} />
        </div>
        <br /> <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              margin: "20px",
              border: "2px solid black",
              minWidth: "40vw",
              minHeight: "20vw",
              padding: "10px",
            }}
          >
            {this.state.text1 === "" ? (
              <p></p>
            ) : (
              this.callback(this.state.text1)
            )}
          </div>
          <div
            style={{
              margin: "20px",
              border: "2px solid black",
              minWidth: "40vw",
              minHeight: "20vw",
              padding: "10px",
            }}
          >
            {this.state.text2 === "" ? (
              <p></p>
            ) : (
              this.callback(this.state.text2)
            )}
          </div>
        </div>
      </>
    );
  }

  getValue = (num, text) => {
    if (num === 1) {
      this.setState({ text1: text.split("\n") });
    } else if (num === 2) {
      this.setState({ text2: text.split("\n") });
    }
  };

  callback = (arr, ref = 0) => {
    if (ref < arr.length) {
      if (
        this.state.text1[ref] === this.state.text2[ref] ||
        this.state.text2.length === 0 ||
        this.state.text1.length === 0
      ) {
        return (
          <div>
            <p>
              <a style={{ fontSize: "10px" }}>{Number(ref) + 1}</a> {arr[ref]}
            </p>
            {this.callback(arr, (ref += 1))}
          </div>
        );
      } else {
        return (
          <div>
            <p style={{ backgroundColor: "red" }}>
              <a style={{ fontSize: "10px" }}>{Number(ref) + 1}</a> {arr[ref]}
            </p>
            {this.callback(arr, (ref += 1))}
          </div>
        );
      }
    }
  };
}
