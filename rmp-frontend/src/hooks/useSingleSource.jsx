import axios from "axios";
import { useEffect, useState } from "react";

const useSingleSource = (id) => {
    const [source, setSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSources = async () => {
        setLoading(true);

        const sourceResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/sources/${id}`
        );

        const json = sourceResponse.data;
        setLoading(false);
        setSource(json);
    };

    useEffect(() => {
        fetchSources();
    }, []);

    return { source, loading, refetch: fetchSources };
};

export default useSingleSource;
