import { useParams } from "@tanstack/react-router"
import projectsDB from "../assets/projects.json";
import "./project.scss"

function ProjectPage() {
  const { name } = useParams({ strict: false })
  const myProject = projectsDB.find(project => project.name == name)

  if (myProject == undefined) {
    return <h1>Not found</h1>
  } else {
    return (
      <div>
        <h1>{myProject.name}</h1>
        <p>{myProject.description}</p>
        <div className="project">
          <div className="menu">
            {Object.keys(myProject.content).map(key => {
              return (
                <a href={"#" + key}>{key}</a>
              )
            })}
          </div>
          <div className="content">
            {Object.keys(myProject.content).map(key => {
              return (
                <div>
                  <h2 id={key}>{key}</h2>
                  {/* @ts-expect-error Describe */}
                  <p>{myProject.content[key]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
