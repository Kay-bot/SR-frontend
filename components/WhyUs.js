import classnames from 'classnames';
import styles from './Main.module.scss';

const OurFeatures = () => {
  return (
    <div>
      <section id="our-features" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="bottom-line"></div>

          <div className={classnames(styles['features'])}>
            <div>
              {/* <i
                className={classnames(
                  'far fa-building fa-2x',
                  styles['icon-color']
                )}
              ></i> */}
              <h3>How are we – Strata Specialist?</h3>
              <p>
                We are the only Sydney roofing company, that exclusively
                services the strata community sector. All of our office support
                team and trades / supervisors are fully trained in strata
                managed property’s needs and compliance laws and regulations.{' '}
                <b>
                  We have been members of Strata Community Australia for many
                  years now & our senior management team have completed the SCA
                  Strata Specialist course.
                </b>
                <span>
                  <a href="/our-services"> See more services...</a>
                </span>
              </p>
              <p>
                Call
                <a href="tel:0294363006"> 02 9436 3006 </a>
                now to discuss your next roof replacement project!
              </p>
            </div>

            <div>
              {/* <i
                className={classnames(
                  'far fa-building fa-2x',
                  styles['icon-color']
                )}
              ></i> */}
              <h3>Best Roof Reports – in Sydney!</h3>
              <p>
                We are told so often, by so many strata managers & strata
                committee members, that our photographic roof & gutter reports
                are the best, in Sydney by far! Our Supervisors and team leaders
                are trained to spend the time required, to produce{' '}
                <b>no nonsense easy to understand roof reports, </b> that
                utilise clear photos & Google roof images all clearly explained.{' '}
                <b>
                  These reports are free to our regular strata manager clients.
                </b>
                <span>
                  <a href="/our-services"> See more services...</a>
                </span>
              </p>
              <p>
                Call
                <a href="tel:0294363006"> 02 9436 3006 </a>
                now for the perfect roof!
              </p>
            </div>

            <div>
              {/* <i
                className={classnames(
                  'far fa-clock fa-2x',
                  styles['icon-color']
                )}
              ></i> */}
              <h3>We’ve got you covered!</h3>
              <p>
                We are 100% compliant, strata owners and managers can be totally
                confident that we have all the insurances in place, being:{' '}
                <b>
                  Public Liability / Workers Compensation &amp; Home Warranty
                  Insurance
                </b>{' '}
                (HBCF). All insurance policies are independently audited each
                year to give our clients 100% confidence that we are 100%
                covered, thus all of our clients fully covered.
              </p>
              <p>
                <b>
                  We are also independently audited Annually by the highly
                  respected Ebix Trades Monitor organisation to make sure all of
                  our OH&amp;S documentation is all in order and 100% compliant
                </b>{' '}
                because roofing is performed at heights, thus safety must be
                front of mind, every minute of the day. The safety of the
                on-site residents, the general public &amp; our tradesmen is
                equally important and is imbedded in our DNA.
              </p>
              <p>
                Call
                <a href="tel:0294363006"> 02 9436 3006 </a>
                us now. We’ll get it set up!
              </p>
            </div>
            <div>
              {/* <i
                className={classnames(
                  'far fa-thumbs-up fa-2x',
                  styles['icon-color']
                )}
              ></i> */}
              <h3>Not all roofers are fully licensed!</h3>
              <p>
                It’s a common mistake that some strata managers and many owners’
                corporations ‘think’ that a licensed roofing contractor is
                allowed to carry out ‘ALL’ roofing, this is simply wrong and can
                in fact lead to{' '}
                <u>
                  roofing works, being carried out by UNLICENSED contractors,
                </u>
                thus exposing owners’ corporations to worrisome unlicensed work!
              </p>
              <p>
                <b>
                  Strata Roofing is one of the{' '}
                  <u>
                    very few company’s that is fully licensed to carry out all
                  </u>{' '}
                  3 categories of roofing. That’s right,
                  <u> 3 different licenses</u> required to do{' '}
                  <u>all 3 types of roofing</u>, being:
                </b>
              </p>

              <p>
                <i className="fas fa-check"></i>
                <span> Roof Tiling </span>(Tile roofs – repair & replace /
                re-roof)
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span> Roof Plumbing</span> (Metal roofing & Guttering /repair &
                replace)
              </p>
              <p>
                <i className="fas fa-check"></i>
                <span> Waterproofing</span> (Membrane Roofs)
              </p>

              <p>
                Need a new roof or fast gutter replacement services? Call{' '}
                <a href="tel:0294363006"> 02 9436 3006 </a> today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeatures;
