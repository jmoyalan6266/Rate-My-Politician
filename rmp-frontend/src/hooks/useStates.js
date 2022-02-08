import axios from "axios";
import { useEffect, useState } from "react";

const useStates = () => {
    const [allStates, setAllStates] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchStates = async () => {
        setLoading(true);

        const allStatesResponse = await axios.get(`${process.env.REACT_APP_API_URL}/states`);

        const json = allStatesResponse.data;
        setLoading(false);
        setAllStates(json);
    };

    useEffect(() => {
        fetchStates();
    }, []);

    return { allStates, loading, refetch: fetchStates };
};

export default useStates;
