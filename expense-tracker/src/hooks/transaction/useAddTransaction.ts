import {useState} from "react";



const useAddTransaction = () => {

    const [state, setState] = useState({
        open: false,
    });

    const handleOpenAddTransaction = () => {
        setState((prevState) => ({
            ...prevState,
            open: true,
        }));
    }

    const handleCloseAddTransaction = () => {

        setState((prevState) => ({
            ...prevState,
            open: false,
        }));
    }

    return {
        state,
        handleOpenAddTransaction,
        handleCloseAddTransaction,
    }
}

export default useAddTransaction;