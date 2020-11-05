import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../actions/auth';
import { getAllFeature, removeFeature } from '../../actions/feature';

const ReadFeature = () => {
  const [feature, setFeature] = useState([]);
  const [message, setMessage] = useState('');
  const token = getCookie('token');

  useEffect(() => {
    loadFeature();
  }, []);

  const loadFeature = () => {
    getAllFeature().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setFeature(data);
      }
    });
  };

  const deleteFeature = (slug) => {
    removeFeature(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadFeature();
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete the feature?');
    if (answer) {
      deleteFeature(slug);
    }
  };

  const showUpdateButton = (feature) => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/feature/${feature.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1)
      return (
        <Link href={`/admin/crud/feature/${feature.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
  };

  const showAllFeature = () => {
    return feature.map((feature, index) => {
      return (
        <div className="card-body" key={index}>
          <h4 className="card-title">{feature.title}</h4>
          <p className="card-text text-left">{feature.mdesc.result}</p>
          <button
            className="btn btn-sm btn-danger mb-3"
            onClick={() => deleteConfirm(feature.slug)}
          >
            Delete
          </button>

          {showUpdateButton(feature)}
        </div>
      );
    });
  };

  return (
    <div>
      {message && <div className="alert alert-warning">{message}</div>}
      <div className="d-flex">{showAllFeature()}</div>
    </div>
  );
};

export default ReadFeature;
