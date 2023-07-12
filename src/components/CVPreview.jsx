import CVPreviewHeader from "./CVPreviewHeader"
import CVPreviewExperience from "./CVPreviewExpreience"
import CVPreviewEducation from "./CVPreviewEducation"
import defaultPhoto from "../assets/default_photo.jpg"

export default function CVPreview(props){

    // console.log(props.personalInfo)

    return(
        <div className="cv-preview">

            <CVPreviewHeader personalInfo={props.personalInfo}/>

            <main className="preview-main-content">

                <div className="preview-sideBar">

                    <img src={defaultPhoto} alt="" className="photo"/>

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
                            <CVPreviewExperience />
                            <CVPreviewExperience />
                            <CVPreviewExperience />
                            <CVPreviewExperience />
                    </div>

                    <div className="preview-education">
                        <h2 className="preview-subtitle">Education</h2>
                            <hr />
                            <CVPreviewEducation />
                            <CVPreviewEducation />
                            <CVPreviewEducation />
                    </div>

                </div>

            </main>
        </div>
    )
}