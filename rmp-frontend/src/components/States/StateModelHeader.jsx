import { Row } from "react-bootstrap";
import FilterDropdown from "./FilterDropdown";
import OrderBy from "./OrderBy";
import SortDropdown from "./SortDropdown";

const StateModelHeader = ({
    sortBy,
    setSortBy,
    ascending,
    setAscending,
    filterBy,
    setFilterBy,
    filter,
    setFilter,
    allStates,
    setAllStates,
}) => {
    return (
        <div>
            <center>
                <h1>States</h1>
            </center>
            <Row className="justify-content-center my-2">
                <h3 className="my-3">Sort: </h3>
                <SortDropdown sortBy={sortBy} setSortBy={setSortBy} allStates={allStates} setAllStates={setAllStates} setAscending={setAscending} />
                <OrderBy ascending={ascending} setAscending={setAscending} allStates={allStates} setAllStates={setAllStates} />
                <h3 className="my-3 ml-4">Filter: </h3>
                <FilterDropdown filterBy={filterBy} setFilterBy={setFilterBy} filter={filter} setFilter={setFilter} />
            </Row>
        </div>
    );
};

export default StateModelHeader;
