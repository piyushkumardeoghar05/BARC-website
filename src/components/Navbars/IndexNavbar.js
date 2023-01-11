/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  Modal,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  // const scrollToDownload = () => {
  //   document
  //     .getElementById("download-section")
  //     .scrollIntoView({ behavior: "smooth" });
  // };
  const [yipModal, setYipModal] = React.useState(false);
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <span>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src="https://media.licdn.com/dms/image/C560BAQFN-Zh5_de4xw/company-logo_200_200/0/1519863850658?e=2147483647&v=beta&t=HhcfUmLyNCQMYRztLNHCzfpb8QJWCxb1EosGDf04P-w"
              style={{ width: "40px", margin: "0.4rem" }}
            />
          </span>
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span style={{ margin: "0.3rem" }}>BARC </span>
            IIT Kharagpur
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Branding and Relations Cell, Indian Institute of Technology, Kharagpur
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Branding and Relations Cell
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>

            </NavItem> */}
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/barciitkgp/"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/barc_iitkgp/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/company/brandingandrelationscell/mycompany/"
                rel="noopener noreferrer"
                target="_blank"
                title="Connect with us on Linked in"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Getting started
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-paper" />
                  Documentation
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                  <i className="tim-icons icon-image-02" />
                  Landing Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02" />
                  Profile Page
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem className="p-0">
              <Button
                data-placement="bottom"
                rel="noopener noreferrer"
                className="nav-link d-none d-lg-block"
                color="success"
                onClick={() => setYipModal(true)}
              >
                {/* <i className="tim-icons icon-spaceship" />  */}
                <span className="p-1">Young Innovators Program <i className="tim-icons icon-bulb-63 mx-1" /></span>
                <p className="d-lg-none d-xl-none">Young Innovators Program</p>
                </Button>
            </NavItem>
            {/* <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={scrollToDownload}
              >
                <i className="tim-icons icon-cloud-download-93" /> Download
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
      <Modal modalClassName="modal-black" isOpen={yipModal} toggle={() => setYipModal(false)}>
        <div className="modal-header justify-content-center">
          <button className="close" onClick={() => setYipModal(false)}>
            <i className="tim-icons icon-simple-remove" />
          </button>
          <h4 className="title title-up">Young Innovators Program (YIP)</h4>
        </div>
        <div className="modal-body">
          <p>
            Young Innovator's Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. IIT Kharagpur has launched this program with a motive of recognizing students with creative ability to conduct scientific research. In a two day visit to IIT Kharagpur, the students will get a chance to explore the scientific environment within and an opportunity to present their projects in front of distinguished researches and guests.
          </p>
        </div>
        <div className="modal-footer">
          <Button color="success" type="button" href="https://yip.iitkgp.ac.in/" target='_blank'>
            Visit YIP's website
          </Button>
          <Button
            color="danger"
            type="button"
            onClick={() => setYipModal(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </Navbar>
  );
}
