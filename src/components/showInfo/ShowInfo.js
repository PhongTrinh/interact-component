import React, { Component } from "react";

class ShowInfo extends Component {
    // render() {
    //     return (
    //         <button onClick={this.props.onClick}>Click to show on/off relation</button>
    //     );
    // }
    render() {
        if (this.props.action === "show") {
            return (
                <button onClick={this.props.onClick}>Click to show on/off relation</button>
            );
          } else {
            return (
                <div>
                  Hello: {this.props.flag}
                  {/* <img src="https://placekitten.com/g/64/64" alt="" /> */}
                </div>
            );
          }
    }
}

export default ShowInfo;