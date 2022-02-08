import {
    Container,
    Row,
    Col,
    Image,
    Button,
    Card,
    Jumbotron,
} from "react-bootstrap";
import { useParams } from "react-router";
import useSinglePolitician from "../../hooks/useSinglePolitician";
import useAxios from "axios-hooks";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import dummyHeadshot from "./dummyHeadshot.png";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const PoliticianInstance = () => {
    const { id } = useParams();
    const { politician, loading } = useSinglePolitician(id);
    const politicianState = politician.state;
    const [index, setIndex] = useState(0);

    const [{ data, isloading, error }, refetch] = useAxios(
        `${process.env.REACT_APP_API_URL}/politicians/${politician.name}/news`
    );

    const stateData = useAxios(
        `${process.env.REACT_APP_API_URL}/states/${politicianState}`
    );

    return (
        <Container className="my-4">
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <center>
                        <h1 className="my-4">{politician.name}</h1>
                    </center>
                    <Row>
                        <Image
                            src={
                                politician.photoURL
                                    ? politician.photoURL
                                    : dummyHeadshot
                            }
                            style={{ maxHeight: "12rem" }}
                            className="mx-auto"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = dummyHeadshot;
                            }}
                        />
                    </Row>
                    <Container className="mt-5">
                        <Jumbotron>
                            <Row>
                                <Card className="mx-auto my-2">
                                    <Card.Header>Party:</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>{politician.party}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mx-auto my-2">
                                    <Card.Header>State:</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>{politician.state}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mx-auto my-2">
                                    <Card.Header>Office:</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>{politician.office}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mx-auto my-2">
                                    <Card.Header>Office City:</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>
                                            {politician.office_city}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mx-auto my-2">
                                    <Card.Header>
                                        Number of News Articles:
                                    </Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>{data?.totalResults}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br></br>
                            <Row>
                                <Card className="mx-auto my-2">
                                    <Card.Header>Phone:</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>
                                            {politician.phone_number}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mx-auto my-2">
                                    <Card.Header>Website:</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>
                                            <a href={politician.website}>
                                                {politician.website}
                                            </a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mx-auto my-2">
                                    <Card.Header>Twitter</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>
                                            <TwitterFollowButton
                                                screenName={politician.twitter}
                                                options={{
                                                    height: 100,
                                                    width: 100,
                                                }}
                                            />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mx-auto my-2">
                                    <Card.Header>Facebook</Card.Header>
                                    <Card.Body className="mx-auto">
                                        <Card.Text>{politician.facebook}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Jumbotron>
                    </Container>
                    <br></br>
                    <Row>
                        <Col>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName={politician.twitter}
                                options={{ height: 500, width: 800 }}
                            />
                        </Col>
                        <Col>
                            <br></br>
                            <center>
                                <h1>Learn More About This Politician's State</h1>
                            </center>
                            <br></br>
                            <Row className="my-4">
                                <Col>
                                    <Card
                                        className="ml-auto mr-auto"
                                        style={{ width: "16rem" }}
                                    >
                                        {stateData[0].loading ? (
                                            <Loading />
                                        ) : (
                                            <Card.Img
                                                src={
                                                    stateData[0].data
                                                        ?.state_flag_url
                                                }
                                            />
                                        )}
                                        <Card.Header
                                            as={Link}
                                            to={`/states/${politicianState}`}
                                        >
                                            {politicianState}
                                        </Card.Header>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <center>
                            <h1>News Article Mentions</h1>
                            <Row>
                                <IoIosArrowBack
                                    style={{ marginTop: "15rem" }}
                                    onClick={() =>
                                        index > 0 ? setIndex(index - 1) : null
                                    }
                                    size="2.5em"
                                />
                                {data?.articles
                                    .slice(index, index + 4)
                                    .map((article, i) => (
                                        <Col style={{width: "10%"}} key={i}>
                                            <Card
                                                key={i}
                                                style={{ width: "100%" }}
                                                className="mx-auto m-4"
                                            >
                                                <Card.Header>
                                                    <Link
                                                        to={`/news/${article.source.name}`}
                                                    >
                                                        <strong>
                                                            {article.source.name}
                                                        </strong>
                                                    </Link>
                                                </Card.Header>

                                                <Card.Img
                                                    src={article.urlToImage}
                                                    variant="top"
                                                />
                                                <Card.Body>
                                                    <Card.Text className="p-3">
                                                        {article.title}
                                                    </Card.Text>
                                                    <Button
                                                        as="a"
                                                        href={article.url}
                                                        size="sm"
                                                    >
                                                        Article Link
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                <IoIosArrowForward
                                    style={{ marginTop: "15rem" }}
                                    onClick={() =>
                                        index < 19 ? setIndex(index + 1) : null
                                    }
                                    size="2.5em"
                                />
                            </Row>
                        </center>
                    </Row>
                </div>
            )}
        </Container>
    );
};

export default PoliticianInstance;
