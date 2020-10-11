import Leadership from '../components/Leadership';
import SupportTeam from '../components/SupportTeam';
import OnsiteTeam from '../components/OnsiteTeam';

import styles from './Main.module.scss';
import classnames from 'classnames';

const OurTeamComponent = () => {
  return (
    <section className="container">
      <div className={classnames('text-center py-5', styles.meetTheTeam)}>
        <h2 className="section-title">
          Meet The <span>Team</span>
        </h2>
        <div className="bottom-line"></div>
      </div>
      <Leadership />
      <SupportTeam />
      <OnsiteTeam />
    </section>
  );
};

export default OurTeamComponent;
