import { Col, Row, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import dummyHeadshot from "../Politicians/dummyHeadshot.png";
import useAxios from "axios-hooks";
import Loading from "../Loading";

const StateInstancePoliticians = ({ state }) => {
    const governorData = useAxios(
        `${process.env.REACT_APP_API_URL}/politicians/${state.governor_name}`
    );
    const senator1Data = useAxios(
        `${process.env.REACT_APP_API_URL}/politicians/${state.senator1}`
    );
    const senator2Data = useAxios(
        `${process.env.REACT_APP_API_URL}/politicians/${state.senator2}`
    );

    const senators = [senator1Data, senator2Data];
    console.log(senators);
    const senatorOrder = [state.senator1, state.senator2];

    return (
        <Container>
        <Row>
            <Col m={6}>
                <center>
                <h1>Senators</h1>
                <Row className="my-4">
                    {senators.map((senator, i) => (
                        <Col key={i}>
                            <Card>
                                {senator[i].loading ? (
                                    <Loading />
                                ) : (
                                        <Card.Img
                                            src={senator[0].data ?.photoURL}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = dummyHeadshot;
                                            }}
                                        />
                                    )}
                                <Card.Header
                                    as={Link}
                                    to={`/politicians/${senatorOrder[i]}`}
                                >
                                    {senatorOrder[i]}
                                </Card.Header>
                            </Card>
                        </Col>
                    ))}
                </Row>
                </center>
            </Col>
            <Col m={6}>
                <center>
                <h1>Governor</h1>
                <Row className="my-4">
                    <Col>
                        <Card style={{ width: "16rem" }}>
                            {governorData[0].loading ? (
                                <Loading />
                            ) : (
                                    <Card.Img
                                        src={governorData[0].data ?.photoURL}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = dummyHeadshot;
                                        }}
                                    />
                                )}
                            <Card.Header
                                as={Link}
                                to={`/politicians/${state.governor_name}`}
                            >
                                {state.governor_name}
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
                </center>
            </Col>
        </Row>
        </Container>
    );
};

export default StateInstancePoliticians;
