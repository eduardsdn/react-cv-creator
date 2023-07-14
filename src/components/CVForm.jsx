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
            <PersonalInfoForm updatePersonalInfo={props.updatePersonalInfo}/>
            {experienceElements}
            {/* <ExperienceForm updateExperience={props.updateExperience} addExperience={props.addExperience}/> */}
            {educationElements}
            {/* <EducationForm updateEducation={props.updateEducation}/> */}
        </div>
    )
}