export default function CVPreviewEducation(props) {
    return(
        <div className="preview-education-content">
            <div className="preview-education timespan">
                <p className="preview-education timespan from">{props.education.dateFrom}</p>-<p className="preview-experience timespan to">{props.education.dateTo}</p>
            </div>

            <div className="preview-education-occupation place-of-occupation">
                <p className="preview-university place-of-occupation-top">{props.education.university}</p>
                <p className="place-of-occupation-bottom">Degree: <span className="preview-degree">{props.education.degree}</span></p>
                <p className="preview-subject place-of-occupation-bottom">Subject: <span className="preview-subject">{props.education.subject}</span></p>
            </div>
        </div>
    )
    
}