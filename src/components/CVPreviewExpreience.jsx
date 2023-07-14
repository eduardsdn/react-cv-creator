export default function CVPreviewExperience({dateFrom, dateTo, position, company}) {
    return(
        <div className="preview-expeience-content">
            <div className="preview-experience timespan">
                <p className="preview-experience timespan from">{dateFrom}</p>-<p className="preview-experience timespan to">{dateTo}</p>
            </div>

            <div className="preview-experience-occupation place-of-occupation">
                <p className="preview-position place-of-occupation-top">{position}</p>
                <p className="preview-company place-of-occupation-bottom">{company}</p>
            </div>
        </div>
    )
}