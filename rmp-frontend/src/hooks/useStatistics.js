import axios from "axios";
import { useEffect, useState } from "react";

const useStatistics = () => {
    const [devs, setDevs] = useState();
    const [numCommits, setNumCommits] = useState();
    const [numIssues, setNumIssues] = useState();
    const [loading, setLoading] = useState(false);

    const fetchStatistics = async () => {
        setLoading(true);

        const devsResponse = await axios.get(
            "https://gitlab.com/api/v4/projects/24703940/users?access_token=waNcUDUNAD2mRxCBpkGX"
        );
        let commitsResponse = [];
        let fetch = true;
        let page = 1;
        while (fetch) {
            const response = await axios.get(
                `https://gitlab.com/api/v4/projects/24703940/repository/commits?access_token=waNcUDUNAD2mRxCBpkGX&per_page=100&page=${page}`
            );
            if (response.data.length > 0) {
                commitsResponse = commitsResponse.concat(response.data);
                page++;
            } else {
                fetch = false;
            }
        }
        let issuesResponse = [];
        fetch = true;
        page = 1;
        while (fetch) {
            const response = await axios.get(
                `https://gitlab.com/api/v4/projects/24703940/issues?access_token=waNcUDUNAD2mRxCBpkGX&per_page=100&page=${page}&state=closed`
            );
            if (response.data.length > 0) {
                issuesResponse = issuesResponse.concat(response.data);
                page++;
            } else {
                fetch = false;
            }
        }
        const numCommits = commitsResponse.length;
        const numIssues = issuesResponse.length;
        const json = devsResponse.data.map((dev) => ({
            ...dev,
            commits: commitsResponse.filter(
                (commit) =>
                    dev.name
                        .toLowerCase()
                        .includes(commit.committer_name.toLowerCase()) ||
                    dev.username === commit.author_name
            ).length,
            issues: issuesResponse.filter(
                (issue) =>
                    issue.closed_by?.name
                        .toLowerCase()
                        .includes(dev.name.toLowerCase()) ||
                    dev.username === issue.closed_by?.username
            ).length,
        }));
        setLoading(false);
        setDevs(json);
        setNumCommits(numCommits);
        setNumIssues(numIssues);
    };

    useEffect(() => {
        fetchStatistics();
    }, []);

    return { devs, numCommits, numIssues, loading, refetch: fetchStatistics };
};

export default useStatistics;
