import styles from './Main.module.scss';
import classnames from 'classnames';
import Link from 'next/link';

const HowCanWeHelp = () => {
  return (
    <div>
      <section id="how-can-we-help" className="text-center py-2">
        <h2 className="section-title">How Can We Help You?</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          We take pride in what we do. No other roofing company can offer you
          this strata specialist support team !
        </p>
        <div className={classnames(styles.specials)}>
          <div>
            <div>
              <img src="https://via.placeholder.com/468x400?text=Flat Roof" />
            </div>
            <h3>Flat Roofs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis odio auctor tortor venenatis, quis fermentum eros
              iaculis.
            </p>
          </div>
          <div>
            <div>
              <img src="https://via.placeholder.com/468x400?text=Commercial Roofing" />
            </div>
            <h3>Commercial Roofing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis odio auctor tortor venenatis, quis fermentum eros
              iaculis.
            </p>
          </div>
          <div>
            <div>
              <img src="https://via.placeholder.com/468x400?text=Gutter Replacement" />
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
              <img src="https://via.placeholder.com/468x400?text=Siding Renovation" />
            </div>
            <h3>Siding Renovation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis odio auctor tortor venenatis, quis fermentum eros
              iaculis.
            </p>
          </div>
        </div>
        <p className="lead">Get in touch for a free estimate and inspection</p>
        <Link href="/contact">
          <a className="btn-main">Contact us now</a>
        </Link>
      </section>
    </div>
  );
};

export default HowCanWeHelp;
