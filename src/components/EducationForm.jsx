export default function EducationForm(){
    return(
    <div className="education subform">
        <h1 className="subform title">Education</h1>
        <input type="text" placeholder="University"/>
        <input type="text" placeholder="City"/>
        <input type="text" placeholder="Degree"/>
        <input type="text" placeholder="Subject"/>
        <label htmlFor="dateForm">From</label>

        <input type="date" id="dateFrom" />
        <label htmlFor="dateTo">To</label>
        <input type="date" id="dateTo" />

        <button className="delete button">Delete</button>
        <button className="add button">Add</button>
    </div>
    )
}