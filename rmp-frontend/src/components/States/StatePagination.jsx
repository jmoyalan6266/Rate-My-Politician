import { Row, Pagination } from "react-bootstrap";

const StatePagination = ({ allStates, page, setPage }) => {
    const numPages = Math.floor(allStates.length / 8);

    return (
        <div>
            <Row className="justify-content-center mt-2">
                <p>{allStates.length} State Instances</p>
            </Row>
            <Row className="justify-content-center mt-4">
                <Pagination>
                    <Pagination.First
                        onClick={() => {
                            setPage(1);
                        }}
                    />
                    <Pagination.Prev
                        onClick={() => {
                            page !== 1 ? setPage(page - 1) : setPage(page);
                        }}
                    />
                    {Array(numPages)
                        .fill()
                        .map((pageNum, i) => (
                            <Pagination.Item
                                key={i}
                                active={page === i + 1}
                                onClick={() => {
                                    setPage(i + 1);
                                }}
                            >
                                {i + 1}
                            </Pagination.Item>
                        ))}
                    <Pagination.Next
                        onClick={() => {
                            page !== numPages
                                ? setPage(page + 1)
                                : setPage(page);
                        }}
                    />
                    <Pagination.Last onClick={() => setPage(numPages)} />
                </Pagination>
            </Row>
        </div>
    );
};

export default StatePagination;
