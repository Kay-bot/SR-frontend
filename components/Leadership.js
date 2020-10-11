import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { getAllLeader } from '../actions/leader';
import { API } from '../config';

import styles from '../components/Main.module.scss';
import classnames from 'classnames';

const Leadership = () => {
  const [values, setValues] = useState({
    data: [],
    reload: false,
  });

  const { data, reload } = values;

  useEffect(() => {
    loadAllLeader();
  }, [reload]);

  const loadAllLeader = () => {
    getAllLeader().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, data });
      }
    });
  };

  const showAllLeader = () => {
    return data.map((leader, index) => {
      return (
        <div key={index} className={classnames(styles.ourTeam)}>
          <img
            className="img img-fluid"
            src={`${API}/leader/photo/${leader.slug}`}
            alt={leader.title}
          />
          <h4>{leader.name}</h4>
          <b>{leader.title}</b>
          <div>{renderHTML(leader.body)}</div>
        </div>
      );
    });
  };

  return (
    <div className={classnames('bg-light', styles['staff'])}>
      <div>
        <h2>Leadership</h2>
      </div>
      <hr></hr>
      <div className={classnames(styles['leadership'])}>{showAllLeader()}</div>
    </div>
  );
};

export default Leadership;
