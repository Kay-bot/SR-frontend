import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { getAllStaff } from '../actions/staff';
import { API } from '../config';
import { getCookie } from '../actions/auth';

import styles from '../components/Main.module.scss';
import classnames from 'classnames';

const OnsiteTeam = () => {
  const [values, setValues] = useState({
    data: [],
    reload: false,
  });

  const { data, reload } = values;

  useEffect(() => {
    loadAllStaff();
  }, [reload]);

  const loadAllStaff = () => {
    getAllStaff().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, data });
      }
    });
  };

  const showAllStaff = () => {
    return data.map((staff, index) => {
      return (
        // <div className={classnames(styles['leadership'])}>
        <div key={index} className={classnames(styles.ourTeam)}>
          <img
            className="img img-fluid"
            src={`${API}/staff/photo/${staff.slug}`}
            alt={staff.title}
          />
          <h4>{staff.name}</h4>
          <b>{staff.title}</b>
          <div>{renderHTML(staff.body)}</div>
        </div>
        // </div>
      );
    });
  };

  return (
    <div className={classnames('bg-light', styles['staff'])}>
      <div>
        <h2>Fieldwork/On-site Team</h2>
      </div>
      <hr></hr>
      <div className={classnames(styles['leadership'])}>{showAllStaff()}</div>
    </div>
  );
};

export default OnsiteTeam;
