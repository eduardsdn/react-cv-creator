import React from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"



export default function CVForm(
    {experiences,
    educations,
    updateEducation, 
    addEducation, 
    deleteEducation, 
    addExperience,
    deleteExperience,
    updateExperience,
    updatePersonalInfo,
    handleImageChange,
    handlePrint}) {

    const experienceElements = experiences.map(experience => (
        <ExperienceForm 
        key={experience.id}
        id={experience.id} 
        updateExperience={updateExperience} 
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        />
    ))

    const educationElements = educations.map(education => (
        <EducationForm 
            key={education.id}
            id={education.id}
            updateEducation={updateEducation}
            addEducation={addEducation}
            deleteEducation={deleteEducation}
        />
    ))

    return(
        <div className="cv-form">
            <PersonalInfoForm updatePersonalInfo={updatePersonalInfo} handleImageChange={handleImageChange}/>
            {experienceElements}
            {educationElements}
            <div className="exportPDF-wrapper"><button className="exportPDF button" onClick={handlePrint}>Export as PDF</button></div>
        </div>
    )
}