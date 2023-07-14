export default function CVPreviewEducation({dateFrom, dateTo, university, degree, subject}) {
    return(
        <div className="preview-education-content">
            <div className="preview-education timespan">
                <p className="preview-education timespan from">{dateFrom}</p>-<p className="preview-experience timespan to">{dateTo}</p>
            </div>

            <div className="preview-education-occupation place-of-occupation">
                <p className="preview-university place-of-occupation-top">{university}</p>
                <p className="place-of-occupation-bottom">Degree: <span className="preview-degree">{degree}</span></p>
                <p className="preview-subject place-of-occupation-bottom">Subject: <span className="preview-subject">{subject}</span></p>
            </div>
        </div>
    )
    
}