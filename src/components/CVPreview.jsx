import React from "react"
import CVPreviewHeader from "./CVPreviewHeader"
import CVPreviewExperience from "./CVPreviewExpreience"
import CVPreviewEducation from "./CVPreviewEducation"

const CVPreview = React.forwardRef((props, ref) => {
    

    const cvPreviewExperienceElements = props.experiences.map(experience => (
        <CVPreviewExperience
        key = {experience.id}
        id = {experience.id}
        position = {experience.position}
        company = {experience.company}
        dateFrom = {experience.dateFrom}
        dateTo = {experience.dateTo}
        />
    ))

    const cvPreviewEducationElements = props.educations.map(education => (
        <CVPreviewEducation 
            id = {education.id}
            university = {education.university}
            degree = {education.degree}
            subject = {education.subject}
            dateFrom = {education.dateFrom}
            dateTo = {education.dateTo}
        />
    ))

    // console.log(props.personalInfo)

    return(
        <div className="cv-preview" ref={ref}>

            <CVPreviewHeader personalInfo={props.personalInfo}/>

            <main className="preview-main-content">

                <div className="preview-sideBar">

                    <img src={props.avatarPhoto} alt="" className="photo"/>

                    <div className="presonalDetailsPreview">
                        <h1 className="presonalDetailsPreview-title">Personal Details</h1>
                        <hr />
                        <h2 className="preview-subtitle">Adress</h2>
                        <p>{props.personalInfo.address}</p>
                        <h2 className="preview-subtitle">Phone Number</h2>
                        <p>{props.personalInfo.phone}</p>
                        <h2 className="preview-subtitle">Email</h2>
                        <p>{props.personalInfo.email}</p>
                    </div>
                </div>

                <div className="preview-main-content-right">

                    <div className="preivew-description">
                        <h2 className="preview-subtitle">Description</h2>
                        <hr />
                        <p className="preview-description-text">{props.personalInfo.description}</p>
                    </div>

                    <div className="preview-experience">
                        <h2 className="preview-subtitle">Experience</h2>
                            <hr />
                            {cvPreviewExperienceElements}
                    </div>

                    <div className="preview-education">
                        <h2 className="preview-subtitle">Education</h2>
                            <hr />
                            {cvPreviewEducationElements}
                    </div>

                </div>

            </main>
        </div>
    )
})

export default CVPreview

