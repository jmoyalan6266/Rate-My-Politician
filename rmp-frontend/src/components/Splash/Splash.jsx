import { Jumbotron, Button, Card, CardDeck, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "./background1.jpeg";
import useSingleSource from "../../hooks/useSingleSource";

const Splash = () => {
    const hStyle = {
        color: "black",
        fontFamily: "courier",
        textAlign: "left",
        fontSize: "350%",
    };
    const hStyle1 = {
        color: "black",
        fontFamily: "courier",
        textAlign: "center",
        fontSize: "300%",
    };
    const msnbc = useSingleSource(74);
    const wsj = useSingleSource(93);
    const dp = useSingleSource(43);

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    height: "100vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <br></br>
                <h1 style={hStyle}>&nbsp; The REAL Truth</h1>
                <h1 style={hStyle}>&nbsp; Behind Your Politician.</h1>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="dark" size="lg" as={Link} to="/states">
                    Find your State
                </Button>{" "}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="dark" size="lg" as={Link} to="/politicians">
                    Find your Politician
                </Button>
            </div>
            <br></br>
            <h1 style={hStyle1}>Popular News Sources to Check Out</h1>
            <Container>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={msnbc.source.logo} />
                        <Card.Body>
                            <center>
                                <Card.Title>{msnbc.source.name}</Card.Title>
                                <Card.Text>
                                    <strong>Based in:</strong> {msnbc.source.city}
                                    {", "} {msnbc.source.state}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Year Founded:</strong>{" "}
                                    {msnbc.source.foundedYear}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Number of Employees:</strong>{" "}
                                    {msnbc.source.employees}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Twitter:</strong> {msnbc.source.twitter}
                                </Card.Text>
                                <Button
                                    variant="dark"
                                    as={Link}
                                    to={`/news/${msnbc.source.index}`}
                                >
                                    More Info
                                </Button>
                            </center>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={wsj.source.logo} />
                        <Card.Body>
                            <center>
                                <Card.Title>{wsj.source.name}</Card.Title>
                                <Card.Text>
                                    <strong>Based in:</strong> {wsj.source.city}
                                    {", "} {wsj.source.state}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Year Founded:</strong>{" "}
                                    {wsj.source.foundedYear}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Number of Employees:</strong>{" "}
                                    {wsj.source.employees}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Twitter:</strong> {wsj.source.twitter}
                                </Card.Text>
                                <Button
                                    variant="dark"
                                    as={Link}
                                    to={`/news/${wsj.source.index}`}
                                >
                                    More Info
                                </Button>
                            </center>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={dp.source.logo} />
                        <Card.Body>
                            <center>
                                <Card.Title>{dp.source.name}</Card.Title>
                                <Card.Text>
                                    <strong>Based in:</strong> {dp.source.city}
                                    {", "} {dp.source.state}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Year Founded:</strong>{" "}
                                    {dp.source.foundedYear}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Number of Employees:</strong>{" "}
                                    {dp.source.employees}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Twitter:</strong> {dp.source.twitter}
                                </Card.Text>
                                <Button
                                    variant="dark"
                                    as={Link}
                                    to={`/news/${dp.source.index}`}
                                >
                                    More Info
                                </Button>
                            </center>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            <br></br>
            <Jumbotron>
                <center>
                    <h1>How well do you know your politician?</h1>
                    <p>
                        In this world filled with an abundance of information, how
                        do we know what to believe and what information is accurate?
                        We hear a lot about fake news and a lot of differing stories
                        about the same people. Our website hopes to shed some light
                        on this and begin to see how different news outlets cover
                        politicians.
                    </p>
                    <p>
                        <Button variant="dark" as={Link} to="/about">
                            Learn more
                        </Button>
                    </p>
                </center>
            </Jumbotron>
        </div>
    );
};

export default Splash;
