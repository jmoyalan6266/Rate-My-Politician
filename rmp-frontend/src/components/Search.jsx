import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router";
import usePoliticians from "../hooks/usePoliticians";
import useSources from "../hooks/useSources";
import useStates from "../hooks/useStates";
import StateCard from "../components/States/StateCard";
import NewsCard from "../components/News/NewsCard";
import PoliticianCard from "./Politicians/PoliticianCard";
import { useState } from "react";

const Search = () => {
    const { query } = useParams();

    const { allSources } = useSources();
    const { allStates } = useStates();
    const { allPoliticians } = usePoliticians();

    const [dropdown, setDropdown] = useState("All");

    const matchingSources = allSources?.filter((source) =>
        Object.keys(source).some((key) =>
            source[key]?.toString().toLowerCase().includes(query.toLowerCase())
        )
    );

    const matchingStates = allStates?.filter((state) =>
        Object.keys(state).some((key) =>
            state[key]?.toString().toLowerCase().includes(query.toLowerCase())
        )
    );

    const matchingPoliticans = allPoliticians?.filter((pol) =>
        Object.keys(pol).some((key) =>
            pol[key]?.toString().toLowerCase().includes(query.toLowerCase())
        )
    );

    console.log(matchingPoliticans);

    return (
        <Container className="mt-4">
            <center>
                <h1>Search Results for {query}</h1>
                <DropdownButton
                    id="dropdown-basic-button"
                    title={dropdown}
                    className="m-3"
                >
                    <Dropdown.Item onClick={() => setDropdown("All")}>
                        All
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropdown("News Sources")}>
                        News Sources
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropdown("States")}>
                        States
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setDropdown("Politicians")}>
                        Politicians
                    </Dropdown.Item>
                </DropdownButton>
            </center>
            {(dropdown === "All" || dropdown === "News Sources") && matchingSources.length > 0 ? (
                <div>
                    <br></br>
                    <h2>News Sources</h2>
                    <br></br>
                    <Row>
                        {matchingSources.map((source, i) => (
                            <Col key={i} sm="auto" className="mb-4 mx-auto">
                                <NewsCard source={source} query={query} />
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : null}
            {(dropdown === "All" || dropdown === "States") && matchingStates.length > 0 ? (
                <div>
                    <br></br>
                    <h2>State</h2>
                    <br></br>
                    <Row>
                        {matchingStates.map((state, i) => (
                            <Col key={i} sm="auto" className="mb-4 mx-auto">
                                <StateCard state={state} query={query}/>
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : null}
            {(dropdown === "All" || dropdown === "Politicians") && matchingPoliticans.length > 0 ? (
                <div>
                    <br></br>
                    <h2>Politicans</h2>
                    <br></br>
                    <Row>
                        {matchingPoliticans.map((politician, i) => (
                            <Col key={i} sm="auto" className="mb-4 mx-auto">
                                <PoliticianCard politician={politician} query={query} />
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : null}
        </Container>
    );
};

export default Search;
