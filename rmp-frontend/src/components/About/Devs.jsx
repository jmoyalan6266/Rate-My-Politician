import { Card, Badge, Container, Row, Col } from "react-bootstrap";
import laura from "./images/devs/laura.jpeg";
import kent from "./images/devs/kent.png";
import joseph from "./images/devs/joseph.jpg";
import preeti from "./images/devs/preeti.jpg";
import rachel from "./images/devs/rachel.jpg";

const Devs = ({ devs }) => {
    const images = [laura, kent, joseph, preeti, rachel];
    const bios = [
        "Laura is in her last semester at UT. Senioritis is really taking over her. After graduation, she’ll be moving to the Dallas area for her job and to be close to her family. Until then, she’ll be working on the front end of this project.",
        "I'm a junior Computer Science and Geography major also pursuing a Smart Cities BDP Certificate. I'm from Austin and enjoy learning about Web Development, hiking, and playing music.",
        "Hi I’m Joseph! I'm a junior majoring in Computer Science and Math and want to pursue a job in the world of FinTech. I'm from Plano, Texas and I enjoy gaming, playing volleyball, listening to music, and spending time with my friends in my free time.",
        "Hi! I'm a junior studying Computer Science and pursuing a Business Minor, as well as a Certificate in Applied Statistical Modeling. I'm from Pittsburgh, Pennsylvania, and in my free time, I enjoy photography and watching movies!",
        "I'm a junior who is new to web development. I'm from Houston and I'm an avid reader who is trying to safely knock things off of my Austin bucket list.",
    ];
    const tests = [11, 11, 11, 11, 10];

    return (
        <div>
            <h2 className="mb-3">Developers</h2>
            <Container>
                <Row>
                    {devs.map((dev, i) => (
                        <Col key={i} sm='auto' className='mb-4 mx-auto'>
                            <Card style={{width: '20rem'}}  className='h-100'>
                                <Card.Img
                                    variant="top"
                                    src={images[i]}
                                ></Card.Img>
                                <Card.Title className="p-3 mx-auto">
                                    {dev.name}
                                </Card.Title>
                                <Card.Text className="mx-4 mb-4">
                                    {bios[i]}
                                </Card.Text>
                                <Card.Text className="px-3 pb-2 mx-auto">
                                    Commits:{" "}
                                    <Badge
                                        className="p-2 mb-2"
                                        variant="primary"
                                    >
                                        {dev.commits}
                                    </Badge>
                                    <br />
                                    Issues:{" "}
                                    <Badge
                                        className="p-2 mb-2"
                                        variant="primary"
                                    >
                                        {dev.issues}
                                    </Badge>
                                    <br />
                                    Tests:{" "}
                                    <Badge
                                        className="p-2 mb-2"
                                        variant="primary"
                                    >
                                        {tests[i]}
                                    </Badge>
                                </Card.Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Devs;
