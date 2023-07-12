import CVPreviewHeader from "./CVPreviewHeader"
import CVPreviewExperience from "./CVPreviewExpreience"
import defaultPhoto from "../assets/default_photo.jpg"

export default function CVPreview(){
    return(
        <div className="cv-preview">

            <CVPreviewHeader />

            <main className="preview-main-content">

                <div className="preview-sideBar">

                    <img src={defaultPhoto} alt="" className="photo"/>

                    <div className="presonalDetailsPreview">
                        <h1 className="presonalDetailsPreview-title">Personal Details</h1>
                        <hr />
                        <h2 className="preview-subtitle">Adress</h2>
                        <p>Streeet asdlls</p>
                        <h2 className="preview-subtitle">Phone Number</h2>
                        <p>123 00292 1122</p>
                        <h2 className="preview-subtitle">Email</h2>
                        <p>mail@mal.com</p>
                    </div>
                </div>

                <div className="preview-main-content-right">

                    <div className="preivew-description">
                        <h2 className="preview-subtitle">Description</h2>
                        <hr />
                        <p className="preview-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.</p>
                    </div>

                    <div className="preview-experience">
                    <h2 className="preview-subtitle">Experience</h2>
                        <hr />
                        <CVPreviewExperience />
                    </div>

                </div>

            </main>
        </div>
    )
}