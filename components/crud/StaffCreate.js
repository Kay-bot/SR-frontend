import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { createStaff } from '../../actions/staff';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';

const CreateStaff = ({ router }) => {
  const staffFromLS = () => {
    if (typeof window === 'undefined') {
      return false;
    }

    if (localStorage.getItem('staff')) {
      return JSON.parse(localStorage.getItem('staff'));
    } else {
      return false;
    }
  };

  const [body, setBody] = useState(staffFromLS());
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
      localStorage.setItem('staff', JSON.stringify(e));
    }
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
    <div>
      {createStaffForm()}
      <h1>{JSON.stringify(name)}</h1>
      <b>{JSON.stringify(title)}</b>
      <p>{JSON.stringify(body)}</p>
    </div>
  );
};

export default withRouter(CreateStaff);
