export default function CVPreviewHeader(props){
    return(
        <div className="preview-header">
            <h1 className="preview-name"><span className="preview-firstname">{props.personalInfo.firstName}</span> <span className="preview-lastname">{props.personalInfo.lastName}</span></h1>
            <h2 className="preview-title">{props.personalInfo.title}</h2>
        </div>
    )
}
