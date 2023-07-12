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

  function updatePersonalInfo(event){
    setPersonalInfo(prevPersonalInfo => {
      return {
        ...prevPersonalInfo,
        [event.target.name]: event.target.value
      }
    })

    // console.log(personalInfo)
  }

  return (
    <div className="App">
      <Header /> 
      <main className="main-content">
        <CVForm updatePersonalInfo={updatePersonalInfo}/>
        <CVPreview personalInfo={personalInfo}/>
      </main>
    </div>
  );
}

export default App;
