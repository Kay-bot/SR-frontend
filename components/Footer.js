import classnames from 'classnames';
import styles from './Main.module.scss';

const Footer = (props) => {
  return (
    <div className={classnames('py-3', styles.footer)}>
      <div className="row mx-3">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4>Why use Strata Roofing?</h4>
          <hr></hr>

          <p>
            <i className="fas fa-check"></i> We are the ONLY roofing contractor
            in Sydney, that only serves the strata sector (as our name confirms)
            we don’t work in other sectors!{' '}
            <b>that makes us the real strata specialists.</b>
          </p>
          <p>
            <i className="fas fa-check"></i> Arguably the{' '}
            <b>highest quality roofing reports in Sydney</b> (free to regular
            strata managers)
          </p>
          <p>
            <i className="fas fa-check"></i>
            <b>
              An admin / office support team, of highly qualified and
              experienced personal,
            </b>{' '}
            that is unmatched by others, serving our sector, professionalism is
            our policy cornerstone.
          </p>
          <p>
            <i className="fas fa-check"></i> As well-crafted system in place,
            that strives to deliver a <b>quality product in reasonable time.</b>
          </p>
          <p>
            <i className="fas fa-check"></i>{' '}
            <b>Strict quality control enforced</b> by a mature aged, highly
            experienced senior management team, with more experience at the coal
            face, than you could ever wish for.
          </p>
          <p>
            <i className="fas fa-check"></i>{' '}
            <b>
              High quality completed job reports, with sufficient clear
              photographs of the completed works,
            </b>{' '}
            that gives strata committee’s complete confidence with authorising
            invoice payments. These reports are also very helpful in the
            unlikely event of a warranty claim.
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
