import { useState } from 'react';

function AddProjectForm({ onAddProject }) {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const newProject = {
            id: Date.now(),
            title,
            description,
            image: 'https://placehold.co/400x250',
            technologies
        };

        onAddProject(newProject);

        setTitle('');
        setDescription('');
        setTechnologies('')
    }

    return (
        <form id="add-project" onSubmit={handleSubmit}>
            <h2>Add a New Project</h2>

            <input
            type="text"
            placeholder="Project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />

        <textarea
         placeholder="Project description"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         required
        />

        <input 
         type="text"
         placeholder="Technologies used"
         value={technologies}
         onChange={(e) => setTechnologies(e.target.value)}
         required
        />

        <button type="submit">Add Project</button>
        </form>
    );
}

export default AddProjectForm