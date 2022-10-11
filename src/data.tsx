import React from "react";
import RaymondsLogo from "./assets/png/raymonds.png";
import ApartmentManagerLogo from "./assets/png/apartment-manager.png";
import ECommerceLogo from "./assets/png/ecommerce.png";
import MercuriLogo from "./assets/png/mercuri.png";
import PlanetRateLogo from "./assets/jpeg/planetrate.jpg";

export type DataSkeleton = {
    name: string;
    title: string;
    position?: string;
    image: string;
    liveLink?: string;
    codeLink?: string;
    summary: React.ReactNode;
    overview: React.ReactNode;
    technologies: Array<string>;
};
export const ProjectsData: Array<DataSkeleton> = [
    {
        name: "ecommerce",
        title: "ECommerce",
        image: ECommerceLogo,
        summary:
            "ECommerce site with user authentication and different access level authorization through roles and claims/permissions. Data management by admins and some ECommerce functionalities.",
        technologies: ["C#", ".NET", "Javascript", "MsSql", "Bootstrap", "Visual studio", "Nuget pachage manager"],

        overview: (
            <>
                <p className="project-details__desc-para">This project was</p>
                <h3 className="project-details__content-title">Team Collaboration and division of work</h3>
            </>
        ),
    },
    {
        name: "apartment-manager",
        title: "Apartment manager",
        image: ApartmentManagerLogo,
        summary:
            "Apartment manager application with user authentication and different access level authorization through roles and claims/permissions. Users can interact with each other on the platform through a custom real-time chat app, and able to book appointments",
        technologies: ["C#", ".NET", "Javascript", "MsSql", "Bootstrap", "Visual studio", "Nuget pachage manager"],

        overview: <></>,
    },
    {
        name: "raymonds",
        title: "Raymonds Framework",
        image: RaymondsLogo,
        summary:
            "A PHP framework for building full stack and RESTful web applications written from scratch with PHP and some of the modern PHP libraries found on packagist",
        technologies: ["PHP", "SQL", "VsCode", "Composer", "Git"],

        overview: <></>,
    },
];

export const ExperienceData: Array<DataSkeleton> = [
    {
        name: "mercuri",
        title: "Mercuri Gaming",
        position: `Full stack web developer - (January, 2022 - Present)`,
        image: MercuriLogo,
        summary:
            "Develop visually appealing front end website architecture, including translating designer mock-ups andwireframes into front-end code with Angular and React, connect the front-end to RESTful services andAPIs developed in PHP and NodeJS with NestJS, and develop functional databases with MongoDB tosupport the back end",
        technologies: [
            "NodeJS",
            "PHP",
            "Angular",
            "React",
            "TailwindCSS",
            "NestJS",
            "Fastify",
            "MongoDB",
            "GitHub",
            "Figma",
            "VsCode",
        ],
        overview: (
            <>
                <p className="project-details__desc-para">
                    This is my first professional job. I've been a full stack Web Developer for Merciru Gaming since
                    january 2022. Mercuri is a website that allows gamers to compete through unique peer to peer
                    challenges across all skill levels. It transforms the competitive gaming landscape by offering a
                    brand new social experience, and connecting gamers across multiple games and experiences.
                </p>
                <p className="project-details__desc-para">
                    As a Full Stack Developer, my duties are to implement, maintain different code bases, and fix any
                    bugs that occur as part of a team. However, the foremost duty or work I enjoy the most is
                    implementing new features because it exposes me to new technologies.
                </p>
                <p className="project-details__desc-para">
                    As part of this team, I've learned more on top of what I learned in my previous Intern, I definetely
                    picked up some management skills as I have some type of business oriented decision making. Some
                    decisions weren't clear to me, but with a much this role, I got to understandthe reason
                    behindeverything.
                </p>
                <h3 className="project-details__content-title">Team Collaboration and division of work</h3>
                <p className="project-details__desc-para">
                    The Team used different tools to keep track and facilitate the collaboration between different
                    people. We work in Agile/Scrum system so we have a set of tasks to accomplish in a given timeframe.
                </p>
                <h3 className="project-details__content-title">Challenges</h3>
                <p className="project-details__desc-para">
                    • When I started, they had custom PHP codebase built from sratch, so there was no use of framework.
                    It was obviously somehow difficult to start, but eventually I got it.
                </p>
            </>
        ),
    },
    {
        name: "planetrate",
        title: "PlanetRate",
        position: `Full stack web developer Intern- (April, 2021 - June, 2021)`,
        image: PlanetRateLogo,
        summary:
            "Develop and manage well-functioning PHP powered website which used CakePHP as the framework,while using Bootstrap and vanilla JavaScript to support and enhance user experience.",
        technologies: [
            "PHP",
            "CakePHP",
            "MySQL",
            "Bootstrap",
            "GitHub",
            "Redmine",
            "Figma",
            "slack",
            "whereby",
            "Html",
            "CSS",
            "Javascript",
        ],

        overview: (
            <>
                <p className="project-details__desc-para">
                    As a part of my DEC program in Web Development I did a 3 month internship at Planetrate Inc, a
                    review and rating platform that offers review data that are not offered by other websites that fall
                    in the same category.
                </p>
                <p className="project-details__desc-para">
                    I was doing my internship as a Full Stack PHP Developer, this involved PHP itself of course with the
                    use of CakePHP framework, HTML, CSS, and JavaScript. As the other members of the team were also
                    doing some other work like marketing and managing the company, my main duty was to fix bugs that
                    would occur, implement new features, and work on upcoming new features. However, the foremost duty
                    or work I enjoyed the most was implementing new features.
                </p>
                <p className="project-details__desc-para">
                    As I would be finishing college and going to the market, during this period I had the opportunity to
                    learn and observe the business environment. It wasn't clear to me what exactly happens within dev
                    teams in a company. I had the chance to learn the development flow, how many people work together
                    when they have different mindsets and abilities.
                </p>
                <h3 className="project-details__content-title">Team Collaboration and division of work</h3>
                <p className="project-details__desc-para">
                    The Team used different tools to keep track and facilitate the collaboration between different
                    people. We worked in Agile/Scrum system so we would have sprint sessions every 2 weeks on Wednesdays
                    at 8 A.M to plan and divide the work among the team. We would also have stand-up meetings every
                    Monday, Tuesday, Wednesday, and Thursday and discuss what we did the day before, if there's some
                    questions or any other stuff blocking us.
                </p>
                <h3 className="project-details__content-title">Challenges</h3>
                <p className="project-details__desc-para">
                    • While I consider myself Good at PHP, they were using a framework that I never used before and its
                    structure was slightly different from the others that I know.
                </p>
                <p className="project-details__desc-para">
                    • They were CakePHP version 2 which is outdated, so I didn't have access to all the cool features
                    that the newer versions have.
                </p>
                <p className="project-details__desc-para">
                    • Following their coding flow which I had a hard time understanding because I felt some steps were
                    unnecessary in my opinion.
                </p>
            </>
        ),
    },
];

export const SkillsData: Array<string> = [
    "NodeJS",
    "PHP",
    "C#",
    "JavaScript",
    "TypeScript",
    "Laravel",
    ".NET Core",
    "NestJS",
    "ExpressJS",
    "Fastify",
    "React",
    "HTML",
    "CSS",
    "GIT",
    "TailwindCSS",
    "Figma",
    "Linux ecosystem",
    "cPanel",
    "RESTful API",
    "Apollo GraphQL",
    "SQL & NoSQL",
    "Oracle cloud",
];
