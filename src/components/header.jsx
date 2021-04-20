import React, { Component } from 'react';
import './header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        // Fetch this tag list from backend #pending activity
        // For tooltip of tags have to implement HOC and for contact use react form builder
        this.state = {  
            socialMediaTags: [
                {href:'https://www.linkedin.com/in/ajinath-sake-02b380191/', icon: 'fab fa-twitter'},
                {href:'https://www.linkedin.com/in/ajinath-sake-02b380191/', icon: 'fab fa-linkedin-in'},
                {href:'https://www.linkedin.com/in/ajinath-sake-02b380191/', icon: 'fab fa-github-alt'},
                {href:'https://www.linkedin.com/in/ajinath-sake-02b380191/', icon: 'fab fa-stack-overflow'},
                {href:'https://www.linkedin.com/in/ajinath-sake-02b380191/', icon: 'fab fa-codepen'}
            ]
        };
    }
    
    render() {
        const {name , role} = this.props;
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
                <ul className="social list-inline">
                  {this.state.socialMediaTags.map((tag, index, arr) => (
                    <li className={(index === arr.length - 1) ? "list-inline-item last-item" : "list-inline-item" } key={tag.icon}>
                      <a href={tag.href}>
                        <i className={tag.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="float-right">
                <a
                  className="btn btn-cta-primary"
                  href="https://themes.3rdwavemedia.com/"
                >
                  <i className="fas fa-paper-plane"></i> Contact Me
                </a>
              </div>
            </div>
          </nav>
        );
    }
}

export default Header;