import axios from "axios";
import { useEffect, useState } from "react";

const useSinglePolitician = (id) => {
    const [politician, setPolitician] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPoliticians = async () => {
        setLoading(true);

        const politicianResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/politicians/${id}`
        );

        const json = politicianResponse.data;
        setLoading(false);
        setPolitician(json);
    };

    useEffect(() => {
        fetchPoliticians();
    }, []);

    return { politician, loading, refetch: fetchPoliticians };
};

export default useSinglePolitician;