import React from "react";
import NavBar from "./components/navBar";
import { Row, Col, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import mainTitle from "./images/main-title.svg";
import regButton from "./images/Reg-button.svg";
import sectionOneImg from "./images/section-1-img2.png";
import sectionTwoImg from "./images/section-2-img(1).png";
import sectionTwoIcon from "./images/section-2-icon.png";
// import sectionTwoIcon from "./images/section-2-icon.png";
import sectionThreeRectangle from "./images/section-3-ret.png";
import sectionThreeImg from "./images/section-3-img.png";
import sectionThreeImgIcon from "./images/section-3-img-icon.png";
import sectionThreeImg2 from "./images/section-3-img2.png";
import sectionThreeImg2Icon from "./images/section-3-img2-icon.png";
import sectionFourBtn from "./images/section-4-btn.png";
import sectionFourImg from "./images/section-4-img.png";
import sectionFourImg2 from "./images/section-4-img2.png";
import sectionFiveIcon from "./images/section-5-icon.png";
import Timer from "./components/countdown timer/timer";
import sectionSixImg from "./images/section-6-img.png";
// import section7Img from "./images/section-7-avatar.png";
// import section8Img from "./images/section-8-img.png";
import section10Icon from "./images/section-10-icon.svg";
import section10Icon2 from "./images/section-10-icon2.svg";
// import section11Img from "./images/sponsor-1.png";
// import section11Img2 from "./images/sponsor-2.png";
import section11Img3 from "./images/section-11-img.png";
import section12Icon from "./images/section-12-icon.svg";
import emailImg from "./images/mail 1.svg";
import facebookImg from "./images/facebook 1.svg";
import twitterImg from "./images/twitter 1.svg";
import instImg from "./images/inst 1.svg";
import MetaInfo from "./components/MetaInfo"

const App = () => {
  return (
    <div className="main-container">
      <MetaInfo />
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
                alt="section-1-img2"
                style={{width:"90%"}}
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
                  style={{ width: "70%" }}
                />
              </div>
              <div className="section-3-img-icon">
                <img
                  src={sectionThreeImgIcon}
                  alt="section-3-img-icon"
                  style={{ paddingRight: "20px" }}
                />
                Seeding Group
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="section-3-img">
                <img
                  src={sectionThreeImg2}
                  alt="section-3-img2"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="section-3-img-icon">
                <img
                  src={sectionThreeImg2Icon}
                  alt="section-3-img2-icon"
                  style={{ paddingRight: "20px" }}
                />
                Growing Group
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
            <div className="section-4-heading">
              EVENT SCHEDULE
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
            <div className="section-4-btn">
              <a href="https://event.hackhub.com/event/oppohack2021">
                <img
                  src={sectionFourBtn}
                  style={{ width: "100%" }}
                  alt="section-4-btn"
                />
              </a>
            </div>
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
              PARTICIPANT ELIGIBILITY
              <div className="section-3-rectangle">
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
        <Row style={{ marginTop: "22px" }}>
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
              It is an innovative product or Service involving new Technology
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "22px" }}>
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
        <Row style={{ marginTop: "22px" }}>
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
        <Row style={{ marginTop: "22px" }}>
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
        <Row style={{ marginTop: "22px" }}>
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
        <Row style={{ marginTop: "22px" }}>
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
        </Row>
        <Row style={{ marginTop: "134px", justifyContent:"center" }}>
          <Col sm="12" md="8" lg="5">
            <div className="section-5-text-container">
              <div className="section-5-text">
                Project should have been around for less than 24 month;
              </div>
              <div className="section-5-text">
                Project or company must have not raised any of non-grant funding
                from any source;
              </div>
              <div className="section-5-text">Ticket price: $ 20.</div>
            </div>
            <div className="section-3-img-icon section-5-img-icon">
              <img
                src={sectionThreeImgIcon}
                alt="section-3-img-icon"
                style={{ paddingRight: "20px" }}
              />
              Seeding Group
            </div>
          </Col>
          <Col sm="0" md="0" lg="1"></Col>
          <Col sm="12" md="8" lg="5" >
            <div className="section-5-text-container2">
              <div className="section-5-text">
              Project should have been around for less than 5 years;
              </div>
              <div className="section-5-text">
              Project or company must raised less than $1,000,000 of non-grant funding from any source;
              </div>
              <div className="section-5-text">Ticket price: $ 50.</div>
            </div>
            <div className="section-3-img-icon">
              <img
                src={sectionThreeImg2Icon}
                alt="section-3-img2-icon"
                style={{ paddingRight: "20px" }}
              />
              Growing Group
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-img2-container">
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
      <Container style={{width:"82%", maxWidth:"1560px"}}>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading3">
              JUDGING
              <div className="section-3-rectangle">
                <img
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
            <div className="section-6-subtitle">
              Participants are required to submit a document explaining the
              following questions as a part of their Round 1 entry: (No more
              than 10 pages)
            </div>
            <div className="section-6-text">
              1. Describe how the Participant meets the eligibility
              requirements; <br></br>
              2. Description of the product or service; (maximum 100 words);{" "}
              <br></br>
              3. Please describe how the idea was born, without disclosing
              proprietary information (maximum 100 words); <br></br>
              4. Please describe the business model – how will the company make
              money? (maximum 100 words) (opt if R&D) <br></br>
              5. Market. Who is your customer? Describe your value proposition:
              the quantifiable benefits your customers will receive in exchange
              for purchasing your products or services. What is the buying
              process and why will they buy it? Analyze the market in terms of
              size, segmentation, large vendors, growth, trends, and regulations
              (if applicable). <br></br>
              6. Distribution. Describe from a sales and marketing perspective
              how you will take your product to market and reach your customers.
              In what ways are you planning to form alliances? How will you
              overcome barriers to entry into the market? Provide a description
              of the value chain of your industry. <br></br>
              7. Competition. Who are your competitors now or in the future?
              Describe your company and product's main competitive advantages.
              If applicable, how will your IP strategy result in sustainable
              competitive advantage? What makes you unique and better? How does
              your competition threaten you? How might competitors react to the
              introduction of your product or service? Include a competitive
              matrix. How will you overcome non-adoption?
              <br></br>
              8. Financial. Describe your business model for revenue generation.
              Use a bottom-up financial model to predict sales. What have you
              spent to date? What funds have been raised? How much money do you
              need and when do you need it? How will you raise any additional
              funds required for your product/service? When will your venture
              become cash-flow positive? What significant assumptions have you
              made and what risks have you identified? <br></br>
            </div>
            <div className="section-6-subtitle">Final Round: Venture Plan</div>
            <div className="section-6-text">
              Up to 10 finalists will present their business idea to the Judges
              on Zoom.
            </div>
            <div className="section-6-subtitle2">
              Final Round Pitch Requirements
            </div>
            <div className="section-6-text">
              Pitch must be In English Participants may use PowerPoint or other
              graphic displays to support their oral presentation. Each
              Participant will be given 10-minutes to present their venture
              plan, followed by a 10-minute question-and-answer session between
              the Participant and the Judges.
            </div>
          </Col>
          <Col sm="12" md="12" lg="12">
            <div className="section-6-img-container">
              <img
                src={sectionSixImg}
                alt="section-6-img"
                style={{ width: "70%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
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
            <div className="section-4-heading3">
              FAQ
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
          <Col sm="12" md="12" lg="6">
            <div className="section-9-text-container">
              <div className="section-9-title">Who can participate?</div>
              <div className="section-9-text">
                OPPOHack welcomes those who are interested in technology and
                innovation and have an interesting project or idea within the
                scope of the challenges proposed. You can compete as an
                individual or as a group.
              </div>
            </div>
            <div className="section-9-text-container">
              <div className="section-9-title section-9-title-spec">
                When and how will I know if I am qualified for the final round?
              </div>
              <div className="section-9-text">
                OPPOHack welcomes those who are interested in technology and
                innovation and have an interesting project or idea within the
                scope of the challenges proposed. You can compete as an
                individual or as a group.
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="6">
            <div className="section-9-text-container">
              <div className="section-9-title">
                Which group should I compete in ?
              </div>
              <div className="section-9-text">
                Upon registration you will need to select one of the two groups
                that you wish to compete in. Join the Seeding Group if your
                project/idea is in a relatively early creative stage ( Eg. no
                prototype or no MVP has been established yet). Join the Growing
                Group if your project already possesses a MVP/Prototype or it is
                in the incubation and acceleration stage. Note that the judging
                criteria is different for each group. Contact us if you are not
                sure about which one is more appropriate for you.
              </div>
            </div>
            <div className="section-9-text-container">
              <div className="section-9-title">How to become a sponsor?</div>
              <div className="section-9-text">
                Due to the large amount of registrations received, the
                preliminary screening will be ongoing from June 1st, 2021 to
                August 1st, 2021. Finalists will receive a confirmation email
                from OPPOHack, inviting them to join the final virtual roadshow.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="section-10-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-10-content">
              <div className="section-10-heading">Organizer</div>
              <div className="section-10-title">
                <div style={{ color: "#3FB24F", fontSize: "22px" }}>Host</div>
                <img
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
                future, and rigorously build loT ecosystem to become a leader in
                a fully connected intelligent world.
              </div>
              <div className="section-10-title2">
                <div style={{ color: "#73E4E1", fontSize: "22px" }}>
                  Event partner
                </div>
                <img
                  src={section10Icon2}
                  alt="section-9-icon2"
                  style={{ paddingLeft: "12px" }}
                />
              </div>
              <div className="section-9-text">
                HackHub is a cloud-base smart competition platform founded by a
                team of hackathon enthusiasts from North America. Since 2016, it
                has hosted competitions from around the world based on themes of
                education, finance, medical care, artificial intelligence,
                blockchain etc. It has successfully gathered world-class
                innovators, designers and outstanding programmers from around
                the globe. Today, HackHub has assisted hundreds of competitions
                from home and abroad.
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
                style={{ width: "70%" }}
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
      <Container className="section-12-container" id="contact-container">
        <Row>
          <Col sm="12" md="12" lg="2" style={{ paddingTop: "20px" }}>
            <img src={section10Icon} alt="section-9-icon" />
          </Col>
          <Col sm="12" md="12" lg="3" style={{ paddingTop: "20px" }}>
            <img src={section12Icon} alt="section-9-icon" />
          </Col>
          <Col sm="12" md="0" lg="2" style={{ paddingTop: "20px" }}></Col>
          <Col sm="12" md="12" lg="2" style={{ paddingTop: "20px" }}>
            <div className="section-12-text">Contact Us</div>
          </Col>
          <Col sm="12" md="12" lg="3" style={{ paddingTop: "20px" }}>
            <a href="mailto:events@hackhub.com" target="_blank" rel="noreferrer">
              <img
                src={emailImg}
                alt="social media-icon"
                style={{
                  paddingLeft: "30px",
                }}
              />
            </a>
            <Router>
              <a href="https://www.facebook.com/hackhubio/" target="_blank" rel="noreferrer">
                <img
                  src={facebookImg}
                  alt="social media-icon"
                  style={{
                    paddingLeft: "30px",
                  }}
                />
              </a>
              <a href="https://twitter.com/hackhubio?lang=en" target="_blank" rel="noreferrer">
                <img
                  src={twitterImg}
                  alt="social media-icon"
                  style={{
                    paddingLeft: "30px",
                  }}
                />
              </a>
              <a href="https://www.instagram.com/hackhub.io/?hl=en" target="_blank" rel="noreferrer">
                <img
                  src={instImg}
                  alt="social media-icon"
                  style={{
                    paddingLeft: "30px",
                  }}
                />
              </a>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default App;
