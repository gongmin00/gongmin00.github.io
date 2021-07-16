import { Container, Row, Col } from "react-bootstrap";
import sectionThreeRectangle from "../images/section-3-ret.png";
import sectionSixImg from "../images/section-6-img.png";
import { useState } from "react";
const Judging = () => {
  const [showMore, setShowMore] = useState(false);
  if (showMore === false) {
    return (
      <Container style={{ width: "95%", maxWidth: "1560px" }}>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading3">
              JUDGING
              <div className="section-6-rectangle">
                <img
                  className=""
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
            <div className="section-6-subtitle">
              First Round:The Idea & Feasibility
            </div>
            <div className="section-6-text">
              Participants are required to submit a document of no more than 10
              pages containing the following as part of their Round 1 entry:
            </div>
            <div
              onClick={() => {
                setShowMore(true);
              }}
              style={{ color: "#3FB24F", textDecoration: "underline" }}
            >
              show more.
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
                style={{ width: "60%", height: "60%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  if (showMore === true) {
    return (
      <Container style={{ width: "95%", maxWidth: "1560px" }}>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-4-heading3">
              JUDGING
              <div className="section-6-rectangle">
                <img
                  className=""
                  src={sectionThreeRectangle}
                  alt="section-3-rectangle"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
            <div className="section-6-subtitle">
              First Round:The Idea & Feasibility
            </div>
            <div className="section-6-text">
              Participants are required to submit a document of no more than 10
              pages containing the following as part of their Round 1 entry:
            </div>
            <div className="section-6-text">
              A description of how the participant and project meets the
              eligibility requirements; <br></br>A description of the product or
              service (maximum 100 words)；
              <br></br>A description of how the idea was born, without
              disclosing proprietary information (maximum 100 words);<br></br>A
              description of the business model: how will the company make
              money? (maximum 100 words) (opt if R&D) <br></br> <br></br>
              Market - Who is your customer? Describe your value proposition:
              the quantifiable benefits your customers will receive in exchange
              for purchasing your products or services. Where will your
              customers buy your product or service and why will they buy it?
              Analyze the market in terms of size, segmentation, large vendors,
              growth, trends, and regulations (if applicable). Distribution.
              Describe from a sales and marketing perspective how you will take
              your product to market and reach your customers. Will you be
              forming partnerships with other companies? How will you overcome
              barriers to entry into the market? Provide a description of the
              value chain of your industry. <br></br> <br></br>
              Competition - Who are your competitors now or in the future?
              Describe the main competitive advantages of your product or
              company. If applicable, how will your IP strategy result in a
              sustainable competitive advantage? What makes you unique and
              better? What are the main threats from your competitors? How might
              competitors react to the introduction of your product or service?
              Include a competitive matrix. How will you overcome non-adoption?{" "}
              <br></br>
              Financials - Describe your business model for revenue generation.
              Use a bottom-up financial model to predict sales. What have you
              spent to-date? How much funding have you raised? How much money do
              you need and when do you need it? How will you raise any
              additional funds required for your product/service? When will your
              business become cash-flow positive? What significant assumptions
              have you made and what risks have you identified?
              <br></br>
            </div>
            <div
              onClick={() => {
                setShowMore(false);
              }}
              style={{ color: "#3FB24F", textDecoration: "underline" }}
            >
              show less.
            </div>
            <div className="section-6-subtitle">Final Round: Venture Plan</div>
            <div className="section-6-text">
              Up to 10 finalists will present their business idea to the judges
              on Zoom.
            </div>
            <div className="section-6-subtitle2">
              Final Round Pitch Requirements
            </div>
            <div className="section-6-text">
              The pitch must be in English. Participants may use PowerPoint or
              other visual aids to support their oral presentation. Each
              participant will be given 10 minutes to present their business
              plan, followed by a 10minute Q&A session with the judges.
            </div>
          </Col>
          <Col sm="12" md="12" lg="12">
            <div className="section-6-img-container">
              <img
                src={sectionSixImg}
                alt="section-6-img"
                style={{ width: "60%", height: "60%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
};
export default Judging;
