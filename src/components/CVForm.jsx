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

    return(
        <div className="cv-form">
            <PersonalInfoForm updatePersonalInfo={props.updatePersonalInfo}/>
            {experienceElements}
            {/* <ExperienceForm updateExperience={props.updateExperience} addExperience={props.addExperience}/> */}
            <EducationForm updateEducation={props.updateEducation}/>
        </div>
    )
}