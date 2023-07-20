import React from "react"
import CVPreviewHeader from "./CVPreviewHeader"
import CVPreviewExperience from "./CVPreviewExpreience"
import CVPreviewEducation from "./CVPreviewEducation"

const CVPreview = React.forwardRef(({experiences, 
    educations, 
    personalInfo, 
    avatarPhoto}, 
    ref) => {
    

    const cvPreviewExperienceElements = experiences.map(experience => (
        <CVPreviewExperience
        key = {experience.id}
        id = {experience.id}
        position = {experience.position}
        company = {experience.company}
        dateFrom = {experience.dateFrom}
        dateTo = {experience.dateTo}
        />
    ))

    const cvPreviewEducationElements = educations.map(education => (
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

            <CVPreviewHeader personalInfo={personalInfo}/>

            <main className="preview-main-content">

                <div className="preview-sideBar">

                    <img src={avatarPhoto} alt="" className="photo"/>

                    <div className="presonalDetailsPreview">
                        <h1 className="presonalDetailsPreview-title">Personal Details</h1>
                        <hr className="sidebar-preview-hr"/>
                        <h2 className="preview-subtitle">Adress</h2>
                        <p>{personalInfo.address}</p>
                        <h2 className="preview-subtitle">Phone Number</h2>
                        <p>{personalInfo.phone}</p>
                        <h2 className="preview-subtitle">Email</h2>
                        <p>{personalInfo.email}</p>
                    </div>
                </div>

                <div className="preview-main-content-right">

                    <div className="preivew-description">
                        <h2 className="preview-subtitle">Description</h2>
                        <hr className="main-preview-hr"/>
                        <p className="preview-description-text">{personalInfo.description}</p>
                    </div>

                    <div className="preview-experience">
                        <h2 className="preview-subtitle">Experience</h2>
                            <hr className="main-preview-hr"/>
                            {cvPreviewExperienceElements}
                    </div>

                    <div className="preview-education">
                        <h2 className="preview-subtitle">Education</h2>
                            <hr className="main-preview-hr"/>
                            {cvPreviewEducationElements}
                    </div>

                </div>

            </main>
        </div>
    )
})

export default CVPreview

