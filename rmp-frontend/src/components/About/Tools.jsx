import { Container, Row, Card, Button } from "react-bootstrap";
import gitlab from "./images/tools/gitlab.jpg";
import postman from "./images/tools/postman.jpg";
import react from "./images/tools/react.png";
import react_bootstrap from "./images/tools/react_bootstrap.png";
import jupyter from "./images/tools/jupyter.png";
import nivo from "./images/tools/nivo.png";
import aws from "./images/tools/aws.jpg";
import flask from "./images/tools/flask.png";

const Tools = () => {
    return (
        <div>
            <h2>Tools</h2>
            <Container className="my-4">
                <Row sm>
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={gitlab} variant="top" />
                        <Card.Body>
                            <Card.Title>Gitlab</Card.Title>
                            <Card.Text>
                                Repository hosting used for version control.
                            </Card.Text>
                            <Button
                                href="https://gitlab.com/cs-373-group-7/rate-my-politician"
                                size="sm"
                            >
                                Our Repo
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={postman} variant="top" />
                        <Card.Body>
                            <Card.Title>Postman</Card.Title>
                            <Card.Text>
                                REST API design and testing tool.
                            </Card.Text>
                            <Button
                                href="https://documenter.getpostman.com/view/12075941/Tz5jeLVC"
                                size="sm"
                            >
                                Our API docs
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={react} variant="top" />
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                            <Card.Text>
                                Javascript frontend framework.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={react_bootstrap} variant="top" />
                        <Card.Body>
                            <Card.Title>React Bootstrap</Card.Title>
                            <Card.Text>
                                Javascript library for styled components in
                                react.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={jupyter} variant="top" />
                        <Card.Body>
                            <Card.Title>Jupyter Lab</Card.Title>
                            <Card.Text>
                                Jupyter Lab is a web interface for writing
                                Jupyter notebooks, used for API data scraping.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="my-4">
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={nivo} variant="top" />
                        <Card.Body>
                            <Card.Title>Nivo</Card.Title>
                            <Card.Text>
                                Graphing library built with D3.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={aws} variant="top" />
                        <Card.Body>
                            <Card.Title>AWS</Card.Title>
                            <Card.Text>
                                Cloud platform for backend and frontend
                                deployment.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "13rem" }} className="mx-auto">
                        <Card.Img src={flask} variant="top" />
                        <Card.Body>
                            <Card.Title>Flask</Card.Title>
                            <Card.Text>
                                Python backend framework for REST API
                                implementation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default Tools;
