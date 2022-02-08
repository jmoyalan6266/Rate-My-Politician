import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

const OrderBy = ({ ascending, setAscending, allStates, setAllStates }) => {
    if (ascending) {
        return (
            <MdArrowUpward
                className="my-3"
                size="2rem"
                onClick={() => {
                    setAscending(false);
                    setAllStates(allStates.reverse());
                }}
            />
        );
    } else {
        return (
            <MdArrowDownward
                className="my-3"
                size="2rem"
                onClick={() => {
                    setAscending(true);
                    setAllStates(allStates.reverse());
                }}
            />
        );
    }
};

export default OrderBy;
