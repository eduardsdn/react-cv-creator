import React from "react";
import { useReactToPrint } from 'react-to-print';

import Header from "./components/Header";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import defaultPhoto from "./assets/default_photo.jpg"





function App() {

  const [personalInfo, setPersonalInfo] = React.useState({
    firstName : "",
    lastName: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  })

  // const [education, setEducation] = React.useState({
  //   university: "",
  //   degree: "",
  //   subject: "",
  //   dateFrom: "",
  //   dateTo: "",
  // })
  // RUDIMENTARY ^^^

  function updatePersonalInfo(event){
    setPersonalInfo(prevPersonalInfo => {
      return {
        ...prevPersonalInfo,
        [event.target.name]: event.target.value
      }
    })
  }

// EXPERIENCES-----------------------------------------------------------------------------
  const [experiences, setExperiences] = React.useState([
    {
    id: 1,
    position: "",
    company: "",
    dateFrom: "",
    dateTo: "",
    }
  ])
  
  function addExperience(){
    const experience = {
      id: Date.now(),
      position: "",
      company: "",
      dateFrom: "",
      dateTo: "",
    }

    setExperiences(prevExperiences => {
      return [
        ...prevExperiences,
        experience
      ]
    })

    // console.log(experiences)
  }

  function deleteExperience(id){
    setExperiences(prevExperiences => {
      return (
        prevExperiences.filter(experience => experience.id !== id)
      )
    })
    console.log(id)
  }

  function updateExperience(event, id){
    setExperiences(experiences.map(experience => {
      if(experience.id === id) {
        return{...experience, [event.target.name] : event.target.value}
      }
      else {
        return experience
      }
    }))
    console.log(experiences)
  }
// EXPERIENCES-----------------------------------------------------------------------------

// EDUCATION -----------------------------------------------------------------------------
const [educations, setEducations] = React.useState([
  {
  id: 1,
  university: "",
  degree: "",
  subject: "",
  dateFrom: "",
  dateTo: "",
  }
])

function addEducation() {
  const education = {
    id: Date.now(),
    university: "",
    degree: "",
    subject: "",
    dateFrom: "",
    dateTo: "",
  }
  setEducations(prevEducations => {
    return [
      ...prevEducations,
      education
    ]
  })
}

function deleteEducation(id){
  setEducations(prevEducations => {
    return (
      prevEducations.filter(education => education.id !== id)
    )
  })
  console.log(id)
}

function updateEducation(event, id){
  setEducations(educations.map(education => {
    if(education.id === id) {
      return{...education, [event.target.name] : event.target.value}
    }
    else {
      return education
    }
  }))
  console.log(educations)
}
// EDUCATION-----------------------------------------------------------------------------

// PHOTO HANDILNG


const[avatarPhoto, setAvatarPhoto] = React.useState(defaultPhoto)

function handleImageChange(event) {
  const file = event.target.files[0]
  if(file) {
    const reader = new FileReader()
    console.log(reader)
    reader.onloadend = () => {
      setAvatarPhoto(reader.result)
    }
    reader.readAsDataURL(file)
  }
  else {
    setAvatarPhoto(defaultPhoto)
  }
}

// EXPORT CVPREVIEW TO PDF HANDLER

const componentRef = React.useRef();

const handlePrint = useReactToPrint({
  content: () => componentRef.current
});
  
  return (
    <div className="App">
      <Header /> 
      <main className="main-content">
        <CVForm
        updatePersonalInfo={updatePersonalInfo}

        handleImageChange={handleImageChange}

        experiences={experiences}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        updateExperience={updateExperience} 

        educations={educations}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        updateEducation={updateEducation}/>

        <CVPreview 
        ref={componentRef}
        avatarPhoto={avatarPhoto}
        personalInfo={personalInfo} 
        experiences={experiences}
        educations={educations} 
        />
      </main>

      <button className="exportPDF-button" onClick={handlePrint}>Export as PDF</button>
    </div>

    
  );
}

export default App;





