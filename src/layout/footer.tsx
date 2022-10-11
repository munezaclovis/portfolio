import { Link } from "react-router-dom";
import LinkedinIcon from "../assets/png/linkedin-ico.png";
import GithubIcon from "../assets/png/github-ico.png";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2 className="heading heading-sm main-footer__heading-sm">
                            <span>Socials</span>
                        </h2>
                        <div className="main-footer__social-cont">
                            <a target="_blank" href="https://www.linkedin.com/in/munezaclovis/">
                                <img className="main-footer__icon" src={LinkedinIcon} alt="icon" />
                            </a>
                            <a target="_blank" href="https://github.com/munezaclovis">
                                <img className="main-footer__icon" src={GithubIcon} alt="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="main-footer__row main-footer__row-2">
                        <h4 className="heading heading-sm text-lt">Clovis Muneza</h4>
                        <p className="main-footer__short-desc">If you're reading this, Give me a job. Please</p>
                    </div>
                </div>

                <div className="main-footer__lower">
                    &copy; Copyright {Intl.DateTimeFormat("en-US", { year: "numeric" }).format(Date.now())}. Made by
                    <b> Clovis Muneza</b>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
