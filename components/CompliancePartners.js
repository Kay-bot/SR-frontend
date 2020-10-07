import classnames from 'classnames';
import styles from './Main.module.scss';

const CompliancePartners = () => {
  return (
    <section>
      <div className={classnames(styles['compliance-partners'])}>
        <h2 className="section-title pt-4">Compliance Partners</h2>
        <div className="bottom-line"></div>
        <div className={classnames(styles['compliance-logos'])}>
          <img src="/members/EBIX.png" alt="" />
          <img src="/members/HBCF.png" alt="" />
          <img src="/members/MBA.png" alt="" />
          <img src="/members/NSW-fair-trading.png" alt="" />
          <img
            className={classnames(styles.img)}
            src="/members/arm.png"
            alt=""
          />
          <img src="/members/strata-community.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CompliancePartners;
