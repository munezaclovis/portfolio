import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataSkeleton, ProjectsData } from "../data";

const Project = () => {
    const [project, setProject] = useState<DataSkeleton>();
    const { projectName } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const results = ProjectsData.find((x) => x.name.includes(projectName!));
        if (!results) {
            navigate("/", { replace: true });
        }
        document.title = `Clovis Muneza - ${results?.title}`;
        setProject(results);
    }, [projectName]);

    useLayoutEffect(() => {
        // document.documentElement.scroll(0, 0);
    }, [projectName]);

    return (
        <>
            <section className="project-cs-hero">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">{project?.title}</h1>
                    <h1 className="heading-secondary">{project?.position}</h1>
                    <div className="project-cs-hero__info">
                        <p className="text-primary">{project?.summary}</p>
                    </div>
                    {project?.liveLink ? (
                        <div className="project-cs-hero__cta">
                            <a href="#" className="btn btn--bg" target="_blank">
                                Live Link
                            </a>
                        </div>
                    ) : null}
                    {project?.codeLink ? (
                        <div className="project-cs-hero__cta">
                            <a href={project.codeLink} className="btn btn--med btn--theme-inv" target="_blank">
                                Code Link
                            </a>
                        </div>
                    ) : null}
                </div>
            </section>
            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                        <div className="project-details__showcase-img-cont">
                            <img
                                src={project?.image}
                                alt="Project Image"
                                className="project-details__showcase-img"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="project-details__content-main">
                            <div className="project-details__desc">
                                <h3 className="project-details__content-title">Overview</h3>
                                {project?.overview}
                            </div>
                            <div className="project-details__tools-used">
                                <h3 className="project-details__content-title">Tools Used</h3>
                                <div className="skills">
                                    {project?.technologies?.map((tech, index) => {
                                        return (
                                            <div key={index} className="skills__skill">
                                                {tech}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="project-details__links">
                                {project?.codeLink && project?.liveLink ? (
                                    <h3 className="project-details__content-title">Links</h3>
                                ) : null}
                                {project?.liveLink ? (
                                    <a
                                        href={project.liveLink}
                                        className="btn btn--med btn--theme project-details__links-btn"
                                        target="_blank"
                                    >
                                        Live Link
                                    </a>
                                ) : null}
                                {project?.codeLink ? (
                                    <a
                                        href={project.codeLink}
                                        className="btn btn--med btn--theme-inv project-details__links-btn"
                                        target="_blank"
                                    >
                                        Code Link
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
