import React from 'react'
import ProjectSumary from './ProjectSumary'

const ProjectList = ({projects}) => {
  return(
    <div className="project-list section">
      {projects && projects.map(project => {
        return(
          <ProjectSumary project={project} key={project.id} />
        )
      })}
    </div>



  )
}

export default ProjectList