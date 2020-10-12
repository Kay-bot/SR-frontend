import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../actions/auth';
import { getAllStaff, removeStaff } from '../../actions/supportTeam';
import { API } from '../../config';

const ReadSupportTeam = () => {
  const [supportTeam, setSupportTeam] = useState([]);
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
        setSupportTeam(data);
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

  const showUpdateButton = (supportTeam) => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/support-team/${supportTeam.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1)
      return (
        <Link href={`/admin/crud/support-team/${supportTeam.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
  };

  const showAllStaff = () => {
    return supportTeam.map((supportTeam, index) => {
      return (
        <div key={index}>
          <img
            className="img"
            src={`${API}/support-team/photo/${supportTeam.slug}`}
            alt={supportTeam.title}
            style={{ width: 'auto', height: '200px' }}
          />
          <h4>{supportTeam.name}</h4>
          <button
            className="btn btn-sm btn-danger mb-3"
            onClick={() => deleteConfirm(supportTeam.slug)}
          >
            Delete
          </button>

          {showUpdateButton(supportTeam)}
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

export default ReadSupportTeam;
