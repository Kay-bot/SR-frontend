import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { getCookie, isAuth } from '../../actions/auth';
import { getAllStaff, removeStaff } from '../../actions/staff';
import { API } from '../../config';

const ReadFieldStaff = () => {
  const [staff, setStaff] = useState([]);
  const [message, setMessage] = useState('');
  const token = getCookie('token');

  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = () => {
    getAllStaff().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStaff(data);
      }
    });
  };

  const deleteStaff = (slug) => {
    removeStaff(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadStaff();
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete the staff?');
    if (answer) {
      deleteStaff(slug);
    }
  };

  const showUpdateButton = (staff) => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/${staff.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1)
      return (
        <Link href={`/admin/crud/${staff.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
  };

  const showAllStaff = () => {
    return staff.map((staff, index) => {
      return (
        <div key={index}>
          <img
            className="img"
            src={`${API}/staff/photo/${staff.slug}`}
            alt={staff.title}
            style={{ width: 'auto', height: '200px' }}
          />
          <h4>{staff.name}</h4>
          <button
            className="btn btn-sm btn-danger mb-3"
            onClick={() => deleteConfirm(staff.slug)}
          >
            Delete
          </button>

          {showUpdateButton(staff)}
        </div>
      );
    });
  };

  return (
    <div>
      {message && <div className="alert alert-warning">{message}</div>}
      <div className="d-flex flex-wrap justify-content-around">
        {showAllStaff()}
      </div>
    </div>
  );
};

export default ReadFieldStaff;
