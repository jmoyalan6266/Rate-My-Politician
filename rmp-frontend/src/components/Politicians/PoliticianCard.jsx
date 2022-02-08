import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import dummyHeadshot from "./dummyHeadshot.png";

const PoliticianCard = ({ politician, query }) => {
    const getHighlightedText = (text, highlight) => {
        // Split on highlight term and include term into parts, ignore case
        if (highlight) {
            const parts = text.toString().split(new RegExp(`(${highlight})`, 'gi'));
            return <span> { parts.map((part, i) => 
                <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'yellow' } : {} }>
                    { part }
                </span>)
            } </span>;
        } else {
            return text;
        }
    };

    return (
        <Card style={{ width: "20rem" }} className="h-100">
            <Card.Img variant="top" src={politician.photoURL ? politician.photoURL : dummyHeadshot} />
            <Card.Body>
                <center>
                    <Card.Title>{getHighlightedText(politician.name, query)}</Card.Title>
                    <Card.Text>
                        <strong>Party: </strong> {getHighlightedText(politician.party, query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>State:</strong> {getHighlightedText(politician.state, query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Office:</strong> {getHighlightedText(politician.office, query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Office City:</strong> {getHighlightedText(politician.office_city, query)}
                    </Card.Text>
                    <Button as={Link} to={`/politicians/${politician.index}`}>
                        More Info
                    </Button>
                </center>
            </Card.Body>
        </Card>
    );
};

export default PoliticianCard;
