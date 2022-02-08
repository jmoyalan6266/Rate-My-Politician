import { Table } from "react-bootstrap"

const Stats = ({ numCommits, numIssues }) => {
    return (
        <div>
            <h2>Project Stats</h2>
            <Table className="m-4" bordered striped responsive="xl">
                <tbody>
                    <tr>
                        <td>Commits</td>
                        <td>Issues</td>
                        <td>Tests</td>
                    </tr>
                    <tr>
                        <td>{numCommits}</td>
                        <td>{numIssues}</td>
                        <td>54</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ); 
};

export default Stats;