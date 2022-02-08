import React, { Component, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";
import {
    AddBox,
    ArrowDownward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,
} from "@material-ui/icons";
import usePoliticians from "../../hooks/usePoliticians";
import { Link } from "react-router-dom";
import dummyHeadshot from "./dummyHeadshot.png";
import republicanParty from "./republicanParty.png";
import democraticParty from "./democraticParty.png";
import {
    Button,
} from "react-bootstrap";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
function Politicians() {
    const { allPoliticians, loading } = usePoliticians();
    let history = useHistory();
    const divStyle = {
        position: 'relative',
        display: 'inline',
    };
    return (
        <div
            style={{
                minHeight: "900px",
                margin: "auto",
                paddingTop: "20px",
                width: "80%",
            }}
            className="mb-4"
        >
            <center>
                <h1 className="mb-3 mt-1">Politicians</h1>
            </center>
            <MaterialTable
                icons={tableIcons}
                title="Politicians"
                data={allPoliticians}
                columns={[
                    {
                        title: "",

                        render: (politician) => (
                            <div style={divStyle}>
                                <img src={
                                    politician.party == 'Democratic Party'
                                        ? democraticParty
                                        : politician.party == 'Republican Party'
                                            ? republicanParty
                                            : null
                                }
                                    width="20"
                                    height="20"
                                    style={{position: 'absolute'}}
                                />

                                <img
                                    src={
                                        politician.photoURL
                                            ? politician.photoURL
                                            : dummyHeadshot
                                    }
                                    onError={(e) => {
                                        e.target.onerror = null
                                        e.target.src = dummyHeadshot
                                      }}
                                    class="img-fluid"
                                    style={{ 
                                        width: 20 + "vw"
                                        
                                    }}
                                    width="35%"
                                />
                            </div>
                        )
                    },
                    {
                        title: "Name",

                        field: "name",
                    },
                    {
                        title: "Party",
                        field: "party",
                    },
                    {
                        title: "State",
                        field: "state",
                    },
                    {
                        title: "Office",
                        field: "office",
                    },
                    {
                        title: "Office City",
                        field: "office_city",
                    },
                    {
                        title: "",
                        render: (politician) => (
                            <td>
                                <Button variant="outline-dark"
                                    as={Link}
                                    to={`/politicians/${politician.index}`}
                                    style={ politician.party == 'Democratic Party'
                                    ? { color: "white", background: "blue" }
                                    : politician.party == 'Republican Party'
                                        ? { color: "white", background: "red" }
                                        : { color: "black", background: "white" }}
                                >
                                    More Info
                                </Button>
                            </td>
                        ),
                    },
                ]}
                options={{
                    //Link to instance page
                    onRowClick: (rowData) => {
                        history.push("/politicians/" + rowData[0]);
                    },
                    sorting: true,
                    filtering: true,
                    showTitle: false,
                    rowStyle: (x) => {
                        if (x.tableData.id % 2) {
                            return { backgroundColor: "#f2f2f2" };
                        }
                    },
                    pageSize: 10,
                    pageSizeOptions: [10, 20, 50],
                    headerStyle: {
                        backgroundColor: "#6797cf",
                        fontSize: 16,
                    },
                }}
            />
        </div>
    );
}
export default Politicians;
