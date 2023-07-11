export default function ExperienceForm(){
    return(
    <div className="experience subform">
        <h1 className="subform title">Experience</h1>
        <input type="text" placeholder="Position"/>
        <input type="text" placeholder="Company"/>

        <label htmlFor="dateForm">From</label>
        <input type="date" id="dateFrom" />
        <label htmlFor="dateTo">To</label>
        <input type="date" id="dateTo" />

        <button className="delete button">Delete</button>
        <button className="add button">Add</button>
    </div>
    )
}