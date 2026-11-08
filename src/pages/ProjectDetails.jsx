import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
    const { id } = useParams();

    const project = projects.find(
        (project) => project.id === Number(id)
    );

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <p>Technologies: {project.technologies}</p>
        </div>
    );
}

export default ProjectDetails;