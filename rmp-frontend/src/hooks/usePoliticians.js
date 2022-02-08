import axios from "axios";
import { useEffect, useState } from "react";

const usePoliticians = () => {
    const [allPoliticians, setAllPoliticians] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPoliticians = async () => {
        setLoading(true);

        const allPoliticiansResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/politicians`
        );

        const json = allPoliticiansResponse.data;
        setLoading(false);
        setAllPoliticians(json);
    };

    useEffect(() => {
        fetchPoliticians();
    }, []);

    return { allPoliticians, loading, refetch: fetchPoliticians };
};

export default usePoliticians;