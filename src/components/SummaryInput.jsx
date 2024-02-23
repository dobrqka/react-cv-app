import "../styles/SummaryInput.css";
import { useState } from "react";

export function SummaryInput({ changeSummary }) {
  const [active, setActive] = useState(true);

  const submitEdit = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className="summary-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitEdit();
        }}
      >
        <fieldset>
          <legend>Professional Summary</legend>
          <textarea
            disabled={!active}
            onChange={(e) => changeSummary(e)}
            required
          ></textarea>
          <button
            type="button"
            className="edit"
            onClick={submitEdit}
            disabled={active}
          >
            Edit
          </button>
          <button type="submit" className="submit" disabled={!active}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
