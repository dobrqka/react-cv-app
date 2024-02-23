import "../styles/Contact.css";

export function Contact({ address, phone, email }) {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}
