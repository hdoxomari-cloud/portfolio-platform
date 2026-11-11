import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import AddProjectForm from './components/AddProjectForm';
import ProjectDetails from './pages/ProjectDetails';
import projectsData from './data/projects.js';


function App() {
  const [projects, setProjects] = useState(projectsData);
  const [search, setSearch] = useState('');

  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
);

return (
  <BrowserRouter basename="/portfolio-platform">
    <Navbar />
    
<Routes>
  <Route
    path="/"
    element={
      <div>
        <h1 id="projects">My Projects</h1>

    <SearchBar search={search} setSearch={setSearch} />

    <ProjectList projects={filteredProjects} />

    <AddProjectForm onAddProject={handleAddProject} />
  </div>
   }
 />
 <Route
  path="/projects/:id"
  element={<ProjectDetails projects={projects} />}
  />
 </Routes>
</BrowserRouter>
 );
}

export default App;