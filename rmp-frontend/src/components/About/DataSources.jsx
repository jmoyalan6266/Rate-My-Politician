import { Card, Container, Row } from "react-bootstrap";
import news_api from "./images/tools/news_api.png";
import google_civic from "./images/tools/google_civic.png";
import twitter from "./images/tools/twitter.jpg";
import data_usa from "./images/tools/data_usa.jpg";
import bigpicture from "./images/tools/bigpicture.jpg";
import civil_services from "./images/tools/civil_services.jpg";

const DataSources = () => {
    return (
        <div>
            <h2>Data Sources</h2>
            <Container className="mt-4">
                <Row sm>
                    <Card
                        as="a"
                        href="https://newsapi.org"
                        style={{
                            width: "12rem",
                        }}
                        className="mx-auto text-decoration-none text-dark"
                    >
                        <Card.Img src={news_api} variant="top" />
                        <Card.Body>
                            <Card.Title>News API</Card.Title>
                            <Card.Text>
                                Used to scrape news sources and show articles.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card
                        as="a"
                        href="https://developers.google.com/civic-information"
                        style={{
                            width: "12rem",
                        }}
                        className="mx-auto text-decoration-none text-dark"
                    >
                        <Card.Img src={google_civic} variant="top" />
                        <Card.Body>
                            <Card.Title>Google Civic API</Card.Title>
                            <Card.Text>
                                Used to scrape data about politicians across
                                states.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card
                        as="a"
                        href="https://bigpicture.io/docs/enrichment/company/"
                        style={{
                            width: "12rem",
                        }}
                        className="mx-auto text-decoration-none text-dark"
                    >
                        <Card.Img src={bigpicture} variant="top" />
                        <Card.Body>
                            <Card.Title>BigPicture Company API</Card.Title>
                            <Card.Text>
                                Used to scrape company data for news sources.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card
                        as="a"
                        href="https://datausa.io/about/api/"
                        style={{
                            width: "12rem",
                        }}
                        className="mx-auto text-decoration-none text-dark"
                    >
                        <Card.Img src={data_usa} variant="top" />
                        <Card.Body>
                            <Card.Title>Data USA API</Card.Title>
                            <Card.Text>
                                Used to scrape states and attribute data.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card
                        as="a"
                        href="https://github.com/CivilServiceUSA/us-states"
                        style={{
                            width: "12rem",
                        }}
                        className="mx-auto text-decoration-none text-dark"
                    >
                        <Card.Img src={civil_services} variant="top" />
                        <Card.Body>
                            <Card.Title>Civil Services</Card.Title>
                            <Card.Text>
                                Used to obtain state flags, maps, and state
                                images.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default DataSources;
