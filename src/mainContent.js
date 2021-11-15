import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileImg from "./images/profile-img.png";
import GatsbyIcon from "./images/gatsbyjs.svg";
import GatsbyIcon2 from "./images/gatsbyjs2.svg";
import ReduxIcon from "./images/redux.svg";
import JqueryIcon from "./images/jquery.svg";
import ExpressIcon from "./images/expressjs.svg";
import ContentfulIcon from "./images/contentful.svg";
import ContentfulIcon2 from "./images/contentful2.svg";
import NetlifyIcon from "./images/netlify.svg";
import NetlifyIcon2 from "./images/netlify2.svg";
import FirebaseIcon from "./images/firebase.svg";
import MongoDBIcon from "./images/mongodb.svg";
import BootstrapIcon from "./images/bootstrap.svg";
import BootstrapIcon2 from "./images/bootstrap2.svg";
import SnowgooseImg from "./images/snowgoose.png";
import Guaranti from "./images/guaranti.png";
import Oppohack from "./images/Oppohack.png";
import ReactIcon from "./images/reactjs.svg";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3,
  FaNode,
  FaWordpress,
  FaFigma,
  FaShopify,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import Forestcure from "./images/forestcure.png"
import Deconova from "./images/deconova.png"
import Uma from "./images/uma.png"
import MarkusJ from "./images/markus.png"
import Cotini from "./images/cotini.png"
import Azure from "./images/azure.png"
import Westernstar from "./images/westernstar.png"
const MainContent = () => {
  const contactEmail = (
    <a href={`mailto:gongmin00@gmail.com`} style={{ color: "#E76F51" }}>
      email
    </a>
  );
  const ecomData =[
    {
      name:"FORESTCURE",
      url:"https://www.forestcure.com/",
      img:`${Forestcure}`
    },
    {
      name:"DECO NOVA",
      url:"https://deconova.ca/",
      img:`${Deconova}`
    },
    {
      name:"UMA SUSHI",
      url:"https://umasushi.ca/",
      img:`${Uma}`
    },
    {
      name:"Markus J",
      url:"https://markusj.ca/",
      img:`${MarkusJ}`
    },
    {
      name:"COTINI TISSUE",
      url:"https://cotini.ca/",
      img:`${Cotini}`
    },
    {
      name:"AZURE OUTDOORS",
      url:"https://azureoutdoors.com/",
      img:`${Azure}`
    },
    {
      name:"WESTERN STAR",
      url:"https://westernstarresource.com/",
      img:`${Westernstar}`
    },
  ]
  return (
    <div className="content-container">
      <div className="section-1">
        <div className="section-1-placeholder"></div>
        <Container className="section-1-content">
          <Row>
            <Col sm="12" md="12" lg="12">
              <div>
                <div className="section-1-title">
                  <div className="section-1-maintitle-container">
                    {/* <div className="main-title1">The</div> */}
                    <Row className="main-title2">
                      <div className="main-title2-item1">Web Developer </div>
                      <div className="main-title2-item2">&</div>
                      <div className="main-title2-item3">Bio-hacker</div>
                      <div
                        className="section-1-paragraph"
                        style={{ marginTop: "20px", textAlign: "center" }}
                      >
                        I write clean code and love to learn new technique
                      </div>
                    </Row>
                    <div className="main-title1">
                      <img
                        src={ProfileImg}
                        alt="profile-img"
                        style={{ width: "36%" }}
                      />
                    </div>
                    <div className="main-title1">
                      Hello World! My name is Min Gong, Nice to Meet You
                    </div>
                  </div>
                  <div className="section-1-paragraph">
                    I am a front-end Web developer and WordPress expert with
                    3-years' experience. Welcome to my small place and feel free
                    to explore here. I have helped many individuals and
                    companies building their responsive web apps for business
                    uses. I am currently looking for font-end developer
                    opportunity. If you have any thoughts or ideas about my
                    works please feel free to contact me
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="section-1-end"></div>
      </div>
      <div className="section-2-container">
        <Container className="section-2-content">
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="section-2-heading">
                <div className="section-2-heading-item1">My Core Skills</div>
                <div
                  className="section-2-heading-item2"
                  style={{ paddingLeft: "10px" }}
                >
                  Lie Here
                </div>
              </div>
              <div className="section-2-paragraph">
                Coding web app from scratch is like building a house. You need
                all kind of tools and I love to try new dev technique.
              </div>
            </Col>
          </Row>
          <Row className="section-2-icons">
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">React</div>
              <div className="section-2-icon-img-container">
                <FaReact
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Redux</div>
              <div className="section-2-icon-img-container">
                <img
                  src={ReduxIcon}
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                  alt="redux svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">GatsbyJS</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                  src={GatsbyIcon}
                  alt="gatsbyJs svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">HTML</div>
              <div className="section-2-icon-img-container">
                <FaHtml5
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">JavaScript</div>
              <div className="section-2-icon-img-container">
                <FaJs
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">jQuery</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                  src={JqueryIcon}
                  alt="jQuery svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">CSS</div>
              <div className="section-2-icon-img-container">
                <FaCss3
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Node.js</div>
              <div className="section-2-icon-img-container">
                <FaNode
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Express.js</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "5rem", fill: "#D3F3EE" }}
                  src={ExpressIcon}
                  alt="expressJs svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">WordPress</div>
              <div className="section-2-icon-img-container">
                <FaWordpress
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Contentful</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "5rem", fill: "#D3F3EE" }}
                  src={ContentfulIcon}
                  alt="contentful svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">AWS</div>
              <div className="section-2-icon-img-container">
                <FaAws
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Netlify</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "5rem", fill: "#D3F3EE" }}
                  src={NetlifyIcon}
                  alt="netlify svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Github</div>
              <div className="section-2-icon-img-container">
                <FaGithub
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Firebase</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "5rem", fill: "#D3F3EE" }}
                  src={FirebaseIcon}
                  alt="firebase svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">MongoDB</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "5rem", fill: "#D3F3EE" }}
                  src={MongoDBIcon}
                  alt="mongoDB svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Bootstrap</div>
              <div className="section-2-icon-img-container">
                <img
                  style={{ height: "3rem", width: "5rem", fill: "#D3F3EE" }}
                  src={BootstrapIcon}
                  alt="bootstrap svg"
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Figma</div>
              <div className="section-2-icon-img-container">
                <FaFigma
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="2"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text">Shopify</div>
              <div className="section-2-icon-img-container">
                <FaShopify
                  style={{ height: "3rem", width: "3rem", fill: "#D3F3EE" }}
                />
              </div>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="3"
              lg="10"
              className="section-2-icons-container"
            >
              <div className="section-2-icon-text"></div>
              <div className="section-2-icon-img-container"></div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container id="section-10-portfolios" className="section-10-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-10-content">
              <div className="section-10-heading">PORTFOLIOS</div>
              <div className="section-9-text">
                Here are projects I've recently coded before. Please{" "}
                {contactEmail} me for more detail
              </div>
              <Container className="section-10-card-container">
                <Row>
                  <Col sm="12" md="12" lg="12">
                    <Card className="section-10-card-content">
                      <Row>
                        <Col sm="6" md="6" lg="6">
                          <Card.Img variant="top" src={SnowgooseImg} />
                        </Col>
                        <Col sm="6" md="6" lg="6">
                          <Card.Body>
                            <Card.Title className="section-10-card-title">
                              SnowGoose Media
                            </Card.Title>
                            <Card.Text className="section-10-card-txt">
                              Tech Stack
                            </Card.Text>
                            <Card.Text className="section-10-card-txt">
                              <img
                                style={{
                                  height: "3rem",
                                  width: "5rem",
                                  fill: "#264653 ",
                                }}
                                src={GatsbyIcon2}
                                alt="gatsbyJs svg"
                              />
                              <img
                                style={{
                                  height: "5rem",
                                  width: "7rem",
                                  fill: "#264653 ",
                                }}
                                src={ContentfulIcon2}
                                alt="contentful svg"
                              />
                              <img
                                style={{
                                  height: "3rem",
                                  width: "5rem",
                                  fill: "#264653 ",
                                }}
                                src={NetlifyIcon2}
                                alt="netlify svg"
                              />
                            </Card.Text>
                            <a
                              href="https://sgc-media.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Button
                                className="section-10-card-btn"
                                variant="primary"
                              >
                                View Site
                              </Button>
                            </a>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
              <Container className="section-10-card-container">
                <Row>
                  <Col sm="12" md="12" lg="12">
                    <Card className="section-10-card-content">
                      <Row>
                        <Col sm="6" md="6" lg="6">
                          <Card.Img variant="top" src={Guaranti} />
                        </Col>
                        <Col sm="6" md="6" lg="6">
                          <Card.Body>
                            <Card.Title className="section-10-card-title">
                              Guaranti
                            </Card.Title>
                            <Card.Text className="section-10-card-txt">
                              Tech Stack
                            </Card.Text>
                            <Card.Text className="section-10-card-txt">
                              <img
                                style={{
                                  height: "3rem",
                                  width: "5rem",
                                  fill: "#264653 ",
                                }}
                                src={GatsbyIcon2}
                                alt="gatsbyJs svg"
                              />
                              <img
                                style={{
                                  height: "5rem",
                                  width: "7rem",
                                  fill: "#264653 ",
                                }}
                                src={ContentfulIcon2}
                                alt="contentful svg"
                              />
                              <img
                                style={{
                                  height: "3rem",
                                  width: "5rem",
                                  fill: "#264653 ",
                                }}
                                src={NetlifyIcon2}
                                alt="netlify svg"
                              />
                            </Card.Text>
                            <a
                              href="https://guaranti.ca/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Button
                                className="section-10-card-btn"
                                variant="primary"
                              >
                                View Site
                              </Button>
                            </a>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
              <Container className="section-10-card-container">
                <Row>
                  <Col sm="12" md="12" lg="12">
                    <Card className="section-10-card-content">
                      <Row>
                        <Col sm="6" md="6" lg="6">
                          <Card.Img variant="top" src={Oppohack} />
                        </Col>
                        <Col sm="6" md="6" lg="6">
                          <Card.Body>
                            <Card.Title className="section-10-card-title">
                              OppoHack
                            </Card.Title>
                            <Card.Text className="section-10-card-txt">
                              Tech Stack
                            </Card.Text>
                            <Card.Text className="section-10-card-txt">
                              <img
                                style={{
                                  height: "3rem",
                                  width: "5rem",
                                  fill: "#264653 ",
                                }}
                                src={ReactIcon}
                                alt="reactJs svg"
                              />
                              <img
                                style={{
                                  height: "3rem",
                                  width: "5rem",
                                  fill: "#264653 ",
                                }}
                                src={BootstrapIcon2}
                                alt="bootstrap svg"
                              />
                            </Card.Text>
                            <a
                              href="https://oppohack.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Button
                                className="section-10-card-btn"
                                variant="primary"
                              >
                                View Site
                              </Button>
                            </a>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="section-10-card-container">
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className="section-10-heading">E-commerce Web Apps</div>
            <div className="section-9-text">
              Here come more e-commerce websites projects built with WordPress
              and Shopify:
            </div>
            <div className="section-10-subIcon">
              <FaWordpress
                style={{ height: "3rem", width: "3rem", fill: "#264653" }}
              />
              <FaShopify
                style={{ height: "3rem", width: "3rem", fill: "#264653" }}
              />
            </div>
            <Container>
              <Row>
              {ecomData.map(item=>(
                <Col sm="12" md="4" lg="4" style={{padding:"15px"}}>
                  <Card className="section-10-card-content">
                    <Card.Img variant="top" src={item.img} />
                    <Card.ImgOverlay className="section-10-card-imageoverlay">
                      <Card.Title className="section-10-card-txt2" style={{color:"#264653"}}>{item.name}</Card.Title>
                      <Card.Text className="section-10-card-txt2">
                      <a
                        className="section-10-card-btn-container"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className="section-10-card-btn"
                          variant="primary"
                        >
                          View Site
                        </Button>
                      </a>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
                
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MainContent;
