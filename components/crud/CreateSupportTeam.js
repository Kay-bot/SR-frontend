import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie } from '../../actions/auth';
import { createStaff } from '../../actions/supportTeam';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';

const CreateSupportTeam = ({ router }) => {
  const supportTeamFromLS = () => {
    if (typeof window === 'undefined') {
      return false;
    }

    if (localStorage.getItem('supportTeam')) {
      return JSON.parse(localStorage.getItem('supportTeam'));
    } else {
      return false;
    }
  };

  const [body, setBody] = useState(supportTeamFromLS());
  const [values, setValues] = useState({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    name: '',
    title: '',
    hidePublishButton: false,
  });

  const {
    error,
    sizeError,
    success,
    formData,
    name,
    title,
    hidePublishButton,
  } = values;
  const token = getCookie('token');

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, [router]);

  const publishStaff = (e) => {
    e.preventDefault();

    createStaff(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          title: '',
          error: '',
          success: `A new employee "${data.name}" is created`,
        });
        setBody('');
      }
    });
  };

  const handleChange = (name) => (e) => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: '' });
  };

  const handleBody = (e) => {
    setBody(e);
    formData.set('body', e);
    if (typeof window !== 'undefined') {
      localStorage.setItem('supportTeam', JSON.stringify(e));
    }
  };

  const showError = () => {
    if (error) {
      return (
        <div
          className="alert alert-danger"
          style={{ display: error ? '' : 'none' }}
        >
          {error}
        </div>
      );
    }
  };

  const showSuccess = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? '' : 'none' }}
      >
        {success}
      </div>
    );
  };

  const createStaffForm = () => {
    return (
      <form onSubmit={publishStaff}>
        <div className="form-group">
          <label className="text-muted">Staff Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleChange('name')}
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleChange('title')}
          />
        </div>

        <div className="form-group">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write something amazing..."
            onChange={handleBody}
          />
        </div>

        <div>
          <div className="form-group pb-2">
            <h5>Featured image</h5>
            <hr />

            <small className="text-muted">Max size: 1mb</small>
            <br />
            <label className="btn btn-outline-info">
              Upload featured image
              <input
                onChange={handleChange('photo')}
                type="file"
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </div>
      </form>
    );
  };
  return (
    <div className="container-fluid pb-5">
      <div className="col">
        {createStaffForm()}
        <div className="pt-3">
          {showError()}
          {showSuccess()}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateSupportTeam);
