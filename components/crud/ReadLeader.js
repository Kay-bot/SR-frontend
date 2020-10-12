import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../actions/auth';
import { getAllLeader, removeLeader } from '../../actions/leader';
import { API } from '../../config';

const ReadLeader = () => {
  const [leader, setLeader] = useState([]);
  const [message, setMessage] = useState('');
  const token = getCookie('token');

  useEffect(() => {
    loadLeader();
  }, []);

  const loadLeader = () => {
    getAllLeader().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLeader(data);
      }
    });
  };

  const deleteLeader = (slug) => {
    removeLeader(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadLeader();
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      'Are you sure you want to delete the selected leader?'
    );
    if (answer) {
      deleteLeader(slug);
    }
  };

  const showUpdateButton = (leader) => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/leadership/${leader.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1)
      return (
        <Link href={`/admin/crud/leadership/${leader.slug}`}>
          <a className="mb-3 ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
  };

  const showAllLeader = () => {
    return leader.map((leader, index) => {
      return (
        <div key={index}>
          <img
            className="img"
            src={`${API}/leader/photo/${leader.slug}`}
            alt={leader.title}
            style={{ width: 'auto', height: '200px' }}
          />
          <h4>{leader.name}</h4>
          <button
            className="btn btn-sm btn-danger mb-3"
            onClick={() => deleteConfirm(leader.slug)}
          >
            Delete
          </button>

          {showUpdateButton(leader)}
        </div>
      );
    });
  };

  return (
    <div>
      {message && <div className="alert alert-warning">{message}</div>}
      <div className="d-flex flex-wrap justify-content-around">
        {showAllLeader()}
      </div>
    </div>
  );
};

export default ReadLeader;
