import {Container, Row, Col} from "react-bootstrap"
import sectionThreeRectangle from "../images/section-3-ret.png";
import sectionSixImg from "../images/section-6-img.png";
import {useState} from "react"
const Judging = ()=>{
    const [showMore, setShowMore] = useState(false)
    if (showMore===false){
        return(
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
              Participants are required to submit a do cument explaining the
              following questions as a part of their Round 1 entry: (No more
              than 10 pages)
            </div>
            <div onClick={()=>{setShowMore(true)}} style={{color:"#3FB24F", textDecoration:"underline"}}>
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
        )
    }
    if (showMore===true){
        return(
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
              Participants are required to submit a do cument explaining the
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
            <div onClick={()=>{setShowMore(false)}} style={{color:"#3FB24F", textDecoration:"underline"}}>
             show less.
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
        )
    }
    return null
}
export default Judging