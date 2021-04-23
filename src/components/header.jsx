import React, { Component } from "react";
import axios from "axios";
import "./header.scss";
import Socialtags from './socialtags';

class Header extends Component {
  constructor(props) {
    super(props);
    // Fetch this tag list from backend #pending activity
    // For tooltip of tags have to implement HOC and for contact use react form builder
    this.state = {
      socialMediaTags: [],
    };
  }

  async componentDidMount() {
    const { data: socialMediaTags } = await axios.get(
      "mockdata/socialMediaTags.json"
    );
    this.setState({ socialMediaTags });
  }

  render() {
    const { name, role } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid clearfix">
          <img
            className="profile-image img-fluid float-left rounded-circle"
            src="assets/images/profile.png"
            alt=""
          />
          <div className="profile-content float-left">
            <h1 className="name">{name}</h1>
            <h2 className="desc">{role}</h2>
            <Socialtags {...this.state}/>
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
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Contact{" "}
                      <meta
                        httpEquiv="Content-Type"
                        content="text/html;charset=UTF-8"
                      />
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Subject details
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
