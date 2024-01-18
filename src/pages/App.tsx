import './App.scss'
import ProjectPreview from '../components/project-preview'
import projectsDB from "../assets/projects.json";

function App() {
  return (
    <div>
      {projectsDB.map(project => {
        // return <ProjectPreview name={project.name} description={project.description} image={project.image} tags={project.tags} githubLink={project.githubLink} />
        return <ProjectPreview {...project} />
      })}
    </div>
  )
}

export default App
