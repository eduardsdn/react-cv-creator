import PersonalInfoForm from "./PersonalInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"

export default function CVForm(props) {
    return(
        <div className="cv-form">
            <PersonalInfoForm updatePersonalInfo={props.updatePersonalInfo}/>
            <ExperienceForm updateExperience={props.updateExperience}/>
            <EducationForm updateEducation={props.updateEducation}/>
        </div>
    )
}