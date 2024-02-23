import { SideBar } from "./SideBar";
import { MainInfo } from "./MainInfo";
import "../styles/PreviewSection.css";

export function PreviewSection({
  address,
  phone,
  email,
  name,
  skills,
  summary,
  history,
  education,
  certifications,
}) {
  return (
    <div className="preview-section">
      <SideBar address={address} phone={phone} email={email} skills={skills} />
      <MainInfo
        name={name}
        summary={summary}
        history={history}
        education={education}
        certifications={certifications}
      />
    </div>
  );
}
