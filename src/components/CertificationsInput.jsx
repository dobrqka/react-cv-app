import "../styles/CertificationsInput.css";
import { useState } from "react";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

export function CertificationsInput({ changeCertifications }) {
  const [active, setActive] = useState(true);
  const [certifications, setCertifications] = useState([]);

  const submitEdit = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: uuidv4(),
        value: "",
        year: "",
      },
    ]);
  };

  const changeCertification = (id, property, e) => {
    setCertifications(
      certifications.map((item) => {
        if (item.id === id) {
          return { ...item, [property]: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const removeCertification = (id) => {
    setCertifications(certifications.filter((item) => item.id !== id));
  };

  return (
    <div className="certifications-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitEdit();
          changeCertifications(certifications);
        }}
      >
        <fieldset>
          <legend>Certifications</legend>
          {certifications.map((certification) => {
            return (
              <Fragment key={certification.id}>
                <label htmlFor={certification.id}>Certification:</label>
                <input
                  type="text"
                  id={certification.id}
                  disabled={!active}
                  onChange={(e) =>
                    changeCertification(certification.id, "value", e)
                  }
                  required
                ></input>
                <label htmlFor={"year" + certification.id}>Year: </label>
                <input
                  type="number"
                  id={"year" + certification.id}
                  disabled={!active}
                  onChange={(e) =>
                    changeCertification(certification.id, "year", e)
                  }
                  required
                ></input>
                <button
                  type="button"
                  className="delete-certification"
                  disabled={!active}
                  onClick={() => removeCertification(certification.id)}
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
            onClick={addCertification}
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
            //   changeCertifications(certifications);
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
