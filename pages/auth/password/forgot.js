import { useState } from 'react';
import Layout from '../../../components/Layout';
import { forgotPassword } from '../../../actions/auth';

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: '',
    message: '',
    showForm: true,
    success: false,
    error: false,
    sent: false,
    buttonText: 'Reset password',
  });

  const { email, showForm, success, error, buttonText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, message: '', error: '', buttonText: 'Sending...' });
    forgotPassword({ email }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          message: '',
          email: '',
          sent: true,
          buttonText: 'Sent',
          showForm: false,
          success: data.success,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, message: '', error: '', [name]: e.target.value });
  };

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : '';
  const showMessage = () =>
    success ? (
      <div className="alert alert-success">
        Email has been sent to your email. Follow the instructions to reset your
        password. Link expires in 10min.
      </div>
    ) : (
      ''
    );

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group pt-5">
        <input
          type="email"
          onChange={handleChange('email')}
          className="form-control"
          value={email}
          placeholder="Type your email"
          required
        />
      </div>
      <div>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6 offset-md-3 bg-light text-center py-4 px-4">
            <h2>Forgot password</h2>
            {showError()}
            {showMessage()}
            {showForm && passwordForgotForm()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
