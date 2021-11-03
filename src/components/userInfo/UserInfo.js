import React, { Component } from "react";
import CommonUserInfo from "../commonUserInfo/CommonUserInfo.js";
import ShowInfo from "../showInfo/ShowInfo.js";
// import Avatar from "../avatar/Avatar.js";
import "./UserInfo.scss";

class UserInfo extends Component {
  render() {
    // if (this.props.action === "show") {
    //   return (
    //     <div className="dotted">
    //       <CommonUserInfo name={this.props.name} />
    //       <ShowInfo onClick={this.handleShowClickOnOff} />
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="dotted">
    //       <CommonUserInfo name={this.props.name} />
    //       <Avatar style={this.display}/>
    //     </div>
    //   );
    // }
    console.log('map 3', this.props)
    if (this.props.action === "show") {
      return (
        <div className="dotted">
          <CommonUserInfo name={this.props.name} />
          <ShowInfo action={this.props.action} onClick={this.props.onClick} />
        </div>
      );
    } else {
      return (
        <div className="dotted">
          <CommonUserInfo name={this.props.name} />
          <ShowInfo action={this.props.action} flag={this.props.flag} />
        </div>
      );
    }
  }
}

export default UserInfo;
