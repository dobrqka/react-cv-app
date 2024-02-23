import "../styles/EducationInput.css";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function EducationInput({ changeEducation }) {
  const [active, setActive] = useState(true);
  const [education, setEducation] = useState([]);

  const submitEdit = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: uuidv4(),
        school: "",
        graduated: "",
        diploma: "",
        location: "",
      },
    ]);
  };

  const handleChange = (id, property, e) => {
    setEducation(
      education.map((item) => {
        if (item.id === id) {
          return { ...item, [property]: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const deleteEducation = (e, id) => {
    e.preventDefault();
    setEducation(education.filter((item) => item.id !== id));
  };

  return (
    <div className="education-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitEdit();
          changeEducation(education);
        }}
      >
        <fieldset>
          <legend>Education</legend>
          {education.map((item) => {
            return (
              <Fragment key={item.id}>
                <label htmlFor={"school" + item.id}>School: </label>
                <input
                  type="text"
                  id={"school" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "school", e)}
                  required
                ></input>

                <label htmlFor={"graduation" + item.id}>Year graduated: </label>
                <input
                  type="number"
                  id={"graduation" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "graduated", e)}
                  required
                ></input>

                <label htmlFor={"diploma" + item.id}>Study field: </label>
                <input
                  type="text"
                  id={"diploma" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "diploma", e)}
                  required
                ></input>

                <label htmlFor={"location" + item.id}>Location: </label>
                <input
                  type="text"
                  id={"location" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "location", e)}
                  required
                ></input>
                <button
                  type="button"
                  className="delete-education"
                  disabled={!active}
                  onClick={(e) => deleteEducation(e, item.id)}
                >
                  Remove
                </button>
              </Fragment>
            );
          })}

          <button
            type="button"
            className="add"
            disabled={!active}
            onClick={addEducation}
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
            // onClick={() => {
            //   submitEdit();
            //   changeEducation(education);
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
