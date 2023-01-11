import React from 'react'

import classnames from "classnames";

import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cupiditate."
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cupiditate."
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cupiditate."
  }
];

function AboutUs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);

  return (
    <div
      className="section section-download "
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h1 className="title">
              ABOUT US
            </h1>
            <h4 className="description">
              Branding and Relations cell is a student body under the aegis of the Office of Alumni Affairs and International Relations. It aims towards positioning IIT Kharagpur as a global leader in the field of science and technology.
            </h4>
            <Card>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits. <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </p>
                  </TabPane>
                  <TabPane tabId="link2">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </TabPane>
                  <TabPane tabId="link3">
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
              <CardHeader style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Nav className="nav-tabs-success" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href='#'
                    >
                      2017
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5
                      })}
                      onClick={(e) => setTextTabs(5)}
                      href="#"
                    >
                      2018
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6
                      })}
                      onClick={(e) => setTextTabs(6)}
                      href="#pablo"
                    >
                      2019
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
            </Card>
            <h3 className="title">
              Young Innovators' Program Stats
            </h3>
          </Col>
          {/* <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section"
              role="button"
              size="lg"
            >
              Download React
            </Button>
          </Col> */}

          {/* gallery */}
          <Col lg="8" style={{ marginTop: "10rem" }}>
            <h1 className='text-center'>
              Gallery
            </h1>
            <UncontrolledCarousel
              items={carouselItems}
              indicators={false}
              autoPlay={true}
            />
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default AboutUs