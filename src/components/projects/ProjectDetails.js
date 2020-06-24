import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut labore nihil fuga facilis, dolor eum tempora, tempore quam doloremque dolorum libero impedit rerum sed, dignissimos eaque quibusdam iusto minima!</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Ninja</div>
          <div>2nd Seṕember, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails