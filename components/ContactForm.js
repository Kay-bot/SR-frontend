import { useState } from 'react';
import { emailContactForm } from '../actions/form';

const ContactForm = () => {
  const [values, setValues] = useState({
    message: '',
    name: '',
    email: '',
    sent: false,
    buttonText: 'Send Message',
    success: false,
    error: false,
  });

  const { message, name, email, sent, buttonText, success, error } = values;

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: 'Sending...' });
    emailContactForm({ name, email, message }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          sent: true,
          name: '',
          email: '',
          message: '',
          buttonText: 'Sent',
          success: data.success,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      error: false,
      success: false,
      buttonText: 'Send Message',
    });
  };

  const showSuccessMessage = () =>
    success && (
      <div className="my-5">
        <div className="alert alert-info text-center">
          Thank you for contacting us. We will get back to you shortly.
        </div>
      </div>
    );

  const showErrorMessage = () => (
    <div className="my-5">
      <div
        className="alert alert-danger text-center"
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    </div>
  );

  const contact = () => {
    return (
      <section className="my-5">
        <div className="card px-5 py-5 bg-light">
          <form onSubmit={clickSubmit} className="pb-5">
            <div className="form-group">
              <h2 className="section-title">Contact Us</h2>
              <div className="form-group">
                <label className="lead">Name</label>
                <input
                  type="text"
                  onChange={handleChange('name')}
                  className="form-control"
                  value={name}
                  required
                />
              </div>

              <div className="form-group">
                <label className="lead">Email</label>
                <input
                  type="email"
                  onChange={handleChange('email')}
                  className="form-control"
                  value={email}
                  required
                />
              </div>
              <label className="lead">Message</label>
              <textarea
                onChange={handleChange('message')}
                type="text"
                className="form-control"
                value={message}
                required
                rows="10"
              ></textarea>
            </div>

            <div>
              <button className="btn btn-primary">{buttonText}</button>
            </div>
          </form>
        </div>
      </section>
    );
  };

  return (
    <React.Fragment>
      {showSuccessMessage()}
      {showErrorMessage()}
      {contact()}
    </React.Fragment>
  );
};

export default ContactForm;
