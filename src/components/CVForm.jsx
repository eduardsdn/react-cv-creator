import PersonalInfoForm from "./PersonalInfoForm"
import EducationInfoForm from "./ExperienceForm"

export default function CVForm() {
    return(
        <section className="cv-form">
            <PersonalInfoForm />
            <EducationInfoForm />
        </section>
    )
}