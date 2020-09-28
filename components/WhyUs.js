import classnames from 'classnames';
import styles from './Main.module.scss';

const OurFeatures = () => {
  return (
    <div>
      <section id="our-features" className="bg-light text-center py-3 mt-3">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="bottom-line"></div>

          <div className={classnames(styles['features'])}>
            <div>
              <i
                className={classnames(
                  'far fa-building fa-2x',
                  styles['icon-color']
                )}
              ></i>
              <h3>Professional Roofing</h3>
              <p>
                We deliver comprehensive roofing services across Sydney. Count
                on us for specialised installation replacement and repair of
                flat roofs, shingle roofs, seamless and gutters.{' '}
                <span>
                  <a href="/our-services">See more services...</a>
                </span>
              </p>
              <p>
                <span>
                  <a href="/contact">Contact</a>
                </span>{' '}
                us now for the perfect roof!
              </p>
            </div>
            <div>
              <i
                className={classnames(
                  'far fa-clock fa-2x',
                  styles['icon-color']
                )}
              ></i>
              <h3>On time on budget</h3>
              <p>
                Strata Roofing offers a range of quick and cost effective
                solutions. Our techicians will come by, assess your project, and
                give you a no-surprise estimate.
              </p>
              <p>
                <a href="/contact">Contact</a> us today. We’ll get it set up!
              </p>
            </div>
            <div>
              <i
                className={classnames(
                  'far fa-thumbs-up fa-2x',
                  styles['icon-color']
                )}
              ></i>
              <h3>Excellent Service</h3>
              <p>
                A great team of experienced and skilled roofers. Strata Roofing
                team never compromise on quality. Count on us for dependable and
                high quality services.{' '}
              </p>
              <p>
                Need a new roof or fast gutter replacement services?
                <a href="/contact"> Contact</a> us today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeatures;
