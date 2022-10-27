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

        codeLink: "https://github.com/munezaclovis/ElectroStore",
        overview: (
            <>
                <p className="project-details__desc-para">
                    This idea was for a school project where each student had to choose a topic to make a project about.
                    I choose to make an ECommerce similar website because I wanted to challenge myself and get a glimpse
                    of what modern ecommerce websites work
                </p>
                <p className="project-details__desc-para">
                    This project is written in .NET CORE 3, HTML, and Bootstrap for styling. The design of the website
                    is from 3 different templates that I combined into 1 design for this project. I used Microsoft SQL
                    as the database, and Entity Framework as ORM.
                </p>
                <h3 className="project-details__content-title">Discovery Phase</h3>
                <p className="project-details__desc-para">
                    During the discovery pahse, I researched and thought about technologies I'd be using, and how I was
                    going to approach the project development. During our semester, we used .NET Framework. It wasn't
                    the newest technology that Microsoft had at the time but instead, .NET Core 3.1 was the recent one.
                    So, obviously, I went with .NET Core 3.1, mainly because I like exploring new stuff and because my
                    teacher challenged me to do it
                </p>
                <p className="project-details__desc-para">
                    The project has user Authentication with different access levels. To implement the user
                    authentication and authorization with different access levels, I used .NET Identity with scaffolding
                    to achieve this. Microsoft provides really good tools like SignInManager, UserManager, RoleManager
                    and more classes to achive this.
                </p>
                <p className="project-details__desc-para">
                    With Entity framework's migrations, I was able to use seeders to define default different access
                    levels that would allow some users like admins, and managers to perform management actions on the
                    products
                </p>
                <p className="project-details__desc-para">
                    I also used a lot of javascript code to perform AJAX calls on the datatables that were accessible to
                    managers and higher, for a more smooth experience
                </p>
                <h3 className="project-details__content-title">Features</h3>
                <p className="project-details__desc-para">• User can login and register</p>
                <p className="project-details__desc-para">• User can add products in their shopping carts to</p>
                <p className="project-details__desc-para">
                    • Admins and Managers management dashboard where they can perform crud actions on the products in
                    the database
                </p>
                <p className="project-details__desc-para">
                    • Admins have a dashboard area where they can asign different roles to users
                </p>
                <h3 className="project-details__content-title">Challenges</h3>
                <p className="project-details__desc-para">
                    • During my classes, we learned .NET Framework but not .NET Core. This was very challenging for me
                    because this was one of the first time I had to learn the hard way.
                </p>
                <p className="project-details__desc-para">
                    • I had to read a lot of documentation to understand how the new .NET Core framework worked. This is
                    because I wasn't used to reading documentation
                </p>

                <h3 className="project-details__content-title">What I liked</h3>
                <p className="project-details__desc-para">
                    • Using .NET Core introduced me to Razer webpages which is a really nice way to integrate HTML and
                    C# code
                </p>
                <p className="project-details__desc-para">
                    • This project allowed me to expand my database design skills. (relationsips, indexes, primary keys,
                    etc...)
                </p>
                <p className="project-details__desc-para">
                    • This project gave me an idea of how actual companies manage their data and how the ECommerce
                    industry works
                </p>
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

        codeLink: "https://github.com/munezaclovis/ApartmentManager",
        overview: (
            <>
                <p className="project-details__desc-para">
                    This was a school project for the last semester where each student had to build a Property rental
                    management website. This final project was to help master the competencies required for the course.
                    The project focused on analyzing, designing, implementing and testing an application using Visual
                    Studio 2019, and ASP.NET Core
                </p>
                <h3 className="project-details__content-title">Criterias of the project</h3>
                <ol type="a" className="project-details__desc-para">
                    <li>
                        <span>Website must have a product Owner/Administrator</span>
                        <ol type="i">
                            <li>Create/Update/Delete/Search/List any property manager account</li>
                            <li>Update/Delete/Search/List any potential tenant account</li>
                            <li>Full control of the Web Site</li>
                        </ol>
                    </li>
                    <li>
                        <span>Product Manager</span>
                        <ol type="i">
                            <li>Perform CRUD operations related to buildings</li>
                            <li>Perform CRUD operations related to apartments</li>
                            <li>Keep track of apartments status</li>
                            <li>Schedule potential tenants appointments</li>
                            <li>Respond to potential tenants messages</li>
                            <li>Report any events to the property owner when necessary</li>
                        </ol>
                    </li>
                    <li>
                        <span>Pontential Tenants</span>
                        <ol type="i">
                            <li>Create an on-line account through the Website</li>
                            <li>View any apartment suitable for their needs</li>
                            <li>Make an appointment with the property manager</li>
                            <li>Send necessary messages to the property manager</li>
                        </ol>
                    </li>
                </ol>
            </>
        ),
    },
    {
        name: "raymonds",
        title: "Raymonds Framework",
        image: RaymondsLogo,
        summary:
            "A PHP framework for building full stack and RESTful web applications written from scratch with PHP and some of the modern PHP libraries found on packagist",
        technologies: ["PHP", "SQL", "VsCode", "Composer", "Git"],

        overview: <></>,
        codeLink: "https://github.com/munezaclovis/Raymonds",
    },
];

export const ExperienceData: Array<DataSkeleton> = [
    {
        name: "mercuri",
        title: "Mercuri Gaming",
        position: `Full stack web developer - (January, 2022 - Present)`,
        image: MercuriLogo,
        summary:
            "Develop visually appealing front end website architecture, including translating designer mock-ups and wireframes into front-end code with Angular and React, connect the front-end to RESTful services and APIs developed in PHP and NodeJS with NestJS, and develop functional databases with MongoDB to support the back end",
        liveLink: "https://mercuri.gg",
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
        position: `Full stack web developer Intern - (April, 2021 - June, 2021)`,
        image: PlanetRateLogo,
        summary:
            "Develop and manage well-functioning PHP powered website which used CakePHP as the framework, while using Bootstrap and vanilla JavaScript to support and enhance user experience.",
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
        liveLink: "https://planetrate.com",

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
