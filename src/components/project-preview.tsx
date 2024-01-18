import { GithubIcon } from 'lucide-react'
import './project-preview.scss'
import Button from './ui/button'
import { Link } from '@tanstack/react-router'

type ProjectPreviewProps = {
  name: string
  description: string
  tags?: string[]
  image: string
  githubLink?: string
}

function ProjectPreview(props: ProjectPreviewProps) {
  return (
    <div className="project-wrapper">
      <img src={props.image} alt={props.name} />
      <div className="project-text">
        <Link to={"/projects/" + props.name} className="[&.active]:font-bold">
          <h1>{props.name}</h1>
        </Link>
        <p>{props.description}</p>
        <div>
        {props.tags?.map(tag => {
          return <span>{tag}</span>
        })}
        </div>
        { props.githubLink ? <Button><a href={props.githubLink}><GithubIcon></GithubIcon>Github</a></Button>: null }
      </div>
    </div>
  )
}
export default ProjectPreview
