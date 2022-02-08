import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useStates from "../../hooks/useStates";
import Loading from "../Loading";
import StateCard from "./StateCard";
import StateModelHeader from "./StateModelHeader";
import StatePagination from "./StatePagination";
import { numToString, parseElectionMargin } from "../../utils";

const StateModel = () => {
    const statesResponse = useStates();
    const [allStates, setAllStates] = useState([]);
    const loading = statesResponse.loading;
    const [sortBy, setSortBy] = useState("Name");
    const [ascending, setAscending] = useState(true);
    const [filterBy, setFilterBy] = useState("Name");
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        setAllStates(statesResponse.allStates);
    }, [statesResponse.allStates]);

    return (
        <Container className="my-4">
            <StateModelHeader
                sortBy={sortBy}
                setSortBy={setSortBy}
                ascending={ascending}
                setAscending={setAscending}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                filter={filter}
                setFilter={setFilter}
                allStates={allStates}
                setAllStates={setAllStates}
            />
            {loading ? (
                <Loading />
            ) : (
                <Row>
                    {allStates
                        .filter((state) => {
                            if (filterBy === "Name") {
                                return (
                                    !filter ||
                                    state.name
                                        .toLowerCase()
                                        .includes(filter.toLowerCase())
                                );
                            } else if (filterBy === "Population") {
                                return numToString(state.population).includes(
                                    filter.toLowerCase()
                                );
                            } else if (filterBy === "Median Income") {
                                return numToString(
                                    state.median_income
                                ).includes(filter.toLowerCase());
                            } else if (filterBy === "Poverty Rate") {
                                return Number(
                                    (state.poverty_rate * 100).toFixed(1)
                                )
                                    .toString()
                                    .includes(filter.toLowerCase());
                            } else {
                                return parseElectionMargin(
                                    state.dem_margin
                                ).includes(filter);
                            }
                        })
                        .filter(
                            (state, index) => Math.floor(index / 9) + 1 === page
                        )
                        .map((state, i) => (
                            <Col key={i} sm="auto" className="mb-4 mx-auto">
                                <StateCard state={state} query={filter} />
                            </Col>
                        ))}
                </Row>
            )}
            <StatePagination allStates={allStates} page={page} setPage={setPage} />
        </Container>
    );
};

export default StateModel;
