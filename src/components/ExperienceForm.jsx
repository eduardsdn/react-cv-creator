export default function ExperienceForm(props){
    return(
    <div className="experience subform">
        <h1 className="subform title">Experience</h1>
        <input type="text" placeholder="Position" name="position" onChange={props.updateExperience}/>
        <input type="text" placeholder="Company" name="company" onChange={props.updateExperience}/>

        <label htmlFor="dateForm">From</label>
        <input type="date" id="dateFrom" name="dateFrom"onChange={props.updateExperience}/>
        <label htmlFor="dateTo">To</label>
        <input type="date" id="dateTo" name="dateTo" onChange={props.updateExperience}/> 

        <button className="delete button">Delete</button>
        <button className="add button">Add</button>
    </div>
    )
}