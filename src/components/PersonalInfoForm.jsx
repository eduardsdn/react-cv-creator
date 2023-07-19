import uploadIcon from "../assets/upload_icon.svg"

export default function PersonalInfoForm({updatePersonalInfo, handleImageChange}){
    return(
    <div className="personal-info subform">
        <h1 className="subform title">Personal Information</h1>
        <input type="text" name="firstName" placeholder="First Name" onChange={updatePersonalInfo}/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={updatePersonalInfo}/>
        <input type="text" name="title" placeholder="Title" onChange={updatePersonalInfo}/>
        <label for="file-upload" class="custom-file-upload button">
            Choose a photo
            <img src={uploadIcon} alt="" class="upload-icon"/>
        </label>
        <input type="file" id="file-upload" accept="image/png, image/svg, image/jpeg" onChange={event => handleImageChange(event)}/>
        <input type="text" name="address" placeholder="Address" onChange={updatePersonalInfo}/>
        <input type="tel" name="phone" placeholder="Phone number" onChange={updatePersonalInfo}/>
        <input type="email" name="email" placeholder="Email" onChange={updatePersonalInfo}/>

        <textarea name="description" placeholder="Description" onChange={updatePersonalInfo}></textarea>
    </div>
    )
}