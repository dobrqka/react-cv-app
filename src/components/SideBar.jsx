import "../styles/SideBar.css";
import { Contact } from "./Contact.jsx";
import { Skills } from "./Skills.jsx";

export function SideBar({ address, phone, email, skills }) {
  return (
    <>
      <div className="side-bar">
        <img src="../../public/portrait.png" alt="Portrait" />
        <Contact address={address} phone={phone} email={email} />
        <hr />
        <Skills skills={skills} />
      </div>
    </>
  );
}
