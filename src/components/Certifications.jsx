import "../styles/Certifications.css";
import { Fragment } from "react";

export function Certifications({ certifications }) {
  return (
    <div className="certifications">
      <h1>Certifications</h1>
      {certifications.map((item) => {
        return (
          <Fragment key={item.id}>
            <hr className="little-hr"></hr>
            <p>{item.value + ", " + item.year}</p>
          </Fragment>
        );
      })}
    </div>
  );
}
