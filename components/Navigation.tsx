import Headroom from 'headroom.js';
import { useEffect, useState } from 'react';
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
  UncontrolledCollapse,
} from 'reactstrap';
import { greetings, socialLinks } from '../portfolio';

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => setCollapseClasses('collapsing-out');

  const onExited = () => setCollapseClasses('');

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main')!);
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-grings headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {socialLinks.facebook && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Facebook"
                      className="nav-link-icon"
                      href={socialLinks.facebook}
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.instagram && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Instagram"
                      className="nav-link-icon"
                      href={socialLinks.instagram}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.twitter && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Twitter"
                      className="nav-link-icon"
                      href={socialLinks.twitter}
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.whatsapp && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Whatsapp"
                      className="nav-link-icon"
                      href={socialLinks.whatsapp}
                      target="_blank"
                    >
                      <i className="fa fa-whatsapp" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Whatsapp
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.gmail && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Gmail"
                      className="nav-link-icon"
                      href={socialLinks.gmail}
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Gmail
                      </span>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
