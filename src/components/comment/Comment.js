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
    this.handleShowClickOnOff = this.handleShowClickOnOff.bind(this);
  }
 
  handleShowClickOnOff() {
    this.props.showOnOff({ flag: !this.props.flag });
  }

  render() {
    console.log('map 2', this.props);

    return (
      <div className="row">
        <h1>This is comment</h1>
        <div className="column">
          <UserInfo
            name="A"
            action="show"
            onClick={this.handleShowClickOnOff}
          />
        </div>
        <div className="column">
          <UserInfo 
            name="B" 
            flag = {this.props.name}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('map', state);
  return {
    flag: state.profile.flag,
    name: state.profile.flag ? 'nghia' : 'phong'
  }
};

const mapDispatchToProps = {
  showOnOff,
};
// export default Comment;
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
