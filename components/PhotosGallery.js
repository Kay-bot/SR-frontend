import classnames from 'classnames';
import styles from './Main.module.scss';

const PhotoGallery = () => {
  return (
    <div>
      <section>
        <header className={classnames(styles['gallery-header'])}>
          <div className={classnames(styles['header-content'])}>
            <h1>We’ve got you covered!</h1>
            <p className="lead">
              We are 100% compliant, strata owners and managers can be totally
              confident that we have all the insurances in place.
            </p>
          </div>
        </header>
      </section>

      <section
        id="gallery"
        className={classnames('text-center px-5 py-3', styles['gallery'])}
      >
        <h2 className="section-title">Our Project Gallery</h2>
        <div className="bottom-line"></div>

        <div className={classnames(styles['header-title'])}>
          <h2>Gutters</h2>
        </div>
        <div className={classnames(styles['service-group'])}>
          <img src="/gallery/gutter1.jpg" alt="gutter installation" />
          <img src="/gallery/gutter2.jpg" alt="gutter clearance" />
          <img src="/gallery/gutter3.jpg" alt="gutter replacement" />
          <img src="/gallery/gutter4.jpg" alt="gutter maintenance" />
        </div>

        <div className={classnames(styles['header-title'])}>
          <h2>Tile Roofs</h2>
        </div>
        <div className={classnames(styles['service-group'])}>
          <img src="/gallery/tile1.jpg" alt="tile roof installation" />
          <img src="/gallery/tile2.jpg" alt="tile roof repair" />
          <img src="/gallery/tile3.jpg" alt="tile roof replacement" />
          <img src="/gallery/tiles4.jpg" alt="Sydney roofer service" />
        </div>

        <div className={classnames(styles['header-title'])}>
          <h2>Membranne & Metal Roof</h2>
        </div>
        <div className={classnames(styles['service-group'])}>
          <img src="/gallery/membrane.jpg" alt="tile roof installation" />
          <img src="/gallery/membrane2.jpg" alt="tile roof repair" />
          <img src="/gallery/metal.jpg" alt="metal roof replacement" />
        </div>

        <div className={classnames(styles['header-title'])}>
          <h2>Roof Installation</h2>
        </div>
        <div className={classnames(styles['service-group'])}>
          <img
            src="/gallery/roof-installation-monier.jpg"
            alt="roof installation"
          />
          <img
            src="/gallery/roof-rails-RTAA.jpg"
            alt="Roof rails intallation service"
          />
          <img
            src="/gallery/roof-safety-monier.jpg"
            alt="Sydney roof replacement"
          />
        </div>

        <h2 className="section-title">Oue Selected Suplier Partners</h2>
        <div className="bottom-line"></div>
        <div>
          <p>Mark / Jira to provide contents</p>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;
