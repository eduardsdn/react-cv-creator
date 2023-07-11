import PersonalInfoForm from "./PersonalInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"

export default function CVForm() {
    return(
        <section className="cv-form">
            <PersonalInfoForm />
            <ExperienceForm />
            <EducationForm />
        </section>
    )
}