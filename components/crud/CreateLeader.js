import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { createLeader } from '../../actions/leader';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';

const CreateLeader = ({ router }) => {
  const leaderFromLS = () => {
    if (typeof window === 'undefined') {
      return false;
    }

    if (localStorage.getItem('leader')) {
      return JSON.parse(localStorage.getItem('leader'));
    } else {
      return false;
    }
  };

  const [body, setBody] = useState(leaderFromLS());
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

  const publishLeader = (e) => {
    e.preventDefault();

    createLeader(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          title: '',
          error: '',
          success: `A new leader "${data.name}" is created`,
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
      localStorage.setItem('leader', JSON.stringify(e));
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

  const createLeaderForm = () => {
    return (
      <form onSubmit={publishLeader}>
        <div className="form-group">
          <label className="text-muted">Leader Name</label>
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
        {createLeaderForm()}
        <div className="pt-3">
          {showError()}
          {showSuccess()}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateLeader);
