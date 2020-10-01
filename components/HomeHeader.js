import styles from './Main.module.scss';
import classnames from 'classnames';
import Link from 'next/link';

const HomeHeader = () => {
  return (
    <header className={classnames(styles['header-home'])}>
      <div className={classnames(styles['header-content'])}>
        <h1>“Not Just Another Roofing Company”</h1>
        <p className="lead">
          Meet the team that will turn roof problems into roof solutions.{' '}
        </p>
        <a href="tel:0294363006" className={classnames('btn-main')}>
          Call Us Now
        </a>
      </div>
    </header>
  );
};

export default HomeHeader;
