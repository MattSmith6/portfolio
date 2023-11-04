import {
    AiFillGithub,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <ul className="home-about-social-links">
            <li className="social-icons">
            <a
                href="https://github.com/MattSmith6"
                className="icon-colour  home-social-icons"
            >
                <AiFillGithub />
            </a>
            </li>
            <li className="social-icons">
            <a
                href="https://www.linkedin.com/in/matthew-smith-67952a179/"
                className="icon-colour  home-social-icons"
            >
                <FaLinkedinIn />
            </a>
            </li>
        </ul>
    )
}

export default SocialIcons