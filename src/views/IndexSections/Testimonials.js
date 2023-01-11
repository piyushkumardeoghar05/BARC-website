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
import classnames from "classnames";
// plugin that creates slider
// import Slider from "nouislider";

// reactstrap components
// import {
//   Button,
//   Label,
//   FormGroup,
//   CustomInput,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col
// } from "reactstrap";

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
  NavLink
} from "reactstrap";

export default function Testimonials() {
  // const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="text-center" lg="12" md="12">
          <Card>
            {/* <img alt="..." className="path" src={require("assets/img/path3.png")} /> */}
            <h4 className="text-success text-center mt-5">WHAT PEOPLE HAVE TO SAY</h4>
            <h1 className="title text-center mt-0 fs-1">TESTIMONIALS</h1>
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
                    Partham Pratim Chakrabarti
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
                    Baidurya Bhattacharya
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6
                      })}
                      onClick={(e) => setTextTabs(6)}
                      href="#pablo"
                    >
                      Options
                    </NavLink>
                  </NavItem> */}
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent className="tab-space" activeTab={"link" + textTabs}>
                <TabPane tabId="link4" style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                  <p className="blockquote" style={{ color: "#00f2c3", borderColor: "#00f2c3" }}>
                    These cases are perfectly simple and easy to distinguish.
                    In a free hour, when our power of choice is untrammelled
                    and when nothing prevents our being able to do what we
                    like best, every pleasure is to be welcomed and every pain
                    avoided. <br />
                    But in certain circumstances and owing to the claims of
                    duty or the obligations of business it will frequently
                    occur that pleasures
                  </p>
                  <div className="text-white text-center m-3 fs-2 font-weight-bold">Partham Pratim Chakrabarti</div>
                  <div className="text-secondary text-center">Director, IIT Kharagpur</div>
                  {/* <div className="my-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Col sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/james.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
            </div> */}
                  <center>
                    <Col sm="3" xs="6" className="my-4">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/james.jpg")}
                        style={{ width: "150px" }}
                      />
                    </Col>
                  </center>
                </TabPane>
                <TabPane tabId="link5" style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                  <p className="blockquote" style={{ color: "#00f2c3", borderColor: "#00f2c3" }}>
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I
                    understand culture. I am the nucleus. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at. I think
                    that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at.
                  </p>
                  <div className="text-center text-white m-3 fs-2 font-weight-bold" style={{ fontSize: "1.2rem" }}>Baidurya Bhattacharya</div>
                  <div className="text-center text-light">Associate Dean, Alumni affairs and International Relations, IIT Kharagpur</div>
                  <center>
                    <Col sm="3" xs="6" className="my-4">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/mike.jpg")}
                        style={{ width: "150px" }}
                      />
                    </Col>
                  </center>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

// export default function Basics() {
//   const [inputFocus, setInputFocus] = React.useState(false);
//   const slider1 = React.useRef(null);
//   const slider2 = React.useRef(null);
//   React.useEffect(() => {
//     Slider.create(slider1.current, {
//       start: [40],
//       connect: [true, false],
//       step: 1,
//       range: { min: 0, max: 100 }
//     });
//     Slider.create(slider2.current, {
//       start: [20, 60],
//       connect: [false, true, false],
//       step: 1,
//       range: { min: 0, max: 100 }
//     });
//   }, []);
//   return (
//     <div className="section section-basic" id="basic-elements">
//       <img alt="..." className="path" src={require("assets/img/path1.png")} />
//       <Container>
//         <h2 className="title">Basic Elements</h2>
//         <h3>Buttons</h3>
//         <p className="category">Pick your style</p>
//         <Row>
//           <Col md="10">
//             <Button color="primary" type="button">
//               Default
//             </Button>
//             <Button className="btn-round" color="primary" type="button">
//               Round
//             </Button>
//             <Button className="btn-round" color="primary" type="button">
//               <i className="tim-icons icon-heart-2" />
//               With Icon
//             </Button>
//             <Button
//               className="btn-icon btn-round"
//               color="primary"
//               type="button"
//             >
//               <i className="tim-icons icon-heart-2" />
//             </Button>
//             <Button
//               className="btn-simple btn-round"
//               color="primary"
//               type="button"
//             >
//               Simple
//             </Button>
//           </Col>
//         </Row>
//         <p className="category">Pick your size</p>
//         <Row>
//           <Col md="10">
//             <Button color="primary" size="sm">
//               Small
//             </Button>
//             <Button color="primary">Regular</Button>
//             <Button color="primary" size="lg">
//               Large
//             </Button>
//           </Col>
//         </Row>
//         <p className="category">Pick your color</p>
//         <Row>
//           <Col md="12">
//             <Button color="default">Default</Button>
//             <Button color="primary">Primary</Button>
//             <Button color="info">Info</Button>
//             <Button color="success">Success</Button>
//             <Button color="warning">Warning</Button>
//             <Button color="danger">Danger</Button>
//             <Button className="btn-neutral" color="default">
//               Neutral
//             </Button>
//           </Col>
//         </Row>
//         <br />
//         <h3>Links</h3>
//         <Row>
//           <Col md="8">
//             <Button color="link">Default</Button>
//             <Button className="btn-link" color="primary">
//               Primary
//             </Button>
//             <Button className="btn-link" color="info">
//               Info
//             </Button>
//             <Button className="btn-link" color="success">
//               Success
//             </Button>
//             <Button className="btn-link" color="warning">
//               Warning
//             </Button>
//             <Button className="btn-link" color="danger">
//               Danger
//             </Button>
//           </Col>
//         </Row>
//         <div className="space-70" />
//         <div id="inputs">
//           <h3>Inputs</h3>
//           <p className="category">Form Controls</p>
//           <Row>
//             <Col lg="3" sm="6">
//               <FormGroup>
//                 <Input defaultValue="" placeholder="Regular" type="text" />
//               </FormGroup>
//             </Col>
//             <Col lg="3" sm="6">
//               <FormGroup className="has-success">
//                 <Input
//                   className="form-control-success"
//                   defaultValue="Success"
//                   type="text"
//                 />
//               </FormGroup>
//             </Col>
//             <Col lg="3" sm="6">
//               <FormGroup className="has-danger">
//                 <Input
//                   className="form-control-danger"
//                   defaultValue="Error Input"
//                   type="email"
//                 />
//               </FormGroup>
//             </Col>
//             <Col lg="3" sm="6">
//               <InputGroup
//                 className={classnames({
//                   "input-group-focus": inputFocus
//                 })}
//               >
//                 <InputGroupAddon addonType="prepend">
//                   <InputGroupText>
//                     <i className="fa fa-user" />
//                   </InputGroupText>
//                 </InputGroupAddon>
//                 <Input
//                   placeholder="Left Font Awesome Icon"
//                   type="text"
//                   onFocus={(e) => setInputFocus(true)}
//                   onBlur={(e) => setInputFocus(false)}
//                 />
//               </InputGroup>
//             </Col>
//             <Col lg="3" sm="6">
//               <InputGroup>
//                 <Input placeholder="Right Nucleo Icon" type="text" />
//                 <InputGroupAddon addonType="append">
//                   <InputGroupText>
//                     <i className="tim-icons icon-lock-circle" />
//                   </InputGroupText>
//                 </InputGroupAddon>
//               </InputGroup>
//             </Col>
//           </Row>
//         </div>
//         <div className="space-70" />
//         <Row id="checkRadios">
//           <Col lg="3" sm="6">
//             <p className="category">Checkboxes</p>
//             <FormGroup check>
//               <Label check>
//                 <Input type="checkbox" />
//                 <span className="form-check-sign" />
//                 Unchecked
//               </Label>
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                 <Input defaultChecked type="checkbox" />
//                 <span className="form-check-sign" />
//                 Checked
//               </Label>
//             </FormGroup>
//             <FormGroup check disabled>
//               <Label check>
//                 <Input disabled type="checkbox" />
//                 <span className="form-check-sign" />
//                 Disabled Unchecked
//               </Label>
//             </FormGroup>
//             <FormGroup check disabled>
//               <Label check>
//                 <Input defaultChecked disabled type="checkbox" />
//                 <span className="form-check-sign" />
//                 Disabled Checked
//               </Label>
//             </FormGroup>
//           </Col>
//           <Col lg="3" sm="6">
//             <p className="category">Radios</p>
//             <FormGroup check className="form-check-radio">
//               <Label check>
//                 <Input
//                   defaultValue="option1"
//                   id="exampleRadios1"
//                   name="exampleRadios"
//                   type="radio"
//                 />
//                 <span className="form-check-sign" />
//                 Radio is off
//               </Label>
//             </FormGroup>
//             <FormGroup check className="form-check-radio">
//               <Label check>
//                 <Input
//                   defaultChecked
//                   defaultValue="option2"
//                   id="exampleRadios1"
//                   name="exampleRadios"
//                   type="radio"
//                 />
//                 <span className="form-check-sign" />
//                 Radio is on
//               </Label>
//             </FormGroup>
//             <FormGroup check className="form-check-radio" disabled>
//               <Label check>
//                 <Input
//                   defaultValue="option3"
//                   disabled
//                   id="exampleRadios2"
//                   name="exampleRadios1"
//                   type="radio"
//                 />
//                 <span className="form-check-sign" />
//                 Disabled radio is off
//               </Label>
//             </FormGroup>
//             <FormGroup check className="form-check-radio" disabled>
//               <Label check>
//                 <Input
//                   defaultChecked
//                   defaultValue="option4"
//                   disabled
//                   id="exampleRadios2"
//                   name="exampleRadios1"
//                   type="radio"
//                 />
//                 <span className="form-check-sign" />
//                 Disabled radio is on
//               </Label>
//             </FormGroup>
//           </Col>
//           <Col lg="3" sm="6">
//             <p className="category">Toggle Buttons</p>
//             <CustomInput type="switch" id="switch-1" />
//             <br />
//             <CustomInput type="switch" id="switch-2" label="With label" />
//           </Col>
//           <Col lg="3" sm="6">
//             <p className="category">Sliders</p>
//             <div className="slider" ref={slider1} />
//             <br />
//             <div className="slider slider-info mb-3" ref={slider2} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
