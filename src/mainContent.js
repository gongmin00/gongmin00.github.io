import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import mainTitle from "./images/main-title.svg";
import regButton from "./images/Reg-button.svg";
import sectionOneImg from "./images/section-1-img2.png";
import sectionTwoImg from "./images/section-2-img(1).png";
// import sectionTwoIcon from "./images/section-2-icon.png";
// import sectionTwoIcon from "./images/section-2-icon.png";
import sectionTwoIcon1 from "./images/section-2-icon-1.svg";
import sectionTwoIcon2 from "./images/section-2-icon-2.svg";
import sectionTwoIcon3 from "./images/section-2-icon-3.svg";
import sectionThreeRectangle from "./images/section-3-ret.png";
import sectionThreeImg from "./images/section-3-img.svg";
import sectionThreeImgIcon from "./images/section-3-img-icon.png";
import sectionThreeImg2 from "./images/section-3-img2.svg";
import sectionThreeImg2Icon from "./images/section-3-img2-icon.png";
// import sectionFourBtn from "./images/section-4-btn.png";
import sectionFourImg from "./images/section-4-img.png";
import sectionFourImg2 from "./images/section-4-img2.png";
import sectionFiveIcon from "./images/section-5-icon.png";
import Timer from "./components/countdown timer/timer";
// import section7Img from "./images/section-7-avatar.png";
// import section8Img from "./images/section-8-img.png";
import section10Icon from "./images/section-10-icon.svg";
import section10Icon2 from "./images/section-10-icon2.svg";
// import section11Img from "./images/sponsor-1.png";
// import section11Img2 from "./images/sponsor-2.png";
import section11Img3 from "./images/section-11-img.png";
import Judging from "./components/judging";
const MainContent = () => {
  // function checkLocation(){
  //   let location = useLocation()
  //   console.log(location)
  // }

  return (
    <div className="content-container">
      <div className="section-1">
        <div className="section-1-placeholder"></div>
        <Container className="section-1-content">
          <Row>
            <Col sm="12" md="12" lg="7" xl="8">
              <div>
                <div className="section-1-title">
                  {/* <img
                    className="main-title"
                    src={mainTitle}
                    alt="main title"
                    style={{ width: "100%" }}
                  /> */}
                  <div className="section-1-maintitle-container">
                    <div className="main-title1">The</div>
                    <div className="main-title2">
                      <div className="main-title2-item1">OPPO</div>
                      <div className="main-title2-item2">Hack</div>
                    </div>
                    <div className="main-title1">
                      Global Innovation Competition
                    </div>
                    <div className="main-title1">is finally here!</div>
                  </div>
                  <img
                    className="mobile-section-1-img"
                    src={sectionOneImg}
                    alt="section-1-img"
                    style={{ width: "45%" }}
                  />
                  <div className="section-1-paragraph">
                    A hackathon is a design sprint-like event in which computer
                    programmers, designers, project managers, domain experts,
                    and others collaborate intensively on software projects. The
                    OPPOHack Global Innovation Competition aims to build an
                    international platform for entrepreneurship and
                    next-generation innovation.
                  </div>
                </div>
                <a href="https://event.hackhub.com/event/oppohack2021">
                  <Button className="section-1-btn">
                    <img src={regButton} alt="Register Button" />
                  </Button>
                </a>
              </div>
            </Col>
            <Col sm="12" md="12" lg="5" xl="4">
              <img
                className="section-1-img"
                src={sectionOneImg}
                alt="section-1-img"
                style={{ width: "90%" }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="section-1-timer">
                <Timer />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="section-2-content">
        <Row>
          <Col sm="12" md="12" lg="6">
            <div className="section-2-img-container">
              <img
                className="section-2-img"
                src={sectionTwoImg}
                alt="section two img"
                style={{ width: "80%" }}
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
              With interactive workshops, networking events, a bounty of prizes,
              and investment opportunities, OPPOHack welcomes the participation
              of hackers, designers, engineers, and tech enthusiasts from around
              the world.
            </div>
            <div className="section-2-paragraph">
              This year, the competition revolves around the concept of
              “Sensation and Perception” and Four sub-themes: Connected Car
              System, Immersive Experience (AR/VR & Gaming), Robotics & Ai, and
              Mobile Application.
            </div>
          </Col>
        </Row>
        <Row className="section-2-icons">
          <Col sm="4" md="4" lg="4" className="section-2-icons-container">
            <div className="section-2-icon-text">Connected Car</div>
            <div className="section-2-icon-img-container">
              <img
                className="section-2-icons-img"
                src={sectionTwoIcon1}
                alt="section-2-icon"
              />
            </div>
          </Col>
          <Col sm="4" md="4" lg="4" className="section-2-icons-container">
            <div className="section-2-icon-text">AR/VR & Gaming</div>
            <div className="section-2-icon-img-container">
              <img
                className="section-2-icons-img"
                src={sectionTwoIcon2}
                alt="section-2-icon"
              />
            </div>
          </Col>
          <Col sm="4" md="4" lg="4" className="section-2-icons-container">
            <div className="section-2-icon-text">Robotics</div>
            <div className="section-2-icon-img-container">
              <img
                className="section-2-icons-img"
                src={sectionTwoIcon3}
                alt="section-2-icon"
              />
            </div>
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
              <div className="section-3-img-icon">
                <img
                  className="section-3-icon"
                  src={sectionThreeImgIcon}
                  alt="section-3-img-icon"
                  style={{ paddingRight: "20px" }}
                />
                Seeding Group
              </div>
              <div className="section-3-img">
                <img
                  src={sectionThreeImg}
                  alt="section-3-img"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="section-3-img-icon">
                <img
                  className="section-3-icon"
                  src={sectionThreeImg2Icon}
                  alt="section-3-img2-icon"
                  style={{ paddingRight: "20px" }}
                />
                Growing Group
              </div>
              <div className="section-3-img">
                <img
                  src={sectionThreeImg2}
                  alt="section-3-img2"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              {/* <div className="section-3-subtitle">
                Seeding from $8000, $5000, $2000.
              </div> */}
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
            <div id="section-4-content" className="section-4-heading">
              EVENT SCHEDULE
              <div className="section-4-rectangle">
                <img
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="section-4-subtitle-container" sm="12" md="12" lg="12">
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
            {/* <div className="section-4-btn">
              <a href="https://event.hackhub.com/event/oppohack2021">
                <img
                  className="section-4-btn-img"
                  src={sectionFourBtn}
                  style={{ width: "100%" }}
                  alt="section-4-btn"
                />
              </a>
            </div> */}
            <div className="section-4-img">
              <img
                src={sectionFourImg}
                style={{ width: "70%" }}
                alt="section-4-img"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading3">
              PARTICIPANT AND PROJECTELIGIBILITY
              <div className="section-5-rectangle">
                <img
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
            <div className="section-4-paragraph">
              Individuals aged 18 and above or entrepreneurs who have engaged in
              the industry for less than 6 years are welcome to sign up. Upon
              registration, contestants will choose one or more themes and
              select to participate in either the "Seeding Group" or "Growing
              Group". Scrutinies will be conducted throughout the entire
              competition.
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="section-5-container">
        <Row>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="10" lg="10">
            <div className="section-5-icon-text">
              Participants cannot be the lead for more than one team or entry
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px" }}
        >
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col Col xs="10" sm="10" md="10" lg="10">
            <div div className="section-5-icon-text">
              The project is one of the following:
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px", flexWrap: "unset" }}
        >
          <Col xs="1" sm="1" md="1" lg="1"></Col>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="9" sm="9" md="9" lg="9">
            <div className="section-5-icon-text">
              An innovative product or service involving new technology
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px", flexWrap: "unset" }}
        >
          <Col xs="1" sm="1" md="1" lg="1"></Col>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="9" sm="9" md="9" lg="9">
            <div className="section-5-icon-text">
              A hybrid of existing technologies that represents new intellectual
              property
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px", flexWrap: "unset" }}
        >
          <Col xs="1" sm="1" md="1" lg="1"></Col>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="9" sm="9" md="9" lg="9">
            <div className="section-5-icon-text">
              The utilization of existing technologies to create new products or
              services or to improve existing ones
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px", flexWrap: "unset" }}
        >
          <Col xs="1" sm="1" md="1" lg="1"></Col>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="9" sm="9" md="9" lg="9">
            <div className="section-5-icon-text">
              A technological advance that enables the development of new and
              enhanced production processes
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px", flexWrap: "unset" }}
        >
          <Col xs="1" sm="1" md="1" lg="1"></Col>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="9" sm="9" md="9" lg="9">
            <div className="section-5-icon-text">
              The early-stage development of a new technology
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px", flexWrap: "unset" }}
        >
          <Col xs="1" sm="1" md="1" lg="1"></Col>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="9" sm="9" md="9" lg="9">
            <div className="section-5-icon-text">
              The project does not need to be an existing company
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px", flexWrap: "unset" }}
        >
          <Col xs="1" sm="1" md="1" lg="1"></Col>
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="9" sm="9" md="9" lg="9">
            <div className="section-5-icon-text">
              All project materials should be in English
            </div>
          </Col>
        </Row>
        {/* <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px" }}
        >
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="10" lg="10">
            <div className="section-5-icon-text">
              A hybridization of existing technologies results in a novel
              Intellectual Property
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px" }}
        >
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="10" lg="10">
            <div className="section-5-icon-text">
              Technologies are utilized in order to create new products or
              services or to improve existing ones
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px" }}
        >
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="10" lg="10">
            <div className="section-5-icon-text">
              Technological advances enable new and enhanced production
              processes to be developed
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px" }}
        >
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="10" lg="10">
            <div className="section-5-icon-text">
              It is the early-stage development of a new Technology
            </div>
          </Col>
        </Row>
        <Row
          className="section-5-icon-text-container"
          style={{ marginTop: "22px" }}
        >
          <Col xs="2" sm="2" md="2" lg="2">
            <div className="section-5-img-container">
              <img
                className="section-5-icon"
                src={sectionFiveIcon}
                alt="section-5-icon"
                // style={{ textAlign:"right" }}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="10" lg="10">
            <div className="section-5-icon-text">
              No need to be incorporated, everything should be in English
            </div>
          </Col>
        </Row> */}
        <Row
          className="section-5-cards"
          style={{ marginTop: "134px", justifyContent: "center" }}
        >
          <Col className="section-5-cards-item1" sm="6" md="5" lg="5">
            <div className="section-3-img-icon section-5-img-icon">
              <img
                className="section-5-icon-img"
                src={sectionThreeImgIcon}
                alt="section-3-img-icon"
                style={{ paddingRight: "20px" }}
              />
              Seeding Group
            </div>
            <div className="section-5-text-container">
              <div className="section-5-text">
                Project should be under 24 months old.
              </div>
              <div className="section-5-text">
                Project or company has not received non-grant funding from any
                source.
              </div>
              {/* <div className="section-5-text">Ticket price: $ 20.</div> */}
            </div>
          </Col>
          {/* <Col md="0" lg="1"></Col> */}
          <Col className="section-5-cards-item2" sm="6" md="5" lg="5">
            <div className="section-3-img-icon section-5-img-icon">
              <img
                className="section-5-icon-img"
                src={sectionThreeImg2Icon}
                alt="section-3-img2-icon"
                style={{ paddingRight: "20px" }}
              />
              Growing Group
            </div>
            <div className="section-5-text-container2">
              <div className="section-5-text">
                Project should be under 5 years old.
              </div>
              <div className="section-5-text">
                Project or company has not received more than $1,000,000
                non-grant funding from any source.
              </div>
              {/* <div className="section-5-text">Ticket price: $ 50.</div> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div
              className="section-4-img2-container"
              style={{ display: "flex", justifyContent: "cent" }}
            >
              <img
                src={sectionFourImg2}
                alt="section-3-rectangle"
                style={{ width: "100%" }}
              />
            </div>
            <a href="https://event.hackhub.com/event/oppohack2021">
              <div className="section-5-btn-container">
                <img
                  className="section-5-btn"
                  src={regButton}
                  style={{ width: "100%" }}
                  alt="section-5-img"
                />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
      <Judging />
      {/* <Container className="section-7-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading3">
              SPEAKERS
              <div className="section-3-rectangle">
                <img
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="4">
            <div className="section-7-team">
              <img
                src={section7Img}
                alt="section-7-img"
                style={{ width: "100%", borderRadius: "500px" }}
              />
              <div className="section-7-title">Speaker Abby</div>
              <div className="section-7-intro">
                Short desciption about speaker Abby and contact information
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="4">
            <div className="section-7-team">
              <img
                src={section7Img}
                alt="section-7-img"
                style={{ width: "100%", borderRadius: "500px" }}
              />
              <div className="section-7-title">Speaker Bernart</div>
              <div className="section-7-intro">
                Short desciption about speaker Bernart and contact information
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="4">
            <div className="section-7-team">
              <img
                src={section7Img}
                alt="section-7-img"
                style={{ width: "100%", borderRadius: "500px" }}
              />
              <div className="section-7-title">Speaker Chloe</div>
              <div className="section-7-intro">
                Short desciption about speaker Chloe and contact information
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
      {/* <Container className="section-8-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading3">
              WORKSHOP HIGHLIGHT
              <div className="section-3-rectangle">
                <img
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
            <div className="section-8-img">
              <img
                src={section8Img}
                alt="section-8-img"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container className="section-9-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-9-heading3">
              FAQ
              <div className="section-9-rectangle">
                <img
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="6">
            <div className="section-9-text-container">
              <div className="section-9-title">Who can participate?</div>
              <div className="section-9-text">
                OPPOHack welcomes those who are interested in technology and
                innovation and have an interesting project or idea that fits the
                eligibility requirements. You can compete as an individual or as
                a group.
              </div>
            </div>
            <div className="section-9-text-container">
              <div className="section-9-title section-9-title-spec">
                How to become a sponsor?
              </div>
              <div className="section-9-text">
                Due to the large amount of registrations received, the
                preliminary screening will take place from June 1, 2021 to
                August 1, 2021. Finalists will receive a confirmation email from
                OPPOHack, inviting them to join the final virtual roadshow
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="6">
            <div className="section-9-text-container">
              <div className="section-9-title">
                Should I compete in the Seeding Group or the Growing Group?
              </div>
              <div className="section-9-text">
                Upon registration, you will need to choose whether you wish to
                compete in the Seeding Group or the Growing Group. Register for
                the Seeding Group if your project/idea is at a relatively early
                stage in the creative process (e.g., Your project is under 24
                months old). Register for the Growing Group if your project is
                over 24 months old or has raised some funds. Contact us if you
                are not sure which group you should register for.
              </div>
            </div>
            {/* <div className="section-9-text-container">
              <div className="section-9-title">How to become a sponsor?</div>
              <div className="section-9-text">
                Due to the large amount of registrations received, the
                preliminary screening will be ongoing from June 1st, 2021 to
                August 1st, 2021. Finalists will receive a confirmation email
                from OPPOHack, inviting them to join the final virtual roadshow.
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
      <Container className="section-10-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-10-content">
              <div className="section-10-heading">Organizers</div>
              <div className="section-10-title">
                <div style={{ color: "#3FB24F", fontSize: "22px" }}>Host</div>
                <img
                  className="section-10-img"
                  src={section10Icon}
                  alt="section-9-icon"
                  style={{ paddingLeft: "12px" }}
                />
              </div>
              <div className="section-9-text">
                Founded in 2004, OPPO is the world's leading smart device brand
                and innovator, and one of the top smartphone brands globally.
                Our business covers 40+ countries and regions in 6 continents,
                with 40,000+ employees, 80+ top operator partners, and 400,000+
                retail outlets around the world. OPPO is aiming to leap into the
                future, and rigorously build an loT ecosystem, and to become a
                leader in a fully connected intelligent world.
              </div>
              <div className="section-10-title2">
                <div style={{ color: "#73E4E1", fontSize: "22px" }}>
                  Event partner
                </div>
                <img
                  className="section-10-img2"
                  src={section10Icon2}
                  alt="section-9-icon2"
                  style={{ paddingLeft: "12px" }}
                />
              </div>
              <div className="section-9-text">
                HackHub is a cloud-base smart competition platform founded by a
                team of hackathon enthusiasts from North America. Since 2016, it
                has hosted hundreds of competitions around the world based on
                themes of education, finance, medical care, artificial
                intelligence, and blockchain, gathering world-class innovators,
                designers, and programmers.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="section-11-container">
        {/* <div className="section-11-heading">Sponsors</div> */}
        {/* <Row>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img} alt="sponsor-1" />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img} alt="sponsor-1" />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img} alt="sponsor-1" />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img} alt="sponsor-1" />
          </Col>
        </Row>
        <Row style={{ marginTop: "73px" }}>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img2} alt="sponsor-1" />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img2} alt="sponsor-1" />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img2} alt="sponsor-1" />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="3"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <img src={section11Img2} alt="sponsor-1" />
          </Col>
        </Row> */}
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-11-img-container">
              <img
                src={section11Img3}
                alt="section-11-img"
                style={{ width: "60%", height: "60%" }}
              />
            </div>

            <div className="section-11-btn-container">
              <a href="https://event.hackhub.com/event/oppohack2021">
                <Button className="section-1-btn">
                  <img src={regButton} alt="Register Button" />
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MainContent;
