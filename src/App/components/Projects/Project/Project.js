import React, {useContext} from "react";
import {Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./Project.css";
import {Link} from "react-router-dom";
import LanguageContext from "../../../context/LanguageContext";




const Project = (props) => {

    const {language, projects} = useContext(LanguageContext);
    const id  = props.id;
    const project = projects[id];

    return (
        <>
            <div className={"goBack"}><Link to={"/projects"}><FontAwesomeIcon icon={faArrowLeft}/> {language === "fr" ? ("Retour à la liste de projets"):("Back to the portfolio")} </Link></div>
            <h2 className={"underline project-title"}>{project.title}</h2>
            <Row lg={2} md={1} xs={1}>
                <Col>
                    {project.youtubeId ? (
                        <div className="embed-responsive embed-responsive-16by9 project-visual">
                            <iframe className="embed-responsive-item"
                                    src={"https://www.youtube.com/embed/" + project.youtubeId}></iframe>
                        </div>
                    ) : (
                        <Image src={project.image} fluid className={"project-visual"}></Image>
                    )}
                </Col>
                <Col>
                    <div className={"info"}>
                        <h3>{language === "fr" ? ("À propos"):("About")}</h3>
                        {project.descriptions.map((desc , key) => {
                            return <p key={key}>{desc.description}</p>
                        })}
                    </div>
                    <div className={"info"}>
                        <h3>{language === "fr" ? ("Langage"):("Language")}</h3>
                        <p>{project.language}</p>
                    </div>
                    <div className={"info"}>
                        <h3>{language === "fr" ? ("Logiciel(s) / outils utilisée(s)"):("Software(s) / Tool(s)")}</h3>
                        <ul className={"list"}>
                            {project.softwares.map((software , key) => {
                                return <li key={key}>{software.name}</li>
                            } )}
                        </ul>
                    </div>
                    {project.contributions? (
                        <div className={"info"}>
                            <h3>Contributions</h3>
                            <ul className={"list"}>
                                {project.contributions.map((contribution , key) => {
                                    return <li key={key}>{contribution.description}</li>
                                })}
                            </ul>
                        </div>
                    ) : (
                        null
                    )}
                    {project.role? (
                        <div className={"info"}><h3>{language === "fr" ? ("Rôle"):("Role")}</h3>{project.role}</div>
                    ) : (
                        null
                    )}
                    {project.note? (
                        <div className={"info"}><b>Important : {project.note}</b></div>
                    ) : (
                        null
                    )}
                    {project.github? (
                        <div>
                            <a href={project.github} className="btLink btInfo" target="_blank" rel="noopener noreferrer" > GitHub <FontAwesomeIcon
                                icon={faGithub}/></a>
                        </div>
                    ) : (
                        null
                    )}
                </Col>
            </Row>
        </>
    )
}

export default  Project;