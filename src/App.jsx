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

  const [experience, setExperience] = React.useState({
    position: "",
    company: "",
    dateFrom: "",
    dateTo: "",
  })

  const [education, setEducation] = React.useState({
    university: "",
    degree: "",
    subject: "",
    dateFrom: "",
    dateTo: "",
  })

  function updatePersonalInfo(event){
    setPersonalInfo(prevPersonalInfo => {
      return {
        ...prevPersonalInfo,
        [event.target.name]: event.target.value
      }
    })
  }

  function updateExperience(event){
    setExperience(prevExperience => {
      return {
        ...prevExperience,
        [event.target.name]: event.target.value
      }
    })
  }

  function updateEducation(event){
    setEducation(prevEducation => {
      return {
        ...prevEducation,
        [event.target.name]: event.target.value
      }
    })
  }
  

  return (
    <div className="App">
      <Header /> 
      <main className="main-content">
        <CVForm 
        updatePersonalInfo={updatePersonalInfo} 
        updateExperience={updateExperience} 
        updateEducation={updateEducation}/>
        <CVPreview 
        personalInfo={personalInfo} 
        experience={experience}
        education={education}/>
      </main>
    </div>
  );
}

export default App;
