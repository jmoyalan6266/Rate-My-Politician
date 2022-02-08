import { Row, Image, Jumbotron } from "react-bootstrap";
import StateInstanceAttributes from "./StateInstanceAttributes";

const StateInstanceHeader = ({ state }) => {
    const imageType = Math.random() > 0.5 ? "landscape" : "skyline";

    return (
        <div>
            <h1 className="my-4">{state.name}</h1>
            <Jumbotron
                style={{
                    backgroundImage: `url(${
                        imageType === "landscape"
                            ? state.landscape_background_url
                            : state.skyline_background_url
                    })`,
                    height: "100%",
                }}
            >
                <Row>
                    <Image
                        src={state.state_flag_url}
                        style={{ maxHeight: "12rem" }}
                        className="mx-auto"
                    />
                    <Image
                        src={state.state_seal_url}
                        style={{ maxHeight: "12rem" }}
                        className="mx-auto"
                    />
                </Row>
                <StateInstanceAttributes state={state} />
            </Jumbotron>
        </div>
    );
};

export default StateInstanceHeader;
