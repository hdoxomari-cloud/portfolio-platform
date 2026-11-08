function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>{project.technologies}</p>

            <a href={`/projects/${project.id}`}>View Details</a>
        </div>
        
    );
} 

export default ProjectCard;