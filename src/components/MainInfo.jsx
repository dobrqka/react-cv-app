import "../styles/MainInfo.css";
import { Summary } from "./Summary";
import { History } from "./History";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

export function MainInfo({
  name,
  summary,
  history,
  education,
  certifications,
}) {
  return (
    <>
      <div className="main-info">
        <h1 className="full-name">{name}</h1>
        <hr className="bold-line" />
        <Summary summary={summary} />
        <hr />
        <History history={history} />
        <hr />
        <Education education={education} />
        <hr />
        <Certifications certifications={certifications} />
      </div>
    </>
  );
}
