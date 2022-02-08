import { useState, useEffect } from "react";
import {
    Container, Row, Pagination, Dropdown, DropdownButton,
    FormControl,
} from "react-bootstrap";
import useSources from "../../hooks/useSources";
import Loading from "../Loading";
import NewsCard from "./NewsCard";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

const NewsModel = () => {
    const sourcesResponse = useSources();
    const [allSources, setAllSources] = useState([]);
    const loading = sourcesResponse.loading;
    const [sortBy, setSortBy] = useState("Name");
    const [ascending, setAscending] = useState(true);
    const [filterBy, setFilterBy] = useState("Name");
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);

    useEffect(() => {
        setAllSources(sourcesResponse.allSources);
        setNumPages(Math.floor(sourcesResponse.allSources.length / 14));
    }, [sourcesResponse.allSources]);

    const handleNameSort = () => {
        setSortBy("Name");
        setAllSources(allSources.sort((a, b) => (a.name > b.name ? 1 : -1)));
    };

    const handleNumEmployeeSort = () => {
        setSortBy("Number of Employees");
        setAllSources(allSources.sort((a, b) => a.employees - b.employees));
    };

    const handleBasedInSort = () => {
        setSortBy("Based In");
        setAllSources(allSources.sort((a, b) => (a.city > b.city ? 1 : -1)));
    };

    const handleYearFoundedSort = () => {
        setSortBy("Year Founded");
        setAllSources(allSources.sort((a, b) => a.foundedYear - b.foundedYear));
    };

    const handleTwitterSort = () => {
        setSortBy("Twitter");
        setAllSources(allSources.sort((a, b) => (a.twitter > b.twitter ? 1 : -1)));
    };

    return (
        <Container className="my-4">
            <div>
                <center>
                    <h1>News Sources</h1>
                </center>
                <Row className="justify-content-center my-2">
                    <h3 className="my-3">Sort: </h3>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={sortBy}
                        className="m-3"
                    >
                        <Dropdown.Item onClick={handleNameSort}>
                            Name
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleBasedInSort}>
                            Based In
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleYearFoundedSort}>
                            Year Founded
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleNumEmployeeSort}>
                            Number of Employees
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleTwitterSort}>
                            Twitter
                        </Dropdown.Item>
                    </DropdownButton>
                    {ascending ? (
                        <MdArrowDownward
                            className="my-3"
                            size="2rem"
                            onClick={() => {
                                setAscending(false);
                                setAllSources(allSources.reverse());
                            }}
                        />
                    ) : (
                        <MdArrowUpward
                            className="my-3"
                            size="2rem"
                            onClick={() => {
                                setAscending(true);
                                setAllSources(allSources.reverse());
                            }}
                        />
                    )}
                    <h3 className="my-3 ml-4">Filter: </h3>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={filterBy}
                        className="m-3"
                    >
                        <Dropdown.Item onClick={() => setFilterBy("Name")}>
                            Name
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setFilterBy("Based In")}
                        >
                            Based In
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setFilterBy("Year Founded")}
                        >
                            Year Founded
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setFilterBy("Number of Employees")}
                        >
                            Number of Employees
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setFilterBy("Twitter")}
                        >
                            Twitter
                        </Dropdown.Item>
                    </DropdownButton>
                    <FormControl
                        type="text"
                        placeholder="Filter"
                        value={filter}
                        onChange={(event) => setFilter(event.target.value)}
                        className="my-3"
                        style={{ maxWidth: "10rem" }}
                    />
                </Row>
            </div>
            {loading ? (
                <Loading />
            ) : (
                <Row>
                    {allSources
                        .filter((source) => {
                            if (filterBy === "Name") {
                                return (
                                    !filter ||
                                    source.name
                                        .toLowerCase()
                                        .includes(filter.toLowerCase())
                                );
                            } else if (filterBy === "Based In") {
                                return (
                                    !filter ||
                                    source.city
                                        .toLowerCase()
                                        .includes(filter.toLowerCase())
                                );
                            } else if (filterBy === "Year Founded") {
                                return (
                                    source.foundedYear.toString().includes(filter.toLowerCase()));
                            } else if (filterBy === "Number of Employees") {
                                return (
                                    source.employees.toString().includes(filter.toLowerCase()));
                            } else {
                                return (
                                    !filter ||
                                    source.twitter
                                        .toLowerCase()
                                        .includes(filter.toLowerCase())
                                );
                            }
                        })
                        .filter(
                            (source, index) => Math.floor(index / 15) + 1 === page
                        )
                        .map((source, i) => (
                            <div class="col-sm-3" key={i} sm="auto" className="mb-4 mx-auto">
                                <NewsCard source={source} query={filter} />
                            </div>
                        ))}
                </Row>
            )}
            <Row className="justify-content-center mt-2">
                <p>{allSources.length} News Sources Instances</p>
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
        </Container>
    );
};

export default NewsModel;
