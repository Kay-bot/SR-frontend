import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getOneFeature, updateFeature } from '../../actions/feature';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';

const UpdateFeature = ({ router }) => {
  const [body, setBody] = useState('');
  const [values, setValues] = useState({
    title: '',
    body: '',
    error: '',
    success: '',
    formData: '',
  });

  const { error, success, formData, title } = values;
  const token = getCookie('token');

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initFeature();
  }, [router]);

  for (var p of formData) {
    console.log(p);
  }
  const initFeature = () => {
    if (router.query.slug) {
      getOneFeature(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          // setStaff(data);
          setValues({ ...values, title: data.title });
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

  const editFeature = (e) => {
    e.preventDefault();
    updateFeature(formData, token, router.query.slug).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: '',
          success: `"${data.title}" is successfully updated`,
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

  const updateFeatureForm = () => {
    return (
      <form onSubmit={editFeature}>
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
          {updateFeatureForm()}

          <div className="pt-3">
            {showSuccess()}
            {showError()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UpdateFeature);
