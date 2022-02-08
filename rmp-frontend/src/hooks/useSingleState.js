import axios from "axios";
import { useEffect, useState } from "react";

const useSingleState = (id) => {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchStates = async () => {
        setIsLoading(true);

        const stateResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/states/${id}`
        );

        const json = stateResponse.data;
        setIsLoading(false);
        setState(json);
    };

    useEffect(() => {
        fetchStates();
    }, []);

    return { state, isLoading, refetch: fetchStates };
};

export default useSingleState;
