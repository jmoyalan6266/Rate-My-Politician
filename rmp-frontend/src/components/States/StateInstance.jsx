import {
    Container,
    Row,
} from "react-bootstrap";
import { useParams } from "react-router";
import useSingleState from "../../hooks/useSingleState";
import Loading from "../Loading";
import StateInstanceHeader from "./StateInstanceHeader";
import StateInstancePoliticians from "./StateInstancePoliticians";
import StateInstanceNews from "./StateInstanceNews";

const StateInstance = () => {
    const { id } = useParams();
    const { state, isLoading } = useSingleState(id);

    return (
        <Container className="my-4">
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <center>
                        <StateInstanceHeader state={state} />
                    </center>
                    <Row>
                        <StateInstancePoliticians state={state} />
                    </Row>
                    <Row>
                        <StateInstanceNews state={state} />
                    </Row>
                </div>
            )}
        </Container>
    );
};

export default StateInstance;
