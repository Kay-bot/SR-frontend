import classnames from 'classnames';
import styles from './Main.module.scss';

const Footer = (props) => {
  return (
    <div className={classnames('py-3', styles.footer)}>
      <div className="row mx-3">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4>Why should you use Strata Roofing?</h4>
          <hr></hr>

          <p>
            <b>
              We are the ONLY roofing contractor in Sydney that exclusively
              serves the strata sector.
            </b>{' '}
            We don’t work in other sectors, that makes us the real strata
            specialists.
          </p>
          <p>
            <b>Arguably the highest quality roofing reports in Sydney </b> (free
            to regular strata managers).
          </p>
          <p>
            <b>Our highly qualified and experienced admin support team</b> is at
            your service to deliver an exceptional customer service experience,
            unmatched by others in our sector. Professionalism is our policy
            cornerstone.
          </p>
          <p>
            <b>A well-crafted system </b>in place that strives to deliver a
            quality service to you, in reasonable time.
          </p>

          <p>
            <b>
              Strict quality control enforced by mature, highly experienced
              senior management team,
            </b>{' '}
            with many decades of relevant, strata managed property experience.
          </p>

          <p>
            <b>High quality completed job reports, with clear photographs </b>{' '}
            of the completed works, to give strata committees complete
            confidence when authorizing invoice payments. These reports are also
            very helpful in the unlikely event of a warranty claim.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4>Our Location</h4>
          <hr></hr>
          <p>
            <i className="fas fa-map-marker-alt"></i> 4.02, 44 Hampden road,
            Artarmon 2064, NSW , Sydney.
          </p>
          <p>
            <i className="fas fa-phone"></i> 02 9436 3006
          </p>
          <p>
            <i className="fas fa-envelope-square"></i>{' '}
            service@strataroofing.com.au
          </p>
          <p>
            <i className="far fa-clock"></i> Mon - Fri: 9:00AM - 5:00PM
          </p>
        </div>
      </div>

      <p className="text-center pt-5">
        Copyright &copy; 2020 StrataRoofing.com. | All Rights Reseved | Wesite
        by <a href="http://kay-srikaew.com/index.html"> Bubbly Digital</a>
      </p>
    </div>
  );
};

export default Footer;
