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
    id: 1,
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

  function updateExperience(event, id){
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

    console.log(experiences)
  }

  function deleteExperience(id){
    setExperiences(prevExperiences => {
      return (
        prevExperiences.filter(experience => experience.id !== id)
      )
    })
    console.log(id)
  }

  // function updateExperience(event, id) {
  //   console.log(id)
  //   setExperiences(prevExperiences => {
  //     if(event.target.id === id){
  //       return [
  //         ...prevEducation,
  //         {[event.target.name]: event.target.value}
  //       ]
  //     }
  //   }
  //     )
  //   }
  // }
// MAKE THIS WORK!!!!!! ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// EXPERIENCES-----------------------------------------------------------------------------
  

  return (
    <div className="App">
      <Header /> 
      <main className="main-content">
        <CVForm
        experiences={experiences}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
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
