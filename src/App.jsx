import { useState } from "react";
import "./App.css";
import { InputSection } from "./components/InputSection";
import { PreviewSection } from "./components/PreviewSection";

function App() {
  const [contact, setContact] = useState({});
  const [skills, setSkills] = useState([]);
  const [summary, setSummary] = useState("");
  const [history, setHistory] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setContact({ ...contact, [e.target.id]: e.target.value });
  };

  const skillSubmit = (e, newSkills) => {
    e.preventDefault();
    setSkills([...newSkills]);
  };

  const changeSummary = (e) => {
    e.preventDefault();
    setSummary(e.target.value);
  };

  const changeHistory = (newHistory) => {
    setHistory([...newHistory]);
  };

  const changeEducation = (newEducation) => {
    setEducation([...newEducation]);
  };

  const changeCertifications = (newCertifications) => {
    setCertifications([...newCertifications]);
  };

  return (
    <>
      <InputSection
        handleInput={handleInput}
        skillSubmit={skillSubmit}
        changeSummary={changeSummary}
        changeHistory={changeHistory}
        changeEducation={changeEducation}
        changeCertifications={changeCertifications}
      />
      <PreviewSection
        name={contact.name}
        address={contact.address}
        phone={contact.phone}
        email={contact.email}
        skills={skills}
        summary={summary}
        history={history}
        education={education}
        certifications={certifications}
      />
    </>
  );
}

export default App;

// pimp up design a bit but don't overdo it
