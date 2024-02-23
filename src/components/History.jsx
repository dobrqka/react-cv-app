import "../styles/History.css";
import { Fragment } from "react";

export function History({ history }) {
  return (
    <div className="history">
      <h1>Work History</h1>

      {history.map((item) => {
        return (
          <Fragment key={item.id}>
            <hr className="little-hr"></hr>
            <h2>
              {item.profession}{" "}
              <span>{"(" + item.startDate + " - " + item.endDate + ")"}</span>
            </h2>
            <h2>{item.company + ", " + item.location}</h2>
            <h3>Responsibilities: </h3>
            <ul>
              {item.tasks.map((task) => {
                return <li key={task.id}>{task.value}</li>;
              })}
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
}
