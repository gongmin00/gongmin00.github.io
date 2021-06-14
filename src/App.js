import React from "react";
import NavBar from "./components/navBar";
import { Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mainTitle from "./images/main-title.png";
import regButton from "./images/Reg-button.png";
import sectionOneImg from "./images/section-1-img2.png";
import sectionTwoImg from "./images/section-2-img(1).png";
import sectionTwoIcon from "./images/section-2-icon.png";
// import sectionTwoIcon from "./images/section-2-icon.png";
import sectionThreeRectangle from "./images/section-3-ret.png";
import sectionThreeImg from "./images/section-3-img.png";
import sectionFourBtn from "./images/section-4-btn.png";
import sectionFourImg from "./images/section-4-img.png";
import sectionFourTimer from "./images/section-4-timer.png";
import sectionFourImg2 from "./images/section-4-img2.png";
import sectionFiveImg from "./images/section-5-img.png";
const App = () => {
  return (
    <div className="main-container">
      <div className="section-1">
        <NavBar />
        <div className="section-1-placeholder"></div>
        <Container className="section-1-content">
          <Row>
            <Col sm="12" md="12" lg="7" xl="8">
              <div className="section-1-title">
                <img
                  src={mainTitle}
                  alt="main title"
                  style={{ width: "100%" }}
                />
                <div className="section-1-paragraph">
                  A hackathon is a sprint-like event in which computer
                  programmers, designers, project managers, domain experts, and
                  others collaborate intensively on software projects. OPPOHack
                  Global Innovation Competition aims to build an international
                  platform for entrepreneurship and next-generation innovation.
                </div>
                <Button className="section-1-btn">
                  <img src={regButton} alt="Register Button" />
                </Button>
              </div>
            </Col>
            <Col sm="12" md="12" lg="5" xl="4">
              <img
                className="section-1-img"
                src={sectionOneImg}
                alt="section-1-img2"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="section-2-content">
        <Row>
          <Col sm="12" md="12" lg="6">
            <div className="section-2-img-container">
              <img
                src={sectionTwoImg}
                alt="section two img"
                style={{ width: "100%" }}
              />
            </div>
            {/* <div className="section-2-icon">
              <img src={sectionTwoIcon} alt="section two icon" style={{width:"100%"}}/>
            </div> */}
          </Col>
          <Col sm="12" md="12" lg="6">
            <div className="section-2-heading">
              <div className="section-2-heading-item1">We</div>
              <div
                className="section-2-heading-item1"
                style={{ paddingLeft: "10px" }}
              >
                create,
              </div>
              <div
                className="section-2-heading-item2"
                style={{ paddingLeft: "10px" }}
              >
                therefore
              </div>
              <div
                className="section-2-heading-item2"
                style={{ paddingLeft: "10px" }}
              >
                we
              </div>
              <div
                className="section-2-heading-item2"
                style={{ paddingLeft: "10px" }}
              >
                are.
              </div>
            </div>
            <div className="section-2-paragraph">
              With interactive workshops, networking activities, a bounty of
              prizes, and previous investment opportunities, OPPOHack Global
              Innovation Competition is ready to welcome hackers, designers,
              engineers, and tech enthusiasts to our international event of the
              year.
            </div>
            <div className="section-2-paragraph">
              This year, the competition revolves around the concept of
              “Sensation and Perception” along with three sub-themes of
              Connected Car System, Immersive Experience (AR/VR & Gaming), and
              Robotics.
            </div>
          </Col>
        </Row>
        <Row className="section-2-icons">
          <Col>
            <img
              src={sectionTwoIcon}
              alt="section-2-icons"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
      <div className="section-3-container">
        <Container className="section-3-content">
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="section-3-heading">PRIZES & AWARDS</div>
              <div className="section-3-rectangle">
                <img
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="section-3-img">
                <img
                  src={sectionThreeImg}
                  alt="section-3-img"
                  style={{ width: "100%" }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="section-3-subtitle">
                Seeding from $8000, $5000, $2000.
              </div>
              <div className="section-3-subheading-container">
                <div className="section-3-subheading-item">And more</div>
                <div
                  className="section-3-subheading-item"
                  style={{ color: "#D8C03F" }}
                >
                  amazing gifts
                </div>
                <div className="section-3-subheading-item">
                  and prizes to be won!
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="section-4-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading">EVENT SCHEDULE</div>
            <div className="section-3-rectangle">
              <img
                src={sectionThreeRectangle}
                alt="section-3-rectangle"
                style={{ maxWidth: "500px" }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-subtitle">
              Preliminary Screening 2021/06/01 - 2021/08/01
            </div>
            <div className="section-4-subtitle">
              Finalist Announcement 2021/08/07 - 2021/08/08
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading2">Final Event Date</div>
            <div className="section-4-subtitle2">Saturday August 14, 2021</div>
            <div className="section-4-subtitle2">Sunday August 15, 2021</div>
            <div className="section-4-btn">
              <img
                src={sectionFourBtn}
                style={{ width: "100%" }}
                alt="section-4-btn"
              />
            </div>
            <div className="section-4-img">
              <img
                src={sectionFourImg}
                style={{ width: "100%" }}
                alt="section-4-img"
              />
            </div>
            <div className="section-4-timer">
              <img
                src={sectionFourTimer}
                alt="section-4-timer"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading3">PARTICIPANT ELIGIBILITY</div>
            <div className="section-3-rectangle">
              <img
                src={sectionThreeRectangle}
                alt="section-3-rectangle"
                style={{ maxWidth: "500px" }}
              />
            </div>
            <div className="section-4-paragraph">
              Individuals aged 18 and above or entrepreneurs who have engaged in
              the industry for less than 6 years are welcome to sign up. Upon
              registration, contestants will choose one or more themes and
              select to participate in either the "Seeding Group" or "Growing
              Group". Scrutinies will be conducted throughout the entire
              competition.
            </div>
            <div className="section-4-img2-container">
            <img
                src={sectionFourImg2}
                alt="section-3-rectangle"
                style={{ width:"100%" }}
              />
              </div>
          </Col>
        </Row>
      </Container>
      <Container className="section-5-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-5-img-container">
              <img className="section-5-img" src={sectionFiveImg}  style={{ width:"100%" }} alt="section-5-img"/>
            </div>
            <div className="section-5-btn-container">
              <img className="section-5-btn" src={regButton}  style={{ width:"100%" }} alt="section-5-img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default App;
