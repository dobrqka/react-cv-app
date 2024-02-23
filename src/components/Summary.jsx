import "../styles/Summary.css";

export function Summary({ summary }) {
  return (
    <div className="summary">
      <h1>Professional Summary</h1>
      <p>{summary}</p>
    </div>
  );
}
