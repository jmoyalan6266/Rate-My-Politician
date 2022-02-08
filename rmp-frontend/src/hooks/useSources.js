import axios from "axios";
import { useEffect, useState } from "react";

const useSources = () => {
    const [allSources, setAllSources] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSources = async () => {
        setLoading(true);

        const allSourcesResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/sources`
        );

        const json = allSourcesResponse.data;
        setLoading(false);
        setAllSources(json);
    };

    useEffect(() => {
        fetchSources();
    }, []);

    return { allSources, loading, refetch: fetchSources };
};

export default useSources;