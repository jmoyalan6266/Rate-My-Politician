import React from "react";
import {MDBContainer, MDBFooter} from "mdbreact";

const FooterPage = () => {
  return (
      <MDBFooter>
      <div className="footer-copyright text-center py-3"
              style={{
                backgroundColor: '#333333'
                }}>

        <MDBContainer fluid>
        <p style = {{color:"white"}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.ratemypolitician.me/"> ratemypolitician.me </a>    
        </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;