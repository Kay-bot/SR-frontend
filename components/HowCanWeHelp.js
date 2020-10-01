import styles from './Main.module.scss';
import classnames from 'classnames';
import Link from 'next/link';

const HowCanWeHelp = () => {
  return (
    <div>
      <section id="how-can-we-help" className="text-center py-4">
        <h2 className="section-title">How Can We Help You?</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          We take pride in what we do. No other roofing company can offer you
          this strata specialist support team !
        </p>
        <div className={classnames(styles.specials)}>
          <div>
            <div className={classnames(styles.imgFrame)}>
              <img
                src="/images/roof-installation-monier.jpg"
                alt="Roof installation"
              />
            </div>
            <h3>Roof Installation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis odio auctor tortor venenatis, quis fermentum eros
              iaculis.
            </p>
          </div>

          <div>
            <div className={classnames(styles.imgFrame)}>
              <img src="/images/membrane.jpg" alt="membrane" />
            </div>
            <h3>Membrane Roof</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis odio auctor tortor venenatis, quis fermentum eros
              iaculis.
            </p>
          </div>
          <div>
            <div>
              <img
                src="/images/gutters-installation.jpg"
                alt="gutters installation"
              />
            </div>
            <h3>Gutter Replacement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis odio auctor tortor venenatis, quis fermentum eros
              iaculis.
            </p>
          </div>
          <div>
            <div>
              <img
                src="/images/tile-roof-installation.jpg"
                alt="Tile Roof Installation"
              />
            </div>
            <h3>Tile Roof</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis odio auctor tortor venenatis, quis fermentum eros
              iaculis.
            </p>
          </div>
        </div>
        <p className="lead">Get in touch for a free estimate and inspection</p>
        <Link href="tel:0294363006">
          <a className="btn-main">Contact us now</a>
        </Link>
      </section>
    </div>
  );
};

export default HowCanWeHelp;
