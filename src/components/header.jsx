import React, { Component } from "react";
// import axios from "axios";
import "./header.scss";
import Socialtags from "./socialtags";
import Contactform from "./forms/contactform";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    // Fetch this tag list from backend #pending activity
    // For tooltip of tags have to implement HOC and for contact use react form builder
    this.state = {
      socialMediaTags: [],
    };
  }

  componentDidMount() {
    // const { data: socialMediaTags } = await axios.get(
    //   "mockdata/socialMediaTags.json"
    // );
    this.props.fetchSocialTags();

    // this.setState({ socialMediaTags });
  }

  render() {
    const { name, role } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid clearfix">
          <img
            style={{
              width: 180,
              height: 180,
            }}
            className="profile-image img-fluid float-left rounded-circle"
            src="assets/images/profile-2.png"
            alt=""
          />
          <div className="profile-content float-left">
            <h1 className="name">{name}</h1>
            <h2 className="desc">{role}</h2>
            <Socialtags socialMediaTags={this.props.socialMediaTags} />
          </div>
          <div className="float-right">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fas fa-paper-plane"></i> Contact Me
            </button>
            <Contactform history={this.props.history} />
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  console.log('subscribe to state');
  return {
    socialMediaTags: state.socialMediaTags,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('disptach action');
  return {
    fetchSocialTags: () => dispatch({ type: "TAGS" }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
