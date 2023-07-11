export default function PersonalInfoForm(){
    return(
    <div className="personal-info subform">
        <h1 className="subform title">Personal Information</h1>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="text" placeholder="Title"/>
        <input type="file" />
        <input type="text" placeholder="Address"/>
        <input type="tel" placeholder="Phone number"/>
        <input type="email" placeholder="Email" />
        <textarea placeholder="Description"></textarea>
    </div>
    )
}