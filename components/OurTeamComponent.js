import styles from './Main.module.scss';
import classnames from 'classnames';

const OurTeamComponent = () => {
  return (
    <section className="py-3 px-4">
      {/* <header className="text-center">
        <div className="mb-5 px-4 py-4 bg-light text-muted">
          <h1>Our Team</h1>
        </div>
      </header> */}
      <div
        className={classnames('text-center bg-light py-3', styles.meetTheTeam)}
      >
        <h2 className="section-title">
          Meet the <span>team</span>
        </h2>
        <div className="bottom-line"></div>
      </div>
      <div className={classnames('lead text-center pt-4 ', styles.ups)}>
        <h2>“NOT JUST ANOTHER ROOFING COMPANY”</h2>
        <p>Meet the team that will turn roof problems into roof solutions. </p>
      </div>
      <div>
        <h2>Leadership</h2>
      </div>
      <div className={classnames(styles['leadership'])}>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/mark.jpg" />
          <h4>Mark A White</h4>
          <b>Managing Director.</b>
          {/* <p>
            Mark holds a 30 years of roofing experience, with over 15 years as a
            strata specialist. He is a former member of the SCA (Strata Service
            Committee) and is a SCA Qualified strata specialist. Mark takes much
            pride in our company's excellent reputation for being honest with
            high integrity and quality standard. He also takes equal pride in
            our high level of customer service and our award-winning
            professional team. Mark’s personal time is taken up in his
            leadership role in local community service, and contributing for a
            better Australia.{' '}
          </p> */}
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/Rob.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
          {/* <p>
            Rob is amongst the most knowledgeable roofing specialist (Tile +
            Metal) in the industry. He has 45 years’ experience, and is also, a
            SCA qualified strata specialist. Rob is a hard ‘task’ master with
            our tradesman, his attention to detail is consistent. He is
            responsible for the day to day management of the on-the-road team
            and ensures every client is happy with the outcome of the works. Rob
            has been with the company for 9 years.
          </p> */}
        </div>
      </div>
      <div>
        <h2>Fieldwork Team</h2>
      </div>
      <div className={classnames(styles['leadership'])}>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/alex.jpg" />
          <h4>Mark A White</h4>
          <b>Managing Director.</b>
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/kevin.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/Raymond.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/Thomas.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
        </div>
      </div>
      <div>
        <h2>Office Support Team</h2>
      </div>
      <div className={classnames(styles['leadership'])}>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/Jira.jpg" />
          <h4>Mark A White</h4>
          <b>Managing Director.</b>
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/iram.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/Linh.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/Ramya.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
        </div>
        <div className={classnames('text-center py-4', styles.ourTeam)}>
          <img src="/staff/Ria.jpg" />
          <h4>Robert Robinson</h4>
          <b>Operations Manager & Second in Charge</b>
        </div>
      </div>
    </section>
  );
};

export default OurTeamComponent;
