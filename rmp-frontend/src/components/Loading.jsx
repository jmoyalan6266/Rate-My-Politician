import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Spinner
            animation="border"
            role="status"
            className="mx-auto"
            style={{ display: "flex", alignSelf: "center" }}
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
};

export default Loading;
