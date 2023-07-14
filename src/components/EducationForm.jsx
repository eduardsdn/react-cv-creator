export default function EducationForm({id, addEducation, deleteEducation, updateEducation}){
    return(
    <div className="education subform">
        <h1 className="subform title">Education</h1>
        <input type="text" placeholder="University" name="university" onChange={event => updateEducation(event, id)}/>
        <input type="text" placeholder="Degree" name="degree" onChange={event => updateEducation(event, id)}/>
        <input type="text" placeholder="Subject" name="subject" onChange={event => updateEducation(event, id)}/>

        <label htmlFor="dateForm">From</label>
        <input type="date" id="dateFrom" name="dateFrom" onChange={event => updateEducation(event, id)}/>
        <label htmlFor="dateTo">To</label>
        <input type="date" id="dateTo" name="dateTo" onChange={event => updateEducation(event, id)}/>

        <button onClick={() => deleteEducation(id)} className="delete button">Delete</button> 
        <button onClick={addEducation} className="add button">Add</button>
    </div>
    )
}


// id, addEducation, deleteEducation, updateEducation