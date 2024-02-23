import "../styles/ContactInput.css";
import { useState } from "react";

export function ContactInput({ handleInput }) {
  const [active, setActive] = useState(true);

  const submitEdit = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className="contact-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitEdit();
        }}
      >
        <fieldset>
          <legend>Personal Details</legend>

          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            disabled={!active}
            onChange={handleInput}
            required
          ></input>

          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            onChange={handleInput}
            disabled={!active}
            required
          ></input>

          <label htmlFor="phone">Phone: </label>
          <input
            type="number"
            id="phone"
            onChange={handleInput}
            disabled={!active}
            required
          ></input>

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            onChange={handleInput}
            disabled={!active}
            required
          ></input>

          <button
            type="button"
            className="edit"
            onClick={submitEdit}
            disabled={active}
          >
            Edit
          </button>
          <button
            type="submit"
            className="submit"
            // onClick={submitEdit}
            disabled={!active}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
