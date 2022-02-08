import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ source, query }) => {
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

    const numToString = (num) => {
        return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <Card style={{ width: "12rem" }} className="h-100">
            <Card.Img variant="top" src={source.logo} />
            <div class="card-body d-flex flex-column">
                <center>
                    <Card.Title>{getHighlightedText(source.name, query)}</Card.Title>
                    <Card.Text>
                        <strong>Based in:</strong> {getHighlightedText(source.city, query)}
                        {", "} {getHighlightedText(source.state, query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Year Founded:</strong> {getHighlightedText(source.foundedYear, query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Employees:</strong> {getHighlightedText(numToString(source.employees), query)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Twitter:</strong> {getHighlightedText(source.twitter, query)}
                    </Card.Text>
                    <Link to={`/news/${source.index}`} type="button" class="align-self-end btn btn-md btn-block btn-primary stretched-link" >
                        More Info
                    </Link>
                </center>
            </div>
        </Card>
    );
};

export default NewsCard;
