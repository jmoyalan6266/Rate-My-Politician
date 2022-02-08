import { Row, Image, Container, Card, Badge } from "react-bootstrap";
import twitter from "./twitter_logo.png";
import { numToString, parseElectionMargin } from "../../utils";

import { Link } from "react-router-dom";

const StateInstanceAttributes = ({ state }) => {
    return (
        <Container className="mt-5">
            <Row>
                <Card className="mx-auto m-3">
                    <Card.Header>Median Property Value</Card.Header>
                    <Card.Body className="mx-auto">
                        <Card.Text>
                            ${numToString(state.property_value)}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-auto m-3">
                    <Card.Header>Median Age</Card.Header>
                    <Card.Body className="mx-auto">
                        <Card.Text>{state.median_age}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-auto m-3">
                    <Card.Header>Number of US Representatives</Card.Header>
                    <Card.Body className="mx-auto">
                        {state.num_representatives}
                    </Card.Body>
                </Card>
                <Card className="mx-auto m-3">
                    <Card.Header>2016 Election Margin</Card.Header>
                    <Card.Body className="mx-auto">
                        {parseElectionMargin(state.dem_margin).includes("D") ? (
                            <Badge pill variant="primary">
                                {parseElectionMargin(state.dem_margin)}
                            </Badge>
                        ) : (
                            <Badge pill variant="danger">
                                {parseElectionMargin(state.dem_margin)}
                            </Badge>
                        )}
                    </Card.Body>
                </Card>
                <Card className="mx-auto m-3">
                    <Card.Header>Chronically Homeless Individuals</Card.Header>
                    <Card.Body className="mx-auto">
                        {numToString(state.chronically_homeless)}
                    </Card.Body>
                </Card>
                <Card className="mx-auto m-3">
                    <Card.Header>Diabetes Prevalence</Card.Header>
                    <Card.Body className="mx-auto">
                        {Number((state.diabetes_prevalence * 100).toFixed(1))}%
                    </Card.Body>
                </Card>
                <Card className="mx-auto m-3">
                    <Card.Header>Twitter</Card.Header>
                    <Card.Body className="mx-auto">
                        <a href={state.twitter}>
                            <Image
                                src={twitter}
                                style={{ maxHeight: "1.5rem" }}
                            />
                        </a>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default StateInstanceAttributes;
