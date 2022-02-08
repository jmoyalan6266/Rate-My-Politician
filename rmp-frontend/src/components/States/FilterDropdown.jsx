import { DropdownButton, Dropdown, FormControl } from "react-bootstrap";

const FilterDropdown = ({ filterBy, setFilterBy, filter, setFilter }) => {
    return (
        <>
            <DropdownButton
                id="dropdown-basic-button"
                title={filterBy}
                className="m-3"
            >
                <Dropdown.Item onClick={() => setFilterBy("Name")}>
                    Name
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterBy("Population")}>
                    Population
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterBy("Median Income")}>
                    Median Income
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterBy("Poverty Rate")}>
                    Poverty Rate
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => setFilterBy("2016 Election Margin")}
                >
                    2016 Election Margin
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
        </>
    );
};

export default FilterDropdown;
