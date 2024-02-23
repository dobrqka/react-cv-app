import "../styles/InputSection.css";
import { ContactInput } from "./ContactInput.jsx";
import { SkillsInput } from "./SkillsInput.jsx";
import { SummaryInput } from "./SummaryInput.jsx";
import { HistoryInput } from "./HistoryInput.jsx";
import { EducationInput } from "./EducationInput.jsx";
import { CertificationsInput } from "./CertificationsInput.jsx";

export function InputSection({
  handleInput,
  skillSubmit,
  changeSummary,
  changeHistory,
  changeEducation,
  changeCertifications,
}) {
  return (
    <div className="input-section">
      <ContactInput handleInput={handleInput} />
      <SkillsInput skillSubmit={skillSubmit} />
      <SummaryInput changeSummary={changeSummary} />
      <HistoryInput changeHistory={changeHistory} />
      <EducationInput changeEducation={changeEducation} />
      <CertificationsInput changeCertifications={changeCertifications} />
    </div>
  );
}
