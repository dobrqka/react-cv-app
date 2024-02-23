import "../styles/SkillsInput.css";
import { useState } from "react";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

export function SkillsInput({ skillSubmit }) {
  const [active, setActive] = useState(true);
  const [inputs, setInputs] = useState([]);

  const submitEdit = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const handleClick = () => {
    setInputs([...inputs, { id: uuidv4(), value: "" }]);
  };

  const handleChange = (e, id) => {
    e.preventDefault();
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, value: e.target.value };
        } else {
          return input;
        }
      })
    );
  };

  const getSkills = () => {
    const skills = inputs.map((input) => input.value);
    return skills;
  };

  const deleteSkill = (e, id) => {
    e.preventDefault();
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <div className="skills-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitEdit();
          skillSubmit(e, getSkills());
        }}
      >
        <fieldset>
          <legend>Skills</legend>
          {inputs.map((input) => {
            return (
              <Fragment key={input.id}>
                <li>
                  <label htmlFor={input.id}>-</label>
                  <input
                    type="text"
                    id={input.id}
                    onChange={(e) => {
                      handleChange(e, input.id);
                    }}
                    disabled={!active}
                    required
                  ></input>
                </li>
                <button
                  type="button"
                  className="delete-button"
                  disabled={!active}
                  onClick={(e) => deleteSkill(e, input.id)}
                ></button>
              </Fragment>
            );
          })}
          <button
            type="button"
            className="add"
            onClick={handleClick}
            disabled={!active}
          >
            +
          </button>
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
            // onClick={(e) => {
            //   skillSubmit(e, getSkills());
            //   submitEdit();
            // }}
            disabled={!active}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

// add delete button on each input
