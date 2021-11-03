import React, { Component } from "react";
import UserInfo from "../userInfo/UserInfo.js";
import "./Comment.scss";
//For Redux only
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { showOnOff } from "../../actions/showOnOffActions";

class Comment extends Component {
  // Upgrade to use Redux
  constructor(props) {
    super(props);
    //this.state = {flag : 'false'};
    this.state = { newFlag: "false" };
    this.handleShowClickOnOff = this.handleShowClickOnOff.bind(this);
  }

  // Upgrade to use Redux
  // handleShowClickOnOff() {
  //   let newStatus = this.state.flag === "false" ? "true" : "false";
  //   this.setState({ flag: newStatus });
  // }
  handleShowClickOnOff() {
    let newStatus = this.state.newFlag === "false" ? "true" : "false";
    this.setState({ newFlag: newStatus});
    this.props.showOnOff({ flag: newStatus });
  }

  render() {
    //(STR) For Redux. But only use it in function component
    // const show = useSelector((state) => state.flag.value);
    // const dispatch = useDispatch();
    const { flag } = this.props.flag;
    return (
      <div className="row">
        <h1>This is comment</h1>
        <div className="column">
          <UserInfo
            name="A"
            action="show"
            // Upgrade to use Redux
            onClick={this.handleShowClickOnOff}
          />
        </div>
        <div className="column">
          <UserInfo name="B" 
          // Upgrade to use Redux
          // flag={this.state.flag}
          flag = {flag}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  flag: state.flag,
});

const mapDispatchToProps = {
  showOnOff,
};
// export default Comment;
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
