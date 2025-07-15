// src/components/Contact.jsx
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <h2 className="contact-heading">Wanna Work Together?</h2>
        <p className="contact-subtext">Let’s collaborate on something meaningful.</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">What’s your name?</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">What’s your email?</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Write a short message so I know what we’ll be talking about.</label>
            <textarea id="message" name="message" rows="5" placeholder="Let’s work on a portfolio website..." required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
}
