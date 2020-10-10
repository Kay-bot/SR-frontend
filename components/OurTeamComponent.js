import OnsiteTeam from '../components/OnsiteTeam';
import SupportTeam from '../components/SupportTeam';

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
      <div className={classnames('bg-light', styles['staff'])}>
        <div>
          <h2>Leadership</h2>
        </div>
        <hr></hr>
        <div className={classnames(styles['leadership'])}>
          <div className={classnames(styles.ourTeam)}>
            <img src="/staff/mark.jpg" />
            <h4>Mark A White</h4>
            <b>Managing Director.</b>
            <div>
              <p>
                Mark has a 30 years of roofing experience, with over 15 years as
                a Strata Specialist. He is a former member of the SCA (Strata
                Service Committee) and is a SCA Qualified Strata Specialist.
                Mark takes much pride in our company's excellent reputation, in
                the strata community, for being honest with high integrity and
                quality control. He also takes equal pride in our high level of
                customer service and our award-winning professional team. Mark’s
                personal time is taken up in his leadership role in local
                community service, and contributing for a better Australia.{' '}
              </p>
            </div>
          </div>
          <div className={classnames(styles.ourTeam)}>
            <img src="/staff/Rob.jpg" />
            <h4>Robert Robinson</h4>
            <b>Operations Manager & Second in Charge</b>
            <div>
              <p>
                Rob is amongst the most knowledgeable roofing specialist (Tile &
                Metal) in the industry. He has 45 years’ experience, and is
                also, a SCA Qualified Strata Specialist. Rob is a hard ‘task
                master' with our tradesman, his attention to detail is
                consistent. He is responsible for the day to day management of
                the on-the-road team and ensures every client is happy with the
                outcome of the works. Rob has been with the company for 10 years
                who has a no nonesense attitude.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SupportTeam />
      <OnsiteTeam />
    </section>
  );
};

export default OurTeamComponent;
