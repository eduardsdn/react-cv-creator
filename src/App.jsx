import Header from "./components/Header";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

function App() {
  return (
    <div className="App">
      <Header /> 
      <main className="main-content">
        <CVForm />
        <CVPreview />
      </main>
    </div>
  );
}

export default App;
