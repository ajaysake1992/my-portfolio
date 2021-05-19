import { createStore } from "redux";

const socialTagReducer = (state = {socialMediaTags: []}, action) => {
  if (action.type === "TAGS") {
    return {
      socialMediaTags: [
        {
          href: "https://www.linkedin.com/in/ajinath-sake-02b380191/",
          icon: "fab fa-twitter",
          name: "Twitter",
        },
        {
          href: "https://www.linkedin.com/in/ajinath-sake-02b380192/",
          icon: "fab fa-linkedin-in",
          name: "Linkedin",
        },
        {
          href: "https://www.linkedin.com/in/ajinath-sake-02b380193/",
          icon: "fab fa-github-alt",
          name: "Github",
        },
        {
          href: "https://www.linkedin.com/in/ajinath-sake-02b380194/",
          icon: "fab fa-stack-overflow",
          name: "Stackoverflow",
        },
        {
          href: "https://www.linkedin.com/in/ajinath-sake-02b38019/5",
          icon: "fab fa-codepen",
          name: "Codepen",
        }
      ],
    };
  }

  return state;
};

const store = createStore(socialTagReducer);

export default store;
