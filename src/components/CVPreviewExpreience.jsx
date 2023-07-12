export default function CVPreviewExperience(props) {
    return(
        <div className="preview-expeience-content">
            <div className="preview-experience timespan">
                <p className="preview-experience timespan from">{props.experience.dateFrom}</p>-<p className="preview-experience timespan to">{props.experience.dateTo}</p>
            </div>

            <div className="preview-experience-occupation place-of-occupation">
                <p className="preview-position place-of-occupation-top">{props.experience.position}</p>
                <p className="preview-company place-of-occupation-bottom">{props.experience.company}</p>
            </div>
        </div>
    )
}