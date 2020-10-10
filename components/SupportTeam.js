import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { getAllStaff } from '../actions/supportTeam';
import { API } from '../config';

import styles from '../components/Main.module.scss';
import classnames from 'classnames';

const SupportTeam = () => {
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
    return data.map((supportStaff, index) => {
      return (
        <div key={index} className={classnames(styles.ourTeam)}>
          <img
            className="img img-fluid"
            src={`${API}/support-team/photo/${supportStaff.slug}`}
            alt={supportStaff.title}
          />
          <h4>{supportStaff.name}</h4>
          <b>{supportStaff.title}</b>
          <div>{renderHTML(supportStaff.body)}</div>
        </div>
      );
    });
  };

  return (
    <div className={classnames('bg-white', styles['staff'])}>
      <div>
        <h2>Fieldwork/On-site Team</h2>
      </div>
      <hr></hr>
      <div className={classnames(styles['leadership'])}>{showAllStaff()}</div>
    </div>
  );
};

export default SupportTeam;
