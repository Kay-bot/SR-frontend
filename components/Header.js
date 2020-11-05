import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { signout, isAuth } from '../actions/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classnames from 'classnames';
import styles from './Main.module.scss';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className={classnames('text-center', styles['top'])}>
        <p className="pt-1">
          Professional Roofing Services throughout the Sydney Area{' '}
        </p>
      </div>
      <div
        className={classnames('text-light py-1', styles['secondary-header'])}
      >
        <div className="text-center">
          <Link href="/">
            <img src="/images/logo2.png" alt="Strata Roofing" />
          </Link>
        </div>

        <div className="py-5 d-flex">
          <div>
            <i className="fas fa-phone fa-2x"></i>
          </div>
          <div>
            <a href="tel:0294363006">
              <b>02 9436 3006</b>
            </a>
          </div>
        </div>
        <div className="py-5 d-flex">
          <div>
            <i className="fas fa-envelope-square fa-2x"></i>
          </div>
          <div>
            <a href="mailto:service@strataroofing.com.au">
              <b>Service@strataroofing.com.au</b>
            </a>
          </div>
        </div>
        <div className={classnames('py-5 d-flex')}>
          <div>
            <img
              className={classnames(styles.img)}
              src="/images/trademan.png"
            />
          </div>
          <div>
            <b>Servicing all of metro Sydney - Everyday</b>
          </div>
        </div>
      </div>

      {/* Mobile responsive */}

      <div
        className={classnames(
          'text-light d-lg-none d-xl-none',
          styles['secondary-header-responsive']
        )}
      >
        <div>
          <Link href="/">
            <img src="/images/logo2.png" alt="Strata Roofing" />
          </Link>
        </div>

        <div>
          <a href="tel:0294363006">
            <p>Tel: 02 9436 3006</p>
          </a>
        </div>
        <div>
          <a href="mailto:service@strataroofing.com.au">
            <p>Email: Service@strataroofing.com.au</p>
          </a>
        </div>

        <div>
          <p>Servicing all of metro Sydney - Everyday</p>
        </div>
      </div>

      <Navbar
        className={classnames('mx-auto py-4', styles['border-bottom'])}
        color="#fff"
        light
        expand="md"
      >
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/our-services">
                <NavLink>Our Services</NavLink>
              </Link>
            </NavItem>

            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/preventative-maintenance">
                <NavLink>Preventative Maintenance</NavLink>
              </Link>
            </NavItem>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/gallery">
                <NavLink>Gallery</NavLink>
              </Link>
            </NavItem> */}
        {/* <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/contact-us">
                <NavLink>Contact Us</NavLink>
              </Link>
            </NavItem> */}
        {/* {!isAuth() && (
              <React.Fragment>
                <NavItem className={classnames('text-center', styles.navLink)}>
                  <Link href="/signin">
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem className={classnames('text-center', styles.navLink)}>
                  <Link href="/signup">
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )} */}
        {/* {isAuth() && (
              <NavItem className={classnames('text-center', styles.navLink)}>
                <NavLink
                  onClick={() => signout(() => Router.replace('/signin'))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )} */}

        {isAuth() && isAuth().role === 1 && (
          <NavItem className={classnames('text-center', styles.navLink)}>
            <Link href="/admin">
              <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
            </Link>
          </NavItem>
        )}

        {isAuth() && (
          <NavItem className={classnames('text-center', styles.navLink)}>
            <NavLink
              style={{ cursor: 'pointer' }}
              onClick={() => signout(() => Router.replace(`/signin`))}
            >
              Signout
            </NavLink>
          </NavItem>
        )}
        {/* </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
