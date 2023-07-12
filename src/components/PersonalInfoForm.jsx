export default function PersonalInfoForm(props){
    return(
    <div className="personal-info subform">
        <h1 className="subform title">Personal Information</h1>
        <input type="text" name="firstName" placeholder="First Name" onChange={props.updatePersonalInfo}/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={props.updatePersonalInfo}/>
        <input type="text" name="title" placeholder="Title" onChange={props.updatePersonalInfo}/>
        <input type="file" />
        <input type="text" name="address" placeholder="Address" onChange={props.updatePersonalInfo}/>
        <input type="tel" name="phone" placeholder="Phone number" onChange={props.updatePersonalInfo}/>
        <input type="email" name="email" placeholder="Email" onChange={props.updatePersonalInfo}/>

        <textarea name="description" placeholder="Description" onChange={props.updatePersonalInfo}></textarea>
    </div>
    )
}