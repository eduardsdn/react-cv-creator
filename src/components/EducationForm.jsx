export default function EducationForm(props){
    return(
    <div className="education subform">
        <h1 className="subform title">Education</h1>
        <input type="text" placeholder="University" name="university" onChange={props.updateEducation}/>
        <input type="text" placeholder="Degree" name="degree" onChange={props.updateEducation}/>
        <input type="text" placeholder="Subject" name="subject" onChange={props.updateEducation}/>

        <label htmlFor="dateForm">From</label>
        <input type="date" id="dateFrom" name="dateFrom" onChange={props.updateEducation}/>
        <label htmlFor="dateTo">To</label>
        <input type="date" id="dateTo" name="dateTo" onChange={props.updateEducation}/>

        <button className="delete button">Delete</button>
        <button className="add button">Add</button>
    </div>
    )
}