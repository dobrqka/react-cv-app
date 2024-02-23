import "../styles/Education.css";
import { Fragment } from "react";

export function Education({ education }) {
  return (
    <div className="education">
      <h1>Education</h1>
      {education.map((item) => {
        return (
          <Fragment key={item.id}>
            <hr className="little-hr"></hr>
            <p>{item.school + " (" + item.graduated + ")"}</p>
            <p>
              <b>Diploma in {item.diploma}</b>
              {", " + item.location}
            </p>
          </Fragment>
        );
      })}
    </div>
  );
}
