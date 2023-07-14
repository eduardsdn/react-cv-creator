export default function ExperienceForm({id, addExperience, deleteExperience, updateExperience}){
    return(
    <div className="experience subform">
        <h1 className="subform title">Experience</h1>
        <input type="text" placeholder="Position" name="position" onChange={event => updateExperience(event, id)}/>
        <input type="text" placeholder="Company" name="company" onChange={event => updateExperience(event, id)}/>

        <label htmlFor="dateForm">From</label>
        <input type="date" name="dateFrom"onChange={event => updateExperience(event, id)}/>
        <label htmlFor="dateTo">To</label>
        <input type="date" name="dateTo" onChange={event => updateExperience(event, id)}/> 

        <button onClick={() => deleteExperience(id)} className="delete button">Delete</button>
        <button onClick={addExperience} className="add button">Add</button>
    </div>
    )
}