import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Row, Col, Jumbotron, Image } from "react-bootstrap";
import useAxios from "axios-hooks";
import { useParams } from "react-router";
import useSingleSource from "../../hooks/useSingleSource";
import Loading from "../Loading";
import dummyHeadshot from "../Politicians/dummyHeadshot.png";
import { TwitterFollowButton } from "react-twitter-embed";

const useStyles = makeStyles({
    root: {
        maxWidth: 1000,
        textAlign: "center",
        align: "center",
    },
    media: {
        height: 300,
    },
    connectionsMedia: {
        height: 400,
        width: 300,
    },
    stateMedia: {
        height: 175,
        width: 255,
    },
    subheader: {
        marginBottom: "0.875em",
        marginTop: "1em",
    },
    description: {
        fontSize: 21,
    },
});

const NewNewsInstance = () => {
    const { id } = useParams();
    const { source, loading } = useSingleSource(id);

    const sourceState = source.state;
    const state = useAxios(
        `${process.env.REACT_APP_API_URL}/states/${sourceState}`
    );
    const governorData = useAxios(
        `${process.env.REACT_APP_API_URL}/politicians/${state[0].data?.governor_name}`
    );
    const senator1Data = useAxios(
        `${process.env.REACT_APP_API_URL}/politicians/${state[0].data?.senator1}`
    );
    const senator2Data = useAxios(
        `${process.env.REACT_APP_API_URL}/politicians/${state[0].data?.senator2}`
    );

    console.log(state);

    const senator1Img = senator1Data[0].data?.photoURL
        ? senator1Data[0].data.photoURL
        : dummyHeadshot;

    const senator2Img = senator2Data[0].data?.photoURL
        ? senator2Data[0].data.photoURL
        : dummyHeadshot;

    const numToString = (num) => {
        return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const classes = useStyles();

    return (
        <div align={"center"}>
            <Card>
                <br></br>
                <Image
                    src={source.logo}
                    style={{ maxHeight: "12rem" }}
                    className="mx-auto"
                />
                <br></br>
                <br></br>
                <br></br>
                <Card className={classes.root}>
                    <CardContent>
                        <h1>{source.name}</h1>
                        <Typography className={classes.description}>
                            {source.description}
                        </Typography>
                        <Jumbotron>
                            <Box display={"flex"}>
                                <Box p={2} flex={"auto"}>
                                    <h3>Based In:</h3>
                                    <h4>
                                        {source.city}
                                        {", "} {source.state}
                                    </h4>
                                    <br></br>
                                    <h3>Year Founded:</h3>
                                    <h4>{source.foundedYear}</h4>
                                    <br></br>
                                    <h3>Number of Employees:</h3>
                                    <h4>{source.employees}</h4>
                                </Box>
                                <Box p={2} flex={"auto"}>
                                    <br></br>
                                    <br></br>
                                    <h3>Company Type:</h3>
                                    <h4>{source.company_type}</h4>
                                    <br></br>
                                    <h3>Company Rank:</h3>
                                    <h4>{source.company_rank}</h4>
                                </Box>
                            </Box>
                            <Box display={"flex"}>
                                <Box p={2} flex={"auto"} textAlign={"center"}>
                                    <h4>Twitter:</h4>
                                    <TwitterFollowButton
                                        screenName={source.twitter}
                                        options={{
                                            height: 100,
                                            width: 100,
                                        }}
                                    />
                                    <br></br>
                                    <h4>Twitter Followers:</h4>
                                    <h5>{source.twitter_followers}</h5>
                                    <br></br>
                                    <h4>Twitter Bio:</h4>
                                    <h5>{source.twitter_bio}</h5>
                                </Box>
                            </Box>
                        </Jumbotron>
                    </CardContent>
                </Card>
                {sourceState === 'District of Columbia' ? (
                    <h3 className="my-5">No Related Info</h3>
                ) : (
                    <Card className={classes.root}>
                        <CardContent>
                            <Box display={"flex"}>
                                <Box p={2} flex={"auto"}>
                                    <h3>Related Politicians</h3>
                                    {state[0].loading ? (
                                        <Loading />
                                    ) : (
                                        <div>
                                            <h4>Senators</h4>
                                            <Row className="my-4">
                                                <Col>
                                                    <Card>
                                                        {senator1Data[0]
                                                            .loading ? (
                                                            <Loading />
                                                        ) : (
                                                            <CardMedia
                                                                className={
                                                                    classes.connectionsMedia
                                                                }
                                                                image={
                                                                    senator1Img
                                                                }
                                                            />
                                                        )}
                                                        <Button
                                                            href={`/politicians/${state[0].data?.senator1}`}
                                                        >
                                                            {
                                                                state[0].data
                                                                    ?.senator1
                                                            }
                                                        </Button>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card>
                                                        {senator2Data[0]
                                                            .loading ? (
                                                            <Loading />
                                                        ) : (
                                                            <CardMedia
                                                                className={
                                                                    classes.connectionsMedia
                                                                }
                                                                image={
                                                                    senator2Img
                                                                }
                                                            />
                                                        )}
                                                        <Button
                                                            href={`/politicians/${state[0].data?.senator2}`}
                                                        >
                                                            {
                                                                state[0].data
                                                                    ?.senator2
                                                            }
                                                        </Button>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <h4>Governor</h4>
                                            <Row className="my-4">
                                                <Col>
                                                    <Card>
                                                        {governorData[0]
                                                            .loading ? (
                                                            <Loading />
                                                        ) : (
                                                            <CardMedia
                                                                className={
                                                                    classes.connectionsMedia
                                                                }
                                                                image={
                                                                    governorData[0]
                                                                        .data
                                                                        ?.photoURL
                                                                        ? governorData[0]
                                                                              .data
                                                                              .photoURL
                                                                        : dummyHeadshot
                                                                }
                                                                onError={(
                                                                    e
                                                                ) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = dummyHeadshot;
                                                                }}
                                                            />
                                                        )}
                                                        <Button
                                                            href={`/politicians/${state[0].data?.governor_name}`}
                                                        >
                                                            {
                                                                state[0].data
                                                                    ?.governor_name
                                                            }
                                                        </Button>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    )}
                                </Box>
                                <Box p={2} flex={"auto"}>
                                    <h3>Related States</h3>
                                    <br></br>
                                    <Row className="my-4">
                                        <Col>
                                            <Card
                                                className="ml-auto mr-auto"
                                                style={{ width: "16rem" }}
                                            >
                                                {state[0].loading ? (
                                                    <Loading />
                                                ) : (
                                                    <CardMedia
                                                        className={
                                                            classes.stateMedia
                                                        }
                                                        image={
                                                            state[0].data
                                                                ?.state_flag_url
                                                        }
                                                    />
                                                )}
                                                <Button
                                                    href={`/states/${sourceState}`}
                                                >
                                                    {sourceState}
                                                </Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                )}
            </Card>
        </div>
    );
};

export default NewNewsInstance;
