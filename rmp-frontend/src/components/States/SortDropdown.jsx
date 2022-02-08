import { DropdownButton, Dropdown } from "react-bootstrap";

const SortDropdown = ({ sortBy, setSortBy, allStates, setAllStates, setAscending }) => {
    const handleNameSort = () => {
        setSortBy("Name");
        setAllStates(allStates.sort((a, b) => (a.name > b.name ? 1 : -1)));
        setAscending(true);
    };

    const handlePopSort = () => {
        setSortBy("Population");
        setAllStates(allStates.sort((a, b) => a.population - b.population));
        setAscending(true);
    };

    const handleIncSort = () => {
        setSortBy("Median Income");
        setAllStates(
            allStates.sort((a, b) => a.median_income - b.median_income)
        );
        setAscending(true);
    };

    const handlePovSort = () => {
        setSortBy("Poverty Rate");
        setAllStates(allStates.sort((a, b) => a.poverty_rate - b.poverty_rate));
        setAscending(true);
    };

    const handleElecSort = () => {
        setSortBy("2016 Election Margin");
        setAllStates(allStates.sort((a, b) => a.dem_margin - b.dem_margin));
        setAscending(true);
    };

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title={sortBy}
            className="m-3"
        >
            <Dropdown.Item onClick={handleNameSort}>Name</Dropdown.Item>
            <Dropdown.Item onClick={handlePopSort}>Population</Dropdown.Item>
            <Dropdown.Item onClick={handleIncSort}>Median Income</Dropdown.Item>
            <Dropdown.Item onClick={handlePovSort}>Poverty Rate</Dropdown.Item>
            <Dropdown.Item onClick={handleElecSort}>
                2016 Election Margin
            </Dropdown.Item>
        </DropdownButton>
    );
};

export default SortDropdown;
