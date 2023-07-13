export default function ExperienceForm({id, addExperience, deleteExperience, updateExperience}){
    return(
    <div className="experience subform">
        <h1 className="subform title">Experience</h1>
        <input type="text" placeholder="Position" name="position" onChange={() => updateExperience(id)}/>
        <input type="text" placeholder="Company" name="company" onChange={() => updateExperience(id)}/>

        <label htmlFor="dateForm">From</label>
        <input type="date" id="dateFrom" name="dateFrom"onChange={() => updateExperience(id)}/>
        <label htmlFor="dateTo">To</label>
        <input type="date" id="dateTo" name="dateTo" onChange={() => updateExperience(id)}/> 

        <button onClick={() => deleteExperience(id)} className="delete button">Delete</button>
        <button onClick={addExperience} className="add button">Add</button>
    </div>
    )
}