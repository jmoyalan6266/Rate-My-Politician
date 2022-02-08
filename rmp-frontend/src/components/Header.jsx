import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
    const [search, setSearch] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${search}`);
        setSearch("");
    };

    return (
        <Navbar className="justify-content-between">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Navbar.Brand as={Link} to="/">
                    <img className="mt-1" style={{ height: "3rem" }} src={logo} />
                </Navbar.Brand>
                <Nav style={{ alignSelf: 'center' }}>
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/news">
                        News Sources
                    </Nav.Link>
                    <Nav.Link as={Link} to="/states">
                        States
                    </Nav.Link>
                    <Nav.Link as={Link} to="/politicians">
                        Politicians
                    </Nav.Link>
                    <Nav.Link as={Link} to="/visualizations">
                        Visualizations
                    </Nav.Link>
                </Nav>
            </div>
            <Form inline onSubmit={handleSubmit}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <Button variant="outline-info" type="submit">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Header;
