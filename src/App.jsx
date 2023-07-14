import React from "react";
import Header from "./components/Header";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

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


  // const [experience, setExperience] = React.useState({
  //   id: 1,
  //   position: "",
  //   company: "",
  //   dateFrom: "",
  //   dateTo: "",
  // })
  // RUDIMENTARY ^^^
  

  const [education, setEducation] = React.useState({
    university: "",
    degree: "",
    subject: "",
    dateFrom: "",
    dateTo: "",
  })
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
  
  return (
    <div className="App">
      <Header /> 
      <main className="main-content">
        <CVForm
        updatePersonalInfo={updatePersonalInfo}

        experiences={experiences}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        updateExperience={updateExperience} 

        educations={educations}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        updateEducation={updateEducation}/>
        <CVPreview 
        personalInfo={personalInfo} 
        experiences={experiences}
        education={education}/>
      </main>
    </div>
  );
}

export default App;
