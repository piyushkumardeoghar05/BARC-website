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
import img from "./imageedit_2_8135454532.png";
import {
  Button,

} from "reactstrap";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  // const imagelink="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/304781043_459035782907181_6996099301085749352_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eMgZTDWymfIAX-Snv8u&_nc_ht=scontent-bom1-1.xx&oh=00_AfCo3QYagLXUgc0Y0Fg02cDyBUAX30WhFZO2TRDuBSd7Xg&oe=63BD3D20";
  // const imagelink2="https://media.licdn.com/dms/image/C560BAQFN-Zh5_de4xw/company-logo_200_200/0/1519863850658?e=2147483647&v=beta&t=HhcfUmLyNCQMYRztLNHCzfpb8QJWCxb1EosGDf04P-w"
  return (
    // <div className="page-header header-filter" >
    <div className="page-header header-filter" style={{backgroundImage:`url('${img}')`,backgroundSize:"cover"}}>
      {/* <div className="squares square1" ><img src={imagelink2} alt="" /></div>
      <div className="squares square2" ><img src={imagelink} alt="" /></div>
      <div className="squares square3" ><img src={imagelink2} alt="" /></div>
      <div className="squares square4" ><img src={imagelink} alt="" /></div>
      <div className="squares square5" ><img src={imagelink2} alt="" /></div>
      <div className="squares square6" ><img src={imagelink} alt="" /></div>
      <div className="squares square7" ><img src={imagelink2} alt="" /></div> */}
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo" >Branding and Relations Cell</h1>
          <h3 className="d-none d-sm-block">
            IIT Kharagpur
          </h3>

          <Button className="btn-round" size="lg" color="success" type="button" href="https://yip.iitkgp.ac.in/" target='_blank'>
              Young Innovator's Program
          </Button>
        </div>
      </Container>
    </div>
  );
}
