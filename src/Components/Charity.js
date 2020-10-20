import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="https://www.kleiderstiftung.de/fileadmin/_processed_/csm_platzhalter-kopfbereich-gespiegelt_8d4b42ffd7.jpg"
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">Clothing Foundation</MDBCardTitle>
              <MDBCardText>
                
                As a non-profit organization, the Deutsche Kleiderstiftung has been collecting, sorting and distributing used and new clothing for more than 60 years. With the clothing donations
                and the proceeds from recycling, we support clothing stores and social projects at home and abroad.
                With this we help people to live in warmth and dignity.
              </MDBCardText>
              <MDBBtn href="#" gradient="purple" rounded className="btn-success">
                BUTTON
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;
