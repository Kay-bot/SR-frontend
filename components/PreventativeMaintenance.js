import classnames from 'classnames';
import styles from './Main.module.scss';

const PreventativeMaintenance = () => {
  return (
    <div>
      <section>
        <header className={classnames(styles['preventative-header'])}>
          <div className={classnames(styles['header-content'])}>
            <h1>Best Roof Reports – in Sydney!</h1>
            <p className="lead">
              We are told so often, by so many strata managers & strata
              committee members, that our photographic roof & gutter reports are
              the best, in Sydney by far!
            </p>
          </div>
        </header>
      </section>
    </div>
  );
};

export default PreventativeMaintenance;
