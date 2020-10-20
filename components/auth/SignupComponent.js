import { useState, useEffect } from 'react';
import { preSignup, isAuth } from '../../actions/auth';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: false,
    success: false,
    loading: false,
    sent: false,
    showForm: true,
  });

  const { name, email, password, error, loading, success, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push('/');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({
      ...values,
      error: false,
      [name]: e.target.value,
      loading: true,
    });
    const user = { name, email, password };

    preSignup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          sent: true,
          loading: false,
          success: data.success,
          showForm: false,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : '';
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : '';
  const showMessage = () =>
    success ? (
      <div className="alert alert-info">
        Account activation link has been sent to your email. Follow the
        instructions to activate your account.
      </div>
    ) : (
      ''
    );

  const signupForm = () => {
    return (
      <section className="my-5">
        <div className="card px-5 py-5 bg-light">
          <div>
            <h2 className="section-title">Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={name}
                onChange={handleChange('name')}
                type="text"
                className="form-control"
                placeholder="Type your name"
              />
            </div>
            <div className="form-group">
              <input
                value={email}
                onChange={handleChange('email')}
                type="email"
                className="form-control"
                placeholder="Type your email"
              />
            </div>
            <div className="form-group">
              <input
                value={password}
                onChange={handleChange('password')}
                type="password"
                className="form-control"
                placeholder="Type your password"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  return (
    <React.Fragment>
      <div className="pt-4">
        {showError()}
        {showLoading()}
        {showMessage()}
      </div>

      {showForm && signupForm()}
    </React.Fragment>
  );
};

export default SignupComponent;
