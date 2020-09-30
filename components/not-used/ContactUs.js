import classnames from 'classnames';
import styles from './Main.module.scss';

const ContactUs = () => {
  return (
    <section id="contact" className="text-center py-3">
      <div className="bg-light">
        <h2 className="section-title">Contact Us</h2>
        <div className="bottom-line"></div>
        <p className="lead">Contact us for free quote</p>
        <form action="process.php" method="POST">
          <div className="text-fields">
            <input
              type="text"
              name="name"
              className="text-input name-input"
              placeholder="Name"
            />
            <input
              type="text"
              name="subject"
              className="text-input subject-input"
              placeholder="Subject"
            />
            <input
              type="email"
              name="email"
              className="text-input email-input"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              className="text-input phone-input"
              placeholder="Phone"
            />
            <textarea
              name="message"
              className="text-input message-input"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <button type="submit" className="btn-main">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
