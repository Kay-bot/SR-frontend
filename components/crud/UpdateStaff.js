import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getOneStaff, updateStaff } from '../../actions/staff';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';

const UpdateStaff = ({ router }) => {
  const [body, setBody] = useState('');
  const [values, setValues] = useState({
    name: '',
    title: '',
    body: '',
    error: '',
    success: '',
    formData: '',
  });

  const { error, success, formData, name, title } = values;
  const token = getCookie('token');

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initStaff();
  }, [router]);

  for (var p of formData) {
    console.log(p);
  }
  const initStaff = () => {
    if (router.query.slug) {
      getOneStaff(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          // setStaff(data);
          setValues({ ...values, name: data.name, title: data.title });
          setBody(data.body);
        }
      });
    }
  };

  const handleChange = (name) => (e) => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({
      ...values,
      [name]: value,
      formData,
      error: '',
    });
  };

  const handleBody = (e) => {
    console.log(e);
    setBody(e);
    formData.set('body', e);
  };

  const editStaff = (e) => {
    e.preventDefault();
    updateStaff(formData, token, router.query.slug).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          title: '',
          success: `"${data.name}'s profile" is successfully updated`,
        });
        if (isAuth() && isAuth().role === 1) {
          // Router.replace(`/admin/crud/${router.query.slug}`);
          Router.replace(`/admin`);
        } else if (isAuth() && isAuth().role === 0) {
          // Router.replace(`/user/crud/${router.query.slug}`);
          Router.replace(`/user`);
        }
      }
    });
  };

  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    );
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

  const updateStaffForm = () => {
    return (
      <form onSubmit={editStaff}>
        <div className="form-group">
          <label className="text-muted">Name</label>
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

        <div className="col-md-4">
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
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col">
          {updateStaffForm()}

          <div className="pt-3">
            {showSuccess()}
            {showError()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UpdateStaff);
