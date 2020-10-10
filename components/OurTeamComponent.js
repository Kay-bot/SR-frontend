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

      <div className={classnames(styles['staff'])}>
        <div>
          <h2>Office/Support Team</h2>
        </div>
        <hr></hr>
        <div></div>
        <div className={classnames(styles['leadership'])}>
          <div className={classnames(styles.ourTeam)}>
            <img src="/staff/iram.jpg" />
            <h4>Iram Aziz</h4>
            <b>Client Relations Manager</b>
            <div>
              <p>
                Iram has a significant background in building and maintaining
                client relationships. She works closely with the clients to
                ensure the seamless coordination of their needs in professional
                and timely manner. Her favourite subject, being psychology, she
                strongly believes{' '}
                <span>
                  "I have learnt that people will forget what you said or did
                  but they will never forget how you made them feel."
                </span>{' '}
                Iram is also involved in the designing of our customer focused
                management system.
              </p>
            </div>
          </div>

          <div className={classnames(styles.ourTeam)}>
            <img src="/staff/Ramya.jpg" />
            <h4>Ramya Sekar</h4>
            <b>Senior Technical-Team Leader</b>
            <div>
              <p>
                Ramya is a Qualified Construction Engineer, holding more than 6
                years of actual experience and is the brains behind our thorough
                training regime. Ramya ensures competitive pricing for our
                quotes, which ensures smooth operations, and she has a strong
                eye for detail, skilled problem solving and an experienced
                solution specialist. She is also focused on product quality and
                available source.
              </p>
            </div>
          </div>

          <div className={classnames(styles.ourTeam)}>
            <img src="/staff/Ria.jpg" />
            <h4>Ria Isbell Lewis</h4>
            <b>Accounts/Office Manager</b>
            <div>
              <p>
                Ria is a graduate with Master of Professional Accounting from
                Australian Catholic University. Ria takes care of the accounts
                and is responsible for reviewing and revising financials. As an
                Office Manager, she makes certain that the team co-ordinates
                from stage to stage, in progress.
              </p>
            </div>
          </div>

          <div className={classnames(styles.ourTeam)}>
            <img src="/staff/Linh.jpg" />
            <h4>Phuong Linh Doan</h4>
            <b>IT & Admin Team. </b>
            <div>
              <p>
                Linh is a newer member of our team and is a recent graduate from
                The University of Sydney in Economics & Psychology.
              </p>
            </div>
          </div>

          <div className={classnames(styles.ourTeam)}>
            <img src="/staff/Jira.jpg" />
            <h4>Jiraporn Manonai</h4>
            <b>IT & Admin Team</b>
            <div>
              <p>
                Jira is a graduate of Business Administration and IT. She
                previously worked as a Key Accounts Manager. Jira takes immense
                care in making sure the job is completed accurately to the quote
                and takes care of the scheduled works calendar to be completed.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End */}

      <OnsiteTeam />
    </section>
  );
};

export default OurTeamComponent;
