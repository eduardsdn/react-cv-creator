import React from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"



export default function CVForm(props) {

    const experienceElements = props.experiences.map(experience => (
        <ExperienceForm 
        key={experience.id}
        id={experience.id} 
        updateExperience={props.updateExperience} 
        addExperience={props.addExperience}
        deleteExperience={props.deleteExperience}
        />
    ))

    const educationElements = props.educations.map(education => (
        <EducationForm 
            key={education.id}
            id={education.id}
            updateEducation={props.updateEducation}
            addEducation={props.addEducation}
            deleteEducation={props.deleteEducation}
        />
    ))

    return(
        <div className="cv-form">
            <PersonalInfoForm updatePersonalInfo={props.updatePersonalInfo} handleImageChange={props.handleImageChange}/>
            {experienceElements}
            {educationElements}
            <div className="exportPDF-wrapper"><button className="exportPDF button" onClick={props.handlePrint}>Export as PDF</button></div>
        </div>
    )
}