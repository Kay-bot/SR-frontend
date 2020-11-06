import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { getAllFeature } from '../actions/feature';

import classnames from 'classnames';
import styles from './Main.module.scss';

const OurFeatures = () => {
  const [values, setValues] = useState({
    data: [],
    reload: false,
  });

  const { data, reload } = values;

  useEffect(() => {
    loadAllFeature();
  }, [reload]);

  const loadAllFeature = () => {
    getAllFeature().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, data });
      }
    });
  };

  const showAllFeature = () => {
    return data.map((feature, index) => {
      return (
        <div className={classnames(styles['flex-container'])} key={index}>
          <h4>{feature.title}</h4>
          <div>{renderHTML(feature.body)}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <section id="our-features" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="bottom-line"></div>

          <div className={classnames(styles['features'])}>
            {showAllFeature()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeatures;
