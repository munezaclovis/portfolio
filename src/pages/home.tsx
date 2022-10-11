import LinkedinIcon from "../assets/png/linkedin-ico.png";
import GithubIcon from "../assets/png/github-ico.png";
import { ExperienceData, ProjectsData, SkillsData } from "../data";
import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Clovis Muneza - Home";
    }, []);

    useLayoutEffect(() => {
        //document.documentElement.scroll(0, 0);
    }, []);
    return (
        <>
            <section id="top" className="home-hero">
                <div className="home-hero__content">
                    <h1 className="heading-primary">Hey, My name is Clovis Muneza</h1>
                    <div className="home-hero__info">
                        <p className="text-primary"></p>
                    </div>
                    <div className="home-hero__cta">
                        <Link to="/#projects" className="btn btn--bg">
                            Projects
                        </Link>
                    </div>
                </div>
                <div className="home-hero__socials">
                    <div className="home-hero__social">
                        <a
                            target={"_blank"}
                            href="https://www.linkedin.com/in/munezaclovis/"
                            className="home-hero__social-icon-link"
                        >
                            <img src={LinkedinIcon} alt="icon" className="home-hero__social-icon" />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a
                            target={"_blank"}
                            href="https://github.com/munezaclovis"
                            className="home-hero__social-icon-link"
                        >
                            <img src={GithubIcon} alt="icon" className="home-hero__social-icon" />
                        </a>
                    </div>
                </div>
                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </section>
            <section id="about" className="about sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main">About Me</span>
                        <span className="heading-sec__sub">
                            I was born and raised in Rwanda, took my high school there, developed an interest for
                            computer science and technology and now, here I am, in Canada with a DEC in computer
                            software development.
                        </span>
                    </h2>
                    <div className="about__content">
                        <div className="about__content-main">
                            <h3 className="about__content-title">Get to know me!</h3>
                            <div className="about__content-details">
                                <p className="about__content-details-para">
                                    A little about me is that I'm a <strong> Full-stack Web Developer </strong> located
                                    in <u>Montreal, Canada</u>. I developed an interest in programming when I was in
                                    highschool, then went to Lasalle College in web development. Throughout the years I
                                    worked on personal projects which can be found on my <b>Github</b> profile. I
                                    graduated in 2021 after completing a three month internship, after that, my
                                    projessional carrer started january 2022.
                                </p>
                            </div>
                        </div>
                        <div className="about__content-skills">
                            <h3 className="about__content-title">My Skills</h3>
                            <div className="skills">
                                {SkillsData.map((skill, index) => {
                                    return (
                                        <div key={index} className="skills__skill">
                                            {skill}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="experience" className="projects sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-bg">
                        <span className="heading-sec__main">Experience</span>
                    </h2>

                    <div className="projects__content">
                        {ExperienceData.map((job, index) => {
                            return (
                                <div key={index} className="projects__row">
                                    <div className="projects__row-img-cont">
                                        <img
                                            src={job.image}
                                            alt="Company logo"
                                            className="projects__row-img"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="projects__row-content">
                                        <h3 className="projects__row-content-title">{job.title}</h3>
                                        <p className="projects__row-content-desc">{job.summary}</p>
                                        <Link
                                            to={`/experience/${job.name}`}
                                            className="btn btn--med btn--theme dynamicBgClr"
                                        >
                                            Case Study
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section id="projects" className="projects sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-bg">
                        <span className="heading-sec__main">Projects</span>
                        <span className="heading-sec__sub">
                            Here are some of my projects I worked on when I was in college :)
                        </span>
                    </h2>

                    <div className="projects__content">
                        {ProjectsData.map((project, index) => {
                            return (
                                <div key={index} className="projects__row">
                                    <div className="projects__row-img-cont">
                                        <img
                                            src={project.image}
                                            style={{ width: "100%" }}
                                            alt="Project Screenshot"
                                            className="projects__row-img"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="projects__row-content">
                                        <h3 className="projects__row-content-title">{project.title}</h3>
                                        <p className="projects__row-content-desc">{project.summary}</p>
                                        <Link
                                            to={`/projects/${project.name}`}
                                            className="btn btn--med btn--theme dynamicBgClr"
                                        >
                                            Case Study
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section id="contact" className="contact sec-pad dynamicBg">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main heading-sec__main--lt">Contact</span>
                        <span className="heading-sec__sub heading-sec__sub--lt">
                            I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile
                            apps in different industries and verticals. Feel free to <strong>contact</strong> me here.
                        </span>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
                            <a className="btn btn--med btn--theme dynamicBgClr" href="mailto:mugaro234@gmail.com">
                                Email
                            </a>
                        </div>
                    </h2>
                </div>
            </section>
        </>
    );
};

export default Home;
