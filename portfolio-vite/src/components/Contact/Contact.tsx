import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contato</h2>
      <a href={`mailto:${contact.email}`}>
        <span className="btn btn--outline">E-mail</span>
      </a>
    </section>
  );
};

export default Contact;