import { Row, Col, Card, Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const StateInstanceNews = ({ state }) => {
    const [{ data, loading, error }, refetch] = useAxios(
        `${process.env.REACT_APP_API_URL}/states/${state.name}/news`
    );
    const [index, setIndex] = useState(0);

    return (
        <Container className="m-5">
        <Col>
            <center>
                <h1>News Articles</h1>
            </center>
            <Row>
                <IoIosArrowBack
                    style={{ marginTop: "15rem" }}
                    onClick={() =>
                        index > 0 ? setIndex(index - 1) : null
                    }
                    size="2.5em"
                />
                {data?.articles.slice(index, index + 4).map((article, i) => (
                    <Col style={{width: "10%"}} key={i}>
                        <Card
                            key={i}
                            style={{ width: "100%" }}
                            className="mx-auto m-4"
                        >
                            <center>
                                <Card.Header>
                                    <Link to={`/news/${article.source.name}`}>
                                        <strong>{article.source.name}</strong>
                                    </Link>
                                </Card.Header>

                                <Card.Img src={article.urlToImage} variant="top" />
                                <Card.Body>
                                    <Card.Text className="p-3">
                                        {article.title}
                                    </Card.Text>
                                    <Button as="a" href={article.url} size="sm">
                                        Article Link
                                    </Button>
                                </Card.Body>
                            </center>
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
        </Col>
        </Container>
    );
};

export default StateInstanceNews;
