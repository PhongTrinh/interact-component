import React from "react";

class CommonUserInfo extends React.Component {
  render() {
    return (
      <div>
        <p>User info {this.props.name}</p>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }
}

export default CommonUserInfo;
