import React, { Component } from "react";
import UserInfo from "../userInfo/UserInfo.js";
import './Comment.scss'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {flag : 'false'};
    this.handleShowClickOnOff = this.handleShowClickOnOff.bind(this);
  }

  handleShowClickOnOff() {
    let newStatus = this.state.flag === 'false' ? 'true' : 'false';
    this.setState({flag : newStatus});
  }

  render() {
    return (
      <div className="row">
        <h1>This is comment</h1>
        <div className="column">
          <UserInfo name="A" action="show" onClick={this.handleShowClickOnOff} />
        </div>
        <div className="column">
          <UserInfo name="B" flag={this.state.flag} />
        </div>
      </div>
    );
  }
}

export default Comment;
