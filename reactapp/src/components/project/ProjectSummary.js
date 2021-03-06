import React from 'react'
import moment from 'moment'

const ProjectSummary = ({projects}) => {
    return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-4">
                    <span className="card-title"><h5>{projects.title}</h5></span>
                    <p>{projects.content}</p>
                    <p className='grey-text'>{projects.authorFirstName} {projects.authorLastName}</p>
                    <p className='grey-text'>{moment(projects.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )

}
export default ProjectSummary