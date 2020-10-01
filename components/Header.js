import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
            <b>02 9436 3006</b>
            <p>service@strataroofing.com.au</p>
          </div>
        </div>
        <div className="py-5 d-flex d-lg-flex d-md-none d-sm-none">
          <div>
            <i className="fas fa-home fa-2x"></i>
          </div>
          <div>
            <b>4th Fl. 44 Hampden Road</b>
            <p>Artarmon NSW 2064</p>
          </div>
        </div>
        <div className={classnames('py-5 d-flex')}>
          <div>
            <i className="fas fa-clock fa-2x"></i>
          </div>
          <div>
            <b>Office Hours</b>
            <p>Weekdays - 9am to 5pm</p>
          </div>
        </div>
      </div>
      <Navbar
        className={classnames(styles['border-bottom'])}
        color="#fff"
        light
        expand="md"
      >
        {/* <Link href="/">
          <NavbarBrand className={classnames('navbar-brand', styles.brand)}>
            <img alt="Strata Roofing" src="/images/logo.png" />
            <span>{APP_NAME}</span>
          </NavbarBrand>
        </Link> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown
              className={classnames('text-center', styles.navLink)}
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                Our Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink> Option 1</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink> Option 2</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink>Option 3</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink>Option 4</NavLink>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/preventative-maintenance">
                <NavLink>Preventative Maintenance</NavLink>
              </Link>
            </NavItem>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/gallery">
                <NavLink>Gallery</NavLink>
              </Link>
            </NavItem>
            {/* <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/contact">
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
