import React from 'react'

const ProjectSumary = ({project}) => {
  return(
    <div className="card z-depth-0 project-sumary">
      <div className="card-content gret-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted bt Ninja </p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSumary