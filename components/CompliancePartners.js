import classnames from 'classnames';
import styles from './Main.module.scss';

const CompliancePartners = () => {
  return (
    <section className="bg-light">
      <div>
        <h2 className="section-title pt-4">Compliance Partners</h2>
        <div className="bottom-line"></div>
        <div className={classnames(styles['compliance-logos'])}>
          <img src="/members/EBIX.jpg" alt="" />
          <img src="/members/HBCF.jpg" alt="" />
          <img src="/members/master-builder-assoc.jpg" alt="" />
          <img src="/members/NSW-fair-trading.jpg" alt="" />
          <img src="/members/Pegasus.jpg" alt="" />
          <img src="/members/strata-community.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CompliancePartners;
