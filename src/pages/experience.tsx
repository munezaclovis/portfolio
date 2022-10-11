import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataSkeleton, ExperienceData } from "../data";

const Experience = () => {
    const [experience, setExperience] = useState<DataSkeleton>();
    const { experienceName } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const results = ExperienceData.find((x) => x.name.includes(experienceName!));
        if (!results) {
            navigate("/", { replace: true });
        }
        document.title = `Clovis Muneza - ${results?.title}`;
        setExperience(results);
    }, [experienceName]);

    useLayoutEffect(() => {
        document.documentElement.scroll(0, 0);
    }, [experienceName]);

    return (
        <>
            <section className="project-cs-hero">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">{experience?.title}</h1>
                    <h1 className="heading-secondary">{experience?.position}</h1>
                    <div className="project-cs-hero__info">
                        <p className="text-primary">{experience?.summary}</p>
                    </div>
                    {experience?.liveLink ? (
                        <div className="project-cs-hero__cta">
                            <a href="#" className="btn btn--bg" target="_blank">
                                Live Link
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
                                src={experience?.image}
                                alt="Project Image"
                                className="project-details__showcase-img"
                            />
                        </div>
                        <div className="project-details__content-main">
                            <div className="project-details__desc">
                                <h3 className="project-details__content-title">Overview</h3>
                                {experience?.overview}
                            </div>
                            <div className="project-details__tools-used">
                                <h3 className="project-details__content-title">Tools Used</h3>
                                <div className="skills">
                                    {experience?.technologies?.map((tech, index) => {
                                        return (
                                            <div key={index} className="skills__skill">
                                                {tech}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="project-details__links">
                                {experience?.codeLink && experience?.liveLink ? (
                                    <h3 className="project-details__content-title">Links</h3>
                                ) : null}
                                {experience?.liveLink ? (
                                    <a
                                        href={experience.liveLink}
                                        className="btn btn--med btn--theme project-details__links-btn"
                                        target="_blank"
                                    >
                                        Live Link
                                    </a>
                                ) : null}
                                {experience?.codeLink ? (
                                    <a
                                        href={experience.codeLink}
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

export default Experience;
