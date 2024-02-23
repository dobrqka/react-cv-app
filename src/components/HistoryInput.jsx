import "../styles/HistoryInput.css";
import { useState } from "react";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

export function HistoryInput({ changeHistory }) {
  const [active, setActive] = useState(true);
  const [history, setHistory] = useState([]);
  const submitEdit = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const addHistory = () => {
    setHistory([
      ...history,
      {
        id: uuidv4(),
        profession: "",
        startDate: "",
        endDate: "",
        company: "",
        location: "",
        tasks: [{ id: uuidv4(), value: "" }],
      },
    ]);
  };

  const handleChange = (id, property, e) => {
    setHistory(
      history.map((item) => {
        if (item.id === id) {
          return { ...item, [property]: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const deleteJob = (e, id) => {
    e.preventDefault();
    setHistory(history.filter((item) => item.id !== id));
  };

  const addTask = (id) => {
    setHistory(
      history.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            tasks: [...item.tasks, { id: uuidv4(), value: "" }],
          };
        } else {
          return item;
        }
      })
    );
  };
  const editTask = (parentId, taskId, e) => {
    setHistory(
      history.map((item) => {
        if (item.id === parentId) {
          return {
            ...item,
            tasks: item.tasks.map((task) => {
              if (task.id === taskId) {
                return { ...task, value: e.target.value };
              } else {
                return task;
              }
            }),
          };
        } else {
          return item;
        }
      })
    );
  };

  const deleteTask = (parentId, taskId) => {
    setHistory(
      history.map((item) => {
        if (item.id === parentId) {
          return {
            ...item,
            tasks: item.tasks.filter((task) => task.id !== taskId),
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="history-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitEdit();
          changeHistory(history);
        }}
      >
        <fieldset>
          <legend>Work History</legend>

          {history.map((item) => {
            return (
              <Fragment key={item.id}>
                <label htmlFor={"profession" + item.id}>Profession: </label>
                <input
                  type="text"
                  id={"profession" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "profession", e)}
                  required
                ></input>

                <label htmlFor={"start-date" + item.id}>Start date: </label>
                <input
                  type="date"
                  id={"start-date" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "startDate", e)}
                  required
                ></input>

                <label htmlFor={"end-date" + item.id}>End date: </label>
                <input
                  type="date"
                  id={"end-date" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "endDate", e)}
                  required
                ></input>

                <label htmlFor={"company" + item.id}>Company: </label>
                <input
                  type="text"
                  id={"company" + item.id}
                  disabled={!active}
                  onChange={(e) => handleChange(item.id, "company", e)}
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

                {item.tasks.map((task) => {
                  return (
                    <Fragment key={task.id}>
                      <label htmlFor={task.id}>
                        {item.tasks.indexOf(task) === 0 ? "Tasks: " : "-"}
                      </label>
                      <input
                        type="text"
                        className="tasks-input"
                        id={task.id}
                        disabled={!active}
                        onChange={(e) => editTask(item.id, task.id, e)}
                        required
                      ></input>
                      <button
                        type="button"
                        className="delete-button"
                        disabled={!active}
                        onClick={() => deleteTask(item.id, task.id)}
                      ></button>
                    </Fragment>
                  );
                })}
                <button
                  type="button"
                  className="add-task"
                  onClick={() => addTask(item.id)}
                  disabled={!active}
                >
                  Add Task
                </button>
                <button
                  type="button"
                  className="delete-history"
                  disabled={!active}
                  onClick={(e) => deleteJob(e, item.id)}
                >
                  Remove Workplace
                </button>
              </Fragment>
            );
          })}

          <button
            type="button"
            className="add"
            disabled={!active}
            onClick={addHistory}
          >
            Add Work History
          </button>
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
