import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { numToString, parseElectionMargin, getHighlightedText } from "../../utils";

const StateCard = ({ state, query }) => {
    return (
        <Card style={{ width: "20rem" }} className="h-100">
            <Card.Img variant="top" src={state.map_image_url} />
            <Card.Body>
                <center>
                    <Card.Title>{getHighlightedText(state.name, query)}</Card.Title>
                    <Card.Text>
                        <strong>Population:</strong> {getHighlightedText(numToString(state.population), query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Median Income:</strong> $
                        {getHighlightedText(numToString(state.median_income), query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Poverty Rate:</strong>{" "}
                        {getHighlightedText(Number((state.poverty_rate * 100).toFixed(1)), query)}%
                    </Card.Text>
                    <Card.Text>
                        <strong>2016 Election Margin:</strong>{" "}
                        {parseElectionMargin(state.dem_margin).includes("D") ? (
                            <Badge pill variant="primary">
                                {parseElectionMargin(state.dem_margin)}
                            </Badge>
                        ) : (
                            <Badge pill variant="danger">
                                {parseElectionMargin(state.dem_margin)}
                            </Badge>
                        )}
                    </Card.Text>
                    <Button as={Link} to={`/states/${state.index}`}>
                        More Info
                    </Button>
                </center>
            </Card.Body>
        </Card>
    );
};

export default StateCard;
